import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumTodoStatus } from "./EnumTodoStatus";
@InputType()
class TodoUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    enum: EnumTodoStatus,
  })
  @IsEnum(EnumTodoStatus)
  @IsOptional()
  @Field(() => EnumTodoStatus, {
    nullable: true,
  })
  status?: "InProgress" | "Done" | "Todo";
}
export { TodoUpdateInput };
