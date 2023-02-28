const Contact = require("../Models/Contact")





exports.addContact=async(req,res)=>{
    try {
        const found = await Contact.findOne({email : req.body.email})
        if (found) {
            res.status(400).send('email exists')
        }
        const newContact = new Contact (req.body)
        await newContact.save()
        res.status(200).send({msg : "Contact Added", newContact})
    } catch (error) {
        res.status(500).send({msg : "Could not add contact"})
    }
}

exports.getAll=async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({msg : "Contact list",contacts})

    } catch (error) {
        res.status(500).send({msg : "could not find contacts"})
    }
}

exports.getOneContact=async(req,res)=>{
    try {
        const {id} = req.params
        const contact = await Contact.findById(id)
        res.status(200).send({msg : "Contact found",contact})
    } catch (error) {
        res.status(500).send({msg : "could not found contacts"})
    }
}

exports.deleteContact=async(req,res)=>{
    try {
        const {id} = req.params
        const contacts = await Contact.findByIdAndDelete(id)
        res.status(200).send({msg : "Contact delete",contacts})

    } catch (error) {
        res.status(500).send({msg : "could not delete contacts"})

    }
}

exports.UpdateContact=async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndUpdate(id,{$set: req.body})

        res.status(200).send({msg : "Contact updated"})

    } catch (error) {
        res.status(500).send({msg : "could not update contacts"})

    }
}