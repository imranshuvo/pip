const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream and pass that to the video element to play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

// EventListener
button.addEventListener('click', async () => {
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();

    button.disabled = false;

});


// Run on load
selectMediaStream();