export default function PluggedLLCWebsite() {
  const services = [
    {
      title: "EV Charging Solutions",
      description:
        "End-to-end support for new and existing electric vehicle charging stations, including product sourcing, installation coordination, upgrades, and ongoing station oversight.",
    },
    {
      title: "Products & Equipment",
      description:
        "Provision of EV charging hardware, related components, and practical solutions tailored to commercial, municipal, and multi-site needs.",
    },
    {
      title: "Operations & Management",
      description:
        "Management support for charging infrastructure with a focus on reliability, performance, site coordination, and long-term service success.",
    },
    {
      title: "Contract Consulting",
      description:
        "Consulting for organizations seeking guidance on charging infrastructure planning, vendor coordination, contract readiness, and project execution.",
    },
    {
      title: "Government & Public Sector Responses",
      description:
        "Capability to respond to local, state, and federal requests, helping agencies and partners move projects forward with organized, responsive support.",
    },
    {
      title: "Existing Station Optimization",
      description:
        "Assessment and support for existing sites that need expansion, modernization, operational improvements, or management assistance.",
    },
  ];

  const highlights = [
    "New and existing EV charging stations",
    "Product sourcing and service coordination",
    "Management support for charging networks",
    "Contract consulting for public and private clients",
    "Responsive support for local, state, and federal opportunities",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-400/10 to-slate-950" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute top-32 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <header className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold tracking-tight">Plugged LLC</div>
              <div className="text-sm text-slate-300">EV Charging • Consulting • Contract Support</div>
            </div>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
            >
              Contact Us
            </a>
          </header>

          <div className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
                Practical EV Infrastructure Support
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Powering the future of charging infrastructure.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Plugged LLC provides products, services, and management for new or existing EV charging stations, along with contract consulting and public-sector response support.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-2xl bg-emerald-400 px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
                >
                  Explore Services
                </a>
                <a
                  href="#capabilities"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  View Capabilities
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <div className="mb-2 h-2 w-12 rounded-full bg-emerald-400" />
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Built for charging projects that need momentum.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            We help organizations launch, improve, and manage EV charging solutions with a focus on dependable delivery and responsive support.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Support across private and public-sector opportunities.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Plugged LLC is positioned to support commercial, community, and government-facing charging initiatives with a flexible service model that spans products, coordination, and consulting.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <ul className="space-y-4 text-slate-200">
              <li className="rounded-2xl border border-white/10 p-4">Local project responses and coordinated support</li>
              <li className="rounded-2xl border border-white/10 p-4">State and regional charging initiatives</li>
              <li className="rounded-2xl border border-white/10 p-4">Federal request readiness and contract support</li>
              <li className="rounded-2xl border border-white/10 p-4">Consulting for expansion, upgrades, and operational strategy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Why Plugged LLC</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Reliable support for evolving EV infrastructure needs.</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Whether you need help bringing a new site online, improving an existing station, or preparing for a contract opportunity, Plugged LLC offers focused support designed around execution.
            </p>
          </div>

          <div id="contact" className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Let’s discuss your project.</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Ready to talk about EV charging products, station management, consulting, or contract support? Reach out to Plugged LLC to start the conversation.
            </p>
            <div className="mt-6 space-y-3 text-slate-200">
              <div><span className="font-medium">Business:</span> Plugged LLC</div>
              <div><span className="font-medium">Email:</span> yourname@pluggedllc.com</div>
              <div><span className="font-medium">Phone:</span> (555) 555-5555</div>
              <div><span className="font-medium">Service Area:</span> Local, State, and Federal Opportunities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
