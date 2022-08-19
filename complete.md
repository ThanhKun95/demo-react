<!-- Authentication:

1. POST /api/users/login -->

<!-- Registration:

1. POST /api/users -->

<!-- Get Current User

1. GET /api/user -->

Update User

1. PUT /api/user

Get Personal

1. GET /api/profiles/:username
   Follow user

1. POST /api/profiles/:username/follow
   Unfollow user

1. DELETE /api/profiles/:username/follow

<!-- List Articles

1. GET /api/articles -->

<!-- Filter by tag:

1. ?tag=Angular -->

Filter by author:

1. ?author=jake

Favorited by user:

1. ?favorited=jake

Feed Articles

1. GET /api/articles/feed

Get Article

1. GET /api/articles/:slug

<!-- Create Article

1. POST /api/articles -->

Update Article

1. PUT /api/articles/:slug

Delete Article

1. DELETE /api/articles/:slug

Add Comments to an Article

1. POST /api/articles/:slug/comments

Get Comments from an Article

1. GET /api/articles/:slug/comments

Delete Comment

1. DELETE /api/articles/:slug/comments/:id

Favorite Article

1. POST /api/articles/:slug/favorite

Unfavorite Article

1. DELETE /api/articles/:slug/favorite
 <!-- 
 Get Tags


1. GET /api/tags -->
