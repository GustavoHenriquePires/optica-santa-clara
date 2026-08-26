"use client";

import { useEffect, useState } from "react";

type B64ImageProps = { src: string; alt: string; loading?: "eager" | "lazy"; fetchPriority?: "high" | "low" | "auto" };

function B64Image({ src, alt, loading = "lazy", fetchPriority }: B64ImageProps) {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((response) => {
        if (!response.ok) throw new Error(`Falha ao carregar ${src}`);
        return response.text();
      })
      .then((base64) => {
        if (!cancelled) setDataUrl(`data:image/avif;base64,${base64.trim()}`);
      })
      .catch(() => {
        if (!cancelled) setDataUrl("");
      });
    return () => { cancelled = true; };
  }, [src]);

  return <img src={dataUrl || undefined} alt={alt} loading={loading} fetchPriority={fetchPriority} />;
}

const units = [
  {
    name: "Loja Centro 1",
    address: "Rua Antônio Maria Coelho, 1735",
    image: "/loja-centro-1.webp",
    label: "Centro de Campo Grande",
    map: "https://www.google.com/maps/search/?api=1&query=Rua+Antonio+Maria+Coelho+1735+Campo+Grande+MS",
  },
  {
    name: "Loja Centro 2",
    address: "Rua Padre João Crippa, 903",
    image: "/loja-centro-2.webp",
    label: "Centro de Campo Grande",
    map: "https://www.google.com/maps/search/?api=1&query=Rua+Padre+Joao+Crippa+903+Campo+Grande+MS",
  },
  {
    name: "Loja Aero Rancho",
    address: "Av. Ezequiel Ferreira Lima, 715",
    image: "/loja-aero-rancho.webp",
    label: "Região do Aero Rancho",
    map: "https://www.google.com/maps/search/?api=1&query=Avenida+Ezequiel+Ferreira+Lima+715+Campo+Grande+MS",
  },
];

const services = [
  {
    eyebrow: "Armações",
    title: "Design que acompanha você.",
    text: "Modelos selecionados para unir conforto, acabamento e personalidade no dia a dia.",
    image: "/site-v2/artioli-black.b64",
    alt: "Armação preta Artioli apoiada em estojo preto",
  },
  {
    eyebrow: "Curadoria",
    title: "Cor, forma e presença.",
    text: "Uma seleção que vai do clássico ao marcante, com orientação para encontrar o formato certo para o seu rosto.",
    image: "/site-v2/carolina-blue.b64",
    alt: "Armação azul Carolina Herrera sobre estojo vermelho",
  },
  {
    eyebrow: "Acabamento",
    title: "Detalhes que fazem diferença.",
    text: "Materiais, construção e proporção avaliados de perto para uma escolha bonita e confortável.",
    image: "/site-v2/carolina-black-detail.b64",
    alt: "Detalhe de armação preta Carolina Herrera em frente ao estojo vermelho",
  },
];

export default function Home() {
  const [activeUnit, setActiveUnit] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const unit = units[activeUnit];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const previousUnit = () => setActiveUnit((current) => (current - 1 + units.length) % units.length);
  const nextUnit = () => setActiveUnit((current) => (current + 1) % units.length);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Óptica Santa Clara — início" onClick={closeMenu}>
          <img src="/santa-clara-symbol.png" alt="" aria-hidden="true" width="49" height="44" />
          <span className="brand-name">
            <strong>Santa Clara</strong>
            <small>Óptica</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Óculos</a>
          <a href="#destaques">Destaques</a>
          <a href="#unidades">Unidades</a>
        </nav>

        <a className="header-cta" href="#unidades">Visite uma unidade <span>↗</span></a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-shell ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav id="menu-mobile" className="mobile-nav" aria-label="Navegação móvel">
          <a href="#sobre" onClick={closeMenu}><span>01</span> Sobre</a>
          <a href="#servicos" onClick={closeMenu}><span>02</span> Óculos</a>
          <a href="#destaques" onClick={closeMenu}><span>03</span> Destaques</a>
          <a href="#unidades" onClick={closeMenu}><span>04</span> Unidades</a>
          <a href="#contato" onClick={closeMenu}><span>05</span> Contato</a>
        </nav>
      </div>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="titulo-principal">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Óptica Santa Clara · Campo Grande</p>
            <h1 id="titulo-principal">Seu olhar<br />merece <em>presença.</em></h1>
            <p className="hero-text">Óculos, lentes e atendimento próximo em uma curadoria feita para quem quer enxergar bem sem abrir mão do estilo.</p>
            <div className="hero-actions">
              <a className="pill primary" href="#servicos">Conhecer a seleção <span>↓</span></a>
              <a className="pill ghost" href="#unidades">Encontrar uma unidade <span>↗</span></a>
            </div>
            <div className="hero-meta">
              <div><strong>03</strong><span>unidades em<br />Campo Grande</span></div>
              <div><strong>01</strong><span>cuidado do exame<br />à escolha final</span></div>
            </div>
          </div>

          <figure className="hero-media">
            <B64Image src="/site-v2/hero-vogue.b64" alt="Campanha Sasha x Vogue Eyewear fotografada em ambiente de óptica" loading="eager" fetchPriority="high" />
            <figcaption><span>Eyewear</span><strong>Estilo que começa pelo olhar.</strong></figcaption>
          </figure>
        </section>

        <section className="about" id="sobre" aria-labelledby="titulo-sobre">
          <div className="about-copy">
            <p className="section-label">SANTA CLARA</p>
            <h2 id="titulo-sobre">Mais que escolher um óculos. <em>Encontrar o seu.</em></h2>
            <p>Na Santa Clara, cada escolha começa entendendo sua rotina, seu estilo e o que você precisa enxergar melhor. A partir daí, a nossa equipe cuida dos detalhes.</p>
            <a className="text-link" href="#unidades">Conheça nossas unidades <span>→</span></a>
          </div>

          <div className="about-gallery" aria-label="Seleção de produtos Santa Clara">
            <figure className="about-main">
              <B64Image src="/site-v2/transitions-santa.b64" alt="Estojo Santa Clara e armação ao lado de material Transitions" loading="lazy" />
            </figure>
            <figure className="about-small">
              <B64Image src="/site-v2/santa-pink.b64" alt="Estojo Santa Clara e armação rosa sobre fundo claro" loading="lazy" />
              <figcaption>Curadoria feita<br />com atenção aos detalhes.</figcaption>
            </figure>
          </div>
        </section>

        <section className="services" id="servicos" aria-labelledby="titulo-servicos">
          <div className="section-head dark">
            <div>
              <p className="section-label">PARA TODOS OS OLHARES</p>
              <h2 id="titulo-servicos">Escolha com calma.<br /><em>Use com confiança.</em></h2>
            </div>
            <p>Armações com estilos diferentes, acabamento de qualidade e uma equipe pronta para ajudar você a comparar cada opção de perto.</p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <B64Image src={service.image} alt={service.alt} loading="lazy" />
                <div className="service-overlay" />
                <span className="service-index">0{index + 1}</span>
                <div className="service-copy">
                  <p>{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <span>{service.text}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial" id="destaques" aria-labelledby="titulo-destaques">
          <div className="editorial-intro">
            <p className="section-label">DESTAQUES DA CURADORIA</p>
            <h2 id="titulo-destaques">Detalhes que mudam<br />o jeito de <em>vestir o olhar.</em></h2>
          </div>

          <div className="editorial-grid">
            <article className="editorial-card editorial-black">
              <B64Image src="/site-v2/carolina-black-case.b64" alt="Armação preta Carolina Herrera sobre estojo vermelho" loading="lazy" />
              <div className="editorial-caption"><span>Carolina Herrera</span><strong>Clássico, preciso, elegante.</strong></div>
            </article>
            <article className="editorial-card editorial-red">
              <B64Image src="/site-v2/carolina-red.b64" alt="Armação vinho Carolina Herrera com estojo vermelho" loading="lazy" />
              <div className="editorial-caption"><span>Carolina Herrera</span><strong>Cor com sofisticação.</strong></div>
            </article>
          </div>
        </section>

        <section className="units" id="unidades" aria-labelledby="titulo-unidades">
          <div className="section-head">
            <div>
              <p className="section-label">ONDE ESTAMOS</p>
              <h2 id="titulo-unidades">Uma Santa Clara<br /><em>perto de você.</em></h2>
            </div>
            <p>Três unidades em Campo Grande para você experimentar armações, tirar dúvidas e receber atendimento de perto.</p>
          </div>

          <div className="unit-carousel" aria-roledescription="carrossel" aria-label="Unidades da Óptica Santa Clara">
            <div className="unit-photo">
              <img key={unit.image} src={unit.image} alt={`Fachada da ${unit.name}`} width="960" height="720" decoding="async" />
              <span className="photo-count">0{activeUnit + 1} / 0{units.length}</span>
              <div className="carousel-arrows">
                <button type="button" onClick={previousUnit} aria-label="Unidade anterior">←</button>
                <button type="button" onClick={nextUnit} aria-label="Próxima unidade">→</button>
              </div>
            </div>

            <div className="unit-details" aria-live="polite">
              <p className="unit-location">{unit.label}</p>
              <h3>{unit.name}</h3>
              <div className="address-block">
                <span>Endereço</span>
                <p>{unit.address}<br />Campo Grande — MS</p>
              </div>
              <a className="route-button" href={unit.map} target="_blank" rel="noreferrer">Ver rota no mapa <span>↗</span></a>
              <div className="unit-dots" role="tablist" aria-label="Escolher unidade">
                {units.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    className={index === activeUnit ? "active" : ""}
                    onClick={() => setActiveUnit(index)}
                    aria-label={`Mostrar ${item.name}`}
                    aria-selected={index === activeUnit}
                    role="tab"
                    tabIndex={index === activeUnit ? 0 : -1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="titulo-contato">
          <p className="section-label">VAMOS ENCONTRAR O SEU?</p>
          <h2 id="titulo-contato">Seu próximo óculos<br />pode começar <em>hoje.</em></h2>
          <p>Escolha uma unidade e venha experimentar de perto.</p>
          <a className="pill contact-pill" href="#unidades">Ver unidades <span>↑</span></a>
        </section>

        <footer>
          <a className="footer-brand" href="#inicio" aria-label="Voltar ao início">
            <img src="/logo-santa-clara.png" alt="Óptica Santa Clara" width="125" height="86" />
          </a>
          <p>© 2026 Óptica Santa Clara. Todos os direitos reservados.</p>
          <a href="#inicio">Voltar ao topo ↑</a>
        </footer>
      </main>
    </>
  );
}
