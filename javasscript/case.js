function showContent(page) {
    // Get the container elements
    var homeContent = document.getElementById('content');
    var contactsContent = document.getElementById('contacts-content');

    // Determine the content to show and hide
    var showContent;
    var hideContent;
    if (page === 'case') {
        showContent = homeContent;
        hideContent = contactsContent;
    } else if (page === 'Contacts') {
        showContent = contactsContent;
        hideContent = homeContent;
    } else if (page === 'Designers') {
        showContent = contactsContent;
        hideContent = homeContent;
    } else if (page === 'about') {
        showContent = contactsContent;
        hideContent = homeContent;
    } else {
        showContent = contactsContent;
        hideContent = homeContent;
    }

    // Hide other content and show the selected content with animation
    hideContent.classList.remove('fade-in');
    hideContent.style.display = 'none';
    showContent.style.display = 'block';
    setTimeout(function() {
        showContent.classList.add('fade-in');
    }, 10);
}

// Add the show class to trigger the fade-in-up animation when the images are in the viewport
document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.fade-in-up');
    images.forEach(function(image) {
        image.classList.add('show');
    });
});