/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { SystemConfig } from "./SystemConfig";
import { SystemConfigCountArgs } from "./SystemConfigCountArgs";
import { SystemConfigFindManyArgs } from "./SystemConfigFindManyArgs";
import { SystemConfigFindUniqueArgs } from "./SystemConfigFindUniqueArgs";
import { CreateSystemConfigArgs } from "./CreateSystemConfigArgs";
import { UpdateSystemConfigArgs } from "./UpdateSystemConfigArgs";
import { DeleteSystemConfigArgs } from "./DeleteSystemConfigArgs";
import { SystemConfigService } from "../systemConfig.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SystemConfig)
export class SystemConfigResolverBase {
  constructor(
    protected readonly service: SystemConfigService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SystemConfig",
    action: "read",
    possession: "any",
  })
  async _systemConfigsMeta(
    @graphql.Args() args: SystemConfigCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SystemConfig])
  @nestAccessControl.UseRoles({
    resource: "SystemConfig",
    action: "read",
    possession: "any",
  })
  async systemConfigs(
    @graphql.Args() args: SystemConfigFindManyArgs
  ): Promise<SystemConfig[]> {
    return this.service.systemConfigs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SystemConfig, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SystemConfig",
    action: "read",
    possession: "own",
  })
  async systemConfig(
    @graphql.Args() args: SystemConfigFindUniqueArgs
  ): Promise<SystemConfig | null> {
    const result = await this.service.systemConfig(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SystemConfig)
  @nestAccessControl.UseRoles({
    resource: "SystemConfig",
    action: "create",
    possession: "any",
  })
  async createSystemConfig(
    @graphql.Args() args: CreateSystemConfigArgs
  ): Promise<SystemConfig> {
    return await this.service.createSystemConfig({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SystemConfig)
  @nestAccessControl.UseRoles({
    resource: "SystemConfig",
    action: "update",
    possession: "any",
  })
  async updateSystemConfig(
    @graphql.Args() args: UpdateSystemConfigArgs
  ): Promise<SystemConfig | null> {
    try {
      return await this.service.updateSystemConfig({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SystemConfig)
  @nestAccessControl.UseRoles({
    resource: "SystemConfig",
    action: "delete",
    possession: "any",
  })
  async deleteSystemConfig(
    @graphql.Args() args: DeleteSystemConfigArgs
  ): Promise<SystemConfig | null> {
    try {
      return await this.service.deleteSystemConfig(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
