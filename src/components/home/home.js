import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./style.css";

const Home=(props)=> {
  return (
    <>
    
    <Card sx={{  width: 3/4, height:250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={props.image}
          alt="Car Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div" className='label'>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='description'>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button> */}
      {/* </CardActions> */}
    </Card>
    </>
  )
}
export default Home;
