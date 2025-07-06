"use client";
import React from 'react'
import { Button } from '../ui/button'
import { redirect } from 'next/navigation'

const NavAuthSignin = () => {
  return (
    <Button onClick={()=>redirect("/signin")}>Signin</Button>
  )
}

export default NavAuthSignin
