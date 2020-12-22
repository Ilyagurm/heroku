const getFtpFile = require('./get-ftp-file')
const express = require('express')
const PORT = process.env.PORT || 5000


express()
  .get('/', async (req, res) => {
    if (req.query.key !== process.env.KEY){
        res.sendStatus(403);
        return;
      };
      await getFtpFile(req, res)
    })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
