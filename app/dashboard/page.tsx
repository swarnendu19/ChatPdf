'use client'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server'
import React from 'react'

function Page() {
    const {} = getKindeServerSession()
    
  return (
    <div>
      
    </div>
  )
}

export default Page

