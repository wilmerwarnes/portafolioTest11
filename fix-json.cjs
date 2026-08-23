const fs = require('fs');
const d = fs.readFileSync('public/portfolioData.json', 'utf8');
const fixed = d.replace('    ],\n    "diseno"', '    ]},\n    "diseno"');
if (fixed !== d) {
  fs.writeFileSync('public/portfolioData.json', fixed);
  console.log('Fixed!');
} else {
  console.log('Not found');
}