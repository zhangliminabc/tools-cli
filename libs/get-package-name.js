const inquirer = require('inquirer');

module.exports = async () => {
  const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: '请输入新建的项目名称',
  });
  if (!name) {
    console.error('新建项目名称不能为空');
    process.exit();
  }
  return name;
};
