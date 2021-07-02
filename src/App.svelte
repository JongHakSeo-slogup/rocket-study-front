<script>
import Router from "svelte-spa-router";
import { Styles, Col, Row } from "sveltestrap";
import { routes } from "./routes";
import AsideNav from "./components/AsideNav/index.svelte";

export let title;
</script>

<Styles />

<svelte:head>
  <title>{title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
    rel="stylesheet" />
</svelte:head>

<body>
  <Row>
    <Col md="2" sm="12">
      <AsideNav />
    </Col>
    <Col class="bg-light"><Router routes={routes} /></Col>
  </Row>
</body>
