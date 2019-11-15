document.addEventListener(
  "launchNative",
  function(event, param) {
    var channelName = event.detail.channelName,
      data = event.detail.data;
    console.log(channelName);
    console.log(JSON.stringify(data));
    chrome.runtime.sendMessage(
      {
        type: "launch",
        message: { hostName: channelMapper[channelName], data: data }
      },
      function(response) {
        console.log(response);
      }
    );
  },
  false
);

var channelMapper = {
  cloudmusic: "org.leyan95.launchlaunchcloudmusic",
  printer: "com.shinow.printer"
};
