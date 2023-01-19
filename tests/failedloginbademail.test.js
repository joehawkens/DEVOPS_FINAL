import fetch from 'node-fetch';


it ("Should return a token", async()=>{
    const loginResponse = await fetch('https://dev.stedi.me/login',{
        method: 'POST',
        headers:{
            'Content-Type':'application/text'
        },
        body:JSON.stringify({
            "userName":"test3334tadsfasdfasdfatt@gmasfdadsfasfdail.com",
            "password":"P@ssw0rd"
        })
    })

    expect(loginResponse.status).toBe(500);
});