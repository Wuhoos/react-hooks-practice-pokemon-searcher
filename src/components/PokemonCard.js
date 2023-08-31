import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  // const {name, hp, sprites} = pokemon

  const [picture, setPicture] = useState(true)

  function togglePicture(){
    setPicture(picture => !picture)
  }

  return (
    <Card>
      <div>
        <div className="image">
          {picture ? (<img onClick={togglePicture} src={pokemon.sprites.front}  />) :
            (<img onClick={togglePicture} src={pokemon.sprites.back} />)
          }
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
