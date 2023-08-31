import React from "react";
import { Form } from "semantic-ui-react";
import { useState } from "react";

function PokemonForm({submittingPokemon}) {

  const [form, setForm] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  const pokemonForm = (e) => {
    e.preventDefault()
    submittingPokemon(form)
    
  }

  const handleText = (e) =>{
    // setForm({...form, name: "New Name" })
    // form: { name: "New Name", ... }

    // setForm({...form, frontUrl: "URL" })
    // form: { name, ..., frontUrl: "URL"}
    setForm({...form, [e.target.name]: e.target.value})
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={pokemonForm}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={form.name} onChange={handleText} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={form.hp} onChange={handleText} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={form.frontUrl}
            onChange={handleText}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={form.backUrl}
            onChange={handleText}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
