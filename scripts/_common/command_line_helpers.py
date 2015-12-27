import sys
import os
from termcolor import colored


def help_if_less_than_args(args_num, help_str):
  args_num += 1 # adds the command argument (first)
  args_len = len(sys.argv)
  if args_len < args_num:
    sustantive_str = 'argument' if (args_len - 1) == 1 else 'arguments'
    verb_str = 'is' if (args_num - 1) == 1 else 'are'
    print(colored('You provided %s %s, but %s %s needed' %
      (args_len - 1, sustantive_str, args_num - 1, verb_str), 'red'))
    print("")
    print(colored(help_str.strip(), 'blue'))
    sys.exit()


def help_if_no_args(*args):
  help_if_less_than_args(1, *args)


def print_and_run(command):
  print("")
  print(colored(command, 'green'))
  print("")
  rv = os.system(command)
  print("")
  return rv
