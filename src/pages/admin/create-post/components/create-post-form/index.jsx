import {Form, Formik} from "formik";
import Input from "~/components/input/index.jsx";
import Button from "~/components/button/index.jsx";
import Loading from "~/components/loading/index.jsx";
import MultiSelect from "~/components/multi-select/index.jsx";
import usePostCategoryTypes from "~/hooks/data/use-post-category-types.js";
import {addPostSchema} from "~/validations/admin/post/index.js";
import {AddPost} from "~/services/admin/post-service.js";
import usePostContentTypes from "~/hooks/data/use-post-content-types.js";
import {useTranslation} from "react-i18next";
import {modal} from "~/stores/modal/actions.js";
import useAdminAuth from "~/hooks/auth/use-admin-auth.js";

export default function CreatePostForm() {

    const { t } = useTranslation();
    const postCategoryTypes = usePostCategoryTypes();
    const postContentTypes = usePostContentTypes();
    const { admin} = useAdminAuth();

    console.log(admin);

    /*
        Gönderi içeriğini endpoint'e göre parse eder.
    */
    const parseContent = (content) => {
        const regex = /#(\w+)#([^#]+)#/g;
        const matches = [];
        let match;

        try {
            while ((match = regex.exec(content)) !== null) {
                const contentType =
                    postContentTypes.find(ct => ct.title.toLocaleLowerCase() === match[1].toLocaleLowerCase()).id
                    || false;

                if (contentType) {
                    const contentValue = match[2];

                    matches.push({
                        contentType,
                        content: contentValue.trim()
                    });
                }
            }

            return matches;
        } catch (error) {
            //Gönderi içeriği kurallara göre parse edilmezse hata fırlatır.
            modal.append("error.dynamic", t("custom_error_messages.create_post_error_message"));
        }
    }

    const submitHandle = async (values, { resetForm, setSubmitting }) => {

        let postContents = parseContent(values.content);

        //Gönderi içeriği kurallara göre parse edilmezse hata fırlatılması için kontrol yapılıyor.
        if(postContents.length > 0) {
            let model = {
                title: values.title,
                userId: admin.UserId,
                postCategories: values.category.map(category => category.id),
                postContents: parseContent(values.content)
            }

            const result = await AddPost(model);

            if(result.statusCode === 200) {
                modal.append("success.dynamic", t("custom_success_messages.post_success_message"));
                resetForm();
            } else {
                modal.append("error.static");
            }

            setSubmitting(false);
        } else {
            modal.append("error.dynamic", t("custom_error_messages.create_post_error_message"));
        }
    }

    return (
        <Formik
            initialValues={{
                title: '',
                category: [],
                content: ''
            }}
            validationSchema={addPostSchema}
            onSubmit={submitHandle}
        >
            {({isSubmitting, setFieldValue}) => (
                <Form className="pt-16">
                    <div className="w-full sm:mr-3">
                        <Input
                            name="title"
                            label={t("create_post.post_title")}
                            placeholder={t("create_post.enter_post_title")}
                        />
                    </div>
                    <div className="w-full sm:mr-3 mt-5">
                        <MultiSelect
                            name="category"
                            label={t("create_post.post_category")}
                            placeholder={t("create_post.choose_post_category")}
                            variant="normal"
                            options={postCategoryTypes}
                            setFieldValue={setFieldValue}
                        />
                    </div>
                    <div className="w-full sm:mr-3 mt-5">
                        <Input
                            name="content"
                            as="textarea"
                            label={t("create_post.post_content")}
                            placeholder={t("create_post.enter_post_content")}
                            variant="normal"
                            rows="20"
                        />
                    </div>
                    <Button
                        variant="primary"
                        as="button"
                        type="submit"
                        classnames="!w-[170px]"
                    >
                        {isSubmitting ? <Loading /> : t("create_post.create")}
                    </Button>
                </Form>
            )}
        </Formik>
    );
}