const { execSync } = require('child_process');
const simpleGit = require('simple-git');
// @ts-ignore
const git = simpleGit();

module.exports = async (targetPath) => {
  const mockDir = process.cwd();
  execSync(`rm -rf mockgit `);
  const gitClonePath = 'git@github.com:zhangliminabc/npm-cli.git';
  await git.clone(gitClonePath, `${mockDir}/mockgit`);
  execSync(`cp -r mockgit/ ${targetPath}`);
  execSync(`rm -rf mockgit `);
};
