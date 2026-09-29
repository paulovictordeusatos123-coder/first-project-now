import { ArrowUpRight, BriefcaseBusiness, Camera, Check, Instagram, Link2, MessageCircle, Sparkles, WandSparkles } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Sites profissionais",
    text: "Sites modernos, responsivos e pensados para apresentar seu trabalho com clareza e profissionalismo.",
  },
  {
    icon: Link2,
    title: "Links personalizados",
    text: "Páginas exclusivas para Instagram e redes sociais, reunindo seus principais canais em um só lugar.",
  },
  {
    icon: WandSparkles,
    title: "Fotos com IA",
    text: "Criação de imagens personalizadas para profissionais, marcas e momentos especiais.",
  },
];

const photoTypes = ["Formatura", "Aniversário", "Profissões", "Gestação", "Retratos profissionais", "Conteúdo para redes sociais"];

const projects = [
  {
    title: "Jéssica Luana",
    category: "Maquiadora",
    description: "Site profissional desenvolvido para apresentar o trabalho, os serviços e a presença digital da maquiadora.",
    url: "https://hug-of-code-25.lovable.app/",
  },
  {
    title: "Susape Augusto",
    category: "Site profissional",
    description: "Projeto desenvolvido para apresentar a presença profissional e os principais conteúdos do cliente.",
    url: "https://susapeaugusto.com.br/",
  },
  {
    title: "Grupo Vertice",
    category: "Site profissional",
    description: "Site profissional desenvolvido para apresentar o negócio e seus serviços.",
    url: "http://grupovertice.rmbuilder.site/vertice-auto-center",
  },
  {
    title: "Atelier barbers",
    category: "Site profissional",
    description: "Site profissional desenvolvido para apresentar a barbearia e seus serviços.",
    url: "https://barber-sparkle-kit.lovable.app/",
  },
  {
    title: "ML estética",
    category: "Site profissional",
    description: "Site profissional desenvolvido para apresentar a clínica e seus serviços de estética.",
    url: "https://clinicademoml.lovable.app/",
  },
  {
    title: "RG relogios",
    category: "Site profissional",
    description: "Site profissional desenvolvido para apresentar a marca e seus produtos.",
    url: "https://rgrelogios.lovable.app/",
  },
  {
    title: "Bio personalizada 01",
    category: "Bio personalizada",
    description: "Link personalizado para reunir informações e canais de contato em um só lugar.",
    url: "https://fluxostudio.my.canva.site/modelo01",
  },
  {
    title: "Bio personalizada 02",
    category: "Bio personalizada",
    description: "Link personalizado para reunir informações e canais de contato em um só lugar.",
    url: "https://fluxostudio.my.canva.site/modelo02",
  },
  {
    title: "Bio personalizada 03",
    category: "Bio personalizada",
    description: "Link personalizado para reunir informações e canais de contato em um só lugar.",
    url: "https://fluxostudio.my.canva.site/modelo03",
  },
]

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="text-lg font-semibold tracking-tight">
            Paulo <span className="text-white/45">Moraes</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex">
            <a href="#servicos" className="transition hover:text-white">Serviços</a>
            <a href="#projetos" className="transition hover:text-white">Projetos</a>
            <a href="#sobre" className="transition hover:text-white">Sobre</a>
            <a href="#contato" className="transition hover:text-white">Contato</a>
          </nav>
          <a
            href="#contato"
            className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Vamos conversar
          </a>
        </div>
      </header>

      <section id="inicio" className="relative flex min-h-screen items-center pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.09),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.04),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Design digital • Sites • IA
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Seu trabalho merece ser visto da melhor forma!
            </h1>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projetos" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
                Ver meu portfólio <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#contato" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/[0.05]">
                Falar comigo
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-[4/5] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.1] via-white/[0.03] to-transparent p-3 shadow-2xl shadow-black">
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                    <Sparkles size={20} className="text-white/70" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/35">PM / 2026</span>
                </div>
                <div>
                  <p className="text-sm text-white/35">O que eu crio</p>
                  <p className="mt-3 text-3xl font-medium tracking-tight">Sites que apresentam. Imagens que valorizam.</p>
                  <div className="mt-8 space-y-3">
                    {["Websites profissionais", "Links para Instagram", "Fotos criativas com IA"].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-white/65">
                        <Check size={15} className="text-white/50" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">Serviços</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Soluções digitais para colocar sua marca no lugar certo.</h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Icon size={19} className="text-white/70" />
                </div>
                <h3 className="mt-8 text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/35">Portfólio</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Projetos selecionados</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/40">Uma seleção de projetos desenvolvidos para profissionais e negócios que querem apresentar seu trabalho de forma mais profissional na internet.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#090909]">
                <a href={project.url} target="_blank" rel="noreferrer" className="relative block aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=900`}
                    alt={`Capa do site ${project.title}`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-white/70 backdrop-blur-sm">
                    {project.category === "Bio personalizada" ? "Bio personalizada" : "Site"}
                  </div>
                </a>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/30">{project.category}</p>
                  <h3 className="mt-2 text-xl font-medium">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">{project.description}</p>
                  <a href={project.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white">
                    Ver projeto <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">Fotos com IA</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Imagens pensadas para você se apresentar melhor.</h2>
          </div>
          <div>
            <p className="text-base leading-7 text-white/50">Também crio fotos personalizadas com inteligência artificial para profissionais e momentos importantes, com propostas visuais que podem ser usadas nas redes sociais, divulgação e apresentação pessoal.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {photoTypes.map((type) => (
                <span key={type} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60">{type}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">Sobre mim</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Prazer, eu sou Paulo.</h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl leading-8 text-white/70">Há cerca de 2 anos trabalho com criação digital, ajudando profissionais autônomos e empresas a terem uma apresentação mais profissional na internet.</p>
            <p className="mt-5 text-base leading-7 text-white/40">Meu trabalho une design, tecnologia e criatividade para criar experiências simples de entender e bonitas de apresentar — desde um site completo até uma página personalizada para o Instagram ou uma imagem criada com IA.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/35">Contato</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Tem uma ideia? Vamos transformar em algo profissional.</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/45">Entre em contato para conversar sobre seu site, seu link personalizado ou suas fotos com IA.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
              <MessageCircle size={17} /> WhatsApp
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/75 transition hover:border-white/30 hover:bg-white/[0.05]">
              <Instagram size={17} /> Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>Paulo Moraes</span>
          <span>© 2026 — Criação digital, sites e imagens com IA.</span>
        </div>
      </footer>
    </main>
  );
}
