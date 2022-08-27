const express = require('express');
const router = express.Router();

// Get ALl The TODOs
router.get('/', async(req, res)=>{

});
// Get a single TODO by id
router.get('/:id', async(req, res)=>{

});
// POST/create TODO
router.post('/', async(req, res)=>{

});
//POST/create multiple TODO
router.post('/all', async(req, res)=>{

});
//Put TODO
router.put('/:id', async(req, res)=>{

});
//Delete TODO
router.delete('/:id', async(req, res)=>{

});

module.exports = router;