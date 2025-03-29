const mixedArray = [
    42,                     
    "Hello",               
    true,                   
    null,                    
    undefined,              
    { name: "Alice" },       
    [1, 2, 3],              
    Symbol("sym"),           
    BigInt(234442334234), 
    function() { console.log("Hi!"); } 
  ]
  
  console.log(mixedArray[0])
  console.log(mixedArray[1])
  console.log(mixedArray[2])
  console.log(mixedArray[5].name)
  console.log(mixedArray[9]())
  
  
  mixedArray[3] = false     
  mixedArray[4] = "undefined" 
  mixedArray[6] = [0, 6, 9]  
  mixedArray[7] = Symbol("newwsymboll") 
  mixedArray[8] = BigInt(3231238133321)
  
  console.log(mixedArray);
  