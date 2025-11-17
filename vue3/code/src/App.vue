<template>
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    placeholder="test placeholder"
    :height="800"
    :width="150"
    :readonly="true"
  />
</template>

<script>
import Codemirror from "codemirror-editor-vue3";

// placeholder
import "codemirror/addon/display/placeholder.js";

// language
import "codemirror/mode/javascript/javascript.js";
// placeholder
import "codemirror/addon/display/placeholder.js";
// theme
import "codemirror/theme/dracula.css";

import { ref } from "vue";
export default {
  components: { Codemirror },
  setup() {
    const code = ref(`
var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}`);

    return {
      code,
      cmOptions: {
        mode: "text/javascript", // Language mode
        theme: "default", // Theme dracula
        lineNumbers: true,
        // readOnly: true,
        autofocus: false,
        highlightActiveLine: false,
        editable: false,
        lineWrapping: true,  //自动换行
      },
    };
  },
};
</script>
