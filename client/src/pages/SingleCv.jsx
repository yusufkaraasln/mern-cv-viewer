import React from 'react'
import "./AdminPanel/admin-panel.scss"
function SingleCv({cv}) {
  return (
    <div className="single_cv">
          <span>{cv.name}</span>
          <span>{cv.school}</span>
          <span>{cv.departmant}</span>
        </div>
  )
}

export default SingleCv