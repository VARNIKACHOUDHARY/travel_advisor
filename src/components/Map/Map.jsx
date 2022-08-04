import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@material-ui/core' //use media query will help us in making our wbsite more responsive on mobile phones
//import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './style';




const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery(('min-width:600px'));

    const coordinates = { lat: 0, lng: 0};
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyBMoWRpyvgHyguTPbm4Xr3edUMNC7znlRU'}} // api key frm console.cloud.google.com// these are all props that we need for googlemap react
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50,50]}
            options={''}
            onChange={''} // imp when u chnage the map
            onChildClick={''} //helps when u click on the restaurant in the map 
            >

            </GoogleMapReact>

        </div>

    );
}



export default Map;