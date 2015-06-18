diagrams.shared.set({
    'controllers-editorController': 'editorController{current_theme, Color, Editor, Theme, ThemeLoader, FileManager, EditPopover, NewPopover, HUDEffects, throbber, $filter, $scope, $location, $window, $q, $modal}',
    'controllers-galleryController': 'galleryController{$scope, $location, Editor, ThemeLoader, Color, Theme, FileManager}',
    'controllers-ModalOpenURLController': 'ModalOpenURLController{$scope, $modalInstance, themeExternalURL}',
    'controllers-pageController': 'pageController{$scope, Theme, $state}. It refers to the <head> part of index.html',
    'controllers-statsController': "statsController{Color, ThemeLoader, plist_to_json, $scope, $location} Controller for the '/stats' route.",
    'directives-draggable': 'draggable{$timeout}',
    'directives-dropZone': 'dropZone{FileManager, $location, $q}',
    'directives-focusMe': 'focusMe{$timeout}',
    'directives-scopeBar': 'scopeBar{$timeout, Theme}',
    'directives-shortcut': 'shortcut{}', 
    'directives-throbber': 'draggable{$timeout}',
    'libraries-mincer': "Sprockets inspired web assets compiler for Node.JS",
    'libraries-sugar': "A Javascript library for working with native objects.",
    'services-Color': 'Factory Color{}',
    'services-Editor': 'Factory Editor{}. It exposes Gallery, version and  current_theme.',
    'services-EditPopover': 'Factory EditPopover{}',
    'services-FileManager': 'Factory FileManager{$q}',
    'services-HUDEffects': 'Factory HUDEffects{Theme, Color}',
    'services-json_to_plist': 'Value json_to_plist(json)',
    'services-NewPopover': 'Factory NewPopover{}',
    'services-plist_to_json': 'Value plist_to_json(plist)',
    'services-removeExtensionFilter': 'Factory removeExtensionFilter{}',
    'services-Theme': 'Factory Theme{Color, json_to_plist, plist_to_json}',
    'services-ThemeLoader': 'Factory ThemeLoader{$http, $q, $window, FileManager, $state, Editor, throbber}. It exposes the themes_future promise and the load function. It uses Editor to check the Gallery visibility for the throbber. It uses $state to check if it is in an editor state ("editor.*"',
    'services-throbber': 'Factory throbber{}',
    'services-$sce': 'Provides Strict Contextual Escaping services',
    'services-$modal': 'Service created by the angular-bootstrap library',
});
