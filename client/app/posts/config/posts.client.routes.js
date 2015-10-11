angular.module('posts').config(['$routeProvider', 
	function ($routeProvider) {
		$routeProvider
			.when('/posts', {
				templateUrl: 'app/posts/views/list-posts.client.view.html'
			})
			.when('/posts/create', {
				templateUrl: 'app/posts/views/create-post.client.view.html'
			})
			.when('/posts/:postId', {
				templateUrl: 'app/posts/views/view-post.client.view.html'
			})
			.when('/posts/:postId/edit', {
				templateUrl: 'app/posts/views/edit-post.client.view.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
]);