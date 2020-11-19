const searchMovies = `
  query searchMovies($query: String) {
    searchMovies (query: $query) {
      id
      title
      posterPath
      backdropPath
    }
  }
`

export default searchMovies