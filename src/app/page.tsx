
const capabilities = [
  {
    number: "01",
    symbol: "✳",
    title: "Escreva sem começar do zero.",
    description:
      "Transforme uma ideia, um rascunho ou algumas palavras em textos completos, criativos e bem estruturados.",
    tag: "ESCRITA INTELIGENTE",
  },
  {
    number: "02",
    symbol: "◉",
    title: "A IA precisa entender você.",
    description:
      "Envie imagens, documentos e referências. Dê contexto para que os resultados façam sentido.",
    tag: "CONTEXTO E ARQUIVOS",
  },
  {
    number: "03",
    symbol: "↗",
    title: "Uma ideia pode ir muito além.",
    description:
      "Adapte seu conteúdo para diferentes formatos, públicos e objetivos sem perder sua essência.",
    tag: "MÚLTIPLOS FORMATOS",
  },
];

const examples = [
  { type: "PUBLICAÇÃO", title: "Uma legenda que conecta.", color: "bg-[#F15B40]" },
  { type: "CAMPANHA", title: "Uma ideia que vende.", color: "bg-[#DDF36A]" },
  { type: "ROTEIRO", title: "Uma história que prende.", color: "bg-[#B8A7E8]" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F1EEE6] text-[#20211E] selection:bg-[#F15B40] selection:text-white">

      {/* HEADER */}
      <header className="border-b border-[#20211E]/15">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center bg-[#F15B40] text-2xl font-black text-white">
              p.
            </span>
            <span className="text-2xl font-black tracking-[-0.08em]">
              posta<span className="text-[#F15B40]">ai</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-xs font-bold uppercase tracking-wider md:flex">
            <a href="#estudio" className="transition hover:text-[#F15B40]">
              O estúdio
            </a>
            <a href="#possibilidades" className="transition hover:text-[#F15B40]">
              Possibilidades
            </a>
            <a href="#processo" className="transition hover:text-[#F15B40]">
              Como funciona
            </a>
          </nav>

          <a
            href="#estudio"
            className="bg-[#20211E] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#F15B40]"
          >
            Conhecer o estúdio ↗
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-16 md:px-12 md:pt-24">

        <div className="mb-9 flex items-center justify-between border-b border-[#20211E]/20 pb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
            UM NOVO JEITO DE CRIAR
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F15B40]">
            INTELIGÊNCIA ARTIFICIAL / 001
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          <div className="relative">
            <div className="mb-5 inline-flex rotate-[-2deg] items-center gap-2 bg-[#DDF36A] px-4 py-2 text-xs font-black uppercase tracking-wider">
              <span>✳</span> Ideias em movimento
            </div>

            <h1 className="max-w-4xl text-[clamp(3.8rem,8vw,7.8rem)] font-black leading-[0.88] tracking-[-0.085em]">
              VOCÊ
              <br />
              IMAGINA.
              <br />
              <span className="relative inline-block text-[#F15B40]">
                A GENTE
                <span className="absolute -bottom-1 left-0 h-[5px] w-full bg-[#F15B40]" />
              </span>
              <br />
              TRANSFORMA.
            </h1>

            <div className="mt-10 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-md text-base leading-7 text-[#20211E]/70 md:text-lg">
                Suas ideias merecem mais do que um simples comando.
                Crie, explore, experimente e transforme possibilidades
                em conteúdos com a ajuda da inteligência artificial.
              </p>

              <a
                href="#estudio"
                className="group flex w-fit items-center gap-4 border-b-2 border-[#F15B40] pb-2 text-sm font-black uppercase tracking-wide"
              >
                Descubra o PostaAI
                <span className="text-xl text-[#F15B40] transition-transform group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* COMPOSIÇÃO GRÁFICA */}
          <div className="relative mx-auto w-full max-w-[570px]">

            <div className="absolute -right-3 -top-8 z-10 flex h-24 w-24 rotate-12 items-center justify-center rounded-full bg-[#DDF36A] text-center text-xs font-black uppercase leading-tight md:-right-7">
              SUA
              <br />
              PRÓXIMA
              <br />
              GRANDE IDEIA
              <br />
              ✳
            </div>

            <div className="relative bg-[#20211E] p-5 text-white shadow-[12px_12px_0px_#F15B40] md:p-7">

              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <span className="text-sm font-black tracking-tight">
                  posta<span className="text-[#F15B40]">ai</span>
                  <span className="ml-2 text-[9px] font-normal uppercase tracking-widest text-white/50">
                    / LABORATÓRIO
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#DDF36A]">
                  ● EM CRIAÇÃO
                </span>
              </div>

              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    SUA IDEIA COMEÇA AQUI
                  </span>
                  <span className="text-[#F15B40]">✳</span>
                </div>

                <div className="min-h-[155px] border border-white/20 bg-white/[0.04] p-5">
                  <p className="text-sm leading-7 text-white/90">
                    Quero criar uma campanha para apresentar
                    um produto novo. Preciso de algo criativo,
                    que chame atenção e desperte curiosidade...
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="bg-[#F15B40] px-3 py-1.5 text-[9px] font-bold uppercase">
                      CAMPANHA
                    </span>
                    <span className="border border-white/20 px-3 py-1.5 text-[9px] uppercase">
                      CRIATIVIDADE
                    </span>
                    <span className="border border-white/20 px-3 py-1.5 text-[9px] uppercase">
                      MARKETING
                    </span>
                  </div>
                </div>

                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/20" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DDF36A]">
                    UMA POSSIBILIDADE
                  </span>
                  <div className="h-px flex-1 bg-white/20" />
                </div>

                <div className="bg-[#F1EEE6] p-5 text-[#20211E]">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      EXEMPLO DE CRIAÇÃO
                    </span>
                    <span className="text-lg text-[#F15B40]">✳</span>
                  </div>

                  <h3 className="mt-5 text-3xl font-black leading-none tracking-tight">
                    O NOVO
                    <br />
                    COMEÇA
                    <br />
                    COM UMA IDEIA.
                  </h3>

                  <p className="mt-4 max-w-xs text-xs leading-5 text-[#20211E]/65">
                    Descubra uma nova experiência. Prepare-se para
                    conhecer algo que vai transformar sua rotina.
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#20211E]/20 pt-3">
                    <span className="text-[9px] font-bold uppercase tracking-wider">
                      EXEMPLO ILUSTRATIVO
                    </span>
                    <span className="font-black text-[#F15B40]">↗</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-[9px] uppercase tracking-widest text-white/40">
                <span>IDEIAS GANHAM FORMA</span>
                <span>POSTAAI © 2026</span>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-5 hidden h-16 w-16 items-center justify-center rounded-full border border-[#20211E]/30 text-3xl md:flex">
              ↗
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA DE IMPACTO */}
      <section className="overflow-hidden border-y-2 border-[#20211E] bg-[#DDF36A] py-5">
        <div className="flex min-w-max animate-[marquee_25s_linear_infinite] items-center gap-8 whitespace-nowrap text-2xl font-black uppercase tracking-tighter md:text-3xl">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              CRIAR É SÓ O COMEÇO
              <span className="text-[#F15B40]">✳</span>
              IMAGINAR NÃO TEM LIMITES
              <span className="text-[#F15B40]">✳</span>
              SUA IDEIA MERECE EXISTIR
              <span className="text-[#F15B40]">✳</span>
            </span>
          ))}
        </div>
      </section>

      {/* O ESTÚDIO */}
      <section id="estudio" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F15B40]">
              01 / O ESTÚDIO
            </span>
            <h2 className="mt-7 text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-6xl">
              NÃO É
              <br />
              SOBRE A IA.
              <br />
              É SOBRE
              <br />
              O QUE VOCÊ
              <span className="text-[#F15B40]"> CRIA.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-between">
            <p className="max-w-2xl text-xl leading-9 text-[#20211E]/70 md:text-2xl">
              A tecnologia é a ferramenta. A ideia é sua.
              O PostaAI nasce para aproximar sua criatividade
              das possibilidades da inteligência artificial.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-[#20211E]/20 pt-6">
              <div>
                <span className="text-4xl font-black tracking-tight">01</span>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#20211E]/55">
                  UMA IDEIA
                </p>
              </div>
              <div>
                <span className="text-4xl font-black tracking-tight text-[#F15B40]">∞</span>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#20211E]/55">
                  POSSIBILIDADES
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSSIBILIDADES */}
      <section id="possibilidades" className="bg-[#20211E] px-6 py-24 text-[#F1EEE6] md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F15B40]">
                02 / POSSIBILIDADES
              </span>
              <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
                SUA CRIATIVIDADE
                <br />
                NÃO TEM UM
                <span className="text-[#DDF36A]"> FORMATO.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/55">
              Diferentes objetivos. Diferentes formatos.
              Uma ferramenta para ajudar você a explorar tudo isso.
            </p>
          </div>

          <div className="mt-16 grid gap-px border border-white/20 md:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="group flex min-h-[320px] flex-col justify-between bg-[#20211E] p-7 transition-colors hover:bg-[#2B2C28] md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl text-[#F15B40]">
                    {item.symbol}
                  </span>
                  <span className="text-xs text-white/35">
                    {item.number}
                  </span>
                </div>

                <div>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#DDF36A]">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-black leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATOS */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F15B40]">
              03 / UMA IDEIA, VÁRIOS CAMINHOS
            </span>
            <h2 className="mt-7 text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
              PENSE
              <br />
              EM UMA
              <br />
              IDEIA.
              <br />
              EXPLORE
              <span className="text-[#F15B40]"> TUDO.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-[#20211E]/65">
              Uma mesma ideia pode se transformar em uma publicação,
              uma campanha, um roteiro, um e-mail e muito mais.
              O limite está na sua imaginação.
            </p>
          </div>

          <div className="space-y-3">
            {examples.map((example, i) => (
              <div
                key={example.type}
                className={`flex min-h-[125px] items-center justify-between p-6 md:p-8 ${example.color} ${i === 1 ? "text-[#20211E]" : "text-white"}`}
              >
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-70">
                    {example.type}
                  </span>
                  <h3 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">
                    {example.title}
                  </h3>
                </div>
                <span className="text-4xl font-light">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="border-y border-[#20211E]/20 bg-[#DDF36A] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <span className="text-xs font-black uppercase tracking-[0.25em]">
            04 / COMO FUNCIONA
          </span>

          <h2 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.07em] md:text-7xl">
            TRÊS PASSOS.
            <br />
            INFINITAS
            <span className="text-[#F15B40]"> POSSIBILIDADES.</span>
          </h2>

          <div className="mt-16 grid gap-10 border-t border-[#20211E]/30 pt-8 md:grid-cols-3">
            {[
              ["01", "Conte sua ideia", "Explique o que deseja criar. Pode ser um texto, uma imagem ou simplesmente uma inspiração."],
              ["02", "Compartilhe o contexto", "Envie referências, arquivos e instruções para a IA compreender melhor sua necessidade."],
              ["03", "Crie e aperfeiçoe", "Receba sugestões, ajuste os detalhes e transforme sua ideia no resultado desejado."],
            ].map(([number, title, description]) => (
              <div key={number}>
                <span className="text-5xl font-black tracking-tighter">
                  {number}
                </span>
                <h3 className="mt-7 text-2xl font-black tracking-tight">
                  {title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#20211E]/65">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENCERRAMENTO */}
      <section className="bg-[#F1EEE6] px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1440px] text-center">
          <span className="inline-block rotate-[-4deg] bg-[#F15B40] px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
            O próximo capítulo é seu.
          </span>

          <h2 className="mx-auto mt-9 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.08em] md:text-8xl">
            E SE SUA
            <br />
            PRÓXIMA IDEIA
            <br />
            <span className="text-[#F15B40]">COMEÇASSE AQUI?</span>
          </h2>

          <a
            href="#estudio"
            className="mt-12 inline-flex items-center gap-6 bg-[#20211E] px-8 py-5 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#F15B40]"
          >
            Explorar o PostaAI
            <span className="text-xl">↗</span>
          </a>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-[#20211E]/20 bg-[#F1EEE6] px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-5 sm:flex-row">
          <a href="#" className="text-2xl font-black tracking-[-0.08em]">
            posta<span className="text-[#F15B40]">ai</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-wider">
            <a href="#estudio" className="hover:text-[#F15B40]">
              O estúdio
            </a>
            <a href="#possibilidades" className="hover:text-[#F15B40]">
              Possibilidades
            </a>
            <a href="#processo" className="hover:text-[#F15B40]">
              Como funciona
            </a>
          </div>

          <span className="text-[10px] text-[#20211E]/50">
            © 2026 PostaAI. Todos os direitos reservados.
          </span>
        </div>
      </footer>
    </main>
  );
}