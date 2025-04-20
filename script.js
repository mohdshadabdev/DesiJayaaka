// Recipe data
const recipes = {
    'butter-chicken': {
        title: 'Butter Chicken',
        prepTime: '30 mins',
        cookTime: '45 mins',
        servings: 4,
        ingredients: [
            '800g chicken thighs, cut into pieces',
            '2 cups tomato puree',
            '1 cup heavy cream',
            '2 tbsp butter',
            '2 tbsp oil',
            '2 onions, finely chopped',
            '2 tbsp ginger-garlic paste',
            '2 tbsp tandoori masala',
            '1 tsp garam masala',
            'Salt to taste'
        ],
        instructions: [
            'Marinate chicken with tandoori masala for 2 hours',
            'Heat oil and butter in a pan, sauté onions until golden',
            'Add ginger-garlic paste and cook for 2 minutes',
            'Add tomato puree and cook until oil separates',
            'Add marinated chicken and cook for 15 minutes',
            'Pour in cream and simmer for 10 minutes',
            'Finish with garam masala and serve hot'
        ]
    },
    'biryani': {
        title: 'Hyderabadi Biryani',
        prepTime: '45 mins',
        cookTime: '60 mins',
        servings: 6,
        ingredients: [
            '3 cups basmati rice',
            '500g lamb or chicken',
            '2 onions, sliced',
            '1/2 cup yogurt',
            '4 tbsp biryani masala',
            'Saffron strands',
            'Whole spices (cardamom, cinnamon, cloves)',
            'Mint and coriander leaves',
            'Salt to taste'
        ],
        instructions: [
            'Marinate meat with yogurt and spices for 2 hours',
            'Cook rice with whole spices until 70% done',
            'Layer marinated meat and rice in a heavy bottom pot',
            'Add saffron milk and herbs between layers',
            'Seal the pot and cook on low heat for 45 minutes',
            'Let it rest for 10 minutes before serving'
        ]
    },
    'paneer-tikka': {
        title: 'Paneer Tikka',
        prepTime: '20 mins',
        cookTime: '15 mins',
        servings: 4,
        ingredients: [
            '400g paneer, cubed',
            '1 cup yogurt',
            '2 tbsp tikka masala',
            '1 each bell peppers, cubed',
            '1 onion, cubed',
            '2 tbsp oil',
            'Lemon juice',
            'Salt to taste'
        ],
        instructions: [
            'Mix yogurt with spices and salt',
            'Add paneer and vegetables to the marinade',
            'Let it rest for 30 minutes',
            'Thread onto skewers',
            'Grill or bake until charred and cooked through',
            'Serve with mint chutney'
        ]
    },
    'masala-dosa': {
        title: 'Masala Dosa',
        prepTime: '8 hours',
        cookTime: '30 mins',
        servings: 4,
        ingredients: [
            '2 cups rice',
            '1 cup urad dal',
            'Potato filling:',
            '4 potatoes, boiled and mashed',
            '1 onion, chopped',
            'Curry leaves',
            'Mustard seeds',
            'Turmeric powder',
            'Salt to taste'
        ],
        instructions: [
            'Soak rice and dal separately for 6 hours',
            'Grind to make smooth batter',
            'Ferment overnight',
            'Make potato filling with spices',
            'Spread batter on hot griddle in circular motion',
            'Add filling and fold',
            'Serve with coconut chutney and sambar'
        ]
    },
    'idli-sambar': {
        title: 'Idli Sambar',
        prepTime: '8 hours',
        cookTime: '40 mins',
        servings: 4,
        ingredients: [
            '1 cup urad dal',
            '2 cups rice',
            'Salt to taste',
            '1 cup toor dal',
            '1 onion, chopped',
            '1 tomato, chopped',
            '1 tsp mustard seeds',
            'Curry leaves, asafoetida, and tamarind pulp',
            'Sambhar powder, salt, oil'
        ],
        instructions: [
            'Soak rice and dal separately for 6 hours, then grind and ferment overnight.',
            'Pour batter into idli moulds and steam for 10–12 minutes.',
            'For sambhar, cook toor dal until soft.',
            'In a pan, temper mustard seeds, curry leaves, and asafoetida. Add onions and tomatoes.',
            'Add sambhar powder, salt, tamarind, and cooked dal. Simmer for 10–15 minutes.',
            'Serve hot idlis with sambhar and coconut chutney.'
        ]
    },
    'chicken-65': {
        title: 'Chicken 65',
        prepTime: '1 hour',
        cookTime: '20 mins',
        servings: 4,
        ingredients: [
            '500g boneless chicken',
            '2 tbsp corn flour',
            '1 tbsp ginger garlic paste',
            '1 tsp red chili powder',
            '1 tsp garam masala',
            'Salt to taste',
            'Curry leaves',
            'Yogurt, lemon juice, oil'
        ],
        instructions: [
            'Marinate chicken with chili powder, garam masala, ginger garlic paste, yogurt, salt, and lemon juice for 1 hour.',
            'Add corn flour to the marinated chicken.',
            'Deep fry the chicken until crispy and golden brown.',
            'In a pan, temper curry leaves and green chilies in little oil, toss fried chicken in it.',
            'Serve hot with lemon wedges.'
        ]
    },
    'aloo-paratha': {
        title: 'Aloo Paratha',
        prepTime: '30 mins',
        cookTime: '20 mins',
        servings: 4,
        ingredients: [
            '2 cups wheat flour',
            '3 boiled potatoes',
            '1 tsp cumin seeds',
            '1 tsp garam masala',
            '1 green chili (chopped)',
            'Fresh coriander',
            'Salt, ghee or oil for roasting'
        ],
        instructions: [
            'Knead a soft dough using wheat flour and water. Rest for 20 minutes.',
            'Mash boiled potatoes, mix with spices, green chili, and coriander.',
            'Roll a dough ball, stuff with potato mix, seal and roll again.',
            'Roast on a hot tawa with ghee until golden on both sides.',
            'Serve hot with curd, butter, or pickle.'
        ]
    }
    
};

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Recipe modal
const modal = document.getElementById('recipeModal');
const recipeDetails = document.getElementById('recipeDetails');
const closeModal = document.querySelector('.close-modal');

// View recipe buttons
document.querySelectorAll('.view-recipe').forEach(button => {
    button.addEventListener('click', () => {
        const recipeId = button.getAttribute('data-recipe');
        const recipe = recipes[recipeId];
        
        if (recipe) {
            let html = `
                <h2>${recipe.title}</h2>
                <div class="recipe-meta">
                    <span>Prep Time: ${recipe.prepTime}</span>
                    <span>Cook Time: ${recipe.cookTime}</span>
                    <span>Servings: ${recipe.servings}</span>
                </div>
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h3>Instructions:</h3>
                <ol>
                    ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
            `;
            
            recipeDetails.innerHTML = html;
            modal.style.display = 'block';
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Newsletter subscription
const subscribeForm = document.getElementById('subscribeForm');

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    subscribeForm.reset();
});