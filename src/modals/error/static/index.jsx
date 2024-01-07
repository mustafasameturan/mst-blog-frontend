import ModalTitle from "~/components/modal/header/index.jsx"
import Button from "~/components/button/index.jsx";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

export default function StaticErrorModal({ destroy }){

    const { t } = useTranslation();

    return(
        <>
            <ModalTitle
                title={t("modal.error.title")}
            />
            <div className="h-[200px] min-w-[500px] flex flex-col items-center mt-12">
                <p className="max-w-[400px] h-[72px] text-primary dark:text-white text-center">{t("modal.error.message")}</p>
                <Button
                    variant="primary-small"
                    type="submit"
                    as="button"
                    onClick={() => {
                        window.scrollTo({top: 0, behavior: 'smooth'});
                        destroy()
                    }}
                >
                    {t("modal.okey")}
                </Button>
            </div>
        </>
    )
}

StaticErrorModal.propTypes = {
    destroy: PropTypes.func
}