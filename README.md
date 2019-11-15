# Chrome Native Channel

> 一个向东芝标签打印机发送打印指令的 Chrome 插件。

### 请手动修改以下地址

- nativecall.json
```json
{
    "name": "org.leyan95.launchlaunchcloudmusic",
    "description": "Chrome sent message to native app.",
    "path": "D:\\SysApp\\CloudMusic\\cloudmusic.exe",  // Your target program (Here we take Netease cloud music as an example)
    "type": "stdio",
    "allowed_origins": [
        "chrome-extension://aaghkkhobobningoihfhojdjlccbnnna/"  // Your plugin id
    ]
}
```

#### 使用方式
- 将 `chrome_plugin` 目录作为插件进行安装
- 修改 `com.shinow.printer-win.json`  和 `nativecall.json` 中 `chrome-extension` 后跟的 `ID` 为上一步安装插件的 `ID`
- 执行 `install_host.bat`
- 打开 `index.html` 进行测试

> 