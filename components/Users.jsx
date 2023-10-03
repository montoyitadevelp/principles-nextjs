"use client";
import { useEffect } from "react"

export default function Users() {
  useEffect(() => {
   alert("Users")
  }, [])
  
  return (
    <div>Users</div>
  )
}
