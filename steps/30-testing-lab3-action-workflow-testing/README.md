# Lab 3

Test scripts from an action through workflow

## Tips

- [test cmd](https://www.man-linux-magique.net/man1/test.html)

## Steps

- Create a repository
- Add the file `release-workflow.yml` which will serve you to run the lab
- Use the file `action.yml` and
  - add 3 inputs : `addition-input-1`, `addition-input-2` and `palindrome-input`
  - add 3 outputs : `addition`, `helloWorld` and `palindrome`
  - add 3 steps that will output the script result
    - `run addition` that perform the addition of `addition-input-1` and `addition-input-2`
    - `run hello-world` that run the hello-world script
    - `run palindrome` that run palindrome shell
- update `release-workflow.yml` to test that our action output the following value : 
  - `4 + 5` equals 9 
  - `ab` + `cd` equals 0
  - the hello-world script return `Hello World!`
  - `kayak` is a palindrome 
  - `foo` is not a palindrome 