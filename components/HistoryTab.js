"use client"
import { useContext } from "react"
import { AppContext } from "@/config/context.config"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export function HistoryTab({docId,amount,rate,duration,date,type}){
    const {setLoanDocId} = useContext(AppContext);
    const router = useRouter();
    return(
            <div
            onClick={()=>{
                setLoanDocId(docId);
                router.push("/dashboard/loan-details")

            }}
             className="flex flex-col border border-blue-100 rounded-md p-3">
                <ul className="flex justify-between border-b border-blue-100 pb-2">
                    <li className="font-bold text-2xl text-gray-700">N200,00</li>
                    <li className="text-xs text-blue-500">15%</li>
                </ul>
                <ul className="flex justify-between items-center pt-2">
                    <li className="text-sm text-gray-700">{duration} days</li>
                    <li className="text-sm text-gray-700">{date}</li>
                    <li className="text-sm text-gray-700">{type}</li>
                </ul>
            </div>
   
    
    )    
   }