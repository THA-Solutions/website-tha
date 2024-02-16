import { Injectable } from '@nestjs/common';

import { Role } from './enums';

interface IsAuthorizedParams {
  currentRole: Role;
  requiredRole: Role;
}

@Injectable()
export class RoleService {
  private hierarchy: Map<Role, number> = new Map();

  constructor() {
    this.buildRoles([
      Role.GUEST,
      Role.USER,
      Role.CUSTOMER,
      Role.SUPPLIER,
      Role.INTEGRATOR,
      Role.ADMIN
    ]);
  }

  private buildRoles(roles: Role[]) {
    roles.forEach((role, index) => {
      this.hierarchy.set(role, index + 1); // Começa em 1 para garantir que cada papel tenha uma prioridade única
    });
  }

  public isAuthorized({ currentRole, requiredRole }: IsAuthorizedParams) {
    const priorityCurrentRole = this.hierarchy.get(currentRole);
    const priorityRequiredRole = this.hierarchy.get(requiredRole);

    return (
      priorityCurrentRole !== undefined &&
      priorityRequiredRole !== undefined &&
      priorityCurrentRole >= priorityRequiredRole
    );
  }
}
