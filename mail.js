
{
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

    var maillist=[
        'krishna@doodleblue.com',
        'madhan@askpundit.com',    
    ];
    //maillist.forEach(function (to, i , array) {
    maillist.toString();

    var mailOptions = {
        from: "janen@askpundit.com", // sender address
        to: maillist, // list of receivers
        subject: "Report for Test Result", // Subject line
        text: 'contains the test result for the smoke test in html file' +
        '\n Detailed Allure reports for latest build can be found at: http://192.168.10.122:1234/#/' + //replace this url by your jenkins node ip on which test is running
        '\n Allure results has also been artifacted for all builds on jenkins instance', // plaintext body
        cc:"m.azeem@solbaacken.com",
        
        attachments:[
            {
                'filename':'report.html',
                'filepath':'./Reports/report.html', 
            }
        ]
//html: "<b>Hello world ✔</b>" // html body
    };
    //mailOptions.to = to;
console.log("mailpage");

    transport.sendMail(mailOptions, function(error){
        if(error){
            console.log('Sending to ' + toString + ' failed: ' + error);
        }else{
            console.log("Message Sent : "+ to);
        }

// if you don't want to use this transport object anymore, uncomment following line
//smtpTransport.close(); // shut down the connection pool, no more messages
    });
//});
}

