async function fetchData(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

async function testFetch() {
  try {
    const user = {
      name: 'riya',
      job: 'Developer'
    };

    const url = 'https://reqres.in/api/users';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      body: JSON.stringify(user)
    };

    const userData = await fetchData(url, options);

    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

testFetch();