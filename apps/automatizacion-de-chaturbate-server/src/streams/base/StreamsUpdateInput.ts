/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentsUpdateManyWithoutStreamsItemsInput } from "./CommentsUpdateManyWithoutStreamsItemsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { LikesUpdateManyWithoutStreamsItemsInput } from "./LikesUpdateManyWithoutStreamsItemsInput";

@InputType()
class StreamsUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommentsUpdateManyWithoutStreamsItemsInput,
  })
  @ValidateNested()
  @Type(() => CommentsUpdateManyWithoutStreamsItemsInput)
  @IsOptional()
  @Field(() => CommentsUpdateManyWithoutStreamsItemsInput, {
    nullable: true,
  })
  commentsItems?: CommentsUpdateManyWithoutStreamsItemsInput;

  @ApiProperty({
    required: false,
    type: () => LikesUpdateManyWithoutStreamsItemsInput,
  })
  @ValidateNested()
  @Type(() => LikesUpdateManyWithoutStreamsItemsInput)
  @IsOptional()
  @Field(() => LikesUpdateManyWithoutStreamsItemsInput, {
    nullable: true,
  })
  likesItems?: LikesUpdateManyWithoutStreamsItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  streamKey?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  streamUrl?: string | null;
}

export { StreamsUpdateInput as StreamsUpdateInput };