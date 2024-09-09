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
import { CommentsService } from "../comments.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CommentsCreateInput } from "./CommentsCreateInput";
import { Comments } from "./Comments";
import { CommentsFindManyArgs } from "./CommentsFindManyArgs";
import { CommentsWhereUniqueInput } from "./CommentsWhereUniqueInput";
import { CommentsUpdateInput } from "./CommentsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CommentsControllerBase {
  constructor(
    protected readonly service: CommentsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Comments })
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createComments(
    @common.Body() data: CommentsCreateInput
  ): Promise<Comments> {
    return await this.service.createComments({
      data: {
        ...data,

        stream: data.stream
          ? {
              connect: data.stream,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,

        stream: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Comments] })
  @ApiNestedQuery(CommentsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async commentsItems(@common.Req() request: Request): Promise<Comments[]> {
    const args = plainToClass(CommentsFindManyArgs, request.query);
    return this.service.commentsItems({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,

        stream: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Comments })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async comments(
    @common.Param() params: CommentsWhereUniqueInput
  ): Promise<Comments | null> {
    const result = await this.service.comments({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,

        stream: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Comments })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateComments(
    @common.Param() params: CommentsWhereUniqueInput,
    @common.Body() data: CommentsUpdateInput
  ): Promise<Comments | null> {
    try {
      return await this.service.updateComments({
        where: params,
        data: {
          ...data,

          stream: data.stream
            ? {
                connect: data.stream,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          id: true,

          stream: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Comments })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Comments",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteComments(
    @common.Param() params: CommentsWhereUniqueInput
  ): Promise<Comments | null> {
    try {
      return await this.service.deleteComments({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,

          stream: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
