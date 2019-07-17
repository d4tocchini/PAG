const APP_NAME = "P・A・G"

require('./config.js')

const e = require('electron')
const { app, BrowserWindow } = e

app.setName(APP_NAME)

app.once('ready', function() {
    const {screen} = e
    const display = screen.getPrimaryDisplay()
    const {x,y,width,height} = display.bounds

    let win = new BrowserWindow({
        show: false,
        title: APP_NAME,
        width: (width * 8 / 9)|0,
        height:(height * 8 / 9)|0,
        center: true,

        darkTheme: true,
        // transparent: true,
        // backgroundColor: "#00000000", // if transparent #AARRGGBB
        frame: true,
        // vibrancy: "ultra-dark",
        titleBarStyle: "hiddenInset", //"customButtonsOnHover", // "hidden",// "default"

        webPreferences: {
            // additionalArguments String - A list of strings that will be appended to process.argv
            devTools: true,
            nodeIntegration: true, nodeIntegrationInWorker: true, nodeIntegrationInSubFrames: false,
            enableRemoteModule: true,

            webSecurity: false,
            allowRunningInsecureContent: true,

            // nativeWindowOpen Child windows will always have node integration disabled

            experimentalFeatures: true,
            // enableBlinkFeatures: true,
            // preload:
            backgroundThrottling: true,
            navigateOnDragDrop: false,
            autoplayPolicy: "no-user-gesture-required",

            scrollBounce: true,
            defaultFontFamily: {
                standard: "Times New Roman",
                serif: "Times New Roman",
                sansSerif: "Arial",
                monospace: "Courier New",
                cursive: "Script",
                fantasy: "Impact"
            },
            defaultFontSize: 20, //16
            defaultMonospaceFontSize: 16, //13


        }
    })
    win.once('ready-to-show', function(){
        win.show()
    })
    win.loadFile("web/index.html")
})
