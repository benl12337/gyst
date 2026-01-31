import { readFile, writeFile } from 'fs/promises';

const readJSON = async (relPath) => {
  const url = new URL(relPath, import.meta.url);
  const txt = await readFile(url, 'utf8');
  return JSON.parse(txt);
};

const saveJSON = async (relPath, data) => {
  const url = new URL(relPath, import.meta.url);
   await writeFile(url, JSON.stringify(data, null, 2));
  return data
};

export default {
    readJSON,
    saveJSON
}