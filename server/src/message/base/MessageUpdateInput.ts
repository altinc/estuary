/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttachmentUpdateManyWithoutMessagesInput } from "./AttachmentUpdateManyWithoutMessagesInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumMessageFolder } from "./EnumMessageFolder";
import { RouteWhereUniqueInput } from "../../route/base/RouteWhereUniqueInput";
@InputType()
class MessageUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttachmentUpdateManyWithoutMessagesInput,
  })
  @ValidateNested()
  @Type(() => AttachmentUpdateManyWithoutMessagesInput)
  @IsOptional()
  @Field(() => AttachmentUpdateManyWithoutMessagesInput, {
    nullable: true,
  })
  attachments?: AttachmentUpdateManyWithoutMessagesInput;

  @ApiProperty({
    required: false,
    enum: EnumMessageFolder,
  })
  @IsEnum(EnumMessageFolder)
  @IsOptional()
  @Field(() => EnumMessageFolder, {
    nullable: true,
  })
  folder?: "Inbox" | "Outbox";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  party?: string;

  @ApiProperty({
    required: false,
    type: () => RouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RouteWhereUniqueInput)
  @IsOptional()
  @Field(() => RouteWhereUniqueInput, {
    nullable: true,
  })
  route?: RouteWhereUniqueInput;
}
export { MessageUpdateInput };