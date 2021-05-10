# Zuri Training Task:  Express Crud App With Database (MongoDB)

To fetch/get Peoples Data that is already in the database use the GET HTTP request method with the below URL:point_down:.
> **GET Route**
```
https://zuri-express-api.herokuapp.com/api/people
```

To Post/Save Data to the Database, use the POST HTTP Request method with the below URL:point_down:.
> **POST Route**
```
https://zuri-express-api.herokuapp.com/api/people
```

To delete a specific person data in the database. You need to provide the Person id through the params (the id params is required, without the id params you will get a 404 error code (Invalid URL) ).
> **DELETE Route**
```
https://zuri-express-api.herokuapp.com/api/:id/people
```

> **Example of DELETE Route**
```
https://zuri-express-api.herokuapp.com/api/6d34d29vdbas623126/people
```

To update a specific person data in the database. You need to provide the Person id through the params (the id params is required, without the id params; you will get a 404 error (Invalid URL) ).
> **PUT Route**
```
https://zuri-express-api.herokuapp.com/api/:id/people
```

> **Example of PUT Route**
```
https://zuri-express-api.herokuapp.com/api/6d34d29vdbas623126/people
```
