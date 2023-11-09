<section>
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

<style lang='stylus'>
    @import 'theme/index.styl'

    section
        display flex
        flex-direction row
        align-items stretch
        justify-content flex-start
        width 100vw
        height 100vh
        padding 1rem

    header
        display flex
        flex-direction column
        align-items stretch
        justify-content flex-end
        padding 0 5% 0 0

        +above(sm)
            padding 0 10% 0 0

        +above(md)
            padding 0 35% 0 0

    h1
        plumber-charlie(font-size: 3, line-height: 4)

        +above(md)
            plumber-charlie(font-size: 4, line-height: 5)

        +above(lg)
            plumber-charlie(font-size: 5, line-height: 6)

    .hed
        display flex
        flex 1 0 auto
        flex-direction column
        align-items stretch
        justify-content flex-start

    h3
        plumber-maison()
        font-weight 400

        +above(lg)
            plumber-maison(font-size: 3, line-height: 4)

    .dek
        display flex
        flex 0 1 50%
        flex-direction column
        align-items stretch
        justify-content flex-end

    .shim
        flex 1 1 50%
</style>
