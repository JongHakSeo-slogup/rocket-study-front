<script>
import Router from "svelte-spa-router";
import { Styles, Col, Container, Row } from "sveltestrap";
import { routes } from "./routes";
// import Breadcrumbs from './components/Breadcrumbs/index.svelte';

export let title;
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
    rel="stylesheet" />
</svelte:head>

<Styles />

<body>
  <!--<Breadcrumbs/>-->
  <Container>
    <nav>
      <Row>
        <Col><a href="/">처음으로</a></Col>
        <Col>
          <a href="#/signup">회원가입</a>
        </Col>
        <Col><a href="#/about">about</a></Col>
      </Row>
    </nav>
  </Container>
  <Router routes="{routes}" />
</body>
