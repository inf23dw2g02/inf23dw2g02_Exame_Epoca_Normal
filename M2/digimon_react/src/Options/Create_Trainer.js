import React from 'react';

const CreateTrainer = ({
    trainer, handleCreateTrainer, CreateNome, setCreateNome, createPassword, setCreatePassword, createIsADMIN, setCreateIsADMIN
}) => {
  return (
    <main>
      <h2>Create Trainer</h2>
      <form class="form-group" onSubmit={handleCreateTrainer}>
        <label class="form-label">Nome:</label>
        <input class="form-control" type="text" required value={CreateNome} onChange={(e) => setCreateNome(e.target.value)}/>

        <label class="form-label">Password:</label>	
        <input class="form-control" type="text" required value={createPassword} onChange={(e) => setCreatePassword(e.target.value)}/>

        <label class="form-label">Is Admin?:</label>	
        <input class="form-control" required value={createIsADMIN} onChange={(e) => setCreateIsADMIN(e.target.value)}/>

        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateTrainer;
