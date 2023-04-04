import './App.scss'
import { Button, Card, Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import api from '../service/api'

interface MovieInformation {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

interface OMDdSearchResult {
    Response: string
    Search: MovieInformation[]
    totalResults: number
}

interface MovieItemProps {
    movie: MovieInformation
}

const MovieItem = (props: MovieItemProps) => {
    const { movie } = props

    return (
        <Grid item>
            <Card>
                <Grid container direction="row">
                    <Grid width={80} item>
                        <img width="100%" src={movie.Poster} alt={`${movie.Title} poster`} />
                    </Grid>
                    <Grid container item direction="column">
                        <Typography>{movie.Title}</Typography>
                        <Typography>{movie.Year}</Typography>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

function App() {

    const [searchTerm, setSearchTerm] = useState<string>()
    const [movies, setMovies] = useState<MovieInformation[]>([])

    const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const handleSearchClick = () => {
        api.get(``, {
            params: {
                s: searchTerm
            }
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
                    <TextField id="outlined-basic" label="Title, Actor, etc..." variant="outlined" onChange={handleSearchTermChange} />
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={handleSearchClick}>Search</Button>
                </Grid>
            </Grid>
            <Grid container item direction="column" spacing={2}>
                {movies.map(movie => {
                    return <MovieItem movie={movie} key={movie.imdbID} />
                })}
            </Grid>
        </Grid >
    )
}

export default App
