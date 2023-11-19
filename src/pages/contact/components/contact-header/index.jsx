export default function ContactHeader() {
    return(
        <>
            <div>
                <img src="/svg/icon-contact.svg" alt="contact" width={48} height={36} />
            </div>
            <h1
                className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl"
            >
                Contact
            </h1>
            <div className="pr-2 pt-3 sm:pt-0">
                <p className="font-body text-xl font-light text-primary dark:text-white">
                    Got a question or proposal, or just want to say hello? Go ahead. You know what to do.
                </p>
            </div>
        </>
    )
}