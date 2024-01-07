import ContactHeader from "~/pages/ui/contact/components/contact-header/index.jsx";
import ContactForm from "~/pages/ui/contact/components/contact-form/index.jsx";
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

export default function Contact() {

    const { t } = useTranslation();

    return(
        <div className="container mx-auto">
            <div className="py-16 lg:py-20">
                <Helmet>
                    <title>{t("contact.title")}</title>
                </Helmet>
                <ContactHeader />
                <ContactForm />
            </div>
        </div>
    )
}