import React from 'react'
import Produto from './Produto'

const Produtos = ({cor}) => {
  return (
    <div>
      <h1 style={{color: cor}}>Produtos</h1>
      <Produto />
    </div>
  )
}

export default Produtos
