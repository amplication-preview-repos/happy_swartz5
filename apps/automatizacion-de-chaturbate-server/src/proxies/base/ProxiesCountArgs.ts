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
import { ProxiesWhereInput } from "./ProxiesWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProxiesCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProxiesWhereInput,
  })
  @Field(() => ProxiesWhereInput, { nullable: true })
  @Type(() => ProxiesWhereInput)
  where?: ProxiesWhereInput;
}

export { ProxiesCountArgs as ProxiesCountArgs };
