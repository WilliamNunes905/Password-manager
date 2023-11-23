import React from "react"

type ButtonType = {
    children: React.ReactNode,
    onClick?: (event: any) => void,
}

export default function Button({ children, onClick }: ButtonType) {
  return (
    <div>
      <button
        onClick={ onClick }
      >
        { children }
      </button>
    </div>
  )
}
