# Flying Coach

## Overview

**Flying Coach** is a travel guide for users visiting places abroad with low cost activities available at their destination. Users can contribute activities under each available destination.


<br>

## MVP

- Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
- Build a database with at least 3 tables, models and implement controller actions for Full CRUD  
- Host Front-end on React app using at least 8 separate, rendered components in an organized and understandable React file structure.
- Consume data from **Ruby on Rails API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions on the front end for a non-user table
- Styled with CSS Flexbox
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

<br>

### Goals

- Create a fully functional React app using Rails for the backend that allows user authentification and full CRUD.

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | React will be used to create the front-end |
|   React Router   | Will be used to lay out links/routes for all the pages |
|   Axios   | Allows front-end to make axios calls |
| Styled Components | Will be installing this dependency in case I need to target something specific |
|     Rails      | Will be used to host back end data/authentification endpoints |
|  Postgresql     | Relational database management system that will be installed to access SQL easily |

<br>

### Client (Front End)

#### Wireframes

- ALL WIREFRAMES/FLOW: https://lucid.app/lucidchart/invitations/accept/36f47b84-3ea7-4c01-921c-57c4e804c1ac

- Desktop Landing: https://wireframe.cc/qoEXRv


- Desktop Register Page: https://wireframe.cc/N3vGyK


- Desktop Login Page: https://wireframe.cc/tTRprm


- Desktop View All Destinations Page: https://wireframe.cc/jSnV4B


- Desktop View One Destination Page While Logged In: https://wireframe.cc/p3x65i


- Desktop View One Destination Page While Not Logged In: https://wireframe.cc/8wWoQU


- Desktop View Edit Activity Page: https://wireframe.cc/OwqGuJ


- Desktop View Add Activity Page: https://wireframe.cc/bpVloe

#### Component Tree

[Component tree](https://whimsical.com/flying-coach-PAoJWob1iJJRq6RirEr1AQ)

> ![component tree](https://i.imgur.com/MXcjJU7.png)



#### Component Hierarchy

``` structure

src
|__ App.js
|__ App.css
|__ index.js
|__ index.css
|__ assets/
      |__ icons
      |__ images
|__ components/
      |__ Header.jsx
      |__ Header.css
|__ containers/
      |__ MainContainer.jsx
      |__ MainContainer.css
|__ layouts/
      |__ Layout.jsx
      |__ Layout.css
|__ screens/
      |__ Homepage
            |__ Homepage.jsx
            |__ Homepage.css
      |__ Register
            |__ Register.jsx
            |__ Register.css
      |__ Login
            |__ Login.jsx
            |__ Login.css
      |__ AllDestinations
            |__ AllDestinations.jsx
            |__ AllDestinations.css
      |__ DestinationDetails
            |__ DestinationDetails.jsx
            |__ DestinationDetails.css
      |__ AddActivity
            |__ AddActivity.jsx
            |__ AddActivity.css
      |__ EditActivity
            |__ EditActivity.jsx
            |__ EditActivity.css
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ destinations.js
      |__ activites.js

```


#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Migration Tables/Models    |    H     |     2 hrs      |     TBD     |    TBD   |
| Create Seed Data    |   M     |    2 hrs      |     TBD     |    TBD   |
| Create Controller Methods/Routes |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Authentification Methods/Routes |    H     |     2 hrs      |     TBD     |     TBD     |
| Test/Debug Routes |    M     |     1 hr      |     TBD     |     TBD     |
| Connect Backend to Frontend |    M     |     .5 hrs      |     TBD     |     TBD     |
| Build out React File Structure |    L     |     1 hr      |     TBD     |     TBD     |
| Create Methods/Build out Services Folder  |    H     |     2.5 hrs      |     TBD     |     TBD     |
| Build out User Authentification Screens |    M     |     2 hrs      |     TBD     |     TBD     |
| Build out User Authentification Logic |    M     |     3 hrs      |     TBD     |     TBD     |
| Render all Destinations  |    M     |     2 hrs      |     TBD     |     TBD     |
| Render Specific Destination Details/Activities    |    H     |     4 hrs      |     TBD     |    TBD   |
| Build out CRUD Functionality/Screens for Activities   |    H     |     6 hrs      |     TBD     |    TBD   |
| CSS Styling    |    M     |     6 hrs      |     TBD     |    TBD   |
| Create Mobile/Tablet Media Query    |    H     |     3 hrs      |     TBD     |    TBD   |
| Deployment    |    H     |     1 hr      |     TBD     |    TBD   |
| TOTAL               |          |     41 hrs      |     TBD     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> ![erd_model](https://i.imgur.com/J6O0LeN.png)

<br>

***

## Post-MVP

Implement a favorite button that puts the most like user contributions at the top of the comment section.

***

## Code Showcase

> TBD

## Code Issues & Resolutions

> TBD
