import React from 'react';

const CreateTipo = ({
    tipo, handleCreateTipo, CreateNome, setCreateNome
}) => {
  return (
    <main>
      <h2>Create Tipo</h2>
      <form class="form-group" onSubmit={handleCreateTipo}>
        <label class="form-label">Tipo:</label>
        <input class="form-control" type="text" required value={CreateNome} onChange={(e) => setCreateNome(e.target.value)}/>
        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateTipo;
