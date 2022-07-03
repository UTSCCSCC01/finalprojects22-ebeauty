### quick start: 
use `npm install` then `npm start` to run react on localhost
http://localhost:3000/
(this is default, when run npm start it would auto open website for you)

### note: npm install would show some vulners. but according to this post, if I do some modification and then use `npm audit --production` instead of `npm audit`, it gives 0 vulner.
the vulner I'm keep getting by just create-react-app is this: Inefficient Regular Expression Complexity in nth-check 
[https://github.com/facebook/create-react-app/issues/11174](https://github.com/facebook/create-react-app/issues/11174)


even so, there are some vulners (3 for now), why? 

it is caused by react-spring package, but I supposed it shouldn't be a problem, since I'm not using Hermes permits evaluation inside the project:

[https://vulners.com/osv/OSV:GHSA-X4CF-6JR3-3QVP](https://vulners.com/osv/OSV:GHSA-X4CF-6JR3-3QVP)