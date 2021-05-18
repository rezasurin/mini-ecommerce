import React from 'react'
import {
  makeStyles,
  GridList, GridListTile, Grid,
  Card, CardMedia, CardContent,
  Typography
} from '@material-ui/core'

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
    maxWidth: 260,
    margin: 5
  },
  media: {
    maxHeight: '180px',
    width: 'auto'
  }
}))

export default function ProductCategory({ data }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid container item lg={12} style={{flexWrap: 'wrap', justifyContent: 'center'}}>
        {
            data?.map(product => (

              <Card className={classes.card}
              key={product.id}
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
                      <CardContent>
                        <Typography gutterBottom variant="title" component="h2">
                          {product.name}
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
            ))
          }
        </Grid>
      </Grid>
    </div>
  )
}