# encoding: utf-8

from __future__ import unicode_literals, division
import pyperclip

content = None

with open('run.js', 'r') as f:
    content = f.readlines()

pyperclip.copy(''.join(content))