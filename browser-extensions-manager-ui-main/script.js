const buttons = document.querySelectorAll('.one');
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        buttons.forEach(btn=>{
            btn.classList.remove('active');
        })
        button.classList.add('active');
        
        const filterType = button.textContent.trim().toLowerCase();
        filterExtensions(filterType);
    })
})

function filterExtensions(filterType) {
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        const toggle = card.querySelector('input[type="checkbox"]');
        const isActive = toggle.checked;
        
        if (filterType === 'all') {
            card.style.display = 'flex'; 
        } else if (filterType === 'active') {
            card.style.display = isActive ? 'flex' : 'none'; 
        } else if (filterType === 'inactive') {
            card.style.display = isActive ? 'none' : 'flex'; 
        }
    });
}

const body = document.body;
const theme = document.querySelector('.rightList');
const themeIcon = document.querySelector('.rightList img');
const allCards = document.querySelectorAll('.card');
const allCardTexts = document.querySelectorAll('.card-text');
const allCardFooters = document.querySelectorAll('.card-footer');
const headerList = document.querySelector('.List');
const headerSection = document.querySelector('.header');

theme.addEventListener('click',()=>{
    body.classList.toggle('dark');
    
    if (headerList) headerList.classList.toggle('dark');
    if (headerSection) headerSection.classList.toggle('dark');
    
    allCards.forEach(card => {
        card.classList.toggle('dark');
    });
    
    allCardTexts.forEach(cardText => {
        cardText.classList.toggle('dark');
    });
    
    allCardFooters.forEach(cardFooter => {
        cardFooter.classList.toggle('dark');
    });

    if (body.classList.contains('dark')) {
        themeIcon.src = './assets/images/icon-moon.svg';
        themeIcon.alt = 'Moon';
    } else {
        themeIcon.src = './assets/images/icon-sun.svg';
        themeIcon.alt = 'Sun';
    }
});

const allToggles = document.querySelectorAll('input[type="checkbox"]');
allToggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
        const activeButton = document.querySelector('.one.active');
        if (activeButton) {
            const currentFilter = activeButton.textContent.trim().toLowerCase();
            filterExtensions(currentFilter);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const allButton = Array.from(buttons).find(btn => btn.textContent.trim().toLowerCase() === 'all');
    if (allButton) {
        allButton.classList.add('active');
    }
});


