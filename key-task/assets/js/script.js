//Wait for the Document to Load this code by gpt 
document.addEventListener('DOMContentLoaded', () => {
    // for here
    // my work select the button
    const buttons = document.querySelectorAll('.key');
    const buttonMap = new Map();
    buttons.forEach(button => {
        const key = button.getAttribute('data-key');
        buttonMap.set(key, button);
    });
    //lkl zr، bngyb 8yma al5asya data-key ally fyha asm almfta7wntakd  enna 5zّnّa alzr fy al5ry6a buttonmap b7yth ykon 3ndna rab6 byn kl mfta7wzrّh.
    function simulateButtonClick(button) {
        button.classList.add('pressed');
        button.click();
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 150);
    }
    //dy dala bnst5dmha lma n7b n7aky aldgh6 3la alzr. btdyf klas pressed 3shan tghyr shkl alzr،wtdgh6 3lyh f3lyaً،wb3d 150 mlly thanya، btshyl klas pressed tany.
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const button = buttonMap.get(key);
        if (button) {
            simulateButtonClick(button);
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('pressed');
            const soundSrc = button.getAttribute('data-sound');
            const audio = new Audio(soundSrc);
            audio.play();
            console.log(`Button ${button.textContent} pressed.`);
            setTimeout(() => {
                button.classList.remove('pressed');
            }, 150);
        });
    });
});
//lkl zr، bndyf 7dth ystny lma ytdgh6 3lyh. b3d aldgh6، bndyf klas pressed، nl3b alsot almrtb6 balzr، n6b3 fy alkonsol  en alzr atdgh6،wb3d 150 mlly thanya، bnshyl klas pressed.
