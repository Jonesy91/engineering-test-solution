
### Task 1
- The database doesn't enforce unique IDs for Primary keys, to prevent duplice keys a unique key contstraint could be used
- The database doesn't create IDs itself this is controlled by the application. The database is capable of creating IDs and could be used for a consistent approach to creating the IDs and minimise the chance for duplicate keys.
- No foreign keys are implemented, if implemented these can be used to join to tables and enfore consistency ensuring records exsist in the tables/columns referenced by a foreign key

### Task 2
- For back end development, the use of caching is a practice used to improve performance of APIs. Caches provide a faster solution for querying data than going to the database for regularly queried data.
- Another common best practice is the use of containers to make an API portable and deployable to different infrastructure or cloud platforms. 
- The use of linting is a commong practice for Node projects as it can be used to enforce coding standards which follow best practices and provides a consisten coding style accross projects within teams.
- Using tools like Swagger for documenting APIs which provides users with a standardised document for how to use APIs.


### Task 3
The node client service is a simple node application which runs through the different endpoints on the engineer-test api and logs the outputs to the console. Please follow the instructions below to start the application.</br> 

To run the application:
1. clone the reposiory `git clone https://github.com/Jonesy91/engineering-test-solution.git`
2. run `npm i` to install dependencies
3. run `npm start` to run the application

To run the unit test use `npm test`.
