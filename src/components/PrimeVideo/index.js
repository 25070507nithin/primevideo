// Write your code here
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div>
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
