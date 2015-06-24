var nl = diagrams.layer.newLayer,
    nlc = diagrams.layer.newLayerConnectedToNext;

diagrams.layer(nl('git-extras make installation flow', [
    nl('sudo make install # without options and without environment variables', [
        nlc('Setup the following variables: PREFIX, BINPREFIX, MANPREFIX, BINS, MANS, MAN_HTML, MAN_PAGES, LIB, COMMANDS_USED_WITHOUT_GIT_REPO and COMMANDS_USED_WITH_GIT_REPO'),
        nlc('Creates the "/usr/local/bin" and "/usr/local/share/man/man1" dirs if necessary, always echoing messages.'),
        nlc('Creates a temporal directory in ~ with `mktemp` and a temporal file'),
        nlc('Changes the temporal file permissions to be executable', 'nr'),
        nlc('Does a loop for each COMMANDS_USED_WITH_GIT_REPO', 'nr', [
            nlc('Gets the first line of the file of the loop and the three helpers (in order: reset-env, git-extra-utility, is-git-repo) content and stores it in the temporal file'),
            nlc('Gets the file of the loop content except the first two lines and appends it to the temp file'),
            nl('Copies the file to the "bins" dir with its name')
        ]),
        nlc('Does a loop for each COMMANDS_USED_WITHOUT_GIT_REPO', [
            nl('The same as in the loop before but without the is-git-repo helper')
        ]),
        nlc("If the 'man' documents are not generated, it shows a warning, otherwise it copies them"),
        nlc("Creates the dir '/usr/local/etc/bash_completion.d' if it didn't exist"),
        nl("Copies the file 'etc/bash_completion.sh' to that directory as 'git-extras'"),
    ])
]));
