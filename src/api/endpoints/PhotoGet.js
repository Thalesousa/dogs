import React, { useState } from 'react'

export default function PhotoGet() {
  const [id, setId] = useState('')

  async function handleSubmit(event){
    event.preventDefault();

    const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
    const json = await response.json()
    console.log(json)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} onChange={({target}) => setId(target.value)} />
      <button>Enviar</button>
    </form>
  )
}
