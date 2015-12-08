[![Build Status](https://travis-ci.org/tinasharma/CRUD-with-Backbonejs.svg?branch=master)](https://travis-ci.org/tinasharma/CRUD-with-Backbonejs)

Angular.js vs Backbone.js

AngularJS is a JavaScript framework. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop. It is a toolset for building the framework most suited to your application development. Directives in Angular is a powerful feature, which is unique to AngularJS. Direcrives let you invent new HTML syntax, specific to your application. Directives are used to create reusable components, which allows you to hide complex DOM structure, CSS, and behavior. This lets you focus either on what the application does or how the application looks separately. The dependency injection in ANgularJS allows you to declaratively describe how your application is wired, which means that any component which does not fit your needs can easily be replaced.
AngularJS basics are Controllers (sharing data between Controllers), Scope (defining a method on the scope), Filtering data (filters), Directives.


Backbone is a JavaScript library. It is known for being lightweight as its only hard dependency is on one JavaScript library, underscore.js. It has a soft dependency on jQuery. It is designed for developing single-page web applications and for keeping various parts of web applications synchronized. It adds structure to your client-side code. It makes it easy to manage and decouple concerns in your application, leaving you with code that is more maintainable in the long term. As it's small, users have to download less on mobile or slower connections. The entire Backbone source can be read and understood in just a few hours.
Backbone basics are models, views, collections, events and routers.



BackboneJS needs more lines of code than AngularJS. Angular has less characters, less lines, it's shorter, and it doesn't use setters and getters for data binding.
Backbone is a widget builder that just builds blocks of HTML with JavaScript tied to them, its all about render functions.
Angular is live templating engine where you simply put bindings on dom elements and have data come back to you in a really easy accessible manner.


Some disadvantages of using Angular -
Directives are Angular's core feature, but difficult to write.
Most people don't actually use the built-in Router in Angular.

Some disadvantages of using Backbone -
Lack of 2-way data binding.
Productivity is an issue as Backbone is more like a library, which means it doesn't have much opinion of its own, which means it doesn't write as much code for you.
Architecture is unclear at times.
Memory leaking is a big con of Backbone. If you're new to Backbone you're more likely to have leaking memory when writing applications.

