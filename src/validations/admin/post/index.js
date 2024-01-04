import Yup from "~/validations/yup.js";

export const addPostSchema = Yup.object().shape({
    title: Yup.string().required().min(4),
    category: Yup.array().required().min(1),
    content: Yup.string().required().min(100)
})