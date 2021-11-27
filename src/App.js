import { useState } from "react";

function App() {
  const [name, setName] = useState('')
  const [massage,setMassage] = useState('')
  const [Myname, setMyName] = useState('')
  const [Mymassage,setMyMassage] = useState('')
  const [data,setData] = useState([])

  async function SendMassage(event) {
    event.preventDefault()
    try{
    const response = await fetch(
      "https://arcane-brushlands-01906.herokuapp.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          massage,
        }),
      }
    );
    const data = await response.json()
      console.log(data.result[data.result.length-1])
      setMyName(data.result[data.result.length - 1].name)
      setMyMassage(data.result[data.result.length - 1].massage)
      console.log(Myname)
      setData(data.result)
    }catch(err){
      console.log(err)
    }

    // const data = await response.json()
    // console.log(data)
  }
  SendMassage();

  return (
    <div className="App">
      
      <h1>Massanger</h1>

      <form onSubmit={SendMassage}>
        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={massage}
          onChange={(e) => setMassage(e.target.value)}
          type="text"
          placeholder="Massage"
        />
        
        <input type="submit" value="Send" />
         <p>
           <h1>Massages</h1>
           <h3>Name: {Myname}</h3>
           <h3>Massage: {Mymassage}</h3>
         </p>
         {data}
       
      </form>
    </div>
  );
}

export default App;
