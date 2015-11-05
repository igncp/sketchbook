import sys
import os
from termcolor import colored


def help_if_no_args(help_str):
  if len(sys.argv) == 1:
    print(colored(help_str.strip(), 'blue'))
    sys.exit()


def print_and_run(command):
  print("")
  print(colored(command, 'green'))
  print("")
  rv = os.system(command)
  print("")
  return rv
