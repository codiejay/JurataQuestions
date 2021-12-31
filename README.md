
# ✨ JurataQuestions ✨ 
Hello there, 

This application allows a users to send a question and it returns a answer.

Now let's walk through how to run this application locally and how it is set up. 

## Running locally 💻
1. Fork this project into your Github Repo and clone it locally

2. Or directly clone it into your computer using `git clone https://github.com/codiejay/JurataQuestions.git` 

3. We are running `Yarn` on this project so to install the packages we are using you will have to run `yarn install`

4. Now that you have the project locally you can now run the project on your local machine by running `yarn dev` 

5. 🎉 Yay, the project should now be live on `http://localhost:3000/`. 


## Exploring the folders. 
🧭 Let's explore some of the important folders on the project: 
- `Components` folder: This folder is where we create every reusable component and export them. 
- `Pages` folder: This folder contains two pages by default. `_app.tsx`: This is the root of our project. `index.tsx`: This is the home page of our application and where most of our reusable components will be imported into. 
- `Public` folder: This folder contains our assets. In our case, we have just one- `favicon.ico`
- `Styles` folder: As the name implies, this folder holds our files our styling files like `.scss` file, and our Styled-Component folder like `.jsx` files. 


## Testing the project 🧪 
🤓 Now the fun part.
- When you visit the local homepage (`http://localhost:3000/`) you'll see a Grided layout with a section on the right that prompts you to type in a question, and
then clicking on your `Enter` key or the `Press Enter To Submit` button will initiate the search to the `M3O/Answer` API using the provided question. If the search is successful it returns an answer `String` accompanied by a support `URL`. This data returned is displayed on the left side of the Grid. 

### Caching
-The application also leverages caching to save answers to questions queried. If a user queries the word: "love", an `API` request is initiated using `ApolloClient` and the response returned from the `API` is stored locally on the cache so if later along their journey they query the word "love" again, an API request isn't made, but it is fetched from the cache system and returned to the user and this time it happens faster. 

### URL QUERYING
- A user can ask a question using the `URL` parameters. When a `URL` has the `?` symbol followed by a `=` symbol and then any `Text` it looks like this: `http://localhost:3000/?=love`. The application detects this and sends an `API` call using `ApolloClient` and the data returned is displayed on the screen. 


### Deployment 🚀
The project is powered by NextJS and one of the good platforms to deploy NextJS applications upon is `Vercel` 
you can check out their good work here: [Vercel](https://www.vercel.com)
