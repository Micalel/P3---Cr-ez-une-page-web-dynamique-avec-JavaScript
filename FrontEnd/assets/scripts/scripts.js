
async function fetchProjects () {

    let fetchProj = await fetch ("http://localhost:5678/api/works")
    .then (response => response.json())
    console.log(fetchProj);
} 

fetchProjects();

