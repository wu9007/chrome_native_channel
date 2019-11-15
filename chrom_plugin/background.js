var port = null;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type == "launch") {
    connectToNativeHost(request.message);
  }
  return true;
});

//onNativeDisconnect
function onDisconnected() {
  port = null;
}

function onNativeMessage(message) {}

//connect to native host and get the communicatetion port
function connectToNativeHost(msg) {
  var hostName = msg.hostName,
    data = msg.data;
  port = chrome.runtime.connectNative(hostName);
  port.onMessage.addListener(onNativeMessage);
  port.postMessage(data);
  alert("传输数据");
  port.onDisconnect.addListener(onDisconnected);
}
