import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { GridList, Grid, GridListTile, Container, makeStyles,
  Paper, Typography,
  Card, CardActions, CardContent, CardMedia, ListSubheader
} from '@material-ui/core'
import Category from '../components/Category'
import ImageContainer from '../components/ImageContainer'
import LoginModal from '../components/LoginModal'
import fetchProducts from '../store/actions/products'
import ShoppingIllustration from '../assets/online-shopping.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#202932',
    padding: theme.spacing(3),
    maxWidth: 400,
  },
  svgContainer: {
    width: '300px',
    height: '300px'
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
    margin: 20,
    height: 540
  }
}))

export default function Home () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.productsReducer)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  console.log(data)
  return (
    <div>
      <Container>
        <div className={classes.section} style={{marginTop: 100}}>
          
          <Category/>
        </div>
        <div className={classes.section}>
          <ImageContainer data={data} />
        </div>
      </Container>
    </div>
  )
}