var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' higher-level code blocks explanation',
  body: [
    c('Runner.js', "Processes a path files. The logic just focus on getting the list of files and running the Workers in an asynchronous and parallel way, using promises and separate cpus. It also displays statistics but it is not involved in creating the output of the files.", [
      'Packages requirements',
      'Gets the available cpus',
      'Defines the used logger',
      'Defines the inner functions (explained later if necessary)',
      c('Defines the exposed `run` function', [
        'Defines the defaults for the used cpus, files extensions and extra information',
        'Gets all the used files (after filtering) paths as a list',
        'Divides the files in `chunks` of files, one per used cpu',
        'Processes each chunk with a child process, using the ./Worker file.',
        'Once finished, it shows statistics about '
      ]),
    ]),
    c('Worker.js', "This file doesn't expose any code, it is intended to be called from a child process. It has the responsibility to apply the transformation to each file and update the status to be displayed in the stats, handle the errors and write the result to a file.", [
      'Packages requirements, including the core',
      'Defines the inner functions (explained later if necessary)',
      c('Loops through each file send to the worker', [
        'Reads and transforms to string the file content',
        'Applies the selected transformer file passing some arguments',
        "Once it has finished the transformation, if the result is equal or empty it emits the status to the root process",
        "If required by the options, it prints the output and it writes the output to a file",
        "If it gets to this point, everything went ok, it emits the ok status to the root process"
      ])
    ]),
    c('core.js', ['-'], 'not-completed')
  ]
});
