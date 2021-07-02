import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    title: "로켓 스터디 프론트 페이지",
  },
});

export default app;
