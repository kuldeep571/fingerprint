const db = require('../model/usermodel');

const postdata = async (req, res) => {
    try {
        const fingerprintdata = await db.create({
            fingerprint: req.body.fingerprint,
        })
        res.status(201).json(
            fingerprintdata
        )
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getdata = async (req, res) => {
    try {
        const findalldata = await db.find();
        res.status(200).json(findalldata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getsingle = async (req, res) => {
    try {
        const findsingledata = await db.findOne({ _id: req.params.id });
        res.status(200).json(findsingledata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deletedata = async (req, res) => {
    try {
        const deletedata = await db.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updatedata = async (req, res) => {
    try {
        const updatedata = await db.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: req.body
            },
            { new: true },
        )
        res.status(200).json(updatedata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    postdata,
    getdata,
    getsingle,
    deletedata,
    updatedata
}
