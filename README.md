## Mini project for article posting system ##

### Introduction ###
This is a mini website project for posting and commenting article under the MERN stack web development stack.  

### Setup ###
- run ```npm start``` for both client and server side to start the app

### Test & Explore ###

The following steps would be done well during the first demonstration:
  1. Go to ```http://localhost:3000/``` in the Google Chrome to explore the blog interface.
  2. Create an article in the right hand side and fill all content as full as possible.
  3. Click submit to post the article.
  4. Refresh the page to view the posted article.

The following testing demonstration would be done well in the Postman for API testing:
  1. Open the Postman and set ```http://localhost:5000/``` as global variable.
  2. Test the GET request:
     - To view all posts in the MongoDB: ```http://localhost:5000/posts```
     - To view a single post with alias creator name: ```http://localhost:5000/posts/:id```
     - To view all users existed in the MongoDB: ```http://localhost:5000/users/```
     - To view all comments existed in the MongoDB: ```http://localhost:5000/comments/```
     - To view single comment related to article and creator: ```http://localhost:5000/comments/:id```
  3. Test the PUT request:
     - Select ```Body``` and ```raw``` with ```JSON``` format to fill the content.
     - To Create a user in ```http://localhost:5000/users```:
     - Add user name in following JSON format:
  
        ```
        {"creator": "<USER_NAME>"}
        ```

     - To Create a post in ```http://localhost:5000/posts```:
     - Add post content in following JSON format:
        ```
        {
            "title": "<TITLE>",
            "message": "<MESSAGE>",
            "creator": "<User._id>"
        }
        ```
        Note: please GET the user_id before POST the article.
             - To Create a user in ```http://localhost:5000/users```:

     - To Create a comment in ```http://localhost:5000/comments```:
     - Add comment content in following JSON format:
        ```
        {
            "comment": "<TITLE>",
            "article": "<Post._id>",
            "author": "<User._id>"
        }
        ```
        Note: please GET the user_id and post_id before POST the comment.
    
4. Test the DELETE request:
    - To ```DELETE``` a post by ID in  ```http://localhost:5000/posts/:id```
  
### Future work ###
1. Complete all CRUD functions for users and comments.
2. Add interface for commenting and user registration in the webpage.
3. Add front end interface for applying API functions.
