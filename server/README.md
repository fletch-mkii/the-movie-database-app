# Getting Started

You'll need to ensure that you have `nodejs` and `yarn` (or `npm`) installed in your environment, and then you should be able to install the relevant packages by running `yarn install`.

There is no persistent storage via a database, so no local database setup is required to get the application working. However, this uses an external API as a data source, so you will need an internet connection.

Next, run `cp .sample.env .env` in your terminal, or simply create a `.env` file and copy the contents of `.sample.env` over yourself.  The variable `TMDB_V3_API_BASE_URL` should already have the correct value of `https://api.themoviedb.org/3/`.  For the environment variable `TMDB_V4_API_KEY` you'll need to setup an account with The Movie Database and follow the steps here `https://developers.themoviedb.org/3/getting-started/introduction` to acquire an API key.  This application uses the V4 API key, so ensure that you select that one and not the V3 key as it has a different implementation pattern and will not work.

After successfully filling out the `.env` file with your API key and installing your packages, you should be able to boot up the server by running `node config/index.js` or the aliased script `yarn start`.  This will run your server up on port 4000 by default, but it can be changed within `config/index.js`.  If changed, ensure that you refer to the readme file for the client side application for instructions on changing its referenced port as well so that they are aligned.

## After the server is running

Once the server is successfully booted up, you should be able to open the graphql playground at `http://localhost:4000` to view it in the browser.  This will allow you to test queries without running the client, as well as simply confirming that the server is running properly.

Below are some sample queries to allow quick testing for each of the four queries that currently exist.  Variables, for the queries that have them, will need to be inserted manually into the `Query Variables` tab, but the query itself can just be pasted into the large query box as-is.

### Get the first page of popular movies (no pagination implemented)
```
query movies {
    movies {
	    id
		title
	}
}
```

### Get a single movie by ID
```
query movie($id: ID!) {
    movie (id: $id) {
        id
        title
    }
}
```
`variables: { "id": 671039 }`


### Search movies with a query string
```
query searchMovies($query: String) {
    searchMovies (query: $query) {
        id
        title
    }
}
```
`variables: { "query": "rogue" }`

### Configuration
```
query configuration {
    configuration {
		baseUrl
		posterSizes
        backdropSizes
	}
}
```
