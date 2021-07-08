import { atom } from "recoil";

const appSidebarState = atom({
  key: "_APP_SIDEBAR_STATE",
  default: false,
});

const allTagsState = atom({
  key: "_ALL_TAGS",
  default: ["Work", "Personal", "Home"],
});

const notesState = atom({
  key: "_NOTES",
  default: [],
});

const tasksState = atom({
  key: "_TASKS",
  default: [],
});

export { appSidebarState, allTagsState, notesState, tasksState };
