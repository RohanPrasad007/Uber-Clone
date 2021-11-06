import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9oYW5wcmFzYWQiLCJhIjoiY2t2bHF2emtyMDNtYzJwcjJvNnAzMXQ3NSJ9.uQUbODByFL5oINv6RrQBlQ";

function Map(props) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [78.9629, 20.5937],
      zoom: 3,
    });

    if (props.pickUpCoordintes && props.dropOffCoordintes) {
      addToMap(map, props.pickUpCoordintes);
      addToMap(map, props.dropOffCoordintes);
      map.fitBounds([props.pickUpCoordintes, props.dropOffCoordintes], {
        padding: 60,
      });
    }
  }, [props.pickUpCoordintes, props.dropOffCoordintes]);

  const addToMap = (map, coordintes) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordintes).addTo(map);
  };
  return <Wrapper id="map"></Wrapper>;
}

export default Map;

const Wrapper = tw.div`
flex-1 overflow-hidden h-1/2
`;
