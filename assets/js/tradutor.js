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
    ingles: "Inglês / Avançado",
    espanhol: "Espanhol / Intermediário",
    conversar: "Vamos conversar?",
    footer1: "Me envie um email para",
    footer2: "Fico à sua disposição!",
    desenvolvido:
      'Desenvolvido por <a href="https://www.linkedin.com/in/lucas-nunes-leal-ledsham-0048b621a/" target="_blank" rel="noopener noreferrer" id="lucas">Lucas Ledsham</a>',
    hrInnovate:
      "O HR Innovate é um sistema destinado a automatizar processos críticos em um departamento de Recursos Humanos, focando em uma área em essencial: Recrutamento e Seleção. O objetivo é aumentar a eficiência operacional, reduzir erros e melhorar a experiência tanto dos candidatos quanto dos profissionais de RH, integrando e otimizando todas as etapas do recrutamento, desde a publicação de vagas até a contratação.",
    sofia:
      "A SOFIA - Sistema Online Facilitador para Idade Avançada, surgiu para auxiliar os cidadãos de idade avançada, trazendo a proposta de solucionar o problema de falta de informação sobre segurança digital e proporcionando uma plataforma de fácil acessibilidade com informações atualizadas, afim de evitar que mais pessoas se tornem vítimas dos golpes aplicados online.",
    portal:
      "O Portal BH Para Todos é uma plataforma que reúne diversos projetos sociais de Belo Horizonte e região, com o objetivo de proporcionar aos cidadãos a oportunidade de conhecer e se conectar com essas iniciativas. O portal visa facilitar a divulgação dessas ações, permitindo que cada vez mais pessoas possam conhecê-las.",
    quemsou: "Quem Sou",
    sobremimTexto:
      "Sou estudante de Engenharia de Software em Belo Horizonte/MG, apaixonado por tecnologia e inovação. Busco sempre aprender e evoluir, valorizando criatividade e disciplina para superar desafios e crescer profissionalmente.",
    interesses: "Interesses",
    interessesTexto:
      "Sou entusiasta do desenvolvimento de sistemas, com grande interesse em desenvolvimento mobile e full stack. Tenho afinidade especial por Java, Flutter e JavaScript, e estou sempre buscando aprender novas tecnologias.",
    objetivos: "Objetivos Profissionais",
    objetivosTexto:
      "Busco atuar como desenvolvedor, contribuindo para projetos inovadores e desafiadores, sempre aprimorando minhas habilidades técnicas e interpessoais. Valorizo o trabalho em equipe, pois acredito que a colaboração é essencial para alcançar resultados de excelência e promover o crescimento profissional de todos.",
    entreContato: "Entre em contato",
    curriculo: "Currículo",
    botaoContato: "Contato",
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
      "I have a degree in <strong>Advertising and Marketing</strong>, an area that brought me closer and made me passionate about technology. I am currently studying <strong>Software Engineering</strong> at PUC Minas. In addition, I am constantly self-studying and taking online courses.",
    languages: "Languages",
    ingles: "English / Advanced",
    espanhol: "Spanish / Intermediate",
    conversar: "Shall we talk?",
    footer1: "Send me an email at",
    footer2: "I’m at your disposal!",
    desenvolvido:
      'Developed by <a href="https://www.linkedin.com/in/lucas-nunes-leal-ledsham-0048b621a/" target="_blank" rel="noopener noreferrer" id="lucas">Lucas Ledsham</a>',
    hrInnovate:
      "HR Innovate is a system designed to automate critical processes in a Human Resources department, focusing on a key area: Recruitment and Selection. The goal is to increase operational efficiency, reduce errors, and improve the experience for both candidates and HR professionals by integrating and optimizing all stages of recruitment, from job posting to hiring.",
    sofia:
      "SOFIA - Sistema Online Facilitador para Idade Avançada, was created to assist elderly citizens, aiming to solve the problem of lack of information about digital security and providing an easily accessible platform with up-to-date information, in order to prevent more people from becoming victims of online scams.",
    portal:
      "The Portal BH Para Todos is a platform that brings together several social projects from Belo Horizonte and the surrounding region, aiming to provide citizens with the opportunity to learn about and connect with these initiatives. The portal seeks to facilitate the dissemination of these actions, allowing more and more people to discover them.",
    quemsou: "About Me",
    sobremimTexto:
      "I am a Software Engineering student in Belo Horizonte/MG, passionate about technology and innovation. I am always seeking to learn and grow, valuing creativity and discipline to overcome challenges and develop professionally.",
    interesses: "Interests",
    interessesTexto:
      "I am an enthusiast of system development, with great interest in mobile and full-stack development. I have a special affinity for Java, Flutter, and JavaScript, and I am always seeking to learn new technologies.",
    objetivos: "Professional Goals",
    objetivosTexto:
      "I aim to work as a developer, contributing to innovative and challenging projects while continuously improving my technical and interpersonal skills. I value teamwork, as I believe collaboration is essential to achieving excellence and fostering the professional growth of everyone involved.",
    entreContato: "Let's talk about it",
    curriculo: "Curriculum Vitae",
    botaoContato: "Contact",
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

  const hrInnovate = document.querySelector("#hrInnovate-tradutor");
  if (hrInnovate) hrInnovate.innerHTML = t.hrInnovate;

  const sofia = document.querySelector("#sofia-tradutor");
  if (sofia) sofia.innerHTML = t.sofia;

  const portal = document.querySelector("#pbpt-tradutor");
  if (portal) portal.innerHTML = t.portal;

  const quemsou = document.querySelector("#quem-sou");
  if (quemsou) quemsou.innerHTML = t.quemsou;

  const sobremimTexto = document.querySelector("#sobremim-texto");
  if (sobremimTexto) sobremimTexto.innerHTML = t.sobremimTexto;

  const interesses = document.querySelector("#interesses-tradutor");
  if (interesses) interesses.innerHTML = t.interesses;

  const interessesTexto = document.querySelector("#interesses-texto-tradutor");
  if (interessesTexto) interessesTexto.innerHTML = t.interessesTexto;

  const objetivos = document.querySelector("#objetivos-tradutor");
  if (objetivos) objetivos.innerHTML = t.objetivos;

  const objetivosTexto = document.querySelector("#objetivos-texto-tradutor");
  if (objetivosTexto) objetivosTexto.innerHTML = t.objetivosTexto;

  const entreContato = document.querySelector("#entre-contato");
  if (entreContato) entreContato.innerHTML = t.entreContato;

  const curriculo = document.querySelector(".links-curriculo");
  if (curriculo) curriculo.innerHTML = t.curriculo;

  const botaoContato = document.querySelector(".botao-contato");
  if (botaoContato) botaoContato.innerHTML = t.botaoContato;

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
