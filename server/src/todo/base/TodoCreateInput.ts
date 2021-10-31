import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumTodoStatus } from "./EnumTodoStatus";
@InputType()
class TodoCreateInput {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  assignedTo!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    enum: EnumTodoStatus,
  })
  @IsEnum(EnumTodoStatus)
  @Field(() => EnumTodoStatus)
  status!: "InProgress" | "Done" | "Todo";
}
export { TodoCreateInput };
