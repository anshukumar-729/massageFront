import { useState } from "react";
import {useEffect} from "react";

function App() {
  const [name, setName] = useState('')
  const [massage,setMassage] = useState('')
  const [n1,setn1] = useState('')
  const [n2,setn2] = useState('')
  const [n3,setn3] = useState('')
  const [n4,setn4] = useState('')
  const [n5,setn5] = useState('')
  const [n6,setn6] = useState('')
  const [n7,setn7] = useState('')
  const [n8,setn8] = useState('')
  const [n9,setn9] = useState('')
  const [n10,setn10] = useState('')
  const [n11,setn11] = useState('')
  const [n12,setn12] = useState('')
  const [n13,setn13] = useState('')
  const [n14,setn14] = useState('')
  const [n15,setn15] = useState('')
  const [n16,setn16] = useState('')
  const [n17,setn17] = useState('')
  const [n18,setn18] = useState('')
  const [n19,setn19] = useState('')
  const [n20,setn20] = useState('')
  const [n21,setn21] = useState('')
  const [n22,setn22] = useState('')
  const [n23,setn23] = useState('')
  const [n24,setn24] = useState('')
  const [n25,setn25] = useState('')
  const [n26,setn26] = useState('')
  const [n27,setn27] = useState('')
  const [n28,setn28] = useState('')
  const [n29,setn29] = useState('')
  const [n30,setn30] = useState('')
  const [n31,setn31] = useState('')
  const [m1,setm1] = useState('')
  const [m2,setm2] = useState('')
  const [m3,setm3] = useState('')
  const [m4,setm4] = useState('')
  const [m5,setm5] = useState('')
  const [m6,setm6] = useState('')
  const [m7,setm7] = useState('')
  const [m8,setm8] = useState('')
  const [m9,setm9] = useState('')
  const [m10,setm10] = useState('')
  const [m11,setm11] = useState('')
  const [m12,setm12] = useState('')
  const [m13,setm13] = useState('')
  const [m14,setm14] = useState('')
  const [m15,setm15] = useState('')
  const [m16,setm16] = useState('')
  const [m17,setm17] = useState('')
  const [m18,setm18] = useState('')
  const [m19,setm19] = useState('')
  const [m20,setm20] = useState('')
  const [m21,setm21] = useState('')
  const [m22,setm22] = useState('')
  const [m23,setm23] = useState('')
  const [m24,setm24] = useState('')
  const [m25,setm25] = useState('')
  const [m26,setm26] = useState('')
  const [m27,setm27] = useState('')
  const [m28,setm28] = useState('')
  const [m29,setm29] = useState('')
  const [m30,setm30] = useState('')
  const [m31,setm31] = useState('')

  async function getMassage(){
    try{
      const response = await fetch(
      "https://arcane-brushlands-01906.herokuapp.com/api/read",
      // "http://localhost:3020/api/read"
      )
const data = await response.json()
      
      setn1(data.result[data.result.length-1].name);
      setn2(data.result[data.result.length-2].name)     
      setn3(data.result[data.result.length-3].name)     
      setn4(data.result[data.result.length-4].name)
      setn5(data.result[data.result.length-5].name)     
      setn6(data.result[data.result.length-6].name)     
      setn7(data.result[data.result.length-7].name)     
      setn8(data.result[data.result.length-8].name)     
      setn9(data.result[data.result.length-9].name)
      setn10(data.result[data.result.length-10].name)       
      setn11(data.result[data.result.length-11].name)
       setn12(data.result[data.result.length-12].name)
       setn13(data.result[data.result.length-13].name)
       setn14(data.result[data.result.length-14].name)
       setn15(data.result[data.result.length-15].name)
       setn16(data.result[data.result.length-16].name)
       setn17(data.result[data.result.length-17].name)
       setn18(data.result[data.result.length-18].name)
       setn19(data.result[data.result.length-19].name)
       setn20(data.result[data.result.length-20].name)
       setn21(data.result[data.result.length-21].name)
       setn22(data.result[data.result.length-22].name)
       setn23(data.result[data.result.length-23].name)
       setn24(data.result[data.result.length-24].name)
       setn25(data.result[data.result.length-25].name)
       setn26(data.result[data.result.length-26].name)
       setn27(data.result[data.result.length-27].name)
       setn28(data.result[data.result.length-28].name)
       setn29(data.result[data.result.length-29].name)
       setn30(data.result[data.result.length-30].name)
       setn31(data.result[data.result.length-31].name)
      setm1(data.result[data.result.length-1].massage)
      setm2(data.result[data.result.length-2].massage)     
      setm3(data.result[data.result.length-3].massage)     
      setm4(data.result[data.result.length-4].massage)
      setm5(data.result[data.result.length-5].massage)     
      setm6(data.result[data.result.length-6].massage)     
      setm7(data.result[data.result.length-7].massage)     
      setm8(data.result[data.result.length-8].massage)     
      setm9(data.result[data.result.length-9].massage)
      setm10(data.result[data.result.length-10].massage)       
      setm11(data.result[data.result.length-11].massage)
       setm12(data.result[data.result.length-12].massage)
       setm13(data.result[data.result.length-13].massage)
       setm14(data.result[data.result.length-14].massage)
       setm15(data.result[data.result.length-15].massage)
       setm16(data.result[data.result.length-16].massage)
       setm17(data.result[data.result.length-17].massage)
       setm18(data.result[data.result.length-18].massage)
       setm19(data.result[data.result.length-19].massage)
       setm20(data.result[data.result.length-20].massage)
       setm21(data.result[data.result.length-21].massage)
       setm22(data.result[data.result.length-22].massage)
       setm23(data.result[data.result.length-23].massage)
       setm24(data.result[data.result.length-24].massage)
       setm25(data.result[data.result.length-25].massage)
       setm26(data.result[data.result.length-26].massage)
       setm27(data.result[data.result.length-27].massage)
       setm28(data.result[data.result.length-28].massage)
       setm29(data.result[data.result.length-29].massage)
       setm30(data.result[data.result.length-30].massage)
       setm31(data.result[data.result.length-31].massage)
}catch(err){
    console.log(err)
  }
}

    
 



  async function SendMassage(event) {
    
    event.preventDefault()
    try{
    const response = await fetch(
      "https://arcane-brushlands-01906.herokuapp.com/api/register",
      // "http://localhost:3020/api/register",
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
      
    }catch(err){
      console.log(err)
    }

    // const data = await response.json()
    // console.log(data)
  }
  

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
         
      
        
      
       
      </form>
    <br/>
      <button type="button" onClick={getMassage}>Refresh</button>

      <h1>Massages</h1>
   <h3> Name: {n1} , Massage: {m1}</h3>
   <h3> Name: {n2} , Massage: {m2}</h3>
   <h3> Name: {n3} , Massage: {m3}</h3>
   <h3> Name: {n4} , Massage: {m4}</h3>
   <h3> Name: {n5} , Massage: {m5}</h3>
   <h3> Name: {n6} , Massage: {m6}</h3>
   <h3> Name: {n7} , Massage: {m7}</h3>
   <h3> Name: {n8} , Massage: {m8}</h3>
   <h3> Name: {n9} , Massage: {m9}</h3>
   <h3>Name: {n10} , Massage: {m10}</h3>
   <h3>Name: {n11} , Massage: {m11}</h3>
   <h3>Name: {n12} , Massage: {m12}</h3>
   <h3>Name: {n13} , Massage: {m13}</h3>
   <h3>Name: {n14} , Massage: {m14}</h3>
   <h3>Name: {n15} , Massage: {m15}</h3>
   <h3>Name: {n16} , Massage: {m16}</h3>
   <h3>Name: {n17} , Massage: {m17}</h3>
   <h3>Name: {n18} , Massage: {m18}</h3>
   <h3>Name: {n19} , Massage: {m19}</h3>
   <h3>Name: {n20} , Massage: {m20}</h3>
   <h3>Name: {n21} , Massage: {m21}</h3>
   <h3>Name: {n22} , Massage: {m22}</h3>
   <h3>Name: {n23} , Massage: {m23}</h3>
   <h3>Name: {n24} , Massage: {m24}</h3>
   <h3>Name: {n25} , Massage: {m25}</h3>
   <h3>Name: {n26} , Massage: {m26}</h3>
   <h3>Name: {n27} , Massage: {m27}</h3>
   <h3>Name: {n28} , Massage: {m28}</h3>
   <h3>Name: {n29} , Massage: {m29}</h3>
   <h3>Name: {n30} , Massage: {m30}</h3>
   <h3>Name: {n31} , Massage: {m31}</h3>
      
    </div>
  );
}

export default App;
