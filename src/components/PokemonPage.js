import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([])


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(pokemonList => setPokemonList(pokemonList))
  }, [])


  const submittingPokemon = (newPokemon) => {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name: newPokemon.name,
        hp: newPokemon.hp,
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    }) .then(res => res.json())
    .then(newPokemon => setPokemonList([...pokemonList, newPokemon]))
  }

  const [search, setSearch] = useState("")


  const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm submittingPokemon={submittingPokemon} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemonList={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
