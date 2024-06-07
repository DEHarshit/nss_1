import React, { useRef } from 'react';
import logo from '/NSS1.png'; 

const Contact = () => {
    const form = useRef();
    return (
        <div className="relative bg-gray-800 p-4">
            <div className="flex flex-wrap justify-center items-center">
                <img src={logo} alt="Logo" className="mx-32 mb-4 md:w-1/5"/>
                <div className="md:w-1/4 md:text-center text-white">
                    <p className="text-lg mb-4">
                        NATIONAL SERVICE SCHEME
                        <br/>
                        PUDUCHERRY TECHNOLOGICAL UNIVERSITY
                    </p>
                    <p className="text-lg mb-4 text-gray-400">
                        East Coast Road, Pillaichavady, Puducherry, 605014.
                        <br/>
                        📞 Phone No: 0413-2655281
                        <br/>
                        📧 Email Id: nss@ptuniv.edu.in
                    </p>
                </div>
                <div className="max-w-sm w-full mx-auto p-4 bg-red-900 rounded-lg shadow-md md:w-1/2">
                    <h2 className="text-3xl text-center text-white font-bold mb-6">Contact Us</h2>
                    <form action="">
                        <div className="mb-2">
                            <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Name: </label>
                            <input className="w-full text-white px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="text"/>
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Email: </label>
                            <input className="w-full text-white px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="email"/>
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Message: </label>
                            <textarea className="w-full text-white px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 h-20 resize-none" required/>
                        </div>
                        <button className="w-full py-2 mt-4 bg-white text-red-900 font-semibold rounded-lg shadow-md hover:bg-red-100" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
