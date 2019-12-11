import React, { Fragment, useState } from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

export default function({value, onChange, minDate, maxDate}) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        onChange={onChange}
        label="With Today Button"
        showTodayButton
      />
    </MuiPickersUtilsProvider>
  );
}