const express = require('express')
const app = express()




function greet() {
    let date=new Date();
    let day=date.getDay();


    if(day==1){
        return{
            "dayMessage": "Happy Monday! Start your day with a fresh mind and a smile on your face."
        }
    }
    else if(day==5){
        return{
            "dayMessage": "Happy Friday! Enjoy the weekend with a cup of coffee and a good book."
        }
    }
    else{
        return{
            "dayMessage": "Good Morning! Have a great day ahead."
        }
    }
}


app.get('/assistant/greet', async(req, res) => {
   try {
       let user = req.query.name
       let message = greet()
       console.log(message)
       let welcomeMessage = `WelcomeMessage":"Hello, ${user} welcome to our assistant app!`
       message["welcomeMessage"]=welcomeMessage
       console.log(message)

       res.status(200).json(message)

   } catch (error) {
    res.status(500).json({ status:false,message:"Internal Server Error"})
   }
})


app.listen(3000, () => {
    try {
        console.log("Working Successfully")
    } catch (error) {
        console.log(error)
    }
})

