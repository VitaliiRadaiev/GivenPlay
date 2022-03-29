{
    // donan progress scripts
    let progressLine = document.querySelector('[data-line-progress]');
    if(progressLine) {
        let progress = progressLine.querySelector('span');
        progress.style.maxWidth = progressLine.dataset.lineProgress + '%';

        setTimeout(() => {
            progressLine.classList.add('show');
        }, 500)
    }

    //timer
}