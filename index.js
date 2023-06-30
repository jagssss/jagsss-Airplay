let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector(".volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// audio element
let track = document.createElement("audio");

// songs list
let All_song = [
  {
    name: "Peaches 🔥",
    path: "sound/Peaches.mp3",
    img: "images/peaches.jpg",
    singer: "Justin Bieber ✨",
  },
  {
    name: "Kahani Suno 2.0 🔥",
    path: "sound/Kahani Suno 2.0.mp3",
    img: "images/Kahani-Suno 2.0.jpg",
    singer: "Kaifi Khalil ✨",
  },
  {
    name: "Better 🔥",
    path: "sound/better.mp3",
    img: "images/better.jpg",
    singer: "Khalid ✨",
  },
  {
    name: " Ram Siya Ram 🙏🏻",
    path: "sound/Ram Siya Ram.mp3",
    img: "images/Ram-Siya.gif",
    singer: "Sachet Tandon ✨",
  },
  {
    name: "Makeba 🔥",
    path: "sound/makeba.mp3",
    img: "images/makeba.jpeg",
    singer: "Jain ✨",
  },
  {
    name: "Holly 🔥",
    path: "sound/holly.mp3",
    img: "images/holly.jpg",
    singer: "Justin Bieber ✨",
  },
  {
    name: "Hymn for the Weekend 🔥",
    path: "sound/hymn4weekend.mp3",
    img: "images/hymn4weekend.jpeg",
    singer: "Coldplay ✨",
  },
  {
    name: "Intentions 🔥",
    path: "sound/intent.mp3",
    img: "images/inten.jpg",
    singer: "Justin Bieber ✨",
  },
  {
    name: "Positions 🔥",
    path: "sound/position.mp3",
    img: "images/position.jpeg",
    singer: "Ariana grande ✨",
  },
  {
    name: "Tune Kaha  🔥",
    path: "sound/tunekaha.mp3",
    img: "images/tunekaha.jpg",
    singer: "Prateek kuhad ✨",
  },
  {
    name: "Bad liar  🔥",
    path: "sound/badliar.mp3",
    img: "images/badliar.jpg",
    singer: "Selena Gomez ✨",
  },
  {
    name: "Sick Boy  🔥",
    path: "sound/sickboy.mp3",
    img: "images/sickboy.jpg",
    singer: "Chainsmokers 🎊",
  },
  {
    name: "Brown Munde 🔥",
    path: "sound/brownmunde.mp3",
    img: "images/bronmunde.jpeg",
    singer: "AP Dhillon ✨",
  },
  {
    name: "When you say ☽",
    path: "sound/whenu.mp3",
    img: "images/whenu.jpeg",
    singer: "Ronan Keating ✨",
  }
];

// functions for loading track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();
  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();

  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
  timer = setInterval(range_slider, 1000);
}
load_track(index_no);



//mute sound
function mute_sound(){
    track.volume=0;
    volume.value=0;
    volume_show.innerHTML=0;
}



// reset song slider 
function reset_slider(){
    slider.value = 0;
}




// checking song is playing or not 
function justplay() {
  if (playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

function playsong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fa fa-pause"></i>';
}

function pausesong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fa fa-play"></i>';
  
}

// for next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = All_song.length - 1;
    load_track(index_no);
    playsong();
  }
}

// volume change
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

function range_slider() {
  let position = 0;
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if(track.ended){
      play.innerHTML ='<i class="fa fa-play"></i>';
      
      if(autoplay==1){
        index_no+=1;
        load_track(index_no);
        autoplay==0;
        playsong();
        
    }
  }
  
}


//autoplay function

function autoplay_switch(){
    if(autoplay==1){
       autoplay=0;
       auto_play.style.background="rgba(255,255,255,0.2)"
    }else{
        autoplay=1;
        auto_play.style.background="#6cc1e9";
    }
}

