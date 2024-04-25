import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ContainerEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    color: #002F52;;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
`

const InputEstilizado = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  button {
    background: #002F52;
    border-radius: 100%;
    border: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
    font-size: 21px;
    width: 28px;
    height: 28px;
  }

  p {
    font-size: 18px;
    font-family: sans-serif;
    font-weight: 400;
    margin: 0;
  }
`

export interface AbInputQuantidadeProps {
  onChange?: (value: number) => void
}

export const AbInputQuantidade = ({onChange}: AbInputQuantidadeProps) => {

  const [quantidade, setQuantidade] = useState<number>(1)

  useEffect(() => {
    if(onChange) {
      onChange(quantidade)
    }
  }, [quantidade])

  const DiminuirQtd = () => {
    if (quantidade < 1) {
      return setQuantidade(0)
    }
    setQuantidade(quantidade - 1)
  }

  const AdicionarQtd = () => {
    return setQuantidade(quantidade + 1)
  }

  return (
    <ContainerEstilizado>
      <h4>Quantidade</h4>
      <InputEstilizado>
        <button onClick={DiminuirQtd}>-</button>
        <p>{quantidade}</p>
        <button onClick={AdicionarQtd}>+</button>
      </InputEstilizado>
    </ContainerEstilizado>
  )
}
