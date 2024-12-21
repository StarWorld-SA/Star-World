
var configMenu = document.querySelector(".seting-menu");
var escuro = document.getElementById("dark-btn");
var escuro2 = document.getElementById("dark-btn2");

function abreConfig()
{
    configMenu.classList.toggle("settings-menu-height");
}

escuro.onclick = function(){
    escuro.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}
escuro2.onclick = function(){
    escuro2.classList.toggle("dark-btn-on2");
    document.body.classList.toggle("dark-theme2")
}


/*seting menu 2*/

var configMenu2 = document.querySelector(".seting-menu2");


function abreConfig2()
{
    configMenu2.classList.toggle("settings-menu-height2");
}


/*seting menu 3*/

var configMenu3 = document.querySelector(".seting-menu3");


function abreConfig3()
{
    configMenu3.classList.toggle("settings-menu-height3");
}
/*seting menu 4*/

var configMenu4 = document.querySelector(".seting-menu4");


function abreConfig4()
{
    configMenu4.classList.toggle("settings-menu-height4");
}

/*seting menu 20*/

var configMenu20 = document.querySelector(".seting-menu20");


function abreConfig20()
{
    configMenu20.classList.toggle("settings-menu-height20");
}

// tag para manter o theme darck. Inicio da linha
escuro.onclick = function(){
    escuro.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    escuro.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

}else if(localStorage.getItem("theme") == "dark"){

    escuro.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}else{
    localStorage.setItem("theme", "light");
    localStorage.setItem("theme");
};


// tag para manter o theme darck. fim da linha

// tag para manter o theme darck. Inicio da linha
escuro2.onclick = function(){
    escuro2.classList.toggle("dark-btn-on2");
    document.body.classList.toggle("dark-theme2");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    escuro2.classList.remove("dark-btn-on2");
    document.body.classList.remove("dark-theme2");

}else if(localStorage.getItem("theme") == "dark"){

    escuro2.classList.add("dark-btn-on2");
    document.body.classList.add("dark-theme2");
}else{
    localStorage.setItem("theme", "light");
    localStorage.setItem("theme");
};


// tag para manter o theme darck. fim da linha




// ======================== THEME, ABRIR E FECHAR MODAIS===================================

//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messageNotification = document.querySelector('#messagens-notification');
const messages = document.querySelector('.messages');
//===============pesquisa nas mensagens=======================
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


//===============cont de abrir e fechar modal theme=====================
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
//tamanho de letra
const fontSizes = document.querySelectorAll('.cloose-size span');
var root = document.querySelector(':root');
//cor dos botões
const colorPalete = document.querySelectorAll('.cloose-color span');
//bacground colors
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
const Bg4 = document.querySelector('.bg-4');



//===============SIDEBAR INICIO=======================

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click' , () => {
        changeActiveItem ();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//===============SIDEBAR FIM=======================


//===============MESSAGES INICIO=======================

//searches chats
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);

//hightlight messages card when messages menu item is clicked
messageNotification. addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})
//===============MESSAGES FIM=======================



//=============== THEME CUSTOMIZATION=======================

//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

// close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);




//========================FONTS==========================
//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
   

    size.addEventListener('click', () => {
        removeSizeSelector ();
        let fontSize;
        size.classList.toggle('active');
        
        if(size.classList.contains('font-size-1')){
            fontSize = '14px';
            root.style.setProperty('--stiky-top-left', '5.4rem');
            root.style.setProperty('--stiky-top-right', '18.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '15.9px';
            root.style.setProperty('--stiky-top-left', '5.4rem');
            root.style.setProperty('--stiky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16.9px';
            root.style.setProperty('--stiky-top-left', '5rem');
            root.style.setProperty('--stiky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--stiky-top-left', '3rem');
            root.style.setProperty('--stiky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--stiky-top-left', '3rem');
            root.style.setProperty('--stiky-top-right', '-35rem');
        }
        
    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })

})


// remove active class from colors
const changeActiveColorClass = () => {
    colorPalete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


//change primary colors
colorPalete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // remove active class from colors
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 54;
        }else if(color.classList.contains('color-2')){
            primaryHue = -5270800;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
let degradeColorLightness;

// changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--degrede-color-lightness', degradeColorLightness);
}

Bg1.addEventListener('click', () => {
    darkColorLightness = '5';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    degradeColorLightness = '100%';

    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    Bg4.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    degradeColorLightness = '100%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    Bg4.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    degradeColorLightness = '100%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    Bg4.classList.remove('active');
    changeBG();
});

Bg4.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    degradeColorLightness = '100%';

    //add active class
    Bg4.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});




//END


//modal open video e fechar video
//show video
let playButton = document.querySelector(".play-moviess");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closebtn = document.querySelector(".close-video");


playButton.onclick = () => {
    video.classList.add("show-video");
    //Auto Play When Click On Button
    myvideo.play();
};
closebtn.onclick = () => {
    video.classList.remove("show-video");
    //Pause On Close Video
    myvideo.pause();
};



// barra lateral do shopstar inicio

// cart open close
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#cart-close');
// open cart
cartIcon.onclick = () => {
    cart.classList.add('active');
};
// close cart
closeCart.onclick = () => {
    cart.classList.remove('active');
};


