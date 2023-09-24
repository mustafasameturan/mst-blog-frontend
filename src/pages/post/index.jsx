import Blockquote from "~/pages/post/components/blokquote/index.jsx";
import Paragraph from "~/pages/post/components/paragraph/index.jsx";
import Header from "~/pages/post/components/header/index.jsx";
import CodeBlock from "~/pages/post/components/code-block/index.jsx";

export default function Post() {

    const codeString = `function example() {
    console.log("Hello, World!");
  }`;

    const postData = [
        {type: "header", text: "The Beginning"},
        {type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Augue ut lectus arcu bibendum at varius vel. Lacus viverra vitae congue eu consequat ac felis."},
        {type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Augue ut lectus arcu bibendum at varius vel. Lacus viverra vitae congue eu consequat ac felis."},
        {type: "blocakquote", text: "Note: Some of the earlier articles may be amateur and have information that I wouldn’t necessarily put into an article on the subject if I wrote it today."},
        {type: "header", text: "The End"},
        {type: "paragraph", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Augue ut lectus arcu bibendum at varius vel. Lacus viverra vitae congue eu consequat ac felis."},
        {type: "code", text: `function example() {
  console.log("Hello, World!");
}`
        }
    ]

    const content = (item) => {
        console.log(item)
        if (item.type === "header") {
          return <Header title={item.text} />;
        }
        if (item.type === "paragraph") {
          return <Paragraph text={item.text} />;
        }
        if (item.type === "blockquote") {
          return <Blockquote text={item.text} />;
        }
        if (item.type === "code") {
          return <CodeBlock codeString={item.text} language="javascript" />;
        }
        return null;
    }

    return (<>
        <div className="container mx-auto">
            <div className="pt-16 lg:pt-20">
                <div className="border-b border-grey-lighter pb-8 sm:pb-12">
                    <span
                      className="mb-5 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green sm:mb-8"
                    >
                      category
                    </span>
                    <h2
                        className="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl"
                    >
                        Using Git Submodules for Private Content
                    </h2>
                    <div className="flex items-center pt-5 sm:pt-8">
                        <p className="pr-2 font-body font-light text-primary dark:text-white">
                            July 19, 2020
                        </p>
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                        <span className="vdark:text-white font-body text-grey">//</span>
                        <p className="pl-2 font-body font-light text-primary dark:text-white">
                            4 min read
                        </p>
                    </div>
                </div>

                <div
                    className="max-w-none border-b border-grey-lighter py-8 dark:text-white sm:py-12"
                >
                    {postData.map((post) => (
                        content(post)
                    ))}
                    {/*<img src={Post_Image} alt="Image" className="mb-4"/>*/}
                </div>
            </div>
        </div>
    </>);
}