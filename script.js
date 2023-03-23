const volumeslider=document.querySelector('#volume');

const whitekeys=document.querySelectorAll('.keys-white');
const blackkeys=document.querySelectorAll('.keys-black');

const whitekeysArray= Array.from(whitekeys);
const blackkeysArray= Array.from(blackkeys);

whitekeysArray.forEach((element)=>{
    const audio =new Audio(`tunes/${element.id}.wav`);
    element.addEventListener('click',()=>{
        audio.volume=volumeslider.value/100;
        audio.play();
    })
})

blackkeysArray.forEach((element)=>{
    const audio =new Audio(`tunes/${element.id}.wav`);
    element.addEventListener('click',()=>{
        audio.volume=volumeslider.value/100;
        audio.play();
    })
})

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)a

    whitekeysArray.forEach((element)=>{
        if(element.id==e.key){
            element.click();
            element.classList.add('active-white');
            setTimeout(()=>{
                element.classList.remove('active-white'); 
            },150)
        }
    })
    blackkeysArray.forEach((element)=>{
        if(element.id==e.key){
            element.click();
            element.classList.add('active-black');
            setTimeout(()=>{
                element.classList.remove('active-black'); 
            },150)
        }
    })
})
