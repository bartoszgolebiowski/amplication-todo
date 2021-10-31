import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsEnum, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnumTodoStatus } from "./EnumTodoStatus";
import { User } from "../../user/base/User";
@ObjectType()
class Todo {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  @Field(() => EnumTodoStatus, {
    nullable: true,
  })
  status?: "InProgress" | "Done" | "Todo";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}
export { Todo };
