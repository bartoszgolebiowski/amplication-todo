import { StringFilter } from "../../util/StringFilter";

export type TodoWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  status?: "InProgress" | "Done" | "Todo";
};
