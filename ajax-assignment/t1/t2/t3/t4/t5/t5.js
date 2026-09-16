const restaurantURL =
  'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';

const table = document.querySelector('table');
const dialog = document.querySelector('dialog');
const message = document.querySelector('#message');


async function getRestaurants() {
  try {
    const response = await fetch(restaurantURL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const restaurants = await response.json();

    
    restaurants.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    displayRestaurants(restaurants);

  } catch (error) {
    console.error(error);
    message.textContent = 'Failed to load restaurants.';
  }
}


function displayRestaurants(restaurants) {

  restaurants.forEach((restaurant) => {

    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = restaurant.name;

    const addressCell = document.createElement('td');
    addressCell.textContent = restaurant.address;

    row.appendChild(nameCell);
    row.appendChild(addressCell);

    
    row.addEventListener('click', () => {

      // Remove highlight from all rows
      document.querySelectorAll('table tr').forEach((item) => {
        item.classList.remove('highlight');
      });

      
      row.classList.add('highlight');

      
      getMenu(restaurant);
    });

    table.appendChild(row);
  });
}


async function getMenu(restaurant) {

  try {
    const menuURL =
      `${restaurantURL}/${restaurant._id}/daily`;

    const response = await fetch(menuURL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const menu = await response.json();

    showRestaurant(restaurant, menu);

  } catch (error) {
    console.error(error);

    showRestaurant(
      restaurant,
      null,
      "Failed to load today's menu."
    );
  }
}


function showRestaurant(restaurant, menu, errorMessage = '') {

  dialog.innerHTML = `
    <h2>${restaurant.name}</h2>

    <p>
      <strong>Address:</strong>
      ${restaurant.address}
    </p>

    <p>
      <strong>Postal code:</strong>
      ${restaurant.postalCode}
    </p>

    <p>
      <strong>City:</strong>
      ${restaurant.city}
    </p>

    <p>
      <strong>Phone:</strong>
      ${restaurant.phone}
    </p>

    <p>
      <strong>Company:</strong>
      ${restaurant.company}
    </p>

    <hr>

    <h3>Today's Menu</h3>

    <div id="menu">
      ${
        errorMessage
          ? `<p>${errorMessage}</p>`
          : createMenuHTML(menu)
      }
    </div>

    <button id="closeButton">Close</button>
  `;

  dialog.showModal();

  document.querySelector('#closeButton').addEventListener('click', () => {
    dialog.close();
  });
}


function createMenuHTML(menu) {

  if (!menu || menu.length === 0) {
    return '<p>No menu available today.</p>';
  }

  return menu.map((item) => `
    <div>
      <p><strong>${item.name || ''}</strong></p>
      <p>${item.description || ''}</p>
    </div>
  `).join('');
}


getRestaurants();