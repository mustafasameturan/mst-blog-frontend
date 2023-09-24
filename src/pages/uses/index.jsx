import Button from "~/components/button/index.jsx";
import UsesHeader from "~/pages/uses/components/uses-header/index.jsx";
import {uses} from "~/fake-api/uses.jsx";
import UsesListItem from "~/pages/uses/components/uses-list-item/index.jsx";

export default function Uses() {
    return (
        <div className="container mx-auto">
            <div className="py-16 lg:py-20">

                <UsesHeader />

                <div className="pt-16 lg:pt-20">
                    <h3 className="pb-8 font-body text-2xl font-semibold text-primary dark:text-white">
                        Computer + Workspace
                    </h3>
                    <ul className="list-disc pl-10">
                        {uses.map((item, index) => (
                            <UsesListItem
                                key={index}
                                title={item.title}
                            >
                                {item.children}
                            </UsesListItem>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}