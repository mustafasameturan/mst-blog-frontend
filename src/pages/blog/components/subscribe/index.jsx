import {useTranslation} from "react-i18next";
import {Form, Formik} from "formik";
import {subscribeSchema} from "~/validations/index.js";
import Input from "~/components/input/index.jsx";
import Button from "~/components/button/index.jsx";
import {AddSubscribe} from "~/services/ui/subscribe-service.js";
import {modal} from "~/stores/modal/actions.js";
import Loading from "~/components/loading/index.jsx";

export default function Subscribe() {

    const { t } = useTranslation();

    const submitHandle = async (values, { resetForm, setSubmitting }) => {

        const result = await AddSubscribe(values.email);

        if(result.statusCode === 200) {
            modal.append("success.dynamic", t("custom_success_messages.subscribe_success_message"))
            resetForm();
        } else {
            modal.append("error.static");
        }

        setSubmitting(false);
    }

    return (
        <Formik
            validationSchema={subscribeSchema}
            initialValues={{
                email: ''
            }}
            onSubmit={submitHandle}
        >
            {({ isSubmitting }) => (
                <Form className="flex flex-col py-12 sm:flex-row">
                    <Input
                        name="email"
                        type="email"
                        variant="large"
                        placeholder={t("form.email.placeholder")}
                        isValidation={false}
                    />
                    <Button
                        variant="primary-small"
                        type="submit"
                        as="button"
                        classnames="w-[159px] h-16"
                    >
                        {isSubmitting ? <Loading /> : t("blog.subscribe")}
                    </Button>
                </Form>
            )}
        </Formik>
    );
}