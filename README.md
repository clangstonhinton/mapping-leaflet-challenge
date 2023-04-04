# mapping-leaflet-challenge
Objective:  Visualize the United States Geological Survey (USGS) earthquake data via Leaflet mapping library, Javascript, HTML, CSS and Bootstrapping.

<img width="1063" alt="Screen Shot 2023-04-04 at 7 18 22 PM" src="https://user-images.githubusercontent.com/44728723/229943161-fd084604-29c3-48c5-8196-0908f6d43209.png">


## Overview
- The USGS provides updated earthquake data every 5 minutes on its website in various formats. Here is a link to the website.
- Data for the past 7 days was used for this visualization.

## Approach
- The data was imported 
- Leaflet was used to create a map that plots all the earthquakes from the Past 7 Days dataset based on the latitude and longitude of the earthquake location.
- The markers reflect the magnitude of the earthquake by their size, with higher magnitude earthqukes appearing larger.
- The colors of the markers reflect the depth of the earthquake, with deeper depths appearing darker in color.
- Popups were include for each marker to provide additional information about the earthquake such as: location, magnitude, depth and date and time of the earthquake.
- A legend was added to the map to depict the range 

## Web Application Overview

- We deployed Flask as the web server to host the page routes and import the data housed in the sqlite3 database through sqlAlchemy.
- The web application navigation contains links to 3 webpages (Project Overview, Dashboard and Our Team) and a link to this GitHub repository. 
- To see the live version of the website application, download the source code and launch the Flask app.py file.


<p><b>Project Overview:</b></p>
<p align="center">
<img width="620" alt="Screen Shot 2023-04-04 at 9 00 13 AM" src="https://user-images.githubusercontent.com/44728723/229799835-cd104dd0-5746-4a06-ac10-5d578290ac7b.png">
  
__________________________________________________________________________________
  
<p><b>Dashboard:</b></p>

- The Dashboard contains a dropdown menu for the user to select the type of wine they are interested in:  White, Red, Rosé or Sparkling.
- Once selected, the web application will display a horizontal bar chart of the Top 10 Wines in the category based on points.
- At the bottom of the page is a chart showing the Top 50 Wines ranked by Price per Point (lower is better) for the category selected in the dropdown menu.
- Both the Top 10 by Points and the Top 50 by Price per Point bar charts update when the dropdown selection changes.
- On the right side of the dashboard is a stream graph from Highcharts which depicts the number of wines by country by wine points. This chart also has a zoom feature.
- All three charts are interactive and contain hover features showing additional data details.
<p align="center">
<img width="619" alt="Screen Shot 2023-04-04 at 9 04 55 AM" src="https://user-images.githubusercontent.com/44728723/229800736-c49bd85a-854a-40e1-8075-420dd6c4ecd5.png">

  __________________________________________________________________________________
  
<p><b>Our Team Page:</b></p>

Our team page contains links to each members' GitHub repository, LinkedIn profile and Twitter account that displays when the user hovers over an avatar.
<p align="center">
<img width="619" alt="Screen Shot 2023-04-04 at 9 00 37 AM" src="https://user-images.githubusercontent.com/44728723/229799869-21557b5d-0cd9-49eb-9bc0-091a7d307510.png">

## Technology

- Data Cleansing:  **Pandas** and **Python**
- Data Warehousing:  **sqlit3** was used to house the dataset
- Web Enablement:  **Flask** was used as the skinny web server and was also the connection point between the sqlite3 database via **sqlAlchemy**, JavaScript and HTML files
- Backend Data Manipulation:  **JavaScript, D3, Plotly** and **Highcharts** for interactive data visualizations
- Frontend:  **HTML5, CSS** and **Bootstrapping** for content and styling

<img width="723" alt="Screen Shot 2023-04-04 at 10 42 51 AM" src="https://user-images.githubusercontent.com/44728723/229829264-60a3383b-ddd5-457d-9a0d-f483211887d0.png">


## Future Considerations
In the future, we could expand upon this web application by:
- Adding additional user selection dropdowns or sliders for price range, wine points and/or province & country
- Applying machine learning to predict wine rating based on variables in the data set
- Deploying a recommendation engine based on user inputs or a similarly rated wine selection
- Securing more recent data
