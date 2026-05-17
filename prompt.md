# ELEC DASHBOARD — FOLYAMATMÉRNÖKI RENDSZER PROMPT (V5.0)

Ez a prompt szolgál a jövőbeli fejlesztések, modulok bővítése és karbantartása alapjául. Minden AI asszisztensnek ezt kell figyelembe vennie, mielőtt a kódhoz nyúl.

## 1. A Projekt Identitása és Célja
A rendszer a Nagyatádi elektronikai gyár folyamatmérnökeinek (Process Engineering Division) készült belső, professzionális, ipari "Dashboard" alkalmazása.
- **Elsődleges cél:** A napi mérnöki rutin támogatása (SMED, 5S, OEE számítások, minőségellenőrzés, SPI/AOI adatok).
- **Stílus:** Ultra-prémium, sötét tónusú ("Dark Industrial"), letisztult, sallangmentes felület. Neonkék (primary) kiemelések, minimális glow effektek.
- **Nyelvezet:** Szakmai, lényegretörő, mérnöki terminológia (Lead Time, Utilization, MTBF, FPY). Nincs "játékos" vagy felesleges animáció.

## 2. Architektúra és Keretrendszer
- A projekt "Vanilla" HTML/CSS/JS alapú, keretrendszerek (React, Vue) nélkül.
- **Belépési pont:** `index.html` (Fő dashboard, csemperendszer).
- **Mappastruktúra:**
  - `/css/main.css`: A teljes globális stíluslap és Design System. Szigorúan itt kell definiálni az új UI komponenseket.
  - `/js/main.js`: Globális állapotkezelés (hitelesítés, téma, keresés, óra).
  - `/js/header.js`: **Kritikus komponens.** Ez felel a dinamikus fejléc injektálásáért (`injectHeader`) minden oldalba.
  - `/modules/`: Logikai üzleti funkciók, mérnöki eszközök és dashboard panelek.
  - `/tools/`: Kis segédprogramok (PDF olvasó, időjárás, fordító, TTS/STT).

## 3. UI/UX Követelmények és Komponensek
**Szigorú CSS szabályok:**
1. CSS Változók (`:root`): Csak a `main.css`-ben lévő palettát használd (`--primary`, `--bg-card`, `--bg-page`, `--text-main`, `--text-muted`, `--border`).
2. Témák: A rendszer alapértelmezett témája sötét (`data-theme="dark"`). A váltás a `main.js` `toggleTheme` függvényével történik. Hardkódolt fehér/fekete színek használata TILOS.
3. Reszponzivitás: `grid` és `flex` alapú elrendezések. Mobilon a navigáció és a grid-ek törnek.

**Szabványos Oldalstruktúra (Új HTML fájl létrehozásánál):**
```html
<!DOCTYPE html>
<html lang="hu" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Modul Neve] - ELEC Dashboard</title>
    <!-- Fontok és Ikonok -->
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800&family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Fő stíluslap (útvonal a relatív mappától függ) -->
    <link rel="stylesheet" href="../css/main.css">
</head>
<body>
    <!-- A fejlécet a header.js fogja ide injektálni -->
    <!-- header injected by js/header.js -->
    
    <main class="module-body">
        <div class="module-container fade-in">
            <!-- Vissza gomb és Cím -->
            <div class="module-header">
                <div class="module-title">
                    <i class="fas fa-[ikon]"></i>
                    [Modul Neve]
                </div>
                <a href="../index.html" class="module-back">
                    <i class="fas fa-arrow-left"></i> Vissza a Dashboardra
                </a>
            </div>
            
            <!-- Tartalom Wrapper -->
            <div class="module-content-wrapper">
                <!-- Ide jön az üzleti logika, kártyák, táblázatok -->
            </div>
        </div>
    </main>

    <!-- Alapvető scriptek -->
    <script src="../js/header.js"></script>
    <script src="../js/main.js"></script>
</body>
</html>
```

## 4. Dinamikus Fejléc és Navigáció (`header.js`)
Minden HTML fájlnak hivatkoznia kell a `header.js`-re a `</body>` előtt. 
- Ne hozz létre `<header>` tag-et statikusan a HTML fájlokban. 
- Ha új HTML fájlt adsz a projekthez, **feltétlenül add hozzá a linket a `header.js` megfelelő legördülő menüjébe (Modulok, Process vagy Eszközök)**.
- A relatív útvonalakat (`getBasePath()`) a rendszer automatikusan kalkulálja.

## 5. Hitelesítési Logika
Az alkalmazás egy egyszerű, "Proof of Concept" Auth réteget használ a `main.js`-ben (`sessionStorage` alapon).
- Ha nincs érvényes session token, az `#app-main` (vagy a tartalom) elrejtésre kerül, és egy `#auth-overlay` jelenik meg.
- Gépeléskor a 7575 a teljes jogosultságot adó mérnöki PIN.
- Új fájl írásakor, ha teljes védelmet akarsz, be kell húzni az auth overlay logikát. (Vagy rábízni a lokális működésre hitelesítés nélkül).

## 6. A "CMS" Tiltott Kifejezés
A teljes kódbázisban tiltva van a `cms` (Content Management System) szó és az ehhez köthető fájlok (pl. `cms_onboarding_plan.html`). Soha ne generálj, vagy hivatkozz ilyen nevű fájlra vagy menüpontra.

## 7. Folyamatmérnöki Adatok (Content Preservation)
A már létező tartalmi dokumentációkban (pl. `factory_onboarding_plan.html`) lévő **szakmai szöveges információ szent és sérthetetlen**. 
- Soha ne törölj vagy rövidíts le mérnöki tudásbázis szöveget!
- CSS refaktorálásnál a régi, egyedi osztályokat igazítsd a `main.css` változóihoz, de a struktúrát (pl. `Chart.js` kódok, matematikai képletek) őrizd meg.

## 8. Dashboard Csempék (`index.html`)
Ha új funkciót készítesz, az `index.html`-ben lévő `.tiles-grid` konténerek valamelyikébe mindig fel kell venni a csempéjét (`.compact-tile`).
Követelmény:
- Pontos FontAwesome ikon kiválasztása.
- Legfeljebb 2 szavas, nagybetűs címkék (pl. `HŐKAMRA LOG`).
- Az `<a href="...">` mutasson pontosan a létrehozott HTML fájlra.

## 9. Követendő Mérnöki Módszertanok Kódolásnál
- **DRY (Don't Repeat Yourself):** Közös stílusokat vidd át a `main.css`-be.
- **Zero-Dependency ahol lehet:** Vanilla JS preferált a külső könyvtárak felett, kivéve ha elengedhetetlen (pl. Chart.js, PDF.js, Three.js).
- **Megbízhatóság:** Hibakezelések (try-catch) minden hardveres API (kamera, mikrofon) esetén.

Ezen irányelvek megszegése azonnali minőségromlást eredményez, ezért kritikus a betartásuk. Munkára fel!
