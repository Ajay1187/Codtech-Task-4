import React, { useEffect, useState } from "react";

function App() {
    const [report, setReport] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/report/user123")
            .then(res => res.json())
            .then(data => setReport(data));
    }, []);

    return (
        <div>
            <h1>Productivity Report</h1>
            <ul>
                {report.map((r, index) => (
                    <li key={index}>{JSON.stringify(r.data)}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
