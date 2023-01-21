<style>
    p.subtitle {
        color: red;
    }
</style>

<section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns" style="min-height: 100vh;">
            <div class="column">
                <p class="title">
                    Style-Demo
                </p>
                <p class="subtitle">
                    Roter Subtitle
                </p>
            </div>
            <div class="column">
                <p class="content">
                    <slot></slot>
                </p>
            </div>
      </div>
    </div>
  </section>