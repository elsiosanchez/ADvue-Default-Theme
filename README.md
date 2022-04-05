<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Adempiere-logo.png" />
</p>

# Default - Tema basado en [Vue Element Admin](https://panjiachen.github.io/vue-element-admin-site/) para [ADempiere Vue](https://github.com/adempiere/adempiere-vue/)

New default template theme for [ADempiere Vue](https://github.com/adempiere/adempiere-vue/), based on [Vue Element Admin](https://panjiachen.github.io/vue-element-admin-site/). 90% of the ADVue-Default code is locked in the [Vue Element Admin](https://panjiachen.github.io/vue-element-admin-site/) library. Thanks to this, ADVue-Default can keep its flexibility, but minimize the risk of errors.

## 🔌  Installation
To be able to use new Capybara theme in your Vue Storefront installation, you need to:

1. Install `lerna` globally:

   ```
   npm install -g lerna
   ```

   or

   ```
   yarn global add lerna
   ```

1. Configure `vsf-capybara` repository as a git submodule in theme path of your Vue Storefront workspace, and then track `master` branch:

   ```
   git submodule add -b master https://github.com/elsiosanchez/ADvue-Default-Theme src/themes/default
   ```

1. Fetch all the data:

   ```
   git submodule update --init --remote
   ```
1. Generate `local.json` file from script `generate-local-config.js`:
   ```
   node src/themes/capybara/scripts/generate-local-config.js
   ```
1. Update Vue Storefront configuration by copying `local.json` file from `src/themes/capybara` to root `config` directory.
1. Update TypeScript compiler option in `tsconfig.json` in root directory: change value for `compilerOptions`**.**`paths`**.**`theme/*` from default theme `["src/themes/default/*"]` to brand new Capybara theme: `["src/themes/capybara/*"]`.
1. Download all dependencies and start development server:

   ```
   lerna bootstrap && yarn dev
   ```

1. That’s all! Now after opening your development server (http://localhost:3000 by default) you should see Vue Storefront with Capybara theme!  🎉

## Design customization

Si quieres personalizar los diseños de Default puedes empezar con este increíble archivo by Aditya Patel from HotWax Commerce.
