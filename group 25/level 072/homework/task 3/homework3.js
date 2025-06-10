let score = Number(prompt("შეიყვანეთ ქულა 0 დან 100 მდე"));
    
if (score >= 90 && score <= 100) {
    alert("შეფასება A");
} else if (score >= 80 && score < 90) {
    alert("შეფასება B");
} else if (score >= 70 && score < 80) {
    alert("შეფასება C");
} else if (score >= 60 && score < 70) {
    alert("შეფასება D");
} else {
    alert("შეფასება F");
}