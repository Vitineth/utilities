declare interface SQLFormatter {
    format: (v: string) => string,
}

declare interface HighlightJSType {
    highlightAll: () => void;
    highlightElement: (node: Node | Element) => void;
    highlight: (language: string, code: string) => { code: string, illegal: boolean, language: string, relevance: number, value: string }
}

declare type JSONFormatType = (json: string) => string;
declare const hljs: HighlightJSType;
declare const sqlFormatter: SQLFormatter;
declare const JSONFormat: JSONFormatType;

const tzd = [["Africa/Abidjan", "GMT"], ["Africa/Accra", "GMT"], ["Africa/Addis_Ababa", "EAT"], ["Africa/Algiers", "CET"], ["Africa/Asmara", "EAT"], ["Africa/Asmera", "EAT"], ["Africa/Bamako", "GMT"], ["Africa/Bangui", "WAT"], ["Africa/Banjul", "GMT"], ["Africa/Bissau", "GMT"], ["Africa/Blantyre", "CAT"], ["Africa/Brazzaville", "WAT"], ["Africa/Bujumbura", "CAT"], ["Africa/Cairo", "EET"], ["Africa/Casablanca"], ["Africa/Ceuta", "CET", "CEST"], ["Africa/Conakry", "GMT"], ["Africa/Dakar", "GMT"], ["Africa/Dar_es_Salaam", "EAT"], ["Africa/Djibouti", "EAT"], ["Africa/Douala", "WAT"], ["Africa/El_Aaiun"], ["Africa/Freetown", "GMT"], ["Africa/Gaborone", "CAT"], ["Africa/Harare", "CAT"], ["Africa/Johannesburg", "SAST"], ["Africa/Juba", "CAT"], ["Africa/Kampala", "EAT"], ["Africa/Khartoum", "CAT"], ["Africa/Kigali", "CAT"], ["Africa/Kinshasa", "WAT"], ["Africa/Lagos", "WAT"], ["Africa/Libreville", "WAT"], ["Africa/Lome", "GMT"], ["Africa/Luanda", "WAT"], ["Africa/Lubumbashi", "CAT"], ["Africa/Lusaka", "CAT"], ["Africa/Malabo", "WAT"], ["Africa/Maputo", "CAT"], ["Africa/Maseru", "SAST"], ["Africa/Mbabane", "SAST"], ["Africa/Mogadishu", "EAT"], ["Africa/Monrovia", "GMT"], ["Africa/Nairobi", "EAT"], ["Africa/Ndjamena", "WAT"], ["Africa/Niamey", "WAT"], ["Africa/Nouakchott", "GMT"], ["Africa/Ouagadougou", "GMT"], ["Africa/Porto-Novo", "WAT"], ["Africa/Sao_Tome", "GMT"], ["Africa/Timbuktu", "GMT"], ["Africa/Tripoli", "EET"], ["Africa/Tunis", "CET"], ["Africa/Windhoek", "CAT"], ["America/Adak", "HST", "HDT"], ["America/Anchorage", "AKST", "AKDT"], ["America/Anguilla", "AST"], ["America/Antigua", "AST"], ["America/Araguaina"], ["America/Argentina/Buenos_Aires"], ["America/Argentina/Catamarca"], ["America/Argentina/ComodRivadavia"], ["America/Argentina/Cordoba"], ["America/Argentina/Jujuy"], ["America/Argentina/La_Rioja"], ["America/Argentina/Mendoza"], ["America/Argentina/Rio_Gallegos"], ["America/Argentina/Salta"], ["America/Argentina/San_Juan"], ["America/Argentina/San_Luis"], ["America/Argentina/Tucuman"], ["America/Argentina/Ushuaia"], ["America/Aruba", "AST"], ["America/Asuncion"], ["America/Atikokan", "EST"], ["America/Atka", "HST", "HDT"], ["America/Bahia"], ["America/Bahia_Banderas", "CST", "CDT"], ["America/Barbados", "AST"], ["America/Belem"], ["America/Belize", "CST"], ["America/Blanc-Sablon", "AST"], ["America/Boa_Vista"], ["America/Bogota"], ["America/Boise", "MST", "MDT"], ["America/Buenos_Aires"], ["America/Cambridge_Bay", "MST", "MDT"], ["America/Campo_Grande"], ["America/Cancun", "EST"], ["America/Caracas"], ["America/Catamarca"], ["America/Cayenne"], ["America/Cayman", "EST"], ["America/Chicago", "CST", "CDT"], ["America/Chihuahua", "MST", "MDT"], ["America/Coral_Harbour", "EST"], ["America/Cordoba"], ["America/Costa_Rica", "CST"], ["America/Creston", "MST"], ["America/Cuiaba"], ["America/Curacao", "AST"], ["America/Danmarkshavn", "GMT"], ["America/Dawson", "MST"], ["America/Dawson_Creek", "MST"], ["America/Denver", "MST", "MDT"], ["America/Detroit", "EST", "EDT"], ["America/Dominica", "AST"], ["America/Edmonton", "MST", "MDT"], ["America/Eirunepe"], ["America/El_Salvador", "CST"], ["America/Ensenada", "PST", "PDT"], ["America/Fort_Nelson", "MST"], ["America/Fort_Wayne", "EST", "EDT"], ["America/Fortaleza"], ["America/Glace_Bay", "AST", "ADT"], ["America/Godthab"], ["America/Goose_Bay", "AST", "ADT"], ["America/Grand_Turk", "EST", "EDT"], ["America/Grenada", "AST"], ["America/Guadeloupe", "AST"], ["America/Guatemala", "CST"], ["America/Guayaquil"], ["America/Guyana"], ["America/Halifax", "AST", "ADT"], ["America/Havana", "CST", "CDT"], ["America/Hermosillo", "MST"], ["America/Indiana/Indianapolis", "EST", "EDT"], ["America/Indiana/Knox", "CST", "CDT"], ["America/Indiana/Marengo", "EST", "EDT"], ["America/Indiana/Petersburg", "EST", "EDT"], ["America/Indiana/Tell_City", "CST", "CDT"], ["America/Indiana/Vevay", "EST", "EDT"], ["America/Indiana/Vincennes", "EST", "EDT"], ["America/Indiana/Winamac", "EST", "EDT"], ["America/Indianapolis", "EST", "EDT"], ["America/Inuvik", "MST", "MDT"], ["America/Iqaluit", "EST", "EDT"], ["America/Jamaica", "EST"], ["America/Jujuy"], ["America/Juneau", "AKST", "AKDT"], ["America/Kentucky/Louisville", "EST", "EDT"], ["America/Kentucky/Monticello", "EST", "EDT"], ["America/Knox_IN", "CST", "CDT"], ["America/Kralendijk", "AST"], ["America/La_Paz"], ["America/Lima"], ["America/Los_Angeles", "PST", "PDT"], ["America/Louisville", "EST", "EDT"], ["America/Lower_Princes", "AST"], ["America/Maceio"], ["America/Managua", "CST"], ["America/Manaus"], ["America/Marigot", "AST"], ["America/Martinique", "AST"], ["America/Matamoros", "CST", "CDT"], ["America/Mazatlan", "MST", "MDT"], ["America/Mendoza"], ["America/Menominee", "CST", "CDT"], ["America/Merida", "CST", "CDT"], ["America/Metlakatla", "AKST", "AKDT"], ["America/Mexico_City", "CST", "CDT"], ["America/Miquelon"], ["America/Moncton", "AST", "ADT"], ["America/Monterrey", "CST", "CDT"], ["America/Montevideo"], ["America/Montreal", "EST", "EDT"], ["America/Montserrat", "AST"], ["America/Nassau", "EST", "EDT"], ["America/New_York", "EST", "EDT"], ["America/Nipigon", "EST", "EDT"], ["America/Nome", "AKST", "AKDT"], ["America/Noronha"], ["America/North_Dakota/Beulah", "CST", "CDT"], ["America/North_Dakota/Center", "CST", "CDT"], ["America/North_Dakota/New_Salem", "CST", "CDT"], ["America/Nuuk"], ["America/Ojinaga", "MST", "MDT"], ["America/Panama", "EST"], ["America/Pangnirtung", "EST", "EDT"], ["America/Paramaribo"], ["America/Phoenix", "MST"], ["America/Port-au-Prince", "EST", "EDT"], ["America/Port_of_Spain", "AST"], ["America/Porto_Acre"], ["America/Porto_Velho"], ["America/Puerto_Rico", "AST"], ["America/Punta_Arenas"], ["America/Rainy_River", "CST", "CDT"], ["America/Rankin_Inlet", "CST", "CDT"], ["America/Recife"], ["America/Regina", "CST"], ["America/Resolute", "CST", "CDT"], ["America/Rio_Branco"], ["America/Rosario"], ["America/Santa_Isabel", "PST", "PDT"], ["America/Santarem"], ["America/Santiago"], ["America/Santo_Domingo", "AST"], ["America/Sao_Paulo"], ["America/Scoresbysund"], ["America/Shiprock", "MST", "MDT"], ["America/Sitka", "AKST", "AKDT"], ["America/St_Barthelemy", "AST"], ["America/St_Johns", "NST", "NDT"], ["America/St_Kitts", "AST"], ["America/St_Lucia", "AST"], ["America/St_Thomas", "AST"], ["America/St_Vincent", "AST"], ["America/Swift_Current", "CST"], ["America/Tegucigalpa", "CST"], ["America/Thule", "AST", "ADT"], ["America/Thunder_Bay", "EST", "EDT"], ["America/Tijuana", "PST", "PDT"], ["America/Toronto", "EST", "EDT"], ["America/Tortola", "AST"], ["America/Vancouver", "PST", "PDT"], ["America/Virgin", "AST"], ["America/Whitehorse", "MST"], ["America/Winnipeg", "CST", "CDT"], ["America/Yakutat", "AKST", "AKDT"], ["America/Yellowknife", "MST", "MDT"], ["Antarctica/Casey"], ["Antarctica/Davis"], ["Antarctica/DumontDUrville"], ["Antarctica/Macquarie", "AEST", "AEDT"], ["Antarctica/Mawson"], ["Antarctica/McMurdo", "NZST", "NZDT"], ["Antarctica/Palmer"], ["Antarctica/Rothera"], ["Antarctica/South_Pole", "NZST", "NZDT"], ["Antarctica/Syowa"], ["Antarctica/Troll"], ["Antarctica/Vostok"], ["Arctic/Longyearbyen", "CET", "CEST"], ["Asia/Aden"], ["Asia/Almaty"], ["Asia/Amman", "EET", "EEST"], ["Asia/Anadyr"], ["Asia/Aqtau"], ["Asia/Aqtobe"], ["Asia/Ashgabat"], ["Asia/Ashkhabad"], ["Asia/Atyrau"], ["Asia/Baghdad"], ["Asia/Bahrain"], ["Asia/Baku"], ["Asia/Bangkok"], ["Asia/Barnaul"], ["Asia/Beirut", "EET", "EEST"], ["Asia/Bishkek"], ["Asia/Brunei"], ["Asia/Calcutta", "IST"], ["Asia/Chita"], ["Asia/Choibalsan"], ["Asia/Chongqing", "CST"], ["Asia/Chungking", "CST"], ["Asia/Colombo"], ["Asia/Dacca"], ["Asia/Damascus", "EET", "EEST"], ["Asia/Dhaka"], ["Asia/Dili"], ["Asia/Dubai"], ["Asia/Dushanbe"], ["Asia/Famagusta", "EET", "EEST"], ["Asia/Gaza", "EET", "EEST"], ["Asia/Harbin", "CST"], ["Asia/Hebron", "EET", "EEST"], ["Asia/Ho_Chi_Minh"], ["Asia/Hong_Kong", "HKT"], ["Asia/Hovd"], ["Asia/Irkutsk"], ["Asia/Istanbul"], ["Asia/Jakarta", "WIB"], ["Asia/Jayapura", "WIT"], ["Asia/Jerusalem", "IST", "IDT"], ["Asia/Kabul"], ["Asia/Kamchatka"], ["Asia/Karachi", "PKT"], ["Asia/Kashgar"], ["Asia/Kathmandu"], ["Asia/Katmandu"], ["Asia/Khandyga"], ["Asia/Kolkata", "IST"], ["Asia/Krasnoyarsk"], ["Asia/Kuala_Lumpur"], ["Asia/Kuching"], ["Asia/Kuwait"], ["Asia/Macao", "CST"], ["Asia/Macau", "CST"], ["Asia/Magadan"], ["Asia/Makassar", "WITA"], ["Asia/Manila", "PST"], ["Asia/Muscat"], ["Asia/Nicosia", "EET", "EEST"], ["Asia/Novokuznetsk"], ["Asia/Novosibirsk"], ["Asia/Omsk"], ["Asia/Oral"], ["Asia/Phnom_Penh"], ["Asia/Pontianak", "WIB"], ["Asia/Pyongyang", "KST"], ["Asia/Qatar"], ["Asia/Qostanay"], ["Asia/Qyzylorda"], ["Asia/Rangoon"], ["Asia/Riyadh"], ["Asia/Saigon"], ["Asia/Sakhalin"], ["Asia/Samarkand"], ["Asia/Seoul", "KST"], ["Asia/Shanghai", "CST"], ["Asia/Singapore"], ["Asia/Srednekolymsk"], ["Asia/Taipei", "CST"], ["Asia/Tashkent"], ["Asia/Tbilisi"], ["Asia/Tehran"], ["Asia/Tel_Aviv", "IST", "IDT"], ["Asia/Thimbu"], ["Asia/Thimphu"], ["Asia/Tokyo", "JST"], ["Asia/Tomsk"], ["Asia/Ujung_Pandang", "WITA"], ["Asia/Ulaanbaatar"], ["Asia/Ulan_Bator"], ["Asia/Urumqi"], ["Asia/Ust-Nera"], ["Asia/Vientiane"], ["Asia/Vladivostok"], ["Asia/Yakutsk"], ["Asia/Yangon"], ["Asia/Yekaterinburg"], ["Asia/Yerevan"], ["Atlantic/Azores"], ["Atlantic/Bermuda", "AST", "ADT"], ["Atlantic/Canary", "WET", "WEST"], ["Atlantic/Cape_Verde"], ["Atlantic/Faeroe", "WET", "WEST"], ["Atlantic/Faroe", "WET", "WEST"], ["Atlantic/Jan_Mayen", "CET", "CEST"], ["Atlantic/Madeira", "WET", "WEST"], ["Atlantic/Reykjavik", "GMT"], ["Atlantic/South_Georgia"], ["Atlantic/St_Helena", "GMT"], ["Atlantic/Stanley"], ["Australia/ACT", "AEST", "AEDT"], ["Australia/Adelaide", "ACST", "ACDT"], ["Australia/Brisbane", "AEST"], ["Australia/Broken_Hill", "ACST", "ACDT"], ["Australia/Canberra", "AEST", "AEDT"], ["Australia/Currie", "AEST", "AEDT"], ["Australia/Darwin", "ACST"], ["Australia/Eucla"], ["Australia/Hobart", "AEST", "AEDT"], ["Australia/LHI"], ["Australia/Lindeman", "AEST"], ["Australia/Lord_Howe"], ["Australia/Melbourne", "AEST", "AEDT"], ["Australia/North", "ACST"], ["Australia/NSW", "AEST", "AEDT"], ["Australia/Perth", "AWST"], ["Australia/Queensland", "AEST"], ["Australia/South", "ACST", "ACDT"], ["Australia/Sydney", "AEST", "AEDT"], ["Australia/Tasmania", "AEST", "AEDT"], ["Australia/Victoria", "AEST", "AEDT"], ["Australia/West", "AWST"], ["Australia/Yancowinna", "ACST", "ACDT"], ["Brazil/Acre"], ["Brazil/DeNoronha"], ["Brazil/East"], ["Brazil/West"], ["Canada/Atlantic", "AST", "ADT"], ["Canada/Central", "CST", "CDT"], ["Canada/Eastern", "EST", "EDT"], ["Canada/Mountain", "MST", "MDT"], ["Canada/Newfoundland", "NST", "NDT"], ["Canada/Pacific", "PST", "PDT"], ["Canada/Saskatchewan", "CST"], ["Canada/Yukon", "MST"], ["CET", "CET", "CEST"], ["Chile/Continental"], ["Chile/EasterIsland"], ["CST6CDT", "CST", "CDT"], ["Cuba", "CST", "CDT"], ["EET", "EET", "EEST"], ["Egypt", "EET"], ["Eire", "IST", "GMT"], ["EST", "EST"], ["EST5EDT", "EST", "EDT"], ["Etc/GMT", "GMT"], ["Etc/GMT+0", "GMT"], ["Etc/GMT+1"], ["Etc/GMT+10"], ["Etc/GMT+11"], ["Etc/GMT+12"], ["Etc/GMT+2"], ["Etc/GMT+3"], ["Etc/GMT+4"], ["Etc/GMT+5"], ["Etc/GMT+6"], ["Etc/GMT+7"], ["Etc/GMT+8"], ["Etc/GMT+9"], ["Etc/GMT-0", "GMT"], ["Etc/GMT-1"], ["Etc/GMT-10"], ["Etc/GMT-11"], ["Etc/GMT-12"], ["Etc/GMT-13"], ["Etc/GMT-14"], ["Etc/GMT-2"], ["Etc/GMT-3"], ["Etc/GMT-4"], ["Etc/GMT-5"], ["Etc/GMT-6"], ["Etc/GMT-7"], ["Etc/GMT-8"], ["Etc/GMT-9"], ["Etc/GMT0", "GMT"], ["Etc/Greenwich", "GMT"], ["Etc/UCT", "UTC"], ["Etc/Universal", "UTC"], ["Etc/UTC", "UTC"], ["Etc/Zulu", "UTC"], ["Europe/Amsterdam", "CET", "CEST"], ["Europe/Andorra", "CET", "CEST"], ["Europe/Astrakhan"], ["Europe/Athens", "EET", "EEST"], ["Europe/Belfast", "GMT", "BST"], ["Europe/Belgrade", "CET", "CEST"], ["Europe/Berlin", "CET", "CEST"], ["Europe/Bratislava", "CET", "CEST"], ["Europe/Brussels", "CET", "CEST"], ["Europe/Bucharest", "EET", "EEST"], ["Europe/Budapest", "CET", "CEST"], ["Europe/Busingen", "CET", "CEST"], ["Europe/Chisinau", "EET", "EEST"], ["Europe/Copenhagen", "CET", "CEST"], ["Europe/Dublin", "IST", "GMT"], ["Europe/Gibraltar", "CET", "CEST"], ["Europe/Guernsey", "GMT", "BST"], ["Europe/Helsinki", "EET", "EEST"], ["Europe/Isle_of_Man", "GMT", "BST"], ["Europe/Istanbul"], ["Europe/Jersey", "GMT", "BST"], ["Europe/Kaliningrad", "EET"], ["Europe/Kiev", "EET", "EEST"], ["Europe/Kirov"], ["Europe/Lisbon", "WET", "WEST"], ["Europe/Ljubljana", "CET", "CEST"], ["Europe/London", "GMT", "BST"], ["Europe/Luxembourg", "CET", "CEST"], ["Europe/Madrid", "CET", "CEST"], ["Europe/Malta", "CET", "CEST"], ["Europe/Mariehamn", "EET", "EEST"], ["Europe/Minsk"], ["Europe/Monaco", "CET", "CEST"], ["Europe/Moscow", "MSK"], ["Europe/Nicosia", "EET", "EEST"], ["Europe/Oslo", "CET", "CEST"], ["Europe/Paris", "CET", "CEST"], ["Europe/Podgorica", "CET", "CEST"], ["Europe/Prague", "CET", "CEST"], ["Europe/Riga", "EET", "EEST"], ["Europe/Rome", "CET", "CEST"], ["Europe/Samara"], ["Europe/San_Marino", "CET", "CEST"], ["Europe/Sarajevo", "CET", "CEST"], ["Europe/Saratov"], ["Europe/Simferopol", "MSK"], ["Europe/Skopje", "CET", "CEST"], ["Europe/Sofia", "EET", "EEST"], ["Europe/Stockholm", "CET", "CEST"], ["Europe/Tallinn", "EET", "EEST"], ["Europe/Tirane", "CET", "CEST"], ["Europe/Tiraspol", "EET", "EEST"], ["Europe/Ulyanovsk"], ["Europe/Uzhgorod", "EET", "EEST"], ["Europe/Vaduz", "CET", "CEST"], ["Europe/Vatican", "CET", "CEST"], ["Europe/Vienna", "CET", "CEST"], ["Europe/Vilnius", "EET", "EEST"], ["Europe/Volgograd"], ["Europe/Warsaw", "CET", "CEST"], ["Europe/Zagreb", "CET", "CEST"], ["Europe/Zaporozhye", "EET", "EEST"], ["Europe/Zurich", "CET", "CEST"], ["Factory"], ["GB", "GMT", "BST"], ["GB-Eire", "GMT", "BST"], ["GMT", "GMT"], ["GMT+0", "GMT"], ["GMT-0", "GMT"], ["GMT0", "GMT"], ["Greenwich", "GMT"], ["Hongkong", "HKT"], ["HST", "HST"], ["Iceland", "GMT"], ["Indian/Antananarivo", "EAT"], ["Indian/Chagos"], ["Indian/Christmas"], ["Indian/Cocos"], ["Indian/Comoro", "EAT"], ["Indian/Kerguelen"], ["Indian/Mahe"], ["Indian/Maldives"], ["Indian/Mauritius"], ["Indian/Mayotte", "EAT"], ["Indian/Reunion"], ["Iran"], ["Israel", "IST", "IDT"], ["Jamaica", "EST"], ["Japan", "JST"], ["Kwajalein"], ["Libya", "EET"], ["MET", "MET", "MEST"], ["Mexico/BajaNorte", "PST", "PDT"], ["Mexico/BajaSur", "MST", "MDT"], ["Mexico/General", "CST", "CDT"], ["MST", "MST"], ["MST7MDT", "MST", "MDT"], ["Navajo", "MST", "MDT"], ["NZ", "NZST", "NZDT"], ["NZ-CHAT"], ["Pacific/Apia"], ["Pacific/Auckland", "NZST", "NZDT"], ["Pacific/Bougainville"], ["Pacific/Chatham"], ["Pacific/Chuuk"], ["Pacific/Easter"], ["Pacific/Efate"], ["Pacific/Enderbury"], ["Pacific/Fakaofo"], ["Pacific/Fiji"], ["Pacific/Funafuti"], ["Pacific/Galapagos"], ["Pacific/Gambier"], ["Pacific/Guadalcanal"], ["Pacific/Guam"], ["Pacific/Honolulu", "HST"], ["Pacific/Johnston", "HST"], ["Pacific/Kanton"], ["Pacific/Kiritimati"], ["Pacific/Kosrae"], ["Pacific/Kwajalein"], ["Pacific/Majuro"], ["Pacific/Marquesas"], ["Pacific/Midway", "SST"], ["Pacific/Nauru"], ["Pacific/Niue"], ["Pacific/Norfolk"], ["Pacific/Noumea"], ["Pacific/Pago_Pago", "SST"], ["Pacific/Palau"], ["Pacific/Pitcairn"], ["Pacific/Pohnpei"], ["Pacific/Ponape"], ["Pacific/Port_Moresby"], ["Pacific/Rarotonga"], ["Pacific/Saipan"], ["Pacific/Samoa", "SST"], ["Pacific/Tahiti"], ["Pacific/Tarawa"], ["Pacific/Tongatapu"], ["Pacific/Truk"], ["Pacific/Wake"], ["Pacific/Wallis"], ["Pacific/Yap"], ["Poland", "CET", "CEST"], ["Portugal", "WET", "WEST"], ["PRC", "CST"], ["PST8PDT", "PST", "PDT"], ["ROC", "CST"], ["ROK", "KST"], ["Singapore"], ["Turkey"], ["UCT", "UTC"], ["Universal", "UTC"], ["US/Alaska", "AKST", "AKDT"], ["US/Aleutian", "HST", "HDT"], ["US/Arizona", "MST"], ["US/Central", "CST", "CDT"], ["US/East-Indiana", "EST", "EDT"], ["US/Eastern", "EST", "EDT"], ["US/Hawaii", "HST"], ["US/Indiana-Starke", "CST", "CDT"], ["US/Michigan", "EST", "EDT"], ["US/Mountain", "MST", "MDT"], ["US/Pacific", "PST", "PDT"], ["US/Samoa", "SST"], ["UTC", "UTC"], ["W-SU", "MSK"], ["WET", "WET", "WEST"], ["Zulu", "UTC"]];

const ready = new Promise<void>((resolve: (() => void)) => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('DOMContentLoaded', resolve, {once: true});
});

// Setup routing
ready.then(() => {
    let routeBindings: { route: RegExp, element: Element }[] = [];
    let classBindings: { route: RegExp, element: Element, className: string }[] = [];

    window.addEventListener('hashchange', () => {
        routeBindings.forEach(({route, element}) => {
            element.setAttribute('data-route-status', String(route.test(window.location.hash)));
        });
        classBindings.forEach(({route, element, className}) => {
            (route.test(window.location.hash) ? element.classList.add : element.classList.remove).call(element.classList, className);
        });
    });

    function processClass(element: Element) {
        const route = element.getAttribute('data-bind-class-to-route--route');
        const className = element.getAttribute('data-bind-class-to-route--class');
        const flags = element.getAttribute('data-bind-class-to-route--flags') ?? undefined;
        if (route === null || className === null) {
            console.warn('Element', element, 'had a route class binding (data-bind-class-to-route--) but either no route or class');
            return;
        }

        const routeRegex = new RegExp(route, flags);
        classBindings.push({
            route: routeRegex,
            element,
            className,
        });

        console.debug(`Bound class`, className, 'to element', element, `and route`, routeRegex);
        (routeRegex.test(window.location.hash) ? element.classList.add : element.classList.remove).call(element.classList, className);

        element.removeAttribute('data-bind-class-to-route--route');
        element.removeAttribute('data-bind-class-to-route--class');
        element.removeAttribute('data-bind-class-to-route--flags');
        element.setAttribute('data-bound', 'class:' + route + ':' + className);
    }

    function process(element: Element) {
        const route = element.getAttribute('data-bind-to-route');
        const flags = element.getAttribute('data-bind-to-route-flags') ?? undefined;
        if (route === null) {
            console.warn('Element', element, 'had a route binding (data-bind-to-route) but no path specified');
            return;
        }

        const entry = {route: new RegExp(route, flags), element};
        routeBindings.push(entry);

        console.debug(`Bound`, element, `to route`, entry.route);
        element.setAttribute('data-route-status', String(entry.route.test(window.location.hash)));

        element.removeAttribute('data-bind-to-route');
        element.removeAttribute('data-bind-to-route-flags');
        element.setAttribute('data-bound', 'route:' + route);
    }

    new MutationObserver(function (mutations) {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((element) => {
                if (element.nodeType === Node.ELEMENT_NODE) {
                    const e = element as Element;
                    if (e.hasAttribute('data-bind-to-route')) process(element as Element);
                    if (e.hasAttribute('data-bind-class-to-route--route')) processClass(element as Element);
                }
            });
            mutation.removedNodes.forEach((element) => {
                routeBindings = routeBindings.filter((e) => {
                    const result = e.element !== (element as Element);
                    if (!result) console.debug('Unbound deleted element', element, 'from', e.route);

                    return result;
                });
                classBindings = classBindings.filter((e) => {
                    const result = e.element !== (element as Element);
                    if (!result) console.debug('Unbound deleted element', element, 'from', e.route);

                    return result;
                });
            })
        })
    }).observe(document.body, {childList: true, subtree: true});

    document.querySelectorAll('[data-bind-to-route]').forEach((element) => process(element));
    document.querySelectorAll('[data-bind-class-to-route--route]').forEach((element) => processClass(element));
});

function produceLanguageFormatter(
    editor: HTMLElement,
    button: HTMLButtonElement,
    formatter: (data: string) => string,
    automatic: () => boolean,
    language: string,
) {
    function process(code: string) {
        editor.innerHTML = hljs.highlight(language, formatter(code)).value;
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
        (code: string) => sqlFormatter.format(code),
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
        (code: string) => JSONFormat(code),
        automatic,
        'json',
    );
});

ready.then(() => {
    const timeZoneLeft = document.querySelector('#select-left') as HTMLSelectElement;
    const timeZoneRight = document.querySelector('#select-right') as HTMLSelectElement;

    const timeLeft = document.querySelector('#text-left') as HTMLInputElement;
    const timeRight = document.querySelector('#text-right') as HTMLInputElement;

    if (!timeZoneRight || !timeZoneLeft || !timeLeft || !timeRight) return;

    const used: string[] = [];
    const options = tzd.map((entry) => {
        const [name, ...aliases] = entry;

        return entry.map((value) => {
            if (used.includes(value)) return undefined;
            used.push(value);

            const option = document.createElement('option');
            option.innerText = value;
            option.value = name;
            return option;
        }).filter((e) => e !== undefined);
    }).reduce((value, current) => [...value, ...current], []) as HTMLOptionElement[];

    options
        .sort((a, b) => a.innerText.toLowerCase() > b.innerText.toLowerCase() ? 1 : -1)
        .forEach((option) => {
            timeZoneLeft.append(option);
            timeZoneRight.append(option.cloneNode(true));
        });

    timeZoneLeft.value = 'Europe/London';
    timeZoneRight.value = 'America/New_York';

    function update(direction: 'left-to-right' | 'right-to-left') {
        const inputZone = direction === 'left-to-right' ? timeZoneLeft.value : timeZoneRight.value;
        const outputZone = direction === 'left-to-right' ? timeZoneRight.value : timeZoneLeft.value;
        const sourceTime = direction === 'left-to-right' ? timeLeft.value : timeRight.value;
        const destinationField = direction === 'left-to-right' ? timeRight : timeLeft;

        if (!/((0\d)|(1\d)|(2[0-3])):([0-5]\d)(:([0-5]\d))?/.test(sourceTime)) {
            destinationField.value = '';
            return;
        }

        const time = luxon.DateTime.fromFormat(sourceTime.split(':').length === 3 ? sourceTime : sourceTime + ':00', "HH:mm:ss", {
            zone: inputZone,
            setZone: true
        });
        if (!time.isValid) {
            destinationField.value = '';
            return;
        }

        const format = Intl.DateTimeFormat('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            timeZone: outputZone,
        }).format(time.toJSDate());

        destinationField.value = format;
    }

    timeZoneRight.addEventListener('change', () => update('right-to-left'));
    timeRight.addEventListener('input', () => update('right-to-left'));
    timeZoneLeft.addEventListener('change', () => update('left-to-right'));
    timeLeft.addEventListener('input', () => update('left-to-right'));
})
/*
SELECT * FROM test;
SELECT     country.country_name_eng,     SUM(CASE WHEN call.id IS NOT NULL THEN 1 ELSE 0 END) AS calls,     AVG(ISNULL(DATEDIFF(SECOND, call.start_time, call.end_time),0)) AS avg_difference FROM country LEFT JOIN city ON city.country_id = country.id LEFT JOIN customer ON city.id = customer.city_id LEFT JOIN call ON call.customer_id = customer.id GROUP BY     country.id,     country.country_name_eng HAVING AVG(ISNULL(DATEDIFF(SECOND, call.start_time, call.end_time),0)) > (SELECT AVG(DATEDIFF(SECOND, call.start_time, call.end_time)) FROM call) ORDER BY calls DESC, country.id ASC;
 */