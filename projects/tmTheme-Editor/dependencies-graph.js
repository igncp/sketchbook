var n = diagrams.graph.generateNode,
    s = diagrams.shared.get,
    nWithPreffixSAndGraphProp = function(sTextPreffix, sKeyPreffix, Gprop) {
        return function() {
            var args = Array.prototype.slice.call(arguments), sharedStr = sTextPreffix + ': ';
            sharedStr += s(sKeyPreffix + '-' + args[0]) || '';
            if (_.isString(args[2]) && args[2].length > 0) args[2] = args[2] + ' - ' + sharedStr;
            else args.push(sharedStr);
            if (_.isString(Gprop) && Gprop.length > 0) args.push(Gprop);
            return n.apply({}, args);
        };
    },
    nc = nWithPreffixSAndGraphProp('Custom Service', 'services', ''),
    nb = nWithPreffixSAndGraphProp('Built-in Service', 'services', 'b'),
    nt = nWithPreffixSAndGraphProp('Directive', 'directives', 's-t'),
    ns = nWithPreffixSAndGraphProp('Controller', 'controllers', 's-s');

diagrams.graph([
    nc("Color", '0 4 10 23 24 28'),
    nc("Editor", '1 9 23 24'),
    nc("FileManager", '2 9 17 23 24 27'),
    nc("removeExtensionFilter", '3'),
    nc("HUDEffects", '4 23'),
    nc("json_to_plist", '5 10'),
    nc("plist_to_json", '6 10 28'),
    nc("EditPopover", '7 23'),
    nc("NewPopover", '8 23'),
    nc("ThemeLoader", '9 23 24 28'),
    nc("Theme", '10 4 19 23 24 26'),
    nc("throbber", '11 9 23 27'),
    nb("$q", '12 2 9 17 23 27'),
    nb("$http", '13 9 27'),
    nb("$window", '14 9 23 27'),
    nb("$state", '15 9 26'),
    nt("draggable", '16'),
    nt("dropZone", '17'),
    nt("focusMe", '18'),
    nt("scopeBar", '19'),
    nt("shortcut", '20'),
    nb("$timeout", '21 16 18 19'),
    nb("$location", '22 17 23 24 28'),
    ns("editorController", '23'),
    ns("galleryController", '24'),
    ns("ModalOpenURLController", '25'),
    ns("pageController", '26'),
    ns("previewController", '27'),
    ns("statsController", '28'),
    nb("$filter", '29 23'),
    nb("$scope", '30 23 24 25 26 27 28'),
    nc("current_theme", '31 23'),
    nb("$modal", '32 23'),
    nb("$modalInstance", '33 25'),
    nc("themeExternalURL", '34 25'),
    nb("$sce", '35 27'),
], {
    charge: -10000,
    linkDistance: 350,
    hideNodesWithoutLinks: true
});
