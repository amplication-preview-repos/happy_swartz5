import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProxiesServiceBase } from "./base/proxies.service.base";

@Injectable()
export class ProxiesService extends ProxiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
