import {Form, Formik} from "formik";
import Input from "~/components/input/index.jsx";
import Button from "~/components/button/index.jsx";
import {useTranslation} from "react-i18next";
import {contactSchema} from "~/validations/index.js";
import {AddContact} from "~/services/ui/contact-service.js";
import {modal} from "~/stores/modal/actions.js";
import Loading from "~/components/loading/index.jsx";
import useAnalytics from "~/hooks/log/use-analytics.js";
import {Events} from "~/utils/consts/events.js";

export default function ContactForm() {

    const { t } = useTranslation();
    const analytics = useAnalytics();

    const submitHandle = async (values, { resetForm, setSubmitting }) => {

        analytics.useAnalytics(Events.SEND_MESSAGE_BUTTON_CLICKED);

        const result = await AddContact(values);

        if(result.statusCode === 200) {
            modal.append("success.dynamic", t("custom_success_messages.contact_success_message"));
            resetForm();
        } else {
            modal.append("error.static");
        }

        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            validationSchema={contactSchema}
            onSubmit={submitHandle}
        >
            {({isSubmitting}) => (
                <Form className="pt-16">
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:mr-3 sm:w-1/2">
                            <Input
                                name="name"
                                label={t("form.name.label")}
                                placeholder={t("form.name.placeholder")}
                            />
                        </div>
                        <div className="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0">
                            <Input
                                name="email"
                                type="email"
                                label={t("form.email.label")}
                                placeholder={t("form.email.placeholder")}
                            />
                        </div>
                    </div>
                    <div className="w-full pt-6 sm:pt-10">
                        <Input
                            name="message"
                            as="textarea"
                            cols="30"
                            rows="9"
                            label={t("form.message.label")}
                            placeholder={t("form.message.placeholder")}
                        />
                    </div>
                    <Button
                        variant="primary"
                        as="button"
                        type="submit"
                    >
                        {isSubmitting ? <Loading /> : t("contact.send_message")}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}