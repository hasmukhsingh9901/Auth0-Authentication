
"use client"
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { getSession } from '@auth0/nextjs-auth0'


const page = async () => {
  // const { user, error, isLoading } = useUser()
  const session = await getSession();

  const user = session?.user
  console.log(user);

  return (
    <div className=''>
      <a href='/api/auth/login'>Login</a>
    </div>
  )
}

export default page