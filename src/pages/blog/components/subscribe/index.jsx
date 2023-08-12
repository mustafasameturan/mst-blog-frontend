import {useState} from "react";

export default function Subscribe() {

    const [email, setEmail] = useState("");

    const submitHandle = (e) => {
        e.preventDefault();

        console.log(email);
    }

    return (
        <form
            onSubmit={submitHandle}
            className="flex flex-col py-12 sm:flex-row"
        >
            <input
                type="email"
                id="subscribe"
                placeholder="Drop that email here…"
                className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary sm:w-1/2"
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
                type="submit"
                className="mt-5 bg-secondary px-10 py-4 font-body text-xl font-semibold text-white hover:bg-green sm:mt-0 md:text-2xl"
            >
                Subscribe
            </button>
        </form>
    );
}