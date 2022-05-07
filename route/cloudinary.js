const router = require('express').Router();
const { getAllImages, createImage } = require('../controllers/cloudinary');
const { getImgUrl } = require('../middleware/cloudinary');

router.get('/', getAllImages)
router.post('/', getImgUrl, createImage)

module.exports = router;