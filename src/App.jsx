import { RecoilRoot } from "recoil";
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  return (
    <RecoilRoot>
      <ToDoList />
    </RecoilRoot>
  );
}

export default App;
