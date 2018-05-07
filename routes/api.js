const express = require('express');
const router = express.Router();
// respond with "hello world" when a GET request is made to the homepage
// JSON Array Static Data
global.record = [
{
	id:1,
	name:'Jeremiah Salonga',
	email:'fielsalonga@gmail.com'

},
{
	id:2,
	name:'Shaya Domingo',
	email:'khrysshiadomingo@gmail.com'

}
];

router.get('/humans', function (req, res) {
  return res.json({
  	humanrecords:global.record,
  	error:false
  });
})

router.get('/human/:id', function (req, res) {
  res.send(global.record[req.params.id])
})

router.post('/human', function (req, res) {
	res.send({name:req.params.name,email:req.params.email})
	if(!req.body.name){
	return res.json({
  	message:'Username is null!',
  	error:true
  });
	}
  //Push the data to the JSON array global.record
  global.record.push(req.body)
  return res.json({
  	message:'Hi new user!',
  	error:false
  });
});

router.put('/human/:id', function (req, res) {
for(let i=0; i < global.record.length; i++)
{
	if(global.record[i].id == parseInt(req.params.id,10))
	{
		global.record[i].name = req.body.name;
		global.record[i].email = req.body.email;
		return res.json({
		user: global.record[i].name,
	  	message:'Updated!',
	  	error:false
	  });
	}
}
return res.json({
  	message:'User not found!',
  	error:true
  });
});
//Return router
module.exports = router;