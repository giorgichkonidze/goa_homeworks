function guessPassword(){
    let password = 'Group 41 is best';
    let count = 3;
    while(count !== 0){
        let answer = prompt('Enter Password:');
        if(answer === password){
            alert('თქვენი შეყვანილი პაროლი სწორია');
            count = 0;
        }else{
            count--;
        }
        if(count === 0){
            alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
        };
    };
};

guessPassword();