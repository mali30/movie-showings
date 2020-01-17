import React, { Component } from 'react';
import {getMovies}  from '../services/fakeMovieService'
import {deleteMovie} from '../services/fakeMovieService'
class MovieCollection extends Component {
    constructor() {
        super()

    this.state = { 
        movie: getMovies()
        }
    }

    handleDelete = (movie) => {
        // get movies except the one we dont want
        const filteredMovies = this.state.movie
            .filter(m => m._id !== movie._id)
        this.setState({movie: filteredMovies})
    }

    messageToRender = () => {
        if (this.state.movie.length <= 0) {
            return <h1> No more movies to see!</h1>
        }
    }
    
    render() {

        return (
            <div>

                <p> Showing {this.state.movie.length} movies in the theater</p>
                <p>{this.messageToRender()}</p>
            <table className="table">
                <thead>
                    <tr >
                        <th>Title</th>
                        <th>Genere</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Delete Movie</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movie.map(movie => (
                        <tr key={movie._id}>
                            <td >{movie.title}</td>
                            <td >{movie.genre.name}</td>
                            <td >{movie.numberInStock}</td>
                            <td >{movie.dailyRentalRate}</td>
                            <td><button onClick={ () => this.handleDelete(movie)} type="button" className="btn btn-danger">Danger</button></td>
                    </tr>
                    ))}
                 
                </tbody>
            </table>
            </div>

          );
    }
}
 
export default MovieCollection;