# encoding: utf-8

from __future__ import unicode_literals, division
import pyperclip
from json import load


def substitute_param(param, value):
    s_ = 'SETTINGS_{}'.format(param.upper())
    print s_


if __name__ == "__main__":
    with open('run.js', 'r') as f:
        body = f.readlines()

    with open('settings.json', 'r') as f:
        settings = load(f)

    for param, value in settings.iteritems():
        if value:
            substitute_param(param, value)

    result = body
    pyperclip.copy(''.join(result))


