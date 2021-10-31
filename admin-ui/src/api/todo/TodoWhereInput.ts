import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TodoWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  status?: "InProgress" | "Done" | "Todo";
};
