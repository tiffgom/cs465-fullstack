# CS-465 Full Stack Development with MEAN
## Travlr Getaways
<i> This is a data-driven, interactive web application developed using the MEAN stack. Users receive content directly from the server, and a Single Page Application (SPA) has developed for Travlr Getaways administrators to manage the application and database. The components of MEAN work cohesively as Express is designed to operate on top of Node.js, and AngularJS has a built-in connection to Node.js, allowing for fast data serving. Node.js includes an integrated web server, facilitating the deployment of the MongoDB database and application.</i>

MEAN stack is ideal due to its architectural flexibility, allowing us to leverage Nodejs and Express' power, flexibility, and speed for the public-facing website, while leveraging SPA's efficiency for administrative purposes. Both ends are connected to a NoSQL MongoDB database, which gives us the freedom to define our schema and enforce certain parts without being constrained. 

## Architecture
Both the Angular project and the Express HTML customer-facing pages adhere to the Model-View-Controller (MVC) architecture pattern. In the web application, the client runs in a web browser (Angular) and at times communicates with the server. After that, the server (Express) retrieves and stores data for the client, maintaining a clear difference between client and server to simplify app maintenance and testing.

In the client-facing Express project, all data elements and other information are retrieved from the database and returned to the client-facing website, where the pages are generated. Handlebars are to improve the rendering speeds of the HTML pages.  Due the static nature of the client facing HTML pages, JavaScript is used to enable interaction with the backend database to make the pages dynamic reflect user behavior. 

While the Express’ project’s structure features a lot of communication between the server and the client-side browser, the Angular instead moves a significant portion of the burden to the browser by initially loading the majority of what is required as a single-page application (SPA). With SPAs, data is presented to users dynamically. JavaScript operates within the browser, needing no page reloads or added wait time because content is automatically downloaded. As opposed to Express where every time a user accesses a new page in a simple web application interaction, a request is sent to the server to download a new HTML page
 
## Functionality

## Testing

## Reflection
