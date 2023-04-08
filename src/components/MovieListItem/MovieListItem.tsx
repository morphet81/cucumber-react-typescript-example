import { Card, Grid, Typography } from '@mui/material'

import styles from './MovieListItem.module.scss'

interface MovieItemProps {
    movie: MovieInformation
}

const MovieListItem = (props: MovieItemProps) => {
    const { movie } = props

    return (
        <Grid className={styles.movieItem} item>
            <Card>
                <Grid container direction="row">
                    <Grid className={styles.poster} item>
                        <img src={movie.Poster} alt={`${movie.Title} poster`} />
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

export default MovieListItem