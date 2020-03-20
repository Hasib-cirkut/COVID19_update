import React from 'react'

import { Map, Marker, Popup, TileLayer, Circle } from 'react-leaflet'

export default function MapComp(props){

    const {lat, lng} = props.data
    const {confirm, death, recover} = props.data2
    
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
                {confirm} confirmed <br /> {death} people dead <br /> {recover} people recovered
            </Popup>
            </Marker>

            <Circle center={position} radius={50} />
        </Map>

        </>
    )
}