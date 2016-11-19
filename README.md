
[![wercker status](https://app.wercker.com/status/c74e2a83e849712959da567b04f447e5/m/master "wercker status")](https://app.wercker.com/project/byKey/c74e2a83e849712959da567b04f447e5)


# Making changes

1. All changes are to be made in the `source` directory. Don't touch files outside that directory, as they are automatically generated.
2. If you are making changes to HTML you are doing it *WRONG*

All changes must be done in the `source` directory see [source](https://github.com/geografia-au/geografia-au.github.io/tree/master/source)  you don’t need to touch anything else. and even in there most changes will be under the `data` directory [data](https://github.com/geografia-au/geografia-au.github.io/tree/master/source/data) If you see yourself changing HTML you are doing it wrong. Please contact myself or @ziprandom before  making HTML changes.

So as an example this [issue 44](https://github.com/geografia-au/geografia-au.github.io/issues/44)  required a change to our achievements, the data for which is under the `data/milestones` directory [source/data/milestones](https://github.com/geografia-au/geografia-au.github.io/tree/master/source/data/milestones)

In the beginning you may need to try to figure out the `source` directory layout. But it's not too complex.

# geografia-au.github.io
geografia.com.au Website uses the Hugo Static Site Generator

# dependencies

[hugo](https://gohugo.io/) go based static site generator. download binaries for your system [here](https://github.com/spf13/hugo/releases).

# development / publishing

Start a development server:

```sh
# from source directory
cd source
hugo server

# or from root
hugo --source="source" serve
```

# (re)build the static site

```sh
cd source
hugo -d ../

# or from root
hugo --source="source" -d .
```
