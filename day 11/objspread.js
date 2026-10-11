function  processArguments(...args){
    if(args.length===0){
        // no arguments passed
        console.log("No arguments provided.")
    }
    else if(args.length===1){
        //single argument passed
        console.log("One argument provided: ",args[0]);

    }
    else{
        // multiple arguments passed
        console.log("Multiple arguments: ",args);
    }
}

processArguments();
processArguments(10);
processArguments('apple','orange','banana');