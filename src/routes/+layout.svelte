<script lang='ts'>
    import '$styles/vendor/preflight.styl'
    import '$styles/vendor/charlie.styl'
    import '$styles/vendor/maison-neue.styl'
    import '$styles/global/index.styl'

    const META = {
        TITLE: `Engineer and Essayist, Architect and Aesthete | Daniel P. Shannon`,
        DESCRIPTION: `Personal blog and portfolio for Daniel P. Shannon, a software engineer in New York City.`,
        KEYWORDS: [
            `engineer`,
            `full stack engineer`,
            `software architect`,
            `software developer`,
            `web developer`,
            `digital media`,
        ],
    }
</script>

<svelte:head>
    <!-- Common Metadata -->
    <title>{META.TITLE}</title>
    <meta name='description' content={META.DESCRIPTION} />
    <meta name='keywords' content={META.KEYWORDS.join(', ')} />

    <!-- Facebook OpenGraph -->
    <meta content={META.DESCRIPTION} property='og:description' />
    <meta content='/social-icon.png' property='og:image' />
    <meta content='en_US' property='og:locale' />
    <meta content={META.TITLE} property='og:site_name' />
    <meta content={META.TITLE} property='og:title' />
    <meta content='website' property='og:type' />

    <!-- Twitter Card -->
    <meta content='summary' name='twitter:card' />
    <meta content={META.DESCRIPTION} property='twitter:description' />
    <meta content='on' name='twitter:dnt' />
    <meta content='/social-icon.png' property='twitter:image' />
    <meta content='@phyllisstein' name='twitter:site' />
    <meta content={META.TITLE} property='twitter:title' />
</svelte:head>

<slot />
