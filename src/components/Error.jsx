import React from 'react'

const Error = ({children}) => {
  return (
    <div className="bg-red-100 text-red-800 border border-red-900 text-center w-1/4 m-auto mb-3 py-3">
        <p>{children}</p>
    </div>
  )
}

export default Error