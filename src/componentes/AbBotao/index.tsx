import React from 'react'
import styled, { css } from 'styled-components'

export interface AbBotaoProps {
  texto?: string,
  tipo?: 'primario' | 'secundario',
  onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) => props.tipo==='primario' ? '#EB9B00' : '#FFFFFF' };
  border: 2px solid #EB9B00;
  padding: 16px 32px;
  cursor: pointer;
  color: ${(props: AbBotaoProps) => props.tipo==='primario' ? '#FFFFFF' : '#EB9B00' };
  font-size: 20px;
  ${(props: AbBotaoProps) => props.tipo==='primario' 
    ? css`
      &:hover {
        background: #B87900;
        border: 2px solid #B87900;
      } 
    ` 
    : css`
      &:hover {
        background: #ffffff;
        border: 2px solid #B87900;
        color: #B87900;
      } 
    ` 
    }
`

export const AbBotao = ({ texto, tipo='primario' , onClick}: AbBotaoProps ) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  )
}
