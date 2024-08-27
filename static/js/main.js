// static/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const causeFilter = document.getElementById('cause-filter');

    if (searchInput && causeFilter) {
        searchInput.addEventListener('input', filterCharities);
        causeFilter.addEventListener('change', filterCharities);
    }

    function filterCharities() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCause = causeFilter.value.toLowerCase();
        const charityCards = document.querySelectorAll('.charity-card');

        charityCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const cause = card.dataset.cause.toLowerCase();
            const isVisible = name.includes(searchTerm) && (selectedCause === '' || cause === selectedCause);
            card.style.display = isVisible ? 'block' : 'none';
        });
    }
});