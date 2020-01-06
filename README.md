# tota.sk

This is the repository for [tota.sk](https://tota.sk)—an NPO in Slovakia cherishing the Rusyn culture. I’ve shared the repo to show the practical use of technology:
* [Nuxt.js](https://nuxtjs.org/)—The Vue.js framework to build statically generate website + app
* [Kentico Kontent](https://kontent.ai/)—The headless CMS to manage the content
* [Netlify](https://www.netlify.com/) to deploy the generated static site automatically

I’ve documented few examples of how I applied the technology, check out the [Contents](#contents). If you have any questions, how or why I did this or that part of the solution, feel free to [create an issue](https://github.com/surfinzap/tota/issues). 

# <a name="contents"></a> Contents
* [Build setup](#build-setup)
* Examples of use
	* [Rendering the project detail](#project-detail) (Rendering pages of one type)
	* Rendering Rich-text components (as in Kentico Kontent components)
	* Custom list of projects
	* Combining Single-page application (SPA) and server-side rendered portion of page
	* Generating Sitemap
	* Rendering SEO metadata
	* Cookies
* [Special thanks](#special-thanks)
* [License](#license)


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

## <a name="project-detail"></a> Rendering project detail (Rendering pages of one type)
Review this example, if you’d like to render pages of the same type (e.g. articles, blog posts,…). In case of tota.sk, the main, repeating content are projects, [like this](https://tota.sk/projekt/any-by-ste-ne-viryly).
### Getting project detail data
All projects are stored as a structured content in [Kentico Kontent](https://kontent.ai/). We’ll get data as a structured JSON via [Kentico Kontent Delivery API](https://docs.kontent.ai/reference/delivery-api) and “load” it to a [Vuex Store](https://nuxtjs.org/guide/vuex-store). Here’s how it’s done for project detail:
* store for projects → [store/project.js](store/project.js)
	* project detail is in “project” state with corresponding mutation/action
* using [kentico-kontent-nuxt-module](https://github.com/Domitnator/kentico-kontent-nuxt-module) to get content via Delivery API. Check out [its documentation](https://github.com/Domitnator/kentico-kontent-nuxt-module) or [nuxt.config.js](nuxt.config.js) to see a configuration for this repository.
### Project detail template
The template for project detail is located under [pages/projekt/_id.vue](pages/projekt/_id.vue); it’s a [Vue convention](https://nuxtjs.org/guide/routing#dynamic-routes) to generate routes in a desired way: tota.sk/projekt/project-detail. Here are extra notes:
* using [pug templating](https://pugjs.org/api/getting-started.html) instead of HTML
* fetching project detail asynchronously
* loading project's state via [Vue’s computed property](https://vuejs.org/v2/guide/computed.html#Computed-Properties)
* head() cannot access computed project state in a template, so we're accessing the store directly to fill in project's meta data
* project’s content is stored as a Rich-text with couple of nested components. We’ll cover the rendering of Rich-text in the following example.


## Rendering Rich-text components


# <a name="special-thanks"></a> Special thanks
TBD vits

# <a name="license"></a> License
Feel free to get inspired by the code snippets. All other content (written content and logotypes related to tota agentura) are copyrighted.
