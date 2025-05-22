import { Link } from 'react-router-dom';

const defaultTeams = [
  {
    id: 1,
    name: "Team1",
    members: ["Ivy", "Jack", "Kara", "Leo"],
  },
  {
    id: 2,
    name: "Team2",
    members: ["Elena", "Frank", "Grace", "Henry"],
  },
  {
    id: 3,
    name: "Team3",
    members: ["Alice", "Brian", "Harriet", "David"],
  },
];

function TeamsList() {
  return (
    <div className="teams-list">
      <h2>All Teams</h2>
      <ul>
        {defaultTeams.map(team => (
          <li key={team.id}>
            <Link to={`/team-info/${team.id}`}>{team.name}</Link>
            <ul>
              {team.members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamsList;

