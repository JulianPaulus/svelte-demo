<script>
    import Aufgabe1 from '$lib/aufgabe1.svelte';
    import Aufgabe2 from '$lib/aufgabe2/main.svelte';
    import StyleDemo from '$lib/style-demo.svelte';

    let selectedTask = 'aufgabe1';
</script>

<section class="hero is-info">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Svelte Demo
        </p>
        <p class="subtitle">
          Social Skills WS22
        </p>
      </div>
    </div>
  
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="{selectedTask === 'aufgabe1' ? 'is-active' : ''}">
              <a on:click={() => selectedTask = 'aufgabe1'} href="#">Aufgabe 1</a>
            </li>
            <li class="{selectedTask === 'aufgabe2' ? 'is-active' : ''}">
              <a on:click={() => selectedTask = 'aufgabe2'} href="#">Aufgabe 2</a>
            </li>
            <li class="{selectedTask === 'style-demo' ? 'is-active' : ''}">
              <a on:click={() => selectedTask = 'style-demo'} href="#">Nested-Styles Demo</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

  <section>
    {#if selectedTask === 'aufgabe1'}
        <Aufgabe1 />
    {:else if selectedTask === 'aufgabe2'}
        <Aufgabe2 />
    {:else if selectedTask === 'style-demo'}
        <StyleDemo>
            <Aufgabe1 />
        </StyleDemo>
    {/if}
  </section>
