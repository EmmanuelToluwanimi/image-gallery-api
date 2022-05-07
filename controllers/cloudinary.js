const Images = require('../model/cloudinary')

const getAllImages = async (req, res) => {
    try {
        const images = await Images.find()
        res.status(200).json({
            status: 'success',
            message: 'Successful request',
            payload: images
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        })
    }
}

const createImage = async (req, res) => {
    const filo = new Images({
        fileUrl: req.cloudinary_res.secure_url,
        description: req.body.description
    })

    try {
        await filo.save(filo)
        const data = await Images.find()
        res.status(201).json({
            status: 'success',
            message: 'Successful request',
            payload: data
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message
        })
    }
}

module.exports = { getAllImages, createImage }