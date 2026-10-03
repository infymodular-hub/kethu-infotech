"use client";

import Image from "next/image";
import {
  Award,
  Briefcase,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "12+",
    title: "Years Experience",
  },
  {
    icon: Award,
    value: "100+",
    title: "Enterprise Projects",
  },
  {
    icon: Users,
    value: "2000+",
    title: "Students Trained",
  },
  {
    icon: Star,
    value: "4.9",
    title: "Student Rating",
  },
];

const technologies = [
  "Workato",
  "MuleSoft",
  "Salesforce",
  "REST APIs",
  "Automation",
  "AI Integration",
  "Cloud",
  "DevOps",
];

const highlights = [
  "Real-Time Enterprise Projects",
  "Corporate Training Experience",
  "Interview Preparation",
  "Resume Building Support",
  "Placement Assistance",
  "Lifetime Learning Community",
];

export default function TrainerProfile() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center mb-16">

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Meet Your Trainer
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Learn from an Industry Expert
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Gain practical knowledge from real enterprise automation projects
            and accelerate your career with expert guidance.
          </p>

        </div>

       <div className="grid lg:grid-cols-[450px_1fr] gap-14 items-start">

          <div className="relative">

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

              <Image
                src="/images/kishor.png"
                alt="Kishor Reddy"
                width={650}
                height={850}
                className="h-[700px] w-full object-cover"
                priority
              />

            </div>

          </div>

          <div>            <h3 className="text-4xl font-bold text-white">
              Kishor Reddy
            </h3>

            <p className="mt-3 text-xl font-semibold text-cyan-400">
              Founder & Chief Trainer – KETHU INFOTECH
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Kishor Reddy is an Enterprise Integration & Automation Specialist
              with over 12 years of hands-on industry experience. He has
              delivered enterprise solutions using Workato, MuleSoft,
              Salesforce, APIs, Cloud technologies, and modern automation
              platforms for startups, mid-sized businesses, and Fortune-level
              organizations.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              His training focuses on practical implementation, real-time
              projects, interview preparation, resume building, certification
              guidance, and placement support so students become job-ready
              rather than learning only theory.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">

              {stats.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
                  >

                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-cyan-500/15 p-3">
                        <Icon className="h-7 w-7 text-cyan-400" />
                      </div>

                      <div>

                        <h4 className="text-3xl font-bold text-white">
                          {item.value}
                        </h4>

                        <p className="text-sm text-slate-400">
                          {item.title}
                        </p>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

            <div className="mt-14">

              <h4 className="text-xl font-semibold text-white">
                Technology Expertise
              </h4>

              <div className="mt-5 flex flex-wrap gap-3">

                {technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

            <div className="mt-10">

              <h4 className="text-xl font-semibold text-white">
                Why Learn from Kishor Reddy?
              </h4>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">                {highlights.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />

                    <span className="text-slate-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <button className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400">

                Enroll Now

                <ArrowRight className="ml-2 h-5 w-5" />

              </button>

              <button className="inline-flex items-center justify-center rounded-xl border border-cyan-500/40 bg-transparent px-8 py-4 text-base font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10">

                Book Free Demo

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}