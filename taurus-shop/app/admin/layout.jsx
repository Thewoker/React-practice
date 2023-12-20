'use client'
import React from 'react'
import { useAuthContext } from "@/contexts/AuthContext"


const AdminLayout = ({ children, login }) => {

    const { user }= useAuthContext()

    return (
        <>
            {
                user?.logged ?
                    children :
                    login
            }
        </>
    )
}

export default AdminLayout