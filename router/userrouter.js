const express = require('express');
const {
    postdata,
    getdata,
    getsingle,
    deletedata,
    updatedata
} = require("../controller/usercontroller");

const router = express.Router();


router.post('/', postdata);

router.get('/', getdata);

router.get('/:id', getsingle);

router.delete('/:id', deletedata);

router.put('/:id', updatedata);




module.exports = router;