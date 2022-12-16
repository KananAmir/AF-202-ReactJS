import React from 'react'
import ChildComp from '../child';

const ParentComp = () => {

    let firstName = 'Jhon';
    let lastName = 'Doe';

  return (
    <div>
        <ChildComp first={firstName} last={lastName}/>
    </div>
  )
}

export default ParentComp