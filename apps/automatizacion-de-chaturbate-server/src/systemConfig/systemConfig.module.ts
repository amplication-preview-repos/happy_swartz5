import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SystemConfigModuleBase } from "./base/systemConfig.module.base";
import { SystemConfigService } from "./systemConfig.service";
import { SystemConfigController } from "./systemConfig.controller";
import { SystemConfigResolver } from "./systemConfig.resolver";

@Module({
  imports: [SystemConfigModuleBase, forwardRef(() => AuthModule)],
  controllers: [SystemConfigController],
  providers: [SystemConfigService, SystemConfigResolver],
  exports: [SystemConfigService],
})
export class SystemConfigModule {}
