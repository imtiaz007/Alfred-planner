import React from "react";
import SearchBox from "./SearchBox";
import Sidebar from "./Sidebar";
import WorkSpaceBody from "./WorkSpaceBody";

const Workspace = () => {
  return (
    <div class="flex h-full">
      <div class="flex w-30 h-full bg-pink-500">
        <Sidebar />
      </div>
      <main class="flex w-full ">
        <WorkSpaceBody />
      </main>
    </div>
  );
};

export default Workspace;
