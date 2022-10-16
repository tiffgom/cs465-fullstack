# CS-465 Full Stack Development with MEAN
## Travlr Getaways
<i> This is a data-driven, interactive web application developed using the MEAN stack. Users receive content directly from the server, and a Single Page Application (SPA) has developed for Travlr Getaways administrators to manage the application and database. The components of MEAN work cohesively as Express is designed to operate on top of Node.js, and AngularJS has a built-in connection to Node.js, allowing for fast data serving. Node.js includes an integrated web server, facilitating the deployment of the MongoDB database and application.</i>

MEAN stack is ideal due to its architectural flexibility, allowing us to leverage Nodejs and Express' power, flexibility, and speed for the public-facing website, while leveraging SPA's efficiency for administrative purposes. Both ends are connected to a NoSQL MongoDB database, which gives us the freedom to define our schema and enforce certain parts without being constrained. 

## Architecture
Both the Angular project and the Express HTML customer-facing pages adhere to the Model-View-Controller (MVC) architecture pattern. In the web application, the client runs in a web browser (Angular) and at times communicates with the server. After that, the server (Express) retrieves and stores data for the client, maintaining a clear difference between client and server to simplify app maintenance and testing.

In the client-facing Express project, all data elements and other information are retrieved from the database and returned to the client-facing website, where the pages are generated. Handlebars are to improve the rendering speeds of the HTML pages.  Due the static nature of the client facing HTML pages, JavaScript is used to enable interaction with the backend database to make the pages dynamic reflect user behavior. 

While the Express’ project’s structure features a lot of communication between the server and the client-side browser, the Angular instead moves a significant portion of the burden to the browser by initially loading the majority of what is required as a single-page application (SPA). With SPAs, data is presented to users dynamically. JavaScript operates within the browser, needing no page reloads or added wait time because content is automatically downloaded. As opposed to Express where every time a user accesses a new page in a simple web application interaction, a request is sent to the server to download a new HTML page.

As for the backend, MongoDB is our choice of a fast and scalable NoSQL database supports the various data types the site will need and will aid in delivering high performance and availability. MongoDB is its flexible data store because of its JSON-like document format. MongoDB stores records as documents gathered together in collections. Due to its horizontal scale-out architecture, the web application will have no trouble adjusting to user demands.

 
## Functionality
JavaScript lends uniformity to the development process as most of the components of this application, from the database objects to the client-side code, is written in this scripting language. JSON is a data format that is drawn from JavaScript. This user-friendly format is great for storing and transferring data, as mentioned in MongoDB, as well as sending data from the server to the pages. Passing HTTP requests containing JSON bodies, ties in the front end and backend development pieces. In this application, our trip data is structured using key and value pairs.

An Instance in the full stack process where refactored code improved the functionality and efficiencies of the web application is when we used Handlebars to dynamically generate the HTML pages. By refactoring the common functionality of the headers and footers into "partials". Handlebars allowed us to reuse certain parts of the templates with partials we created for headers and footers. Reusable user interface (UI) components reduce the size of the web application overall, speed up and streamline the development process, and reduce the likelihood of introducing errors and vulnerabilities.

## Testing

## Reflection
