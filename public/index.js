const video = document.querySelector('#user_video');
const cameraStatus = document.querySelector('#camera_status');

function setCameraStatus(message) {
    cameraStatus.textContent = message;
}

async function startCamera() {
    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
        setCameraStatus('Camera access requires a modern browser and a secure connection (HTTPS or localhost).');
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
        setCameraStatus('Camera preview is ready.');
    } catch (error) {
        console.error('Camera access failed:', error);
        setCameraStatus('Unable to start camera. Check your browser permissions and try again.');
    }
}

startCamera();
