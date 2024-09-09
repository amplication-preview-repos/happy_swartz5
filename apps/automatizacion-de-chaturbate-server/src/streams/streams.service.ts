import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StreamsServiceBase } from "./base/streams.service.base";

@Injectable()
export class StreamsService extends StreamsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
