"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A promise wrapping the DOMContentLoaded event which handles when its already loaded
 */
const ready = new Promise((resolve) => {
    if (document.readyState === 'complete')
        resolve();
    else
        window.addEventListener('DOMContentLoaded', resolve, { once: true });
});
exports.default = ready;
