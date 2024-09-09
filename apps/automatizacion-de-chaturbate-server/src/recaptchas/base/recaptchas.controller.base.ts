/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RecaptchasService } from "../recaptchas.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RecaptchasCreateInput } from "./RecaptchasCreateInput";
import { Recaptchas } from "./Recaptchas";
import { RecaptchasFindManyArgs } from "./RecaptchasFindManyArgs";
import { RecaptchasWhereUniqueInput } from "./RecaptchasWhereUniqueInput";
import { RecaptchasUpdateInput } from "./RecaptchasUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RecaptchasControllerBase {
  constructor(
    protected readonly service: RecaptchasService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Recaptchas })
  @nestAccessControl.UseRoles({
    resource: "Recaptchas",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRecaptchas(
    @common.Body() data: RecaptchasCreateInput
  ): Promise<Recaptchas> {
    return await this.service.createRecaptchas({
      data: data,
      select: {
        createdAt: true,
        id: true,
        isSuccess: true,
        response: true,
        siteKey: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Recaptchas] })
  @ApiNestedQuery(RecaptchasFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Recaptchas",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async recaptchasItems(@common.Req() request: Request): Promise<Recaptchas[]> {
    const args = plainToClass(RecaptchasFindManyArgs, request.query);
    return this.service.recaptchasItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        isSuccess: true,
        response: true,
        siteKey: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Recaptchas })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Recaptchas",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async recaptchas(
    @common.Param() params: RecaptchasWhereUniqueInput
  ): Promise<Recaptchas | null> {
    const result = await this.service.recaptchas({
      where: params,
      select: {
        createdAt: true,
        id: true,
        isSuccess: true,
        response: true,
        siteKey: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Recaptchas })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Recaptchas",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRecaptchas(
    @common.Param() params: RecaptchasWhereUniqueInput,
    @common.Body() data: RecaptchasUpdateInput
  ): Promise<Recaptchas | null> {
    try {
      return await this.service.updateRecaptchas({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          isSuccess: true,
          response: true,
          siteKey: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Recaptchas })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Recaptchas",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRecaptchas(
    @common.Param() params: RecaptchasWhereUniqueInput
  ): Promise<Recaptchas | null> {
    try {
      return await this.service.deleteRecaptchas({
        where: params,
        select: {
          createdAt: true,
          id: true,
          isSuccess: true,
          response: true,
          siteKey: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
