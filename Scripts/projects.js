function requestUserRepos() {
    const xhr = new XMLHttpRequest();


    // Endpoint, static username just because this is for personal project
    // Can be configured for a dynamic username
    const url = `https://api.github.com/users/tacobell1896/repos`;

    // Open connection via GET request to URL
    xhr.open('GET', url, true);

    // Process request when received
    xhr.onload = function() {

        // Parse API data to JSON
        const data = JSON.parse(this.response);
        let ul = document.getElementById('projects');
        
        // Write response to a list
        for (let i in data) {

            let li = document.createElement('li');

            li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[i].name}</p> 
                <p><strong>Description:</strong> ${data[i].description}</p> 
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
                <hr> 
            `);

            ul.appendChild(li);
        }
    }

    // Send the request to the server
    xhr.send();
}

