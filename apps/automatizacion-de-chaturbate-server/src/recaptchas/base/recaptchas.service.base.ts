/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Recaptchas as PrismaRecaptchas } from "@prisma/client";

export class RecaptchasServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RecaptchasCountArgs, "select">
  ): Promise<number> {
    return this.prisma.recaptchas.count(args);
  }

  async recaptchasItems(
    args: Prisma.RecaptchasFindManyArgs
  ): Promise<PrismaRecaptchas[]> {
    return this.prisma.recaptchas.findMany(args);
  }
  async recaptchas(
    args: Prisma.RecaptchasFindUniqueArgs
  ): Promise<PrismaRecaptchas | null> {
    return this.prisma.recaptchas.findUnique(args);
  }
  async createRecaptchas(
    args: Prisma.RecaptchasCreateArgs
  ): Promise<PrismaRecaptchas> {
    return this.prisma.recaptchas.create(args);
  }
  async updateRecaptchas(
    args: Prisma.RecaptchasUpdateArgs
  ): Promise<PrismaRecaptchas> {
    return this.prisma.recaptchas.update(args);
  }
  async deleteRecaptchas(
    args: Prisma.RecaptchasDeleteArgs
  ): Promise<PrismaRecaptchas> {
    return this.prisma.recaptchas.delete(args);
  }
}
