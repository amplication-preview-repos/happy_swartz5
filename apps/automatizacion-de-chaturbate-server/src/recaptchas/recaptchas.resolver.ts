import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RecaptchasResolverBase } from "./base/recaptchas.resolver.base";
import { Recaptchas } from "./base/Recaptchas";
import { RecaptchasService } from "./recaptchas.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Recaptchas)
export class RecaptchasResolver extends RecaptchasResolverBase {
  constructor(
    protected readonly service: RecaptchasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
