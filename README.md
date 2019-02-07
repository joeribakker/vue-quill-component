# 🖋 vue-quill-component

## Setup
Use `yarn` or `npm` to add the package in your project. My examples will use `yarn`.

Note that `quill` version 1.x is a peer dependency rather than a direct dependency, so don't forget to install it as well. I chose this so you have control over the version of quill you want to use, and keep control over the `Quill` class.

```
yarn add quill@1 vue-quill-component
```

## Usage
Simply import the component and use it in your template, binding some `contents` to it:

### Example

```vue
<template>
    <div>
        <h1>Editor</h1>
        <editor v-model="contents" />
    </div>
</template>

<script>
    import VueQuill from 'vue-quill-component'
    
    export default {
        components: {
            editor: VueQuill
        },
        data() {
            return {
                contents: { ops: [] },
            };
        },
    }
</script>

<style>
    /* You can choose which parts of the Quill CSS you want to use. */
    @import '~quill/dist/quill.core.css';
</style>
```

[Registration](https://quilljs.com/docs/api/#register) of formats and modules happens using the Quill class, which is shared between components. Make sure you register your extensions before the editor component is mounted.

```js
import Quill from 'quill';
import CustomFormat from 'src/CustomFormat.js';

Quill.register('formats/myFormat', CustomFormat);
```

## Component definition
### Model
The component supports [`v-model`](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components) to sync the `contents` property. The component models changes to this property to an `input` event.

```vue
<editor v-model="contents"/>
```

If you don't want to use the `v-model` directive, you'll have to bind `contents` and update its value on `@input`:

```
<editor :contents="contents" @input="(value) => {contents = value}"/>
```

### Properties
#### `contents: Object = {ops: []}`
The contents of the editor. This can be an instance of [Delta](https://quilljs.com/docs/delta/) or a plain object that represents the Delta format. You can also bind this property via `v-model`.

#### `editorTabIndex: Number`
If given, sets a `tabindex` on the Quill instance's root scroll element.

#### `formats: Array = []`
A whitelist of all format names to allow. If not given, no formats are allowed. See [Quill's `formats` option](https://quilljs.com/docs/configuration/#formats).

#### `isReadOnly: Boolean = false`
If `true`, the user will be unable to edit the contents of the editor. This property uses [Quill’s `enable` method](https://quilljs.com/docs/api/#enable).

#### `modules: Object = {}`
A collection of modules to be used by the Quill editor instance. See [Quill's `modules` option](https://quilljs.com/docs/modules/).

#### `options: Object`
All [configuration options](https://quilljs.com/docs/configuration/#options) to pass to Quill when it initializes the editor.

Note: You have the choice to pass most options such as `theme`, `modules` and `placeholder` directly as a property on the component rather than via this options property. Options passed directly as a property will always override priority over those passed in this `option` object.

#### `placeholder: String`
A placeholder to display when the editor has no content. See [Quill's `placeholder` option](https://quilljs.com/docs/configuration/#placeholder).

#### `theme: String`
The name of the theme to use. Any falsey value will load Quill's core theme. See  [Quill's `theme` option](https://quilljs.com/docs/configuration/#theme).

### Events
#### `input`
Emitted when `contents` is updated.

The callback receives the new `contents`.

```js
callback(contents: Delta)
```

#### `changeContent`
Emitted when the Quill instance emits [`editor-change`](https://quilljs.com/docs/api/#editor-change) with a `name` of [`text-change`](https://quilljs.com/docs/api/#text-change).

The callback receives the `change` to the content, the current and previous `contents`, the `source` of the change and the `editor` instance the change occured in.

```js
callback(change: Delta, contents: Delta, previousContents: Delta, source: String, editor: Quill)
```
 
#### `changeSelection`
Emitted when the Quill instance emits [`editor-change`](https://quilljs.com/docs/api/#editor-change) with a `name` of [`selection-change`](https://quilljs.com/docs/api/#selection-change).

The callback receives the current and previous `range`, the `source` of the change in selection and the `editor` instance the change occured in.

```js
callback(range: Range, previousRange: Range, source: String, editor: Quill)
```
  
#### `focus`
Emitted when the editor gains focus.

The callback receives the `range` at which the editor gained focus, the `source` that caused focus on the editor and the `editor` instance itself.
 
```js
callback(range: Range, source: String, editor: Quill)
```
 
#### `blur`
Emitted when the editor loses focus.

The callback receives the `range` at which the editor lost focus, the `source` that caused the editor to lose focus and the `editor` instance itself.

```js
callback(previousRange: Range, source: String, editor: Quill)
```

### Methods
You can call the following instance methods via a `ref` to the component.

#### `focus()`
Focus on the editor.

##### Example

```vue
<template>
    <button @click="focusOnEditor">Focus!</button>
    <VueQuill ref="editor"/>
</template>

<script>
    import VueQuill from 'vue-quill-component';
    
    export default {
        components: {
            VueQuill,
        }
        methods: {
            focusOnEditor() {
                this.$refs.editor.focus();
            },
        },
    }
</script>
```

#### `blur()`
Remove focus from the editor.