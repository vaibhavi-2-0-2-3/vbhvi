import PageLayout from "@/components/PageLayout";
import Hero from "@/components/hero";
import WorkEducation from "@/components/work-education";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkEducation />
      <FeaturedProjects />
    </>
  );
}
