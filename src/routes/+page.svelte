<script lang='typescript'>
    import gsap from 'gsap'
    import {onMount} from 'svelte'
    import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
    import MotionPathPlugin from 'gsap/MotionPathPlugin'

    import Swirly from './Swirly.svelte'
    import PortfolioTitle from './PortfolioTitle.svelte'

    onMount(() => {
        gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin)
        gsap.timeline()
            .from('svg #top-swirl', {drawSVG: '25% 75%', duration: 2, stagger: 0.1})
    })
</script>

<svelte:head>
    <title>Home</title>
    <meta name='description' content='Svelte demo app' />
</svelte:head>

<section>
    <PortfolioTitle />
</section>

<style lang='stylus'>
    .text
        position absolute
        right 33vw
        top 0
        font-family var(--serif-family)
        font-size var(--ms2)
        line-height 1.5rem
        opacity 1
        width max-content

    .dan
    .iel
        display inline-flex

    .dan
        z-index 100

    .iel
        z-index -100
        position relative
        top 0
        right 0
</style>
