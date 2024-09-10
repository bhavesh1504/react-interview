import React from 'react'

function InlineConditionalExpression() {
    let age =25
    let name="sudhama"
  return (
    <div>
       { age  > 26 ? (<h1> You are an old</h1>):age <=26  && name=="krishna"?(<>
{<h1>krishna</h1>}
{<h1>age is  atleast 26 or less</h1>}  </> ):(<>{<h1>Not satisy any statement</h1>}</>)}
    </div>
  )
}

export default InlineConditionalExpression