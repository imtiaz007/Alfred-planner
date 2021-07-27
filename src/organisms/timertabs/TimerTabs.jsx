import React from 'react';
import Tabs from 'src/atoms/tabview';
import Tab from 'src/atoms/tab';
import TabPanel from 'src/atoms/tabpanel';
import Timer from './timer';
import TimerSettings from './settings/TimerSettings';
import { Settings as SettingsIcon } from '@icons';
import { useRecoilValue } from 'recoil';
import {
  longBreakTimeState,
  shortBreakTimeState,
  workTimeState,
} from 'src/constants/stateAtoms';

const TimerTabs = () => {
  const [value, setValue] = React.useState(0);
  const workTime = useRecoilValue(workTimeState);
  const shortBreakTime = useRecoilValue(shortBreakTimeState);
  const longBreakTime = useRecoilValue(longBreakTimeState);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='flex flex-col items-center'>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='secondary'
        textColor='secondary'
        variant='scrollable'
        scrollButtons='on'
        aria-label='scrollable auto tabs example'
      >
        <Tab
          label='Work'
          id='scrollable-auto-tab-tab-0'
          aria-controls='scrollable-auto-tab-tabpanel-0'
        />
        <Tab
          label='Short Break'
          id='scrollable-auto-tab-tab-1'
          aria-controls='scrollable-auto-tab-tabpanel-1'
        />
        <Tab
          label='Long Break'
          id='scrollable-auto-tab-tab-2'
          aria-controls='scrollable-auto-tab-tabpanel-2'
        />
        <Tab
          icon={<SettingsIcon />}
          id='scrollable-auto-tab-tab-3'
          aria-controls='scrollable-auto-tab-tabpanel-3'
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Timer
          msg='Time to Work!'
          toastMsg='Take a break! Get some Coffee'
          time={workTime}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Timer
          msg='Take a Short break!'
          toastMsg='Get to work!'
          time={shortBreakTime}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Timer
          msg='Take a Long break!'
          toastMsg='Get to work!'
          time={longBreakTime}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TimerSettings />
      </TabPanel>
    </div>
  );
};

export default TimerTabs;
