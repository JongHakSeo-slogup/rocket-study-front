<script>
	import Router from 'svelte-spa-router'
	import { Styles } from 'sveltestrap';
	import { routes } from "./routes";

	export let title;
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">
</svelte:head>

<Styles/>

<body>
<nav>
	<a href="/">처음으로</a>
	<a href="#/signup">회원가입</a>
	<a href="#/about">about</a>
</nav>
<Router {routes}/>
</body>
