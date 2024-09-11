import Hero from "./hero/hero";
import About from "./about/about";
import Courses from "./courses/courses";
import Feature from "./feature/feature";
import Review from "./review/review";
import Articles from "./articles/articles";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Feature />
      <Review />
      <Articles />
    </>
  );
}
