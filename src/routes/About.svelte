<section>
    <article>
        <div class='shim' />
        <div class='hed'>
            <h1>
                Speaking of settling, how's Ann?
            </h1>
        </div>
        <div class='body'>
            <p>
                There's been a lot of lying in this family. And a lot of
                love! More lies. What do you think about Sudden Valley? It
                sounds like a salad dressing, but for some reason I don't
                want to eat it. Even though sooooo many people in this
                office are begging for it. Her lawyers are claiming the seal
                is worth $250,000. And that's not even including Buster's
                Swatch. Popcorn shrimp… with club sauce.
            </p>
            <p>
                ¡Soy loco por los Cornballs! Could it be love? I know what
                an erection feels like, Michael. No, it's the opposite… like
                my heart is getting hard. It's ok. You be with Yam.
            </p>
            <p>
                That's the first time we were in the shower since our
                honeymoon. And this time, no tears. If you're suggesting I
                play favorites, you're wrong. I love all of my children
                equally. I don't care for Gob. Get rid of the Seaward.
                Lucille: I'll leave when I'm good and ready.
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
        padding 1rem

    article
        display flex
        flex-direction column
        align-items stretch
        justify-content flex-end
        padding 5%

        +above(sm)
            padding 10%

        +above(md)
            padding 15%

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
</style>
