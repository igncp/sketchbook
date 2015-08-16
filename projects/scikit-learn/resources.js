var l = diagrams.box.generateLink,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' resources',
    body: [
        l('Repo', "https://github.com/scikit-learn/scikit-learn"),
        l('API', "http://scikit-learn.org/stable/modules/classes.html"),
        l('User Guide', "http://scikit-learn.org/stable/user_guide.html"),
    ]
});