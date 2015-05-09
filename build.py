# encoding: utf-8

from __future__ import unicode_literals, division
import pyperclip
import coffeescript
from json import load


class RuntimeCode():
    def __init__(self, filename):
        with open(filename, 'r') as f:
            self.text = f.readlines()

    def __repr__(self):
        return ''.join(self.text)

    def include_modules(self):
        for i, line in enumerate(self.text):
            if '// #include' in line:
                if '.js' in line:
                    module_name = line.split('// #include')[1].strip()
                    with open(module_name, 'r') as f:
                        self.text[i] = ''.join(f.readlines())
                elif '.coffee' in line:
                    module_name = line.split('// #include')[1].strip()
                    with open(module_name, 'r') as f:
                        self.text[i] = ''.join(coffeescript.compile(f.read()))

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

    def to_js(self):
        self.text = coffeescript.compile(self.text)

    def copy_to_clipboard(self):
        return pyperclip.copy(''.join(self.text))


if __name__ == "__main__":
    rc = RuntimeCode('run.js')
    rc.include_modules()
    rc.apply_settings('settings.json')
    # rc.to_js()
    rc.copy_to_clipboard()