<template>
    <div ref="quillElement"></div>
</template>

<script>
    import Quill from 'quill';
    import isEqual from 'lodash.isequal';
    
    export default {
        model: {
            prop: 'contents',
            event: 'input',
        },
        props: {
            contents: {
                type: Object,
                default: () => ({
                    ops: []
                }),
            },
            editorTabIndex: {
                type: Number,
            },
            formats: {
                type: Array,
                default: () => [],
            },
            isReadOnly: {
                type: Boolean,
                default: false,
            },
            modules: {
                type: Object,
                default: () => ({}),
            },
            options: {
                type: Object,
                default: () => ({}),
            },
            placeholder: {
                type: String,
            },
            theme: {
                type: String,
            },
        },
        data: function() {
            return {
                quill: undefined,
            }
        },
        mounted: function() {
            this.quill = new Quill(this.$refs.quillElement, Object.assign({}, this.options, {
                theme: this.theme,
                placeholder: this.placeholder,
                formats: this.formats,
                modules: this.modules,
            }));
            
            applyIsEnabledToEditor(this.quill, this.isReadOnly);
            
            if (this.editorTabIndex !== undefined) {
                applyTabIndexToEditor(this.quill, this.editorTabIndex);
            }
            
            this.quill.on('editor-change', (name, ...args) => {
                if (name === 'text-change') {
                    this.onEditorTextChange(...args);
                }
                
                if (name === 'selection-change') {
                    this.onEditorSelectionChange(...args);
                }
            });
        },
        methods: {
            onEditorTextChange: function(delta, oldDelta, source) {
                this.$emit('input', this.quill.getContents());
                this.$emit('changeContent', delta, oldDelta, this.quill.getContents(), source, this.quill);
            },
            onEditorSelectionChange: function(range, oldRange, source) {
                if (range && !oldRange) {
                    this.$emit('focus', range, source, this.quill);
                }
                
                if (!range && oldRange) {
                    this.$emit('blur', oldRange, source, this.quill);
                }
                
                this.$emit('changeSelection', range, oldRange, source, this.quill);
            },
            focus: function() {
                if (this.quill) {
                    this.quill.focus();
                }
            },
            blur: function() {
                if (this.quill) {
                    this.quill.blur();
                }
            }
        },
        watch: {
            contents: function(contents) {
                // Do not update the editor contents if the new value is the
                // same as the current editor contents.
                if (this.quill && !isValueEqual(contents, this.quill.getContents())) {
                    this.quill.setContents(contents);
                }
            },
            editorTabIndex: function(tabIndex) {
                applyTabIndexToEditor(this.quill, tabIndex);
            },
            isReadOnly: function(isReadOnly) {
                applyIsEnabledToEditor(this.quill, isReadOnly);
            },
        },
    }
    
    function isValueEqual(value, previousValue) {
		if (value.ops && previousValue.ops) {
			return isEqual(value.ops, previousValue.ops);
		} else {
			return isEqual(value, nextValue);
		}
	}
    
    function applyTabIndexToEditor(quill, tabIndex) {
        quill.scroll.domNode.tabIndex = tabIndex;
    }
    
    function applyIsEnabledToEditor(quill, isReadOnly) {
        quill.enable(!isReadOnly);
    }
</script>