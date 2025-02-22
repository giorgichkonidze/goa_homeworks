function oneThirty(){
    for(let i = 0; i < 30; i++){
        if(i % 2 != 0){
            console.log(i);
        };
        if(i != 0 && i % 8 === 0){
            break;
        };
    };
};

oneThirty();