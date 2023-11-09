<script lang='ts'>
    import About from './About.svelte'
    import Intro from './Intro.svelte'
</script>

<svelte:head>
    <title>Portfolio | Daniel P. Shannon</title>
    <meta name='description' content='Software engineering portfolio for Daniel P. Shannon' />
</svelte:head>

<main>
    <Intro />
    <About />
    <!--
        <section class='portfolio' />
        <section class='contact' />
    -->
</main>

<style lang='stylus'>
    @import 'theme/index.styl'

    main
        display flex
        flex-direction row
        flex-wrap nowrap
        align-items stretch
        justify-content flex-start
        width max-content
        height 100vh
        overflow-x scroll
        overflow-y hidden
</style>
