import Image from "next/image";
import TechText from "@/components/TechText";
import ShinyText from "@/components/ShinyText";
export default function HomeHero() {
  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-1 items-end overflow-hidden bg-background"
      aria-labelledby="home-hero-title"
    >
      <Image
        src="/images/home/hero/bg-image.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-start object-scale-down -mt-60 lg:mt-0 lg:object-cover object-center"
        aria-hidden="true"
      />
      <div className="mx-auto  w-full max-w-341.5 px-6 py-14 md:py-8 lg:gap-16 lg:px-12 lg:py-10">
        <div className="relative z-10 min-w-0 max-w-124 md:col-start-2 md:justify-self-end md:pb-4 md:text-right">
          <TechText
            text="Regressus Devs"
            className="h-28 sm:h-32 lg:h-36"
            fontWeight={600}
            fontSize={150}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="none"
            introDuration={2}
            clickKick
            guides={false}
            fontFamily=""
            letterSpacing={-0.05}
            accentColor="currentColor"
            reach={200}
            softness={0.7}
            lineStyle="dashed"
            strokeWidth={1.5}
            speed={1}
            bounce={0.4}
            selection
            labels
            color="currentColor"
            align="center"
            draggable
            sweep
          />
          {/* <p className="mt-2 max-w-116 text-base  md:max-w-58 lg:mt-4 lg:max-w-116 ">
            We design, build, and automate the tools your business needs, so you
            can stop repeating tasks and start growing.
          </p> */}

          <ShinyText
            text="From repetitive tasks to rapid growth. We design and build the automation powering modern teams."
            color="#b5b5b5"
            shineColor="#ffffff"
            speed={5}
            shineWidth={40}
            softness={0.8}
            trigger="loop"
            delay={0}
            angle={120}
            bands={1}
            glow={0}
            direction="left"
            easing="smooth"
            yoyo={false}
            followPointer={false}
            pauseOnHover={false}
            disabled={false}
            className="mt-4"
          />

          {/* <div className="mt-2.5 flex flex-wrap items-center justify-end gap-2 lg:mt-12 lg:gap-3">
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-[0.7rem] font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary md:h-5 md:px-3 md:text-xs lg:h-9 lg:px-4 lg:text-sm"
            >
              Book a free call
            </Link>
            <Link
              href="#services"
              className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-transparent px-5 text-[0.7rem] font-medium text-foreground transition-colors hover:border-input hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary md:h-5 md:px-3 md:text-xs lg:h-9 lg:px-4 lg:text-sm"
            >
              Our services
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
