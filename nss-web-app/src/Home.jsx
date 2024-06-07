import { useState } from 'react'
import './input.css'

const Home = ()=>{
    const img=[{img:'logo.png',title: 'Domains'},{img:'classroom.svg' , title: 'Education'},{img: 'bloodconnect.svg',title:'Health'},{img: 'projects.svg',title: 'Environment'},{img:'workshop.svg',title: 'Society'},{img: 'innova.png',title:'Innovations'}]
   /*  const [logo,updateLogo] = useState(img)*/
    const section3 = [
        {color:'bg-cyan-blue',content1:'Educational Outreach',content2:"Shaping Inidia's futures",grid: 'col-span-2',left: 'left-[40%]'},
    {color:'bg-violet-purple',content1:'Collection Drive',content2:"Our Small Actions, Other's Huge Aid",grid: 'col-span-1',left:'left-[45%]'},
    {color:'bg-orange-red',content1:'TREE PLANTATION DRIVES',content2:"Planting Hope",grid:'col-span-1',left: 'left-[40%]'},
    {color:'bg-yellow-gold',content1:'Sustainable Development',content2:"sparking inspiration",grid:'col-span-2',left: 'left-[45%]'},
    {color:'bg-blue-indigo',content1:'Carbon Footprint Calculator',content2: "Enumerating for the humankind",grid: 'col-span-2',left: 'left-[43%]'},
    {color:'bg-green-light',content1:'Kaizen',content2:"The annual social extravaganza",grid:'col-span-1',left:'left-[40%]'}]
    const[hover,updateHover] =useState(false)
    return (
        <div>
            <div style={{width: 'auto',height:'650px' }} className='bg-img-home'>
                    <div className=' p-3 inline-block absolute z-10' style={{paddingTop: '6.15rem'}}>
                        {img.map((logo,index)=>(
                            <a title={logo.title} href =''>
                                <img style={{width: '70px', height: '70px', padding: '12px'}} src={logo.img} alt="" />
                            </a>
                        ))}
                    </div>
                    <div className=' w-full h-full text-white relative flex justify-center items-center flex-col'>
                        <div className=' box-border border-b-4 border-white'>
                            <h1 className='  font-semibold font-mono text-5xl leading-loose'>NSS Puducherry Technological University</h1>
                        </div>
                        <div className=' p-3 font-mono font-medium' style={{fontSize:'1.75rem'}}>
                            <h3 >Not me but you</h3>
                        </div>
                        
                    </div>
            </div>
            <div className='  grid grid-cols-3 items-center text-center justify-center'>
                {section3.map(( section)=>(
                    <div className={`bg-img1-row1 ${section. grid}`}>
                        <div className={`relative h-72 ${section.color} opacity-90  transition-all ease-in-out delay-150 hover:bg-transparent `} /* style={{backgroundColor: section.color}} */>
                            <div className={`absolute top-1/2 ${section.left} -translate-x-1/2 -translate-y-1/2  text-white `}>
                                <h1 className=' box-border border-b-2 border-white isolate  font-semibold font-mono text-2xl leading-loose'>{section.content1}</h1>
                                <p className=' font-mono isolate text-sm text-white'>{section.content2}</p>
                                
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        
        </div>
    )
}

export default Home;