Simple TypeScript project setup for VS Code.

0. Install TypeScript with npm: "npm install -g typescript"
1. Create a tsconfig.json file which contains the TypeScript settings for the project. Could be done by running "tsc --init" in the terminal in the project folder.

2. Compile (transpile) the ts-files into js-files. Could be done by "tsc filename.ts" in terminal.

3. Execute Run Build Task (Ctrl+Shift+B) in VS Code to compile all.

4. Run the code by node "filename.js" in terminal or by pressing F5 in VS Code which launches a program by the it's launch.json settings.

See also:
https://code.visualstudio.com/docs/typescript/typescript-compiling


Type 'tsc' to build all files in the root folder

https://code.visualstudio.com/docs/typescript/typescript-tutorial


Example for launch.json (in .vscode-Folder) for debugging:

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "program": "${workspaceFolder}/helloworld.ts",
        "preLaunchTask": "tsc: build - tsconfig.json",
        "outFiles": ["${workspaceFolder}/out/**/*.js"]
      }
    ]
  }
