run project (run both backend and frontend concurrently), use : npm run dev

run server, use : npm run server, under backend folder.

run client, use : npm start, under frontend folder.


note: you have to do npm install --legacy-peer-deps if haven't do so. and have your .env file created under backend folder. 

why --legacy-peer-deps? there's issue between dependencies of:
    "multer": "^1.4.5-lts.1",

    "multer-gridfs-storage": "^5.0.2",

there's a issue page and PR to solve it, but currently issue is there: 

github link: https://github.com/devconcept/multer-gridfs-storage/issues/490

### .env file
in order to store sensitive informations, we've decided to not upload this file to github, you have to create one file named ".env" under backend folder, and paste the content inside discord resources channel to it. 

mongo uri is used to connect to database, and jwt key is used to salted hash the password. the client id is used for Paypal payment

### about database: 

if you want to see data in mongodb, I'm using MongoCompass that's downloaded to desktop, use this url to paste into it once downloaded and opened:
(whole correct url is inside resources channel inside discord, replace it with that)
mongodb+srv://(username):(password)@amor.f6fwapf.mongodb.net/Amor

use Amor as our only database


### seeder
Use seeder to import and destroy data to the database

- Create the yourdata.js file under data folder in the backend
- Import yourdata.js file and related yourdataModel.js file in the seeder.js
- Under importData() add:
    - await yourdataModel.deleteMany(); // clear all data first before import
    - await yourdataModel.insertMany();
    - you can write more code for maping the data and adding a ref to them, just like I did,
    - you can also choose not await yourdataModel.deleteMany() if your want to always keep it, but if run destroy, those will be deleted 
- Under destroyData() add:
    - await yourdataModel.deleteMany(); // clear all data
- In the terminal:
    - node seeder -i // importData
    - node seeder -d // destroyData  

<!---
## test apis

an easy way to test the api is just to go to url:
i.e. localhost:3001/api/posts/

a better way to do it is using postman, select get method, go to url: localhost:3001/api/posts/. or select post method, go to url: localhost:3001/api/providers

but test results depends on the .env file, make sure your env file contains the correct database url, and the correct token.
-->

## Write your api description here

### /api/providers

-> purpose: you can get all providers or get a specific provider by id

public GET /api/providers

public GET /api/providers/:id

public POST /api/providers

-> purpose: create/signup provider's account

open postman, select POST method, paste url below to postman's url:

localhost:3001/api/providers 

and with raw json body like:
{
    name: '1',
    title: 'Nail Technician',
    address: '2',
    city: '3',
    state: '4',
    country: '5',
    email: '6@gmail.com',
    phone: "7",
    password: "8",
    imageFilename: "9.jpg",
    individual: "no",
    totalRating: 50, 
    ratingPopulation: 10,
    isAdmin: false,
}

### /api/providers/login
purpose: sign in provider's account and gain a new token

open postman, select POST method, paste url below to postman's url:

localhost:3001/api/providers/login

and with raw json body like:
{
    email: '6@gmail.com',
    password: "8"
}


### /api/posts
purpose: post and get posts maded from providers

open postman, paste url below to postman's url:

localhost:3001/api/posts

- GETTING POSTS: 

for getting posts, need nothing for json body, and no need for token, just select GET method and click send, should return all existed posts inside database. 

- POSTING POST: 

for posting post, you need token from service provider. 

It is provided by either create method or you can use the login function mentioned above to get a new one. (if token has not expired, all old and new tokens should work. Right now token is set to be 30 days expiration)

go to Authentication in postman, select Bearer Token, and paste that token inside, select post method and paste content inside raw json body: 

{
"postText": "some content here"
}

and click send, if postman respond with post details then it works.

## /api/posts/(post id)

open postman, paste url below to postman's url:

localhost:3001/api/posts/(post id)

- DELETE POST
select delete method, 

go to Authentication in postman, select Bearer Token, and paste provider's token inside. 
paste the post's id to the url (id can be gained by GET method mentioned above, note that if provider is not the one posted, then modification of the post would failed). 

click send, if postman respond with just a line of id:(post id), then it works. 

- UPDATE POST
localhost:3001/api/posts/(post id)

the setup steps are same as delete post, it's just you have to provide the new data you want to update for post inside raw json body: 

{
"postText": "some content here"
}

## review api
tmp

## customer api
tmp

## calendar api
tmp

## file (image) api
tmp

## order api
tmp


### allen's note: 
I'm using a new tutorial in youtube that it actually teaches me how to connect to MongoDDB Atlas(online one), and it's straight working on backend, works pretty well so i'm following it.
link: https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=1&ab_channel=TraversyMedia

First 2 videos are pure backend, last 2 are frontend + deploy + some code connect backend to frontend(4th 45:00)

We're connecting to DB in mongodb cloud storage called Atlas, if anyone want to change it to something else, feel free. 

## not a official github but current structure:
<pre>
NOTE: currently we go 

server.js 
          -> db.js to connect to mongodb

          -> calendarRoute.js -> calendarController.js -> calendarModel.js
          -> customerRoute.js -> customerController.js -> customerModel.js
          -> imageRoute.js
          -> orderRoute.js -> orderController.js -> orderModel.js
          -> postRoute.js -> postController.js -> postModel.js
          -> providerRoute.js -> providerController.js -> providerModel.js
          -> reviewRoute.js -> reviewController.js -> reviewModel.js

          -> seeder.js -> data -> (files that are having sample data, insert by using seeder.js)

          -> authMiddleware.js (authenticate provider)
          -> errorMiddleware.js (handle error)
          -> upload.js (use for create bucket of gridFS)



          -> errorMiddleware.js to handle showing error

</pre>