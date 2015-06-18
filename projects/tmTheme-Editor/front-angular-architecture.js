var d = diagrams.generateBoxDefinition,
    s = diagrams.shared.get,
    getDFnWithSAndProp = function(prop) {
        return function() {
          return d(arguments[0], (s(prop + '-' + arguments[1]) || arguments[1]));
        };
    },
    ds = getDFnWithSAndProp('services'),
    dc = getDFnWithSAndProp('controllers'),
    dd = getDFnWithSAndProp('directives'),
    c = diagrams.generateBoxContainer;

diagrams.box({
    name: 'tmTheme-Editor angular architecture',
    body: [
        d('application.coffee', 'Internal requires for the app using mincer (' + s('libraries-mincer') + ').'),
        d('libs.js', 'External libraries requires for mincer (' + s('libraries-mincer') + ').'),
        c('config', [
            d('boot.coffee'),
            d('resolves.coffee'),
            d('routes.coffee', "{$stateProvider,$urlRouterProvider,$locationProvider}"),
        ]),
        c('controllers', [
            dc('editor_controller.coffee', "editorController"),
            dc('gallery_controller.coffee', "galleryController"),
            dc('modal_openURL_controller.coffee', "ModalOpenURLController"),
            dc('page_controller.coffee', "pageController"),
            dc('preview_controller.coffee', "previewController"),
            dc('stats_controller.coffee', "statsController"),
        ]),
        c('directives', [
            dd('draggable.coffee', "draggable"),
            dd('dropzone.coffee', "dropZone"),
            dd('focusme.coffee', "focusMe"),
            dd('scopebar.coffee', "scopeBar"),
            dd('shortcut.coffee', "shortcut"),
        ]),
        c('services', [
            ds('color_service.coffee', "Color"),
            ds('editor_service.coffee', "Editor"),
            ds('file_manager_service.coffee', "FileManager"),
            ds('filters.coffee', "removeExtensionFilter"),
            ds('hud_adjustments_service.coffee', "HUDEffects"),
            ds('json_to_plist.coffee', "json_to_plist"),
            ds('plist_to_json.coffee', "plist_to_json"),
            ds('popover_edit_service.coffee', "EditPopover"),
            ds('popover_new_service.coffee', "NewPopover"),
            ds('theme_loader_service.coffee', "ThemeLoader"),
            ds('theme_service.coffee', "Theme"),
            ds('throbber_service.coffee', "throbber"),
        ]),
        c('template', [
            d('action_bar.html', "Part of the sidebar"),
            c('alert', [
                d('alert.html'),
            ]),
            d('dialog_edit.html'),
            d('dialog_new.html', "Dialog shown when clicking in the `+` sign in the bottom of the page."),
            d('editor.html', "Composed of main and gallery."),
            d('gallery.html', "A hidden left sidebar that appears when you click on 'gallery'"),
            d('header.html', "The top bar of the editor"),
            d('header_links.html'),
            d('hud_colors.html', "Dialog shown when clicking in 'Color adjustements'."),
            d('main.html', "Main editor template, that it is a dropZone directive, which contains the header and some items like the sidebar, the preview, etc."),
            c('modal', [
                d('backdrop.html'),
                d('window.html'),
            ]),
            d('modalOpenURL.html', "The modal that appears when you click in load by url"),
            d('preview.html', "Right part of the editor, where the code is shown."),
            d('sidebar.html', 'Left sidebar of the editor. It is composed by the three tables, one of them (scopes) with a bottom bar.'),
            d('stats.html'),
            d('table_general.html'),
            d('table_info.html'),
            d('table_scopes.html'),
        ]),
    ]
});
