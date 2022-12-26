import * as Yup from "yup";

export const customerValidationSchema = Yup.object().shape({
  companyName: Yup.string("")
    .required("this field can not be empty")
    .min(10, "min 10 character is required"),

  phone: Yup.string("should enter number")
    .required("this field can not be empty")
    .min(10, "At least 10 char shpuld enter")
    .max(15, "max 15 char should enter"),

  city: Yup.string().max(16, "max 16"),
  country: Yup.string().max(16, "max 16"),
});
