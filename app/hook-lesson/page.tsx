"use client"

import { useState } from "react"
import toast from "react-hot-toast"

export default function HookLesson(){    

    const [count , setCount] = useState(100)
    const [light , setLight] = useState("Off")


    return(
        <div className="w-full h-175 bg-amber-100 text-black">
            
            <button className="bg-blue-500 text-white p-4"
            onClick={

                ()=>{
                    
                    setCount(count + 1)                    
                    //toast("Count is "+count)
                    //function rerun / re render

                }

            }
            >
                Click Me
            </button>

            <button
            onClick={
                ()=>{
                    
                    if(light == "Off"){
                        setLight("On")
                    }else{
                        setLight("Off")
                    }

                }
            }
            className="bg-red-600 p-4 text-white ml-4">
                Switch
            </button>

            <p className="text-7xl">{count}</p>
            <p className="text-7xl">{light}</p>
        </div>
    )
}