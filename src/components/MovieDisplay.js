const movieDisplay = ({movie}) => {
    return (
        movie.Title ?
    <>
    <h1> {movie.Title}</h1>
    <h2>{movie.Genre}</h2>
    <img src={movie.Poster}/>
    <h2>{movie.Year}</h2>
    <p>{movie.Ratings[1].Source}: {movie.Ratings[1].Value}</p>

    </>
    :
    <h1> submit the form to find movie information </h1>
  )
}

export default movieDisplay