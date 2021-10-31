import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  status?: "InProgress" | "Done" | "Todo";
  user?: UserWhereUniqueInput;
};
