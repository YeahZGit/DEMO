const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const uploadController = {};

function getNewNameByHash() {
  let string = Date.now().toString().substring(5, 13)
  return crypto.createHash('md5').update(string).digest('hex');
}

uploadController.storagePicture = {
	destination: (req, file, callback) =>{
		callback(null, './uploads/pictures/');
	},
	filename: (req, file, callback) =>{
		let filenameArr = file.originalname.split('.');
		callback(null, getNewNameByHash() + '.' + filenameArr[filenameArr.length-1]);
	}
}

uploadController.handleResult = (req, res, next) =>{
	let path = req.file.path.replace('uploads','');
	res.success({url: path.replace(/\\/g,'/')});
}

module.exports = uploadController;