const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, "../../public");
        console.log("Uploading to:", uploadPath);  // Log the path
        cb(null, uploadPath);
    },
    
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Preserve original file extension
    },
});

const upload = multer({ storage: storage });

module.exports = { upload };
