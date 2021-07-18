
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => {
    if (state.notification === null) {
      return null
    }
    else {
      const style = {
          border: 'solid',
          padding: 10,
          borderWidth: 1
        }
        return (
          <div style={style}>
            {state.notification}
          </div>
        )
    }
  })
return notification  
}

export default Notification