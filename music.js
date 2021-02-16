const music = document.getElementById("music");
const playPause = document.getElementById("pButton");
let duration;
let playPercent = 0;

//Play music
function playAudio() {
	if (music.paused) {
		music.play();
		pButton.className = "";
		pButton.className = "pause";
	}
	else {
		music.pause();
		pButton.className = "";
		pButton.className = "play";
	}
}

//Switch album and album info after first click
function rickRoll() {
	if (playPercent === 0) {
		let album = document.getElementById("album");
		album.className = "";
		album.className = "rick";
	
		let song = document.getElementById("song");
		song.innerHTML = "Never Gonna Give You Up";
	
		let artist = document.getElementById("artist");
		artist.innerHTML = "Rick Astley";
	
		let paragraph = document.createElement("p");
		paragraph.innerHTML = "You've been Rick Rolled :)";
		document.getElementsByTagName("h1")[0].appendChild(paragraph);
	}
}

//update playhead to move along progress bar and update progress bar
function progressUpdate() {
	playPercent = 100 * (music.currentTime / duration);
	playhead.style.marginLeft = playPercent + "%";

	let playheadStyle = window.getComputedStyle(document.getElementById("playhead"));
	let p = playheadStyle.getPropertyValue('margin-left');
	currentProgress.style.width = p;
}

playPause.addEventListener("click", playAudio);
playPause.addEventListener("click", rickRoll);
music.addEventListener("timeupdate", progressUpdate);

// Gets music duration
music.addEventListener("canplaythrough", () => {
	duration = music.duration;
});