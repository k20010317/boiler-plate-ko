const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { user } = require("./models/user"); 

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json 
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://DHCHO:Hoon!248*421@cluster0.fevip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~~~안녕하세요.')
})


app.post('/register', (req, res) => {

  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이타 베이스에 넣어준다.
  const user = new user(req.body)

  user.save((err,userInfo) => {
    if (err) return res.json({ sucess: false, err })
    return res.status(200).json({
      sucess: true
    })
  })
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})