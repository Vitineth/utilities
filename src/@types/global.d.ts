// import type * as HLJSType from "highlightjs";
// import type * as LuxonType from "luxon";
// import type * as SQLFormat from 'sql-formatter';

interface Window {
    sqlFormatter: import("sql-formatter");
    luxon: import("luxon");
    hljs: import("highlightjs");
    JSONFormat: (json: string) => string;
}