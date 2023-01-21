<script>
    import JSTip from './js-tip.svelte';
</script>

<p>
    Im SvelteKit-Backend wurde ein Endpunkt zum Laden eines zufälligen Igel-Faktes implementiert. 
    Dieser liefert ein JSON-Objekt mit einem Fakt und einem Pfad zu einem Bild zurück. 
    Einsehbar ist er <a href="/facts" target="_blank">hier</a>.
</p>
<p>
    In dieser Aufgabe soll dieser Endpunkt dazu verwendet werden um rechts die geladenen Daten anzuzeigen.
    Hierzu müssen folgende Punkte beachtet werden:
</p>
<ul>
    <li>Im Script-Teil muss ein fetch-Requests auf '/facts' ausgeführt werden</li>
    <li>Im Template-Teil muss auf die Daten gewartet werden, worauf hin sie dann dargestellt werden können</li>
    <li>Beim Laden der Seite soll automatisch ein Fakt geladen werden</li>
</ul>

<JSTip />