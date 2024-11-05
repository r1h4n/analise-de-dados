const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';
//url='20.201.28.151/main/dados/grafico-principal.json';
//modelo de endereço servidor de dados para o javaScript.

async function vizualizarInformacoesGlobais()

const res =await fetch(url)
const dados =await res.json()
const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos = Math.round((dados.tempo_mediohoras) * 100)
const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)
