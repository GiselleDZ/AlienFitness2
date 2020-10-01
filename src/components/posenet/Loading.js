import React from 'react'

// eslint-disable-next-line react/display-name
export default function({name, target}) {
  if (!target) {
    return <p>{`loading ${name} ...`}</p>
  }
  if (target instanceof Error) {
    return (
      <>
        <p>{`There was an error while loading ${name}`}</p>
        <font color="red">{target.message}</font>
      </>
    )
  }
  return <></>
}
