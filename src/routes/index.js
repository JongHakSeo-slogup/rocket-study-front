import Home from "../pages/Home/index.svelte";
import DataLog from "../pages/DataLog/index.svelte";
import SignUp from "../pages/SignUp/index.svelte";

export const ROUTE_INFOS = [
  { path: "/", component: Home, label: "홈" },
  { path: "/signup", component: SignUp, label: "회원가입" },
  { path: "/dataLog", component: DataLog, label: "DataLog" },
];

export const routes = ROUTE_INFOS.reduce((total, item) => {
  total[item.path] = item.component;
  return total;
}, {});
