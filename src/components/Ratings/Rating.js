import * as React   from 'react';
import Rating       from '@mui/material/Rating';
import Box          from '@mui/material/Box';
import StarIcon     from '@mui/icons-material/Star';
import { useTheme } from '@mui/material/styles';
import Card         from '@mui/material/Card';
import CardContent  from '@mui/material/CardContent';
import CardMedia    from '@mui/material/CardMedia';
import Typography   from '@mui/material/Typography';
import img1         from "../Images/cardImages/12.jpg"
import img2         from "../Images/cardImages/10.jpg"
import img3         from "../Images/cardImages/9.jpg"
import "./Rating.css"

const labels = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0',
};

function getLabelText(value) {
  return `${ value } Star${ value !== 1 ? 's' : '' }, ${ labels[value] }`;
}

export default function MyRatingPanel() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const theme = useTheme();
  return (
    <>
      <h5>Ratings and Reviews </h5>
      <Box
        sx={ {
          width: 200,
          display: 'flex',
          alignItems: 'center',
        } }
      >
        <h1>5.0</h1>
        <Rating
          name="hover-feedback"
          value={ 5 }
          precision={ 5 }
          getLabelText={ getLabelText }
          emptyIcon={ <StarIcon style={ { opacity: 0.55 } } fontSize="inherit"/> }
        />
      </Box>
      <h6 style={ { marginTop: "2%" } }>Reviews</h6>

      <Card sx={ { display: 'flex', width: "40%", marginTop: "2%" } } className="Rating">
        <CardMedia
          component="img"
          sx={ {
            width: "40%", height: 100
          } }
          image={ img1 }
          alt="Live from space album cover"
        />
        <Box sx={ { display: 'flex', flexDirection: 'column' } }>
          <CardContent sx={ { flex: '1 0 auto' } }>
            <Typography component="div" variant="h6">
              Kate William

            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </Typography>
          </CardContent>
          <Rating style={ { marginLeft: "3%" } }
                  name="hover-feedback"
                  value={ 5 }
                  precision={ 5 }
                  getLabelText={ getLabelText }
                  emptyIcon={ <StarIcon style={ { opacity: 0.55 } } fontSize="inherit"/> }
          />
        </Box>
      </Card>

      <Card sx={ { display: 'flex', width: "40%", marginTop: "3%" } } className="Rating">
        <CardMedia
          component="img"
          sx={ {
            width: "18%", height: 100
          } }
          image={ img2 }
          alt="Live from space album cover"
        />
        <Box sx={ { display: 'flex', flexDirection: 'column' } }>
          <CardContent sx={ { flex: '1 0 auto' } }>
            <Typography component="div" variant="h6">
              Herry Peter

            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </Typography>
          </CardContent>
          <Rating style={ { marginLeft: "3%" } }
                  name="hover-feedback"
                  value={ 5 }
                  precision={ 5 }
                  getLabelText={ getLabelText }
                  emptyIcon={ <StarIcon style={ { opacity: 0.55 } } fontSize="inherit"/> }
          />
        </Box>
      </Card>

      <Card sx={ { display: 'flex', width: "40%", marginTop: "3%" } } className="Rating">
        <CardMedia
          component="img"
          sx={ {
            width: 220, height: 100
          } }
          image={ img3 }
          alt="Live from space album cover"
        />
        <Box sx={ { display: 'flex', flexDirection: 'column' } }>
          <CardContent sx={ { flex: '1 0 auto' } }>
            <Typography component="div" variant="h6">
              Willaims
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </Typography>
          </CardContent>
          <Rating style={ { marginLeft: "3%" } }
                  name="hover-feedback"
                  value={ 5 }
                  precision={ 5 }
                  getLabelText={ getLabelText }
                  emptyIcon={ <StarIcon style={ { opacity: 0.55 } } fontSize="inherit"/> }
          />
        </Box>
      </Card>
    </>
  );
}
