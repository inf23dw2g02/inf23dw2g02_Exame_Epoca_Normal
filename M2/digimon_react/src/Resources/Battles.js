import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const battles = "http://localhost:3000/Battles";

const request = axios.create({
    withCredentials: true,
  });

export default function Battles() {
    const [regs, setPosts] = React.useState(null);
    const [, setState] = React.useState(null);
  
    React.useEffect(() => {
      request.get(battles).then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    function deleteBattles(event) {
      const deletedId = event.currentTarget.dataset.index;
      request.delete(`${battles}/${deletedId}`).then(() => {
        regs.splice(
          regs.findIndex((el) => String(el.id_battles) === String(deletedId)),
          1
        );
        setPosts(regs);
        setState({});
      });
    }
  
    if (!regs) return null;
    return (
      <div>
        <Link to={`/Battles/create`}><button style={{"margin-bottom": "20px"}} class="btn btn-success">Create Battles</button></Link>
        <table style={{textAlign: "center"}} class="table table-striped table-dark" border="solid 1px">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th width="25%">Team1</th>
              <th width="25%">Team2</th>
              <th width="25%">Winner</th>
              <th width="25%">Date</th>
              <th width="10%" colspan="2"></th>
            </tr>
          </thead>
          <tbody>
            {regs.map((reg, i) => (
              <tr key={i}>
                <td>{reg.id_digimon}</td>
                <td>{reg.team1}</td>
                <td>{reg.team2}</td>
                <td>{reg.winner}</td>
                <td>{reg.date}</td>
                <td>
                  <Link to={`/Battles/${reg.id_battles}`}><button class="btn btn-primary">Update</button></Link>
                </td>
                <td>
                  <button class="btn btn-danger" data-index={reg.id_battles} onClick={deleteBattles}>
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