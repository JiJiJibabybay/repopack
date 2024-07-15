import path from 'path';
import * as fs from 'fs/promises';

export async function getVersion(): Promise<string> {
  try {
    const packageJson = await getPackageJson();
    return packageJson.version;
  } catch (error) {
    console.error('Error reading package.json:', error);
    return 'unknown';
  }
}

async function getPackageJson(): Promise<{
  name: string;
  version: string;
}> {
  const packageJsonPath = path.join(import.meta.dirname, '..', '..', 'package.json');
  const packageJsonFile = await fs.readFile(packageJsonPath, 'utf-8');
  const packageJson = JSON.parse(packageJsonFile);
  return packageJson;
}