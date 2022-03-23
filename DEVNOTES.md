
## How this Extension was created

```bash
$ npm init yo code
npx: installed 15 in 3.41s

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the Visual  │
    |--(o)--|    │   Studio Code Extension  │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What type of extension do you want to create? New Extension (JavaScript)
? What's the name of your extension? number-it
? What's the identifier of your extension? number-it
? What's the description of your extension? inserts numbers
? Enable JavaScript type checking in 'jsconfig.json'? Yes
? Initialize a git repository? No
? Which package manager to use? npm

Writing in /mnt/c/repos/number-it/number-it...
   create number-it/.vscode/extensions.json
   create number-it/.vscode/launch.json
   create number-it/test/runTest.js
   create number-it/test/suite/extension.test.js
   create number-it/test/suite/index.js
   create number-it/.vscodeignore
   create number-it/README.md
   create number-it/CHANGELOG.md
   create number-it/vsc-extension-quickstart.md
   create number-it/jsconfig.json
   create number-it/extension.js
   create number-it/package.json
   create number-it/.eslintrc.json

...
```

## Package and Install extension

```bash
npx vsce package
code --install-extension number-it-0.0.1.vsix
```

## Notes

- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
- [create-yo](https://boneskull.com/create-yo/)
- [VSCode API](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)