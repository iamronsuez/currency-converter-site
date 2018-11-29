import React from "react";

const HeadLine = ({title, subtitle, btnActionText}) => {
  return (
    <main role="main" className="inner cover text-align-left">
    <h1 className="cover-heading">{title}</h1>
    <p className="lead">{subtitle}</p>
    <p className="lead">
      {btnActionText && <a href="#" className="btn btn-lg btn-secondary">{btnActionText}</a>}
    </p>
  </main>
  )
}

export default HeadLine
