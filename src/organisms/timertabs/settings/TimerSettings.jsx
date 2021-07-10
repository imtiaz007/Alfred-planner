/* eslint-disable arrow-body-style */
import React from "react";
import { useRecoilState } from "recoil";
import Slider from "src/atoms/slider";
import {
  longBreakTimeState,
  shortBreakTimeState,
  workTimeState,
} from "src/constants/stateAtoms";

const TimerSettings = () => {
  const [workTime, setWorkTime] = useRecoilState(workTimeState);
  const [shortBreakTime, setShortBreakTime] =
    useRecoilState(shortBreakTimeState);
  const [longBreakTime, setLongBreakTime] = useRecoilState(longBreakTimeState);
  return (
    <div className="flex flex-col w-full items-center py-12 px-5 space-y-10">
      <div className="w-full sm:w-2/6">
        <Slider
          defaultValue={Math.floor(workTime / 60)}
          onChange={(e, value) => setWorkTime(value * 60)}
          marks={[
            { value: 20, label: "20 Mins" },
            { value: 100, label: "100 Mins" },
          ]}
          color="secondary"
          aria-labelledby="discrete-slider-always"
          step={10}
          min={20}
          valueLabelDisplay="on"
        />
        <p className="text-gray-50 mb-5 text-center">Work time</p>
      </div>
      <div className="w-full sm:w-2/6">
        <Slider
          defaultValue={Math.floor(shortBreakTime / 60)}
          onChange={(e, value) => setShortBreakTime(value * 60)}
          marks={[
            { value: 5, label: "5 Mins" },
            { value: 30, label: "30 Mins" },
          ]}
          color="secondary"
          aria-labelledby="discrete-slider-always"
          step={5}
          min={5}
          max={30}
          valueLabelDisplay="on"
        />
        <p className="mb-5 text-center">Short Break</p>
      </div>
      <div className="w-full sm:w-2/6">
        <Slider
          defaultValue={Math.floor(longBreakTime / 60)}
          onChange={(e, value) => setLongBreakTime(value * 60)}
          marks={[
            { value: 10, label: "10 Mins" },
            { value: 60, label: "60 Mins" },
          ]}
          color="secondary"
          aria-labelledby="discrete-slider-always"
          step={10}
          min={10}
          max={60}
          valueLabelDisplay="on"
        />
        <p className="mb-5 text-center">Long Break</p>
      </div>
    </div>
  );
};

export default TimerSettings;
