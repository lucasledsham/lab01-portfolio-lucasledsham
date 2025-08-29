// -----------------------------
// 1. Dicionário de traduções
// -----------------------------
const translations = {
  pt: {
    home: "Início",
    projects: "Projetos",
    aboutMe: "Sobre Mim",
    contact: "Contato",
    welcome: "Bem-vindo (a)!",
    name: "Meu nome é Lucas Ledsham.",
    formacao: "Formação",
    formacaoTexto:
      "Possuo graduação em <strong>Publicidade e Propaganda</strong>, área que me proporcionou contato e me fez apaixonar por tecnologia. Atualmente estou cursando o 2º período em <strong>Engenharia de Software</strong> pela PUC Minas. Além disso, estou constantemente estudando por conta própria e realizando cursos online.",
    languages: "Idiomas",
    ingles: "Inglês / Fluente",
    espanhol: "Espanhol / Intermediário",
    conversar: "Vamos conversar?",
    footer1: "Me envie um email para",
    footer2: "Fico à sua disposição!",
    desenvolvido:
      'Desenvolvido por <a href="https://www.linkedin.com/in/lucas-nunes-leal-ledsham-0048b621a/" target="_blank" rel="noopener noreferrer" id="lucas">Lucas Ledsham</a>',
  },
  en: {
    home: "Home",
    projects: "Projects",
    aboutMe: "About Me",
    contact: "Contact",
    welcome: "Hey there!",
    name: "I am Lucas Ledsham.",
    formacao: "Education",
    formacaoTexto:
      "I have a degree in <strong>Advertising and Propaganda</strong>, an area that brought me closer and made me passionate about technology. I am currently studying <strong>Software Engineering</strong> at PUC Minas. In addition, I am constantly self-studying and taking online courses.",
    languages: "Languages",
    ingles: "English / Advanced",
    espanhol: "Spanish / Intermediate",
    conversar: "Shall we talk?",
    footer1: "Send me an email at",
    footer2: "I’m at your disposal!",
    desenvolvido:
      'Developed by <a href="https://www.linkedin.com/in/lucas-nunes-leal-ledsham-0048b621a/" target="_blank" rel="noopener noreferrer" id="lucas">Lucas Ledsham</a>',
  },
};

// -----------------------------
// 2. Idioma atual (default PT)
// -----------------------------
let currentLang = "pt";

// -----------------------------
// 3. Função para aplicar tradução
// -----------------------------
function aplicarTraducao() {
  const t = translations[currentLang];

  // Atualiza textos só se o elemento existir
  const titulo1 = document.querySelector("#apresentacao h1:nth-child(1)");
  if (titulo1) titulo1.innerHTML = t.welcome;

  const titulo2 = document.querySelector("#apresentacao h1:nth-child(2)");
  if (titulo2) titulo2.innerHTML = t.name;

  document
    .querySelectorAll(".projeto-github h2")
    .forEach((h2) => (h2.innerHTML = t.projects));

  const formacaoTitulo = document.querySelector("#form h2");
  if (formacaoTitulo) formacaoTitulo.innerHTML = t.formacao;

  const formacaoTexto = document.querySelector("#formacao-texto");
  if (formacaoTexto) formacaoTexto.innerHTML = t.formacaoTexto;

  const conversarTitulo = document.querySelector(".conversar-titulo");
  if (conversarTitulo) conversarTitulo.innerHTML = t.conversar;

  const conversarP1 = document.querySelector("#conversar p:nth-child(1)");
  if (conversarP1) {
    conversarP1.innerHTML = `${t.footer1} <span><a class="conversar-email" href="mailto:lucasnunesleal@gmail.com" target="_blank" rel="noopener noreferrer">lucasnunesleal@gmail.com</a></span>`;
  }

  const conversarP2 = document.querySelector("#conversar p:nth-child(2)");
  if (conversarP2) conversarP2.innerHTML = t.footer2;

  const espanhol = document.querySelector("#espanhol");
  if (espanhol) espanhol.innerHTML = t.espanhol;

  const ingles = document.querySelector("#ingles");
  if (ingles) ingles.innerHTML = t.ingles;

  const languages = document.querySelector("#languages");
  if (languages) languages.innerHTML = t.languages;

  const desenvolvido = document.querySelector("#desenvolvido-por");
  if (desenvolvido) desenvolvido.innerHTML = t.desenvolvido;

  const inicioTradutor = document.querySelector("#inicio-tradutor a");
  if (inicioTradutor) inicioTradutor.innerHTML = t.home;

  const projetos = document.querySelector("#projetos a");
  if (projetos) projetos.innerHTML = t.projects;

  const sobreMim = document.querySelector("#sobreMim a");
  if (sobreMim) sobreMim.innerHTML = t.aboutMe;

  const contato = document.querySelector("#contato a");
  if (contato) contato.innerHTML = t.contact;

  // Troca a bandeira
  // Troca a bandeira (detecta caminho correto)
  const langFlag = document.getElementById("lang-flag");
  if (langFlag) {
    // verifica se a página atual está na raiz ou em subpasta
    const isRoot =
      window.location.pathname === "/" ||
      window.location.pathname.endsWith("index.html");
    const basePath = isRoot ? "./assets/icones/" : "../assets/icones/";

    langFlag.src =
      currentLang === "pt"
        ? basePath + "reino-unido.svg"
        : basePath + "brasil.svg";
    langFlag.alt = currentLang === "pt" ? "English" : "Português";
  }
}

// -----------------------------
// 4. Carregar idioma salvo ao abrir página
// -----------------------------
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) {
    currentLang = savedLang;
  }
  aplicarTraducao();
});

// -----------------------------
// 5. Botão para trocar idioma
// -----------------------------
const langBtn = document.getElementById("lang-btn");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("lang", currentLang); // 🔹 salva a escolha
    aplicarTraducao();
  });
}
