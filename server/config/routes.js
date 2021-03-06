module.exports = function(app) {
  	var users = require('../controllers/users.js');
  	// app.post('/users/fetch', function(request, response){console.log("This is request.body: ", request.body)});
	app

	// - - - User Api Request - - -
	.post('/users/fetch', function(request, response) {
		users.fetch(request, response)
	})

    	// Index
	.get('/users', function(request, response) { users.index(request, response) })
	// New
	.get('/users/new', function(request, response) { users.create(request, response) })
	// Show
	.get('/users/:id', function(request, response) { users.show(request, response) })
	// Edit
	.post('/users/:id/edit', function(request, response) { users.update(request, response) })
	// Create
	.post('/users', function(request, response) { users.create(request, response) })
	// Destroy
	.delete('/users/:id', function(request, response) { users.destroy(request, response) })
	// Update
	.put('/users/:id', function(request, response) { users.update(request, response) })
};

