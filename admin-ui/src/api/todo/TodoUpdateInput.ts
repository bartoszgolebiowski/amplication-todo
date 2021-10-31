import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  name?: string;
  status?: "InProgress" | "Done" | "Todo";
  user?: UserWhereUniqueInput;
};
