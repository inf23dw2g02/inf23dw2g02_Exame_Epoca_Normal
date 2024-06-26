import React from 'react';

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditDigimon = ({
    handleEditDigimon, editNome, setEditNome, editTipo1, setEditTipo1, editTipo2, setEditTipo2
}) => {
    const { id } = useParams();
    const digimon = digimon.find(digimon => (digimon.id_digimon).toString() === id);

    useEffect(() => {
        if (digimon) {
            setEditNome(digimon.nome);
            setEditTipo1(digimon.tipo1);
            setEditTipo2(digimon.tipo2);
        }
    }, [digimon, handleEditDigimon, editNome, setEditNome, editTipo1, setEditTipo1, editTipo2, setEditTipo2])

    return (
        <div>
            {digimon && <>
                <h2>Edit Digimon #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Nome:</label>
                    <input class="form-control" type="text" required value={editNome} onChange={(e) => setEditNome(e.target.value)} />
                    <label class="form-label">Tipo1:</label>
                    <input class="form-control" type="text" required value={editTipo1} onChange={(e) => setEditTipo1(e.target.value)} />
                    <label class="form-label">Tipo2:</label>
                    <input class="form-control" type="text" required value={editTipo2} onChange={(e) => setEditTipo2(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditDigimon(id)}>Submit</button>
                </form>
            </>}
            {!digimon && <>
                <p>Missing Digimon #{id}</p>
                <p>Check other <Link to='/Digimon'>Digimon</Link>!</p>
            </>}
        </div>
    )
}

export default EditDigimon;