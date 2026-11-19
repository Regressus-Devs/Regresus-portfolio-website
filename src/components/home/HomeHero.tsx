import Image from "next/image";
import TechText from "@/components/TechText";
import ShinyText from "@/components/ShinyText";
export default function HomeHero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-1 items-end overflow-hidden"
      aria-labelledby="home-hero-title"
    >
      <Image
        src="/images/home/hero/bg-image.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center hidden lg:block"
        aria-hidden="true"
      />
      <Image
        src="/images/home/hero/bg-image-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center lg:hidden"
        aria-hidden="true"
      />
      <div className="mx-auto  w-full max-w-341.5 px-6 py-14 md:py-8 lg:gap-16 lg:px-12 lg:py-10">
        <div className="relative z-10 min-w-0 max-w-124 md:justify-self-end md:text-right  border-white/15 bg-white/5 py-4 rounded-md">
          <TechText
            text="Regressus Devs"
            className=""
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
            direction="right"
            easing="smooth"
            yoyo={false}
            followPointer={false}
            pauseOnHover={false}
            disabled={false}
            className="text-center"
          />
        </div>
      </div>
    </section>
  );
}
