import {Light as SyntaxHighlighter} from "react-syntax-highlighter";
import tomorrowNightBlue from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-blue.js";
import PropTypes from "prop-types";
import {useState} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import classNames from "classnames";

export default function CodeBlock({ codeString, language }) {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <div className="mt-8 mb-8 sm:mt-10 sm:mb-10 bg-cyan-800 rounded-[4px]">
            <div className="flex items-center justify-between text-white px-2">
                <p className="text-sm">{language}</p>
                <CopyToClipboard text={codeString} onCopy={handleCopy}>
                    <button
                        className={classNames("flex items-center gap-1 text-white bx text-xl", {
                            "bx-copy": !copied,
                            "bx-check": copied,
                        })}
                    >
                        <p className="text-sm">
                            {copied ? "Copied" : "Copy"}
                        </p>
                    </button>
                </CopyToClipboard>
            </div>
            <SyntaxHighlighter language={language} style={tomorrowNightBlue} className="rounded-b-[4px]">
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

CodeBlock.propTypes = {
    codeString: PropTypes.string,
    language: PropTypes.string,
}