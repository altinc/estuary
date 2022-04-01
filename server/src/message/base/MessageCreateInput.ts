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
import { AttachmentCreateNestedManyWithoutMessagesInput } from "./AttachmentCreateNestedManyWithoutMessagesInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumMessageFolder } from "./EnumMessageFolder";
import { RouteWhereUniqueInput } from "../../route/base/RouteWhereUniqueInput";
@InputType()
class MessageCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttachmentCreateNestedManyWithoutMessagesInput,
  })
  @ValidateNested()
  @Type(() => AttachmentCreateNestedManyWithoutMessagesInput)
  @IsOptional()
  @Field(() => AttachmentCreateNestedManyWithoutMessagesInput, {
    nullable: true,
  })
  attachments?: AttachmentCreateNestedManyWithoutMessagesInput;

  @ApiProperty({
    required: true,
    enum: EnumMessageFolder,
  })
  @IsEnum(EnumMessageFolder)
  @Field(() => EnumMessageFolder)
  folder!: "Inbox" | "Outbox";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  party!: string;

  @ApiProperty({
    required: true,
    type: () => RouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RouteWhereUniqueInput)
  @Field(() => RouteWhereUniqueInput)
  route!: RouteWhereUniqueInput;
}
export { MessageCreateInput };
