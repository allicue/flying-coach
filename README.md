# Flying Coach

## Overview

**Flying Coach** is a travel guide for users visiting places abroad with low cost activities available at their destination. Users can contribute ideas/options under each destination available.


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

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```


#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

Implement a favorite button that puts the most like user contributions at the top of the comment section.

***

## Code Showcase

> TBD

## Code Issues & Resolutions

> TBD
