/* Sync */
function addSync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[SC] triggering add for ", x , " and ",y)
    var result = addSync(x,y);
    console.log("[SC] result = ", result);
}

/* Async - using callbacks */
function add(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        onResult(result);
    },3000);

}

function addClient(x,y){
    console.log("[SC] triggering add for ", x , " and ",y)
    add(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}


/* Async - using promise */
function add(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            resolve(result);
        },3000);
    });
    return p;
}

function addClient(x,y){
    console.log("[SC] triggering add for ", x , " and ",y)
    add(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}

