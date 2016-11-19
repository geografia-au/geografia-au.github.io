[![wercker status](https://app.wercker.com/status/c74e2a83e849712959da567b04f447e5/m/master "wercker status")](https://app.wercker.com/project/byKey/c74e2a83e849712959da567b04f447e5)


# making changes

1. All changes are to be made in the `source` directory. Don't touch files outside that directory, as they are automatically generated.
2. 

# geografia-au.github.io
geografia.com.au Website uses the Hugo Static Site Generator

# dependencies

[hugo](https://gohugo.io/) go based static site generator. download binaries for your system [here](https://github.com/spf13/hugo/releases).

# development / publishing

Start a development server:

```sh
cd source
hugo server
```

# (re)build the static site

navigate to the sources folder and build the page in ``../``

```sh
cd source
hugo -d ../
```
