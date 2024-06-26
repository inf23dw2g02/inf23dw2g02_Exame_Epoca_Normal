import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const digimon = "http://localhost:3000/Digimon";

const request = axios.create({
    withCredentials: true,
  });

export default function Digimon() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(digimon).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteDigimon(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${digimon}/${deletedId}`).then(() => {
        regs.splice(
          regs.findIndex((el) => String(el.id_digimon) === String(deletedId)),
          1
        );
        setPosts(regs);
        setState({});
      });
    }
  
    if (!regs) return null;
    return (
      <div>
        <Link to={`/Digimon/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Digimon</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="25%">Nome</th>
              <th width="25%">Type 1</th>
              <th width="25%">Type 2</th>
              <th width="10%" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id_digimon}</td>
                <td>{reg.nome}</td>
                <td>{reg.tipo1}</td>
                <td>{reg.tipo2}</td>
                <td>
                  <Link to={`/Digimon/${reg.id_digimon}`}><button class="btn btn-primary">Update</button></Link>
                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteDigimon}>
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