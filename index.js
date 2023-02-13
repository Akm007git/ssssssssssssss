console.log("welcome to spotify!!!");

// audioElement.play();
// initialize the songs array
 let songs = [

    {songName:"aaaaaaaaaaaaaaaaa" , filePath:"songs/1.mp3", coverPath: "images/1.jpg"},
    {songName:"bbbbbbbbbbbbbbbbb" , filePath:"songs/2.mp3", coverPath: "images/2.jpg"},
    {songName:"cccccccccccccccccc" , filePath:"songs/3.mp3", coverPath: "images/3.jpg"},
    {songName:"dddddddddddddddd" , filePath:"songs/4.mp3", coverPath: "images/4.jpg"},
    {songName:"eeeeeeeeeeeeeeeeee" , filePath:"songs/5.mp3", coverPath: "images/5.jpg"},
    {songName:"ffffffffffffffffff" , filePath:"songs/6.mp3", coverPath: "images/6.jpg"},
    {songName:"gggggggggggggggggg" , filePath:"songs/7.mp3", coverPath: "images/7.jpg"},
    {songName:"hhhhhhhhhhhhhhhhhh" , filePath:"songs/8.mp3", coverPath: "images/8.jpg"},
    {songName:"iiiiiiiiiiiiiiiiii" , filePath:"songs/9.mp3", coverPath: "images/9.jpg"},
    {songName:"jjjjjjjjjjjjjjjjjjj" , filePath:"songs/10.mp3", coverPath: "images/10.jpg"},
    
 ]

 let songIndex =0;
  let audioElement = new Audio('songs/3.mp3');
 let masterplay = document.getElementById('masterPlay');
 let myProgressBar = document.getElementById('progressBar');
 let gif = document.getElementById('gifff');
 let songItems = Array.from(document.getElementsByClassName('songItems') );
 let songPlayIcon= Array.from(document.getElementsByClassName('songPlayIcon'));
 let masterSongName = document.getElementById('masterSongName');

 // handle masterplay click/paused;

 masterplay.addEventListener('click', ()=>
 {

    if ( audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }

    else
    {

        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
 })

 // listen the update timeupdate

 audioElement.addEventListener('timeupdate' , ()=>
 {
    console.log('timeupdate');
    //update seekbar by logic
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100 ); // we can the percentage of played song
 
    console.log(progress);
    myProgressBar.value = progress; // percentage wise increases, joto percent sona hoyeche
 })

 // music current time wise, we can listen any position of song
    myProgressBar.addEventListener('change', ()=>{

    audioElement.currentTime= (myProgressBar.value * audioElement.duration)/100;

 })

 // chamge all songs name ans coverpath by for each function


 songItems.forEach( (element,i) => {
   console.log('element','i');
   element.querySelectorAll("img")[0].src = songs[i].coverPath;
   element.querySelectorAll(".songsName")[0].innerText = songs[i].songName;
   
 })

 



 

 const makeAllPlay = ()=>
 {

   // if any of the song are palying tgen these case 'll br changed
     songPlayIcon.forEach ((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
   })

 }

   songPlayIcon.forEach( (element) => {
   element.addEventListener('click',(e)=>
   {
      // console.log(e.target);
      makeAllPlay(); // function call
      songIndex = parseInt(e.target.id);
      gif.style.opacity=1;
   masterSongName.innerText= songs[songIndex].songName;
      
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');

      audioElement.src=`songs/${songIndex+1}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');

   })
 })

 document.getElementById('next').addEventListener('click',()=>
 {
   if( songIndex >= 9)
   {
      songIndex=0;
   }
   else{
      songIndex += 1;
   }

   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity=1;
   masterSongName.innerText= songs[songIndex].songName;
   masterplay.classList.remove('fa-circle-play');
   masterplay.classList.add('fa-circle-pause');

 })

 document.getElementById('previous').addEventListener('click',()=>
 {
   if( songIndex <= 0)
   {
      songIndex=9;
   }
   else{
      songIndex -= 1;
   }

   audioElement.src=`songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity=1;
   masterSongName.innerText= songs[songIndex].songName;
   masterplay.classList.remove('fa-circle-play');
   masterplay.classList.add('fa-circle-pause');

 })  