const express = require('express');
const router = express.Router();

//Define Routes 
router.get('/', (req, res) => {
    res.send('THis is a homepage');
})

// export the router
module.exports = router;