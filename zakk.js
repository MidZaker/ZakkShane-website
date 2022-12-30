
function sendEmail(){
     Email.send({

      Host :  "smtp.gmail.com",
      Username: "midzaker017@gmail.com",
      Password: "zakkyshane123",
      To : 'midzaker017@gmail.com',
      From: document.getElementById("email").value,
      Subject : "New Contact Form Enquiry",
      Body: "And this is the body"

     }).then(
        message =>alert("Succesfuly Submitted")
     )



}




function background1(){
    document.querySelector('.sect1').style.background = "url('/Practicezaker/Section1yellow.jpg') center center / cover";
    document.getElementById('mainword').textContent ="Yellow Season"
  
}
function background2(){
    document.querySelector('.sect1').style.background = "url('/Practicezaker/Section1.jpg') center center / cover";
    document.getElementById('mainword').textContent ="Red Season"
  

    

}
function background3(){
    document.querySelector('.sect1').style.background = "url('/Practicezaker/Section1Snow.jpg') center center / cover";
    document.getElementById('mainword').textContent ="White Season"

}