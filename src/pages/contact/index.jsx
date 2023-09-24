import ContactHeader from "~/pages/contact/components/contact-header/index.jsx";
import ContactForm from "~/pages/contact/components/contact-form/index.jsx";

export default function Contact() {
    return(
        <div className="container mx-auto">
            <div className="py-16 lg:py-20">
                <ContactHeader />
                <ContactForm />
            </div>
        </div>
    )
}