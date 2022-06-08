import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'



const Animation = () => {
  const slides = [
    { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i' },
    { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80' },
  ]
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item!== null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 2), 2000), [])
  
  return (
    <div>
      {transitions.map(({ item, props, key }) => {
        return item && <animated.div
          key={key}
          className="bg"
          style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
        />
      })}
    </div>
  )
}

export default Animation;