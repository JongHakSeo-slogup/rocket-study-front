<script lang="ts">
import { Nav, NavLink, ListGroup } from "sveltestrap";
import { ROUTE_INFOS } from "../../routes/index";

let pageNow = window.location.hash;

window.addEventListener("hashchange", checkHash);

function checkHash() {
  ({ hash: pageNow } = window.location);
}
</script>

<p>바로가기</p>
<Nav vertical>
  <ListGroup flush>
    {#each ROUTE_INFOS as page}
      <NavLink
        class="rounded-2 mb-1 {pageNow === '#' + page.path &&
          ' bg-primary text-light'} "
        href={"#" + page.path}>{page.label}</NavLink>
    {/each}
  </ListGroup>
</Nav>
