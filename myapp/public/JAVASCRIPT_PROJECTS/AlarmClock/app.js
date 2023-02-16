let div = document.getElementById('con');
let clock;
let time;
let audiosrc = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

let ihour;
let isec;
let imin;
let ie;
let alaram_time;


div.setAttribute('style', 'display:flex; justify-content:center');
function call() {

    // Gobal Clock
    clock = new Date();
    let hour = clock.getHours();
    let min = clock.getMinutes();
    let sec = clock.getSeconds();
    let ext = 'AM';
    min = min.toLocaleString().length < 2 ? '0' + min : min;
    hour = hour.toLocaleString().length < 2 ? '0' + hour : hour;
    sec = sec.toLocaleString().length < 2 ? '0' + sec : sec;
    ext = hour >= 12 ? 'PM' : 'AM';

    time = `${hour}:${min}:${sec} ${ext}`;
    div.textContent = time;

    // Alaram Clock

    let button = document.getElementById('sub');
    button.addEventListener('click', set);

    function set(e){

        e.preventDefault();
        ihour = document.getElementById('hour').value
        imin = document.getElementById('min').value
        isec = document.getElementById('sec').value
        ie = document.getElementById('e').value
        ihour = ihour == '' ? '00': ihour;
        imin = imin == '' ? '00': imin;
        isec = isec == '' ? '00': isec;

        alaram_time = `${ihour}:${imin}:${isec}:${ie}`;}
    
        let music = new Audio(src=audiosrc);
        // var playpromise = music.play();
        if(hour.toLocaleString() === ihour & sec.toLocaleString() === isec & min.toLocaleString() == imin & ext === ie ){
            console.log('ringing');
            console.log(time ,alaram_time);
            music.play();
        }

        // console.log(sec, Number(isec)+10)
        if(sec === (Number(isec)+1)){
            console.log('exec');
            delete music;
        }
        
}

setInterval(call, 1000);





















