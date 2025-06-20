let i = 1
setInterval(()=>{
    if(i>5){
        i = 1
    }
        if(i<=5){
            console.log(i)
            i++
        }
},2000)
setInterval(()=>{
    for(let i = 1;i<6;i++){
        console.log(i)
    }
},1000)