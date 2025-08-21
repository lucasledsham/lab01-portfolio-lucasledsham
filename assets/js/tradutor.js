// Dicionário de traduções
const translations = {
  pt: {
    home: "Início",
    projects: "Projetos",
    aboutMe: "Sobre Mim",
    contact: "Contato",
    welcome: "Bem-vindo (a)!",
    name: "Meu nome é Lucas Ledsham.",
    about:
      "Sou apaixonado por tecnologia e, no meu tempo livre, estou sempre desenvolvendo novos projetos e buscando constantemente mais conhecimento. Nesta página, você poderá conferir alguns dos projetos nos quais dediquei meu tempo e empenho.",
    projectsTitle: "Confira o GitHub do Projeto",
    portal:
      "O Portal BH Para Todos é uma plataforma que reúne diversos projetos sociais de Belo Horizonte e região, com o objetivo de proporcionar aos cidadãos a oportunidade de conhecer e se conectar com essas iniciativas. O portal visa facilitar a divulgação dessas ações, permitindo que cada vez mais pessoas possam conhecê-las.",
    hrInnovate:
      "O HR Innovate é um sistema destinado a automatizar processos críticos em um departamento de Recursos Humanos, focando em uma área em essencial: Recrutamento e Seleção. O objetivo é aumentar a eficiência operacional, reduzir erros e melhorar a experiência tanto dos candidatos quanto dos profissionais de RH, integrando e otimizando todas as etapas do recrutamento, desde a publicação de vagas até a contratação.",
    sofia:
      "A SOFIA - Sistema Online Facilitador para Idade Avançada, surgiu para auxiliar os cidadãos de idade avançada, trazendo a proposta de solucionar o problema de falta de informação sobre segurança digital e proporcionando uma plataforma de fácil acessibilidade com informações atualizadas, afim de evitar que mais pessoas se tornem vítimas dos golpes aplicados online.",
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
    about:
      "I am passionate about technology and, in my free time, I am always developing new projects and constantly seeking more knowledge. On this page, you can check out some of the projects I have dedicated my time and effort to.",
    projectsTitle: "Check out the Project on GitHub",
    portal:
      "The Portal BH Para Todos is a platform that brings together various social projects from Belo Horizonte and the surrounding region, with the goal of providing citizens the opportunity to learn about and connect with these initiatives. The portal aims to facilitate the promotion of these actions, allowing more and more people to become aware of them.",
    hrInnovate:
      "HR Innovate is a system designed to automate critical processes within a Human Resources department, focusing on one key area: Recruitment and Selection. The goal is to increase operational efficiency, reduce errors, and improve the experience for both candidates and HR professionals by integrating and optimizing all stages of the recruitment process, from job posting to hiring.",
    sofia:
      "SOFIA – Sistema Online Facilitador para Idade Avançada, was created to assist elderly citizens by addressing the lack of information on digital security. It offers an accessible platform with up-to-date information, aiming to prevent more people from becoming victims of online scams.",
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
  document.querySelector("#espanhol").innerHTML = t.espanhol;
  document.querySelector("#ingles").innerHTML = t.ingles;
  document.querySelector("#languages").innerHTML = t.languages;
  document.querySelector("#pbpt-tradutor").innerHTML = t.portal;
  document.querySelector("#hrInnovate-tradutor").innerHTML = t.hrInnovate;
  document.querySelector("#sofia-tradutor").innerHTML = t.sofia;
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
