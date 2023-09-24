import {Form, Formik} from "formik";
import Input from "~/components/input/index.jsx";
import Button from "~/components/button/index.jsx";

export default function ContactForm() {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            onSubmit={(values, actions) => {
                console.log(values);
            }}
        >
            <Form className="pt-16">
                <div className="flex flex-col sm:flex-row">
                    <Input
                        outerClassnames="w-full sm:mr-3 sm:w-1/2"
                        label="Your Name"
                        name="name"
                        placeholder="What should I call you?"
                    />
                    <Input
                        outerClassnames="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0"
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Drop that email here…"
                    />
                </div>
                <Input
                    outerClassnames="w-full pt-6 sm:pt-10"
                    label="Message"
                    name="message"
                    as="textarea"
                    cols="30"
                    rows="9"
                    placeholder="Tell me all the things that you think I need to hear…"
                />
                <Button
                    variant="primary"
                    as="button"
                    type="submit"
                >
                    Send Message
                </Button>
            </Form>
        </Formik>
    )
}