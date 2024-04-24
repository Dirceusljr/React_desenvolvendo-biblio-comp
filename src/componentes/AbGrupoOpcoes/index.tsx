import React, { useState } from 'react'
import styled from 'styled-components'

const SectionEstilizada = styled.section<{selecionado: Boolean}>`
    width: 194px;
    height: 88px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid;
    border-color: ${props => props.selecionado ? '#002F52' : '#EB9B00'};
    background: ${props => props.selecionado ? 'linear-gradient(98deg, #002F52 35.49%, #326589 165.37%)' : '#FFF'} ;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    header {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
        font-family: sans-serif;
        font-weight: 400;
        font-size: 12px;
    }
    strong {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
        font-family: sans-serif;
        font-weight: 700;
        font-size: 16px;
    }
    footer {
        color: ${props => props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};
        font-family: sans-serif;
        font-weight: 400;
        font-size: 12px;
    }
`

export interface AbGrupoOpcao {
    id: number
    titulo: string
    corpo: string
    rodape: string
}

export interface AbGrupoOpcoesProps {
    opcoes: AbGrupoOpcao[]
    valorPadrao?: AbGrupoOpcao | null
    onChange?: (opcao: AbGrupoOpcao) => void
}

export const AbGrupoOpcoes = ({opcoes, valorPadrao, onChange}: AbGrupoOpcoesProps) => {
    const [selecao, setSelecao] = useState<AbGrupoOpcao | null>(valorPadrao ?? null)

    const aoSelecionar = (opcao: AbGrupoOpcao): void => {
        setSelecao(opcao)
        if(onChange) {
            onChange(opcao)
        }
    }

  return (<>
    {opcoes.map(opcao =>         
        <SectionEstilizada 
            onClick={() => aoSelecionar(opcao)} 
            selecionado={selecao?.id == opcao.id} 
            key={opcao.id}>
            <header>
                {opcao.titulo}
            </header>
            <div>
                <strong>{opcao.corpo}</strong>
            </div>
            <footer>
                {opcao.rodape}
            </footer>
        </SectionEstilizada>)}
  </>
  )
}
