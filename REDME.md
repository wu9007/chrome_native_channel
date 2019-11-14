### Please modify these paths yourself

- install.reg
```shell
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\org.leyan95.launchlaunchcloudmusic]
@="F:\\chrom_native_channel\\register\\cloudmusic\\nativecall.json"  // Your `nativecall.json` path
```

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