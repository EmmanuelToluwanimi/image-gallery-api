const mongoose = require('mongoose')

const imgSchema = new mongoose.Schema({
    fileUrl: {
        type: 'String',
        required: true
    },
    description: {
        type: 'String',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Images', imgSchema)