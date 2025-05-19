const tasks = [
    ["Add a character count live update on the input field (useEffect + useState)",
     "Highlight input when character count exceeds a threshold"],
    ["Create a dark mode toggle (useState + effect on document.body)",
     "Save dark mode setting in localStorage and load on app start"],
    ["Add a 'clear input' button using useRef",
     "Track focus state and visually indicate focused field"],
    ["Create a new page showing a live clock (useEffect with setInterval)",
     "Add timezone switcher using controlled dropdown"],
    ["Add routing to a 'Team Info' page and populate it with dummy data",
     "Allow user to edit team names (controlled form)"],
    ["Implement localStorage sync for form data (useEffect)",
     "Show toast when form is saved to localStorage"],
    ["Add a field that turns red if empty on blur (controlled + useEffect)",
     "Add submit button disabling when required field is empty"],
    ["Add a submit count tracker next to the submit button (useState)",
     "Display last submitted value using useRef"]
    ,
    ["Create a modal that opens using useRef (access DOM node directly)",
     "Close modal on outside click using useEffect"],
    ["Persist tasks in localStorage and load on mount",
     "Add a task filter (completed/pending) with useState"],
    ["Add a list of members that can be edited inline (useState)",
     "Track edit history using useRef"]
    ,
    ["Highlight the focused input in green using useRef",
     "Add a delay before focus color disappears using setTimeout"],
    ["Add random motivational quotes with refresh button (useEffect + useState)",
     "Load quote from a local JSON file"]
  ];

  export default function TaskList() {
    return (
      <ul>
        {tasks.map(([task1, task2], idx) => (
          <li key={idx} style={{ marginBottom: '1rem' }}>
            <strong>Group {idx + 1}</strong>
            <ul>
              <li>{task1}</li>
              <li>{task2}</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }