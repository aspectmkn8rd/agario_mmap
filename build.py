# encoding: utf-8

from __future__ import unicode_literals, division
import pyperclip
import coffeescript
from json import load


class RuntimeCode():
    def __init__(self, filename):
        self.text = coffeescript.compile_file(filename).split('\n')

    def __repr__(self):
        return '\n'.join(self.text)

    def include_modules(self):
        for i, line in enumerate(self.text):
            if '/* include' in line:
                module_name = line.split()[2].strip()
                if '.js' in line:
                    with open(module_name, 'r') as f:
                        self.text[i] = f.read()
                elif '.coffee' in line:
                    self.text[i] = coffeescript.compile_file(module_name).split('\n')[1:-2]
                    self.text[i] = '\n'.join(self.text[i])

    def apply_settings(self, filename):
        def substitute_param(param, value):
            s_ = 'SETTINGS_{}'.format(param.upper())
            for i, line in enumerate(self.text):
                if value.lower() not in ['true', 'false']:
                    self.text[i] = line.replace(s_, value)
                else:
                    self.text[i] = line.replace('\'' + s_ + '\'', value.lower())
                    self.text[i] = line.replace('\"' + s_ + '\"', value.lower())

        with open(filename, 'r') as f:
            settings = load(f)
        for param, value in settings.iteritems():
            if value:
                substitute_param(param, value)

    def copy_to_clipboard(self):
        return pyperclip.copy(''.join(self.text))


if __name__ == "__main__":
    rc = RuntimeCode('run.coffee')
    rc.include_modules()
    rc.apply_settings('settings.json')
    rc.copy_to_clipboard()