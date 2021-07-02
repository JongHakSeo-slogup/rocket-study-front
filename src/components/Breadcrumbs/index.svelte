<script lang="ts">
    import { Breadcrumb, BreadcrumbItem } from 'sveltestrap';
</script>


<Breadcrumb>
    <BreadcrumbItem>
        <a href="#home">Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
        <a href="#library">Library</a>
    </BreadcrumbItem>
    <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>