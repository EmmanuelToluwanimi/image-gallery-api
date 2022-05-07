const cloudinary = require("../config/cloudinary")

const getImgUrl = async (req, res, next) => {
    const imgData = req.body.fileUrl

    try {
        if (!req.body.fileUrl || !req.body.description) {
            throw {
                message: 'Fill required fields'
            }
        }

        const cloudinary_res = await cloudinary.uploader.upload(imgData, {
            folder: "generalle/test/" 
        })
        // console.log(cloudinary_res)
        req.cloudinary_res = cloudinary_res

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }


}

module.exports = { getImgUrl }