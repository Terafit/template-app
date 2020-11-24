//Подрубаем электрон с этими параметрами
const { app, BrowserWindow } = require('electron');

//Функция создания окна
function createWindow() {
    //Объект параметров окна
    const win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        //По моему это на счёт того можно ли юзать node в проэкте
        webPreferences: {
            nodeIntegration: true
        }
    })

    //Подгружаем файл
    win.loadFile('screen/index.html')
    //win.webContents.openDevTools()
}

//Запуск пронграммы функцией app.whenReady() и передаём then(createWindow) - наши параметры окна
app.whenReady().then(createWindow)

//Эта штука для того чтобы приложение при закрытии выключалось, а не сворачивалось(По моему это только на Mac) Не основная штука в приложении
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})