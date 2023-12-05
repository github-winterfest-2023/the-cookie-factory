# Test Application
The app.js file is the main entry point of our application. It sets up an Express server and establishes a connection to a database.

# Security Warning
The current implementation of the SQL query is vulnerable to SQL injection attacks, as it directly concatenates user input into the query.
It's main purpose is to demonstrate the Code Scanning Autofix capabilities. 