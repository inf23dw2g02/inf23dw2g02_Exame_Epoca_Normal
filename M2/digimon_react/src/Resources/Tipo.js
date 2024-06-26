import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const tipo = "http://localhost:3000/tipo";

const request = axios.create({
    withCredentials: true,
  });

export default function Tipo() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(tipo).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteTipo(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${tipo}/${deletedId}`).then(() => {
        regs.splice(
          regs.findIndex((el) => String(el.id_tipo) === String(deletedId)),
          1
        );
        setPosts(regs);
        setState({});
      });
    }
  
    if (!regs) return null;
    return (
      <div>
        <Link to={`/tipo/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Tipo</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="25%">Nome</th>
              <th width="10%" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id_digimon}</td>
                <td>{reg.nome}</td>
                <td>
                  <Link to={`/tipo/${reg.id_tipo}`}><button class="btn btn-primary">Update</button></Link>
                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteTipo}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }