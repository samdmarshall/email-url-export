#!/usr/bin/env node
/*
 * email-url-export
 * https://github.com/samdmarshall/email-url-export
 *
 * Copyright (c) 2017 Samantha Marshall
  * Licensed under the BSD-3 license.
 */
var cli = require('cli');
var mailparser = require('mailparser');
var fs = require('fs');
var unfluff = require('unfluff');
var extractor = require('string-url-extractor');

cli.withStdinLines(function(lines, _newline) {
		lines.forEach(file => {
				let parser = new mailparser.MailParser();
				let input = fs.createReadStream(file);
				input.pipe(parser);

				var urls = [];
				parser.on('data', data => {
						switch (data.type) {
						case 'text': {
								if (data[data.type] !== undefined) {
										var text_data = extractor(data[data.type]);
										urls = text_data;
										break;
								}
								else {
										data.type = 'html';
								}
						}
						case 'textAsHtml':
						case 'html': {
								var html_data = unfluff(data[data.type]);
								html_data.links.map(x => urls.push(x.href));	
								break;
						}
						default: { break; }
						}

						urls.forEach(link => {
								console.log('* ' + link);
						});

				});
		});

		if (lines.lengh === 0) {
				this.fatal('Please specify an input file!');
		}
});

