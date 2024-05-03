import React from 'react'

type Props = {children?: React.ReactNode;}

export default function Services({ children }: Props) {
  return (
    <div className="flex justify-between items-center px-30 py-0 relative" style={{ height: '100vh' }}>
      {children}
    </div>
  )
}