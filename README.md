# Cats in the Sky

## Submission Instructions
Welcome to WDB's backend project for development branch applicants 👋

Make sure you read these instructions carefully before your start. If you have any questions
please reach out to [our email](webatberkeley@gmail.com).

To submit your project, please place your submission into a GitHub repo that is set to private. You
will be submitting your code on [Gradescope](https://www.gradescope.com/). If you do not have a 
Gradescope account, please create one and if you are unable to create one, please email us
immediately. The Gradescope course code is `YV5D4N`. You will see two different assignments: 
`Frontend Technical Project` and `Backend Technical Project`. _Please only submit to Backend
Technical Project._ You can ignore Frontend Technical Project.

The technical project will be due at this Saturday (Sep. 11th) at midnight. We will be unable to respond to clarification emails sent in after then. so if you have any questions about the project, please let us know before then. 


## Introduction

A company called Cats in the Sky, a cat foster home in an airplane, has just launched their services. However, the cats are refusing to stay on the airplane because they are all hungry. Cats in the Sky has tasked us to create some delicious recipes for their cats to fill their bellies & to make them happy again!

As a backend engineer, you need to create a backend service that helps match cats to their favourite vegetable. Each cat has a distinct name, and they only eat vegetable that has the same first letter. For instance, a cat named "Samarth" would only eat "Spinach" and "Squash" but not "Onion".

Here's another example of how to match a list of cats to a list of vegetable:

```
cats = ["Alex", "Abhi", "Samarth"]
veges = ["Artichoke", "Asparagus", "Onion", "Green Beans", "Squash"]

Matchings = {
  "Alex": ["Artichoke", "Asparagus"],
  "Abhi": ["Artichoke", "Asparagus"],
  "Samarth": ["Squash"],
}

```

## API Doc

To summarize, Cats in the Sky is tasking us with building an API that can do three things:
1) Return a list of matchings combining names of the cats & their favorite veges. 
2) Add a cat name / vege to the database.
3) Remove a cat name / vege from the database.

In the language of your choice, implement Fry-Kea' API! Here are more technical details to help
you with your implementation:

### Returning Every Recipe (`GET`)

The Cats in the Sky Company already keeps a list of cats and veges in their server. You can access them via sending GET request to these APIs:

1. http://cats-in-the-sky.herokuapp.com/api/cats
2. http://cats-in-the-sky.herokuapp.com/api/veges


The "cats" endpoint returns a list of cats, and the "veges" endpoint returns a list of veges. 
The Cats in the Sky Company requires you to return a **dictionary of matching** instead! which means that you need to 
join the two lists by combining cats & veges that *share the same first character*.

Here's the example again:

```
cats = ["Alex", "Abhi", "Samarth"]
veges = ["Artichoke", "Asparagus", "Onion", "Green Beans", "Squash"]

Matchings = {
  "Alex": ["Artichoke", "Asparagus"],
  "Abhi": ["Artichoke", "Asparagus"],
  "Samarth": ["Squash"],
}

```

*Corner Case*: 
1. if a cat does not have any favorite veges, please return the cat with an empty list. `{"Bob": []}`

### Adding A Cat or a Vege (`POST`)

Besides the list of cats & veges that they already have, the Cats in the Sky Company also wants to be able to add new cat / new vege easily. However, it turns out they don't have any space to store any data at all! We need to create a database for them and store all the cat / vege that they want to add.

This should be a POST endpoint that allow the users to add new cat / new vege by including the information in the post body.
For instance, if the user wants to add a cat called "Alice", they need to send a POST request with the following body:
```
{
  "cat": "Alice",
}
```

Similarly, if the user wants to add a vege, they need to send a POST request with a body containing `"vege": "name of vege"` as well.

Once the user sends a POST request, the data should be stored in a database. In the future, if the user call the "GET" endpoint again, we need to take the newly added data into account as well.

For instance:
if we have:
```
cats = ["Alex", "Abhi", "Samarth"]
veges = ["Artichoke", "Asparagus", "Onion", "Green Beans", "Squash"]
```
returned from the APIs, and the user decides to add a cat named "Oliver", then if the user send a GET request again, they should receive:

```
Matchings = {
  "Alex": ["Artichoke", "Asparagus"],
  "Abhi": ["Artichoke", "Asparagus"],
  "Samarth": ["Squash"],
  "Oliver": ["Onion"]
}
```

### Deleting a Vege (`DELETE`)

The Cats in the Sky Company also asks us to come up with a way to delete any vege in case any cat has some hidden alergies. To delete a vege, similarly to adding a cat / vege, the user needs to send a DELETE request, with body containing the name of the vege like this: 
```
{
  "vege": ["Orange"]
}
```

There are two different cases for DELETE:
1. If the vege is one of the veges returned by the vege API, track it inside the database, and make sure that when calling `GET`, that vege will not be considered during the matching process.
2. If the vege is not one of the veges returned by the vege API, simply remove it from the database.

Here's a example of the first case:
```
# Returned by API
cats = ["Alex", "Abhi", "Samarth"]
veges = ["Artichoke", "Asparagus", "Green Beans", "Squash"]

# First Get
Matchings = {
  "Alex": ["Artichoke", "Asparagus"],
  "Abhi": ["Artichoke", "Asparagus"],
  "Samarth": ["Squash"],
}

# Send the DELETE request
DELETE: {
  "vege": "Squash"
}

# GET after DELETE
Matchings = {
  "Alex": ["Artichoke", "Asparagus"],
  "Abhi": ["Artichoke", "Asparagus"],
}
```

## Optional: Authentication

*This is an extra credit question. Please prioritize solving the other questions before attempting this question.*

Some evil customers are trying to delete our cats by sending DELETE request to our server! Stop them from doing that by building a user authentication system. The system should support the following functionality:
1. Sign Up: the user should be able to sign up via a POST request, containing the {"username": "name","pwd": "password"} request body.
2. Sign In: the user should be able to sign in via a POST request, containing the {"username": "name","pwd": "password"} request body.
3. The DELETE route can only be accessed if the user is signed in.

_Hint: Access Token_

## Assumptions

There are many details that are left intentionally vague. Though you are very much welcome to
email us to ask for clarifications, we will most likely tell you to use your best judgement.
Because of this, feel free to create a `assumptions.md`, where you can type out and
voice any assumptions you made throughout this project. We also _highly_ encourage you to
write out your own documentation to this API and provide us a glimpse of your rationale
behind every design decision.
