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
import { AttachmentCreateNestedManyWithoutRoutesInput } from "./AttachmentCreateNestedManyWithoutRoutesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MessageCreateNestedManyWithoutRoutesInput } from "./MessageCreateNestedManyWithoutRoutesInput";
import { UserCreateNestedManyWithoutRoutesInput } from "./UserCreateNestedManyWithoutRoutesInput";
@InputType()
class RouteCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttachmentCreateNestedManyWithoutRoutesInput,
  })
  @ValidateNested()
  @Type(() => AttachmentCreateNestedManyWithoutRoutesInput)
  @IsOptional()
  @Field(() => AttachmentCreateNestedManyWithoutRoutesInput, {
    nullable: true,
  })
  attachments?: AttachmentCreateNestedManyWithoutRoutesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  did!: string;

  @ApiProperty({
    required: false,
    type: () => MessageCreateNestedManyWithoutRoutesInput,
  })
  @ValidateNested()
  @Type(() => MessageCreateNestedManyWithoutRoutesInput)
  @IsOptional()
  @Field(() => MessageCreateNestedManyWithoutRoutesInput, {
    nullable: true,
  })
  messages?: MessageCreateNestedManyWithoutRoutesInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutRoutesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutRoutesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutRoutesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutRoutesInput;
}
export { RouteCreateInput };