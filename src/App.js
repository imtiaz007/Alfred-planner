import SearchBox from "./components/SearchBox";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <div class="flex h-screen bg-green-300">
      <div class="flex-1 flex flex-col overflow-hidden">
        <header class="flex justify-between items-center bg-blue-300 p-4">
          <div class="">Task Planner</div>
        </header>
        <div class="flex h-full">
          <nav class="flex w-30 h-full bg-pink-500">
            <div class="w-full flex mx-auto ">
              <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl">
                Sidebar
              </div>
            </div>
          </nav>
          <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
            <div className="flex w-2/3 fixed my-2">
              <SearchBox />
            </div>
            <div class="flex w-full mx-auto px-6 py-10">
              <div class="flex flex-col w-full h-full text-gray-900 text-xl">
                <div className="w-2/4 py-5">
                  <TaskCard />
                </div>
              </div>
            </div>
          </main>
          {/* <nav class="flex w-72 h-full bg-yellow-400">
            <div class="w-full flex mx-auto px-6 py-8">
              <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                Rightbar
              </div>
            </div>
          </nav> */}
        </div>
      </div>
    </div>
  );
}

export default App;
