const movie =`
  query movie($id: ID!) {
    movie (id: $id) {
      id
      title
      overview
      posterPath
      backdropPath
      originalLanguage
      releaseDate
      runtime
      tagline
      voteAverage
      genres
    }
  }
`

export default movie