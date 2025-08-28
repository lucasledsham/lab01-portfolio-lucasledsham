// Dicionário de traduções
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

let currentLang = "pt";

document.getElementById("lang-btn").addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  const t = translations[currentLang];

  // Atualiza os textos
  document.querySelector("#apresentacao h1:nth-child(1)").innerHTML = t.welcome;
  document.querySelector("#apresentacao h1:nth-child(2)").innerHTML = t.name;
  document
    .querySelectorAll(".projeto-github h2")
    .forEach((h2) => (h2.innerHTML = t.projectsTitle));
  document.querySelector("#form h2").innerHTML = t.formacao;
  document.querySelector("#formacao-texto").innerHTML = t.formacaoTexto;
  document.querySelector(".conversar-titulo").innerHTML = t.conversar;
  document.querySelector(
    "#conversar p:nth-child(1)"
  ).innerHTML = `${t.footer1} <span><a class="conversar-email" href="mailto:lucasnunesleal@gmail.com" target="_blank" rel="noopener noreferrer">lucasnunesleal@gmail.com</a></span>`;
  document.querySelector("#conversar p:nth-child(2)").innerHTML = t.footer2;
  document.querySelector("#espanhol").innerHTML = t.espanhol;
  document.querySelector("#ingles").innerHTML = t.ingles;
  document.querySelector("#languages").innerHTML = t.languages;
  document.querySelector("#desenvolvido-por").innerHTML = t.desenvolvido;
  document.querySelector("#inicio-tradutor a").innerHTML = t.home;
  document.querySelector("#projetos a").innerHTML = t.projects;
  document.querySelector("#sobreMim a").innerHTML = t.aboutMe;
  document.querySelector("#contato a").innerHTML = t.contact;

  // Troca a bandeira
  const langFlag = document.getElementById("lang-flag");
  langFlag.src =
    currentLang === "pt"
      ? "./assets/icones/reino-unido.svg"
      : "./assets/icones/brasil.svg";
  langFlag.alt = currentLang === "pt" ? "English" : "Português";
});
