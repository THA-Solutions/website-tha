import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY, Roles } from './decorators/roles.decorator';
import { Role } from './roles.enum';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  matchRoles(roles: Role[], userRoles: Role[]): boolean {
    return roles.some((role) => role === userRoles[0]);
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      ROLES_KEY,
      context.getHandler()
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
<<<<<<< HEAD

    return requiredRoles.some((role)=> user.role?.includes(role))
=======
    console.log(user, 'user');
    return requiredRoles.some((role) => user.role?.includes(role));
>>>>>>> 756ae000d12787f07c0e61ba37c715287d7fa3ba
  }
}
