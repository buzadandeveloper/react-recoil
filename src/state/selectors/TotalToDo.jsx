import { ToDoState } from "../atoms/ToDoState";
import { selector } from "recoil";

export const TotalToDo = selector({
  key: "TotalToDo",
  get: ({ get }) => {
    const totalToDo = get(ToDoState);
    return totalToDo.length;
  },
});
