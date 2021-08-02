import React from 'react';
import TimerSettings from 'src/organisms/timertabs/settings/TimerSettings';

const SettingsView = () => {
  return (
    <div className='h-full overflow-y-hidden'>
      <div className='h-full max-w-2xl flex flex-col overflow-y-auto'>
        {/* <hr className='text-text-500 text-opacity-50 w-2/3 mx-auto mt-6 mb-12' /> */}
        <p className='text-text-200 text-2xl font-light '>Pomodoro Settings</p>
        <TimerSettings />
        {/* <hr className='text-text-500 text-opacity-50 w-2/3 mx-auto mt-6 mb-12' />

        <p className='text-text-200 text-2xl font-light '>
          Notification Settings
        </p> */}
      </div>
    </div>
  );
};
export default SettingsView;
