"use client";

import { useState } from "react";

const services = [
  { number: "01", brand: "Ray-Ban", title: "Óculos de grau", text: "Armações originais com design marcante, conforto e personalidade para acompanhar sua rotina.", image: "https://images.miaburton.com/2025/ray-ban-rx5448-2000-376x376.jpg", className: "service-rayban-optical" },
  { number: "02", brand: "Varilux", title: "Lentes de qualidade", text: "Tecnologia em lentes progressivas para uma visão nítida, confortável e natural em todas as distâncias.", image: "https://www.interoptik.no/globalassets/brilleglass/varilux/nor_vxxr_non_media_stephen_banner_1440_x1080__closeup_3000x1500.jpg?transform=DownFit&width=1000", className: "service-varilux" },
  { number: "03", brand: "Ray-Ban", title: "Óculos de sol", text: "Modelos icônicos com proteção, qualidade e o estilo inconfundível que atravessa gerações.", image: "https://assets2.glasses.com/prod-onecp-record-files/pieyewear/6ad42b4b-f1af-45cc-a6c6-b35d00db1f85/0RB3025__L0205__STD__shad__qt.png?impolicy=GL_parameters_transp_clone1440", className: "service-rayban-sun" },
];

const units = [
  { name: "Loja Centro 1", address: "Rua Antônio Maria Coelho, 1735", image: "/loja-centro-1.webp", label: "Centro de Campo Grande", map: "https://www.google.com/maps/search/?api=1&query=Rua+Antonio+Maria+Coelho+1735+Campo+Grande+MS" },
  { name: "Loja Centro 2", address: "Rua Padre João Crippa, 903", image: "/loja-centro-2.webp", label: "Centro de Campo Grande", map: "https://www.google.com/maps/search/?api=1&query=Rua+Padre+Joao+Crippa+903+Campo+Grande+MS" },
  { name: "Loja Aero Rancho", address: "Av. Ezequiel Ferreira Lima, 715", image: "/loja-aero-rancho.webp", label: "Região do Aero Rancho", map: "https://www.google.com/maps/search/?api=1&query=Avenida+Ezequiel+Ferreira+Lima+715+Campo+Grande+MS" },
];

export default function Home() {
  const [activeUnit, setActiveUnit] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const unit = units[activeUnit];
  const previousUnit = () => setActiveUnit((activeUnit - 1 + units.length) % units.length);
  const nextUnit = () => setActiveUnit((activeUnit + 1) % units.length);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Óptica Santa Clara — início">
          <img src="/santa-clara-symbol.png" alt="" aria-hidden="true" width="49" height="44" />
          <span className="brand-name"><strong>Santa Clara</strong><small>Óptica</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#marcas">Marcas</a>
          <a href="#unidades">Unidades</a>
        </nav>
        <a className="button button-small" href="#contato">Fale conosco <span className="button-icon">↗</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
      </header>

      <nav id="menu-mobile" className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Navegação móvel" aria-hidden={!menuOpen}>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
        <a href="#marcas" onClick={() => setMenuOpen(false)}>Marcas</a>
        <a href="#unidades" onClick={() => setMenuOpen(false)}>Unidades</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Fale conosco <span>↗</span></a>
      </nav>

      <main id="conteudo">

      <section className="hero" id="inicio" aria-labelledby="titulo-principal">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Cuidado que você enxerga</p>
          <h1 id="titulo-principal">Veja o mundo<br />com mais <em>clareza.</em></h1>
          <p className="hero-text">Atendimento próximo, lentes de qualidade e armações que combinam com você. Tudo para cuidar da sua visão de um jeito simples e especial.</p>
          <div className="hero-actions">
            <a className="button" href="#contato">Falar com a nossa equipe <span className="button-icon">↗</span></a>
            <a className="text-link" href="#unidades">Encontrar uma unidade <span>↓</span></a>
          </div>
          <div className="trust-row" aria-label="Diferenciais">
            <div><strong>3</strong><span>unidades para<br />atender você</span></div>
            <div><strong>100%</strong><span>dedicação à<br />sua visão</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustração de óculos">
          <div className="red-orbit" />
          <div className="glasses">
            <span className="lens left" /><span className="bridge" /><span className="lens right" />
          </div>
          <p className="visual-note">Seu olhar.<br /><strong>Nossa prioridade.</strong></p>
          <span className="vertical-copy">DESDE SEMPRE, PERTO DE VOCÊ</span>
        </div>
      </section>

      <section className="intro" id="sobre" aria-labelledby="titulo-sobre">
        <p className="section-kicker">SANTA CLARA</p>
        <div>
          <h2 id="titulo-sobre">Mais do que óculos,<br />cuidado em cada detalhe.</h2>
          <p>Entendemos que enxergar bem transforma a rotina. Por isso, unimos orientação atenciosa, variedade e qualidade para ajudar você a fazer uma escolha segura.</p>
        </div>
      </section>

      <section className="services" id="servicos" aria-labelledby="titulo-servicos">
        <div className="section-heading">
          <p className="section-kicker light">O QUE ENCONTRAR</p>
          <h2 id="titulo-servicos">Soluções para<br />todos os olhares.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className={service.className} key={service.number}>
              <img src={service.image} alt={`${service.title} ${service.brand}`} loading="lazy" decoding="async" />
              <div className="service-shade" />
              <div className="service-number">{service.number}</div>
              <div className="service-content">
                <span className="service-brand">{service.brand}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#unidades" aria-label={`Consultar ${service.title}`}>Consultar nas lojas <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brands" id="marcas" aria-labelledby="titulo-marcas">
        <div className="brands-heading">
          <div>
            <p className="section-kicker">MARCAS QUE TRABALHAMOS</p>
            <h2 id="titulo-marcas">Tecnologia nas lentes.<br />Estilo nas armações.</h2>
          </div>
          <p>Escolhas reconhecidas mundialmente, com orientação da nossa equipe para combinar qualidade visual, conforto e personalidade.</p>
        </div>

        <div className="brand-showcase">
          <article className="brand-card varilux-card">
            <img src="https://www.interoptik.no/globalassets/brilleglass/varilux/nor_vxxr_non_media_stephen_banner_1440_x1080__closeup_3000x1500.jpg?transform=DownFit&width=1000" alt="Homem usando lentes progressivas Varilux" loading="lazy" decoding="async" />
            <div className="brand-overlay">
              <span className="brand-type">Lentes progressivas</span>
              <strong className="varilux-logo">VARILUX<sup>®</sup></strong>
              <h3>Clareza em todas<br />as distâncias.</h3>
              <p>Soluções progressivas desenvolvidas para uma visão natural e confortável durante a rotina.</p>
              <a href="#unidades">Consultar opções <span>→</span></a>
            </div>
          </article>

          <article className="brand-card hoya-card">
            <img src="https://static.wixstatic.com/media/b1077c_25f23c54c93a4e8ca6d6bcee60ba7708~mv2.png/v1/fill/w_980%2Ch_979%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/b1077c_25f23c54c93a4e8ca6d6bcee60ba7708~mv2.png" alt="Divulgação de lentes premium Hoya" loading="lazy" decoding="async" />
            <div className="brand-overlay">
              <span className="brand-type">Tecnologia japonesa</span>
              <strong className="hoya-logo">HOYA</strong>
              <h3>Precisão para o seu<br />jeito de enxergar.</h3>
              <p>Lentes desenvolvidas para oferecer conforto visual, nitidez e alta performance.</p>
              <a href="#unidades">Consultar opções <span>→</span></a>
            </div>
          </article>

          <article className="brand-card rayban-card">
            <img src="https://image1.rank-king.jp/article/original/44061.webp" alt="Armação de óculos Ray-Ban preta" loading="lazy" decoding="async" />
            <div className="brand-overlay dark-copy">
              <span className="brand-type">Armações originais</span>
              <strong className="rayban-logo">Ray-Ban</strong>
              <h3>Um clássico que<br />combina com você.</h3>
              <p>Modelos icônicos para quem busca autenticidade, qualidade e estilo em cada detalhe.</p>
              <a href="#unidades">Ver nas lojas <span>→</span></a>
            </div>
          </article>
        </div>
        <p className="brand-disclaimer">Varilux®, HOYA e Ray-Ban® são marcas de seus respectivos proprietários. Consulte modelos e disponibilidade em nossas lojas.</p>
      </section>

      <section className="units" id="unidades" aria-labelledby="titulo-unidades">
        <div className="units-title">
          <div><p className="section-kicker">ONDE ESTAMOS</p><h2 id="titulo-unidades">Uma Santa Clara<br />perto de você.</h2></div>
          <p>Escolha a unidade mais conveniente e fale com nossa equipe antes de visitar.</p>
        </div>
        <div className="unit-carousel" aria-roledescription="carrossel" aria-label="Unidades da Óptica Santa Clara">
          <div className="unit-photo">
            <img key={unit.image} src={unit.image} alt={`Fachada da ${unit.name}`} width="680" height="510" decoding="async" />
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
            <a className="route-button" href={unit.map} target="_blank" rel="noreferrer">
              Ver rota no mapa <span>↗</span>
            </a>
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
        <p className="section-kicker light">VAMOS CONVERSAR?</p>
        <h2 id="titulo-contato">Seu novo olhar<br />começa por aqui.</h2>
        <p>Fale com a equipe da Óptica Santa Clara e encontre a melhor opção para você.</p>
        <a className="button button-white" href="#unidades">Escolher uma unidade <span className="button-icon">→</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><img src="/logo-santa-clara.png" alt="Óptica Santa Clara" width="125" height="86" /></a>
        <p>© 2026 Óptica Santa Clara. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
      </main>
    </>
  );
}
