# Making Sense code Challenge

# Description

On this project you will find different implementations. I want to show how flexible I am when working on projects.

I use stateless and components, classes defined in JS (based on Material UI documentation) and also sass.

# Star Wars API

For some reason I wasn't able to make the marvel developers api work so I change to star wars API (I'm a big fan)

# Id Generation

Star wars API doesn't return an Id so I have to build it using index and current page. Other funny thing about this API is that for some reason from charapter 16 goes to charapter 18, there is no charapter 17 so I have to add an extra logic for that. So when building the ids I do the following.
```
  let id = (index + 1) + (currentPage - 1) * 10;
  if (id > 16) {
    id += 1;
  }
```

# Run the Project

After clone the repo, run `npm install` then copy the `.env.example` file to `.env` then `npm start` and enjoy.
