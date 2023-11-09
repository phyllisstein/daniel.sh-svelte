<svelte:head>
    <title>Portfolio | Daniel P. Shannon</title>
    <meta name='description' content='Software engineering portfolio for Daniel P. Shannon' />
</svelte:head>

<header>
    <h3>
        I’m a full-stack engineer and architect who brings insight and rigor to
        ambitious software projects.
    </h3>
    <h1>
        You can call me Daniel.
    </h1>
</header>

<style lang='stylus'>
    @import 'theme/index.styl'

    header
        position fixed
        top 50%
        left 0

        transform translateY(-50%)

    h1
        plumber-charlie(font-size: 6, line-height: 6)
        font-weight 300

    h3
        plumber-maison(font-size: 3, line-height: 4)
        font-weight 400
</style>
