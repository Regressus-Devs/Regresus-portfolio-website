import HomeHero from "@/components/home/HomeHero";
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Bot,
  Check,
  Code2,
  Compass,
  Cpu,
  Layers3,
  MessageSquareText,
  Workflow,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <HomeHero />
      <main>
        <section
          id="services"
          className="scroll-mt-24 border-b border-border bg-card/20"
          aria-labelledby="services-title"
        >
          <div className="mx-auto w-full max-w-341.5 px-6 py-20 lg:px-12 lg:py-28">
            <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm text-muted-foreground">What we do</p>
                <h2
                  id="services-title"
                  className="max-w-3xl text-3xl font-medium tracking-[-0.06em] sm:text-5xl"
                >
                  Technology that moves work forward.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                Start with the problem. Find the right-sized solution. Build
                something your team can actually use.
              </p>
            </div>
            <div className="grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {[
                {
                  icon: Cpu,
                  title: "IT & systems",
                  text: "Make your tools, infrastructure, and everyday workflows more reliable and easier to manage.",
                  tags: [
                    "Technology review",
                    "Systems improvement",
                    "Workflow planning",
                  ],
                },
                {
                  icon: Code2,
                  title: "Websites & apps",
                  text: "Create a clear, useful digital experience that supports the way your business needs to grow.",
                  tags: [
                    "Web strategy",
                    "Design & development",
                    "Web applications",
                  ],
                },
                {
                  icon: Bot,
                  title: "AI & automation",
                  text: "Spot repetitive work worth improving, then connect practical tools to the way your team operates.",
                  tags: [
                    "Opportunity mapping",
                    "Process automation",
                    "AI integration",
                  ],
                },
              ].map(({ icon: Icon, title, text, tags }) => (
                <article
                  key={title}
                  className="group py-8 md:px-7 md:py-10 first:md:pl-0 last:md:pr-0"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="mb-8 text-foreground/75"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-medium tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-4 min-h-20 text-sm leading-7 text-muted-foreground">
                    {text}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="flex items-center gap-2 text-xs text-foreground/75"
                      >
                        <Check
                          size={13}
                          className="text-muted-foreground"
                          aria-hidden="true"
                        />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-24 border-b border-border bg-card/20"
          aria-labelledby="work-title"
        >
          <div className="mx-auto w-full max-w-341.5 px-6 py-20 lg:px-12 lg:py-28">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Selected work
                </p>
                <h2
                  id="work-title"
                  className="text-3xl font-medium tracking-[-0.06em] sm:text-5xl"
                >
                  Good work starts with a real need.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                Every engagement is different. We bring the right mix of
                strategy, design, and engineering to the problem at hand.
              </p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <article className="min-h-72 border border-border bg-background p-7 sm:p-10">
                <div className="mb-14 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Websites & applications</span>
                  <Code2 size={17} aria-hidden="true" />
                </div>
                <h3 className="max-w-md text-2xl font-medium tracking-tight">
                  Digital experiences built around the people using them.
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                  From an initial product direction to a polished, responsive
                  build, we make complex ideas easier to navigate.
                </p>
              </article>
              <article className="min-h-72 border border-border bg-background p-7 sm:p-10">
                <div className="mb-14 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Systems & automation</span>
                  <Workflow size={17} aria-hidden="true" />
                </div>
                <h3 className="max-w-md text-2xl font-medium tracking-tight">
                  Less friction between the tools and the team.
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                  Thoughtful integrations and automation can help reduce
                  busywork and give teams more time for the work that matters.
                </p>
              </article>
            </div>
            <p className="mt-5 text-xs leading-6 text-muted-foreground">
              Project-specific case studies and client outcomes can be added
              here as they become available.
            </p>
          </div>
        </section>

        <section
          id="solutions"
          className="scroll-mt-24 border-b border-border"
          aria-labelledby="solutions-title"
        >
          <div className="mx-auto grid w-full max-w-341.5 gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-28">
            <div>
              <p className="mb-4 text-sm text-muted-foreground">
                Start with the challenge
              </p>
              <h2
                id="solutions-title"
                className="text-3xl font-medium tracking-[-0.06em] sm:text-5xl"
              >
                What needs to work better?
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
                You don’t need to arrive with a technical brief. A clear picture
                of what’s getting in the way is enough to start.
              </p>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {[
                [
                  "Our tools feel disconnected",
                  "Review the systems and handoffs that slow work down.",
                  Layers3,
                ],
                [
                  "Our website no longer fits",
                  "Shape a stronger digital experience around your business.",
                  Compass,
                ],
                [
                  "Too much work is still manual",
                  "Find practical ways to simplify repeatable tasks.",
                  Workflow,
                ],
                [
                  "We’re unsure where AI belongs",
                  "Separate useful opportunities from noise and hype.",
                  Blocks,
                ],
              ].map(([title, description, Icon]) => {
                const ItemIcon = Icon as typeof Layers3;
                return (
                  <div
                    key={title as string}
                    className="grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6"
                  >
                    <ItemIcon
                      size={19}
                      strokeWidth={1.5}
                      className="text-muted-foreground"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-sm font-medium">{title as string}</h3>
                      <p className="mt-2 text-xs leading-6 text-muted-foreground">
                        {description as string}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="blog"
          className="scroll-mt-24 border-b border-border"
          aria-labelledby="insights-title"
        >
          <div className="mx-auto grid w-full max-w-341.5 gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center lg:px-12 lg:py-20">
            <div>
              <p className="mb-3 text-sm text-muted-foreground">
                Notes & ideas
              </p>
              <h2
                id="insights-title"
                className="text-2xl font-medium tracking-tight sm:text-3xl"
              >
                Practical thinking on technology, without the noise.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                We’ll share useful perspectives on better systems, web
                experiences, and thoughtful automation here.
              </p>
            </div>
            <span className="w-fit border border-border px-3 py-2 text-xs text-muted-foreground">
              Insights coming soon
            </span>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-b border-border bg-card/20"
          aria-labelledby="about-title"
        >
          <div className="mx-auto grid w-full max-w-341.5 gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-28">
            <div>
              <p className="mb-4 text-sm text-muted-foreground">
                About Regressus
              </p>
              <h2
                id="about-title"
                className="text-3xl font-medium tracking-[-0.06em] sm:text-5xl"
              >
                Technology should feel like progress.
              </h2>
            </div>
            <div className="max-w-2xl space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                Regressus works across IT, web development, and practical AI
                adoption to help businesses make better use of technology.
              </p>
              <p>
                We believe useful solutions begin with understanding the
                work—not adding tools for their own sake. That means asking good
                questions, keeping the process clear, and building for
                real-world use.
              </p>
              <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <MessageSquareText
                    size={19}
                    className="mb-4 text-foreground/75"
                    aria-hidden="true"
                  />
                  <h3 className="font-medium text-foreground">
                    Straightforward collaboration
                  </h3>
                  <p className="mt-2 text-xs leading-6">
                    Clear conversations, shared priorities, and no unnecessary
                    complexity.
                  </p>
                </div>
                <div>
                  <Layers3
                    size={19}
                    className="mb-4 text-foreground/75"
                    aria-hidden="true"
                  />
                  <h3 className="font-medium text-foreground">
                    Solutions that fit
                  </h3>
                  <p className="mt-2 text-xs leading-6">
                    Practical choices shaped around your context, team, and
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          id="contact"
          className="scroll-mt-24"
          aria-labelledby="contact-title"
        >
          <div className="mx-auto flex w-full max-w-341.5 flex-col gap-8 px-6 py-20 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-28">
            <div>
              <p className="mb-4 text-sm text-muted-foreground">
                Start a conversation
              </p>
              <h2
                id="contact-title"
                className="max-w-3xl text-3xl font-medium tracking-[-0.06em] sm:text-5xl"
              >
                Let’s make the next step clearer.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                Tell us what you’re working through. We’ll help you explore a
                practical way forward.
              </p>
            </div>
            <a
              href="mailto:"
              className="inline-flex w-fit items-center gap-3 border border-foreground/30 px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Talk to Regressus <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section> */}
      </main>
    </>
  );
}
