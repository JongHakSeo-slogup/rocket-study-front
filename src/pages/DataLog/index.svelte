<script>
import { rootUrl, dataLog } from "../../store";

let url = $rootUrl;

function flattenObj(obj, parent, res = {}) {
  for (const key in obj) {
    const propName = parent ? parent + "_" + key : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

$: {
  rootUrl.set(url);
}
</script>

<h2>BACKEND API URL</h2>
<div style="display: flex; align-items: center; margin-bottom:18px;">
  <p style="display:block; padding-right: 12px; margin:auto 0;">요청 url</p>
  <input bind:value={url} />
</div>
<h2>Data Logs</h2>
<div>
  {#each $dataLog as log}
    {#each Object.keys(flattenObj(log)) as key}
      {#if key === "type"}
        <h4 style="margin-top: 8px">{flattenObj(log)[key]}</h4>
      {:else if !!flattenObj(log)[key]}
        <span style="display: block">{key} : {flattenObj(log)[key]}</span>
      {/if}
    {/each}
  {/each}
</div>
