import React from 'react';

const CreateBattle = ({
    battle, handleCreatebattle, CreateTeam1, setCreateTeam1, createTeam2, setCreateTeam2, createWinner, setCreateWinner, createDate, setCreateDate
}) => {
  return (
    <main>
      <h2>Create Movie</h2>
      <form class="form-group" onSubmit={handleCreatebattle}>
        <label class="form-label">Team 1:</label>
        <input class="form-control" type="text" required value={CreateTeam1} onChange={(e) => setCreateTeam1(e.target.value)}/>

        <label class="form-label">Team 2:</label>	
        <input class="form-control" type="text" required value={createTeam2} onChange={(e) => setCreateTeam2(e.target.value)}/>

        <label class="form-label">Winner:</label>	
        <input class="form-control" required value={createWinner} onChange={(e) => setCreateWinner(e.target.value)}/>

        <label class="form-label">Date:</label>	
        <input class="form-control" required value={createDate} onChange={(e) => setCreateDate(e.target.value)}/>
        <br/>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CreateBattle;
