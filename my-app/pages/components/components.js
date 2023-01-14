import styled from 'styled-components'
import Image from 'next/image'
import squirtle from '../assets/squirtle.png'

export const Title = styled.h1`
    color:#cc2222;
    text-align:center;
    font-size:2.5em;
    margin: auto;
    margin-top: 20px;
    font-family:arial;
    font-weight:bold;
`;
export const List = styled.div`
    width: 80%;
    display: flex;
    margin: auto;
    justify-content:space-evenly;
    flex-wrap:wrap;
    background-color:#efefef
`;
export const Button = styled.button`
    margin: 40px 0 0 0;
    padding: 20px 40px;
    border:none;
    border-radius:25px;
    color:#ffffff;
    font-weight:bold;
    font-size:1.1em;
    font-family:arial;
    background-color: #cc2222;
`;
const Card = styled.div`
    margin-top:20px;
    padding: 40px 25px;
    background-color: #ddddc0;
    width:240px;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-flow:column;
    border-radius:7px;
`;
const PokeElement = styled.span`
    color:white;
    background-color:#5555ff;
    align-self:flex-start;
    font-size:1.1em;
    padding: 4px 16px;
    border-radius:12px;
`;
export function PokeCard(){
    return(
        <>
        <Card>
            <div style={{width:'100%', border:'solid 1px #ff0000'}}>
            <Image src={squirtle} width={150} height={`auto`} style={{display:'inline-block', marginBottom:'25px'}} />
            </div>
            <PokeElement>Water</PokeElement>
        </Card>
        </>
        
    )    
}