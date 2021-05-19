import React from 'react'
import {
  makeStyles,
  GridList, GridListTile, Grid,
  Card, CardMedia, CardContent, CardActions,
  Typography, IconButton, Divider
} from '@material-ui/core'
import { ShoppingCart, AddShoppingCart} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  gridList: {
    width: 920,
    height: 420,

  },
  card: {
    maxWidth: 200
  },
  media: {
    height: '23vh',
    width: '180px'
  }
}))

export default function ProductCategory({ data }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <span style={{borderBottom: '2px solid #4054B5', width: 100, marginLeft: 60, marginBottom: 5}}>
        <Typography variant="h4" disableSpacing
        style={{marginBottom: 10, lineHeight: 1}}
        >All Products</Typography>
      </span>
      <Grid container justify="center">
        <Grid container item lg={12} style={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems: "start", border: '2px solid #4054B5', padding: 10}}>
        {
            data?.map(product => (

              <Card className={classes.card}
              key={product.id}
              style={{margin: 10}}
              >

                    <div
                    // style={{display: 'flex', alignItems: 'center'}}
                    >
                      <CardMedia
                      className={classes.media}
                      component="img"
                      image={product.imageUrl}
                      title="baju"
                      />
                      <CardContent disableSpacing style={{padding: 0}}>
                        <Typography gutterBottom variant="subtitle1" component="h2">
                          {product.name}
                        </Typography>
                      </CardContent>
                      <Divider />
                      <CardActions disableSpacing style={{padding: 0}}>
                        <IconButton>
                          <AddShoppingCart />
                        </IconButton>
                      </CardActions>
                    </div>
                  </Card>
            ))
          }
        </Grid>
      </Grid>
    </div>
  )
}