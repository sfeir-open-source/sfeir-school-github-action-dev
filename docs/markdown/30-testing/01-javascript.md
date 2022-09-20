<!-- .slide: -->

# Testing JavaScript based code

Every testing framework can be used to make JavaScript tests.

For example, you can use [Jest](https://jestjs.io/).

##--##

# Why using a javascript test framework ?

- Zero config
- Isolated tests
- Run with `npm run test`
- Easy mocking

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Testing Shell script with Jest

- Unit test

```js
  it('sets sha to empty when explicit ref', async () => {
    inputs.ref = 'refs/heads/some-other-ref'
    const settings: IGitSourceSettings = await inputHelper.getInputs()
    expect(settings.ref).toBe('refs/heads/some-other-ref')
    expect(settings.commit).toBeFalsy()
  })
```

- Mock

```js
test("mock return value", () => {
  const mock = jest.fn();
  mock.mockReturnValue("bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});
```

Test can be made with multiple node version using the matrix strategy.
