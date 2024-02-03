import {Popover} from "@headlessui/react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import useAnalytics from "~/hooks/log/use-analytics.js";
import {Events} from "~/utils/consts/events.js";

export default function SharePopup({ postInformation }) {

    const { link } = useParams();
    const { t } = useTranslation();
    const analytics = useAnalytics();

    const postLink = `${import.meta.env.VITE_SITE_LINK}${link}`
    const postText = postInformation.title + " by " + postInformation.author + " " + postLink;

    const copyLink = () => {
        navigator.clipboard.writeText(postLink)
            .then(r => {})
            .catch(e => {})
    }

    const shareOnX = () => {
        analytics.useAnalytics(Events.SHARE_ON_X_CLICKED);

        const shareLink = `https://twitter.com/intent/tweet?text=${postText}`;
        window.open(shareLink, "_blank");
    }

    const shareOnLinkedIn = () => {
        analytics.useAnalytics(Events.SHARE_ON_LINKEDIN_CLICKED);

        const shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${postLink}`;
        window.open(shareLink, "_blank");
    }

    const shareOnWhatsapp = () => {
        analytics.useAnalytics(Events.SHARE_ON_WHATSAPP_CLICKED);

        const shareLink = `https://api.whatsapp.com/send?text=${postText}`;
        window.open(shareLink, "_blank");
    }

    return(
        <Popover className="relative">
            <Popover.Button className="py-[3px] block group outline-none" onClick={() => analytics.useAnalytics(Events.SHARE_BUTTON_CLICKED)}>
                <span className="pl-2 material-symbols-outlined font-light text-primary dark:text-white text-[22px] mb-1 cursor-pointer">
                    ios_share
                </span>
            </Popover.Button>
                <Popover.Panel className="w-[201px] absolute top-8 left-2 bg-green shadow-box rounded-xl overflow-hidden">
                {({ close }) => (
                    <>
                        <div className="py-1">
                            <button
                                type="button"
                                className="px-2 h-8 w-full inline-flex items-center gap-2 hover:bg-[#eff3f41a] transition-colors cursor-pointer"
                                onClick={() => {
                                    copyLink();
                                    close();
                                }}
                            >
                                <span className="material-symbols-outlined relative text-white -rotate-45 text-[20px]">link</span>
                                <div className="pr-4 font-body font-light text-white text-sm">
                                    {t("share_popup.copy_link")}
                                </div>
                            </button>
                        </div>
                        <hr/>
                        <div className="py-1">
                            <button
                                type="button"
                                className="px-2 h-8 w-full inline-flex items-center gap-2 hover:bg-[#eff3f41a] transition-colors cursor-pointer"
                                onClick={() => {
                                    shareOnX();
                                    close();
                                }}
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24">
                                    <path fill="white" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                                <div className="pr-4 font-body font-light text-white text-sm">
                                    {t("share_popup.share_on_x")}
                                </div>
                            </button>
                            <button
                                type="button"
                                className="px-2 h-8 w-full inline-flex items-center gap-2 hover:bg-[#eff3f41a] transition-colors cursor-pointer"
                                onClick={() => {
                                    shareOnWhatsapp();
                                    close();
                                }}
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path fill="white" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
                                </svg>
                                <div className="pr-4 font-body font-light text-white text-sm">
                                    {t("share_popup.share_on_whatsapp")}
                                </div>
                            </button>
                            <button
                                type="text"
                                className="px-2 h-8 w-full inline-flex items-center gap-2 hover:bg-[#eff3f41a] transition-colors cursor-pointer"
                                onClick={() => {
                                    shareOnLinkedIn();
                                    close();
                                }}
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path fill="white" d="M21 4.32v15.36A1.32 1.32 0 0 1 19.68 21H4.32A1.32 1.32 0 0 1 3 19.68V4.32A1.32 1.32 0 0 1 4.32 3h15.36A1.32 1.32 0 0 1 21 4.32zM8.3 9.9H5.65v8.47h2.63V9.9h.02zm.22-2.92A1.52 1.52 0 0 0 7 5.44h-.05a1.53 1.53 0 0 0 0 3.06 1.52 1.52 0 0 0 1.56-1.48v-.05zm9.82 6.24c0-2.56-1.63-3.54-3.23-3.54a3.02 3.02 0 0 0-2.67 1.37h-.08V9.87H9.87v8.48h2.65v-4.5a1.75 1.75 0 0 1 1.58-1.88h.1c.84 0 1.47.52 1.47 1.85v4.54h2.65l.02-5.14v-.01z"></path>
                                </svg>
                                <div className="pr-4 font-body font-light text-white text-sm">
                                    {t("share_popup.share_on_linkedin")}
                                </div>
                            </button>
                        </div>
                    </>
                )}
                </Popover.Panel>
        </Popover>
    )
}

SharePopup.propTypes = {
    postInformation: PropTypes.object
}