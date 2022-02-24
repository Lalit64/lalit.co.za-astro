<script>
    import Navbar from "./Navbar.svelte"
    import Main from "./Main.svelte"
    import Contact from "./Contact.svelte"
    import Work from "./Work.svelte"
    import Footer from "./Footer.svelte"

    let loading = true

</script>

{#if loading}
    <main class="flex items-center justify-center flex-col z-50 w-full">
        <Navbar/>
        <Main/>
        <Contact/>
        <Work/>
        <Footer/>
    </main>
{/if}



<style>
    svg {
        display: block;
        height: 150px;
        width: 150px;
    }
</style>