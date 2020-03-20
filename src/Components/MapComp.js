import React from 'react'

import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default function MapComp(props){

    const {lat, lng} = props.data
    
    let position = [lat, lng]
    
    return(
        <>

        <Map center={position} zoom={3.5}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </Map>

        </>
    )
}