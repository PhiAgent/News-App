<div id="top"></div>


[![Forks][forks-shield]][forks-url]
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#grading-rubric">Grading Rubric</a>
      <ul>
        <li><a href="#architectural-requirements">Architectural Requirements</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#ui-design-and-Accessibility">UI Design And Accessibility</a></li>
        <li><a href="#architecture-pattern">Architecture Pattern</a></li>
        <li><a href="#web-principles">Core Web Principles</a></li>
        <li><a href="#web-development-best-practices">Web Development Best Practices</a></li>
        <li><a href="#repository-description">Repository Description</a></li>
        <li><a href="#version-control">Version Control</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is a application that allows you to save news articles you'd like to read later so you can visit them at your convenience. [News App] (https://news-app-pga.herokuapp.com/)

[![Product Name Screen Shot][product-screenshot]]


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [React.js](https://reactjs.org/)
* [MaterialUI](https://mui.com/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Grading Rubric -->
## Grading Rubric

### Architectural Requirements

1. JS Library/Framework: React
2. Ways of Interaction:
  a. By mouse
  b. By keyboard
  c. By screenReader(Application fully navigable using a screenReader)
3. Architectural Pattern: MVC
4. Integration with a PostGreSQL database hosted on Heroku that allows create, read, update and delete options via RESTful API's
5. Usage of over 5 MUI components
6. Usage of 5 reusable components in controls

<p align="right">(<a href="#top">back to top</a>)</p>

### Languages

Backend: PostGreSQL, Node.js
Frontend: TypeScript, HTML, CSS

<p align="right">(<a href="#top">back to top</a>)</p>

### UI Design And Accessibility

1. UI Design:
  a. Reusable Components: Application made use of reusable components to reduce the size of the code base and allow for a centralized point of design decisions.
    Reusable Components Used: Tab.tsx, Button.tsx, Newslet.tsx, NewsList.tsx, Input.tsx
2. Accessibility:
  a. Aria Labels: Made use of aria-labels to allow screen reader to correctly read components on the page to vision impaired users.
  b. Aria Roles: Used aria-roles to allow screen readers to see non-button clickable elements.
  c. Tab-Index: Use to make entire application navigable using just keyboard for users without mouse access.
  d. onKeyUp: Used to distinguish between key presses while using my application. Users can navigate with 'tab' and select with 'enter'.

<p align="right">(<a href="#top">back to top</a>)</p>

### Architecture Pattern

MVC architecture
  1. MODEL
  The Model Layer(server/models/model.js) sits directly on top
  of the database and doesn't need to know what
  information is coming from the database.
  2. CONTROLLERS
  The controllers consume API's exposed by the model.
  and don't need to know what those api's do.
  3. VIEWS
  The server exposes APIs that are consumed by
  the UI on the frontend to render information.


<p align="right">(<a href="#top">back to top</a>)</p>

### Core Web Principles

1. Semantic HTML tags: Made use of HTML elements like footer and header that have semantic meaning that correlate their usage with their names.
2. h1 tags: properly nested h1 tags to allow for easy reading using a screen reader.


<p align="right">(<a href="#top">back to top</a>)</p>

### Web Development Best Practices

1. Separation of Concerns
  I separated my UI components based on their function. My Reusables were in isolated in the controls folder, the header of the page in the header folder, the footer in the footer folder. I isolated other parts like the util functions and the hooks. This made my code easy to navigate.
2. Project Structure
  └── /src
      ├── /components
    |   ├── /Body
    |   |   ├── Body.tsx
    |   |   ├── Feed.tsx
            ├── Homepage.tsx
    |   |   └── Login.tsx
        ├── controls//reusable components
      |   ├── /Button
        |   | └── Button.tsx
      |   ├── /Input
        |   | └── Input.tsx
      |   ├── /Newslet
        |   | └── Newslet.tsx
      |   ├── /NewsList
      |   |   └── NewsList.tsx
      |   ├── /Tab
        |   |   └── Tab.tsx
      |   ├──index.tsx//index of all the reusables
      |   ├──interfaces.tsx
    |   ├── /Footer
      |   |   └── Footer.tsx
    |   └── /Header
    |   |   └── Title.tsx
      ├── /context
    |   └── context.tsx
      ├── /hooks
    |   └── useLocalStorage.tsx
      ├── /utils
        └── utils.tsx
      ├── App.tsx
      └── index.tsx
3. Web Vitals
  First Contentful Paint: 897ms; 92%
  Speed Index: 1.3s; 90%
  Largest Contentful Paint: 937ms; 96%
  Time to Interactive: 1.4s; 99%
  Cumulative Layout shift: 0.00; 100%
  Accessibility: 100%
  <a href="https://imgur.com/I6Qj5Og"><img src="https://imgur.com/I6Qj5Og.png" height='200px' title="source: imgur.com" /></a>


<p align="right">(<a href="#top">back to top</a>)</p>

### Repository Description

1. API Documentation
  #### Summary
- Create routes
  - POST /user
  - POST /favorite

- Read routes
  - GET /business
  - GET /world
  - GET /tech
  - GET /favorite

- Update routes
  - PUT /username

- Delete routes
  - DELETE /favorite


#### Sample Create Route
##### ```POST /user```
- Description: Adds user to the database if user is new.
- Status:
  - ```200 OK``` if success
  - ```500 Failed ``` if failed to create user
- Request Body Parameters:

  | Parameter | Type | Description |
  | --- | --- | --- |
  |  username | String | user's name to be stored |

  - Request Body Example:
  ```javascript
  {
    username: 'phiAgent'
  }
  ```
#### Sample Read Route
##### ```GET /business```
- Description: Returns news articles in the category of business from database.
- Status:
  - ```200 OK``` if success
  - ```500 Failed ``` if failed to fetch
  ```
#### Sample Update Route
##### ```PUT /user```
- Description: Updates user's name in the database.
- Status:
  - ```200 OK``` if success
  - ```500 Failed ``` if failed to update username.
- Request Body Parameters:

  | Parameter | Type | Description |
  | --- | --- | --- |
  |  oldUsername | String | user's old name |
  |  newUsername | String | user's new name |

  - Request Body Example:
  ```javascript
  {
    oldUsername: 'phiAgent',
    newUsername: 'Obede'
  }
  ```
#### Sample Delete Route
##### ```DELETE /favorite```
- Description: Deletes a favorite from the database.
- Status:
  - ```200 OK``` if success
  - ```500 Failed ``` if failed to delete.
- Request Body Parameters:

  | Parameter | Type | Description |
  | --- | --- | --- |
  |  userID | number | id of user trying to unfavorite a news article |
  |  newsID | number | id of news article being unfavorited |

  - Request Body Example:
  ```javascript
  {
    oldUsername: 'phiAgent',
    newUsername: 'Obede'
  }
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Version Control
Application was built mainly on 2 branches: master and feBuild. One branch was the development branch that I continually compared with and merged with the master branch.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTALLATION -->

## Installation

1. Clone the repo
<!-- update link here -->
   ```sh
   git clone https://github.com/PhiAgent/News-App.git
   ```
2. Checkout the feBuild out branch. The master branch is optimized for deployment and won't work out of the box for your local.
   ```sh
   git checkout feBuild
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a config.js file in database with your local psql connection details like this database/psql/config.js:
  ```js
   module.exports = {
      host: "localhost",
      user: "your name",
      database: "news_app",
      password: "",
      port: 5432,
      max: 30,
      idleTimeoutMillis: 1,
    };
   ```
5. Open psql in your terminal and run the command below to populate your database, don't include the quotes around the command:
    ```sh
   '\i database/schema.sql'
    ```
6. Build the front end of the application by running this in the terminal:
    ```sh
   npm run build-dev
    ```
7. Now start your server by running in your terminal:
    ```sh
   npm start
    ```
8. Open localhost http://localhost:5000/ in your browser and witness the application

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

<!-- update link here -->
See the [open issues](https://github.com/Team-Spaghetti/FEC-Project/issues) for a full list issues.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

### Creator

Prince Addai [@PhiAgent](https://github.com/PhiAgent)|[LinkedIn](https://www.linkedin.com/in/prince-gyekye-addai/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Img Shields](https://shields.io)
* [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- update links here -->
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/PhiAgent/News-App?color=green&logoColor=green
[contributors-url]: https://github.com/PhiAgent/News-App/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PhiAgent/News-App?style=social
[forks-url]: https://github.com/PhiAgent/News-App/network/members
[stars-shield]: https://img.shields.io/github/stars/PhiAgent/News-App?style=social
[stars-url]: https://github.com/PhiAgent/News-App/stargazers
[issues-shield]: https://img.shields.io/github/issues/PhiAgent/News-App
[issues-url]: https://github.com/PhiAgent/News-App/issues
[product-screenshot]: out.gif