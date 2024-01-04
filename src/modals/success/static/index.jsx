import ModalTitle from "~/components/modal/header/index.jsx"
import Button from "~/components/button/index.jsx";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

export default function StaticSuccessModal({ destroy }){

    const { t } = useTranslation();

    return(
        <>
            <ModalTitle
                title={t("modal.success.title")}
            />
            <div className="h-[200px] min-w-[500px] flex items-center justify-center flex-col gap-10">
                <p className="max-w-[400px] text-primary dark:text-white text-center">{t("modal.success.message")}</p>
                <Button
                    variant="primary-small"
                    type="submit"
                    as="button"
                    onClick={() =>{
                        //Modal kapatıldıktan sonra sayfa üste scroll ettiriliyor.
                        window.scrollTo({top: 0, behavior: 'smooth'});
                        destroy();
                    }}
                >
                    {t("modal.okey")}
                </Button>
            </div>
        </>
    )
}

StaticSuccessModal.propTypes = {
    destroy: PropTypes.func
}