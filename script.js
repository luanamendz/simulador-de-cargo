const questions = [
  {
    question: "Qual seu nível de café por dia na firma?",
    options: ["1 xícara só (por educação)", "3 xícaras com desespero", "Perdi as contas, virou intravenoso"]
  },
  {
    question: "O que você faz quando vê o chefe chegando?",
    options: ["Abro planilhas aleatórias", "Finjo que tô em call", "Sorrio e falo 'tamo junto!'"]
  },
  {
    question: "Como você participa das reuniões?",
    options: ["Falo só 'concordo com fulano'", "Faço caras pensativas", "Ativo o microfone errado de propósito"]
  },
  {
    question: "Qual seu superpoder no escritório?",
    options: ["Desaparecer pós-almoço", "Responder e-mail sem ler", "Sobreviver ao Excel sem fórmulas"]
  },
  {
    question: "Qual seu hobby nas horas de trabalho?",
    options: ["Planejar a fuga", "Criar teorias da conspiração", "Cuidar da planta da firma"]
  },
  {
    question: "Como você organiza sua mesa?",
    options: ["Organizo tudo por cor", "Empilho tudo e chamo de método", "Que mesa? Uso o chão"]
  }
];

let currentQuestion = 0;
let answers = [];

const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next");

function showQuestion(index) {
  const q = questions[index];
  const html = `
    <div class="question">
      <h2>${q.question}</h2>
      <div class="options">
        ${q.options.map((opt, i) => `
          <label>
            <input type="radio" name="q${index}" value="${i}">
            ${opt}
          </label>`).join('')}
      </div>
    </div>`;
  quizContainer.innerHTML = html;
}

function showResult() {
  // Converte array de respostas em string única (ex: "021120")
  const resultKey = answers.join('');
  
  // Gere um resultado aleatório com base nas respostas
  const cargosEngracados = [
    { cargo: "Supervisor de Impressora Estratégica", frase: "Mas ei, o toner é contigo mesmo!" },
    { cargo: "Mestre do Café Corporativo", frase: "Pode não ganhar aumento, mas café não falta!" },
    { cargo: "Consultor de Reuniões que Podiam Ser E-mails", frase: "O rei do 'vamos alinhar'!" },
    { cargo: "Estagiário Sênior Honorário", frase: "Ninguém sabe como você chegou aqui, nem você." },
    { cargo: "Sumido Profissional da Firma", frase: "Dizem que te viram no RH em 2021." },
    { cargo: "Ornamentador de Mesa Criativa", frase: "Sua planta sabe mais da firma que você!" },
    { cargo: "Diretor de Nada com Convicção", frase: "Mas seu crachá brilha mais que muitos!" },
    { cargo: "Especialista em Copiar e Colar", frase: "Mas sempre com estilo e Ctrl+V consciente." },
    { cargo: "Agente Secreto de Segunda-feira", frase: "Você aparece só quando convém!" }
  ];

  const random = Math.floor(Math.random() * cargosEngracados.length);
  const cargo = cargosEngracados[random];

  quizContainer.innerHTML = `
    <h2>🔎 Resultado: ${cargo.cargo}</h2>
    <p>${cargo.frase}</p>
    <p style="margin-top:1rem;">Você será redirecionado em 30 segundos...</p>
  `;

  nextButton.style.display = "none";

  setTimeout(() => {
    window.location.href = "https://afirma.softr.app";
  }, 30000);
}

nextButton.addEventListener("click", () => {
  const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
  if (!selected) {
    alert("Escolhe uma opção antes de continuar!");
    return;
  }

  answers.push(selected.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
});

showQuestion(currentQuestion);
