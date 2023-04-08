import './App.module.scss'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import api from '../../service/api'
import MovieListItem from '../MovieListItem/MovieListItem'

interface OMDdSearchResult {
    Response: string
    Search: MovieInformation[]
    totalResults: number
}

function App() {

    const [searchTerm, setSearchTerm] = useState<string>()
    const [movies, setMovies] = useState<MovieInformation[]>([])

    const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const handleSearchClick = () => {
        searchForMovies()
    }

    const handleSearchOnKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case `Enter`:
                searchForMovies()
                break
        }
    }

    const searchForMovies = () => {
        api.get(``, {
            params: {
                s: searchTerm,
            },
        })
            .then((response) => response.data)
            .then((result: OMDdSearchResult) => {
                return result.Search
            })
            .then(setMovies)
    }

    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Typography variant='h1'>Movie App</Typography>
            </Grid>

            <Grid container item direction="row" alignItems="center" spacing={2}>
                <Grid item>
                    <TextField id="outlined-basic" label="Title, Actor, etc..." variant="outlined" onChange={handleSearchTermChange} onKeyDown={handleSearchOnKeyDown} />
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={handleSearchClick}>Search</Button>
                </Grid>
            </Grid>

            <Grid container item direction="column" spacing={2}>
                {movies.map(movie => {
                    return <MovieListItem movie={movie} key={movie.imdbID} />
                })}
            </Grid>
        </Grid >
    )
}

export default App
