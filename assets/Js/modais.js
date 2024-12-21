/* comentario*/


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

//inicio abrir modal mensagem----------
function abrirModalplay(){
    const modalplay = document.getElementById('janela-modalplay')
    modalplay.classList.add('abrir')

    modalplay.addEventListener('click', (e) => {
        if(e.target.id == 'go-to-back' || e.target.id == 'janela-modalplay'){
            modalplay.classList.remove('abrir')
        }
    })
}
//fim abrir modal mensagem----------
//inicio abrir modal mensagem----------
function abrirModalplaymove(){
    const modalplaymove = document.getElementById('janela-modalplay-move')
    modalplaymove.classList.add('abrir')

    modalplaymove.addEventListener('click', (e) => {
        if(e.target.id == 'go-to-back' || e.target.id == 'janela-modalplay-move'){
            modalplaymove.classList.remove('abrir')
        }
    })
}
//fim abrir modal mensagem----------
//inicio abrir modal side bar error----------
function abrirModal41(){
    const modalplay = document.getElementById('janela-modal41')
    modalplay.classList.add('abrir')

    modalplay.addEventListener('click', (e) => {
        if(e.target.id == 'fechar41' || e.target.id == 'janela-modal41'){
            modalplay.classList.remove('abrir')
        }
    })
}
//fim abrir modal side bar error----------