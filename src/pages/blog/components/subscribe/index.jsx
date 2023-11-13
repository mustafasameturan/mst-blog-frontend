import {useTranslation} from "react-i18next";
import {Form, Formik} from "formik";
import {subscribeSchema} from "~/validations/index.js";
import Input from "~/components/input/index.jsx";
import Button from "~/components/button/index.jsx";
import {AddSubscribe} from "~/services/ui/subscribe-service.js";
import {modal} from "~/stores/modal/actions.js";

export default function Subscribe() {

    const { t } = useTranslation();

    const submitHandle = async (values, { resetForm }) => {

        const result = await AddSubscribe(values.email);

        if(result.statusCode === 200) {
            modal.append("success.dynamic", t("custom_success_messages.subscribe_success_message"))
            resetForm();
        }
    }

    return (
        <Formik
            validationSchema={subscribeSchema}
            initialValues={{
                email: ''
            }}
            onSubmit={submitHandle}
        >
            <Form className="flex flex-col py-12 sm:flex-row">
                <Input
                    name="email"
                    type="email"
                    variant="large"
                    placeholder={t("blog.enter_email")}
                />
                <Button
                    variant="primary-small"
                    type="submit"
                    as="button"
                >
                    {t("blog.subscribe")}
                </Button>
            </Form>
        </Formik>
    );
}