<section>
    <article>
        <div class='shim' />
        <div class='body'>
            <p>
                I’m an engineer, architect, and technical lead creating
                domain-driven software for frontend, backend, and full-stack
                applications. As a lateral, interdisciplinary thinker, I’m
                temperamentally a <em>let’s take a step back</em> guy. Unlike
                many of whom this is true, I ship—platforms for fintech, digital
                media, and direct-to-consumer services at scales from twelve
                people in a WeWork broom closet to enterprise.
            </p>
        </div>
    </article>
</section>

<style lang='stylus'>
    @import 'theme/index.styl'

    section
        display flex
        flex-direction row
        align-items stretch
        justify-content flex-start
        width 100vw
        height 100vh

    article
        display flex
        flex-direction column
        align-items stretch
        justify-content flex-end
        plumber-box(padding: 5)
        padding-right 5vw
        padding-left 5vw

    .shim
        position relative

        display flex
        flex 1 1 35%

    .hed
        display flex
        flex 1 0 auto
        flex-direction column
        align-items stretch
        justify-content flex-start

    h1
        plumber-charlie(font-size: 3, line-height: 4, leading-bottom: 1)
        font-weight 400

        +above(md)
            plumber-charlie(font-size: 5, line-height: 6, leading-bottom: 1)

        +above(lg)
            plumber-charlie(font-size: 7, line-height: 8)

    .body
        display flex
        flex 1 1 65%
        flex-direction column
        align-items stretch
        justify-content flex-start
        overflow-y auto
        plumber-box(margin: 1)
</style>
