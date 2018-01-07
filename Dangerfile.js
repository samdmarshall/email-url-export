const {danger, warn} = require('danger')
import yarn from 'danger-plugin-yarn'
import eslint from 'danger-plugin-eslint'
import fixme from 'danger-plugin-fixme'

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.');
}


schedule(yarn())

eslint()

fixme()
