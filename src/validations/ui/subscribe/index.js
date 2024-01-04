import Yup from "../../yup.js"

export const subscribeSchema = Yup.object().shape({
    email: Yup.string().required()
})