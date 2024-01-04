import Yup from "~/validations/yup.js";

export const contactSchema = Yup.object().shape({
    email: Yup.string().required(),
    message: Yup.string().required().min(10),
    name: Yup.string().required().min(4)
})