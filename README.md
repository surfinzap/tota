# tota.sk

This is the public repository for [tota.sk](https://tota.sk)—an NPO in Slovakia cherishing the Rusyn culture.

I wanted to make this repo public to share few examples of how I used:
* [Nuxt.js](https://nuxtjs.org/)—the Vue.js framework to build statically generated website and single page app
* [Kentico Kontent](https://kontent.ai/)—the headless CMS to manage the content

# <a name="contents"></a> Contents
* [Build setup](#build-setup)
* Examples of use
	* [Rendering the project detail](#project-detail) (Rendering dynamic pages of one type)
	* [Rendering Rich-text components](#rich-text) (as in Kentico Kontent components)
	* [Custom list of projects](#custom-list)
	* [Combining Single-page application (SPA) and server-side rendered content](#spa)
	* [Generating static site and sitemap](#static-site)
	* [Adding Cookie Consent](#cookie-consent)
	* [Schema.org metadata](#schema-metadata)
	* [Lazy-loading images](#lazyloading)
* [Special thanks](#special-thanks)
* [License](#license)

If you have any questions about the code or examples, feel free to [create an issue](https://github.com/surfinzap/tota/issues).


# <a name="build-setup"></a> Build Setup

``` bash
# install dependencies
$ npm ci

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Examples of use


## <a name="project-detail"></a> Rendering project detail (Rendering dynamic pages of one type)
[Each project](https://tota.sk/projekt/any-by-ste-ne-viryly) detail has its own page. Review this section, if you’d like to render dynamic pages of the same type (e.g. articles, blog posts,…).

### Getting project detail data
All projects are stored as a structured content in [Kentico Kontent](https://kontent.ai/). We’ll get data as a structured JSON via [Kentico Kontent Delivery API](https://docs.kontent.ai/reference/delivery-api) and “load” it to a [Vuex Store](https://nuxtjs.org/guide/vuex-store). Here’s how it’s done for project detail:
* store for projects → [store/project.js](store/project.js)
	* project detail is in “project” state with corresponding mutation/action
* using [kentico-kontent-nuxt-module](https://github.com/Domitnator/kentico-kontent-nuxt-module) to get content via Delivery API. Check out [module’s documentation](https://github.com/Domitnator/kentico-kontent-nuxt-module) and how it is  [configured](nuxt.config.js) for this repository.

### Project detail template
The template for project detail is located at [pages/projekt/_id.vue](pages/projekt/_id.vue). [Nuxt has a convention](https://nuxtjs.org/guide/routing#dynamic-routes) how to name/categorize page templates to generate routes in a desired way (in my case I was looking for routes tota.sk/projekt/{project-detail}.

Here are extra notes on what is happening inside the file:
* using [pug templating](https://pugjs.org/api/getting-started.html) instead of HTML
* fetching project detail asynchronously
* loading project’s state via [Vue’s computed property](https://vuejs.org/v2/guide/computed.html#Computed-Properties)
* head() cannot access computed project state in a template, so we’re accessing the store directly to fill in project’s meta data
* project’s content is stored as a Rich-text with couple of nested components. We’ll cover the rendering of Rich-text in the following example.


## <a name="rich-text"></a> Rendering Rich-text components
### Content model
In Kentico Kontent, you can extend Rich-text editor functionality with custom inline [Components](https://docs.kontent.ai/tutorials/write-and-collaborate/structure-your-content/structuring-editorial-articles-with-components).
With Components, you’ll both create more appealing content for visitors and you’ll still get nicely structured response from [Delivery API](https://docs.kontent.ai/reference/delivery-api).

I use components a lot. If you take a look at [this project](https://tota.sk/projekt/cervenyj-bereh), there couple of Components within the Rich-text: Image with Caption, YouTube Video, Point-of-sale list, Publication Info. (Here’s the [list of all used Rich-text components](components/rich-text/)).

There are couple of ways, how you can go about rendering the components, we’ll cover the two ways we tried.

### Resolving components with kentico-kontent-nuxt-module (and kontent-delivery-sdk-js)
[kentico-kontent-nuxt-module](https://github.com/Domitnator/kentico-kontent-nuxt-module) is “wrapping” kontent-delivery-sdk-js and gives you tools to ease the work with JS SDK in Nuxt.js app. With this toolset, you need to:
* Write a resolver for each Rich-text component (or linked item) and save it models/ folder in Nuxt.js project; [Example of resolver in Kontent Delivery JS SDK](https://github.com/Kentico/kontent-delivery-sdk-js/blob/master/DOCS.md#resolving-content-items-and-components-in-rich-text-elements)
* Register a resolver with kentico-kontent-nuxt-module, as it is shown in [this example](https://github.com/Domitnator/kentico-kontent-nuxt-module#pluginskenticokontentnuxtmodulejs-1)

We have tried this approach at first, and it was fine; we were able to write all Rich-text components this way. What we didn’t like so much with this approach was that with JS SDK you have to write [resolvers as interpolated string](https://github.com/Kentico/kontent-delivery-sdk-js/blob/master/DOCS.md#globally). This way, content-heavy components got less maintainable templates. And on top of that we weren’t using Vue’s native component approach (yeah, we wanted to marry Vue components with Kentico Kontent components). So we rewrote resolvers into Vue components the following way:

### Rendering Kentico Kontent components as Vue components
[@vit-svoboda](https://github.com/vit-svoboda) wrote [kontent-rich-text-for-vue](https://github.com/vit-svoboda/kontent-rich-text-for-vue)—an NPM package to help you resolve/render Kontent’s rich-text components as Vue components.
Let me walk you through how to render components. I’ll use “Project” content type as an example as it includes a lot of components:
* set rich_text_components in [project store](store/project.js)
* write a Rich text component that you want to be rendered (take an inspiration from the [list of Rich-text components in this project](components/rich-text))
* write a Vue component that will keep the list of all your Rich text components to be rendered. Here's mine—[rich-text-component.vue](components/rich-text-component.vue).
* use it all in [Project Vue template](pages/projekt/_id.vue):
	* import { RichText } from 'kontent-rich-text-for-vue' and use it in a `<template>` section
	* in `<script>` section take a look at: componets, richTextComponent, provide ()



## <a name="custom-list"></a> Custom list of projects
There is a [list of projects](https://tota.sk/) at homepage. These projects don’t have any automatic ordering (e.g. sort by date desc), but they’re custom-ordered based on agency’s preferences.

### Content model (Custom list in Kentico Kontent)
In Kentico Kontent, I’ve created a “Project list” content type (see its [definition](https://deliver.kontent.ai/bb4c6333-f362-0041-9d56-f18f18e36725/types?system.codename=project_list)). The “Project list” has one [“Linked items” element](https://docs.kontent.ai/tutorials/write-and-collaborate/structure-your-content/linking-authors-to-your-articles) element accepting only the “Project” content type. This way you can update the order of the project anytime in Kentico Kontent.

### Getting the list of projects
All projects are stored as a structured content in [Kentico Kontent](https://kontent.ai/). We’ll get data as a structured JSON via [Kentico Kontent Delivery API](https://docs.kontent.ai/reference/delivery-api) and “load” it to a [Vuex Store](https://nuxtjs.org/guide/vuex-store). Here’s how it’s done for project detail:
* store for projects → [store/project.js](store/project.js)
	* project detail is in “projects” state with corresponding mutation/action
* using [kentico-kontent-nuxt-module](https://github.com/Domitnator/kentico-kontent-nuxt-module) to get content via Delivery API. Check out [module’s documentation](https://github.com/Domitnator/kentico-kontent-nuxt-module) and how it is  [configured](nuxt.config.js) for this repository.

### Projects list — Vue component
Vue component is located at [pages/components/projects-list.vue](pages/components/projects-list.vue); as a component it’s used at [pages/index.vue](pages/index.vue)


## <a name="spa"></a> Combining Single-page application (SPA) and server-side rendered content
Almost all the projects at tota.sk were offline projects (e.g. [this book](https://tota.sk/projekt/any-by-ste-ne-viryly)). But one project—[translit](https://tota.sk/translit)—is different. It’s an online project, a single page application to transliterate Rusyn language from Cyrillic script to Latin alphabet and vice versa.

Here’s the thing. By default, Nuxt.js can work in [one of the two modes](https://nuxtjs.org/guide#server-rendered-universal-ssr-)—as a Universal SSR (Server-side rendering) or an SPA (single page application). You have to choose one mode and I’ve chosen Universal SSR (for SEO reasons + I wanted to generate a static site).

I though it may be an issue if I’d like to run client-side JavaScript while the whole repo is in Server-side Rendering (SSR) mode. Fortunately, the Nuxt has a [`<client-only>`](https://nuxtjs.org/api/components-client-only#the-lt-client-only-gt-component) component that let’s you wrap another component that is supposed to be executed at client side.

Take a look at how it’s used in code:
* translit as a page is at [pages/translit.vue](pages/translit.vue)
	* within the file, there is [translit-app component](components/translit-app.vue) that is wrapped in [`<client-only>`] component (fyi I’m using [pug templating](https://pugjs.org/api/getting-started.html), so there are no `<>` html brackets)
	* translit-app component therefore works as a “partial SPA”.

By the way, if you’d ever need a transliteration script, it’s also available on GitHub as [an open-source NPM package—translit](https://github.com/surfinzap/translit).


## <a name="static-site"></a> Generating static site and sitemap

### Static site
When you’re running Nuxt.js in [Universal SSR mode](https://nuxtjs.org/guide#server-rendered-universal-ssr-), [generating a static site](https://nuxtjs.org/guide#static-generated-pre-rendering-) is easy—you call `npm run generate`. You will get a static HTML file for each page you have. However, the static generation is not including dynamic pages by default.

In this project, majority of content are dynamic pages (projects and articles, in particular). If I wanted to generate static files of them, I had to include the routes in `nuxt.config.js` file. Here’s the [official documentation](https://nuxtjs.org/api/configuration-generate#function-which-returns-a-promise) and here’s how I adjusted my [`nuxt.config.js`](`nuxt.config.js`) file. There are two promises calling for a list of projects and for a list of articles.

### Sitemap
I have used [@nuxtjs/sitemap](https://github.com/nuxt-community/sitemap-module) package to auto-generate a Sitemap. This module will generate sitemap.xml for those pages that are known, i.e. not for the dynamic pages. But if you set the routes as we already did to generate a static site, you are all set.

By the way, the module is [rather robust](https://github.com/nuxt-community/sitemap-module) and I’m only using a portion of it. However, if you’d like to take a look at my config, take a look at [`nuxt.config.js`](`nuxt.config.js`) file.


## <a name="cookie-consent"></a> Adding Cookie Consent
I have decided to use the [cookieconsent NPM package](https://www.npmjs.com/package/cookieconsent). It seemed to have a lot [configuration options](https://www.osano.com/cookieconsent/documentation/javascript-api/). However, the JavaScript configuration has to be executed at client side (I have talked about Server vs. Client server rendering [elsewhere](#spa)).

Here’s [the documentation](https://nuxtjs.org/faq/window-document-undefined#window-or-document-undefined-) of how you can run client-side JS in SSR mode. Here’s how I have included the configuration in the [master template](layouts/default.vue).


## <a name="schema-metadata"></a> Schema.org metadata
* For [Book](https://schema.org/Book) metadata check out [book-info.vue](components/rich-text/book-info.vue) Vue component.
* Here’s the Google’s [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool) to check you’ve applied schema properly ([example—one of the books](https://search.google.com/structured-data/testing-tool#url=https%3A%2F%2Ftota.sk%2Fprojekt%2Fany-by-ste-ne-viryly))


## <a name="lazyloading"></a> Lazy-loading images
* Used [vue-lazyload](https://github.com/hilongjw/vue-lazyload) plugin
* With the help of [this tutorial](https://www.yasminzy.com/nuxt/vue-lazyload.html#steps)
* My implementation in [this commit](https://github.com/surfinzap/tota/commit/7f50f9ed2eb6f02d6eb34796a0967e78a9590c76)

# <a name="special-thanks"></a> Special thanks
[@vit-svoboda](https://github.com/vit-svoboda) for making it happen. He helped me a lot with JavaScript + he has done done an awesome [Vue module for parsing Kentico Kontent’s Rich-text components](https://github.com/vit-svoboda/kontent-rich-text-for-vue).

# <a name="license"></a> License
Feel free to get inspired by the code snippets. All other content (written content and logotypes related to tota agentura) are copyrighted.
