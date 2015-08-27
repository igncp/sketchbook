import os
import ast


def is_python_file(item):
  return item[-3:] == '.py'


def walk_dir_python_files(project_path, fn):
  for root, dirs, files in os.walk(project_path):
    for name in files:
      if is_python_file(name):
        file_path = os.path.abspath(os.path.join(root, name))
        fn(file_path)


def wrap_str_in_box_diagram(items_str, title):
   return """var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

  diagrams.box({
    name: s('project') + ' """ + title + """',
    body: [""" + items_str + "\n]});"


def wrap_str_in_graph_diagram(items_str):
  return """var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');

diagrams.graph([\n""" + items_str + "\n]);"


def set_file_content(file_path, content):
  with open(file_path, 'w') as out_file:
    out_file.write(content)
  print 'File in "' + file_path + '" generated.'


def get_docstring(node):
    doc_string = ast.get_docstring(node)
    if doc_string:
      max_chars = 300
      doc_string = doc_string.replace('=', '').replace('\n', ' ').replace('\r', '')\
        .replace('"', '\'')
      if len(doc_string) > max_chars: doc_string = doc_string[0:max_chars] + '...'
      return doc_string
    else: return None


def parse_file_content(path):
  f = open(path, 'r')
  content = f.read()
  f.close()
  parsed = ast.parse(content)

  return parsed


def get_file_doc_tring(path):
  file_doc_string = None
  parsed = parse_file_content(path)
  ds = get_docstring(parsed)
  if ds: file_doc_string = ds

  return file_doc_string


def get_api_elements_of_file(path):
  file_api_elements = []
  
  parsed = parse_file_content(path)
  class_definitions = [node for node in parsed.body if isinstance(node, ast.ClassDef)]
  function_definitions = [node for node in parsed.body if isinstance(node, ast.FunctionDef)]

  for class_definition in class_definitions:
    item = {}
    item['type'] = 'class'
    item['name'] = class_definition.name
    bases = [base.id for base in class_definition.bases if hasattr(base, 'id')]
    item['bases'] = bases
    item['doc_string'] = get_docstring(class_definition)
    method_definitions = [node for node in class_definition.body
      if isinstance(node, ast.FunctionDef)]
    item['methods'] = []
    for method_definition in method_definitions:
      method = {}
      method['name'] = method_definition.name
      args = [arg.id for arg in method_definition.args.args]
      method['args'] = args
      item['methods'].append(method)
    file_api_elements.append(item)
  for function_definition in function_definitions:
    item = {}
    item['type'] = 'function'
    item['name'] = function_definition.name
    args = [arg.id for arg in function_definition.args.args]
    item['args'] = args
    item['doc_string'] = get_docstring(function_definition)
    file_api_elements.append(item)

  return file_api_elements


def add_path_as_info(path):
  return path + '<br>'
