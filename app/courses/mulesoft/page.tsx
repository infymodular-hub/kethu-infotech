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
                Mulesoft Training Program
              </span>

              <h1 className="mt-8 text-4xl font-extrabold leading-tight lg:text-6xl">
                Master
                <span className="text-cyan-400">
                  {" "}Mulesoft Integration{" "}
                </span>
                <br />
                with Enterprise Real-Time Projects
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                 MuleSoft Anypoint Platform with industry experts. Learn API-led
connectivity, DataWeave, CloudHub, API Manager, enterprise integrations,
and real-world implementation through hands-on projects and placement-focused training.
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
                      MuleSoft API Dashboard
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      Live API Monitor
                    </h3>
                  </div>

                  <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse" />
                </div>

                <div className="space-y-5">

                  <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 flex items-center justify-between">
                    <span>Salesforce → SAP</span>
                    <span className="font-semibold text-green-400">
                      Connected
                    </span>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 flex items-center justify-between">
                    <span>REST API → Oracle</span>
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
      Become an Enterprise Integration Expert
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
      This course is designed for students, software professionals, integration developers, and API engineers who want to master MuleSoft Anypoint Platform, build enterprise-grade APIs, and implement real-world integration solutions with hands-on projects.
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

{/* ================= WHY LEARN MULESOFT ================= */}

<section className="mx-auto max-w-7xl px-6 py-20">

  <div className="text-center">

    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
      Why Learn Mulesoft?
    </span>

    <h2 className="mt-6 text-4xl font-bold">
      Everything You Need To Become Job Ready
    </h2>

  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">⚡</div>
      <h3 className="mt-5 text-xl font-bold">API-Led Connectivity</h3>
      <p className="mt-3 text-slate-400">
        Learn how to build reusable APIs using MuleSoft's API-led connectivity architecture.1500+ Connectors
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">🔗</div>
      <h3 className="mt-5 text-xl font-bold">Anypoint Platform</h3>
      <p className="mt-3 text-slate-400">
       Master Anypoint Studio, Exchange, API Manager, Runtime Manager, and CloudHub.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">📈</div>
      <h3 className="mt-5 text-xl font-bold">DataWeave</h3>
      <p className="mt-3 text-slate-400">
        Transform XML, JSON, CSV, and other data formats using DataWeave.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">🧑‍💻</div>
      <h3 className="mt-5 text-xl font-bold">Enterprise Integrations</h3>
      <p className="mt-3 text-slate-400">
        Build real-world integrations between Salesforce, SAP, Workday, Oracle, and REST APIs.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <div className="text-4xl">🏆</div>
      <h3 className="mt-5 text-xl font-bold">CloudHub Deployment</h3>
      <p className="mt-3 text-slate-400">
        Deploy Mule applications to CloudHub and manage APIs in production.
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
      Complete mulesoft  Program
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
      From beginner concepts to enterprise integrations with real-time projects.
    </p>
  </div>

  <div className="mt-16 space-y-8 max-w-5xl mx-auto">

    <CurriculumCard
      number="01"
      title="Introduction to MuleSoft"
      level="Beginner"
      subtitle="Beginner Module"
      duration="2 Hours"
      lessons="6 Lessons"
      lab="Hands-on Lab"
      topics={[
  "What is MuleSoft?",
  "API-Led Connectivity",
  "Anypoint Platform Overview",
  "Installing Anypoint Studio",
  "Creating Your First Mule Project",
  "Understanding Mule Events",
]}
    />

    <CurriculumCard
    title="Anypoint Studio & Mule Flows"
subtitle="Core Development"
duration="3 Hours"
lessons="8 Lessons"
lab="Hands-on Lab"

topics={[
  "Mule Application Structure",
  "Flows & Sub Flows",
  "HTTP Listener",
  "Logger Component",
  "Variables",
  "Transform Message",
]}
    />

    <CurriculumCard
      title="DataWeave Fundamentals"
subtitle="Data Transformation"
duration="4 Hours"
lessons="10 Lessons"
lab="DataWeave Lab"

topics={[
  "DataWeave Basics",
  "JSON to XML",
  "XML to JSON",
  "CSV Transformations",
  "Functions",
  "Real-Time Examples",
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
      Ready to Become a mulesoft Expert?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
       MuleSoft Anypoint Platform, API Development, DataWeave, CloudHub, and Enterprise Integration through real-time projects and hands-on training. Become job-ready with expert guidance and placement assistance.
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