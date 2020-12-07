# Flying Coach

https://flying-coach.netlify.app/

## Overview

**Flying Coach** is a travel guide for users visiting places abroad with low cost activities available at their destination. Users can add activities under each available destination as well as edit or delete their contributed activity.


<br>

## MVP

- Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
- Build a database with at least 3 tables, models and implement controller actions for Full CRUD  
- Host Front-end on React app using at least 8 separate, rendered components in an organized and understandable React file structure.
- Consume data from **Ruby on Rails API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions on the front end for a non-user table
- Style with CSS Flexbox
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
| Create Migration Tables/Models    |    H     |     2 hrs      |     1hr     |    1hr   |
| Create Seed Data    |   M     |    2 hrs      |     1 hr     |    1 hr   |
| Create Controller Methods/Routes |    H     |     3 hrs      |     3 hrs    |     3 hrs    |
| Create Authentification Methods/Routes |    H     |     2 hrs      |     1 hr     |     1 hr     |
| Test/Debug Routes |    M     |     1 hr      |     1.5 hrs     |     1.5 hrs     |
| Connect Backend to Frontend |    M     |     .5 hrs      |     .5 hrs     |     .5 hrs     |
| Build out React File Structure |    L     |     1 hr      |     .5 hrs     |     .5 hrs     |
| Create Methods/Build out Services Folder  |    H     |     2.5 hrs      |     1 hr     |     1 hr     |
| Build out User Authentification Screens |    M     |     2 hrs      |     1.5 hrs     |     1.5 hrs     |
| Build out User Authentification Logic |    M     |     3 hrs      |     1.5 hrs     |     1.5 hrs     |
| Render all Destinations  |    M     |     2 hrs      |     1.5 hrs     |     1.5 hrs     |
| Render Specific Destination Details/Activities    |    H     |     4 hrs      |     3 hrs     |    3 hrs   |
| Build out CRUD Functionality/Screens for Activities   |    H     |     6 hrs      |     5 hrs     |    5 hrs   |
| CSS Styling    |    M     |     6 hrs      |     6 hrs     |    6 hrs   |
| Create Mobile/Tablet Media Query    |    H     |     3 hrs      |     2.5 hrs     |    2.5 hrs   |
| Deployment    |    H     |     1 hr      |     .5 hrs     |    .5 hrs   |
| Post-MVP (search functionality)    |    L     |     0 hrs      |     2 hrs     |    2 hrs   |
| TOTAL               |          |     41 hrs      |     33 hrs    |     33 hrs     |

<br>

### Server (Back End)

#### ERD Model

> ![erd_model](https://i.imgur.com/J6O0LeN.png)

<br>

***

## Post-MVP

- Implement a favorite button that puts the most like user contributions at the top of the comment section.

- Create more sections of data for each destination (currency, languages spoken, etc.)

- Create a search bar to search for a destination

***

## Code Showcase

> Search Functionality

```
  const handleSearch = e => {
    const newQueriedDestinations = props.destinations.filter(country => country.country_name.toLowerCase().includes(e.target.value.toLowerCase()))
   props.setQueriedDestinations(newQueriedDestinations)
  }
  const handleSubmit = e => e.preventDefault()

  const destinationJSX = props.queriedDestinations.map((destination) =>
    <Destination id={destination.id} country_name={destination.country_name} hero_img={destination.hero_img} price={destination.price}/>
)
```

## Code Issues & Resolutions

> Had an issue with adding activities but was able to resolve it by adding in some of my handleChange code into handleDropDownChange function in order to properly assign the destination_id's value to formData.
```
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleDropDownChange = (e) => {
    const { value } = e.target;
    setDestinationId(value);
    setFormData(prevState => ({
      ...prevState,
      destination_id: value
    }))
  }

```
