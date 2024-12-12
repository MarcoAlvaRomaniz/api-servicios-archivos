const multer = require('multer')
const path = require('path')
const fs = require('fs')
const utf8 = require('utf8');


const storage = (collection,year)=>{
    const uploadPath = `uploads/${collection}${year}`
    console.log(uploadPath)


    if(!fs.existsSync(uploadPath)){
    console.log('NO EXISTE LA CARPETA')

        fs.mkdirSync(uploadPath,{recursive:true})
    }

    return multer.diskStorage ({
        destination: (req,file,cb)=>{
    console.log('ENTRANDO A DESTINO')

            cb(null,uploadPath)
        },
        filename:(req,file,cb)=>{
            
            cb(null,utf8.decode(file.originalname).normalize('NFC'))
        }

    })

}

const upload =(collection,year)=>{

    return multer({storage:storage(collection,year)})
}

module.exports = upload