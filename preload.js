const {ipcRenderer, contextBridge} = require('electron')

contextBridge.exposeInMainWorld('api',{
    title:"My notes app",
    createNote:(data)=>ipcRenderer.invoke('create-file',data)
})