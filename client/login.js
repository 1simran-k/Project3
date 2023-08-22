document.getElementById('login-btn').addEventListener('click', e => {
    e.preventDefault() 
  const  user_email = document.getElementById('email-login').value
  const  user_password = document.getElementById('pass-login').value
    console.log(user_email);
    console.log(user_password);
    window.localStorage.setItem("mydata",user_email)
   const url = `http://localhost:8081/users`
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin','*');

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
           res=JSON.parse(xhr.responseText)
           console.log(res);
           for (let i = 0; i < res.length; i++)
           {
                if (res[i].email==user_email && res[i].password==user_password)
                {
        
                    window.open("./aproject.html");
                }                                                     
                
                else
                {
               
                    console.log("User not found");
                }         
           }
        }
    }
    xhr.send()   
})