// APIエンドポイント例
const API_URL = 'https://jsonplaceholder.typicode.com/users';

async function fetchAndDisplayUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    const ulElem = document.getElementById('user-list');
    ulElem.innerHTML = data.map((user) => `<li>${user.name}</li>`).join('');
  } catch (error) {
    document.getElementById('error-message').innerText = `Error Occurred: ${error}`;
  }
}

fetchAndDisplayUsers();
