'use strict';

const {danger, warn} = require('danger')
const {checkForRelease} = require('danger-plugin-yarn')
const {eslint} = require('danger-plugin-eslint')
const {fixme} = require('danger-plugin-fixme')

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}


//schedule(checkForRelease())
//eslint()
//fixme()
