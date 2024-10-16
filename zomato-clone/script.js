document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const restaurantList = document.getElementById('restaurant-list');

    // Animate input field on focus
    searchInput.addEventListener('focus', function () {
        searchInput.style.width = '350px';
        searchInput.style.transition = 'width 0.5s ease';
    });

    // Return to normal size when not in focus
    searchInput.addEventListener('blur', function () {
        searchInput.style.width = '300px';
    });

    // Sample data for restaurants (can be replaced with an API call)
    const restaurants = [
        {
            name: 'Spice Villa',
            cuisine: 'Indian',
            image: 'restaurant1.png',
            description: 'Best Indian food in town.'
        },
        {
            name: 'Burger House',
            cuisine: 'Fast Food',
            image: 'restaurant2.png',
            description: 'Delicious burgers and fries.'
        },
        {
            name: 'Sushi World',
            cuisine: 'Japanese',
            image: 'restaurant3.png',
            description: 'Authentic sushi and rolls.'
        },
        {
            name: 'Pizza Delight',
            cuisine: 'Italian',
            image: 'restaurant4.png',
            description: 'Tasty pizzas with various toppings.'
        },
        {
            name: 'WOW MOMO',
            cuisine: 'Chinese',
            image: 'restaurant5.png',
            description: 'Tasty momos.'
        }
    ];

    // Function to display filtered restaurants
    function displayRestaurants(filteredRestaurants) {
        restaurantList.innerHTML = ''; // Clear the current list

        // If no restaurants match the search, show a message
        if (filteredRestaurants.length === 0) {
            restaurantList.innerHTML = '<p>No restaurants found.</p>';
            return;
        }

        // Loop through the filtered list and display each restaurant
        filteredRestaurants.forEach(restaurant => {
            const restaurantItem = document.createElement('div');
            restaurantItem.classList.add('restaurant-item');
            
            restaurantItem.innerHTML = `
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <h4>${restaurant.name}</h4>
                <p>${restaurant.cuisine}</p>
                <p>${restaurant.description}</p>
            `;
            
            restaurantList.appendChild(restaurantItem);
        });
    }

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase();

        // Filter restaurants based on search text (name or cuisine)
        const filteredRestaurants = restaurants.filter(restaurant => {
            return restaurant.name.toLowerCase().includes(searchText) ||
                   restaurant.cuisine.toLowerCase().includes(searchText);
        });

        // Display filtered restaurants
        displayRestaurants(filteredRestaurants);
    });
});
