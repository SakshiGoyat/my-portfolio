import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <div>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10569.301225709418!2d78.1728634891839!3d26.24920269941473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sIndian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1634102179694!5m2!1sen!2sin" loading="lazy" class="contact-us-lower-sec-map-embed">

        </iframe>
    </div>
  );
};

export default Map;

// style={{height: "35rem", width:"35rem"}}
// style={{padding: "4rem 4rem 3rem 0"}}