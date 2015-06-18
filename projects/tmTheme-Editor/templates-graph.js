var n = diagrams.graph.generateNode,
    s = diagrams.shared.get;

diagrams.graph([
    n('Unlocated', '0 14 13 12 3', '', 's-t'),
    n('index', '1 6 17', '', 's-t'),
    n('action_bar', '2'),
    n('alert/alert', '3'),
    n('dialog_edit', '4'),
    n('dialog_new', '5'),
    n('editor', '6 7 11'),
    n('gallery', '7'),
    n('header', '8 9'),
    n('header_links', '9'),
    n('hud_colors', '10'),
    n('main', '11 16 15 4 5 10 8'),
    n('modal/backdrop', '12'),
    n('modal/window', '13'),
    n('modalOpenURL', '14'),
    n('preview', '15'),
    n('sidebar', '16 2 18 19 20'),
    n('stats', '17'),
    n('table_general', '18'),
    n('table_info', '19'),
    n('table_scopes', '20'),
    n('templates', '21 0 1', '', 's-s b')
]);
