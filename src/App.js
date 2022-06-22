import React from "react"
import './App.css';

function App() {

  const [formData, setFormData] = React.useState(
    {
      uName: "",
      email: "",
      password: "",
      gender:"",
      agree:false
    }
  )
  function handleChange(event){
    const {name, value,type,checked}  =event.target
    setFormData(prev=>({
      ...prev,
      [name]:type==="checkbox" ? checked : value
      
    }))

  }

  function handleSub(event){
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className="App">
      <form  onSubmit={handleSub} className='form'>
        <h1>Geting Started</h1>
        <span className="discription">create an account to continue and connect with people</span>
        <br/>
        <input type="email" name="email"value={formData.email} onChange={handleChange }placeholder="Your Email" className="input"/>
        <input type="uName" name="uName" value={formData.name } onChange={handleChange } placeholder="Your Name" className="input"/>
        <input type="password" name="password" value={formData.password} onChange={handleChange } placeholder="Creat Password" className="input"/>

        <div className="extra">
        <img src="./images/Vector.png" alt="gender"/>
        <input type="radio" id='male' value="male" onChange={handleChange }  className="input" name="gender"/>
        <label htmlFor="male">male</label>
        <input type="radio" id='female' value="female" onChange={handleChange }  className="input" name="gender"/>
        <label htmlFor="female">female</label>

        </div>
        <div className="extra">
        <input type="checkbox"  id='agree'name="agree" checked={formData.agree} onChange={handleChange}  className="input" />
        <label htmlFor="agree">I agree with these terms</label>
        </div>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
