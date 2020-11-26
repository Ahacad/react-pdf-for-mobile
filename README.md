

## react-pdf-mobile

![repo size](https://img.shields.io/github/repo-size/ahacad/react-pdf-for-mobile)

Read pdf easily on mobile.

### How to use

Clone the repo, install the dependencies with `npm install` or `yarn`, `cd` into the directory and make a new directory called `dist`, put pdf books inside `dist/books`. You may have depth-1 categories now. For example:

```
dist
│
books
├── compiler
│   └── 2.pdf
├── nihongo
│   └── 1.pdf
└── unix
    └── unix.pdf

```

Run `yarn build`, and you will have all the files bundled (using webpack) inside the `dist` directory. Push this directory to your server (nginx for example), navigate to the website with your browser, and you shall see the links now!


