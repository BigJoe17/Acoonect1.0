const airoutes = ()=>{
    const express = require('express');
    const router = express.Router();
    const { getAI, createAI, deleteAI } = require('../controllers/aiController');
    router.route('/').get(getAI).post(createAI);
    router.route('/:id').delete(deleteAI);
    module.exports = router;
}

export default airoutes;