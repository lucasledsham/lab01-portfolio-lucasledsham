// Dicionário de traduções
const translations = {
  pt: {
    welcome: "Bem-vindo (a)!",
    name: "Meu nome é Lucas Ledsham.",
    about:
      "Sou apaixonado por tecnologia e, no meu tempo livre, estou sempre desenvolvendo novos projetos e buscando constantemente mais conhecimento. Nesta página, você poderá conferir alguns dos projetos nos quais dediquei meu tempo e empenho.",
    projectsTitle: "Confira o GitHub do Projeto",
    formacao: "Formação",
    formacaoTexto:
      "Possuo graduação em <strong>Publicidade e Propaganda</strong>, área que me proporcionou contato e me fez apaixonar por tecnologia. Atualmente estou cursando o 2º período em <strong>Engenharia de Software</strong> pela PUC Minas. Além disso, estou constantemente estudando por conta própria e realizando cursos online.",
    conversar: "Vamos conversar?",
    footer1: "Me envie um email para",
    footer2: "Fico à sua disposição!",
  },
  en: {
    welcome: "Hey there!",
    name: "I am Lucas Ledsham.",
    about:
      "I am passionate about technology and, in my free time, I am always developing new projects and constantly seeking more knowledge. On this page, you can check out some of the projects I have dedicated my time and effort to.",
    projectsTitle: "Check out the Project on GitHub",
    formacao: "Education",
    formacaoTexto:
      "I have a degree in <strong>Advertising and Propaganda</strong>, an area that brought me closer and made me passionate about technology. I am currently studying <strong>Software Engineering</strong> at PUC Minas. In addition, I am constantly self-studying and taking online courses.",
    conversar: "Shall we talk?",
    footer1: "Send me an email at",
    footer2: "I’m at your disposal!",
  },
};

let currentLang = "pt";

document.getElementById("lang-btn").addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  const t = translations[currentLang];

  // Atualiza os textos
  document.querySelector("#apresentacao h1:nth-child(1)").innerHTML = t.welcome;
  document.querySelector("#apresentacao h1:nth-child(2)").innerHTML = t.name;
  document.querySelector(".apresentacao-texto").innerHTML = t.about;
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

  // Troca a bandeira
  const langFlag = document.getElementById("lang-flag");
  langFlag.src =
    currentLang === "pt"
      ? "./assets/icones/reino-unido.svg"
      : "./assets/icones/brasil.svg";
  langFlag.alt = currentLang === "pt" ? "English" : "Português";
});
