import { useEffect, useState } from 'react'
import './input.css'

function Navbar() {
  var linkstyle;
  const navbar_ele = [{title:'Home',color:'#6fc3df'},{title:'Events',color:'#8d82c4'},{title:'About Us',color:'#ec8d81'},{title:'Office Bearers',color:'#e7b788'},{title:'Contact Us',color:'#8ea9e8'}]
  /* const [navbar , updatenavbar] = useState(navbar_ele) */
  const [hover,updateHover]=useState(navbar_ele.map(()=>false))
  const mouseOver = (id)=>{
    const result = hover.map((hover,index)=>{
      if (id === index){
        return true
      }
      else{
        return hover
      }
    })
    updateHover(result)
  }
  const mouseLeave = (id)=>{
    updateHover(hover.map(()=>false))
  }


  return (
    <div className=' font-serif'>
      <nav className=' m-2 flex flex-row flex-wrap justify-between items-center'>
        <div className='`1pl-8'>
          <a className=' inline-flex' style={{textDecoration: 'none'}} href="">
            <div className=' inline-flex'>
              <img className=' p-2' style={{width : '90px' , height : '90px'}} src="NSS1.png" alt="" />
            </div>
            <div className=" pt-6 p-3 inline-flex align-middle flex-col">
              <p className=" text-3xl" style={{ unicodeBidi: "isolate" }}>
                National Service Scheme
              </p>
              <p className="text-sm " style={{ unicodeBidi: "isolate" }}>
                Puducherry Technological University, Puducherry
              </p>
            </div>
          </a>
        </div>
        <div className=' text-lg'>
        {navbar_ele.map((ele,id)=>(          
        <span className=' p-3' key={id} >
            <button onMouseEnter={()=>{mouseOver(id)}} onMouseLeave={()=>{mouseLeave()}} className={`p-3  rounded-xl  focus:outline-none  focus:ring-2 opacity-90` }style={{textDecoration: 'none', color: 'black',backgroundColor: hover[id] ? ele.color:'transparent'}} >{ele.title}</button>
          </span>
        ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar
