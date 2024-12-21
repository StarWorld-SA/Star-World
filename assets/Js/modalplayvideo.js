const main_video = document.querySelector('.main-video video');
const main_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Beat- teu Bady',
        'name': 'music (1).mp4',
        'duration': '25:45',
    },
    {
        'id': 'a2',
        'title': 'Chris- Brown',
        'name': 'music (2).mp4',
        'duration': '2:23',
    },
    {
        'id': 'a3',
        'title': 'vibe louca',
        'name': 'music (3).mp4',
        'duration': '1:23',
    },
    {
        'id': 'a4',
        'title': '3D popup card',
        'name': 'music (4).mp4',
        'duration': '3:54',
    },
    {
        'id': 'a5',
        'title': '3D popup card',
        'name': 'music (5).mp4',
        'duration': '3:44',
    },
    {
        'id': 'a6',
        'title': '3D popup card',
        'name': 'music (6).mp4',
        'duration': '5:04',
    },
];

data.forEach((video,i) => {
  let video_element = `
            <div class="video" data-id="${video.id}">
                <img src="image/play.png" alt="">
                <p>0${i + 1}. </p>
                <h3 class="title">${video.title}</h3>
                <p class="time">${video.duration}</p>
            </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'image/stop.png';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'image/play.png';

        }
       selected_video.classList.add('active');
       selected_video.querySelector('img').src = 'image/stop.png';

       let match_video = data.find(video => video.id == selected_video.dataset.id);
       main_video.src = 'videoss/' + match_video.name;
       main_title.innerHTML = match_video.title;
    }
});