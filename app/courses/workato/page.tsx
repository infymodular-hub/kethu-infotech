import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingActions } from "@/components/floating-actions";
import CurriculumCard from "@/components/CurriculumCard";
import TrainerProfile from "@/components/TrainerProfile";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { CertificationPlacementSection } from "@/components/certification-placement-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { ContactSection } from "@/components/contact-section";
export default function WorkatoPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-background text-white">

        {/* ================= HERO ================= */}

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left Content */}

            <div>
              <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                Enterprise Training Program
              </span>

              <h1 className="mt-8 text-4xl font-extrabold leading-tight lg:text-6xl">
                Master
                <span className="text-cyan-400">
                  {" "}Workato Automation{" "}
                </span>
                <br />
                with Enterprise Real-Time Projects
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Learn Workato from industry experts with enterprise integrations,
                APIs, Salesforce, SAP, ServiceNow, Workday, NetSuite and
                AI-powered automation using real-time projects.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#curriculum"
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
                >
                  View Curriculum
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Book Free Demo
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4">

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center">
                  <h3 className="text-3xl font-bold text-cyan-400">30+</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Hours Training
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center">
                  <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Real Projects
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center">
                  <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Job Assistance
                  </p>
                </div>

              </div>
            </div>

            {/* Right Side */}

            <div className="relative">

              <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-8 shadow-2xl">

                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Enterprise Automation Dashboard
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      Live Workflow Monitor
                    </h3>
                  </div>

                  <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse" />
                </div>

                <div className="space-y-5">

                  <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 flex items-center justify-between">
                    <span>Salesforce → SAP</span>
                    <span className="font-semibold text-green-400">
                      Success
                    </span>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 flex items-center justify-between">
                    <span>Workday → ServiceNow</span>
                    <span className="font-semibold text-cyan-400">
                      Running
                    </span>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 flex items-center justify-between">
                    <span>NetSuite → Slack</span>
                    <span className="font-semibold text-green-400">
                      Success
                    </span>
                  </div>

                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-cyan-500/10 p-5 text-center">
                    <p className="text-3xl font-bold text-cyan-400">
                      150+
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      Integrations
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-500/10 p-5 text-center">
                    <p className="text-3xl font-bold text-emerald-400">
                      99.9%
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      Workflow Success
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>
        {/* ================= COURSE OVERVIEW ================= */}

<section
  id="overview"
  className="mx-auto max-w-7xl px-6 py-20"
>
  <div className="text-center">

    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
      Course Overview
    </span>

    <h2 className="mt-6 text-4xl font-bold">
      Learn Enterprise Automation from Scratch
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
      This course is designed for students, software professionals,
      integration developers and automation engineers who want to build
      enterprise-grade Workato integrations using real-world business
      scenarios.
    </p>

  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-3">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-5xl">🚀</div>

      <h3 className="mt-6 text-2xl font-bold">
        Beginner Friendly
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        No prior Workato knowledge required. Learn everything from
        fundamentals to enterprise integrations.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-5xl">⚙️</div>

      <h3 className="mt-6 text-2xl font-bold">
        Real-Time Projects
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        Build Salesforce, SAP, Workday, ServiceNow, NetSuite,
        Slack and REST API integrations.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-5xl">🎯</div>

      <h3 className="mt-6 text-2xl font-bold">
        Placement Support
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        Resume preparation, mock interviews,
        certification guidance and complete job assistance.
      </p>
    </div>

  </div>

</section>

{/* ================= WHY LEARN WORKATO ================= */}

<section className="mx-auto max-w-7xl px-6 py-20">

  <div className="text-center">

    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
      Why Learn Workato?
    </span>

    <h2 className="mt-6 text-4xl font-bold">
      Everything You Need To Become Job Ready
    </h2>

  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">⚡</div>
      <h3 className="mt-5 text-xl font-bold">No-Code Automation</h3>
      <p className="mt-3 text-slate-400">
        Learn enterprise automation without extensive coding.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">🔗</div>
      <h3 className="mt-5 text-xl font-bold">1500+ Connectors</h3>
      <p className="mt-3 text-slate-400">
        Connect Salesforce, SAP, Oracle, Workday and hundreds of apps.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">📈</div>
      <h3 className="mt-5 text-xl font-bold">High Demand</h3>
      <p className="mt-3 text-slate-400">
        One of the fastest-growing enterprise automation platforms.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">🧑‍💻</div>
      <h3 className="mt-5 text-xl font-bold">Real Projects</h3>
      <p className="mt-3 text-slate-400">
        Work on enterprise use cases with hands-on practice.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">🏆</div>
      <h3 className="mt-5 text-xl font-bold">Interview Ready</h3>
      <p className="mt-3 text-slate-400">
        Mock interviews, resume building and certification guidance.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">💼</div>
      <h3 className="mt-5 text-xl font-bold">100% Job Assistance</h3>
      <p className="mt-3 text-slate-400">
        Dedicated placement support until you get your first opportunity.
      </p>
    </div>

  </div>

</section>
{/* ================= CURRICULUM ================= */}

<section
  id="curriculum"
  className="mx-auto max-w-7xl px-6 py-20"
>
  <div className="text-center">
    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
      Course Curriculum
    </span>

    <h2 className="mt-6 text-4xl font-bold">
      Complete Workato Master Program
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
      From beginner concepts to enterprise integrations with real-time projects.
    </p>
  </div>

  <div className="mt-16 space-y-8 max-w-5xl mx-auto">

    <CurriculumCard
      number="01"
      title="Introduction to Workato"
      level="Beginner"
      subtitle="Beginner Module"
      duration="2 Hours"
      lessons="6 Lessons"
      lab="Hands-on Lab"
      topics={[
        "Workato Overview",
        "Recipes",
        "Connections",
        "Triggers & Actions",
        "Jobs",
        "Best Practices",
      ]}
    />

    <CurriculumCard
      number="02"
      title="Core Workato Concepts"
      level="Beginner"
      subtitle="Workflow Development"
      duration="3 Hours"
      lessons="8 Lessons"
      lab="Hands-on Lab"
      topics={[
        "Variables",
        "Lists",
        "Formula Mode",
        "Conditional Logic",
        "Error Handling",
        "Recipe Testing",
      ]}
    />

    <CurriculumCard
      number="03"
      title="API Integration"
      level="Intermediate"
      subtitle="REST & SOAP APIs"
      duration="4 Hours"
      lessons="10 Lessons"
      lab="API Lab"
      topics={[
        "REST APIs",
        "SOAP APIs",
        "JSON",
        "XML",
        "Authentication",
        "Webhooks",
      ]}
    />

    <CurriculumCard
      number="04"
      title="Enterprise Applications"
      level="Advanced"
      subtitle="Real-Time Integrations"
      duration="6 Hours"
      lessons="12 Lessons"
      lab="Enterprise Project"
      topics={[
        "Salesforce",
        "SAP",
        "ServiceNow",
        "Workday",
        "NetSuite",
        "Slack",
      ]}
    />

  </div>

</section>
{/* ================= TRAINER PROFILE ================= */}



{/* ================= CTA ================= */}

{/* ================= TRAINER PROFILE ================= */}

<TrainerProfile />

{/* ================= TESTIMONIALS ================= */}
<TestimonialsSection />


{/* ================= CTA ================= */}
<PricingSection />
<FAQSection />
<CertificationPlacementSection />
<FinalCTASection />
<ContactSection />

<section
  id="contact"
  className="mx-auto max-w-7xl px-6 py-20"
>
  <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 text-center">

    <h2 className="text-4xl font-bold">
      Ready to Become a Workato Expert?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
      Join our instructor-led enterprise Workato training with real-time projects,
      interview preparation and complete placement support.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

      <a
        href="tel:+918660212999"
        className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/918660212999"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
      >
        💬 WhatsApp
      </a>

    </div>

  </div>
</section>
</main>

<SiteFooter />
<FloatingActions />

</>
);
}