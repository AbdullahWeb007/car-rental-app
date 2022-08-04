import React                                               from "react";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from "@react-google-maps/api"
import { useState, useRef }                                from "react"
import addWeeks                                            from 'date-fns/addWeeks';
import TextField                                           from '@mui/material/TextField';
import Box                                                 from '@mui/material/Box';

const Maps = () => {
  const [map, setmap] = useState(/**@type google.maps.Map */(null));
  const [directionResponse, setdirectionResponse] = useState(null);
  const [duration, setduration] = useState(null);
  const [distance, setdistance] = useState(null);
  const [value, setValue] = React.useState([null, null]);
  const originRef = useRef()
  const destinationRef = useRef()

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"]
  })
  if (!isLoaded) {
    return <div>Not Loaded</div>
  }

  return (
    <div>
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        } }
      >
        <Autocomplete>
          <TextField
            label="Orgin"
            size="small" sx={ { width: '100%' } } ref={ originRef }
          /></Autocomplete>
        <Autocomplete>
          <TextField
            label="Destination"
            size="small" sx={ { width: '100%' } } ref={ destinationRef }
          /></Autocomplete>
      </Box>
    </div>
  )
}

export default Maps
