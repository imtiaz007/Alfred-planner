import React from "react";
import Tabs from "src/atoms/tabview";
import Tab from "src/atoms/tab";
import TabPanel from "src/atoms/tabpanel";
import Timer from "./timer";
import TimerSettings from "./settings/TimerSettings";
import { Settings as SettingsIcon } from "@icons";
import { useRecoilValue } from "recoil";
import {
  longBreakTimeState,
  shortBreakTimeState,
  workTimeState,
} from "src/constants/stateAtoms";

const TimerTabs = () => {
  const [value, setValue] = React.useState(0);
  const workTime = useRecoilValue(workTimeState);
  const shortBreakTime = useRecoilValue(shortBreakTimeState);
  const longBreakTime = useRecoilValue(longBreakTimeState);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        <Tab
          label="Work"
          id="full-width-tab-0"
          aria-controls="full-width-tabpanel-0"
        />
        <Tab
          label="Short Break"
          id="full-width-tab-1"
          aria-controls="full-width-tabpanel-1"
        />
        <Tab
          label="Long Break"
          id="full-width-tab-2"
          aria-controls="full-width-tabpanel-2"
        />
        <Tab
          icon={<SettingsIcon />}
          id="full-width-tab-3"
          aria-controls="full-width-tabpanel-3"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Timer msg="Time to Work!" time={workTime} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Timer msg="Take a Short break!" time={shortBreakTime} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Timer msg="Take a Long break!" time={longBreakTime} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TimerSettings />
      </TabPanel>
    </div>
  );
};

export default TimerTabs;
