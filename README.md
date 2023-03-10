# Zum Ausführen

## Dependencies installieren
Im Terminal `npm install` ausführen.
(Manchmal machen die Codespaces das auch automatisch wenn sie ein NPM-Projekt erkennen, einfach mal ins Terminal schauen)

## Starten
Im Terminal `npm run dev` ausführen.
Falls Codespace benutzt wird:
`npm run dev -- --host=0.0.0.0` ausführen statt dem Befehl oben.
Dann sollte unten rechts ein Popup aufploppen, dass ein offener Port erkannt wurde, hierüber kann man die Seite öffnen.
Falls das Popup nicht auftaucht: Über den Ports-Tab im unteren Drittel von Codespaces kann die Seite auch geöffnet werden.

## Svelte-Extension installieren
Entweder links in den Extension-Browser von VSCode gehen und es von dort installieren,
oder mal eine .svelte-Datei öffnen. Dann kommt meistens ein Popup das fragt, ob man die Extension benutzen will.

## Aufgaben bearbeiten
In der Anwendung selbst (im Browser) findet ihr die Aufgabenstellungen! Die Dateien für die Aufgaben sind in `./src/lib` untergebracht!

## Codespace runterfahren
Wenn alles fertig ist: vergisst nicht euren Codespace herunter zu fahren.
Am Besten geht das [`hier`](https://github.com/codespaces).

# Original README:
# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
