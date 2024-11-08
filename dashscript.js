function fetchGitHubUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear existing users

    fetch('https://api.github.com/users?per_page=10')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const userItem = document.createElement('a');
                userItem.href = user.html_url;
                userItem.textContent = user.login;
                userItem.target = '_blank';
                userList.appendChild(userItem);
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub users:', error);
        });
}

function logout() {
    alert("Logging out...");
    // Implement further logout functionality if needed
}