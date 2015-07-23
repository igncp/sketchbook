var l = diagrams.box.generateLink,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' resources',
    body: [
        l('Repository', "https://github.com/Reactive-Extensions/RxJS.git"),
        l('Issues', "https://github.com/Reactive-Extensions/RxJS/issues"),
        l('Website', "http://reactivex.io/"),
        l('Stack Overflow Questions', 'http://stackoverflow.com/questions/tagged/rxjs'),
        l('API docs', "https://github.com/Reactive-Extensions/RxJS/tree/master/doc"),
        l('Tutorials', "http://reactivex.io/tutorials.html"),
        l('Style guide', "https://github.com/Reactive-Extensions/RxJS/wiki/Reactive-Extensions-for-JavaScript-(RxJS)-Style-Guide"),
        l('Recipes', "https://github.com/Reactive-Extensions/RxJS/wiki/Recipes"),
    ]
});