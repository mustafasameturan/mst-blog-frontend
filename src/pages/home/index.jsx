import Header from "~/pages/home/sections/header/index.jsx";
import Story from "~/pages/home/sections/story/index.jsx";
import Posts from "~/pages/home/sections/posts/index.jsx";
import Projects from "~/pages/home/sections/projects/index.jsx";

export default function Home() {
  return (
      <div className="container mx-auto">
        <Header/>
        <Story/>
        <Posts/>
        <Projects/>
      </div>
  );
}
