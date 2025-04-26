import { ref } from "vue";

export default function () {
  let height = ref(0);

  function changeHeight() {
    height.value += 10;
  }

  return { height, changeHeight };
}
