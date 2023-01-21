<script>
    let show = false;
</script>

<p>Falls ihr Unterstützung braucht, könnt ihr euch <a on:click={() => show = true}>hier</a> die Musterlösung für den Script-Teil ansehen</p>
{#if show}
<div class="highlight">
    <pre>
        <code>{`
<script>
    let factPromise = loadFact();

    async function loadFact() {
        const response = await fetch('/facts');
        return await response.json();
    }

    async function updateFact() {
        factPromise = loadFact();
    }
</script>
    `} </code>
    </pre>
</div>
{/if}