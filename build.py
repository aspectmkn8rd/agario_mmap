# encoding: utf-8

from __future__ import unicode_literals, division
import pyperclip
from json import load


class RuntimeCode():
    def __init__(self, body):
        self.text = body

    def __repr__(self):
        return ''.join(self.text)

    def substitute_param(self, param, value):
        s_ = 'SETTINGS_{}'.format(param.upper())
        for i, line in enumerate(self.text):
            self.text[i] = line.replace(s_, value)

    def to_clipboard(self):
        return pyperclip.copy(''.join(self.text))

if __name__ == "__main__":
    with open('run.js', 'r') as f:
        rc = RuntimeCode(f.readlines())

    with open('settings.json', 'r') as f:
        settings = load(f)

    for param, value in settings.iteritems():
        if value:
            rc.substitute_param(param, value)

    rc.to_clipboard()




