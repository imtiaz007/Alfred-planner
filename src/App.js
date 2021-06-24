import AppHeader from "./AppHeader";
import SearchBox from "./components/SearchBox";
import TaskList from "./components/TaskList";
import Workspace from "./components/Workspace";

function App() {
  return (
    <div class="flex h-screen flex-col overflow-x-hidden overflow-y-hidden">
      <AppHeader />
      <Workspace />
    </div>
  );
}

export default App;
