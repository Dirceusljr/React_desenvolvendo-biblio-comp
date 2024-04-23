import React from 'react'
import styled from 'styled-components'

interface CardProps {
    children: React.ReactNode
}

const CardEstilizado = styled.div`
    background: #fff;
    padding: 48px 32px 48px 48px;
    width: 551px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

// const InfoEstilizado = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 16px;
// `

// const TituloEstilizado = styled.h2`
//     color: #EB9B00;
//     font-family: Poppins;
//     font-size: 32px;
//     font-weight: 700;
// `

// const ContainerTextoEstilizado = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 40px;
// `

// const ContainerLivroEstilizado = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 24px;
// `

// const ContainerInfoLivro = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 8px;
// `

// const TituloLivro = styled.h3`
//     color: #002F52;
//     font-family: Poppins;
//     font-size: 18px;
//     font-weight: 700;
// `

// const TextoLivro = styled.p`
//     color: rgba(0, 0, 0, 0.85);
//     font-family: Poppins;
//     font-size: 14px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
// `

// const ContainerPreco = styled.div`
//     width: 154px;
//     height: 75px;
// `

// const PrecoTopo = styled.p`
//     color: rgba(0, 0, 0, 0.54);
//     font-family: Poppins;
//     font-size: 14px;
//     font-weight: 400;

// `

// const PrecoValor = styled.h4`
//     color: #002F52;
//     font-family: Poppins;
//     font-size: 36px;
//     font-weight: 700;
// `

export const AbCard = ({ children }: CardProps) => {
  return (
    <CardEstilizado>
        {/* <InfoEstilizado>
            <TituloEstilizado>Sobre o livro:</TituloEstilizado>
            <ContainerTextoEstilizado>
                <ContainerLivroEstilizado>
                    <TituloLivro>Liderança em Design</TituloLivro>
                    <ContainerInfoLivro>
                        <TextoLivro>Habilidades de gestão para alavancar sua carreira</TextoLivro>
                        <TextoLivro>Por: Vitor Zanini</TextoLivro>
                    </ContainerInfoLivro>
                </ContainerLivroEstilizado>
                <ContainerPreco>
                    <PrecoTopo>A partir de:</PrecoTopo>
                    <PrecoValor>R$ 29,90</PrecoValor>
                </ContainerPreco>
            </ContainerTextoEstilizado>
        </InfoEstilizado> */}
        { children }
    </CardEstilizado>
  )
}
