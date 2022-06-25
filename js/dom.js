"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ready = new Promise((resolve) => {
    if (document.readyState === 'complete')
        resolve();
    else
        window.addEventListener('DOMContentLoaded', resolve, { once: true });
});
exports.default = ready;
