const upload = require('./../functions/configureMulter')

const configureUploads = (req, res,next)=>{
    const { collection, year} = req.params
    req.upload = upload(collection, year);
    next()

}

module.exports ={ configureUploads }