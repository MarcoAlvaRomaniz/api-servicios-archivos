const express = require('express')
const router = express.Router()
const {configureUploads} = require('./../middleware/configureUploads')


router.post('/:collection/:year',configureUploads,(req,res,next)=>{
    const uploadMiddelware = req.upload.any()

    uploadMiddelware(req,res,async(error)=>{
        if(error){
            return next(error)
        }

        const { collection, year} = req.params
        const { body, files} = req

        let data = {}

        if(files){
            files.forEach(file=>{
                
                data[file.fieldname]=file.filename
            })
        }
        data={...data,...body}

        res.status(200).json({
            informacion:data
        })



    })


})

module.exports = router