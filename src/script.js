const title_el=document.getElementById('title')
title.innerText=api.title

const noteTitle=document.getElementById('noteTitle')
const noteContent=document.getElementById('noteContent')
const buttonSubmit=document.getElementById('submit')

buttonSubmit.addEventListener('click',async()=>{
    const title=noteTitle.value
    const content=noteContent.value
    const res=await api.createNote({
        title,
        content
    })
    console.log(res)
    noteContent.value=""
    noteTitle.value=""
})