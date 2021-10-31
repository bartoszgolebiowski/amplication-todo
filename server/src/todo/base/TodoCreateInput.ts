import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum, ValidateNested } from "class-validator";
import { EnumTodoStatus } from "./EnumTodoStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class TodoCreateInput {
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

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}
export { TodoCreateInput };
