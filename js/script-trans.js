navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    const video = document.createElement('video');
    video.srcObject = stream;
    video.play();
    // Append video to the DOM as needed and call screen detection function
  })
  .catch((err) => {
    console.error("Error accessing the camera", err);
  });


  // Load OpenCV.js
<script async src="path_to/opencv.js" onload="onOpenCvReady();"></script>

<script type="text/javascript">
  function onOpenCvReady() {
    cv['onRuntimeInitialized']=()=>{
      console.log('OpenCV.js is ready');
      // Now you can start with your camera processing
    };
  }

  function processVideo() {
    let video = document.getElementById('videoInput'); // your video element
    let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
    let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
    let cap = new cv.VideoCapture(video);
    
    const FPS = 30; // Set your frame rate
    function processFrame() {
      try {
        cap.read(src);
        cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
        // Here you would add the code to detect features and match them
        // ...
      } catch (err) {
        console.error(err);
      }
      setTimeout(processFrame, 1000/FPS); // Schedule the next frame
    }
    setTimeout(processFrame, 0); // Start processing
  }
</script>
