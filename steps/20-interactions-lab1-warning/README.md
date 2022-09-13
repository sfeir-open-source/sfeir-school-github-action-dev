# Lab 1

**Declare a warning** if a package-lock.json is missing

## Tips

- [@actions/glob](https://www.npmjs.com/package/@actions/glob) npm documentation
- [@actions/core](https://www.npmjs.com/package/@actions/core) npm documentation
- [Iterate over an array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) in JavaScript
- Test if a [file exists](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsaccesspath-mode-callback) in Node.js

## Steps

- Create a repository
- Add the file `testing-workflow.yml` which will serve you to test the action
- Add JavaScript action file to start the lab
  - index.js
  - package.json
  - action.yaml

### Find all package.json

In the `index.js` file, use the `@actions/glob` module to get all `package.json` files in the current directory.

⚠️ You may want to exclude the `package.json` files from `node_modules`, check the `@actions/glob` documentation.

### Check if the associated package-lock.json exists and create a warning annotation if not

For each of the `package.json` files found, check if the associated `package-lock.json` exists using this code snippet

```js
files.forEach(file => {
  try {
    accessSync(path.join(path.dirname(file), 'package-lock.json'));
  } catch (err) {
    // File don't exists
  }
});
```

If the file don't exists, then define a [Warning annotation](https://github.com/actions/toolkit/tree/main/packages/core#annotations) on the `package.json` file.

- Message = `Consider to generate it and commit it`
- Title = `Missing package-lock.json`
