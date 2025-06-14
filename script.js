// Controle de Jornada de Trabalho
// Desenvolvido por Guilherme Eduardo Bernardes - Projeto lógica de programação com JavaScript

// Função principal
function registrarJornada() {
  alert("Bem-vindo ao Controle de Jornada de Trabalho!");

  // Função auxiliar para capturar hora válida
  function capturarHorario(msg) {
    let horario;
    while (true) {
      horario = prompt(`${msg} (formato HH:MM)`);
      if (validarHorario(horario)) break;
      alert("Horário inválido. Tente novamente.");
    }
    return horario;
  }

  // Função para validar o horário (formato HH:MM)
  function validarHorario(horario) {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(horario);
  }

  // Função para converter hora para minutos
  function paraMinutos(horaStr) {
    const [h, m] = horaStr.split(":").map(Number);
    return h * 60 + m;
  }

  // Função para converter minutos para HH:MM
  function paraHorario(minutos) {
    const h = Math.floor(minutos / 60).toString().padStart(2, "0");
    const m = (minutos % 60).toString().padStart(2, "0");
    return `${h}:${m}`;
  }

  // Captura dos horários
  const entrada = capturarHorario("Digite o horário de entrada");
  const pausa = capturarHorario("Digite o horário de início da pausa");
  const retorno = capturarHorario("Digite o horário de retorno da pausa");
  const saida = capturarHorario("Digite o horário de saída");

  // Conversão para minutos
  const entradaMin = paraMinutos(entrada);
  const pausaMin = paraMinutos(pausa);
  const retornoMin = paraMinutos(retorno);
  const saidaMin = paraMinutos(saida);

  // Cálculo total de jornada
  const tempoTrabalho = (pausaMin - entradaMin) + (saidaMin - retornoMin);
  const horarioFormatado = paraHorario(tempoTrabalho);

  console.clear();
  console.log("====== RELATÓRIO DE JORNADA ======");
  console.log(`Entrada: ${entrada}`);
  console.log(`Pausa: ${pausa}`);
  console.log(`Retorno: ${retorno}`);
  console.log(`Saída: ${saida}`);
  console.log(`Total trabalhado: ${horarioFormatado}`);

  // Verificação de carga horária (8h padrão = 480 min)
  if (tempoTrabalho > 480) {
    console.log("🔺 Jornada com horas extras!");
  } else if (tempoTrabalho < 480) {
    console.log("⚠️ Jornada incompleta.");
  } else {
    console.log("✅ Jornada completa.");
  }

  console.log("==================================");
}

// Executar o programa
registrarJornada();
