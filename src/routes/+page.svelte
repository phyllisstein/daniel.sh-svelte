<script lang='ts'>
    import Intro from './Intro.svelte'
</script>

<svelte:head>
    <title>Portfolio | Daniel P. Shannon</title>
    <meta name='description' content='Software engineering portfolio for Daniel P. Shannon' />
</svelte:head>

<main>
    <Intro />
    <section class='about'>
        <article>
            <div class='dek'>
                <h1>
                    Whomst
                </h1>
            <div class='shim' />
        </article>
    </section>
    <section class='portfolio' />
    <section class='contact' />
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

    .about
        display flex
        flex-direction row
        align-items stretch
        justify-content flex-start
        width 100vw
        height 100vh
        padding 1rem

    .about article
        display flex
        flex-direction column
        align-items stretch
        justify-content flex-end
</style>
