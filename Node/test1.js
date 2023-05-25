const express = require('express');

const app = express();
let result = [];

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/api/getnumber', (req,resp) => { 

  for (let index = 1; index <= 100; index++){
  if (index % 3 == 0 && index % 5 == 0)
  {  
    result.push('FizzBuzz'); 
  }  
  if (index % 3 == 0 && index % 5 !== 0 ) {
    result.push('Fizz');
  } else if (index % 5 == 0 && index % 3 !== 0 ) {
    result.push('Buzz');
  } else if (index % 5 !== 0 && index % 3 !== 0 ) 
  result.push(index);
}
  resp.json(result);

});


app.listen(3002, () => {
  console.log('running');
});
//app.use((err,req,resp,next)) => { 

//}