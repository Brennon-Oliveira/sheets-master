#!/bin/sh

files=$(find ./electron -name '*.ts')
tsc --esModuleInterop $files --outDir ./dist