"use client"
import {useState,useEffect} from "react";
import {TextField} from "@mui/material";

const durations = [
    {id:"7d",days:7},
    {id:"30d",days:30},
    {id:"90d",days:90}
]

export default function Borrow () {
    const [clickedRate,setclickedRate]= useState(undefined);
    const [rate, setRate] = useState(0);
    const [amount,setAmount] = useState(undefined);
    const [payBack,setpayBack] = useState(0);
    const [duration,setdurations] = useState(0)
    
    useEffect(()=>{
        if (amount>= 1){
            const interest = (rate * amount)/100;
            setpayBack(amount + interest)
        }
    },[amount,rate])

    
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 lg:py-8 px-4 md:px-12 lg:px-16 bg-gray-100">
            <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg-gray-50 p-2 md:p-6">
                <blockquote className="border-b border-gray-200 pb-3">
                    <span className="font-thin text-lg text-blue-800">Get an instant loan</span>
                </blockquote>

                <form>
                    <div className="flex flex-col gap-1">
                        <TextField
                        id="amount"
                        type="number"
                        variant="outlined"
                        placeholder="loan amount"
                        value={amount}
                        onChange={(text)=> setAmount(Number(text.target.value))}/>

                    </div>
                </form>

                <div className="border-dashed border border-blue-500 p-4 rounded-md">
                    <p className="text-blue-700 text-sm mb-3">choose loan duration</p>
                    <ul className="grid grid-cols-3  gap-2">
                        {
                            durations.map(item => <li 
                                key={item.id}
                                onClick={()=> {
                                    setclickedRate(item.id);
                                    if(item.days === 7){
                                        setRate(15.5),setdurations(7)
                                    }else if (item.days ===30){
                                        setRate(12),setdurations(30)
                                    }else if (item.days === 90){
                                        setRate(9.5),setdurations(90)
                                    }
                                }}
                                className={`h-16 flex justify-center items-center bg-blue-700 text-white text-md uppercase rounded-md`}>{item.days}days</li>)
                        }
                    </ul>

                </div>

                <div className="border-dashed border border-blue-500 p-4 rounded-md">
                        <p className="text-gray-800">interest rate for {duration} days</p>
                        <p className="text-6xl text-blue-900">{rate}%</p>
                </div>

                <div className=" flex flex-col gap-3 bg-gradient-to-b from-blue-600 to-blue-800 border-dashed border border-blue-500 p-4 rounded-md">
                        <p className="text-gray-800">you will pay back</p>
                        <p className="text-4xl text-white">N{payBack}</p>
                </div>

                <div>
                    <button className="p-2 rounded-md bg-blue-600 text-white text-xl uppercase">Get Loan</button>
                </div>

            </div>

        </main>
    )
}