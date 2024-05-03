import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="p-4 px-8 flex items-center justify-between">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'left', padding: '0 100px' }}>
                <p style={{ fontFamily: 'Poppins', color: '#FFFFFF', textAlign: 'left', padding: '20px 0 0 0' }}>
                Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>
    </div>
  )
}