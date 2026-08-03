import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import LinksBanner from '../components/LinksBanner'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

const Home = () => (
  <div className="overflow-x-clip">
    <Hero />

    <main className="mx-auto w-full max-w-[1243px] px-5 sm:px-8 lg:px-10">
      <p className="mt-8 max-w-[690px] text-xs text-muted lg:mt-12">
        © Copyright warning: All the designs and business concepts represented in this document is
        copyrights of concerned business entities and not allowed to used or copied without
        permission from concerned firms.
      </p>

      <h2 className="mt-10 text-[26px] font-semibold text-charcoal lg:mt-12 lg:text-[32px]">
        Notable Projects
      </h2>

      <div className="mt-8 flex flex-col gap-12 lg:gap-[90px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 lg:mt-[43px]">
        <LinksBanner />
      </div>

      <div className="mt-12 lg:mt-[64px]">
        <CTASection />
      </div>

      <Footer />
    </main>
  </div>
)

export default Home
