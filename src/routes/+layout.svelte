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
        min-height 100vh
        font-family 'Adobe Clean', sans-serif
</style>
