/**
 * A promise wrapping the DOMContentLoaded event which handles when its already loaded
 */
const ready = new Promise<void>((resolve: (() => void)) => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('DOMContentLoaded', resolve, {once: true});
});

export default ready;