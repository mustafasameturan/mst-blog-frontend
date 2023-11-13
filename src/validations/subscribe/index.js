import Yup from "../yup"

export const subscribeSchema = Yup.object().shape({
    email: Yup.string().required()
})