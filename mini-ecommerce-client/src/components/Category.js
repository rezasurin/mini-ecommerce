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
    padding: theme.spacing(2)
  },
  gridList: {
    width: 920,
    height: 420,

  },
  card: {
    maxWidth: 140,
    margin: 20,
    '&:hover' : {
      border: '1px solid #4054B5',
      transform: 'scale(1, 1.1)',
      transition: '.3s ease-in'
    }
  },
  media: {
    maxHeight: '160px',
    width: '200'
  }
}))

export default function ProductCategory() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{marginBottom: 10, borderBottom: '2px solid #4054B5', width: 40, marginLeft: 60}}>Product Categories</Typography>
      <Grid container justify="center">
        <Grid container item lg={12} style={{ flexWrap: 'wrap', justifyContent: 'center', flex:1}}>
            {
              ['baju', 'aksesoris', 'celana', 'elektronik', 'laptop', 'makanan'].map(title => (

              <Card className={classes.card} raised={true}>
                <CardActionArea>
                  <CardMedia
                  className={classes.media}
                  component="img"
                  image="https://assets.moomin.com/uploads/2019/03/Little-My-Uniqlo-Moomin-960x960.jpg"
                  title="baju"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
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