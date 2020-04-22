all: setup deps install

NODEJS := $(shell command -v node 2> /dev/null)
YARN := $(shell command -v yarn 2> /dev/null)
NPM := $(shell command -v npm 2> /dev/null)

setup:
ifndef NODEJS
	$(error nodejs is not installed)
endif
ifndef YARN
	$(error yarn is not installed)
endif
ifndef NPM
	$(error npm is not installed)
endif

deps:
	yarn

install:
	npm link
