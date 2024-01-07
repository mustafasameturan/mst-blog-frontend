import Button from "~/components/button/index.jsx";
import {Form, Formik} from "formik";
import Input from "~/components/input/index.jsx";
import {useTranslation} from "react-i18next";
import Loading from "~/components/loading/index.jsx";
import {loginSchema} from "~/validations/admin/login/index.js";
import {Login} from "~/services/admin/auth-service.js";
import {modal} from "~/stores/modal/actions.js";
import {adminLogin} from "~/stores/auth/actions.js";
import {useNavigate} from "react-router-dom";

export default function AdminLogin(){

    const { t } = useTranslation();
    const navigate = useNavigate();

    const submitHandle = async (values, { resetForm, setSubmitting }) => {

        const result = await Login(values);

        if(result.statusCode === 200){
            adminLogin(result.data.token);
            navigate("/admin/create-post");
        } else {
            modal.append("error.dynamic", t("custom_error_messages.login_error_message"));
        }

        setSubmitting(false);
    }

    return(
        <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center px-2 py-0 pt-6 pb-28 lg:pb-32">
                    <div className="w-full border border-secondary shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                                {t("admin_login.title")}
                            </h1>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                validationSchema={loginSchema}
                                onSubmit={submitHandle}
                            >
                                {({isSubmitting}) => (
                                    <Form className="space-y-4 md:space-y-6">
                                        <div className="w-full sm:mr-3">
                                            <Input
                                                type="email"
                                                name="email"
                                                variant="small"
                                                label={t("form.email.label")}
                                                placeholder={t("form.email.placeholder")}
                                            />
                                        </div>
                                        <div className="w-full sm:mr-3">
                                            <Input
                                                type="password"
                                                name="password"
                                                variant="small"
                                                label={t("form.password.label")}
                                                placeholder={t("form.password.placeholder")}
                                            />
                                        </div>
                                        <div className="flex items-center justify-center h-16">
                                            <Button
                                                variant="primary-small"
                                                type="submit"
                                                as="button"
                                                classnames="w-[130px] h-[44px]"
                                            >
                                                {isSubmitting && <Loading />}
                                                {!isSubmitting && <p className="min-w-max">{t("admin_login.login")}</p>}
                                            </Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            {/*<form className="space-y-4 md:space-y-6" action="#">*/}
                            {/*    <div>*/}
                            {/*        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>*/}
                            {/*        <input type="email" name="email" id="email" className="w-full border border-primary bg-grey-lightest px-5 py-2 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary" placeholder="name@company.com" required="" />*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>*/}
                            {/*        <input type="password" name="password" id="password" placeholder="••••••••" className="w-full border border-primary bg-grey-lightest px-5 py-2 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary" />*/}
                            {/*    </div>*/}
                            {/*</form>*/}
                        </div>
                    </div>
            </div>
        </div>
    )
}