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

<h1>BACKEND API URL</h1>
<input bind:value={url} />

<h2>Data Logs</h2>
<div>
  {#each $dataLog as log}
    {#each Object.keys(flattenObj(log)) as key}
      {#if key === "type"}
        <h4>{flattenObj(log)[key]}</h4>
      {:else}
        <p>{key}:{flattenObj(log)[key]}</p>
      {/if}
    {/each}
  {/each}
</div>
