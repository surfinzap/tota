# tota.sk

This is the public repository for [tota.sk](https://tota.sk)—an NPO in Slovakia cherishing the Rusyn culture. 

I have decided to make this repo public to share few examples (including comments) how I used:
* [Nuxt.js](https://nuxtjs.org/)—The Vue.js framework to build statically generate website + app
* [Kentico Kontent](https://kontent.ai/)—The headless CMS to manage the content

# <a name="contents"></a> Contents
* [Build setup](#build-setup)
* Examples of use
	* [Rendering the project detail](#project-detail) (Rendering dynamic pages of one type)
	* [Rendering Rich-text components](#rich-text) (as in Kentico Kontent components)
	* [Custom list of projects](#custom-list)
	* [Combining Single-page application (SPA) and server-side rendered content](#spa)
	* [Generating static site and sitemap](#static-site)
	* [Adding Cookie Consent](#cookie-consent)
* [Special thanks](#special-thanks)
* [License](#license)

If you have any questions about the feel free to [create an issue](https://github.com/surfinzap/tota/issues). 


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
[Each project](https://tota.sk/projekt/any-by-ste-ne-viryly) detail has its own page. Review this example, if you’d like to render dynamic pages of the same type (e.g. articles, blog posts,…).

### Getting project detail data
All projects are stored as a structured content in [Kentico Kontent](https://kontent.ai/). We’ll get data as a structured JSON via [Kentico Kontent Delivery API](https://docs.kontent.ai/reference/delivery-api) and “load” it to a [Vuex Store](https://nuxtjs.org/guide/vuex-store). Here’s how it’s done for project detail:
* store for projects → [store/project.js](store/project.js)
	* project detail is in “project” state with corresponding mutation/action
* using [kentico-kontent-nuxt-module](https://github.com/Domitnator/kentico-kontent-nuxt-module) to get content via Delivery API. Check out [module’s documentation](https://github.com/Domitnator/kentico-kontent-nuxt-module) and how it is  [configured](nuxt.config.js) for this repository.

### Project detail template
The template for project detail is located at [pages/projekt/_id.vue](pages/projekt/_id.vue). [Nuxt has a convention](https://nuxtjs.org/guide/routing#dynamic-routes) how to name/categorize page templates to generate routes in a desired way (in my case I was looking for routes tota.sk/projekt/{project-detail}. 

Here are extra notes on what is happening inside the file (TBD make it inline comments after merging):
* using [pug templating](https://pugjs.org/api/getting-started.html) instead of HTML
* fetching project detail asynchronously
* loading project’s state via [Vue’s computed property](https://vuejs.org/v2/guide/computed.html#Computed-Properties)
* head() cannot access computed project state in a template, so we're accessing the store directly to fill in project's meta data
* project’s content is stored as a Rich-text with couple of nested components. We’ll cover the rendering of Rich-text in the following example.


## Rendering Rich-text components
TBD


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

I though it may be an issue if I’d like to run client-side JavaScript while the whole repo is in Server-side Rendering (SSR) mode. Fortunately, the Nuxt has a [`<client-only>`](https://nuxtjs.org/api/components-client-only#the-lt-client-only-gt-component) component that let’s you wrap another component that is supposed to be executed at client. 

Take a look at how it's used in code:
* translit as a page is at [pages/translit.vue](pages/translit.vue)
	* within the file, there is [translit-app component](components/translit-app.vue) that is wrapped in [`<client-only>`] component (fyi I’m using [pug templating](https://pugjs.org/api/getting-started.html), so there are no `<>` html brackets)
	* translit-app component therefore works as a “partial SPA”.

By the way, if you’d ever need a transliteration script, it’s also available on GitHub as a [separate library—translit](https://github.com/surfinzap/translit).


## <a name="static-site"></a> Generating static site and sitemap

### Static site
When you’re running Nuxt.js in [Universal SSR mode](https://nuxtjs.org/guide#server-rendered-universal-ssr-), [generating a static site](https://nuxtjs.org/guide#static-generated-pre-rendering-) is easy—you call `npm run generate`. You will get a static HTML file for each page you have. However, the static generation is not including dynamic pages by default.

In this project, majority of content are dynamic pages (projects and articles, in particular). If I wanted to generate static files of them, I had to include the routes in `nuxt.config.js` file. Here’s the [official documentation](https://nuxtjs.org/api/configuration-generate#function-which-returns-a-promise) and here’s how I adjusted my [`nuxt.config.js`](`nuxt.config.js`) file. There are two promises calling for a list of projects and for a list of articles. 

### Sitemap
I have used [@nuxtjs/sitemap](https://github.com/nuxt-community/sitemap-module) package to auto-generate a Sitemap. This module will generate sitemap.xml for those pages that are known, i.e. not for the dynamic pages. But if you set the routes as we already did to generate a static site, you are all set. 

By the way, the module is rather robust and I’m only using a portion of it. However, if you’d like to take a look at my config, take a look at [`nuxt.config.js`](`nuxt.config.js`) file.


## <a name="cookie-consent"></a> Adding Cookie Consent
I have decided to use the [cookieconsent NPM package](https://www.npmjs.com/package/cookieconsent). It seemed to have a lot [configuration options](https://www.osano.com/cookieconsent/documentation/javascript-api/). However, the JavaScript configuration has to be executed at client side (I have talked about Server vs. Client server rendering [elsewhere](#spa)). 

Here’s [the documentation](https://nuxtjs.org/faq/window-document-undefined#window-or-document-undefined-) of how you can run client-side JS in SSR mode. Here’s how I have included the configuration in the [master template](layouts/default.vue).

# <a name="special-thanks"></a> Special thanks
TBD [@vit-svoboda](https://github.com/vit-svoboda)

# <a name="license"></a> License
Feel free to get inspired by the code snippets. All other content (written content and logotypes related to tota agentura) are copyrighted.
