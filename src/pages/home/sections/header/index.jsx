import { Author } from "~/assets/img";

export default function Header() {
  return (
    <div className="border-b border-grey-lighter py-16 lg:py-20">
      <div>
        <img src={Author} className="h-16 w-16" alt="author" />
      </div>
      <h1 className="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
        Hi, I’m John Doe.
      </h1>
      <p className="pt-3 font-body text-xl font-light text-primary dark:text-white">
        A software engineer and open-source advocate enjoying the sunny life in
        Barcelona, Spain.
      </p>
      <a
        href="/"
        className="mt-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl"
      >
        Say Hello!
      </a>
    </div>
  );
}
