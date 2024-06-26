import React from 'react';

const CreateDigimon = ({
    digimon, handleCreateDigimon, createName, setCreateName, createTipo1, setCreateTipo1, createTipo2, setCreateTipo2
}) => {
  return (
    <main>
      <h2>Create Digimon</h2>
      <form class="form-group" onSubmit={handleCreateDigimon}>
        <label class="form-label">Name:</label>
        <input class="form-control" type="text" required value={createName} onChange={(e) => setCreateName(e.target.value)}/>

        <label class="form-label">Tipo 1:</label>	
        <input class="form-control" type="text" required value={createTipo1} onChange={(e) => setCreateTipo1(e.target.value)}/>

        <label class="form-label">Tipo 2:</label>	
        <input class="form-control" type="text" required value={createTipo2} onChange={(e) => setCreateTipo2(e.target.value)}/>

        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateDigimon;
