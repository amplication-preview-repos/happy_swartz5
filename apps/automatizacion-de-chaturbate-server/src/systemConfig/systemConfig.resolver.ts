import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SystemConfigResolverBase } from "./base/systemConfig.resolver.base";
import { SystemConfig } from "./base/SystemConfig";
import { SystemConfigService } from "./systemConfig.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SystemConfig)
export class SystemConfigResolver extends SystemConfigResolverBase {
  constructor(
    protected readonly service: SystemConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
