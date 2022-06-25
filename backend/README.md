to start, inside backend folder, use :npm run server

recommand to read the below content in vscode, since I'm not familiar with github readme currently and how to make it not ignoring stuff and make it show up


### first
I've finished working on server, rightnow, things go a bit complex, so prob a good idea to set the head to commit: "EB 33 add further comments" with the SHA: "c3160a64c41841888f2ad99907468d8ee0c5cf3f", and go with this commit after understand things before.

I'm using a new tutorial in youtube that it actually teaches me how to connect to MongoDDB Atlas(online one) and deploying it to heroku (of course we can use something else, I remember there's cloudflare, digitalocean or something you name it), and it's straight working on backend, works pretty well so i'm following it. 
link: https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=1&ab_channel=TraversyMedia

First 2 videos are pure backend, last 2 are frontend + deploy + some code connect backend to frontend(4th 45:00)

note: right now I'm connected to DB is not the formal one, I'm using this as draft, but we can change it to the EB one pretty fast, just need a few part modifying. and if moonman want or someone else want, you can change it in future to connected to not Atlas one in future, does not matter to me. 

### see data
if you want to see data in mongodb, I'm using MongoCompass that's downloaded to desktop, use this url to paste into it once downloaded and opened: 
(password is in resources in discord, replace it with that)
mongodb+srv://eBeauty:<password>@cluster0.kdlbhej.mongodb.net/databasename

## explanation
It's a bit hard to explain things I've done and it's pretty late right now, so I'll just go briefly. 

currently, I've implement the authorization part with creating schema of provider, and another schema of post that's under provider

### create provider
so what we should do first, is to create a provider in url: localhost:5000/api/providers and with raw json body like: 
{
"name": "1", 
"email": "2", 
"password": "3"
}
(this one already exists so if you input same email it gives error)

## create post
one thing you should see is the token, you'll need it in future, if you want to post a post
go to Authentication in postman, select Bearer Token, and paste that token inside, select post method, and go to url: localhost:5000/api/posts
and haven't test, but body prob is: 
{
"postText": "some content here"
}
and you click send then it sends to database.

## see post (using postman)
Then, if you want to see it/get it. you can select get method, go to url: 
localhost:5000/api/posts
with authentication selected bearer, click send and you can then see the post you've created.

## delete post method
select delete method, have authentication selected, go url: 
localhost:5000/api/posts/<post id>

the post id can be gained by using get method, but to use get method of post, you need to have a provider token first. 

## regain the info from creating provider (this renew the token tho)
=> you can get the id from select post method with url: 
localhost:5000/api/providers/login
and with same input body (use above as example, this one should work)
{
"name": "1", 
"email": "2", 
"password": "3"
}
However, this renewed the token, so remember to re-copy paste the token into authentication page inside postman. (well I haven't try using old token so maybe try it out as well)


## not a official github but current structure:
NOTE: currently we go server.js -> postRoute.js -> postController.js -> postModel.js to send, get messages from database
                                                -> authMiddleware.js
                                -> providerRoute.js -> providerController.js -> providerModel.js to create, login, get provider from database
                                                    -> authMiddleware.js
                                -> db.js to connect to mongodb
                                -> errorMiddleware.js to handle showing error
additional: .env is link that help connect to database for db.js process.env.MONGO_URI, and has the key JWT_SECRET_KEY that salted hash the password.
