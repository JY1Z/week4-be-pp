const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userControllers');

// GET /users
router.get('/', getAllUser);

router.use(auth);

// POST /users
router.post('/', createUser);

// GET /users/:userId
router.get('/:userId', getUserById);

// PUT /users/:userId
router.put('/:userId', updateUser);

// DELETE /users/:userId
router.delete('/:userId', deleteUser);

module.exports = router;

