import ModalTitle from "~/components/modal/header/index.jsx"
import Button from "~/components/button/index.jsx";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

export default function DynamicErrorModal({ destroy, modalData }){

    const { t } = useTranslation();

    return(
        <>
            <ModalTitle
                title={t("modal.error.title")}
            />
            <div className="h-[200px] min-w-[500px] flex items-center justify-center flex-col gap-10">
                <p className="max-w-[400px] text-primary dark:text-white text-center">{modalData}</p>
                <Button
                    variant="primary-small"
                    type="submit"
                    as="button"
                    onClick={() => destroy()}
                >
                    {t("modal.okey")}
                </Button>
            </div>
        </>
    )
}

DynamicErrorModal.propTypes = {
    destroy: PropTypes.func,
    modalData: PropTypes.string
}