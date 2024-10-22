import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
const res = await fetch (url)
const dados = await res.json()
const nomeDasRedes = Object.keys(dados);

const data = [
    {
        x: nomeDasRedes,
        y: quantidadeUsuarios,
        type: 'bar',
        marker: {
            color: getCSS('--primary-color')
        }
    }
  ]
}

    const laytout = {
        plot_bgcolor: getCSS('--br-color'),
        paper_bgcolor: gerCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0,
            font:{
                color: getCSS('--primary-color'),
                size: 30, 
                font:getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickconfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            },
            yaxis: {
                tickfont: tickConfig,
                title:{
                    text: 'bilhões de usuários ativo',
                    font: {
                        color: getCSS('--secondary-color')
                    }
                }
            }
        }
    }
