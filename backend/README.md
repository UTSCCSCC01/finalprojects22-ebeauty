run project, use : npm run dev

run server, use : npm run server, under backend folder
run client, use : npm start, under frontend folder

### seeder

Use seeder to import and destroy data to the database
use : npm run data:import and npm run data:destroy

### first

I'm still working on server, with this commit, things go a bit complex, so prob a good idea to set the head to last commit, and go with this commit after understand things before.

I'm using a new tutorial in youtube that it actually teaches me how to connect to MongoDDB Atlas(online one), and it's straight working on backend, works pretty well so i'm following it.
link: https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=1&ab_channel=TraversyMedia

I've only done first 2 video in total of 4.

note right now I'm connected to DB is not the formal one, I'm using this as draft, but we can change it to the EB one pretty fast, just need a few part modifying. and if moonman want or someone else want, you can change it in future to connected to not Atlas one in future, does not matter to me.

### see data

if you want to see data in mongodb, I'm using MongoCompass that's downloaded to desktop, use this url to paste into it once downloaded and opened:
(password is in resources in discord, replace it with that)
mongodb+srv://<username>:<password>@amor.f6fwapf.mongodb.net/Amor

use Amor as our only database

## explanation

It's a bit hard to explain things I've done and it's pretty late right now, so I'll just go briefly.

currently, I've implement the authorization part with creating schema of provider, and I've linked it to the "goal" (I should rename it to post and input name from movieId to something else in future, but now things are still in draft)

### create provider

so what we should do first, is to create a provider in url: localhost:5000/api/providers and with raw json body like:
{
"name": "1",
"email": "2",
"password": "3"
}
(this one already exists so if you input same email it gives error)

## create post

one thing you should see is the token, you'll need it in future, if you want to post a new post,
go to Authentication in postman, select Bearer Token, and paste that token inside, select post method, and go to url: localhost:5000/api/posts
and haven't test, but body prob is:
{
"movieId": "some content here"
}
and you click send then it sends to database.

## see post (using postman)

Then, if you want to see it/get it. you can select get method, go to url:
localhost:5000/api/posts
with authentication selected bearer, click send and you can then see the post you've created.

## delete post method, not completed yet

the current delete method is prob not done yet, I suppose it delete all goals but if you want you can try it out,
select delete method, have authentication selected, go url:
localhost:5000/api/posts/<provider id>
(provider id should be in the same place you get token, if you deleted the page, look below)
then send it prob delete all posts

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

## test apis

an easy way to test the api is just to go to url:
i.e. localhost:5000/api/posts/

a better way to do it is using postman, select get method, go to url: localhost:5000/api/posts/. or select post method, go to url: localhost:5000/api/providers

but test results depends on the .env file, make sure your env file contains the correct database url, and the correct token.

## not a official github but current structure:

NOTE: currently we go server.js -> goalRoute.js -> goalController.js -> goalModel.js to send, get messages from database
-> authMiddleware.js
-> providerRoute.js -> providerController.js -> providerModel.js to create, login, get provider from database
-> authMiddleware.js
-> db.js to connect to mongodb
-> errorMiddleware.js to handle showing error
additional: .env is link that help connect to database for db.js process.env.MONGO_URI, and has the key JWT_SECRET_KEY that salted hash the password.
