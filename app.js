const fs = require('fs');

const makeFolder = (dir) => {
	if (!fs.existsSync(dir)) {
 		fs.mkdirSync(dir);   
    }
}

makeFolder('./test/captured');
makeFolder('./test/duplicated');
makeFolder('./test/video');

fs.readdir("./test", (err, files) => {
    if (err) throw err;
    files.forEach((item) => {
      if(item.indexOf('mp4') > -1 || item.indexOf('mov') > -1) {
        fs.rename('./test/'+item, './test/video/'+item,(err) => {
            if (err) {
                console.log(err);
                return false;
            }
        });
      } else if(item.indexOf('png') > -1 || item.indexOf('jpg') > -1) {
        if(item.indexOf('_E') > -1) {
            fs.rename('./test/'+item, './test/duplicated/'+item,(err) => {
                if (err) {
                    console.log(err);
                    return false;
                }
            });
        } else {
            fs.rename('./test/'+item, './test/captured/'+item,(err) => {
                if (err) {
                    console.log(err);
                    return false;
                }
            });
        }
      }
    });
  });