document.getElementById('btn').addEventListener('click', e =>{
    e.preventDefault()

    const user_name = document.getElementById('name-sign').value
    const user_email  = document.getElementById('email-sign').value
    const user_password = document.getElementById('pass').value

    const user = {
        name: user_name,
        email:user_email,
        password:user_password
    }
    window.localStorage.setItem("mydata",user_email);
    const url = `http://localhost:8081/users`
    const xhr = new XMLHttpRequest()
    xhr.open('POST',url)
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.setRequestHeader('Access-Control-Allow-origin', '*')

    
    xhr.onreadystatechange = () =>
    {
        if(xhr.status==200 && xhr.readyState == 4)
        {
            console.log(user)
            console.log(xhr.responseText)
            window.open("./aproject.html");
        }
    }
    xhr.send(JSON.stringify(user))
})


