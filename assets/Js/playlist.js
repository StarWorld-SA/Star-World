// let´s select all required tags or elements

const wapper = document.querySelector(".wapper"),

musicName = wapper.querySelector(".song-details .name"),

mainAudio = wapper.querySelector("#main-audio"),
playPauseBtn = wapper.querySelector(".play-pause"),
prevBtn = wapper.querySelector("#prev"),
nextBtn = wapper.querySelector("#next"),
progressArea = wapper.querySelector(".progress-area"),
progressBar = wapper.querySelector(".progress-bar"),
musicList = wapper.querySelector(".music-list"),
showMoreBtn = wapper.querySelector("#more-music"),
hideMusicBtn = musicList.querySelector("#close");

let musicIndex = 4;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex); //calling load music funtion once window loaded
    playingNow();
})

//load music funtion
function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;

   
    mainAudio.src = `assets/songs/${allMusic[indexNumb - 1].src}.m4a`;
}

//play music funtion
function playMusic(){
    wapper.classList.add("paused");
    playPauseBtn.querySelector("img").innerText = "pause";
    mainAudio.play();
}
//pause music funtion
function pauseMusic(){
    wapper.classList.remove("paused");
    playPauseBtn.querySelector("img").innerText = "play_arrow";
    mainAudio.pause();
}

//next music funtion
function prevMusic(){
    //here we'll just decrement of index by 1
    musicIndex--;
    //if musicIndex is less than 1 then musicIndex will be array length so the last song will play
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

//prev music funtion
function nextMusic(){
    //here we'll just increment of index by 1
    musicIndex++;
    //if musicIndex is greater than array length then musicIndex will be 1 so the first song will play
    musicIndex > allMusic.length ? musicImg = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

// play or music button event
playPauseBtn.addEventListener("click", ()=>{
    const isMusicPaused = wapper.classList.contains("paused");
    //if isMusicPaused is true call pauseMusic else call plyPaused
    isMusicPaused ? pauseMusic() : playMusic();
});

//next music btn event
nextBtn.addEventListener("click", ()=>{
    nextMusic(); //calling next music function
});
//prev music btn event
prevBtn.addEventListener("click", ()=>{
    prevMusic(); //calling next music function
});


//update progress bar width according to music current time
mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime; //getting current time of song
    const duration = e.target.duration; //getting total time of song
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%` ;

    let musicCurrentTime = wapper.querySelector(".current"),
        musicDuration = wapper.querySelector(".duration");

        mainAudio.addEventListener("loadeddata", ()=>{
        //update song total duration
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10){ //adding 0 if sec is less than 10
            totalSec = `0${totalSec}`
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;
    });

     //update playing song curation time
     let currentMin = Math.floor(currentTime / 60);
     let currentSec = Math.floor(currentTime % 60);
     if(currentSec < 10){ //adding 0 if sec is less than 10
         currentSec = `0${currentSec}`;
     }
     musicCurrentTime.innerText =  `${currentMin}:${currentSec}`;
});

//let's update playing song current time according to the progress bar with
progressArea.addEventListener("click", (e)=>{
    let progressWidthval = progressArea.clientWidth; //getting width of progress bar
    let clickdOffsetX = e.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting song total duration

    mainAudio.currentTime = (clickdOffsetX / progressWidthval) * songDuration;
    playMusic();
});

//let's work on repeat, shufle song according to the icon
const repeatBtn = wapper.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", ()=>{
    //first we get the innerText of the icon then we'll change accordingly
    let getText = repeatBtn.innerText; //getting inerText of icon
    //let's do different changes on diferent icon click using switch
    switch(getText){
        case "repeat" : //if this icon is repeat the change it to repeat_one
        repeatBtn.innerText = "repeat_one";
        repeatBtn.setAttribute("title", "Song looped");
        break;
    case "repeat_one": //if icon is repeat_one the change it to shuffle
        repeatBtn.innerText = "swiffle";
        repeatBtn.setAttribute("title", "Playback Shuffle");
        break;
    case "swiffle": //if icon is repeat_one the change it to shuffle
        repeatBtn.innerText = "repeat";
        repeatBtn.setAttribute("title", "Playlist looped");
        break;
    }

});

//above we just change the icon, now let's work on what to do
//after the song ended

mainAudio.addEventListener("ended", ()=>{
    //we'll do according to the icon to loop song then we'll repeat
    //the current song and will do further accordingly

    let getText = repeatBtn.innerText; //getting inerText of icon
     //let's do different changes on diferent icon click using switch
     switch(getText){
        case "repeat" : //if icon icon is repeat then simply we call the nextMusis function so th next song will play
        nextMusic();
        break;
    case "repeat_one": //if icon icon is repeat_one then we'll cnange the current playng song current time 0 so song will play from beginning
        mainAudio.currentTime = 0;
        loadMusic(musicIndex); // calling loadMusic funtion
        playMusic(); //calling playMusic function
        break;
    case "swiffle": //if icon icon is shuffle then change it to repeat 
        //generation random index between the max range of array length
        let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
        do{
            randIndex = Math.floor((Math.random() * allMusic.length) + 1);
        }while(musicIndex = randIndex); //this loop run until the next random number won't be the sume of current music index
        musicIndex = randIndex; // passing randomIndex so the random song will play
        loadMusic(musicIndex); // calling loadMusic funtion
        playMusic(); //calling playMusic function
        break;
    }
});

showMoreBtn.addEventListener("click", ()=>{
    musicList.classList.toggle("show");
});

hideMusicBtn.addEventListener("click", ()=>{
    showMoreBtn.click();
});

const ulTag = wapper.querySelector("ul");

//let's create li according to the array length
for (let i = 0; i < allMusic.length; i++){
    //let's pass the song name, artist from the array to li
    let liTag = ` <li li-index="${i + 1}">
                    <div class="row">
                    <span>${allMusic[i].name}</span>
                    <p>${allMusic[i].artist}</p>
                    </div>
                    <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.m4a"></audio>
                    <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag); 

}

