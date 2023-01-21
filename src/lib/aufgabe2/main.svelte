<script>
    import Beschreibung from '$lib/aufgabe2/beschreibung/aufgabenbeschreibung.svelte';

    // Euer JavaScript hier

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
                        <button type="button" class="button is-primary">Neuer Fakt</button>
                    </div>
                </div>
                <div class="content">
                    <Beschreibung />
                </div>
            </div>
            <div class="column">
                <!-- Euer Template-Code  -->
            </div>
        </div>
      </div>
    </div>
  </section>

