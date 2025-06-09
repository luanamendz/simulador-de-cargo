document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const respostas = ['q1', 'q2', 'q3'].map(q => {
    const marcada = document.querySelector(`input[name="${q}"]:checked`);
    return marcada ? parseInt(marcada.value) : 0;
  });

  const soma = respostas.reduce((acc, val) => acc + val, 0);

  let cargo = "";

  if (soma <= 4) {
    cargo = "Estagiário nível sênior com permissão pra usar a impressora";
  } else if (soma <= 6) {
    cargo = "Analista pleno com domínio em enrolação estratégica";
  } else {
    cargo = "Diretor de tretas operacionais e cafés importantes";
  }

  document.getElementById('resultado').innerText = `🚀 Seu cargo é: ${cargo}`;
});
