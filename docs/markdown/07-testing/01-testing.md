<!-- .slide: class="full-center" -->

# Testing Ecosystem

![](./assets/images/osman-rana-swACMn-yCn8-unsplash.jpg)

Author : [Osman Rana / Unsplash](https://unsplash.com/photos/swACMn-yCn8)
<!-- .element: class="credits" -->

Notes:

##==##

# Testing Application

[Act](https://github.com/nektos/act) provides some **local testing capabilities** to your GitHub Actions workflows.

- 🌴 You can design some workflows to test your action locally
- 🏜️ Otherwise, you will need to run thoses workflows like any others
- ⚠️ **Act** have limitations (some steps need the GitHub Actions ecosystem to run)
<!-- .element: class="list-fragment" -->

Notes:
 
##==##

# Testing possibilities

You **can unit test** your code depending of your language of choice.
But this will **not test the integration within the GitHub Action system**.

For that you need to see a **Workflow as Integration Tests suite**
or to mock **action/toolkit** function with a JavaScript testing library.

Notes:
