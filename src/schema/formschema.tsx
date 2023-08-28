import * as Yup from "yup";

export const FormSchema = Yup.object({
  email: Yup.string().email().required("This field is required"),
});
