import React from 'react'
import {
  makeStyles,
  GridList, GridListTile, Grid,
  Card, CardMedia, CardContent,
  Typography,
  CardActionArea
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#202932',
    padding: theme.spacing(2)
  },
  gridList: {
    width: 920,
    height: 420,

  },
  card: {
    maxWidth: 420,
    margin: 5
  },
  media: {
    maxHeight: '180px',
    width: 'auto'
  }
}))

export default function ProductCategory() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid justify="center">
        <Grid container item lg={12} style={{backgroundColor: 'black', flexWrap: 'wrap', justifyContent: 'center'}}>
            {
              ['baju', 'aksesoris', 'celana', 'elektronik', 'perhiasan', 'makanan'].map(title => (

              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                  className={classes.media}
                  component="img"
                  image="https://assets.moomin.com/uploads/2019/03/Little-My-Uniqlo-Moomin-960x960.jpg"
                  title="baju"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              ))
            }
        </Grid>
      </Grid>
    </div>
  )
}