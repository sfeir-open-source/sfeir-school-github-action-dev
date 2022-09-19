<!-- .slide: class="with-code-bg-dark" -->

# Testing any other programming language based code

**You will have nothing** except the programming language testing tools itself.

For example, if your code rely on Shell scripts, you can use [bats](https://github.com/bats-core/bats-core).

In practice, Shell scripts are easly used on Docker container action and Composite action to serve as wrapper or to do the all works.
If both cases, you can use **bats** to help you write a test suite for your action.
