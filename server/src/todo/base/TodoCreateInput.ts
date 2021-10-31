import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum } from "class-validator";
import { EnumTodoStatus } from "./EnumTodoStatus";
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
}
export { TodoCreateInput };
