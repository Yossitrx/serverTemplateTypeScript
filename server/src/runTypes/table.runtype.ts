import { Array, Number, Record, String } from "runtypes";

export const RunTypeSubRecord = Record({
  id: Number,
});

export const RunType = Record({
  rowsToAdd: Array(RunTypeSubRecord),
});
