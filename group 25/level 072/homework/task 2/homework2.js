let temperature = parseFloat(prompt("შეიყვანეთ ტემპერატურა ცელსიუსში:"));
    
if (temperature < 0) {
    alert("ტემპერატურა არის ცივი");
} else if (temperature >= 0) {
    alert("ტემპერატურა არის ზომიერი");
} else if (temperature <= 30) {
    alert("ტემპერატურა არის ზომიერი")
} else {
    alert("ტემპერატურა არის ცხელი");
}