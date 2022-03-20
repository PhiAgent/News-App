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
This is a application that allows you to save news articles you'd like to read later so you can visit them at your convenience.

[![Product Name Screen Shot][product-screenshot]]


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [React.js](https://reactjs.org/)
* [MaterialUI](https://mui.com/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)


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
