# Simple Sample TypeScript project setup for VS Code

## Commands to init the project from scratch
0. Install TypeScript with npm: `npm install -g typescript`

1. Create a tsconfig.json file which contains the TypeScript settings for the project. Could be done by running `tsc --init` in the terminal in the project folder.

2. Compile (transpile) the ts-files into js-files. Could be done by `tsc filename.ts` in terminal.

3. Execute Run Build Task (Ctrl+Shift+B) in VS Code to compile all.

4. Run the code by node `filename.js` in terminal or by pressing F5 in VS Code which launches a program by the it's launch.json settings.

5. Create the package.json with `npm init`

See also:
https://code.visualstudio.com/docs/typescript/typescript-compiling


Type `tsc` to build all files in the root folder

https://code.visualstudio.com/docs/typescript/typescript-tutorial


For debugging in VS Code: create a launch.json (in .vscode-Folder) within the VS Code debug view
Example for launch.json:

```
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
            "program": "${workspaceFolder}\\out\\HelloApp.js",
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ],
            "preLaunchTask": "tsc: build - tsconfig.json",
        }
    ]
}
```

## Unit test configuration (Example for Mocha framework)

see https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40

1. NPM Install Command for Mocha/Chai

```
npm i -D chai mocha nyc ts-node typescript
npm i -D @types/chai @types/mocha
```
2. Add/edit test script configuration in package.json

```
"scripts": {
    "test": "mocha -r ts-node/register tests/**/*.test.ts",    
    "coverage": "nyc -r lcov -e .ts -x \"*.test.ts\" npm run test"
}
```

3. Add new section in launch.json
```
{
      "type": "node",
      "request": "launch",
      "name": "Mocha Current File",
      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
        "--no-timeouts",
        "--colors",
        "${file}",
        "--require",
        "ts-node/register"
      ],
      "console": "integratedTerminal",
      "sourceMaps": true,
      "internalConsoleOptions": "neverOpen"
}
```

Run test with Debug Launcher of VS Code or `npm test` in terminal
