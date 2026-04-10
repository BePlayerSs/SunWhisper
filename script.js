const siteConfig = {
  discordUrl: "#",
  storeUrl: "#",
};

const vipTiers = [
  {
    id: "rose",
    name: "Rose",
    label: "Seleccion inicial VIP",
    accent: "#aa0000",
    accentSoft: "#ffd7d7",
    description:
      "Un rango VIP pensado para abrir la puerta a una experiencia mas comoda, visual y util dentro de SunWhisper, con mejoras constantes y contenido recurrente.",
    stats: [
      { value: "15", label: "Cofres virtuales" },
      { value: "60", label: "Homes maximos" },
      { value: "15", label: "Protecciones" },
      { value: "3", label: "Cofres mensuales" },
    ],
    badges: ["Base VIP", "Reclamo unico", "Soporte mensual"],
    benefits: [
      "Acceso a las funciones y comandos del sistema Free actual.",
      "Desbloqueo del kit exclusivo [RO] como reclamo unico del rango.",
      "Tres cofres mensuales de apoyo para equipo, materiales base y progreso general.",
      "Mas capacidad en homes, protecciones, cofres virtuales y venta por lote.",
      "Uso sin tiempo de espera en /tpa, /home, /warp y /spawn.",
    ],
    commands: [
      { name: "/ah sell", description: "Vende hasta 15 items al mismo tiempo." },
      { name: "/jobs join", description: "Amplia el limite de jobs multiples hasta 11." },
      { name: "/pv 15", description: "Desbloquea 15 cofres virtuales." },
      { name: "/sethome", description: "Sube el maximo de homes a 60." },
      { name: "/ps", description: "Amplia las protecciones disponibles hasta 15." },
    ],
    extras: [
      "[pos], [item], [ender] y [inv] para compartir informacion en chat.",
      "/sit, /lay, /crawl y /spin para acciones sociales y visuales.",
      "Bypass de cooldown en comandos de movilidad frecuentes.",
    ],
    uniqueClaim: {
      title: "Kit unico Rose",
      summary:
        "Entrega inicial con equipo de netherite, utilidades valiosas y herramientas listas para dar una base solida desde el inicio.",
      contents: [
        "26 stacks de experiencia.",
        "Set inicial de netherite con espada, pico, hacha, pala y azada.",
        "Casco de tortuga, casco netherite, elytra y armadura de netherite.",
        "Mazo, arco, ballesta, tridente, cana, mechero, escudo y tijera.",
        "2 Sacos del Errante para ampliar capacidad desde el primer dia.",
      ],
    },
    monthlyClaim: {
      title: "3 cofres grandes cada mes",
      summary:
        "Sistema mensual compacto enfocado en supervivencia, materiales base y progreso temprano del jugador.",
      contents: [
        "Cofre de equipo y supervivencia.",
        "Cofre de materiales base para seguir construyendo y avanzando.",
        "Cofre de progreso general para mantener el ritmo del rango.",
      ],
    },
  },
  {
    id: "daisy",
    name: "Daisy",
    label: "Seleccion preferente",
    accent: "#ffe680",
    accentSoft: "#fff4c5",
    description:
      "Un rango VIP comodo y versatil, pensado para quienes buscan una experiencia solida con mejoras visibles, utilidad diaria y contenido recurrente dentro de SunWhisper.",
    stats: [
      { value: "20", label: "Cofres virtuales" },
      { value: "70", label: "Homes maximos" },
      { value: "20", label: "Protecciones" },
      { value: "5", label: "Cofres mensuales" },
    ],
    badges: ["Escala desde Rose", "Extras visuales", "Mas utilidad diaria"],
    benefits: [
      "Acceso a los comandos y utilidades desbloqueadas por el rango VIP anterior.",
      "Desbloqueo del kit exclusivo [DS] como reclamo unico del rango.",
      "Cinco cofres mensuales con equipo, recursos y materiales de apoyo.",
      "Mas capacidad en homes, protecciones, cofres virtuales y venta por lote.",
      "Uso sin tiempo de espera en /tpa, /home, /warp y /spawn.",
    ],
    commands: [
      { name: "/ah sell", description: "Vende hasta 20 items al mismo tiempo." },
      { name: "/jobs join", description: "Amplia el limite de jobs multiples hasta 12." },
      { name: "/pv 20", description: "Desbloquea 20 cofres virtuales." },
      { name: "/sethome", description: "Sube el maximo de homes a 70." },
      { name: "/ps", description: "Amplia las protecciones disponibles hasta 20." },
    ],
    extras: [
      "/swcolor y /tags para darle mas identidad al chat.",
      "[pos], [item], [ender] y [inv] para compartir informacion importante.",
      "/feed, /hat y poses sociales para hacer la experiencia mas comoda y expresiva.",
    ],
    uniqueClaim: {
      title: "Kit unico Daisy",
      summary:
        "Una entrega fuerte de netherite y utilidades premium para jugadores que quieren un salto claro sin depender del sistema de fusion.",
      contents: [
        "26 stacks de experiencia.",
        "Herramientas y armas de netherite con encantamientos superiores.",
        "Casco de tortuga, elytra y armadura completa de netherite.",
        "Mazo, arco, ballesta, tridente, cana, mechero, escudo y tijera.",
        "2 Sacos del Errante para inventario adicional.",
      ],
    },
    monthlyClaim: {
      title: "5 cofres grandes cada mes",
      summary:
        "Reclamo mensual pensado para combate, bloques base, granja, redstone, progreso y recursos generales.",
      contents: [
        "Cofre de equipo mensual y supervivencia.",
        "Cofre de bloques base para construccion.",
        "Cofre de granja y utilidad.",
        "Cofre de redstone y progreso.",
        "Cofre de encantamientos y recursos generales.",
      ],
    },
  },
  {
    id: "lilium",
    name: "Lilium",
    label: "Seleccion premium",
    accent: "#f49ac2",
    accentSoft: "#ffd8ea",
    description:
      "Un rango VIP elegante, completo y comodo, pensado para quienes buscan una experiencia premium con gran utilidad, presencia visual y contenido recurrente dentro de SunWhisper.",
    stats: [
      { value: "25", label: "Cofres virtuales" },
      { value: "80", label: "Homes maximos" },
      { value: "25", label: "Protecciones" },
      { value: "7", label: "Cofres mensuales" },
    ],
    badges: ["Acceso a Kard", "Escala VIP", "Mayor presencia visual"],
    benefits: [
      "Acceso a los comandos y utilidades desbloqueadas por los rangos VIP anteriores.",
      "Desbloqueo del kit exclusivo [LM] como reclamo unico del rango.",
      "Siete cofres mensuales con recursos, equipo y materiales de uso frecuente.",
      "Acceso a la Kard de jugadores con informacion de prestigio, registro y estadisticas.",
      "Mas capacidad en homes, protecciones, cofres virtuales y venta por lote.",
    ],
    commands: [
      { name: "/ah sell", description: "Vende hasta 25 items al mismo tiempo." },
      { name: "/jobs join", description: "Amplia el limite de jobs multiples hasta 13." },
      { name: "/pv 25", description: "Desbloquea 25 cofres virtuales." },
      { name: "/sethome", description: "Sube el maximo de homes a 80." },
      { name: "/ps", description: "Amplia las protecciones disponibles hasta 25." },
    ],
    extras: [
      "/swcolor, /heads y /tags para un perfil mas llamativo.",
      "/swnick, /feed, /hat, /pet create, /petblock y /cbt.",
      "[pos], [item], [ender], [inv] y poses sociales para enriquecer la experiencia del chat.",
    ],
    uniqueClaim: {
      title: "Kit unico Lilium",
      summary:
        "Entrega premium con netherite avanzado, totems, faros, capacidad extra y herramientas listas para aprovechar fusion desde el primer momento.",
      contents: [
        "20 stacks de experiencia y 10 totems Lilium apilables.",
        "2 Sacos del Errante y 4 faros.",
        "Set de combate y herramientas Lilium con encantamientos altos.",
        "Casco de tortuga, casco netherite, elytra y armadura con sistema de fusion.",
        "Arco, mazo, tridente, ballesta, cana, mechero, escudo y tijera version Lilium.",
      ],
    },
    monthlyClaim: {
      title: "7 cofres grandes cada mes",
      summary:
        "Sistema mensual amplio para combate, construccion, granja, movilidad, nether/end, encantamientos y recursos generales.",
      contents: [
        "Cofre de combate y herramientas.",
        "Cofre de construccion.",
        "Cofre de granja.",
        "Cofre de movilidad.",
        "Cofre de nether y end.",
        "Cofre de encantamientos.",
        "Cofre de recursos generales.",
      ],
    },
  },
  {
    id: "sunflower",
    name: "SunFlower",
    label: "Seleccion de prestigio",
    accent: "#d4aa3b",
    accentSoft: "#fff0b8",
    description:
      "El rango VIP mas completo de SunWhisper, pensado para quienes buscan la experiencia mas alta, mas comoda y con mayor prestigio dentro del servidor.",
    stats: [
      { value: "30", label: "Cofres virtuales" },
      { value: "99", label: "Homes maximos" },
      { value: "30", label: "Protecciones" },
      { value: "10", label: "Cofres mensuales" },
    ],
    badges: ["Top tier", "Acceso a Kard", "Comandos premium completos"],
    benefits: [
      "Acceso a los comandos y utilidades desbloqueadas por los rangos VIP anteriores.",
      "Desbloqueo del kit exclusivo [SW] como reclamo unico del rango.",
      "Diez cofres mensuales con equipo, materiales, recursos, exploracion y progreso.",
      "Acceso a la Kard de jugadores con informacion de prestigio y estadisticas relevantes.",
      "Mayor capacidad en homes, protecciones, cofres virtuales y venta por lote.",
      "Movilidad fluida con comandos sin cooldown en accesos frecuentes.",
    ],
    commands: [
      { name: "/ah sell", description: "Vende hasta 30 items al mismo tiempo." },
      { name: "/jobs join", description: "Amplia el limite de jobs multiples hasta 14." },
      { name: "/pv 30", description: "Desbloquea 30 cofres virtuales." },
      { name: "/sethome", description: "Sube el maximo de homes a 99." },
      { name: "/ps", description: "Amplia las protecciones disponibles hasta 30." },
      { name: "/tpa /home /warp /spawn", description: "Uso sin cooldown para movilidad instantanea." },
    ],
    extras: [
      "/clan chatmsg y /clan menu para gestion VIP dentro del clan.",
      "/swcolor, /heads, /tags y /swnick para presencia total en chat.",
      "/heal, /feed, /hat, /invsee, /endersee, /pet create, /petblock, /fly y /disguise.",
      "[pos], [item], [ender], [inv], /cbt y poses sociales para una experiencia mas expresiva.",
    ],
    uniqueClaim: {
      title: "Kit unico SunFlower",
      summary:
        "Entrega de prestigio con totems, mascotas, fusion avanzada, herramientas premium y equipo pensado para entrar al rango mas alto con una presencia brutal.",
      contents: [
        "20 stacks de experiencia y 16 totems SunFlower apilables.",
        "2 Sacos del Errante, 2 pets exclusivos y 8 faros.",
        "Set SunFlower de combate y herramientas con encantamientos altisimos.",
        "Casco de tortuga, casco netherite, elytra y armadura fusionada de prestigio.",
        "Arco, mazo, tridente, ballesta, cana, mechero, escudo y tijera version SunFlower.",
      ],
    },
    monthlyClaim: {
      title: "10 cofres grandes cada mes",
      summary:
        "Reclamo mensual mas ambicioso del sistema: combate, herramientas, construccion, movilidad, encantamientos, recursos, granja, redstone y exploracion.",
      contents: [
        "Cofre de equipo mensual de netherite.",
        "Cofres de materiales y construccion.",
        "Cofres de movilidad y exploracion.",
        "Cofres de granja, redstone y utilidad.",
        "Cofres de encantamientos, recursos y progreso general.",
      ],
    },
  },
];

const tierGrid = document.querySelector("#tier-grid");
const tierDetail = document.querySelector("#tier-detail");
const revealNodes = document.querySelectorAll(".reveal");

let selectedTierId = "sunflower";

function renderTierCards() {
  tierGrid.innerHTML = vipTiers
    .map((tier) => {
      const isActive = tier.id === selectedTierId;

      return `
        <button
          class="tier-card ${isActive ? "is-active" : ""}"
          type="button"
          data-tier="${tier.id}"
          aria-pressed="${isActive}"
          style="--tier-accent: ${tier.accent}; --tier-accent-soft: ${tier.accentSoft};"
        >
          <div class="tier-card__header">
            <div>
              <p class="eyebrow">${tier.label}</p>
              <h4 class="tier-card__title">${tier.name}</h4>
            </div>
            <span class="tier-card__tag">${tier.stats[3].value} mensuales</span>
          </div>

          <p class="tier-card__meta">${tier.description}</p>

          <div class="tier-card__stats">
            ${tier.stats
              .map(
                (stat) => `
                  <div class="tier-stat">
                    <strong>${stat.value}</strong>
                    <span>${stat.label}</span>
                  </div>
                `
              )
              .join("")}
          </div>

          <span class="tier-card__action">Ver detalle completo</span>
        </button>
      `;
    })
    .join("");

  tierGrid.querySelectorAll("[data-tier]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTierId = button.dataset.tier;
      renderTierCards();
      renderTierDetail();
      document.querySelector("#detalle-vip")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderTierDetail() {
  const tier = vipTiers.find((item) => item.id === selectedTierId);

  if (!tier) {
    tierDetail.innerHTML = `
      <div class="detail-empty">
        <div>
          <h4>No se encontro el rango.</h4>
          <p>Selecciona otra tarjeta para seguir viendo el detalle VIP.</p>
        </div>
      </div>
    `;
    return;
  }

  tierDetail.setAttribute("style", `--tier-accent: ${tier.accent}; --tier-accent-soft: ${tier.accentSoft};`);

  tierDetail.innerHTML = `
    <div class="detail-panel">
      <div class="detail-panel__main">
        <div class="detail-panel__header">
          <div class="detail-panel__title">
            <span class="detail-badge">${tier.label}</span>
            <h4>${tier.name}</h4>
          </div>

          <p class="detail-description">${tier.description}</p>

          <div class="detail-stats">
            ${tier.stats
              .map(
                (stat) => `
                  <div class="detail-stat">
                    <strong>${stat.value}</strong>
                    <span>${stat.label}</span>
                  </div>
                `
              )
              .join("")}
          </div>

          <div class="detail-badges">
            ${tier.badges.map((badge) => `<span class="detail-badge">${badge}</span>`).join("")}
          </div>
        </div>

        <div class="detail-summary">
          <h5>Ventajas principales</h5>
          <ul class="detail-list">
            ${tier.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
          </ul>
        </div>

        <div class="detail-accordion">
          <details open>
            <summary>Comandos incluidos</summary>
            <div class="detail-accordion__content">
              <ul class="detail-command-list">
                ${tier.commands
                  .map(
                    (command) => `
                      <li><code>${command.name}</code> - ${command.description}</li>
                    `
                  )
                  .join("")}
              </ul>
            </div>
          </details>

          <details>
            <summary>Extras VIP y funciones sociales</summary>
            <div class="detail-accordion__content">
              <ul class="detail-list">
                ${tier.extras.map((extra) => `<li>${extra}</li>`).join("")}
              </ul>
            </div>
          </details>

          <details>
            <summary>${tier.uniqueClaim.title}</summary>
            <div class="detail-accordion__content">
              <p>${tier.uniqueClaim.summary}</p>
              <ul class="detail-list">
                ${tier.uniqueClaim.contents.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </details>

          <details>
            <summary>${tier.monthlyClaim.title}</summary>
            <div class="detail-accordion__content">
              <p>${tier.monthlyClaim.summary}</p>
              <ul class="detail-list">
                ${tier.monthlyClaim.contents.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </details>
        </div>
      </div>

      <aside class="detail-panel__aside">
        <div class="detail-aside-card">
          <h5>Resumen rapido</h5>
          <p>${tier.name} esta pensado para ${
            tier.id === "rose"
              ? "dar una entrada fuerte al sistema VIP."
              : tier.id === "daisy"
              ? "subir el nivel con mas comodidad, extras visuales y mejor soporte mensual."
              : tier.id === "lilium"
              ? "mezclar prestigio, utilidad premium y una identidad visual mas marcada."
              : "ser el techo del sistema VIP con maxima comodidad, presencia y contenido."
          }</p>
        </div>

        <div class="detail-aside-card">
          <h5>Ideal para</h5>
          <div class="detail-panel__chips">
            ${
              tier.id === "rose"
                ? `
                  <span class="detail-chip">Primer VIP</span>
                  <span class="detail-chip">Base util</span>
                  <span class="detail-chip">Supervivencia</span>
                `
                : tier.id === "daisy"
                ? `
                  <span class="detail-chip">Progreso serio</span>
                  <span class="detail-chip">Mas capacidad</span>
                  <span class="detail-chip">Uso diario</span>
                `
                : tier.id === "lilium"
                ? `
                  <span class="detail-chip">Presencia premium</span>
                  <span class="detail-chip">Kard</span>
                  <span class="detail-chip">Mas extras</span>
                `
                : `
                  <span class="detail-chip">Prestigio maximo</span>
                  <span class="detail-chip">Comandos top</span>
                  <span class="detail-chip">Fusion avanzada</span>
                `
            }
          </div>
        </div>

        <div class="detail-aside-card">
          <h5>Nota visual</h5>
          <p>Este bloque queda perfecto para que despues le metamos previews reales de cofres, renders de items o capturas del servidor.</p>
          <p class="detail-note">Si luego me pasas imagenes, te las integro aqui con el mismo estilo.</p>
        </div>
      </aside>
    </div>
  `;
}

function applySiteConfig() {
  document.querySelectorAll("[data-config-link]").forEach((anchor) => {
    const configKey = anchor.dataset.configLink;
    const href = siteConfig[configKey];

    if (!href || href === "#") {
      anchor.classList.add("is-disabled");
      anchor.setAttribute("aria-disabled", "true");
      return;
    }

    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noreferrer noopener";

    if (configKey === "discordUrl") {
      anchor.textContent = "Entrar al Discord";
    }
  });
}

function setupRevealAnimation() {
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

renderTierCards();
renderTierDetail();
applySiteConfig();
setupRevealAnimation();
