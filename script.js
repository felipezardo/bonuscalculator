document.getElementById('dataAtual').valueAsDate = new Date();

function calcularBonus() {
  const vencimento = new Date(document.getElementById('vencimento').value);
  const bonusAnterior = parseInt(document.getElementById('bonusAnterior').value);
  const dataAtual = new Date(document.getElementById('dataAtual').value);

  const msPorDia = 1000 * 60 * 60 * 24;
  const dias = Math.floor((dataAtual - vencimento) / msPorDia);

  let perda = 0;
  if (dias <= 30) perda = -1;
  else if (dias <= 60) perda = 0;
  else if (dias <= 90) perda = 1;
  else if (dias <= 120) perda = 2;
  else if (dias <= 150) perda = 3;
  else if (dias <= 180) perda = 4;
  else if (dias <= 210) perda = 5;
  else if (dias <= 240) perda = 6;
  else if (dias <= 270) perda = 7;
  else if (dias <= 300) perda = 8;
  else if (dias <= 330) perda = 9;
  else perda = 10;

  let bonusAtual = bonusAnterior - perda;
  if (dias <= 30) bonusAtual = bonusAnterior + 1;
  if (bonusAtual < 0) bonusAtual = 0;

  const resultado = `Dias desde o vencimento: <strong>${dias}</strong><br>
    Perda de classes: <strong>${perda >= 0 ? perda : 'Acrescenta 1'}</strong><br>
    Classe atual de bônus: <strong>${bonusAtual}</strong><br>
    Última data para manter essa classe: <strong>${formatarData(addDias(vencimento, limiteDias(perda)))}</strong>`;

  document.getElementById('resultado').innerHTML = resultado;
}

function addDias(data, dias) {
  const novaData = new Date(data);
  novaData.setDate(novaData.getDate() + dias);
  return novaData;
}

function limiteDias(perda) {
  if (perda === -1) return 30;
  if (perda === 0) return 60;
  if (perda === 1) return 90;
  if (perda === 2) return 120;
  if (perda === 3) return 150;
  if (perda === 4) return 180;
  if (perda === 5) return 210;
  if (perda === 6) return 240;
  if (perda === 7) return 270;
  if (perda === 8) return 300;
  if (perda === 9) return 330;
  return 365;
}

function formatarData(data) {
  return data.toLocaleDateString('pt-BR');
}
