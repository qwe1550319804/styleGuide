import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import { extname, join } from 'path';
import prettier from 'prettier';
import { ScanOptions } from '../../types';
import { PRETTIER_FILE_EXT, PRETTIER_IGNORE_PATTERN } from '../../utils/constants';

export interface DoPrettierOptions extends ScanOptions {}

export async function doPrettier(options: DoPrettierOptions) {
  let files: string[] = [];
  if (options.files) {
    // 扫描过滤
    files = options.files.filter((name) => PRETTIER_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      `**/*.{${PRETTIER_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    // fg 全局路径扫描
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: PRETTIER_IGNORE_PATTERN, // 过滤文件夹
    });
  }
  await Promise.all(files.map(formatFile));
}

async function formatFile(filepath: string) {
  // 处理prettier
  const text = await readFile(filepath, 'utf8');
  const options = await prettier.resolveConfig(filepath); // 读取相关配置项
  const formatted = prettier.format(text, { ...options, filepath }); // 修复代码
  await writeFile(filepath, formatted, 'utf8');
}
