document.addEventListener('launchCloudMusic', function (event, param) {
  console.log('启动网易云音乐，携带数据: ' + JSON.stringify(event.detail));
  chrome.runtime.sendMessage({ type: "launch", message: event.detail }, function (response) {
    console.log(response)
  });
}, false);