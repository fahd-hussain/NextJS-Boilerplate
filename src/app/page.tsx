import React from 'react'

import clsx from 'clsx'

export default function Home() {
  return (
    <div className={clsx('w-screen h-screen', 'flex flex-col gap-2 items-center justify-center')}>
      <h1 className='text-4xl'>NextJS Template</h1>
      <p className='text-xl'>By Fahad Hussain</p>
    </div>
  )
}
