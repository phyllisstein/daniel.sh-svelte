<script lang='ts'>
    import 'tailwindcss-preflight/preflight.css'
    import '$lib/assets/theme.styl'

    import {onMount} from 'svelte'

    let main: HTMLElement

    onMount(async () => {
        const hyphenator = await window.Hyphenopoly.hyphenators.HTML
        hyphenator(main, '.__hyphenate')
    })
</script>

<div class="app">
    <main bind:this={main}>
        <slot />
    </main>
</div>

<style lang='stylus'>
    .app
        display flex
        flex-direction column
        width 100%
        max-width 100vw
        min-height 100vh
        margin 0 auto
        padding var(--ms2)

        font-size var(--ms0)
        font-family var(--sans-serif-family)
</style>
