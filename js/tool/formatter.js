"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dom_1 = __importDefault(require("../dom"));
/**
 * Constructs a new automatic language formatter which will format input put in the editor using the provider formatter
 * function. If automatic returns true then it will react to the `onpaste` action, otherwise it will wait for the format
 * button to be pressed. The formatter should return safe content without HTML as it is passed through highlight.js and
 * then inserted via innerHTML. The language provided is passed through to hljs.highlight().
 * @param editor the element which text is pasted into and which should be set
 * @param button the button which should trigger a format
 * @param formatter a function which takes un-formatted input and organises it to well-structured output
 * @param automatic if the content should be formatted on paste, this is called each time a paste takes place
 * @param language the language which should be passed through to hljs
 */
function produceLanguageFormatter(editor, button, formatter, automatic, language) {
    /**
     * Process the given piece of code, executing `formatter` with it and then colouring the output with
     * `hljs.highlight` then inserting into `editor`
     * @param code the code to be formatted and syntax highlighted
     */
    function process(code) {
        editor.innerHTML = window.hljs.highlight(language, formatter(code)).value;
    }
    // When they click the format button, process the current content
    button.addEventListener('click', () => process(editor.innerText));
    // On paste, check if it should be automatic and if so process it
    editor.addEventListener('paste', (e) => {
        if (!automatic())
            return;
        const blindCast = e;
        if (!blindCast.clipboardData)
            return;
        process(blindCast.clipboardData.getData('text'));
        // Prevents the default action which causes two pastes
        e.preventDefault();
    });
}
/**
 * Builds a formatter out of the default configuration
 * @param language
 * @param formatter the formatter which produce the nice readable code
 * @param inputID the ID of the code element marked with contenteditable
 * @param buttonID the ID of the format button to trigger a manual format
 * @param automaticID the ID of the checkbox indicating automatic format on paste
 */
function setupDefaultFormatter(language, formatter, inputID, buttonID, automaticID) {
    const textField = document.querySelector(inputID);
    const button = document.querySelector(buttonID);
    const automatic = () => { var _a, _b; return (_b = (_a = document.querySelector(automaticID)) === null || _a === void 0 ? void 0 : _a.checked) !== null && _b !== void 0 ? _b : false; };
    if (textField === null) {
        console.warn('Failed to find the text field');
        return;
    }
    produceLanguageFormatter(textField, button, formatter, automatic, language);
}
/**
 * On DOM ready set up the two formatters
 */
dom_1.default.then(() => {
    setupDefaultFormatter('sql', (code) => window.sqlFormatter.format(code), '#sql-input', '#sql-format', '#automatic-sql');
    setupDefaultFormatter('json', (code) => window.JSONFormat(code), '#json-input', '#json-format', '#automatic-json');
});
