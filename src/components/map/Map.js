import React from 'react'
import './map.css'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {

        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 40.201489, lng: 40.201489 }}
            />
        )
    
}
const WrappedMap = () => withScriptjs(withGoogleMap(Map))

export default WrappedMap;