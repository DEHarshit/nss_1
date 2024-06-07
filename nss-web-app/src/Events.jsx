import { Link } from 'react-router-dom'
import beach from '/home-main2.jpeg'
const Events = () => {
    const nss_events = [
    {title:'National Camps',path:'/Events/National-camp',img:'/nationcamp.png',color:'bg-green-light'},
    {title:'Blood Donation Camp',path:'/Events/Blood-camp',img: "/bloodcamp.png",color:'bg-orange-red'},
    {title:'Special Camp',path:'/Events/Special-camp',img:'/specialcamp.png',color:'bg-cyan-blue'},
    {title:'Social Activities',path:'/Events/Social-activities',img:'/socialact.png',color:'bg-yellow-gold'}
    ]
  
    return (
        <div  style={{height:'600px', width:"100%",backgroundImage:`URL(${beach})`,backgroundPosition: 'center',backgroundSize:'cover' }}className="flex p-5 justify-center" >
            <div className={`flex grid grid-cols-1 items-center vertical-align:center justify-center absolute bg-black bg-opacity-10 rounded-lg`}>
                <div className="flex justify-center font-medium tracking-wide text-4xl text-white leading-loose antialiased ">
                    <h1>
                        <span className='text-red-700'>NSS </span> PTU Events
                    </h1>
                </div>
                <div style={{ borderBottom: '1px solid #ccc' }}></div>
                <div className="p-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {nss_events.map((ele,id)=>(   
                        <Link to ={ele.path}>
                            <div  style={{width:"300px", backgroundImage: `URL(${ele.img})`, backgroundPosition:`center`,backgroundSize: 'cover',  }}  className="relative max-w-sm min-h-40 w-full mx-auto bg-blue-500 rounded-lg shadow-md">
                                <div className={`absolute inset-0 ${ele.color} bg-opacity-50 hover:bg-transparent rounded-lg duration-[600ms] transition-all`}>
                                    <p className="flex justify-center items-center min-h-40 text-white font-semibold font-sans text-2xl hover:text-3xl duration-[250ms] transition-all subpixel-antialiased italic rounded-lg">
                                    {ele.title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div> 
        </div>
        
    )
}
export default Events;