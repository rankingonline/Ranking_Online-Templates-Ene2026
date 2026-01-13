/* JS Template Light B */
document.addEventListener('DOMContentLoaded', () => {

    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item-b');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-b');
        const answer = item.querySelector('.faq-answer-b');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer-b').style.maxHeight = null;
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
                if (!isActive) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = null;
                }
            });
        }
    });

});
