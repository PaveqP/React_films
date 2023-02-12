import {Movie} from './Movie'

function Movies(props) {
    const {movies = []} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie} />
        )) : <h3>Nothing content with this filters</h3>}
    </div>
}

export {Movies}