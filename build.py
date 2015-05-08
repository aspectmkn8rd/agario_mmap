# encoding: utf-8

from __future__ import unicode_literals, division
import pyperclip
from json import load


class RuntimeCode():
    def __init__(self, filename):
        with open(filename, 'r') as f:
            self.text = f.readlines()

    def __repr__(self):
        return ''.join(self.text)

    def substitute_param(self, param, value):
        s_ = 'SETTINGS_{}'.format(param.upper())
        for i, line in enumerate(self.text):
            if value.lower() not in ['true', 'false']:
                self.text[i] = line.replace(s_, value)
            else:
                self.text[i] = line.replace(s_, value.lower())

    def apply_settings(self, filename):
        with open(filename, 'r') as f:
            settings = load(f)
        for param, value in settings.iteritems():
            if value:
                self.substitute_param(param, value)
        for i, line in enumerate(self.text):
            self.text[i] = line.replace('\"true\"', 'true')
            self.text[i] = line.replace('\"false\"', 'false')

    def copy_to_clipboard(self):
        return pyperclip.copy(''.join(self.text))


if __name__ == "__main__":
    rc = RuntimeCode('run.js')
    rc.apply_settings('settings.json')
    rc.copy_to_clipboard()




