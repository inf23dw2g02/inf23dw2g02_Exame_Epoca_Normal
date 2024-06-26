import React from 'react';

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditBattle = ({handleEditBattles, editTeam1, setEditTeam1, editTeeam2, setEditTeam2, editWinner, setEditWinner, editDate, setEditDate}) => {
    const { id } = useParams();
    const battle = battle.find(battle => (battle.id_battle).toString() === id);

    useEffect(() => {
        if (battle) {
            setEditTeam1(battle.Team1); // Change setEditNome to setEditTeam1
            setEditTeam2(battle.Team2); // Change setEditTipo1 to setEditTeam2
            setEditWinner(battle.Winner); // Change setEditTipo2 to setEditWinner
            setEditDate(battle.Date); // Change setEditTipo2 to setEditWinner
        }
    }, [battle, handleEditBattles])

    return (
        <div>
            {battle && <>
                <h2>Edit Battle #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Team 1:</label>
                    <input class="form-control" type="text" required value={editTeam1} onChange={(e) => setEditTeam1(e.target.value)} />
                    <label class="form-label">Team 2:</label>
                    <input class="form-control" type="text" required value={editTeeam2} onChange={(e) => setEditTeam2(e.target.value)} />
                    <label class="form-label">Winner:</label>
                    <input class="form-control" type="text" required value={editWinner} onChange={(e) => setEditWinner(e.target.value)} />
                    <label class="form-label">Date:</label>
                    <input class="form-control" type="text" required value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditBattles(id)}>Submit</button>
                </form>
            </>}
            {!battle && <>
                <p>Missing Battle #{id}</p>
                <p>Check other <Link to='/Battles'>Battle</Link>!</p>
            </>}
        </div>
    )
}

export default EditBattle;