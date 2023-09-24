import Button from "~/components/button/index.jsx";

export default function UsesHeader(){
    return (
        <>
            <img src="/img/icon-uses.png" alt="icon uses"/>
            <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                /uses
            </h1>
            <div className="pr-2 pt-3">
                <span className="font-body text-xl font-light text-primary dark:text-white">
                  <span>Inspired by</span>
                  <span className="font-medium text-green dark:text-green-light"> Wes Bos</span>
                  <span> and his project, </span>
                  <Button as="a" variant="text" href="https://uses.tech/">uses.tech</Button>
                  <span>.</span>
                </span>
            </div>
        </>
    )
}