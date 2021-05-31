process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bogdana29@gmail.com',
      pass: 'BogdanaV#45'
    } 
  });

  
var mailOptions = {
    from: 'bogdana29@gmail.com',
    to: 'bogdana29@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });