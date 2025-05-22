import { Link } from 'react-router-dom';

const defaultTeams = [
  { id: 1, name: "Team1" },
  { id: 2, name: "Team2" },
  { id: 3, name: "Team3" }
];

function TeamsList() {
  return (
    <div className="teams-list">
      <h2>All Teams</h2>
      <ul>
        {defaultTeams.map(team => (
          <li key={team.id}>
            <Link to={`/team-info/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamsList;
