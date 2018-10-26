var nodemailer = require("nodemailer"),
smtpTransport = require('nodemailer-smtp-transport');
// create reusable transport method (opens pool of SMTP connections)
var transport = nodemailer.createTransport((smtpTransport({
    host:"smtp.gmail.com",
    secure:false,
    port:465,
    service: "gmail",
    debug:true,
    auth: {
        user: "janen@askpundit.com",
        pass: "9944284697"
    }
})));

console.log("SMTP Configured");

var mailOptions = {
    from: "janen@askpundit.com", // sender address
    to: "madhan@askpundit.com", // list of receivers
    subject: "Report for Test Result", // Subject line
    text: "contains the test result for the smoke test in html file", // plaintext body
    attachments:[
        {
            'filename':'report.html',
            'filepath':'D:/CloudES Automation/Reports/report.html', 
        }
    ]
    //html: "<b>Hello world ✔</b>" // html body
};

transport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("success message :-"+ response);
    }
 
    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});

