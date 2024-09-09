import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecaptchasModuleBase } from "./base/recaptchas.module.base";
import { RecaptchasService } from "./recaptchas.service";
import { RecaptchasController } from "./recaptchas.controller";
import { RecaptchasResolver } from "./recaptchas.resolver";

@Module({
  imports: [RecaptchasModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecaptchasController],
  providers: [RecaptchasService, RecaptchasResolver],
  exports: [RecaptchasService],
})
export class RecaptchasModule {}
