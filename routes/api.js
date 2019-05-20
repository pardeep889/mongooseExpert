const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Profile = require('../models/Profile');

// Find by parameters like: http://localhost:3000/api/profile?firstName=Denarias
router.get('/profile', (req,res) => {
	let filter = req.query;
	if(req.query.age != null){
		filter = {
			age: {$gt: req.query.age}
		}
	}
	Profile.find(filter).then(profiles => {
		res.json({
			confirmation: 'success',
			data: profiles
		})
	}).catch(err => {
		res.json({
			confirmation: 'fails',
			data: err.message
		})
	})	
});
// find by id
router.get('/profile/:id', (req,res) => {
	const id = req.params.id;
	Profile.findById(id).then(profile => {
		res.json({
			confirmation: 'success',
			data: profile
		})
	}).catch(err => {
		res.json({
			confirmation: 'fails',
			data: 'Profile id :-> '+id+ ' not found!'
		})
	})	
});
// Adding Data
router.post('/profile', (req,res) => {
	res.json({
		confirmation: 'success',
		data: req.body
	})
});


module.exports = router;
