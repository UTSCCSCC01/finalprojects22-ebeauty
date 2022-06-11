import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyB981G-jDCCj8rKnUdQKDyBbagcAhhRe4E"
  });
  if(!isLoaded) return (<div> <h1>Loading...</h1> </div>);
  return <Map />;
}

function Map(){
  return (<GoogleMap 
            zoom={14} 
            center={{lat: 43.783164958352664, lng: -79.18745570448675}} 
            mapContainerClassName='map-container'
          >
           < Marker position={{lat: 43.783164958352664, lng: -79.18745570448675}} />
          </GoogleMap>
  )
}

export default MapContainer