import React from 'react'

const btnStyles = {
  padding: `0.5rem 1rem`,
  color: `#fff`,
  borderRadius: `0.25rem`
}

export default function Button({ bg, children }) {
  return (
    <button style={{ ...btnStyles, backgroundColor: bg || 'red'}}>
      { children }
    </button>
  );
}
