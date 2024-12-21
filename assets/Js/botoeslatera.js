//botões dos artistar top star//
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song_left2 = document.getElementById('pop_song_left2');
let pop_song_right2 = document.getElementById('pop_song_right2');
let pop_song_left3 = document.getElementById('pop_song_left3');
let pop_song_right3 = document.getElementById('pop_song_right3');
let pop_song_left4 = document.getElementById('pop_song_left4');
let pop_song_right4 = document.getElementById('pop_song_right4');
let pop_song_left5 = document.getElementById('pop_song_left5');
let pop_song_right5 = document.getElementById('pop_song_right5');
let mov_left = document.getElementById('mov_left');
let mov_right = document.getElementById('mov_right');

let pop_song = document.getElementsByClassName('pop_song')[0];
let real_roll = document.getElementsByClassName('real_roll')[0];
let barra_catego = document.getElementsByClassName('barra_catego')[0];
let stories_roll = document.getElementsByClassName('stories_roll')[0];
let mov_roll = document.getElementsByClassName('mov_roll')[0];




pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});
pop_song_right2.addEventListener('click', () => {
    real_roll.scrollLeft += 330;
});
pop_song_left2.addEventListener('click', () => {
    real_roll.scrollLeft -= 330;
});

pop_song_right5.addEventListener('click', () => {
    barra_catego.scrollLeft += 330;
});
pop_song_left5.addEventListener('click', () => {
    barra_catego.scrollLeft -= 330;
});
pop_song_right4.addEventListener('click', () => {
    stories_roll.scrollLeft += 330;
});
pop_song_left4.addEventListener('click', () => {
    stories_roll.scrollLeft -= 330;
});
mov_right.addEventListener('click', () => {
    mov_roll.scrollLeft += 330;
});
mov_left.addEventListener('click', () => {
    mov_roll.scrollLeft -= 330;
});
