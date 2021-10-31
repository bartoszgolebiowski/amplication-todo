import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoCreateInput = {
  name: string;
  status: "InProgress" | "Done" | "Todo";
  user: UserWhereUniqueInput;
};
