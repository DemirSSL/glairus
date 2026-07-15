// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input, textarea');
    const formData = {
        name: inputs[0].value,
        email: inputs[1].value,
        message: inputs[2].value
    };

    // You can send this data to your backend or email service
    console.log('Form Data:', formData);

    // Show success message
    alert('Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
    
    // Reset form
    this.reset();
});

// Package button click handlers
document.querySelectorAll('.btn-package').forEach((button, index) => {
    button.addEventListener('click', function () {
        const packageNames = ['PROFESSIONAL', 'PREMIUM', 'ELITE'];
        alert(`${packageNames[index]} paketine başvurmak için bizimle iletişime geçin!\n\nEmail: glairus0@gmail.com\nTelefon: +90 505 446 06 23`);
    });
});

// Add scroll animation for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .package-card, .about-item').forEach(card => {
    observer.observe(card);
});

// Add fade-in animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if you add a mobile menu in future)
console.log('GLAIRUS Web Site - Instagram Yönetimi Hizmetleri');
console.log('Hoşgeldiniz! Bizimle iletişime geçin: glairus0@gmail.com');