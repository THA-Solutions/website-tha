import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { IS_PUBLIC_KEY } from './decorators/public.decorator';
import { Role } from './enums';
import { ROLE_KEY } from './decorators/role.decorator';
import { RoleService } from './role.service';

export class TokenDto {
  id: string;
  role: Role;
}

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector, private roleService: RoleService) {}
  async canActivate(context: ExecutionContext) {
    if (
      this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass()
      ])
    ) {
      return true;
    }

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLE_KEY, [
      context.getHandler(),
      context.getClass()
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    let role = this.extractTokenFromHeader(request);

    if (role == 'null') {
      role = 'guest';
    }

    const hasRole = requiredRoles.some((reqRole) =>
      reqRole.includes(role as Role)
    );
    if (!hasRole) {
      return false;
    }

    for (const requiredRole of requiredRoles) {
      const result = this.roleService.isAuthorized({
        currentRole: (role as Role) || Role.GUEST,
        requiredRole: requiredRole
      });

      if (result) {
        return true;
      }
    }
    return false;
  }

  private extractTokenFromHeader(request: any): string {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
