const {app,BrowserWindow,ipcMain}=require('electron')
const fs=require('fs')
const path=require('path')
const createWindow=()=>{
    const win=new BrowserWindow({
        width:600,
        height:400,
        webPreferences:{
            preload:path.join(__dirname,'preload.js')
        }
    });
    ipcMain.handle('create-file',(req,data)=>{
        if(!data||!data.title||!data.content)return false
        const filePath=path.join(__dirname,'notes',`${data.title}.txt`)
         fs.writeFileSync(filePath,data.content)
         return {path:filePath}
    })
    win.loadFile('src/index.html')
}
app.whenReady().then(createWindow)
app.on('window-all-closed',()=>{
    if(process.platform!='darwin'){
        app.quit()
    }
})