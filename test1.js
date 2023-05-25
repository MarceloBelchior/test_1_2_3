

function testei() {

  //foreach responsable for print numbers from 1 to 100
  for (let index = 1; index <= 100; index++){
    if (index % 3 == 0 && index % 5 == 0)
    { 
    
      console.log('FizzBuzz');
      
    }  
    if (index % 3 == 0 && index % 5 !== 0 ) {
      console.log('Fizz');
    } else if (index % 5 == 0 && index % 3 !== 0 ) {
      console.log('Buzz');
    } else if (index % 5 !== 0 && index % 3 !== 0 ) 
          console.log(index);
   
  }
}

  
