import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StreamsService } from "./streams.service";
import { StreamsControllerBase } from "./base/streams.controller.base";

@swagger.ApiTags("streams")
@common.Controller("streams")
export class StreamsController extends StreamsControllerBase {
  constructor(
    protected readonly service: StreamsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
