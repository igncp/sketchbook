import os


def is_python_file(item):
  return item[-3:] == '.py'


def walk_dir_python_files(project_path, fn):
  for root, dirs, files in os.walk(project_path):
    for name in files:
      if is_python_file(name):
        file_path = os.path.abspath(os.path.join(root, name))
        fn(file_path)


def add_box_diagram_beginning(title):
  return """var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

  diagrams.box({
    name: s('project') + ' """ + title + """',
    body: ["""


def set_file_content(file_path, content):
  with open(file_path, 'w') as out_file:
    out_file.write(content)
