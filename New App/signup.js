
var user = [];
function valiDateform(){
   var username = document.getElementById('username').value;
   var name = username.length
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   var alert = document.getElementById('alert');
   var div1 = document.getElementById('div1');
   var div2 = document.getElementById('div2');
   var div3 = document.getElementById('div3');
   document.getElementById('btn').addEventListener("click", (event)=>{
   event.preventDefault()
} ) ;
if (name > 12){
alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
alert.innerHTML="Username Must contain 12 character"
}
else if(password.length > 8){
   alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
   alert.innerHTML="Password Must contain 8 character"
   
}
else if (!username && !email && !password){
   alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
   alert.innerHTML="Fill these field"
 
}

else if (!username){
   
   div1.setAttribute("class","fa-solid fa-circle-exclamation text-danger" , "role" ,"alert" )
   
   
}else if (!email){
   div2.setAttribute("class","fa-solid fa-circle-exclamation text-danger" , "role" ,"alert" )
   
}
else if (!password){
   div3.setAttribute("class","fa-solid fa-circle-exclamation text-danger" , "role" ,"alert" )
   
}
else if (name > 12 && password.length > 8){
   alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
   alert.innerHTML="username 12 character, password 8"
   
   
}
else if(!email.includes("@")){
   alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
   alert.innerHTML="Enter valid email"
   
}
else{
   alert.setAttribute("class" , "alert alert-success" , "role", "alert")
   alert.innerHTML="Signup process done go for login your account"
   document.getElementById('username').value="";
   document.getElementById('email').value="";
   document.getElementById('password').value="";
   document.getElementById('login').style.display="block";
   document.getElementById('signup').style.display="none";
   user.push({
      username,
      email,
      password
   })
}



}
function ab(){
   document.getElementById('login').style.display="block";
   document.getElementById('signup').style.display="none";
   
}
function cd(){
   document.getElementById('login').style.display="none";
   document.getElementById('signup').style.display="block";
   
}

function login(){
   var loginemail = document.getElementById('loginemail').value;
   var loginpassword = document.getElementById('loginpassword').value;
   var alert = document.getElementById('alert2');
   document.getElementById("btn2").addEventListener("click" , (e)=>{
      e.preventDefault();
       
   })
   var check = false;
   user.forEach((e)=>{
      if (e.email.includes(loginemail) && e.password.includes(loginpassword)){
         check=true;
      }
   })

  if (check==true){
   //   alert.setAttribute("class" , "alert alert-success" , "role", "alert")
   //   alert.innerHTML="Successfully login"
   alert.setAttribute("class" , "alert alert-success" , "role", "alert");
   alert.innerHTML="Successfully login";
   document.getElementById('loginemail').value="";
   document.getElementById('loginpassword').value="";
  }else if(check==false) {
   alert.setAttribute("class" , "alert alert-danger" , "role", "alert");
   alert.innerHTML="Invalid email or password";
  }


}