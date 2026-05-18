const IMG = {
  hero: "assets/images/hero-water.jpg",
  group: "assets/images/group.jpg",
  camp: "assets/images/camp.jpg",
  event: "assets/images/event-ducks-wide.jpg",
  ducks: "assets/images/event-ducks.jpg"
};

const FEATURED_EVENT = {
  route: "#/nikolaus-aktion",
  title: "Nikolaus-Aktion",
  question: "Soll der Hl. Nikolaus auch Ihre (Enkel) Kinder besuchen?",
  description: "Die Nikolaus-Aktion dient im Klickdummy als Beispiel für ein lokales Event, das auf Startseite, Slider, Sidebar und eigener Landingpage sichtbar verbunden wird.",
  dates: "5., 6. & 7. Dezember",
  dateShort: "05.-07.12.",
  place: "Weidling & Umgebung",
  audience: "Familien und Kinder",
  contactName: "Gea Kast",
  contactPhone: "0677 63 14 25 85",
  contactPhoneHref: "tel:+4367763142585",
  contactEmail: "gea.kast@a1.net",
  contactEmailHref: "mailto:gea.kast@a1.net",
  heroImage: "assets/images/nikolaus-hero.png",
  posterImage: "assets/images/nikolaus-poster.png"
};

const HERO_SLIDES = [
  {
    src: "assets/images/home-hero/hero-08.jpg",
    alt: "Pfadfinderzelt mit grüner Fahne auf einem Lagerplatz",
    eyebrow: "Pfadfinder in Weidling",
    title: "Gemeinschaft, Natur und Abenteuer",
    text: "Für Kinder und Jugendliche von 5 bis 21 Jahren in Klosterneuburg-Weidling.",
    href: "#/mitmachen",
    buttonLabel: "Schnuppern anfragen",
    position: "center 62%"
  },
  {
    src: "assets/images/home-hero/hero-02.jpg",
    alt: "Pfadfinderkinder bei einer gemeinsamen Aktion am Berg bei Sonnenuntergang",
    position: "center 56%"
  },
  {
    src: "assets/images/home-hero/hero-03.jpg",
    alt: "Schwarzzelt der Pfadfindergruppe Weidling mit Gruppenlogo",
    position: "center 56%"
  },
  {
    src: "assets/images/home-hero/hero-04.jpg",
    alt: "Schwarzzelt der Pfadfindergruppe Weidling auf einer Wiese",
    position: "center 56%"
  },
  {
    src: "assets/images/home-hero/hero-05.jpg",
    alt: "Pfadfinderinnen und Pfadfinder zwischen Zelten auf einem Lagerplatz",
    position: "center 62%"
  },
  {
    src: "assets/images/home-hero/hero-06.jpg",
    alt: "Leiterinnen und Leiter der Pfadfindergruppe Weidling bei einer Runde im Freien",
    position: "center 60%"
  },
  {
    src: "assets/images/home-hero/hero-07.jpg",
    alt: "Lagerplatz der Pfadfinder bei Sonnenuntergang im Wald",
    position: "center 66%"
  },
  {
    src: "assets/images/home-hero/hero-01.jpg",
    alt: "Pfadfindergruppe Weidling mit Gruppenfahne am Gipfelkreuz",
    position: "center 48%"
  },
  {
    src: "assets/images/home-hero/hero-09.jpg",
    alt: "Pfadfinderteam der Gruppe Weidling bei einer Bergtour am Gipfelkreuz",
    position: "center 46%"
  }
];

const stages = [
  { id: "biber", name: "Biber", age: "5-7 Jahre", time: "Mi 16:30-18:00", place: "Bleibe Weidling", focus: "Spielerisch ankommen, Freundschaft, erste Gemeinschaft" },
  { id: "wiwo", name: "WiWö", age: "7-10 Jahre", time: "Sa 10:00-12:00", place: "Heim Weidling", focus: "Spielend lernen, Natur erleben, Mut und Teamgeist" },
  { id: "gusp", name: "GuSp", age: "10-13 Jahre", time: "Sa 09:45-12:00", place: "Bleibe Weidling", focus: "Abenteuer in Patrullen, Lagertechnik, Verantwortung" },
  { id: "caex", name: "CaEx", age: "13-16 Jahre", time: "Fr 18:30-20:30", place: "Heim Weidling", focus: "Unternehmen planen, Ideen umsetzen, Mitbestimmung" },
  { id: "raro", name: "RaRo", age: "16-21 Jahre", time: "nach Vereinbarung", place: "Heim Weidling", focus: "Projekte, Engagement, Eigenverantwortung" }
];

const events = [
  { date: FEATURED_EVENT.dateShort, title: FEATURED_EVENT.title, target: FEATURED_EVENT.audience, place: FEATURED_EVENT.place, type: "gruppe", href: FEATURED_EVENT.route },
  { date: "15.06.", title: "Gruppenaktion", target: "Alle Stufen", place: "Bleibe Weidling", type: "gruppe" },
  { date: "29.06.", title: "Lagerinfoabend", target: "Eltern", place: "Heim Weidling", type: "eltern" },
  { date: "10.07.", title: "Sommerlager", target: "GuSp / CaEx / RaRo", place: "Tirol", type: "lager" },
  { date: "08.09.", title: "Startfest", target: "Neue und bestehende Familien", place: "Weidling", type: "gruppe" }
];

const downloads = [
  ["Packliste Sommerlager", "PDF", "für Eltern und Mitglieder"],
  ["Anmeldeformular", "PDF", "für neue Familien"],
  ["Ausrüstung und Uniform", "PDF", "für alle Stufen"],
  ["Datenschutzinformation", "PDF", "für Erziehungsberechtigte"]
];

const contacts = [
  ["Gruppenleitung", "gruppenleitung@pfadfinder-weidling.at"],
  ["Schnuppern", "schnuppern@pfadfinder-weidling.at"],
  ["WiWö", "wiwoe@pfadfinder-weidling.at"],
  ["GuSp", "gusp@pfadfinder-weidling.at"]
];

let heroSliderTimer = null;
let headerScrollTicking = false;

function stageRows() {
  return stages.map(stage => [
    `<a href="#/stufe-${stage.id}">${stage.name}</a>`,
    stage.age,
    stage.time,
    stage.place,
    `<a href="#/mitmachen">Schnuppern</a>`
  ]);
}

function table(headers, rows) {
  return `
    <div class="kd-table-wrap">
      <table class="kd-table">
        <thead>
          <tr>${headers.map(header => `<th>${header}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function actions(items) {
  return `<div class="kd-actions">${items.map(item => `<a class="kd-button ${item.primary ? "primary" : ""}" href="${item.href}">${item.label}</a>`).join("")}</div>`;
}

function linkList(items) {
  return `<div class="kd-link-list">${items.map(item => `<a href="${item.href}">${item.label}</a>`).join("")}</div>`;
}

function widget(title, items) {
  return `
    <section class="widget">
      <h2 class="widget-title">${title}</h2>
      <ul class="widget-list">
        ${items.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}

function eventWidget() {
  return `
    <section class="widget widget-event">
      <h2 class="widget-title">Nächstes Event</h2>
      <div class="kd-widget-event">
        <a class="kd-widget-event-image" href="${FEATURED_EVENT.route}" aria-label="Zur Nikolaus-Aktion">
          <img class="kd-image" src="${FEATURED_EVENT.heroImage}" alt="Nikolaus-Aktion der Pfadfinder Weidling">
        </a>
        <p class="kd-meta">${FEATURED_EVENT.dates}</p>
        <h3><a href="${FEATURED_EVENT.route}">${FEATURED_EVENT.title}</a></h3>
        <p>${FEATURED_EVENT.question}</p>
        <a class="kd-button primary" href="${FEATURED_EVENT.route}">Mehr erfahren</a>
      </div>
    </section>
  `;
}

function sidebarSections(...sections) {
  return [eventWidget(), ...sections].join("");
}

function heroSlider() {
  return `
    <div class="kd-hero-slider" data-hero-slider>
      ${HERO_SLIDES.map((slide, index) => `
        <figure class="kd-hero-slide ${slide.title ? "has-caption" : ""} ${index === 0 ? "is-active" : ""}" data-hero-slide aria-hidden="${index === 0 ? "false" : "true"}">
          <img class="kd-hero-image" src="${slide.src}" alt="${slide.alt}" ${slide.position ? `style="object-position: ${slide.position};"` : ""} loading="${index === 0 ? "eager" : "lazy"}" ${index === 0 ? `fetchpriority="high"` : ""} decoding="async">
          ${slide.title ? `
            <figcaption class="kd-hero-caption">
              ${slide.eyebrow ? `<p class="kd-overline">${slide.eyebrow}</p>` : ""}
              <h3>${slide.title}</h3>
              ${slide.text ? `<p>${slide.text}</p>` : ""}
              ${slide.href ? `<a class="kd-button primary" href="${slide.href}">${slide.buttonLabel || "Mehr erfahren"}</a>` : ""}
            </figcaption>
          ` : ""}
        </figure>
      `).join("")}
      <div class="kd-hero-dots" aria-label="Bildwechsel Startseite">
        ${HERO_SLIDES.map((slide, index) => `
          <button
            class="kd-hero-dot ${index === 0 ? "is-active" : ""}"
            type="button"
            data-hero-dot="${index}"
            aria-label="Bild ${index + 1} anzeigen"
            aria-pressed="${index === 0 ? "true" : "false"}"
          ></button>
        `).join("")}
      </div>
    </div>
  `;
}

function form(kind) {
  const topic = kind === "kontakt" ? "Allgemeine Nachricht" : "Schnupperanfrage";
  return `
    <form class="kd-form" data-demo-form>
      <label>Ihr Name
        <input name="name" autocomplete="name" required>
      </label>
      <label>E-Mail
        <input type="email" name="email" autocomplete="email" required>
      </label>
      <label>Thema
        <select name="topic">
          <option>${topic}</option>
          <option>Frage zu Heimstunden</option>
          <option>Frage zu Kosten und Ausrüstung</option>
          <option>Unterstützen oder Sponsoring</option>
        </select>
      </label>
      <label>Nachricht
        <textarea name="message" required></textarea>
      </label>
      <button class="kd-button primary" type="submit">Anfrage senden</button>
      <p class="kd-form-status" role="status">Danke, das Formular ist im Klickdummy erfolgreich ausgelöst worden.</p>
    </form>
  `;
}

function schnupperRequestForm() {
  return `
    <form class="kd-form" data-demo-form>
      <label>Name Erziehungsberechtigte
        <input name="guardian-name" autocomplete="name" required>
      </label>
      <label>Name Kind
        <input name="child-name" autocomplete="off" required>
      </label>
      <label>Geburtsdatum Kind
        <input type="date" name="child-birthdate" required>
      </label>
      <label>Nachricht
        <textarea name="message" placeholder="Gibt es etwas, das wir vor dem ersten Schnuppertermin wissen sollten?"></textarea>
      </label>
      <label>Sicherheitsüberprüfung
        <input
          name="security-check"
          autocomplete="off"
          inputmode="text"
          pattern="[Pp][Ff][Aa][Dd]"
          placeholder="Bitte PFAD eingeben"
          title="Bitte geben Sie PFAD ein."
          required
        >
      </label>
      <p class="kd-form-note">Pflichtfelder helfen uns, die passende Stufe und einen guten ersten Termin vorzubereiten.</p>
      <button class="kd-button primary" type="submit">Schnupperanfrage senden</button>
      <p class="kd-form-status" role="status">Danke, die Schnupperanfrage wurde im Klickdummy erfolgreich ausgelöst.</p>
    </form>
  `;
}

function defaultSidebar() {
  return sidebarSections(
    widget("Schnellkontakt", [
      `<a href="#/mitmachen">Schnuppertermin anfragen</a>`,
      `<a href="#/kontakt">Kontakt zur Gruppenleitung</a>`,
      "Heim bei der Kirche Weidling"
    ]),
    widget("Wichtig für Eltern", [
      `<a href="#/altersgruppen">Welche Altersgruppe passt?</a>`,
      `<a href="#/sicherheit">Sicherheit & Verantwortung</a>`,
      `<a href="#/elternbereich">Kosten, Ausrüstung und FAQ</a>`
    ]),
    widget("Mitglieder", [
      `<a href="#/termine">Termine</a>`,
      `<a href="#/downloads">Downloads</a>`,
      `<a href="#/entenrennen">Entenrennen</a>`
    ])
  );
}

const pages = {
  "/": {
    title: "Pfadfindergruppe Weidling",
    subtitle: "Gemeinschaft, Natur und das Abenteuer des Lebens für Kinder und Jugentliche in Klosterneuburg Weidling",
    content: () => `
      <section class="kd-section kd-hero">
        ${heroSlider()}
      </section>
      <section class="kd-section">
        <h2>Willkommen bei den Pfadfindern in Weidling</h2>
        <p class="kd-lead">Die Startseite beantwortet die wichtigsten Fragen neuer Familien sofort: Wer wir sind, wo wir aktiv sind, welche Altersgruppen es gibt, wann die Heimstunden stattfinden und wie ein Kind unverbindlich schnuppern kann.</p>
        ${actions([
          { label: "Schnuppertermin anfragen", href: "#/mitmachen", primary: true },
          { label: "Heimstunden ansehen", href: "#/altersgruppen" },
          { label: "Kontakt aufnehmen", href: "#/kontakt" }
        ])}
      </section>
      <section class="kd-section">
        <h2>Schnell finden</h2>
        ${linkList([
          { label: "Informationen für neue Eltern", href: "#/elternbereich" },
          { label: "Altersgruppen und Heimstunden", href: "#/altersgruppen" },
          { label: "Termine und aktuelle Informationen", href: "#/termine" },
          { label: "Sicherheit, Aufsicht und Verantwortung", href: "#/sicherheit" }
        ])}
      </section>
      <section class="kd-section">
        <h2>Altersgruppen mit Heimstunden</h2>
        ${table(["Stufe", "Alter", "Zeit", "Ort", "Nächster Schritt"], stageRows())}
      </section>
      <section class="kd-section kd-grid">
        <article class="kd-box">
          <h3>Warum Eltern uns vertrauen können</h3>
          <p>Leitungsteam, Aufsicht, Ausbildung, Kinderschutz und Elternkommunikation werden sichtbar erklärt.</p>
          <a href="#/sicherheit">Mehr zu Sicherheit und Verantwortung</a>
        </article>
        <article class="kd-box">
          <h3>Nächste Termine</h3>
          <p>Kommende Termine stehen vor alten Blogbeiträgen und sind für Familien schnell scanbar.</p>
          <a href="#/termine">Termine ansehen</a>
        </article>
      </section>
    `,
    sidebar: defaultSidebar
  },

  "/mitmachen": {
    title: "Mitmachen",
    subtitle: "Unverbindlich schnuppern, passende Stufe finden und entspannt starten.",
    content: () => `
      <section class="kd-section">
        <h2>Schnupperanfrage</h2>
        ${schnupperRequestForm()}
      </section>
      <section class="kd-section">
        <h2>Welche Stufe passt?</h2>
        ${table(["Stufe", "Alter", "Zeit", "Ort", "Kontakt"], stageRows())}
      </section>
      <section class="kd-section kd-grid">
        <article class="kd-box">
          <h3>Kosten & Voraussetzungen</h3>
          <p>Die Mitgliedschaft, Lagerkosten und Ausrüstung werden vor einer Anmeldung klar erklärt. So entstehen keine unangenehmen Überraschungen.</p>
          <a href="#/elternbereich">Kosten und Ausrüstung ansehen</a>
        </article>
        <article class="kd-box">
          <h3>Was zum Schnuppern mitbringen?</h3>
          <p>Bequeme Kleidung, Trinkflasche und Freude am Ausprobieren reichen für den ersten Termin.</p>
        </article>
      </section>
    `,
    sidebar: () => sidebarSections(widget("Häufige Fragen", [
      "Schnuppern ist unverbindlich.",
      "Die passende Stufe richtet sich nach dem Alter.",
      "Eltern erhalten vorab eine Rückmeldung.",
      `<a href="#/sicherheit">Sicherheit und Aufsicht lesen</a>`
    ]))
  },

  "/altersgruppen": {
    title: "Altersgruppen",
    subtitle: "Für jedes Alter ein passendes Programm: Spielen, Abenteuer, Gemeinschaft und Verantwortung.",
    content: () => `
      <section class="kd-section">
        <h2>Unsere Stufen</h2>
        <div class="kd-grid">
          ${stages.map(stage => `
            <article class="kd-box">
              <div class="kd-stage-title">
                <strong>${stage.name}</strong>
                <span class="kd-meta">${stage.age}</span>
              </div>
              <p>${stage.focus}</p>
              <p><strong>Heimstunde:</strong> ${stage.time}<br><strong>Ort:</strong> ${stage.place}</p>
              <a href="#/stufe-${stage.id}">Mehr erfahren</a>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="kd-section">
        <h2>Alle Heimstunden auf einen Blick</h2>
        ${table(["Stufe", "Alter", "Zeit", "Ort", "Schnuppern"], stageRows())}
      </section>
    `,
    sidebar: defaultSidebar
  },

  "/termine": {
    title: "Termine & Aktuelles",
    subtitle: "Kommende Termine zuerst, danach aktuelle Beiträge und Rückblicke.",
    content: () => `
      <section class="kd-section">
        <h2>Nächste wichtige Termine</h2>
        <div class="kd-tabs" aria-label="Terminfilter">
          <button class="kd-tab is-active" data-filter="alle">Alle</button>
          <button class="kd-tab" data-filter="gruppe">Gruppe</button>
          <button class="kd-tab" data-filter="eltern">Eltern</button>
          <button class="kd-tab" data-filter="lager">Lager</button>
        </div>
        <div data-event-table>
          ${eventTable(events)}
        </div>
      </section>
      <section class="kd-section">
        <h2>Aktuelles</h2>
        <div class="kd-grid">
          <article class="kd-box">
            <img class="kd-image" src="${IMG.group}" alt="Gruppenaktion">
            <h3>Gruppenlager Rückblick</h3>
            <p class="kd-meta">Kategorie: Lager</p>
            <p>Rückblicke bleiben sichtbar, stehen aber unter den kommenden Terminen.</p>
          </article>
          <article class="kd-box">
            <img class="kd-image" src="${IMG.event}" alt="Entenrennen am Bach">
            <h3>Entenrennen</h3>
            <p class="kd-meta">Kategorie: Unterstützen</p>
            <p>Das Event führt sinnvoll zu Unterstützen, Kontakt und Sponsoring.</p>
          </article>
        </div>
      </section>
    `,
    sidebar: () => sidebarSections(widget("Für Mitglieder", [
      `<a href="#/downloads">Downloads und Packlisten</a>`,
      `<a href="#/elternbereich">Elterninfos</a>`,
      `<a href="#/kontakt">Frage zu einem Termin stellen</a>`
    ]))
  },

  "/ueber-uns": {
    title: "Über uns",
    subtitle: "Wer wir sind, was uns wichtig ist und wer Verantwortung trägt.",
    content: () => `
      <section class="kd-section">
        <h2>Unsere Gruppe</h2>
        <p class="kd-lead">Die Pfadfindergruppe Klosterneuburg-Weidling ist lokal verwurzelt und bietet Kindern und Jugendlichen einen Ort für Gemeinschaft, Natur, Abenteuer und Verantwortung.</p>
      </section>
      <section class="kd-section kd-grid">
        <article class="kd-box">
          <h3>Werte</h3>
          <p>Gemeinschaft, Natur, Verantwortung, Mitbestimmung und persönliches Wachstum werden konkret erklärt.</p>
          <a href="#/sicherheit">Sicherheit & Verantwortung</a>
        </article>
        <article class="kd-box">
          <h3>Leitungsteam</h3>
          <p>Eltern sehen, wer verantwortlich ist und welche Rollen es in der Gruppe gibt.</p>
          <a href="#/team">Team ansehen</a>
        </article>
      </section>
      <section class="kd-section">
        <h2>Lokaler Bezug</h2>
        <p>Treffpunkte, Weidling, Klosterneuburg und lokale Partner werden klar benannt, damit neue Familien sofort verstehen, wo die Gruppe aktiv ist.</p>
      </section>
    `,
    sidebar: () => sidebarSections(widget("Über uns", [
      `<a href="#/team">Leitungsteam</a>`,
      `<a href="#/sicherheit">Sicherheit & Kinderschutz</a>`,
      `<a href="#/unterstuetzen">Unterstützen</a>`
    ]))
  },

  "/sicherheit": {
    title: "Sicherheit & Verantwortung",
    subtitle: "Klare Informationen zu Aufsicht, Ausbildung, Kinderschutz und Kommunikation.",
    content: () => `
      <section class="kd-section">
        <h2>Vertrauen konkret machen</h2>
        <p class="kd-lead">Diese Seite beantwortet proaktiv die Fragen, die Eltern vor dem ersten Kontakt oft haben.</p>
      </section>
      <section class="kd-section kd-grid">
        ${[
          ["Aufsicht", "Zuständigkeiten, Anwesenheit und Notfallkontakte sind vor Aktionen klar."],
          ["Ausbildung", "Leiterinnen und Leiter werden begleitet, geschult und arbeiten im Team."],
          ["Kinderschutz", "Respektvoller Umgang, Grenzen und Ansprechpersonen werden sichtbar benannt."],
          ["Elternkommunikation", "Vor Lagern und Ausflügen gibt es rechtzeitig klare Informationen."]
        ].map(item => `<article class="kd-box"><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join("")}
      </section>
      <section class="kd-section">
        <h2>Ansprechpersonen</h2>
        ${table(["Rolle", "Kontakt"], contacts)}
      </section>
    `,
    sidebar: () => sidebarSections(widget("Nächster Schritt", [
      `<a href="#/team">Verantwortliche ansehen</a>`,
      `<a href="#/mitmachen">Schnuppern anfragen</a>`,
      `<a href="#/kontakt">Direkt Kontakt aufnehmen</a>`
    ]))
  },

  "/team": {
    title: "Team",
    subtitle: "Verantwortliche sichtbar machen und Vertrauen aufbauen.",
    content: () => `
      <section class="kd-section">
        <h2>Leitungsteam</h2>
        <div class="kd-grid three">
          ${["Gruppenleitung", "Biber-Team", "WiWö-Team", "GuSp-Team", "CaEx-Team", "RaRo-Team"].map(role => `
            <article class="kd-box">
              <h3>${role}</h3>
              <p class="kd-meta">Foto, Name, Rolle und Kontakt werden hier gepflegt.</p>
              <p>Kurze Beschreibung der Verantwortung und Erreichbarkeit.</p>
            </article>
          `).join("")}
        </div>
      </section>
    `,
    sidebar: defaultSidebar
  },

  "/elternbereich": {
    title: "Elternbereich",
    subtitle: "Die wichtigsten Informationen für neue und bestehende Familien.",
    content: () => `
      <section class="kd-section">
        <h2>Häufige Fragen</h2>
        <div class="kd-grid">
          ${[
            ["Kann mein Kind schnuppern?", "Ja, der erste Besuch ist unverbindlich und wird mit der passenden Stufe abgestimmt."],
            ["Was kostet die Mitgliedschaft?", "Mitgliedsbeitrag, Lagerkosten und mögliche Unterstützung werden transparent erklärt."],
            ["Welche Ausrüstung braucht mein Kind?", "Für den Start reicht einfache, robuste Kleidung. Details folgen nach dem Schnuppern."],
            ["Wie läuft ein Lager ab?", "Eltern erhalten vorab Informationen zu Ort, Betreuung, Packliste und Kontakt."]
          ].map(item => `<article class="kd-box"><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join("")}
        </div>
      </section>
      <section class="kd-section">
        <h2>Downloads</h2>
        ${table(["Dokument", "Format", "Für wen"], downloads)}
      </section>
    `,
    sidebar: () => sidebarSections(widget("Für Eltern", [
      `<a href="#/mitmachen">Schnuppern</a>`,
      `<a href="#/altersgruppen">Altersgruppen</a>`,
      `<a href="#/sicherheit">Sicherheit</a>`,
      `<a href="#/kontakt">Kontakt</a>`
    ]))
  },

  "/unterstuetzen": {
    title: "Unterstützen",
    subtitle: "Spenden, Sponsoring, Mitarbeit und lokale Aktionen sinnvoll bündeln.",
    content: () => `
      <section class="kd-section">
        <h2>So kann man helfen</h2>
        ${table(["Art", "Wirkung", "Nächster Schritt"], [
          ["Spenden", "Material, Lager, Ausbildung und soziale Teilhabe", `<a href="#/kontakt">Kontakt aufnehmen</a>`],
          ["Sponsoring", "Lokale Aktionen und Entenrennen unterstützen", `<a href="#/entenrennen">Entenrennen ansehen</a>`],
          ["Mitarbeit", "Zeit, Know-how oder praktische Hilfe einbringen", `<a href="#/kontakt">Melden</a>`],
          ["Leiter:in werden", "Kinder und Jugendliche begleiten", `<a href="#/kontakt">Gespräch vereinbaren</a>`]
        ])}
      </section>
      <section class="kd-section kd-grid">
        <article class="kd-box">
          <h3>Wirkung sichtbar machen</h3>
          <p>Die Seite erklärt, wofür Unterstützung konkret verwendet wird.</p>
        </article>
        <article class="kd-box">
          <h3>Lokale Partner</h3>
          <p>Sponsoren erhalten einen seriösen Kontaktweg und klare Möglichkeiten.</p>
        </article>
      </section>
    `,
    sidebar: () => sidebarSections(widget("Unterstützen", [
      `<a href="#/entenrennen">Entenrennen</a>`,
      `<a href="#/kontakt">Sponsoring anfragen</a>`,
      `<a href="#/ueber-uns">Unsere Werte</a>`
    ]))
  },

  "/entenrennen": {
    title: "Entenrennen",
    subtitle: "Das lokale Event bleibt sichtbar und wird mit Unterstützen verbunden.",
    content: () => `
      <section class="kd-section">
        <img class="kd-hero-image" src="${IMG.ducks}" alt="Entenrennen Veranstaltung">
      </section>
      <section class="kd-section">
        <h2>Event, Rückblick und Unterstützung</h2>
        <p>Das Entenrennen wird nicht isoliert geführt, sondern als lokales Event mit Sponsoring, Unterstützung und aktuellen Informationen verbunden.</p>
        ${actions([
          { label: "Unterstützen", href: "#/unterstuetzen", primary: true },
          { label: "Kontakt aufnehmen", href: "#/kontakt" }
        ])}
      </section>
    `,
    sidebar: defaultSidebar
  },

  "/nikolaus-aktion": {
    title: "Nikolaus-Aktion",
    subtitle: "Beispiel für eine Event-Landingpage mit klarer Information, Kontakt und nächstem Schritt.",
    content: () => `
      <section class="kd-section">
        <article class="kd-event-page-hero">
          <div class="kd-event-page-copy">
            <p class="kd-overline">Kommendes Event</p>
            <h2>${FEATURED_EVENT.title}</h2>
            <p class="kd-lead"><strong>${FEATURED_EVENT.question}</strong> Besuchszeiten am ${FEATURED_EVENT.dates}. Im Klickdummy zeigt diese Seite, wie eine lokale Aktion mit klarer Conversion, Kontakt und Vertrauenssignal aufbereitet werden kann.</p>
            <div class="kd-event-meta">
              <span>${FEATURED_EVENT.dates}</span>
              <span>${FEATURED_EVENT.place}</span>
              <span>${FEATURED_EVENT.audience}</span>
            </div>
            ${actions([
              { label: "Kontakt aufnehmen", href: "#/kontakt", primary: true },
              { label: "Termine ansehen", href: "#/termine" }
            ])}
          </div>
          <div class="kd-event-page-poster">
            <img class="kd-poster-image" src="${FEATURED_EVENT.posterImage}" alt="Nikolausaktion Plakat">
          </div>
        </article>
      </section>
      <section class="kd-section">
        <h2>Auf einen Blick</h2>
        ${table(["Bereich", "Information"], [
          ["Besuchszeiten", FEATURED_EVENT.dates],
          ["Ort", FEATURED_EVENT.place],
          ["Kontaktperson", FEATURED_EVENT.contactName],
          ["Telefon", `<a href="${FEATURED_EVENT.contactPhoneHref}">${FEATURED_EVENT.contactPhone}</a>`],
          ["E-Mail", `<a href="${FEATURED_EVENT.contactEmailHref}">${FEATURED_EVENT.contactEmail}</a>`]
        ])}
      </section>
      <section class="kd-section kd-grid">
        <article class="kd-box">
          <h3>Warum diese Einbindung funktioniert</h3>
          <p>Das Event ist von der Startseite aus an mehreren Stellen sichtbar, ohne die restliche Navigation zu verdrängen. Datum, Nutzen und Kontakt sind in wenigen Sekunden erfassbar.</p>
        </article>
        <article class="kd-box">
          <h3>Vom Interesse zum Kontakt</h3>
          <p>Die Landingpage beantwortet die Kernfragen sofort und führt dann direkt zu Kontakt oder Terminübersicht weiter.</p>
        </article>
      </section>
    `,
    sidebar: () => sidebarSections(
      widget("Direktkontakt", [
        FEATURED_EVENT.contactName,
        `<a href="${FEATURED_EVENT.contactPhoneHref}">${FEATURED_EVENT.contactPhone}</a>`,
        `<a href="${FEATURED_EVENT.contactEmailHref}">${FEATURED_EVENT.contactEmail}</a>`
      ]),
      widget("Mehr entdecken", [
        `<a href="#/termine">Termine & Aktuelles</a>`,
        `<a href="#/unterstuetzen">Unterstützen</a>`,
        `<a href="#/kontakt">Allgemeiner Kontakt</a>`
      ])
    )
  },

  "/downloads": {
    title: "Downloads",
    subtitle: "Dokumente klar nach Zielgruppe sortieren.",
    content: () => `
      <section class="kd-section">
        <h2>Dokumente</h2>
        ${table(["Dokument", "Format", "Für wen"], downloads)}
      </section>
      <section class="kd-section">
        <h2>Redaktionelle Regel</h2>
        <p>Downloads erhalten Titel, kurze Beschreibung, Zielgruppe und Stand/Datum. Alte oder unsichere Dokumente werden archiviert.</p>
      </section>
    `,
    sidebar: () => sidebarSections(widget("Direktlinks", [
      `<a href="#/elternbereich">Elternbereich</a>`,
      `<a href="#/termine">Termine</a>`,
      `<a href="#/kontakt">Frage stellen</a>`
    ]))
  },

  "/kontakt": {
    title: "Kontakt",
    subtitle: "Ein klarer Kontaktweg für Eltern, Mitglieder, Sponsoren und lokale Partner.",
    content: () => `
      <section class="kd-section">
        <h2>Kontakt aufnehmen</h2>
        <p class="kd-lead">Die Kontaktseite bündelt allgemeine Kontaktinformationen, Gruppenleitung, Stufenkontakte, Adresse und Formular.</p>
      </section>
      <section class="kd-section">
        <h2>Kontakte</h2>
        ${table(["Bereich", "Kontakt"], contacts)}
      </section>
      <section class="kd-section">
        <h2>Nachricht senden</h2>
        ${form("kontakt")}
      </section>
    `,
    sidebar: () => sidebarSections(widget("Adresse", [
      "Heim bei der Kirche Weidling",
      "Klosterneuburg-Weidling",
      `<a href="#/mitmachen">Schnuppertermin anfragen</a>`
    ]))
  },

  "/impressum": {
    title: "Impressum",
    subtitle: "Rechtliche Informationen und Verantwortlichkeiten.",
    content: () => `
      <section class="kd-section">
        <h2>Pfadfindergruppe Klosterneuburg-Weidling</h2>
        <p>Medieninhaber, Adresse, ZVR-Zahl, Vertretung und Kontakt werden hier vollständig und aktuell gepflegt.</p>
      </section>
    `,
    sidebar: defaultSidebar
  }
};

function eventTable(items) {
  return table(["Datum", "Termin", "Zielgruppe", "Ort"], items.map(event => [
    event.date,
    event.href ? `<a href="${event.href}">${event.title}</a>` : event.title,
    event.target,
    event.place
  ]));
}

function stagePage(stage) {
  return {
    title: stage.name,
    subtitle: `${stage.age} · ${stage.focus}`,
    content: () => `
      <section class="kd-section">
        <img class="kd-hero-image" src="${IMG.camp}" alt="Pfadfinderaktivität der Stufe ${stage.name}">
      </section>
      <section class="kd-section">
        <h2>${stage.name} in Weidling</h2>
        <p class="kd-lead">${stage.focus}. Die Stufenseite beantwortet Alter, Heimstunde, Leitung, Aktivitäten und Schnuppermöglichkeit einheitlich.</p>
        ${actions([
          { label: "Schnuppern anfragen", href: "#/mitmachen", primary: true },
          { label: "Alle Altersgruppen", href: "#/altersgruppen" }
        ])}
      </section>
      <section class="kd-section">
        <h2>Auf einen Blick</h2>
        ${table(["Alter", "Zeit", "Ort", "Kontakt"], [[stage.age, stage.time, stage.place, `<a href="#/kontakt">Kontakt</a>`]])}
      </section>
      <section class="kd-section kd-grid">
        <article class="kd-box"><h3>Was wir machen</h3><p>Natur, Spiele, Teamaufgaben, Lager und altersgerechte Verantwortung.</p></article>
        <article class="kd-box"><h3>Leitung</h3><p>Das zuständige Stufenteam wird mit Namen, Rolle und Kontakt sichtbar.</p></article>
      </section>
    `,
    sidebar: defaultSidebar
  };
}

stages.forEach(stage => {
  pages[`/stufe-${stage.id}`] = stagePage(stage);
});

function route() {
  const raw = window.location.hash.replace("#", "") || "/";
  return pages[raw] ? raw : "/";
}

function setActiveNav(current) {
  document.querySelectorAll(".main-navigation a").forEach(link => {
    const linkRoute = link.getAttribute("href").replace("#", "");
    const active = current === linkRoute || (current.startsWith("/stufe-") && linkRoute === "/altersgruppen");
    link.classList.toggle("is-active", active);
  });
}

function render() {
  stopHeroSlider();
  const current = route();
  const page = pages[current];
  document.title = `${page.title} - Pfadfinder Weidling`;
  document.getElementById("page-title").textContent = page.title;
  document.getElementById("page-subtitle").textContent = page.subtitle || "";
  document.getElementById("content").innerHTML = page.content();
  document.getElementById("sidebar-content").innerHTML = page.sidebar ? page.sidebar() : defaultSidebar();
  setActiveNav(current);
  bindDynamicControls();
  closeNav();
  document.getElementById("main").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "auto" });
  updateHeaderState();
}

function bindDynamicControls() {
  document.querySelectorAll("[data-demo-form]").forEach(formEl => {
    formEl.addEventListener("submit", event => {
      event.preventDefault();
      formEl.querySelector(".kd-form-status").classList.add("is-visible");
    });
  });

  const eventTableTarget = document.querySelector("[data-event-table]");
  if (eventTableTarget) {
    document.querySelectorAll("[data-filter]").forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        const rows = filter === "alle" ? events : events.filter(event => event.type === filter);
        eventTableTarget.innerHTML = eventTable(rows);
        document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("is-active"));
        button.classList.add("is-active");
      });
    });
  }

  initHeroSlider();
}

function setHeroSlide(slider, nextIndex) {
  const slides = [...slider.querySelectorAll("[data-hero-slide]")];
  const dots = [...slider.querySelectorAll("[data-hero-dot]")];
  slides.forEach((slide, index) => {
    const isActive = index === nextIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", isActive ? "false" : "true");
  });
  dots.forEach((dot, index) => {
    const isActive = index === nextIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  slider.dataset.heroIndex = String(nextIndex);
}

function stopHeroSlider() {
  if (heroSliderTimer) {
    window.clearInterval(heroSliderTimer);
    heroSliderTimer = null;
  }
}

function initHeroSlider() {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider) return;

  const slides = [...slider.querySelectorAll("[data-hero-slide]")];
  const dots = [...slider.querySelectorAll("[data-hero-dot]")];
  if (!slides.length || slides.length !== dots.length) return;

  slider.dataset.heroIndex = "0";

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setHeroSlide(slider, index);
      restartHeroSlider(slider, slides.length);
    });
  });

  slider.addEventListener("mouseenter", stopHeroSlider);
  slider.addEventListener("mouseleave", () => restartHeroSlider(slider, slides.length));

  restartHeroSlider(slider, slides.length);
}

function restartHeroSlider(slider, totalSlides) {
  stopHeroSlider();
  heroSliderTimer = window.setInterval(() => {
    const currentIndex = Number(slider.dataset.heroIndex || "0");
    const nextIndex = (currentIndex + 1) % totalSlides;
    setHeroSlide(slider, nextIndex);
  }, 4200);
}

const menuButton = document.querySelector(".mobile-menu-toggle");
const nav = document.getElementById("site-navigation");
const compactThreshold = 24;

function closeNav() {
  nav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function updateHeaderState() {
  const isCompact = window.scrollY > compactThreshold;
  document.body.classList.toggle("is-header-compact", isCompact);
  if (!isCompact) closeNav();
}

function handleHeaderScroll() {
  if (headerScrollTicking) return;
  headerScrollTicking = true;
  window.requestAnimationFrame(() => {
    updateHeaderState();
    headerScrollTicking = false;
  });
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", event => {
  if (event.target.matches("a")) {
    closeNav();
  }
});

window.addEventListener("scroll", handleHeaderScroll, { passive: true });
window.addEventListener("resize", updateHeaderState);
window.addEventListener("hashchange", render);
updateHeaderState();
render();
