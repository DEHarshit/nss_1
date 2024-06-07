import { useEffect, useState } from 'react'
import './input.css'
import { Link } from 'react-router-dom'

function Navbar({onContact}) {
  var linkstyle;
  const navbar_ele = [{title:'Home',color:'#6fc3df',path:'/'},{title:'Events',color:'#8d82c4',path:'/Events'},{title:'About Us',color:'#ec8d81',path:'/About'},{title:'Office Bearers',color:'#e7b788',path:'/Office'},{title:'Contact Us',color:'#8ea9e8',path:null}]
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
    <div className=' font-serif shadow-md' >
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
          {ele.path ? (
          <Link to={ele.path} onClick={()=>contactPressed(ele.path)}>
            <button onMouseEnter={()=>{mouseOver(id)}} onMouseLeave={()=>{mouseLeave()}} className={`p-3  rounded-xl  focus:outline-none  focus:ring-2 opacity-90` }style={{textDecoration: 'none', color: 'black',backgroundColor: hover[id] ? ele.color:'transparent'}} >{ele.title}</button>
          </Link>
          ) : ( // for contact button
          <button onClick={onContact} onMouseEnter={()=>{mouseOver(id)}} onMouseLeave={()=>{mouseLeave()}} className={`p-3  rounded-xl  focus:outline-none  focus:ring-2 opacity-90` }style={{textDecoration: 'none', color: 'black',backgroundColor: hover[id] ? ele.color:'transparent'}} >{ele.title}</button>
          )
          }
          </span>
        ))}
        </div>
      </nav>
      <div style={{ borderBottom: '1px solid #ccc' }}></div>
    </div>
  );
}

export default Navbar
