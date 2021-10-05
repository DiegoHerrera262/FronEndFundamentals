# Introduction to HTML 5

The aim of this repo is to document my process of learning web dev fundamentals (HTML, CSS, JS), by designing my personal portfolio template. I have some experience programming with frameworks such as React or Angular, but I really need strong foundations on the basics. I believe that the best way to do that is by doing an interesting project.

**Date:** 22/09/21
**Topic:** What is HTML Markup

## How to use HTML to describe a website's content

Usually, and I consider myself part of that tradition, HTML seems to be the _easy_ part of developing a website. However, nothing is farther from the truth. In fact, a good markup can make the content more accessible, even enjoyable by people with visual conditions.

> Writing good HTML is a prerequisite for developing accessible websites for a wide variety of users and devices.

the mark up in HTML is represented by _opening and closing tags_. The basic structure of an HTML document looks like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    Hello world
  </body>
</html>
```

### Understanding the start of HTML documents

The first tag is the _doctype_, which specifies that the document is HTML5. The next tag

```html
<html lang="en"></html>
```

Is the root tag, and specifies the language of the document. This is quite important, specially for screen readers, which may assist disabled people.

> The language property can be set on a particular element of the website. The declaration on the root element just makes it global, if it is not overwritten

#### Understanding the head of an HTML document

All content is written inside the HTML tag. Now, to include important information about a page or site, as well as linking to scripts or stylesheets, a `head` tag is used. Inside, `meta` tags are used for storing relevant information. This is particularly helpful for search engines (_SEO optimization_). The most important ones (that I know of) are:

- The **Title** tag

```html
<title>Your page's title</title>
```

- The **Description** tag

```html
<meta
  name="description"
  content="Your page's description. Text that appears when you search on Google, apart from your sites title."
/>
```

- The **Keywords** tag

```html
<meta name="keywords" content="Related, search, words, for, SEO" />
```

- The **Author** tag

```html
<meta name="author" content="Yourself :)" />
```

In most instances, HTML documents are enriched by styling and interactivity. The first one is achieved using stylesheets written in CSS, the former, by using scripts written in Javascript (mainly). In the head, it is possible to specify which styles are to be applied to your document, as well as which methods to execute when a particular event occurs in your browser when some user interacts with your document.

To specify the styles, the tag `style` can be used to enclose CSS. For instance

```html
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
```

Would reset all default margins ang paddings on different HTML elements, as well as setting the box model to border box.

Usually, however, CSS instructions for styling components, like a navigation bar, a form, etc., scale quite fast with the desired level of sophistication. As a result, it is far more convenient to separate the actual markup or the content and the style in different files. The way to link stylesheets to an HTML document is using the `link` tag:

```html
<link rel="stylesheet" href="path/to/stylesheet" />
```

SoMething similar happens with interactivity and Javascript. The tag `script` can be used to embed methods triggered by _document events_.
