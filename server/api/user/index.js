'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.get('/:id/getName', controller.getName);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.put('/:id/name', auth.isAuthenticated(), controller.changeName);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/students', controller.getFilteredStudents);
router.post('/forgotPassword', controller.forgotPassword);
router.post('/resetEmail', controller.resetEmail);
router.post('/', controller.create);

module.exports = router;
