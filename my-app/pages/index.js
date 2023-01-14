import styled from 'styled-components'
import Image from 'next/image'
import squirtle from './assets/squirtle.png'
import {Title, List, Button, PokeCard} from './components/components'
export default function Home() {
  return (
    <>
      <Title>This is home</Title>
    <List>
      <Button>My Pokemons</Button>
      <Button>Warriors</Button>
      <Button>All Pokemons</Button>
    </List>
    <List>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
      <PokeCard/>
    </List>
    </>
  )
}
