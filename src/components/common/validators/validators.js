import * as Yup from "yup";

export const minMaxLengthCreator = (minLength, maxLength) =>
  Yup.string()
    .min(minLength, `Must be longer than ${minLength} symbols`)
    .max(maxLength, `Max length is ${maxLength} symbols`)
