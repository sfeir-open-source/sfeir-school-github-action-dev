<!-- .slide: -->

# Testing JavaScript based code

Every testing farmework can be used to make javascript's test.

For example, you can use [**Jest** 🔗](https://jestjs.io/).

##--##

# Testing Shell script with Jest

## Input test 

```js
  it('sets sha to empty when explicit ref', async () => {
    inputs.ref = 'refs/heads/some-other-ref'
    const settings: IGitSourceSettings = await inputHelper.getInputs()
    expect(settings.ref).toBe('refs/heads/some-other-ref')
    expect(settings.commit).toBeFalsy()
  })
```

- Test can be : 

  - Mock 
  - End to end (e2e) 
  - Unit test 

Test can be made with multiple node version using the matrix strategy