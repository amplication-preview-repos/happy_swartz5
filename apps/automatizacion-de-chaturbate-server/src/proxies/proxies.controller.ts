import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProxiesService } from "./proxies.service";
import { ProxiesControllerBase } from "./base/proxies.controller.base";

@swagger.ApiTags("proxies")
@common.Controller("proxies")
export class ProxiesController extends ProxiesControllerBase {
  constructor(
    protected readonly service: ProxiesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
