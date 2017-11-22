# Eat-Da-Burger

## Introduction
**Eat-Da-Burger** is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, it will display the burger on the UNDEVOURED BURGERS table -- waiting to be devoured. When the user clicks **Devour it!** button, the selected burger will be moved to the DEVOURED BURGERS table.

## Technologies Used
These are the technologies that I used to built this app:
* [MySQL](https://www.mysql.com)
* [Sequel Pro](https://www.sequelpro.com)
* [Express JS](https://www.npmjs.com/package/express)
* [Method Override](https://www.npmjs.com/package/method-override)
* [Body Parser](https://www.npmjs.com/package/body-parser)
* [Handlebars](http://handlebarsjs.com)
* [Heroku](https://dashboard.heroku.com/apps)

## NPM
These are the NPMs that need to be installed:
* `npm install express`
* `npm install body-parser`
* `npm install method-override`
* `npm install express-handlebars`
* `npm install mysql`

## Architectual Pattern
**Model-View-Controller (MVC)**. Here's the directory structure for this app:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burger_controllers.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └─ img
|	└─ burger.png
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Object Relational Mapping (ORM) Used
* **selectAll** = used to `SELECT` all data from `burgers_db` and display it to end-user.
```javascript
selectAll: function(tableName, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if(err) throw err;
        callback(result);
    });
  }
```
* **insertOne** = used to `INSERT` new burger to the `burgers_db` when user clicks `Add New Burger` button.
```javascript
insertOne: function(tableName, burgerName, burgerStatus, burgerDate, burgerInputName, callback) {
    var queryString = "INSERT INTO ??(??, ??, ??) VALUES(?, FALSE, CURRENT_TIMESTAMP)";
    console.log(queryString);
    connection.query(queryString, [tableName, burgerName, burgerStatus, burgerDate, burgerInputName], function(err, result) {
      if(err) throw err;
        callback(result);
    });
  }
```
* **updateOne** = used to `UPDATE` the `devouredStatus` of the selected burger to `TRUE` or `1`.
```javascript
updateOne: function(tableName, tableUpdatedCol, burgerID, callback) {
    var queryString = "UPDATE ?? SET ?? = TRUE WHERE burgerID = ?";
    connection.query(queryString, [tableName, tableUpdatedCol, burgerID], function(err, result) {
      if(err) throw err;
        callback(result);
    });
  }
```

## View Page to Display Two-Separated Table
```html
<div class="row">
    <div class="col-lg-6">
        <h2>UNDEVOURED BURGERS:</h2>
        <table class="table table-condensed">
            <tr>
                <th class="text-center">Burger ID</th>
                <th>Burger Name</th>
                <th>Action</th>
            </tr>
            {{#each burgers}}
                {{#unless devouredStatus}}
                    <tr>
                        <td class="text-center">{{burgerID}}</td>
                        <td>{{burgerName}}</td>
                        <td>
                            <form action="/burger/{{burgerID}}?_method=PUT" method="POST"><!-- FORM only have 2 actions: POST and GET. That's why we use method-override -->
                                <input type="submit" class="btn-success" value="Devour It!">
                            </form>
                        </td>
                    </tr>
                {{/unless}}
            {{/each}}
        </table>
    </div>
    <div class="col-lg-6">
        <h2>DEVOURED BURGERS:</h2>
        <table class="table table-condensed">
            <tr>
                <th>Burger ID</th>
                <th>Burger Name</th>
            </tr>
            {{#each burgers}}
                {{#if devouredStatus}}
                    <tr>
                        <td>{{burgerID}}</td>
                        <td>{{burgerName}}</td>
                    </tr>
                {{/if}}
            {{/each}}
        </table>
    </div>
</div>
```
## Heroku Deployment
There are the steps to this app to Heroku:
* `git add .`
* `git commit -m "<comment>"`
* `git push origin master`
* `heroku create`
* `git push heroku master`

If the page does not display, do `heroku restart`.


## Heroku Link to Eat-Da-Burger App:

[https://guarded-forest-75429.herokuapp.com/](https://guarded-forest-75429.herokuapp.com/)
