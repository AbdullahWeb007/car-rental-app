import * as React  from 'react';
import Box         from '@mui/material/Box';
import Card        from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia   from '@mui/material/CardMedia';
import Typography  from '@mui/material/Typography';
import img1        from "../Images/cardImages/22.jpg"

export default function CarHosts() {
  return (
    <Card sx={ { display: 'flex', height: "150px", width: 540 } }>
      <Box sx={ { display: 'flex', flexDirection: 'column' } }>
        <CardMedia
          component="img"
          sx={ { width: 100, height: 100 } }
          image={ img1 }
          alt="Live from space album cover"
        />
      </Box>
      <CardContent sx={ { flex: '1 0 auto' } }>
        <Typography component="div" variant="h6">
          Henry
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div" style={ { width: "40%" } }>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
        </Typography>
      </CardContent>
      <Box sx={ { display: 'flex', alignItems: 'center', pl: 1, pb: 1 } }>
      </Box>
    </Card>
  );
}