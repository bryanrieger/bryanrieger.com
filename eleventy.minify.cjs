const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify } = require('uglify-js');

function minifyJSFiles(directory) {
	fs.readdir(directory, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		files.forEach(file => {
			const filePath = path.join(directory, file);
			fs.stat(filePath, (err, stats) => {
				if (err) {
					console.error('Error retrieving file stats:', err);
					return;
				}

				if (stats.isDirectory()) {
					// Recursive call for directories
					minifyJSFiles(filePath);
				} else if (path.extname(file) === '.js') {
					fs.readFile(filePath, 'utf8', (err, data) => {
						if (err) {
							console.error('Error reading file:', err);
							return;
						}

						const minifiedCode = minify(data).code;
						const minifiedFilePath = filePath;

						fs.writeFile(minifiedFilePath, minifiedCode, err => {
							if (err) {
								console.error('Error writing minified file:', err);
								return;
							}
							
							console.log(`Minified ${filePath} to ${minifiedFilePath}`);
						});
					});
				}
			});
		});
	});
}


function minifyCSSFiles(directory) {
	fs.readdir(directory, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err);
			return;
		}

		files.forEach(file => {
			const filePath = path.join(directory, file);
			fs.stat(filePath, (err, stats) => {
				if (err) {
					console.error('Error retrieving file stats:', err);
					return;
				}

				if (stats.isDirectory()) {
					// Recursive call for directories
					minifyCSSFiles(filePath);
				} else if (path.extname(file) === '.css') {
					fs.readFile(filePath, 'utf8', (err, data) => {
						if (err) {
							console.error('Error reading file:', err);
							return;
						}

						const minifiedCode = new CleanCSS({ inline: ['all'] }).minify(data).styles;
						const minifiedFilePath = filePath;

						fs.writeFile(minifiedFilePath, minifiedCode, err => {
							if (err) {
								console.error('Error writing minified file:', err);
								return;
							}

							console.log(`Minified ${filePath} to ${minifiedFilePath}`);
						});
					});
				}
			});
		});
	});
}

// Example usage:
const directoryPath = process.argv[2];
minifyCSSFiles(directoryPath);
minifyJSFiles(directoryPath);