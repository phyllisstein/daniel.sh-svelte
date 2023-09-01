<script lang='typescript'>
    import gsap from 'gsap'
    import {onMount} from 'svelte'
    import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
    import MotionPathPlugin from 'gsap/MotionPathPlugin'

    import PortfolioTitle from './PortfolioTitle.svelte'
    import Paywall from './Paywall.svelte'
</script>

<svelte:head>
    <title>Portfolio | Daniel P. Shannon</title>
    <meta name='description' content='Software engineering portfolio for Daniel P. Shannon' />
</svelte:head>

<section>
    <h1>
        Portfolio
    </h1>

    <a href='/bauer'>Bauer</a>
    <a href='/choreographer'>Choreographer</a>
    <a href='/eater'>Eater</a>

    <article>
        <slot />
    </article>
</section>
