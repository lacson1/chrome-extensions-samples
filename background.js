chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'window.transcribeAudioVideo();'
  });
});

window.transcribeAudioVideo = function() {
  // Transcribe audio/video code goes here
}
