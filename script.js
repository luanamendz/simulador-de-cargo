const perguntas = [
  {
    texto: "☕ Qual seu café preferido?",
    opcoes: ["Café preto da firma", "Cappuccino com espuma de status", "O que tiver de graça"]
  },
  {
    texto: "🖥️ Qual sua habilidade mais afiada?",
    opcoes: ["Fingir que estou ocupado", "Traduzir termos em inglês", "Resolver pepino dos outros"]
  },
  {
    texto: "📎 O que nunca pode faltar no seu dia?",
    opcoes: ["Planilha que ninguém entende", "Grupo do zap silenciado", "Cadeira giratória"]
  },
  {
    texto: "📆 Você organiza sua agenda com:",
    opcoes: ["Post-it", "Google Calendar que nunca abre", "Na cabeça mesmo"]
  },
  {
    texto: "🤔 Qual sua reação a um problema urgente?",
    opcoes: ["Ignorar e esperar sumir", "Encaminhar pra alguém", "Abrir reunião"]
  },
  {
    texto: "🎉 Qual seu talento oculto na firma?",
    opcoes: ["Decorar aniversários", "Fugir de tarefas", "Aparecer só em festas"]
  }
];

// Todas as 729 combinações possíveis seriam impraticáveis aqui, então exemplo com algumas:
const mapaResultados = {
  "111111": "🪑 Você é Estagiário Vitalício com cadeira cativa no RH.",
  "123321": "🎯 Você é Especialista em Resolver o Que Você Mesmo Causou.",
  "321123": "🎭 Você é Diretor de Improviso e Gambiarra Corporativa.",
  "222222": "🧙 Você é Consultor Místico de Processos Invisíveis.",
  "333333": "🦄 Você é Vice-Presidente de Ilusões e Crachás Holográficos.",
  // Adicione mais combinações aqui...
};

let etapa = 0;
let respostas = "";

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const botao = document.getElementById("botao");
const resultadoEl = document.getElementById("resultado");

botao.addEventListener("click", () => {
  if (etapa === 0) {
    mostrarPergunta();
    botao.textContent = "Seguinte";
  } else if (etapa <= perguntas.length) {
    const selecionado = document.querySelector("input[name='opcao']:checked");
    if (selecionado) {
      respostas += selecionado.value;
      mostrarPergunta();
    } else {
      alert("Escolhe uma opção aí, chefia!");
    }
  } else {
    mostrarResultado();
  }
});

function mostrarPergunta() {
  if (etapa >= perguntas.length) {
    etapa++;
    mostrarResultado();
    return;
  }

  const atual = perguntas[etapa];
  perguntaEl.textContent = atual.texto;
  opcoesEl.innerHTML = "";

  atual.opcoes.forEach((op, idx) => {
    opcoesEl.innerHTML += `
      <label>
        <input type="radio" name="opcao" value="${idx + 1}">
        ${op}
      </label><br>`;
  });

  etapa++;
}

function mostrarResultado() {
  document.getElementById("quiz").style.display = "none";
  const resultado = mapaResultados[respostas] || "📎 Você é Consultor de Nada com Acesso Total ao Café.";
  resultadoEl.textContent = resultado;
}
