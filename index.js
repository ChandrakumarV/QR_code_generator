import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        "message" : "Please enter your text : ",
        "name":"text"
    }
  ])
  .then((answers) => {
    var qr_png = qr.image(answers.text);
    qr_png.pipe(fs.createWriteStream('qr_code.png'));
  })
nod