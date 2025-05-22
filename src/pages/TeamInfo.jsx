import { useState, useRef, useEffect } from "react";

function TeamInfo() {
  const [teams, setTeams] = useState(() => {
    const saved = localStorage.getItem("teams");
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "Team1" },
      { id: 2, name: "Team2" },
      { id: 3, name: "Team3" },
    ];
  });

  const [editingTeamId, setEditingTeamId] = useState(null);
  const inputRefs = useRef({});

  // Saves changes to localStorage
  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  const handleChange = (id, newName) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === id ? { ...team, name: newName } : team
      )
    );
  };

  const handleEditSave = (id) => {
    if (editingTeamId === id) {
      // Save mode
      setEditingTeamId(null);
    } else {
      // Edit mode
      setEditingTeamId(id);
      inputRefs.current[id]?.focus();
    }
  };

  return (
    <div>
      <h2>Team Info Page</h2>
      {teams.map((team) => (
        <div key={team.id} style={{ marginBottom: "10px" }}>
          <input
            ref={(el) => (inputRefs.current[team.id] = el)}
            type="text"
            value={team.name}
            onChange={(e) => handleChange(team.id, e.target.value)}
            disabled={editingTeamId !== team.id}
          />
          <button onClick={() => handleEditSave(team.id)} style={{ marginLeft: "10px" }}>
            {editingTeamId === team.id ? "Save" : "Edit"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TeamInfo;

