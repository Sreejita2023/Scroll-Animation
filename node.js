const  boxes=document.querySelectorAll('.box')

window.addEventListener('scroll',checkboxes)
checkboxes()
function checkboxes(){
    const triggerbutton=window.innerHeight/ 5 * 4
    console.log(triggerbutton)
    boxes.forEach(box=>{
        const boxtop=box.getBoundingClientRect().top
        
        // console.log(idx)
        if(boxtop<triggerbutton){
            box.classList.add('show')
        }
        else{
            console.log(boxtop) 
            box.classList.remove('show')
        }
    })
}