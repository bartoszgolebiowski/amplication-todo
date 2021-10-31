export type Todo = {
  createdAt: Date;
  id: string;
  name: string;
  status?: "InProgress" | "Done" | "Todo";
  updatedAt: Date;
};
