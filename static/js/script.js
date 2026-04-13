// script.js
console.log('JavaScript loaded for SFD Fashions');

// Responsive navigation toggle (if needed for mobile)
function toggleMenu() {
    const ul = document.querySelector('#header ul');
    ul.classList.toggle('active');
}

// Add event listener to search button
const searchButton = document.getElementById('searchbutton');
const searchBar = document.getElementById('searchbar');
if (searchButton && searchBar) {
    searchButton.addEventListener('click', function() {
        const query = searchBar.value;
        alert('Searching for: ' + query);
    });
}

// Filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const value = button.getAttribute('data-value');

        // Remove active class from all buttons in the same group
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.remove('active');
            }
        });
        button.classList.add('active');

        filterItems();
    });
});

function filterItems() {
    const activeSize = document.querySelector('.filter-btn[data-filter="size"].active')?.getAttribute('data-value') || 'all';
    const activeColor = document.querySelector('.filter-btn[data-filter="color"].active')?.getAttribute('data-value') || 'all';

    items.forEach(item => {
        const itemSize = item.getAttribute('data-size');
        const itemColor = item.getAttribute('data-color');

        const sizeMatch = activeSize === 'all' || itemSize === activeSize;
        const colorMatch = activeColor === 'all' || itemColor === activeColor;

        if (sizeMatch && colorMatch) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Simple responsiveness check
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        console.log('Mobile view active');
    } else {
        console.log('Desktop view active');
    }
});

// Initialize on load
window.addEventListener('load', function() {
    console.log('Page loaded');
    // Set default active buttons
    document.querySelectorAll('.filter-btn[data-value="all"]').forEach(btn => btn.classList.add('active'));
});

function showGallery(type) {
    document.getElementById('gallery-title').textContent = type;
    const imagesDiv = document.getElementById('gallery-images');
    imagesDiv.innerHTML = '';
    const items = getItemsForType(type);
    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gallery-item';
        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/200x200?text=${item.replace(' ', '+')}`;
        img.alt = item;
        const details = document.createElement('div');
        details.className = 'item-details';
        details.innerHTML = `
            <p><strong>${item}</strong></p>
            <p>Size: ${['S','M','L','XL','XXL'][index % 5]}</p>
            <p>Color: ${['White','Blue','Black','Gray','Navy'][index % 5]}</p>
            <p>Price: $${(50 + index * 10).toFixed(2)}</p>
        `;
        itemDiv.appendChild(img);
        itemDiv.appendChild(details);
        imagesDiv.appendChild(itemDiv);
    });
    document.getElementById('gallery').style.display = 'flex';
}

function getItemsForType(type) {
    const collections = {
        'Formal Shirts': [
            'White Dress Shirt', 'Blue Oxford Shirt', 'Black Tuxedo Shirt', 'Gray Formal Shirt', 'Navy Button-Down', 'Striped Dress Shirt', 'Plain White Shirt', 'Light Blue Shirt', 'Charcoal Gray Shirt', 'Burgundy Shirt', 'Cream Shirt', 'Dark Blue Shirt'
        ],
        'T-Shirts': [
            'Plain White T-Shirt', 'Black V-Neck', 'Gray Crew Neck', 'Navy Polo', 'Red Graphic Tee', 'Blue Striped Tee', 'Green Henley', 'Yellow Round Neck', 'Purple Long Sleeve', 'Orange Tank Top', 'Pink Crop Top', 'Brown Turtleneck'
        ],
        'Veshti-Shirts': [
            'White Veshti Shirt 1', 'White Veshti Shirt 2', 'White Veshti Shirt 3', 'White Veshti Shirt 4', 'White Veshti Shirt 5', 'White Veshti Shirt 6', 'White Veshti Shirt 7', 'White Veshti Shirt 8', 'White Veshti Shirt 9', 'White Veshti Shirt 10', 'White Veshti Shirt 11', 'White Veshti Shirt 12'
        ],
        'Casual-Shirts': [
            'Denim Shirt', 'Linen Shirt', 'Chambray Shirt', 'Flannel Shirt', 'Cotton Shirt', 'Hawaiian Shirt', 'Plaid Shirt', 'Striped Casual', 'Solid Color', 'Patterned Shirt', 'Short Sleeve', 'Long Sleeve Casual'
        ],
        'Printed-Shirts': [
            'Floral Print', 'Animal Print', 'Geometric Pattern', 'Abstract Art', 'Quote Print', 'Band Tee', 'Movie Print', 'Cartoon Print', 'Vintage Print', 'Modern Art', 'Inspirational', 'Humorous Print'
        ],
        'Jerseys': [
            'Soccer Jersey', 'Basketball Jersey', 'Football Jersey', 'Baseball Jersey', 'Hockey Jersey', 'Tennis Jersey', 'Golf Jersey', 'Running Jersey', 'Cycling Jersey', 'Swimming Jersey', 'Volleyball Jersey', 'Track Jersey'
        ],
        'Polo Shirts': [
            'White Polo', 'Black Polo', 'Navy Polo', 'Red Polo', 'Green Polo', 'Yellow Polo', 'Gray Polo', 'Blue Polo', 'Pink Polo', 'Purple Polo', 'Orange Polo', 'Brown Polo'
        ],
        'Denim Shirts': [
            'Light Denim', 'Dark Denim', 'Medium Denim', 'Faded Denim', 'Stonewashed', 'Raw Denim', 'Slim Fit Denim', 'Oversized Denim', 'Button-Down Denim', 'Collar Denim', 'Short Sleeve Denim', 'Long Sleeve Denim'
        ],
        'Linen Shirts': [
            'White Linen', 'Beige Linen', 'Light Blue Linen', 'Cream Linen', 'Gray Linen', 'Navy Linen', 'Olive Linen', 'Tan Linen', 'Pastel Linen', 'Striped Linen', 'Checked Linen', 'Solid Linen'
        ],
        'Cotton Shirts': [
            '100% Cotton White', 'Organic Cotton', 'Pima Cotton', 'Egyptian Cotton', 'Supima Cotton', 'Ring Spun Cotton', 'Combed Cotton', 'Carded Cotton', 'Slub Cotton', 'Jersey Cotton', 'Interlock Cotton', 'Ribbed Cotton'
        ],
        'Silk Shirts': [
            'Silk Dress Shirt', 'Silk Blouse', 'Silk Button-Down', 'Silk Polo', 'Silk Tunic', 'Silk Camisole', 'Silk Tank', 'Silk Henley', 'Silk V-Neck', 'Silk Crew Neck', 'Silk Mock Neck', 'Silk Turtleneck'
        ],
        'Wool Shirts': [
            'Wool Sweater', 'Wool Cardigan', 'Wool Blazer', 'Wool Vest', 'Wool Henley', 'Wool Polo', 'Wool Turtleneck', 'Wool V-Neck', 'Wool Crew Neck', 'Wool Mock Neck', 'Wool Button-Down', 'Wool Oxford'
        ]
    };
    return collections[type] || [];
}

function closeGallery() {
    document.getElementById('gallery').style.display = 'none';
}

let backClicked = false;

function goBack() {
    if (backClicked) {
        return;
    }
    backClicked = true;
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.close();
    }
}