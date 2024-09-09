/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProxiesWhereUniqueInput } from "./ProxiesWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProxiesUpdateInput } from "./ProxiesUpdateInput";

@ArgsType()
class UpdateProxiesArgs {
  @ApiProperty({
    required: true,
    type: () => ProxiesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProxiesWhereUniqueInput)
  @Field(() => ProxiesWhereUniqueInput, { nullable: false })
  where!: ProxiesWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProxiesUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProxiesUpdateInput)
  @Field(() => ProxiesUpdateInput, { nullable: false })
  data!: ProxiesUpdateInput;
}

export { UpdateProxiesArgs as UpdateProxiesArgs };