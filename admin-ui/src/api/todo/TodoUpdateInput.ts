import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  assignedTo?: UserWhereUniqueInput;
  name?: string;
  status?: "InProgress" | "Done" | "Todo";
};
