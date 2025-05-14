async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  const result = users.map(function(user) {
    return `
      <div class="user">
        <h3>${user.name}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
      </div>
    `;
  }).join('');

  document.querySelector('.users').innerHTML = result;
}

getUsers();
