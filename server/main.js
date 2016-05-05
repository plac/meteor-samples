import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/api/tasks.js';

Meteor.startup(() => {
	// code to run on server at startup
	for (var i = 0; i <= 10; i++) {
	  Tasks.insert({ text: "teste " + i, createdAt: new Date()});
	};

});
