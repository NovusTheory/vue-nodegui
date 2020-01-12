# vue-nodegui
NodeGUI but with Vue

This is a work in progress that uses Vue 3 to implement. [View the example project using vue-nodegui](https://github.com/NovusTheory/vue-nodegui-example)

## Contribution Guide / Goals
If you want to contribute to this project please note the current goals and objectives this project wants to obtain.

- Feature parity and similarity with HTML/JS in the web, writing applications should not feel any different from writing native HTML & JS for the web.
    - Examples
        - `<input>` will on-the-fly rebuild the native widget when type is changed rather than substituting custom element types (e.g. no `<checkbox>` or `<radio>` element use `type="radio/checkbox"`)
        - `<div>` & `<span>` instead of `<view>` (like react-nodegui) to create a QWidget container
- JavaScript API should be the same where possible to the DOM API
- CSS goals, while mostly application dependent, still stand how the structure should be
    - `.vue` files with `<style>` should translate to a single CSS file that is loaded by the application to `Window.styleSheet` (global to the window)
    - `.vue` Scoped style via `<style scoped>` is **not currently** a goal as it may be more tricky to support.

Design choices are open for discussion and if you have anything you'd like to contribute please open an issue (or if one exists comment on that) to create or add to a discussion around a specific design of something.