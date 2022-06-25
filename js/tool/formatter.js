"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = __importDefault(require("../dom"));
function produceLanguageFormatter(editor, button, formatter, automatic, language) {
    function process(code) {
        editor.innerHTML = window.hljs.highlight(language, formatter(code)).value;
        // hljs.highlightElement(editor);
    }
    button.addEventListener('click', () => {
        process(editor.innerText);
    });
    editor.addEventListener('paste', (e) => {
        if (!automatic())
            return;
        const blindCast = e;
        if (!blindCast.clipboardData)
            return;
        process(blindCast.clipboardData.getData('text'));
        e.preventDefault();
    });
}
dom_1.default.then(() => {
    const textField = document.querySelector('#sql-input');
    const button = document.querySelector('#sql-format');
    const automatic = () => { var _a, _b; return (_b = (_a = document.querySelector('#automatic-sql')) === null || _a === void 0 ? void 0 : _a.checked) !== null && _b !== void 0 ? _b : false; };
    if (textField === null) {
        console.warn('Failed to find the text field');
        return;
    }
    produceLanguageFormatter(textField, button, (code) => window.sqlFormatter.format(code), automatic, 'sql');
});
dom_1.default.then(() => {
    const textField = document.querySelector('#json-input');
    const button = document.querySelector('#json-format');
    const automatic = () => { var _a, _b; return (_b = (_a = document.querySelector('#automatic-json')) === null || _a === void 0 ? void 0 : _a.checked) !== null && _b !== void 0 ? _b : false; };
    if (textField === null) {
        console.warn('Failed to find the text field');
        return;
    }
    produceLanguageFormatter(textField, button, (code) => window.JSONFormat(code), automatic, 'json');
});
