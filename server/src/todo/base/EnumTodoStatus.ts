import { Todo } from "./Todo";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumTodoStatus {
  InProgress = "InProgress",
  Done = "Done",
  Todo = "Todo",
}

registerEnumType(EnumTodoStatus, {
  name: "EnumTodoStatus",
});
