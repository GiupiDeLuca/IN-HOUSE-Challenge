# IN-HOUSE-Challenge

## Problem 1:

This folder contains two files, `primes.js` and `primesLocal.js`
Both programs achieve the same result, but `primes.js` makes use of the `prompt()` method which is part of the Global `window` object, and it, therefore, only works in a browser. 
That's the reason why I created `primesLocal.js` which can be tested locally. 

### Possible improvements ?
The main problem in this program is that it essentially uses nested loops. Even though the logic is split into small bits, each of the steps involves a loop. 
Time complexity should therefore be *O(n^2)*. 
How to make it faster? 
Some research on the matter has brought me to discover the *Sieve of Eratosthenes*, as a much more efficient method to retrieve the prime numbers between 2 and *n*. 

1) After creating a list of numbers between 2 and *n*, the program will go ahead and assign 2 (the smallest prime number) to a variable *p*.
2) The program will then mark all multiples of *p* in the list from *2p* to *n*. 
3) In the next iteration the same process will be repeated by assigning *p* to the smallest integer greater than the previous *p*. 
4) Step 3 will be repeated until the loop will break, and by the end of it, only the prime numbers will be left unmarked. 

There is an extra level of efficiency that can be added by marking the numbers in each consequent iteration starting at p^2, based on the assumption that the numbers smaller than p^2 would have already been marked in previous iterations. 

Time complexity for this program will be *O(n log log n)*

## Problem 2:

The frontend implementation is simple, I didn't do anything fancy with it, but the logic is there. 

I used React, so in order to run the app, go to the `problem2` folder, run `npm install` then `npm start`. 

### How to display images rather than boxes? 
Based on the design of this app, I think this could be achieved in the following steps. 

The `<div>` in the `Box.js` component will be transformed into an `<img>`. 

In `App.js` then, instead of mapping through the array of boxes created based on the user input, we'll import and use a `useEffect()` hook from react. 

Let's assume the url's we need to use as `src` in our image component can be retrived through an API.

Inside `useEffect()` we'll create a fetch request to retrieve the url's needed to render the images. 
(I'm assuming a simple `GET` request, but if we also created the API, we could possibly customize our queries to our database and retrieve only the number of url's needed, but let's leave this option aside for this scenario).

We'll use `useEffect()` to retrieve the data and `useState()` to update the state of our app to an array containing all the url's we retrieved. 
The user input in the form, `event.target.value`, will determine how many url's we'll use from the url's array to display the images. 

At this point is just a matter of mapping through the url's array and passing each url to the `Box` child component as props, which can then be used in `src`.

The `Box` child component in turn will handle the way the image is displayed. (Maybe each image is a card, that also displays some other info in it).


