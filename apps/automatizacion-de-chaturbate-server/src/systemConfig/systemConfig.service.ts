import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemConfigServiceBase } from "./base/systemConfig.service.base";

@Injectable()
export class SystemConfigService extends SystemConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
