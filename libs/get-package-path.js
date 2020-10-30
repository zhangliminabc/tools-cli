const { execSync } = require('child_process');
const inquirer = require('inquirer');

module.exports = async () => {
  const currentPath = execSync('pwd');
  const { isOk } = await inquirer.prompt({
    type: 'confirm',
    message: `确定在当前${currentPath}下新建项目吗?`,
    name: 'isOk',
  });
  if (isOk) {
    return currentPath;
  }
  console.log('已取消');
  process.exit();
};
