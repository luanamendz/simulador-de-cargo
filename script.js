const perguntas = [
  {
    texto: "Qual seu superpoder na firma?",
    opcoes: {
      a: "Fingir que entende o Excel",
      b: "Sobreviver a reuniões",
      c: "Decorar a mesa com plantinhas"
    }
  },
  {
    texto: "Qual seu lanche favorito no escritório?",
    opcoes: {
      a: "Bolacha de café passado",
      b: "Pipoca misteriosa do RH",
      c: "Restos do aniversário do mês"
    }
  },
  {
    texto: "Como você reage a e-mails em caps lock?",
    opcoes: {
      a: "Responde com emoji passivo-agressivo",
      b: "Ignora solenemente",
      c: "Encaminha pro estagiário"
    }
  },
  {
    texto: "Sua mesa está:",
    opcoes: {
      a: "Impecável (pelo menos hoje)",
      b: "Caótica, como minha alma",
      c: "Com 3 canecas e nenhuma limpa"
    }
  },
  {
    texto: "Você foi escolhido pra:",
    opcoes: {
      a: "Organizar o amigo oculto",
      b: "Treinar o novo contratado",
      c: "Segurar a porta com o pé"
    }
  },
  {
    texto: "Seu talento secreto na firma é:",
    opcoes: {
      a: "Evitar ligações",
      b: "Fugir de aglomeração na copa",
      c: "Decorar a senha do Wi-Fi"
    }
  }
];

const mapaResultados = {
  "aaaaaa": "📎 Você é Estagiário Nível Sênior com permissão pra usar a impressora. Mas não fique triste, o café é de graça (quase sempre).",
  "aaaabb": "🧻 Você é Gerente de Papelaria da Firma. Pelo menos ninguém mexe nas suas canetas.",
  "abcabc": "🧹 Você é Coordenador de Reuniões que Podiam Ser Email. Pelo menos tem ar-condicionado.",
  "cccccc": "🗂️ Você é Analista de Assuntos Aleatórios. Mas ei, alguém precisa decidir a cor da planilha.",
  // Adicione aqui os outros 725 resultados com frases engraçadas!
};

let indicePergunta = 0;
let respostas = "";
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const botao = document.getElementById("botao");
const resultadoEl = document.getElementById("resultado");

botao.addEventListener("click", () => {
  const selecionado = document.querySelector('input[name="opcao"]:checked');

  if (botao.textContent === "Começar") {
    mostrarPergunta();
    botao.textContent = "Seguinte";
    return;
  }

  if (!selecionado) {
    alert("Escolha uma opção!");
    return;
  }

  respostas += selecionado.value;
  indicePergunta++;

  if (indicePergunta < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
    botao.style.display = "none"; // Esconde o botão após a última pergunta
  }
});

function mostrarPergunta() {
  const perguntaAtual = perguntas[indicePergunta];
  perguntaEl.textContent = perguntaAtual.texto;
  opcoesEl.innerHTML = "";

  for (const [letra, texto] of Object.entries(perguntaAtual.opcoes)) {
    const id = `opcao-${letra}`;
    opcoesEl.innerHTML += `
      <label><input type="radio" name="opcao" value="${letra}" id="${id}" /> ${texto}</label>
    `;
  }
}

function mostrarResultado() {
  document.getElementById("quiz").style.display = "none";
  const resultado = mapaResultados[respostas] || "📎 Você é Consultor de Nada com Crachá que não abre nenhuma porta. Mas relaxa, o café ainda é café.";

  resultadoEl.innerHTML = `
    ${resultado}<br><br><small>Redirecionando para o início...</small>
  `;

  setTimeout(() => {
    window.location.href = "https://afirma.softr.app";
  }, 5000);
}
