import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoCreateInput = {
  assignedTo: UserWhereUniqueInput;
  name: string;
  status: "InProgress" | "Done" | "Todo";
};
