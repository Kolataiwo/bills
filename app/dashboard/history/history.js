
"use client"
import React from "react";
import { db } from "@/config/google_firebase.config";
import { getDocs, collection, orderBy, where} from "firebase/firestore";
import { HistoryTab } from "@/components/HistoryTab";
import { useSession } from "next-auth/react";

export default function History({userId}) {
    const [loans, setloans] = React.useState([]);
    const { data: session } = useSession()
    
    // console.log("this is a session",loans);
    

    React.useEffect(() => {
        const handleFetchLoans = async () => {
            const q = collection(db, "loans");
            const onsnap = await getDocs(q, where("user", "==",userId),
                orderBy("timecreated","desc"))
            const compileResult = [];
            onsnap.docs.forEach(doc => {
                compileResult.push({
                    id: doc.id,
                    data: doc.data()
                });
                setloans(compileResult)
            })
        }
        session ? handleFetchLoans() : null
    }, [session]);

    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-sky-100 via-sky-200 to-blue-300">
            <div className="w-[380px] min-h-[400px] bg-white rounded-md p-4">
                <h1 className="text-xl text-gray-800 mb-4">My loan History</h1>
                <div className="flex flex-col gap-4">
                    {/* the historytab */}
                    {loans.map(loan => <HistoryTab
                        docId={loan.id}
                        amount={loan.data.amount} rate={loan.data.rate} duration={loan.data.duration} type="personal" timestamp={loan.data.timecreated} key={loan.id} />)}

                </div>
            </div>
        </main>
    )
}