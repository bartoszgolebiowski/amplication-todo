import { User } from "../user/User";

export type Todo = {
  assignedTo?: User;
  createdAt: Date;
  id: string;
  name: string;
  status?: "InProgress" | "Done" | "Todo";
  updatedAt: Date;
};
