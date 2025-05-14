/**
 * Main JavaScript file for 6126 Hillview Ave property website
 * Created for Kellie Ortiz, Samson Properties
 */

// DOM Content Loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Set min date for tour scheduling to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tour-date').min = today;
    
    // Initialize forms
    initForms();
    
    // Initialize modal
    initModal();
    
    // Initialize gallery
    initGallery();
});

/**
 * Initialize forms with event listeners
 */
function initForms() {
    // Lead capture form
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            // Don't prevent default - let Formspree handle it
            // e.preventDefault();
            
            // Show modal after a slight delay to allow form submission
            setTimeout(function() {
                showSuccessModal();
                // Reset form after submission is complete
                setTimeout(() => leadForm.reset(), 1000);
            }, 500);
        });
    }
    
    // Tour scheduling form
    const tourForm = document.getElementById('tour-form');
    if (tourForm) {
        tourForm.addEventListener('submit', function(e) {
            // Don't prevent default - let Formspree handle it
            // e.preventDefault();
            
            // Show modal after a slight delay to allow form submission
            setTimeout(function() {
                showSuccessModal();
                // Reset form after submission is complete
                setTimeout(() => tourForm.reset(), 1000);
            }, 500);
        });
    }
}

/**
 * Initialize image gallery functionality
 */
function initGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    
    // Set click event for each thumbnail
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Update main image src
                mainImage.src = this.src.replace('_ft_384', '_ft_960');
                
                // Update active state
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

/**
 * Function to change main image when thumbnail is clicked
 * @param {string} src - Source of the thumbnail image
 */
function changeMainImage(src) {
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        mainImage.src = src.replace('_ft_384', '_ft_960');
        
        // Update active state
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(t => {
            if (t.src === src) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
    }
}

/**
 * Initialize modal functionality
 */
function initModal() {
    const modal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.close');
    
    if (modal && closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

/**
 * Show success modal after form submission
 */
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

/**
 * This function would normally send data to a server
 * For demo purposes, it just simulates a delay and calls the success callback
 *
 * @param {Object} formData - Form data to submit
 * @param {string} formType - Type of form (lead or tour)
 */
function simulateFormSubmission(formData, formType) {
    // In a real implementation, you would use fetch() or XMLHttpRequest to send data to a server
    // For example:
    /*
    fetch('https://yourapi.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            formType: formType,
            formData: formData
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        showSuccessModal();
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error
    });
    */
    
    // For demo, simulate a delay
    setTimeout(function() {
        // Show success modal
        showSuccessModal();
    }, 1000);
}
