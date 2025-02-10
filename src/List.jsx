import React from 'react'

const List = ({nome}) => {
  return (
    <div>
        <a href= {nome}>
            <li>{nome}</li>
        </a>
    </div>
  )
}

export default List
