// var http = require('http');

// var request = http.request({
//   method: 'post',
//   host: 'https://www.ws-ti.4bank.com',
//   path: '/img/create_file',
//   headers: {
//       'Accept' : 'text/html'
//   }
// });

// //form.pipe(request);

// request.on('response', function(res) {

//   console.log(res.statusCode);
// });
// console.log('>>');

const https = require('https')

const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: 'flaviocopes.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.write(data)
req.end();