import ready from "../dom";

function produceLanguageFormatter(
    editor: HTMLElement,
    button: HTMLButtonElement,
    formatter: (data: string) => string,
    automatic: () => boolean,
    language: string,
) {
    function process(code: string) {
        editor.innerHTML = window.hljs.highlight(language, formatter(code)).value;
        // hljs.highlightElement(editor);
    }

    button.addEventListener('click', () => {
        process(editor.innerText);
    });

    editor.addEventListener('paste', (e: Event) => {
        if (!automatic()) return;
        const blindCast = e as ClipboardEvent;
        if (!blindCast.clipboardData) return;

        process(blindCast.clipboardData.getData('text'));
        e.preventDefault();
    })
}

ready.then(() => {
    const textField = document.querySelector('#sql-input') as HTMLTextAreaElement;
    const button = document.querySelector('#sql-format') as HTMLButtonElement;
    const automatic = () => (document.querySelector('#automatic-sql') as HTMLInputElement)?.checked ?? false;
    if (textField === null) {
        console.warn('Failed to find the text field');
        return;
    }

    produceLanguageFormatter(
        textField,
        button,
        (code: string) => window.sqlFormatter.format(code),
        automatic,
        'sql',
    );
});

ready.then(() => {
    const textField = document.querySelector('#json-input') as HTMLTextAreaElement;
    const button = document.querySelector('#json-format') as HTMLButtonElement;
    const automatic = () => (document.querySelector('#automatic-json') as HTMLInputElement)?.checked ?? false;
    if (textField === null) {
        console.warn('Failed to find the text field');
        return;
    }

    produceLanguageFormatter(
        textField,
        button,
        (code: string) => window.JSONFormat(code),
        automatic,
        'json',
    );
});