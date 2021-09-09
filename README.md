# Cats in the Sky

## Submission Instructions
Welcome to WDB's backend project for development branch applicants 👋

Make sure you read these instructions carefully before your start. If you have any questions
please reach out to [our email](webatberkeley@gmail.com).

To submit your project, please place your submission into a GitHub repo that is set to private. You
will be submitting your code on [Gradescope](https://www.gradescope.com/). If you do not have a 
Gradescope account, please create one and if you are unable to create one, please email us
immediately. The Gradescope course code is `+++++++`. You will see two different assignments: 
`Frontend Technical Project` and `Backend Technical Project`. _Please only submit to Backend
Technical Project._ You can ignore Frontend Technical Project.

The technical project will be due at +++++++. We will be unable to respond to clarification emails sent in after +++++++, so if you have any questions about the project, please let us know before then. 


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

### Adding A Cat or a Vege (`POST`)

For adding a recipe, we chatted with the Stanfurd student and they had this to say:

```
wait you want to ADD a new Fruitniture?

bro wtf i cant even return fuirnitures correctly

your on youre own dude
```

Sadly, Stanfurd CS (and grammar for that matter) has failed them and we have to take it 
upon ourselves to host the data. In addition to queuing data from the endpoint that the Stanfurd
student provided _we will need to host additional data on our own servers to create a hybrid
data model_. Whenever a new fruit, a new furniture, or a new Fruitniture is posted to our API, _store this new data in a database
of your choice_ rather than attempting to edit the Stanfurd database. 

For the hybrid data model that you will be creating, remember that the user can choose to add a fruit, a furniture, or a combination of fruitniture. 
This means that if a new fruit is added, say blackberry. When using the "GET" endpoint, any furniture that starts with "b" provided by the Stanford API needs
to also join the newly added blackberry as well. This is the same for any newly added furniture. 

For fruitniture, both the fruit and the furniture need to be able to join with any other existing fruit and furniture as well!

### Deleting a Fruit or Furniture (`DELETE`)

Finally, for the last piece of this delicious pie, we need to delete data from our hybrid
database model. For the third and final time, we chatted with our favorite Stanfurd student
about how they would approach this:

```
omg i told you already i cant even add fruits

and now you want me to delete them????
```

Thank you Stanfurd very cool. Consulting with Fry-Kea instead, you both agree that there
are too many recipes to migrate from the Stanfurd database given the project deadline and
opt instead to keeping this hybrid model to the very end. Thus you come up with the following
scheme:

- If a record from the internal database needs to be deleted, just delete it.
- If a record from the Stanfurd database needs to be deleted, _keep track of these records
and do not return them in the get request._
- If a record will be added and the recipe matches a deleted entry in the Stanfurd database,
_untrack this record and begin returning them again in the get request._

## Assumptions

There are many details that are left intentionally vague. Though you are very much welcome to
email us to ask for clarifications, we will most likely tell you to use your best judgement.
Because of this, we have provided a file called `assumptions.md` where you can type out and
voice any assumptions you made throughout this project. We also _highly_ encourage you to
write out your own documentation to this API and provide us a glimpse of your rationale
behind every design decision.
