require ('dotenv').config()

const server = process.env.URL_API

const admin = require('firebase-admin')
const credencial = require('./../credencialesSIRSA.json')

admin.initializeApp({
    credential:admin.credential.cert(credencial)
})

const db = admin.firestore()

module.exports = {
    db, server
}
