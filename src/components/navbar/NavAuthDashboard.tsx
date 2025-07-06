"use client";
import { redirect } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const NavAuthDashboard = () => {
  return (
    <Button onClick={()=>redirect("/dashboard")}>Dashboard</Button>
  )
}

export default NavAuthDashboard
