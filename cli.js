#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Setup __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define template directory (your CLI's root folder)
const TEMPLATE_DIR = path.join(__dirname, 'template');


async function createAuthSystem(appName) {
  const targetDir = path.join(process.cwd(), appName);

  // Check if the target directory already exists
  if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`❌ The directory "${appName}" already exists.`));
    return;
  }

  console.log(chalk.blue(`📁 Creating authentication system in "${appName}"...`));

  // Copy template files with filtering
  await fs.copy(TEMPLATE_DIR, targetDir, {
    filter: (src) => {
      const ignore = ['node_modules', '.git', 'cli.js', '.DS_Store'];
      return !ignore.some((ignored) => src.includes(ignored));
    }
  });

  // Modify the package.json name field
  const pkgPath = path.join(targetDir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    let packageJson = await fs.readFile(pkgPath, 'utf-8');
    packageJson = packageJson.replace(/"name":\s*"[^"]+"/, `"name": "${appName}"`);
    await fs.writeFile(pkgPath, packageJson);
  }

  // Optional: Install dependencies automatically
  console.log(chalk.yellow('📦 Installing dependencies...'));
  execSync('npm install', { cwd: targetDir, stdio: 'inherit' });

  
  console.log(chalk.green(`✅ "${appName}" created successfully!`));
  
  console.log(chalk.redBright(`Firstly setup your .env file. as per the specified in the .env.example file.`));
  
  console.log(chalk.cyan(`\n👉 Next steps:`));
  console.log(chalk.cyan(`   cd ${appName}`));
  console.log(chalk.cyan(`   npm run dev\n`));
}

async function promptUser() {
  const { appName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'Enter the name for your authentication system:',
      validate: (input) => input.trim() ? true : 'App name is required',
    },
  ]);

  await createAuthSystem(appName.trim());
}

promptUser();
