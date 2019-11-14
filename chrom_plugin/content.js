document.addEventListener('launchNative', function (event, param) {
  var channelName = event.detail.channelName;
  console.log(JSON.stringify(channelName));
  chrome.runtime.sendMessage({ type: "launch", message: { hostName: channelMapper[channelName] } }, function (response) {
    console.log(response)
  });
}, false);

var channelMapper = {
  "cloudmusic": "org.leyan95.launchlaunchcloudmusic",
  "printer": "com.shinow.printer"
}