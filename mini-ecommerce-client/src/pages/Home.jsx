import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { GridList, Grid, GridListTile, Container, makeStyles,
  Paper, Typography,
  Card, CardActions, CardContent, CardMedia, ListSubheader
} from '@material-ui/core'
import Category from '../components/Category'
import ImageContainer from '../components/ImageContainer'
import fetchProducts from '../store/actions/products'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#202932',
    padding: theme.spacing(3),
    maxWidth: 400,
  },
  paper: {
    padding: theme.spacing(3, 2)
  },
  card: {
    maxWidth: 200,
    margin: 15
  },
  media: {
    maxHeight: '200px',
    width: 'auto'
  },
  section: {
    margin: 30,
    height: 540
  }
}))

export default function Home () {
  const classes = useStyles()
  const { data } = useSelector(state => state.productsReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  console.log(data)
  return (
    <div>
      <Container>
        <div className={classes.section} style={{marginTop: 100}}>
          <Typography variant="h4" style={{marginBottom: 10}}>Product Categories</Typography>
          <Category/>
        </div>
        <div className={classes.section}>
        <Typography variant="h4">All Products</Typography>
          <ImageContainer data={data} />
        </div>
      </Container>
    </div>
  )
}