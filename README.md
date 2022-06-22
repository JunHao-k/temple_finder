# Temple Finder: Showing 350 chinese temple locations in Singapore
Access live demo site [here](https://inthereddot.netlify.app/)

## Overview

Main purpose of the project is to provide users with knowledge of where chinese temples are located including the famous ones 

### Organization's Goals
The goal of the site is to provide quicker access to location of chinese temples. It also provides recommended routing to temples based on postal codes. The site aims to consolidate information of temples along with nearby MRT stations and vegetarian eateries presented with basic website interaction

### Users' Goals
General public users who are interested should be able to easily find a way to a desired temple from
where they are using postal codes. They would also be able to plan ahead of their trip by checking current weather, vegetarian food places as part of after prayers rituals and nearest MRT stations
---

## The Five Planes of UI/UX

### Strategy

1. **Organisation**
   - Objective: To bridge the knowledge gap and act as a platform to provide information that allows easy planning of prayer trips
2. **Users: General Public**
   - Objective: Be able to easily locate chinese temples and plan for any prayer trips
   - Demographics:
       - Anyone who wants to have a prayer session to find a peace of mind
   - Pain point: Unsure of which chinese temple to visit and need recommendations
3. **Users: Millenials and Gen Zs**
   - Objective: Extrapolate their current state of chinese religious knowledge by allowing them to plan prayer trips more effectively
   - Needs:
      - Recommendations of reputable chinese temples
      - Able to check for weather and plan ahead of their trip
      - Need some basic understanding of main patron deities their elders pray to
   - Demographics:
      - Millenials and Gen Zs seeking to understand certain traditions that they watch their elders do but no idea why it is being done
      - Millenials and Gen Zs seeking to carry on their parents and chinese cultural traditions but the older generation is unable to connect with them to provide such information
   - Pain point: Not much information on the internet for the tech-savvy younger generation regarding these traditions. The older generation do not possess enough tech knowledge to share what they know on the internet


User Stories | Acceptance Criteria(s)
------------ | -------------
As part of the younger generation not educated on such religious matters from parents generation, I would like to visit some of the chinese temples that my elders frequently visit including how to get there myself | Map should be able to provide a route from the starting point to destination temple location using starting location postal code and temple postal code as inputs
As someone from the general public that already has knowledge about these religous matters and is planning a prayer trip or being there physically after prayers, I like to be able to get information about surrounding amenities and weather information of the temple | Site should be able to allow users to check nearby vegetarian eateries, weather information and nearby MRT stations when interacting with the temple markers

### Scope

#### Content
The site should at least contain location markers of 350 temples spreaded across the mainland island of Singapore with some outlying temples in outlying islands like Pulau Ubin. It must be able to provide users with information of nearby transport and vegetarian food. Weather forecast must also be available at all the temples

#### Functional
- Route provided from start to destination based on postal code inputs
- Interaction with the temple markers will provide location of vegetarian food eateries and nearby MRTs
- Temple marker popups includes information of the current realtime weather 


### Structure
<figure>
    <img src="/readme/info_design.png" height="500" alt="Information Architecture and Design">
    <figcaption>Information Architecture and Design of the site</figcaption>
</figure>

1. Loading of the site will bring user to the first interactive dashboard _Overview_ of the site
2. Ideally, there will be a loading splash across the screen while fetching and transforming the data necessary for the dashboards
3. Each Dashboard content section will allow users to filter to the data needed
   - Overview: allow users to filter by a single year
   - Past Years Trend: allow users to filter a range of years
   - Plan Area: allow users to see selected data for a particular region in Singapore
   - Compare Areas: allow users to select the areas and category to compare
4. There is a Find Out More page to summarize the site and the data used

### Skeleton
<figure>
    <img src="/readme/initial_prototype.jpg" height="500" alt="Prototype">
    <figcaption>Intial UI/UX design idea</figcaption>
</figure>

### Surface

In order to complement various design intended for the site, Cirrus UI has been chosen to be used in place of Bootstrap.

#### Color Scheme

<figure>
    <img src="/readme/site_color_scheme.png" height="500" alt="Color Scheme">
    <figcaption>Website color scheme to complement primary color</figcaption>
</figure>

- The primary color used is the red used in Singapore's flag[^1]:
- This color is then locked in to Coolors to randomly generate other colors to complement
- Brighter colors are chosen to be used emphasized content
- Lighter colors are used as accents such as shadows and backgrounds

#### Font
Monsterrat is the web font used mostly in the site for headers and Nunito Sans is used for the rest.

#### Icons
Font awesome icons are also used to denote certain elements and to convey intention of the element. Elements included but not limited are tabs, menus and filters.

---

## Testing
Test Cases can be found [here](/readme/test_cases.xlsx)

---

## Possible Enhancements

- Slider: while working on the project, there was intention to change from prototype to put graphs and charts into carousels for mobile views due to concerns abour scrolling. This is still work in progress, as issues were found during implementation stage.
- Age Group Data: inconsistencies in data makes it hard to plot against charts for comparison, will need to cross check between years to resolve this
- Data: There are more data files that can be included to go deeper for users who have vested interest

---

## Challenges and Constraints

1. As there was issue with calling DOS API using Axios due to CORS policy, the current dataset used is downloaded by accessing the endpoint directly. For this reason the site may continue to serve out of date Annual Population data in future should the data be updated.
2. Geographic distribution dataset from DOS also have unique API, meaning to say that for each time a new survey is done, a new API or JSON file will be required to keep the site updated 
3. As Geographic Distribution regions are based off of 2019 Master Plan, any changes done by URA will not be updated

---

## Libraries and Sources

### Technologies Used

1. [Cirrus UI](https://www.cirrus-ui.com/) as base tempalate and CSS library for the UI
   - Lighter than Bootstrap
   - Works similar to Bootstrap, so not much re-learning needs to be done
   - Have the components and utilities that are needed for the project
   - 2 font families offered are what I had in mind
2. [Font Awesome](https://fontawesome.com/) for icons used
3. [Google Font](https://fonts.google.com/) for the fonts used (i.e. Montserrat, Nunito Sans)
4. [AXIOS](https://axios-http.com/docs/intro) for AJAX requests
5. [ApexCharts](https://apexcharts.com/) for all the graphs and charts displayed
6. [Leaflet](https://leafletjs.com/) for Choropleth map
7. [Multi-select](https://github.com/varundewan/multiselect) for forms
8. [Git](https://git-scm.com/) for version control
9. [GitHub](http://github.com) for the repository
10. [Visual Studio Code](https://code.visualstudio.com/) for code editing and local server
11. [Netlify](https://www.netlify.com/) for deployment
   
### Data Sources

1. Department of Statistics Singapore's Table Builder API
   - https://www.singstat.gov.sg/
   - https://tablebuilder.singstat.gov.sg/
2. Data.gov.sg for URA 2019 Master Plan
   - https://data.gov.sg/dataset/master-plan-2019-planning-area-boundary-no-sea

### Other Attributions
1. [Paul Chor](https://github.com/kunxin-chor) for all his guidance and using his tutorials as references for the codes 
2. [Singapore Map Vectors by seabranddesign, downloaded from Vecteezy](https://www.vecteezy.com/vector-art/145837-free-singapore-map-vectors) for the main logo image used for the site
3. [Annie Spratt](https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) for background image used in Find Out More
4. [Choropleth Map Tutorial](https://leafletjs.com/examples/choropleth/) for the styling of Population Density over Singapore region
5. [Color Brewer](https://colorbrewer2.org/#type=sequential&scheme=YlOrRd&n=9) for Cartography colors of Population Density
6. [ColorMind](http://colormind.io/) for generating colors used in charts
7. [Coolors](https://coolors.co/462255-313b72-62a87c-7ee081-c3f3c0) for matching the red used in Singapore's flag

---

## Build and Deployment

### Build
The project uses [npm @node-minify](https://www.npmjs.com/package/node-minify) to minify JS and CSS files included in the HTML and [npm compress-images](https://www.npmjs.com/package/compress-images) to compress images for web use.

Prerequisites:
- [node and npm](https://nodejs.org/en/download/) is installed
- @node-minfy/core, @node-minify/uglify-es, and @node-minify/clean-css packages are installed
- compress-images and dependencies are installed

Any changes to images, JS and CSS under the _src_ folder will require the following step to re-build:

At project root folder, run 
```
node compress.js
```

### Deployment
[![Netlify Status](https://api.netlify.com/api/v1/badges/a4606763-89a7-4619-84aa-9e41d6d444e7/deploy-status)](https://app.netlify.com/sites/inthereddot/deploys)

The web app is hosted using [Netlify](https://www.netlify.com/).

Prerequisites:
- Any edits done were added, commited, and pushed to Github repository
- Netlify is connected and authorized to Github account
- Netlify is connected to GitHub repository via "New site from Git"
- "GitHub"  has been selected for continuous deployment

Steps to publish[^2]:
1. Go to Netlify and select the team that site has been set up with
2. Browse to the site that needs to be published
3. Go to Deploys and select the deployment to be published

---

[^1]: Singapore Flag colors information is based [here](https://flagcolor.com/singapore-flag-colors/)
[^2]: Steps are only required when auto-publishing is disabled