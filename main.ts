import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// Cutest Picture entry: copies our cute illustrated creature to the grader output
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destPath = join(outDir, 'entry.png');
const srcPath = new URL('./entry.png', import.meta.url);

copyFileSync(srcPath, destPath);
console.log(`Copied cute entry picture to ${destPath}`);
