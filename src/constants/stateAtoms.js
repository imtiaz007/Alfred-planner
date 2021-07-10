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

const workTimeState = atom({
  key: "_WORK_TIME",
  default: 1800,
});

const shortBreakTimeState = atom({
  key: "_SHORT_BREAK_TIME",
  default: 600,
});

const longBreakTimeState = atom({
  key: "_LONG_BREAK_TIME",
  default: 1200,
});

export {
  appSidebarState,
  allTagsState,
  notesState,
  tasksState,
  workTimeState,
  shortBreakTimeState,
  longBreakTimeState,
};
