import React from 'react'
import styled from 'styled-components'

const CampoTextoEstilizado = styled.div`
    width: 509px;
    height: 72px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    label {
        padding-left: 26px;
        color: #002F52;
        font-family: sans-serif;
        font-size: 16px;
        font-weight: 700;
    }
    input {
        padding: 10px 24px;
        border-radius: 24px;
        border: 1px solid #002F52;
        &:focus{
        outline: none;
    }
    }
`

export interface AbCampoTextoProps {
    label: string
    type?: 'email' | 'text' | 'password' | 'date'
    value: string
    onChange: (value: string) => void
} 

export const AbCampoTexto = ({ label, type = 'text', value, onChange }: AbCampoTextoProps) => {
  return (
    <CampoTextoEstilizado>
        <label>{label}</label>
        <input 
            type={type} 
            value={value}
            onChange={event => onChange(event.target.value)} 
        />
    </CampoTextoEstilizado>
  )
}
