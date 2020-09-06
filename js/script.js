//------------ INICIALIZADOR--------------
window.addEventListener('load', start);

function start(){
    buttonNight.addEventListener('click',backgroundNight);
    buttonLight.addEventListener('click', backgroundLight);
}
//----------VARIAVEIS GLOBAIS----------------------
let buttonNight = document.getElementById('btn-night');
let buttonLight = document.getElementById('btn-light');
let profile = document.getElementById('profile');
let nav = document.getElementById('barra');
let titulo = document.getElementById('subtitulo');
let projetos = document.getElementById('projetos');
let sobreMim = document.getElementById('sobre-mim');
let habilidade = document.getElementById('habilidades');
let certificado = document.getElementById('certificado');
let linha = document.querySelectorAll('hr');
let linhas = Array.prototype.slice.call(linha);
let rodape = document.querySelector('.rodape');
let copyright = document.querySelector('.copyright');
console.log(linhas);

typeWrite(titulo);

//----------FUNÇÃO DE ESCREVER SOZINHO----------------------
function typeWrite(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) =>{
        setTimeout(function () {
            elemento.innerHTML += letra;console.log(textArray)
        },150 *i)

    });
    

}
//----------FUNÇÃO MUDAR A COR DO PERFIL----------------------
function backgroundNight(event){  
    if(event.type ==='click'){
        console.log('Escuro');
        barra.style.backgroundColor ='#363636';
        profile.style.backgroundColor = 'rgb(204, 208, 212)';
        projetos.style.backgroundColor ='#dc3545';
        sobreMim.style.backgroundColor ='#dc3545';
        habilidade.style.backgroundColor ='#dc3545';
        certificado.style.backgroundColor ='#dc3545';
        rodape.style.backgroundColor = '#363636';
        copyright.style.backgroundColor = 'rgb(204, 208, 212)'
        
        for(let i = 1; i <=4; i++){
            document.querySelector('.linha'+i).style.backgroundColor ='#dc3545';
        }
        
    }
    
}
function backgroundLight(){
    if(event.type ==='click'){
        console.log('claro');
        barra.style.backgroundColor ='#6495ED';
        profile.style.backgroundColor = '#B0C4DE';
        projetos.style.backgroundColor ='#6495ED';
        sobreMim.style.backgroundColor ='#6495ED';
        habilidade.style.backgroundColor ='#6495ED';
        certificado.style.backgroundColor ='#6495ED';
        rodape.style.backgroundColor = '#6495ED';
        copyright.style.backgroundColor = '#B0C4DE'
        


        for(let i = 1; i <=4; i++){
            document.querySelector('.linha'+i).style.backgroundColor ='#6495ED';
            console.log(i)
        }

    }
}



