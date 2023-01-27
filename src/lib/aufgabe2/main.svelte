<script>
    import Beschreibung from '$lib/aufgabe2/beschreibung/aufgabenbeschreibung.svelte';

    let factPromise = loadFact();

    async function loadFact() {
        const response = await fetch('/facts');
        return await response.json();
    }

    async function updateFact() {
        factPromise = loadFact();
    }
</script>

<section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns" style="min-height: 100vh;">
            <div class="column">
                <div class="columns">
                    <div class="column">
                        <p class="title">
                            Aufgabe 2
                        </p>
                        <p class="subtitle">
                            Igel-Fakten
                        </p>
                    </div>
                    <div class="column has-content-centered">
                        <!-- Hier musste noch das on:click hinzugefügt werden -->
                        <button type="button" class="button is-primary" on:click={updateFact}>Neuer Fakt</button>
                    </div>
                </div>
                <div class="content">
                    <Beschreibung />
                </div>
            </div>
            <div class="column">
                <!-- Musterlösung  -->
                {#await factPromise}
                    <p class="content">Lade neuen Fakt</p>
                {:then data}
                    <p class="content">{data.fact}</p>
                    <img class="image" src="{data.imagePath}" alt="Igelbild"/>
                {/await}
            </div>
        </div>
      </div>
    </div>
  </section>

