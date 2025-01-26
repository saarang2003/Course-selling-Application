// npm in payment one 
//  import it 
//  create it new instance, get info from env file 
//  make function 
//  in function get userid , courseid , we find gcouse from courseid 
//  create newpurchase frmo new puchasecourse from model 
//  make new purchseCourse 
 
 //  create checkout session code for payment 
 // after getting sessiin url  now newPucrhse.paymentId  = session id
 // now make  webhook page for stripe for local 
 // now make webhook controller lookfor code in github 
 // now make all lecture free and visible 
 // now update user senrolled courses 
// now update course to add user Id to enrlled student 
// make purchase roures and ne index file 
// now go make api purchaseApi and fgo to rootreducer an store.js
// buybutton  , purchasejCourse , courseDtail s, course Progress ,  

export const createPayment = async (req, res) => {
    try {
        console.log("payment idhr hora bhai");
        // Your payment logic here
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};