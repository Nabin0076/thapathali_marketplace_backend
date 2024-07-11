const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, res, cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({storage: storage});

module.exports = upload;