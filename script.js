var video = document.getElementById("myVideo");
var videoUrl = "";

function loadVideo() {
    videoUrl = document.getElementById("video-url").value;
    video.src = videoUrl;
    video.load();
}

function downloadVideo() {
    if (videoUrl !== "") {
        var a = document.createElement('a');
        a.href = videoUrl;
        a.download = 'video.mp4'; // You can specify the filename here
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

// Double tap functionality
var lastTap = 0;
video.addEventListener('click', function(event) {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
        // Double tap detected
        var x = event.pageX;
        var screenWidth = window.innerWidth;
        var thirdOfScreenWidth = screenWidth / 3;

        if (x < thirdOfScreenWidth) {
            // Left third of the screen (backwards 10 seconds)
            video.currentTime -= 10;
        } else if (x > thirdOfScreenWidth * 2) {
            // Right third of the screen (forwards 10 seconds)
            video.currentTime += 10;
        }
    }
    lastTap = currentTime;
});
video.addEventListener('touchend', function(event) {
    var currentTime = new Date().getTime();
    var tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
        // Double tap detected
        var x = event.changedTouches[0].pageX;
        var screenWidth = window.innerWidth;
        var thirdOfScreenWidth = screenWidth / 3;

        if (x < thirdOfScreenWidth) {
            // Left third of the screen (backwards 10 seconds)
            video.currentTime -= 10;
        } else if (x > thirdOfScreenWidth * 2) {
            // Right third of the screen (forwards 10 seconds)
            video.currentTime += 10;
        }
    }
    lastTap = currentTime;
});

}
function backward() {
    video.currentTime -= 10;
}

function forward() {
    video.currentTime += 10;
}
