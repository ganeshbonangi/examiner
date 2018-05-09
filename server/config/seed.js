/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import ClassRoom from '../api/classroom/classroom.model';
import Exam from '../api/exam/exam.model';
import Questions from '../api/question/question.model';
import Counter from '../api/counter/counter.model';
var counterController = require('../api/counter/counter.controller');

Counter.find({}).remove()
    .then(() => {
        Counter.create({
            id: 'question',
            seq: 0
            
        }, {
            id: 'Server and Client integration',
            seq: 0
        }, {
            id: 'Smart Build System',
            seq: 0
        }, {
            id: 'Modular Structure',
            seq: 0
        }, {
            id: 'Optimized Build',
            seq: 0
        }, {
            id: 'Deployment Ready',
            seq: 0
        });
    });

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
Questions.find({}).remove()
    .then(() => {
        Questions.create({
            id: counterController.getNextSequence('question'),
            information: 'information text',
            instruction: 'information text',
            questiontext: 'what is your question?',
            type: 'mcms',
            options: [1,2,3,4,5]
        }, {
            id: counterController.getNextSequence('question'),
            information: 'info text',
            instruction: 'String',
            questiontext: 'String',
            type: 'mcss',
            options: [2,3,4]
        }, {
            id: counterController.getNextSequence('question'),
            information: 'String',
            instruction: 'String',
            questiontext: 'String',
            type: 'fibd',
            options: [4,5,6,7]
        }, {
            id: 33,
            information: 'String',
            instruction: 'String',
            questiontext: 'String',
            type: 'fibt',
            options: [7,8,9]
        });
    });
ClassRoom.find({}).remove()
    .then(() => {
        ClassRoom.create({
            id: 1,
            name: 'Sunday Batch',
            admin: 123,
            students: [123,234,233]
        }, {
            id: 2,
            name: 'Batch 2',
            admin: 23,
            students: [234,233,235]
        }, {
            id: 3,
            name: 'Noon Batch',
            admin: 123,
            students: [234,233,235]
        }, {
            id: 4,
            name: 'Evening Batch',
            admin: 123,
            students: [234,233,235]
        }, {
            id: 5,
            name: 'Morning Batch',
            admin: 67,
            students: [678]
        }, {
            id: 6,
            name: 'Sunday Batch',
            admin: 898,
            students: [234,233,235]
        });
    });

Exam.find({}).remove()
    .then(() => {
        Exam.create({
            id: 1,
            name: 'SBI PO',
            activationdate: 1460572200000,
            expiredate: 1593147200000,
            duration: 1498243800960,
            students: [234, 2, 3],
            questions: [124, 123, 125],
            authorid: 123,
            authorname: 'String 123'
        }, {
            id: 2,
            name: 'RRB',
            activationdate: 1460572200000,
            expiredate: 1693147258206,
            duration: 1493154058376,
            students: [234, 2, 3],
            questions: [12, 123],
            authorid: 124,
            authorname: 'String 123'
        }, {
            id: 3,
            name: 'CIVEL 000',
            activationdate: 1460572200000,
            expiredate: 1793147258206,
            duration: 1493154058376,
            students: [23, 2, 234],
            questions: [12, 123],
            authorid: 123,
            authorname: 'String 123'
        }, {
            id: 4,
            name: 'SI',
            activationdate: 1460572200000,
            expiredate: 1893147258206,
            duration: 1493154058376,
            students: [1, 2, 3],
            questions: [12, 123],
            authorid: 123,
            authorname: 'String 123'
        }, {
            id: 5,
            name: 'String5',
            activationdate: 1460572200000,
            expiredate: 1993147258206,
            duration: 1493154058376,
            students: [1, 2, 3],
            questions: [12, 123],
            authorid: 124,
            authorname: 'String'
        }, {
            id: 6,
            name: 'String6',
            activationdate: 1460572200000,
            expiredate: 1493147258206,
            duration: 1493154058376,
            students: [1, 2, 3],
            questions: [12, 123],
            authorid: 124,
            authorname: 'String'
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
                id: 123,
                provider: 'local',
                name: 'Test User',
                email: 'test@example.com',
                password: 'test'
            }, {
                id: 124,
                provider: 'local',
                role: 'admin',
                name: 'Admin',
                email: 'admin@example.com',
                password: 'admin'
            }, {
                id: 125,
                provider: 'local',
                name: 'Admire',
                email: 'admin@example.com',
                password: 'admin'
            },{
                id: 126,
                provider: 'local',
                name: 'Test User1',
                email: 'test1@example.com',
                password: 'test1'
            },{
                id: 127,
                provider: 'local',
                name: 'Test User2',
                email: 'test2@example.com',
                password: 'test2'
            })
            .then(() => {
                console.log('finished populating users');
            });
    });
