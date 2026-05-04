[README.md](https://github.com/user-attachments/files/27353307/README.md)
# KI-Magie - Fortbildung Künstliche Intelligenz

Statische Website zur Fortbildungsreihe **KI-Magie** von Michael Fleischer (Regioberatender LMZ, freier Referent DigitalEduLab). Eine zentrale Plattform mit allen Themen, niveaudifferenzierten Lernideen und kopierbaren Prompts - bereit für GitHub Pages.

## Inhalt

11 Workshops als HTML-Seiten:

1. **KI im Alltag** - Was ist KI, was ist Intelligenz, Mensch vs. KI ethisch
2. **AI-Literacy: Lehrende** - DigCompEdu, Prompting, Haltung
3. **AI-Literacy: Lernende** - OECD-Rahmen, kritisches Denken
4. **Technologiewissen** - Funktionsweise, ML, Chatbot, Neuronale Netze
5. **Praktische Anwendung** - LLMs, projektbasiertes Lernen, Demos
6. **Potenziale &amp; Herausforderungen Bildung**
7. **Potenziale &amp; Herausforderungen Alltag**
8. **Ethik &amp; Zukunft** - Gesellschaft, Deepfakes, Critical Thinking
9. **Didaktischer Einsatz** - SAMR, Bewertung mit/ohne KI
10. **Einführung im Unterricht** - 5-Schritte-Plan
11. **Datenschutz &amp; KI** - DSGVO, EU-KI-VO

Jeder Workshop enthält:

- Theorieteil mit Inhaltsverzeichnis
- Eingebettete Tools (KI-Blick, Miro)
- **Lernideen mit KI** in 5 Tabs:
  - Lehrende Grundschule
  - Lehrende Sek I
  - Lehrende Sek II
  - Lernende Sek I
  - Lernende Sek II
- Kopierbare Prompts (Copy-Button)
- Reflexionsimpulse
- Externe Ressourcen

## Projektstruktur

```
website/
├── index.html                # Landing Page
├── css/
│   └── style.css             # Design-System (Brand-Farben)
├── js/
│   └── main.js               # Navigation, Tabs, Copy-Buttons
├── pages/
│   ├── 01-ki-im-alltag.html
│   ├── 02-ai-literacy-lehrende.html
│   ├── 03-ai-literacy-lernende.html
│   ├── 04-technologiewissen.html
│   ├── 05-praktische-anwendung.html
│   ├── 06-potenziale-bildung.html
│   ├── 07-potenziale-alltag.html
│   ├── 08-ethik-zukunft.html
│   ├── 09-didaktischer-einsatz.html
│   ├── 10-einfuehrung-unterricht.html
│   └── 11-datenschutz.html
├── assets/                   # Platz für eigene Bilder/PDFs
└── README.md
```

## Lokal ansehen

Da nur statische Dateien verwendet werden, reicht ein einfacher Browser-Doppelklick auf `index.html`. Komfortabler:

```bash
cd website
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

## Auf GitHub Pages veröffentlichen

1. **Repository erstellen** (z.B. `ki-magie`).
2. Inhalt von `website/` ins Repository-Root kopieren ODER Repository so strukturieren, dass `index.html` auf der obersten Ebene liegt.
3. Push auf GitHub.
4. **Settings → Pages → Build &amp; deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`, Ordner `/ (root)` (oder `/docs`, falls die Dateien dort liegen).
5. Nach kurzer Zeit ist die Seite unter `https://<username>.github.io/<repo>/` erreichbar.

### Variante: Inhalt unter `/docs`

Falls dein Repository auch andere Inhalte enthält (z.B. die PowerPoint-Quelldateien), schiebe `website/*` in den Ordner `docs/` und stelle Pages auf `main / /docs` um.

### Custom Domain (optional)

Lege eine `CNAME`-Datei mit deiner Domain im Repository-Root ab und konfiguriere DNS gemäß GitHub-Pages-Doku.

## Design-System

Brand-Farben (in `css/style.css` als CSS-Variablen):

| Variable | Wert | Bedeutung |
|---|---|---|
| `--color-primary` | `#283676` | Tiefes Blau (Headlines, Header) |
| `--color-secondary` | `#3f77bb` | Helles Blau (Links, Akzente) |
| `--color-accent` | `#c0ce3a` | Grün (CTA, Highlights) |

Andere Farben sind davon abgeleitet (Hintergründe, Borders).

## Anpassungen

- **Eigene Inhalte**: HTML-Seiten direkt editieren, gleiche Struktur beibehalten.
- **Neue Lernidee**: Innerhalb eines `tab-panel` einen weiteren `<div class="idea">…</div>` einfügen.
- **Neuer Prompt**: `<div class="prompt-box"><button class="copy-btn">Kopieren</button><span class="prompt-content">…</span></div>` - der Copy-Button ist automatisch aktiv.
- **Logo / Branding**: `.brand-logo` in `index.html` und allen Unterseiten ersetzen.
- **Footer-Jahr**: `[data-year]` wird per JS automatisch aktualisiert.

## Externe Ressourcen (eingebunden)

- [KI-Blick (KMZ Esslingen)](https://www.ki-blick.kmz-es.de/#/)
- [Miro Board zur Fortbildung](https://miro.com/app/live-embed/uXjVJl9zO_k=/?embedMode=view_only_without_ui&moveToViewport=-30224%2C-34232%2C55543%2C29299&embedId=42590074737)
- [DigCompEdu (PDF)](https://joint-research-centre.ec.europa.eu/system/files/2018-09/digcompedu_leaflet_de_2018-01.pdf)
- [klicksafe: KI &amp; Me](https://www.klicksafe.de/news/ab-sofort-verfuegbar-ki-and-me-wie-kuenstliche-intelligenz-unser-leben-praegt)
- [Sendung mit der Maus: Wie schreibt eine KI Texte?](https://kinder.wdr.de/tv/die-sendung-mit-der-maus/av/wie-schreibt-eine-ki-texte-100.html)
- [3sat: Kann ich mit KI](https://www.3sat.de/wissen/kann-ich-mit-ki)
- [ARD-Sammlung KI](https://www.ardmediathek.de/sammlung/ki-kuenstliche-intelligenz-oder-wissen/5TnOi3bdOyGuSnC5TNCBES)
- [Goethe-Institut: AI-Literacy](https://www.goethe.de/ins/it/de/spr/mag/21609464.html)
- [Schokoroboter und Deepfakes (PDF)](https://schokofakes.ai/fileadmin/user_upload/Download/Schokoroboter-und-Deepfakes-2024.pdf)
- [TaskCards-Board KI](https://essen.taskcards.app/#/board/ba6226b4-e617-4134-8d6d-dc733dae8d9c/view?token=b490fc09-f845-4d6d-9ef7-9cc0ec548182)
- [YouTube-Erklärvideos](https://www.youtube.com/watch?v=cxCzhFVyUdw) · [(weiteres Video)](https://youtu.be/mxP3G2Jb2LM?si=XexE80AorwEoV6mZ)

## Lizenz

CC BY-SA 4.0 - frei nutzbar mit Namensnennung und unter gleichen Bedingungen.

## Autor

Michael Fleischer
Regioberatender LMZ · Freier Referent DigitalEduLab
