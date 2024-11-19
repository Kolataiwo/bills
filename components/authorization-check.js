"use server"
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export  async function AuthorizationCheck () {
    const session = await auth();

    //redirect to signin page if user is not defined
    
    return (
        <>
            
        </>
    )
}