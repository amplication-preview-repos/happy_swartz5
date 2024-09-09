import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecaptchasService } from "./recaptchas.service";
import { RecaptchasControllerBase } from "./base/recaptchas.controller.base";

@swagger.ApiTags("recaptchas")
@common.Controller("recaptchas")
export class RecaptchasController extends RecaptchasControllerBase {
  constructor(
    protected readonly service: RecaptchasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
