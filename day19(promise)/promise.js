
var pro=new Promise((resolve,reject)=>{
    let lotnum=1;
    let prizenum=Math.floor(Math.random()*10);
    if(lotnum==prizenum){
        resolve("you won the lottery"); //onFulfilment
    }
    else{
        reject("Better luck next time"); //onRejection
    }
})
pro.then(msg=>console.log(msg)).catch(err=>console.log(err));



// pro.then(msg=>console.log(msg))  ----result value from resolve()

// catch(err=>console.log(err)); ---result value from reject()



