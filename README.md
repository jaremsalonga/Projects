# Humans API (Node JS)

## Instructions
1. Create a simple RESTful CRUD API using the NodeJS Express framework that will implement the service as described in the Swagger file (swagger.yml).
2. The framework must dynamically load the Swagger file to create its routes. You can load the Swagger file through https://editor.swagger.io to understand the API requirements.
3. Feel free to add more properties in the Swagger file using the `x-*` notation to suit your needs (ie. routing requests to controllers and actions).
4. Upload your work in a public github repository and email the link to info@pragmanila.com.

## Requirements
1. Implement in NodeJS Express Framework.
2. Use MongoDB for data persistence.
3. ***Validate all inputs.*** 
  - `id` must exist when reading, updating, and deleting
  - `name` and `email` must exist when creating
  - `email` must be unique
4. Response headers and http codes must be correct.

## Optional (but definitely an advantage)
1. ES6
2. Promise
3. Sensible and clear code abstraction
4. Code potential for scalability
5. NPM script (`npm test`) for basic code linting using JSHint (www.jshint.com)
