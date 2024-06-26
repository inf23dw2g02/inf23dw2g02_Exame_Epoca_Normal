import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const trainer = "http://localhost:3000/Trainer";

const request = axios.create({
    withCredentials: true,
  });

export default function Trainer() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(trainer).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteTrainer(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${trainer}/${deletedId}`).then(() => {
        regs.splice(
          regs.findIndex((el) => String(el.id_trainer) === String(deletedId)),
          1
        );
        setPosts(regs);
        setState({});
      });
    }
  
    if (!regs) return null;
    return (
      <div>
        <Link to={`/Trainer/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Movie</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="25%">Nome</th>
              <th width="25%">Password</th>
              <th width="25%">Is_Admin</th>
              <th width="10%" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id_trainer}</td>
                <td>{reg.nome}</td>
                <td>{reg.password}</td>
                <td>{reg.is_admin}</td>
                <td>
                  <Link to={`/Trainer/${reg.id}`}><button class="btn btn-primary">Update</button></Link>
                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id} onClick={deleteTrainer}>
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