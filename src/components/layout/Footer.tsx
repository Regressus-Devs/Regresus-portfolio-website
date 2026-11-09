import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    title: "Explore",
    links: ["Home", "Services", "Our Work", "About Us"],
  },
  {
    title: "Capabilities",
    links: ["Web development", "Automation", "AI consulting", "IT consulting"],
  },
  {
    title: "Connect",
    links: ["LinkedIn", "GitHub", "Instagram", "Email us"],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto w-full max-w-341.5 px-6 lg:px-12">
        <div className="grid gap-12 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] md:py-20 lg:gap-24">
          <div className="max-w-96">
            <Link href="#" className="inline-flex" aria-label="Regressus Devs home">
              <Image
                src="/images/logo.svg"
                alt="Regressus Devs"
                width={128}
                height={32}
                className="h-10 w-auto"
                style={{ filter: "invert(1)" }}
              />
            </Link>
            <p className="mt-8 max-w-80 text-sm leading-7 text-muted-foreground">
              We design and build the automation powering modern teams.
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex items-center border-b border-foreground/30 pb-1 text-sm text-foreground transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Start a conversation
            </Link>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3"
          >
            {navigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-semibold tracking-[0.12em] text-muted-foreground">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Regressus Devs. All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              href="#"
              className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
