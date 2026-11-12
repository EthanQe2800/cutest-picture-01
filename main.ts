import * as fs from 'node:fs';
import * as path from 'node:path';

// Entry for cutest-picture-01 competition: copies our cute picture to the grader output
const targetFolder = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const sourceImage = new URL('./entry.png', import.meta.url);
const outputFile = path.join(targetFolder, 'entry.png');

fs.copyFileSync(sourceImage, outputFile);
console.log('Delivered cute picture to ' + outputFile);