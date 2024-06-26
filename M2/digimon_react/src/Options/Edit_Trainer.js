import React from 'react';

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditTrainer = ({ handleEditTrainer, editNome, setEditNome, editPassword, setEditPassword, editIsADMIN, setEditIsADMIN
}) => {
    const { id } = useParams();
    const trainer = trainer.find(trainer => (trainer.id_trainer).toString() === id);

    useEffect(() => {
        if (trainer) {
            setEditNome(trainer.nome);
            setEditPassword(trainer.password);
            setEditIsADMIN(trainer.is_admin);
        }
    }, [trainer, handleEditTrainer])

    return (
        <div>
            {trainer && <>
                <h2>Edit Trainer #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Nome:</label>
                    <input class="form-control" type="text" required value={editNome} onChange={(e) => setEditNome(e.target.value)} />
                    <label class="form-label">Password:</label>
                    <input class="form-control" type="text" required value={editPassword} onChange={(e) => setEditPassword(e.target.value)} />
                    <label class="form-label">Is Admin?:</label>
                    <input class="form-control" type="text" required value={editIsADMIN} onChange={(e) => setEditIsADMIN(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditTrainer(id)}>Submit</button>
                </form>
            </>}
            {!trainer && <>
                <p>Missing Trainer #{id}</p>
                <p>Check other <Link to='/Trainers'>Trainer</Link>!</p>
            </>}
        </div>
    )
}

export default EditTrainer;