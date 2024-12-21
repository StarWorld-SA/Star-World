



function abrirModal(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}


function abrirModal2(){
    const modal = document.getElementById('janela-modal2')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal2'){
            modal.classList.remove('abrir')
        }
    })
}



function abrirModal3(){
    const modal = document.getElementById('janela-modal3')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal3'){
            modal.classList.remove('abrir')
        }
    })
}




function abrirModal4(){
    const modal = document.getElementById('janela-modal4')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal4'){
            modal.classList.remove('abrir')
        }
    })
}


