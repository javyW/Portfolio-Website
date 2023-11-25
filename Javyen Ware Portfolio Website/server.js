const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
         } else {
                entry.target.classList.remove('show');
            }
        )}
    });
// The code below grabs all section tags classed 'hidden//
const hiddenElements = Document,querySelectorAll('.hidden');
hiddenElements.forEach((e1)) => observer.observe(e1);

