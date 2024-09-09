import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StreamsModuleBase } from "./base/streams.module.base";
import { StreamsService } from "./streams.service";
import { StreamsController } from "./streams.controller";
import { StreamsResolver } from "./streams.resolver";

@Module({
  imports: [StreamsModuleBase, forwardRef(() => AuthModule)],
  controllers: [StreamsController],
  providers: [StreamsService, StreamsResolver],
  exports: [StreamsService],
})
export class StreamsModule {}
