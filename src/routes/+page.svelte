<svelte:head>
    <title>Portfolio | Daniel P. Shannon</title>
    <meta name='description' content='Software engineering portfolio for Daniel P. Shannon' />
</svelte:head>

<main>
    <section class='intro'>
        <header>
            <div class='dek'>
                <h3>
                    I’m a full-stack engineer and architect who brings insight and rigor to
                    ambitious software.
                </h3>
            </div>
            <div class='hed'>
                <h1>
                    You can call me Daniel.
                </h1>
            </div>
            <div class='shim' />
        </header>
    </section>
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

    .intro
    .about
        display flex
        flex-direction row
        align-items stretch
        justify-content flex-start
        width 100vw
        height 100vh
        padding 1rem

    .intro header
        display flex
        flex-direction column
        align-items stretch
        justify-content flex-end
        padding 0 5% 0 0

        +above(md)
            padding 0 10% 0 0

        +above(lg)
            padding 0 20% 0 0

    .about article
        display flex
        flex-direction column
        align-items stretch
        justify-content flex-end

    h1
        plumber-charlie(font-size: 3, line-height: 4)
        font-weight 300

        +above(md)
            plumber-charlie(font-size: 4, line-height: 5)

        +above(lg)
            plumber-charlie(font-size: 7, line-height: 8)

    .hed
        display flex
        flex 1 0 auto
        flex-direction column
        align-items stretch
        justify-content flex-start

    h3
        plumber-maison(font-size: 2, line-height: 3)
        font-weight 200

        +above(md)
            plumber-maison(font-size: 3, line-height: 4)

        +above(lg)
            plumber-maison(font-size: 4, line-height: 5)

    .dek
        display flex
        flex 0 1 50%
        flex-direction column
        align-items stretch
        justify-content flex-end

    .shim
        flex 1 1 50%
</style>
