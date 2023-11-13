import ModalTitle from "~/components/modal/header/index.jsx"
import Button from "~/components/button/index.jsx";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

export default function DynamicSubscribeModal({ destroy, modalData }){

    const { t } = useTranslation();

    return(
        <>
            <ModalTitle
                title={t("modal.success.title")}
            />
            <div className="h-[200px] max-w-[500px] flex items-center justify-center flex-col gap-10">
                <p className="text-primary dark:text-white text-center">{modalData}</p>
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

DynamicSubscribeModal.propTypes = {
    destroy: PropTypes.func,
    modalData: PropTypes.string
}