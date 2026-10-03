import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const gallery = [
  {
    src: '/gallery/corporate-classroom.png',
    alt: 'Instructor presenting cloud architecture to professionals in a corporate training classroom',
    caption: 'Onsite corporate batch',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/gallery/online-batch.png',
    alt: 'Trainer delivering a virtual instructor-led session with attendees on a video call grid',
    caption: 'Virtual instructor-led session',
    span: '',
  },
  {
    src: '/gallery/workshop.png',
    alt: 'Small group of professionals collaborating in an automation workshop around a glass table',
    caption: 'Automation workshop',
    span: '',
  },
  {
    src: '/gallery/seminar.png',
    alt: 'Speaker addressing business professionals at a corporate technology seminar',
    caption: 'Enterprise seminar',
    span: 'lg:col-span-2',
  },
]

export function GallerySection() {
  return (
    <section className="relative border-y border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Inside Our Programmes"
          title={
            <>
              Classrooms, workshops and{' '}
              <span className="text-gradient">live cohorts</span>
            </>
          }
          description="Delivered onsite at client campuses, virtually across time zones, and as intensive weekend bootcamps."
        />

        <div className="mt-14 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={i * 0.08}
              direction="zoom"
              className={`group glass relative overflow-hidden rounded-3xl ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-semibold">
                {item.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
