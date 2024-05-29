import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const err = useRouteError()
  return (
    <div>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default ErrorPage
