const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentStep = 1;

nextButton.addEventListener('click', () => {
    if (currentStep < circles.length) {
        circles[currentStep - 1].classList.remove('active');
        circles[currentStep].classList.add('active');
        currentStep++;
        prevButton.disabled = false;
    }

    if (currentStep === circles.length) {
        nextButton.disabled = true;
    }
});

prevButton.addEventListener('click', () => {
    if (currentStep > 1) {
        circles[currentStep - 1].classList.remove('active');
        circles[currentStep - 2].classList.add('active');
        currentStep--;
        nextButton.disabled = false;
    }

    if (currentStep === 1) {
        prevButton.disabled = true;
    }
});
