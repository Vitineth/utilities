import ready from "./dom";

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