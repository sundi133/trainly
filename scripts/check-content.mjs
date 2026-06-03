import { readFile } from 'node:fs/promises';

const requiredPhrases = [
  'Votal Academy',
  'Learning Advisor Agent',
  'Skill Gap Agent',
  'Content Curator',
  'Assessment Agent',
  'Manager view',
  'Admin console',
  'Analytics and reporting',
];

const files = ['index.html', 'src/app.js', 'src/styles.css', 'README.md'];
const contents = Object.fromEntries(await Promise.all(files.map(async (file) => [file, await readFile(file, 'utf8')])));
const combined = Object.values(contents).join('\n');

const missing = requiredPhrases.filter((phrase) => !combined.includes(phrase));
if (missing.length > 0) {
  console.error(`Missing required product content: ${missing.join(', ')}`);
  process.exit(1);
}

for (const [file, content] of Object.entries(contents)) {
  if (content.includes('TODO')) {
    console.error(`${file} contains TODO placeholder text.`);
    process.exit(1);
  }
}

console.log('Content check passed.');
