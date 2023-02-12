import React from 'react';
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

    const [movies, setMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    
    const searchFunc = (name, type ='all') => {
        setLoading(true);

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${name}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setMovies(data.Search);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }

    React.useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.Search);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        })
    }, []) 

        return <main className="container content">
            <Search movieName={searchFunc}/>
            { 
                loading ? <Preloader/> : (<Movies movies={movies}/>)
            }
        </main>
    }

export {Main}