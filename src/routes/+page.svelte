<script lang='typescript'>
    import gsap from 'gsap'
    import {onMount} from 'svelte'
    import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
    import MotionPathPlugin from 'gsap/MotionPathPlugin'

    import Swirly from './Swirly.svelte'
    import PortfolioTitle from './PortfolioTitle.svelte'
    import Paywall from './Paywall.svelte'
</script>

<svelte:head>
    <title>Home</title>
    <meta name='description' content='Svelte demo app' />
</svelte:head>

<section>
    <Paywall />
    <PortfolioTitle/>
</section>

<style lang='stylus'>
</style>
