const ready = new Promise<void>((resolve: (() => void)) => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('DOMContentLoaded', resolve, {once: true});
});

export default ready;