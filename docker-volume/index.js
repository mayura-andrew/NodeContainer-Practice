const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(process.env.DATA_PATH || "./data.txt");

const writeTo = (data) => {
    fs.writeFile(dataPath, data.toString()).catch(console.error);
};

fs.readFile(dataPath)
    .then((buffer) => {
        const data = buffer.toString();
        console.log(data);
        writeTo(+data + 1);
    })
    .catch((e) => {
        console.log("file not found, writing '0' to a new file");
        writeTo(0);
    });