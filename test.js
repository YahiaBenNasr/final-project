document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.item-category').forEach(categoryDiv => {
            if (categoryDiv.querySelector('.subtitle').textContent.includes(category)) {
                categoryDiv.style.display = 'block';
            } else {
                categoryDiv.style.display = 'none';
            }
        });
    });
});
