export default function StaticLogo() {
    return (
        <a href="/" className="flex items-center font-body text-2xl font-bold text-primary dark:text-white lg:block">
            <span className="text-secondary text-3xl">{`<`}</span>
            <span className="text-3xl">mst</span>
            <span className="text-secondary text-2xl">{`/`}</span>
            <span className="text-secondary text-3xl">{`>`}</span>
        </a>
    )
}