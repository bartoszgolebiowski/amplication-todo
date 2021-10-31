import { Todo as TTodo } from "../api/todo/Todo";

export const TODO_TITLE_FIELD = "name";

export const TodoTitle = (record: TTodo): string => {
  return record.name || record.id;
};
