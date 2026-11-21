# MeetUp — Camera Preview Prototype

A minimal Express application that previews a webcam stream in the browser. This repository is an early experiment, **not a full video-chat application**: it does not currently support peer-to-peer calls, rooms, signaling, or recording.

## Run locally

Prerequisites: Node.js, npm, a browser with camera access, and an available webcam.

```bash
git clone https://github.com/Gullu3442/meetup.git
cd meetup
npm install express
node server.js
```

Visit **http://localhost:8080** and allow camera access when prompted.

> The browser camera API requires a secure context. `localhost` works for local development; a deployed version should use HTTPS.

## How it works

- `server.js` starts an Express server on port 8080 and serves the webpage and static client assets.
- `index.html` contains the video preview and an accessible camera status message.
- `public/index.js` requests video permission with `navigator.mediaDevices.getUserMedia()`, displays the stream, and reports browser or permission failures.
- Audio capture is disabled; the video preview is muted.

## Possible next steps

- Add a clear retry button after camera permission failures.
- Add webcam device selection.
- Introduce a signaling server and WebRTC peer connections to support actual calls.
- Add automated browser testing.

This project is a learning prototype and may need further modernization before production use.
