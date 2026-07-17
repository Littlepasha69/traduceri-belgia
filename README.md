# Website Lacramioara Bran

Eenvoudige statische website voor GitHub Pages.

## Structuur

- `index.html` is de Roemeense one-page homepage.
- `nl/index.html` is de Nederlandse one-page versie.
- `traduceri-belgia.html`, `tolk-roemeens-nederlands.html` en `vertaler-nederlands-roemeens.html` blijven voorlopig compacte ondersteunende landingspagina's.
- `assets/css/main.css` bevat de gedeelde styling en design tokens.
- `assets/images/` bevat de responsive hero- en Open Graph-afbeeldingen.
- `404.html` is de GitHub Pages foutpagina.
- `sitemap.xml` en `robots.txt` gebruiken de canonieke www-versie.
- `CNAME` koppelt GitHub Pages aan `www.traduceri-belgia.be`.

## Canoniek domein

Gebruik overal:

```text
https://www.traduceri-belgia.be/
```

De niet-www-versie moet via DNS/GitHub Pages doorverwijzen naar de www-versie.

## Publicatie

GitHub Pages:

1. Deploy from a branch.
2. Branch: `main`.
3. Folder: `/root`.
4. Custom domain: `www.traduceri-belgia.be`.

Laat `CNAME` en `.nojekyll` in de root staan.

## Controle voor publicatie

- DNS en HTTPS voor `www.traduceri-belgia.be`.
- Doorverwijzing van `traduceri-belgia.be` naar `www.traduceri-belgia.be`.
- Juridische formuleringen rond beëdigd/geautoriseerd, legalisatie en apostille.
- Toestemming voor gebruik van de portretfoto.
- Of WhatsApp gebruikt mag worden voor klantcontact.
