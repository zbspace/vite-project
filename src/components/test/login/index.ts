import {
  defineComponent,
  ref,
  reactive,
  computed,
  onMounted,
  shallowRef,
  triggerRef,
  watchEffect,
  watch,
} from "vue";
interface IObj {
  title: string;
}
export default defineComponent({
  props: {
    bar: String,
    title: String,
  },
  emits: ["enlarge-text"],
  setup(props, { emit, slots }) {
    const count = ref<number>(1);
    const userName = ref<string>("xxx");
    const obj: IObj = reactive({ title: "login" });
    const double = computed<number>(() => count.value + 2);
    const el = ref<HTMLElement | null>(null);
    const str = ref("aaa");
    const shallowObj = ref({ count: 1 });
    const state = reactive({ count: 0 });
    const isActive = ref<boolean>(true);
    const arr = ref<Array<number>>([5, 6, 7]);
    const arr1 = ref<number>(1);

    const getArray = computed(() => {
      return arr.value.reverse();
    });
    const getValue = computed(() => {
      console.log("getValue");
      return shallowObj.value.count;
    });

    watch(state, (newValue, oldValue) => {
      console.log("----->", newValue.count, oldValue.count);
    });

    watch(
      () => shallowObj.value.count,
      (count, prevCount) => {
        console.log("watch");
      },
    );

    function getValueFn() {
      console.log("getValueFn()");
      return shallowObj.value.count;
    }

    function change() {
      shallowObj.value.count++;
      state.count++;
    }

    setTimeout(() => {
      state.count++;
    }, 2000);

    function onClick() {
      emit("enlarge-text", "zb");
    }

    onMounted(() => {
      el.value?.focus();
    });

    return {
      userName,
      obj,
      double,
      el,
      props,
      str,
      change,
      shallowObj,
      getValue,
      getValueFn,
      state,
      isActive,
      getArray,
      arr,
      arr1,
      onClick,
    };
  },
});
