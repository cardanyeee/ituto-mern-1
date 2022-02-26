const multer = require('multer');

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    console.log(file);
    callback(null, 'uploads/');
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer
exports.upload = multer({
  storage: storage
});
