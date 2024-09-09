import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecaptchasServiceBase } from "./base/recaptchas.service.base";

@Injectable()
export class RecaptchasService extends RecaptchasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
