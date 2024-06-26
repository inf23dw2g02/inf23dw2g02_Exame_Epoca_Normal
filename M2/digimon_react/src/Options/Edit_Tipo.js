import React from 'react';

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditDigimon = ({handleEditTipo, editNome, setEditNome
}) => {
    const { id } = useParams();
    const tipo = tipo.find(tipo => (tipo.id_tipo).toString() === id);

    useEffect(() => {
        if (tipo) {
            setEditNome(tipo.nome);
        }
    }, [tipo, handleEditTipo])

    return (
        <div>
            {tipo && <>
                <h2>Edit Tipo #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Nome:</label>
                    <input class="form-control" type="text" required value={editNome} onChange={(e) => setEditNome(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditTipo(id)}>Submit</button>
                </form>
            </>}
            {!tipo && <>
                <p>Missing Tipo #{id}</p>
                <p>Check other <Link to='/Tipos'>Tipo</Link>!</p>
            </>}
        </div>
    )
}

export default EditDigimon;