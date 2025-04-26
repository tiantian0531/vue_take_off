import { ref } from "vue";

export default function () {
  let temp = ref(10);

  function changeTemp() {
    temp.value += 1;
  }
  return { temp, changeTemp };
}
