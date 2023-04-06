# mapping-leaflet-challenge
OBJECTIVE:  Visualize the United States Geological Survey (USGS) earthquake data via Leaflet mapping library, Javascript, HTML, CSS and Bootstrapping.

<img width="1012" alt="Screen Shot 2023-04-04 at 7 19 23 PM" src="https://user-images.githubusercontent.com/44728723/229943289-6d631336-a989-46b8-b4e1-2f1b0b243f40.png">


## Overview
- The USGS provides updated earthquake data every 5 minutes on its website in various formats. Here is a link to the website.
- Data for the past 7 days was used for this visualization.

## Approach
- The data was imported as a JSON file from the website URL via a geojson API and D3.
- Leaflet was used to create a map that plots all the earthquakes from the Past 7 Days based on the latitude and longitude of the earthquake location.
- The markers reflect the magnitude of the earthquake by their size, with higher magnitude earthqukes appearing larger.
- The colors of the markers reflect the depth of the earthquake, with deeper depths appearing darker in color.
- Popups were include for each marker to provide additional information about the earthquake such as: location, magnitude, depth and date and time of the earthquake.
- A legend was added to the map to depict the range of depth by color.

## Web Visualization Overview

- The web visualization map includes two base layers:  a street view and a topographic view which the user can toggle between.
- The map also includes a zoom feature.

<img width="1248" alt="Screen Shot 2023-04-05 at 7 10 59 PM" src="https://user-images.githubusercontent.com/44728723/230240667-83a4f168-38b2-493d-ba34-88c4986d9030.png">

<img width="1234" alt="Screen Shot 2023-04-05 at 7 11 13 PM" src="https://user-images.githubusercontent.com/44728723/230240675-1ddf8e13-3ddf-4190-a4aa-e48f196b0b26.png">

## Technology
- Data:  **JSON** data files
- Backend Data Manipulation:  **JavaScript, Leaflet** interactive map visualizations
- Frontend:  **HTML5, CSS** and **Bootstrapping** for content and styling

