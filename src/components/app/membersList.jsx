import { useState, useRef } from "react";
import { Trash2, PlusCircle, Check, X, RotateCcw, RotateCw } from "lucide-react";


function MembersList() {
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Robert Johnson" },
  ]);

   const [editingId, setEditingId] = useState(null);
   const [editValue, setEditValue] = useState("");

  // inputref
  

  // History tracing using useRef
   const historyRef = useRef([]);
   const currentPositionRef = useRef(-1);

   // Function to add a new state to history
    const addToHistory = (newState) => {
    const newPosition = currentPositionRef.current + 1;
  
   // If we're not at the end of history, truncate forward history
    if (newPosition < historyRef.current.length) {
      historyRef.current = historyRef.current.slice(0, newPosition);
    }
    
    // Add new state to history
    historyRef.current.push(JSON.parse(JSON.stringify(newState)));
    currentPositionRef.current = newPosition;
  };
  
  // Initialize history if empty
  if (historyRef.current.length === 0) {
    addToHistory(members);
  }
  
  // Function to update members with history tracking
  const updateMembersWithHistory = (newMembers) => {
    setMembers(newMembers);
    addToHistory(newMembers);
  };
  
  // Undo function
  const undo = () => {
    if (currentPositionRef.current > 0) {
      currentPositionRef.current -= 1;
      setMembers(JSON.parse(JSON.stringify(historyRef.current[currentPositionRef.current])));
    }
  };
  
  // Redo function
  const redo = () => {
    if (currentPositionRef.current < historyRef.current.length - 1) {
      currentPositionRef.current += 1;
      setMembers(JSON.parse(JSON.stringify(historyRef.current[currentPositionRef.current])));
    }
  };
  
  // Start editing a member
  const startEdit = (member) => {
    setEditingId(member.id);
    setEditValue(member.name);
  };
  
  // Save the edited member
  const saveEdit = () => {
    // Don't save if the name is empty
  if (editValue.trim() === "") {
    alert("Name cannot be empty");
    return;
  }
  const updatedMembers = members.map(member => member.id === editingId ? {...member, name: editValue.trim()} : member);
  setMembers(updatedMembers)
    //  setMembers(members.map(member => 
    //   member.id === editingId 
    //     ? { ...member, name: editValue } 
    //     : member
    // ));
     updateMembersWithHistory(updatedMembers);
    setEditingId(null);
  };

  // Cancel editing
  const cancelEdit = () => {
      if (editingId && editValue === "") {
    const member = members.find(m => m.id === editingId);
    if (member && member.name === "") {
      const newMembers = members.filter(m => m.id !== editingId);
      updateMembersWithHistory(newMembers);
    }
  }
    setEditingId(null);

  };
  
  // Delete a member
  const deleteMember = (id) => {
     setMembers(members.filter(member => member.id !== id));
    updateMembersWithHistory(newMembers);
    if (editingId === id) {
      setEditingId(null);
    }
  };
  
  // Add a new member
  const addMember = () => {
    const newId = members.length > 0 
      ? Math.max(...members.map(m => m.id)) + 1 
      : 1; 
  
    const newMember = { id: newId, name: "" };
    const newMembers = ([...members, newMember])
    updateMembersWithHistory(newMembers);
    startEdit(newMember)
     // Set editing state for the new member
  setEditingId(newId);
  setEditValue(""); // ← Empty edit value
  };
  
  return (
    <div >
      <h2>Group Members</h2>

      <div >
        <button 
          onClick={undo} 
          disabled={currentPositionRef.current <= 0}        
        >
          <RotateCcw size={16}  />
          Undo
        </button>
        <button 
          onClick={redo} 
          disabled={currentPositionRef.current >= historyRef.current.length - 1}
        >
          <RotateCw size={16} />
          Redo
        </button>
      </div>
          
      <ul >
        {members.map((member) => (
          <li key={member.id}>
            {editingId === member.id ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  autoFocus
                />
                <div>
                <button 
                  onClick={saveEdit} 
                > 
                <Check size={16} />
                </button>
                <button 
                  onClick={cancelEdit} 
                >
                  <X size={16} />
                </button>
                </div>
              </div>
            ) : (
              <>
                <span  onClick={() => startEdit(member)}>
                  {member.name}
                </span>
                <div>
                  <button 
                    onClick={() => startEdit(member)} 
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => deleteMember(member.id)} 
                    >
                    <Trash2 size={16} />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      
      <button 
        onClick={addMember} 
      >
        <PlusCircle size={16} />
       Add Group Members
      </button>

       {/* History Status Indicator */}
      <div>
        History position: {currentPositionRef.current + 1} / {historyRef.current.length}
      </div> 
    </div>
  );
}

export default MembersList;