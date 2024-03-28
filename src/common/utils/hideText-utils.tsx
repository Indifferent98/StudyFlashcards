import { useState } from 'react'

export const hideOverflowText = (text: string) => {
  const [showAllText, setShowAllText] = useState(false)

  if (showAllText) {
    return (
      <div
        onClick={() => {
          setShowAllText(false)
        }}
        style={{ cursor: 'pointer' }}
      >
        {text}
      </div>
    )
  }
  if (text.length > 80) {
    return (
      <div
        onClick={() => {
          setShowAllText(true)
        }}
        style={{ cursor: 'pointer' }}
      >
        {text.split('').splice(0, 80)} <span style={{ fontWeight: 600 }}>...читать дальше</span>
      </div>
    )
  }
  if (text.length <= 80) {
    return <div>{text}</div>
  }
}
