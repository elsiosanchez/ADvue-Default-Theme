<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Adempiere-logo.png" />
</p>

# Default - Theme based on [Vue Element Admin](https://panjiachen.github.io/vue-element-admin-site) for [ADempiere Vue](https://github.com/adempiere/adempiere-vue)

New default template theme for [ADempiere Vue](https://github.com/adempiere/adempiere-vue), based on [Vue Element Admin](https://panjiachen.github.io/vue-element-admin-site/). 90% of the ADVue-Default code is locked in the [Vue Element Admin](https://panjiachen.github.io/vue-element-admin-site) library. Thanks to this, ADVue-Default can keep its flexibility, but minimize the risk of errors.

## 🔌  Installation
In order to use the new Default theme in your [ADempiere Vue](https://github.com/adempiere/adempiere-vue) installation, you need:

1. Install `lerna` globally:

   ```
   npm install -g lerna
   ```

   or

   ```
   yarn global add lerna
   ```

1. Configure `ADvue-Default-Theme` repository as a git submodule in theme path of your [ADempiere Vue](https://github.com/adempiere/adempiere-vue) workspace, and then track `develop` branch:

   ```
   git submodule add -b develop git@github.com:elsiosanchez/ADvue-Default-Theme.git themes/default
   ```

1. Fetch all the data:

   ```
   git submodule update --init --remote
   ```
1. Generate `local.json` file from script `generate-local-config.js`:
   ```
   node themes/default/scripts/generate-local-config.js
   ```
1. Update [ADempiere Vue](https://github.com/adempiere/adempiere-vue) configuration by copying `local.json` file from `src/themes/default` to root `config` directory.

1. Download all dependencies and start development server:

   ```
   lerna bootstrap && yarn dev
   ```

1. That's it! Now, after opening your development server (http://localhost:9527 by default), you should see [ADempiere Vue](https://github.com/adempiere/adempiere-vue) with the Default theme. 🎉

## Design customization

Si quieres personalizar los diseños de Default puedes empezar con este increíble archivo by Aditya Patel from HotWax Commerce.
