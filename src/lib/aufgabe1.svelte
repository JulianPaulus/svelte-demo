<script>
    // Euer JavaScript hier
    let input = '';

    $: inputUpper = input.toUpperCase();
</script>

<section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns" style="min-height: 100vh;">
            <div class="column">
                <p class="title">
                    Aufgabe 1
                </p>
                <p class="subtitle">
                    Hello World!
                </p>
                <div class="content">
                    <p>
                        Schreibt eine Hello-World Anwendung, die den Inhalt eines Textfeldes im Browser wiedergibt. 
                        Fügt danach, wie in der Präsentation eine Variable hinzu, die eine Dependency auf den Inhalt des Inputfeldes hat.
                        Probiert aus was passiert und sorgt dafür, dass die abhängige Variable auch geupdated wird.
                    </p>
                    <p>Die Stelle an die der Code muss ist in der Datei mit einem Kommentar markiert.</p>
                </div>
            </div>
            <div class="column">
                <!-- Musterlösung -->
                <input type="text" bind:value={input} />
                <hr />
                <p class="content">Input: '{input}'</p>
                <p class="content">Input Uppercase: '{inputUpper}'</p>
            </div>
      </div>
    </div>
  </section>