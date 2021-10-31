import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  assignedToId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
