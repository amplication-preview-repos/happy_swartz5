import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProxiesModuleBase } from "./base/proxies.module.base";
import { ProxiesService } from "./proxies.service";
import { ProxiesController } from "./proxies.controller";
import { ProxiesResolver } from "./proxies.resolver";

@Module({
  imports: [ProxiesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProxiesController],
  providers: [ProxiesService, ProxiesResolver],
  exports: [ProxiesService],
})
export class ProxiesModule {}
