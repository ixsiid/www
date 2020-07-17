const path = require('path');
const fs = require('fs');

const articles = fs.readdirSync(path.join(__dirname, 'public', 'article'))
	.filter(file => file.endsWith('.md'))
	.map(file => {
		const src = path.join(__dirname, 'public', 'article', file);
		const result = {
			path: `/article/${file}`,
			Title: file.replace(/\.md$/, ''),
			Date: fs.statSync(src).birthtime,
			Tags: [],
		};

		const header = fs.readFileSync(src).toString().match(/^<!---([\s\S]*?)-->/)[1];
		if (header) {
			const meta = header.split(/\r?\n/)
				.map(x => x.split(':').map(x => x.trim()))
				.filter(([key, value]) => key && value)
				.reduce((a, b) => {
					if (b[0] == 'Tags') b[1] = b[1].split(',').map(x => x.trim());
					a[b[0]] = b[1];
					return a;
				}, {});
			return { ...result, ...meta };
		}

		return result;
	})
	.sort((a,b) => new Date(b.Date) - new Date(a.Date));

module.exports = {
	outputDir: path.resolve(__dirname, 'docs'),
	pages: {
		index: {
			entry: 'src/main.js',
			title: 'Halzion.net',

			articles: JSON.stringify(articles),
		}
	},
};
