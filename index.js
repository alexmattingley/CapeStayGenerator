const fs = require('fs');

// function for generating basic asp file

const mainPageFunction = require('./scriptFiles/index.js');
const mainPageData = require('./dataForOutput/index.json');

fs.writeFile("./outputFiles/index.asp", mainPageFunction(mainPageData), (err) => {
    if(err) {
        return console.log(err);
    }

    console.log("created main index file");
});

// mainPageFunction(mainPageData);
