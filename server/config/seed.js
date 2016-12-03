/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import ClassRoom from '../api/classroom/classroom.model';
import Exam from '../api/exam/exam.model';

Thing.find({}).remove()
    .then(() => {
        Thing.create({
            name: 'Development Tools',
            admin: 11,
            students: [1, 2, 3, 4]
        }, {
            name: 'Server and Client integration',
            admin: 12,
            students: [1, 2, 3, 4, 5]
        }, {
            name: 'Smart Build System',
            admin: 11,
            students: [1, 2, 3, 4, 5]
        }, {
            name: 'Modular Structure',
            admin: 11,
            students: [1, 2, 3, 4, 5]
        }, {
            name: 'Optimized Build',
            admin: 13,
            students: [1, 2, 3, 4, 5]
        }, {
            name: 'Deployment Ready',
            admin: 31,
            students: [1, 2, 3, 4, 5]
        });
    });

ClassRoom.find({}).remove()
    .then(() => {
        ClassRoom.create({
  id: 1,
  name: 'String',
  admin: 123,
  students: [123]
        }, {
  id: 2,
  name: 'String',
  admin: 23,
  students: [234]
        }, {
  id: 3,
  name: 'String',
  admin: 123,
  students: [234]
        }, {
  id: 4,
  name: 'String',
  admin: 123,
  students: [234]
        }, {
  id: 5,
  name: 'String',
  admin: 67,
  students: [678]
        }, {
  id: 6,
  name: 'String',
  admin: 898,
  students: [89890]
        });
    });

Exam.find({}).remove()
    .then(() => {
        Exam.create({
            id: 1,
            name: 'String1',
            activationdate: 1,
            expiredate: 1200,
            duration: 12,
            students: [234,2,3],
            questions: [12,123],
            authorid:123,
            authorname:'String 123'
        },{
            id: 2,
            name: 'String2',
            activationdate: 1,
            expiredate: 1200,
            duration: 12,
            students: [234,2,3],
            questions: [12,123],
            authorid:123,
            authorname:'String 123'
        }, {
            id: 3,
            name: 'String3',
            activationdate: 1,
            expiredate: 1200,
            duration: 12,
            students: [234,2,3],
            questions: [12,123],
            authorid:123,
            authorname:'String 123'
        }, {
            id: 4,
            name: 'String4',
            activationdate: 1,
            expiredate: 1200,
            duration: 12,
            students: [1,2,3],
            questions: [12,123],
            authorid:123,
            authorname:'String 123'
        }, {
            id: 5,
            name: 'String5',
            activationdate: 1,
            expiredate: 1200,
            duration: 12,
            students: [1,2,3],
            questions: [12,123],
            authorid:124,
            authorname:'String'
        }, {
            id: 6,
            name: 'String6',
            activationdate: 1,
            expiredate: 1200,
            duration: 12,
            students: [1,2,3],
            questions: [12,123],
            authorid:124,
            authorname:'String'
        });
    });

Thing.find({}).remove()
    .then(() => {
        Thing.create({
            name: 'Development Tools',
            info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
                'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
                'Stylus, Sass, and Less.'
        }, {
            name: 'Server and Client integration',
            info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
                'AngularJS, and Node.'
        }, {
            name: 'Smart Build System',
            info: 'Build system ignores `spec` files, allowing you to keep ' +
                'tests alongside code. Automatic injection of scripts and ' +
                'styles into your index.html'
        }, {
            name: 'Modular Structure',
            info: 'Best practice client and server structures allow for more ' +
                'code reusability and maximum scalability'
        }, {
            name: 'Optimized Build',
            info: 'Build process packs up your templates as a single JavaScript ' +
                'payload, minifies your scripts/css/images, and rewrites asset ' +
                'names for caching.'
        }, {
            name: 'Deployment Ready',
            info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
                'and openshift subgenerators'
        });
    });

User.find({}).remove()
    .then(() => {
        User.create({
                id:123,
                provider: 'local',
                name: 'Test User',
                email: 'test@example.com',
                password: 'test'
            }, {
                id:124,
                provider: 'local',
                role: 'admin',
                name: 'Admin',
                email: 'admin@example.com',
                password: 'admin'
            })
            .then(() => {
                console.log('finished populating users');
            });
    });
