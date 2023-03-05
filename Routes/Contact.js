const express = require("express")
const { addContact, getAll, getOneContact, deleteContact, UpdateContact } = require("../Controllers/Contact")

const ContactRouter = express.Router()

ContactRouter.post('/add',addContact)

ContactRouter.get('/get',getAll)

ContactRouter.get('/getOneContact/:id',getOneContact)

ContactRouter.delete('/deleteContact/:id',deleteContact)

ContactRouter.put('/Update/:id',UpdateContact)

module.exports = ContactRouter