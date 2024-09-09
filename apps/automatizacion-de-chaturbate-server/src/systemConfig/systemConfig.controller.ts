import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SystemConfigService } from "./systemConfig.service";
import { SystemConfigControllerBase } from "./base/systemConfig.controller.base";

@swagger.ApiTags("systemConfigs")
@common.Controller("systemConfigs")
export class SystemConfigController extends SystemConfigControllerBase {
  constructor(
    protected readonly service: SystemConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
