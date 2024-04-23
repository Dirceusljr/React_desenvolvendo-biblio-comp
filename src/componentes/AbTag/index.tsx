import React from 'react'
import styled from 'styled-components'

export interface AbTagProps {
    texto: string
}

const TagEstilizada = styled.div`
    background: #EB9B00;
    padding: 24px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: 'Poppins', 'sans-serif';
    font-size: 24px;
    font-weight: 700;
`

export const AbTag = ({ texto }: AbTagProps) => {
  return (
    <TagEstilizada>
        {texto}
    </TagEstilizada>
  )
}
