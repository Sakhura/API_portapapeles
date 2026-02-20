# 📋 CLIP-O-MATIC 3000 — Clipboard API

Proyecto demostrativo que explora el uso de la **Clipboard API** del navegador, permitiendo copiar y pegar texto entre dos campos usando `navigator.clipboard.writeText()` y `navigator.clipboard.readText()`. Desarrollado con estética retro CRT de terminal de los años 80.

---

## 📁 Estructura del Proyecto

```
API_portapapeles/
├── index.html   → Interfaz de usuario (estilo retro CRT)
├── app.js       → Lógica JavaScript (Clipboard API)
├── style.css    → Estilos retro con efecto scanlines y glow
└── README.md    → Este archivo
```

---

## 🚀 ¿Cómo ejecutar?

1. Descarga o clona los archivos del proyecto.
2. Abre `index.html` en tu navegador.
3. Escribe un texto en el primer campo y haz clic en **[ COPIAR AL PORTAPAPELES ]**.
4. Haz clic en **[ PEGAR DESDE PORTAPAPELES ]** para ver el texto en el segundo campo.

> ⚠️ La función de pegar (`readText`) requiere que la página se sirva desde **HTTPS** o **localhost**. Si abres el archivo directamente como `file://`, el navegador puede denegar el permiso de lectura del portapapeles.

---

## 🌐 API Utilizada

### Clipboard API — `navigator.clipboard`

API nativa del navegador para acceder al portapapeles del sistema operativo de forma asíncrona y segura.

**Escribir (copiar):**
```javascript
navigator.clipboard.writeText(texto)
  .then(function () {
    // ✅ texto copiado exitosamente
  })
  .catch(function (error) {
    // ❌ el navegador denegó el permiso
  });
```

**Leer (pegar):**
```javascript
navigator.clipboard.readText()         // no recibe argumentos
  .then(function (texto) {
    // ✅ texto leído desde el portapapeles
  })
  .catch(function (error) {
    // ❌ permiso de lectura denegado
  });
```

> Ambos métodos devuelven una **Promesa**, por eso se manejan con `.then()` y `.catch()`.

---

## 🧩 Conceptos clave

| Concepto | Descripción |
|---|---|
| `navigator.clipboard` | Objeto del navegador que da acceso al portapapeles |
| `writeText(texto)` | Copia texto al portapapeles. Devuelve una Promesa |
| `readText()` | Lee el contenido del portapapeles. Devuelve una Promesa |
| `.then()` | Se ejecuta si la Promesa fue exitosa |
| `.catch(error)` | Se ejecuta si hubo un error o se denegó el permiso |
| `trim()` | Elimina espacios en blanco al inicio y al final del texto |

---

## 🐛 Errores corregidos durante el desarrollo

| # | Error | Tipo |
|---|---|---|
| 1 | `inputOrmensajePegarigen` → `mensajePegar` | Typo en nombre de variable |
| 2 | `msgPegar` usado sin declarar | Variable inexistente en el scope |
| 3 | `msgCopiar` usado sin declarar | Variable inexistente en el scope |
| 4 | `if(texto)` → `if(!texto)` | Lógica de validación invertida |
| 5 | `+Error.message` → `error.message` | `Error` en mayúscula es el constructor, no la variable |
| 6 | `readText(texto)` → `readText()` | El método no recibe argumentos |

---

## 🎨 Diseño

La interfaz simula una **terminal CRT de los años 80** con los siguientes efectos visuales:

- **Scanlines** — líneas horizontales animadas que imitan una pantalla de tubo
- **Glow verde** — brillo característico de monitores monocromáticos Phosphor P1
- **Efecto flicker** — parpadeo ocasional que simula inestabilidad de la señal
- **Tipografía retro** — fuentes `VT323` y `Press Start 2P` de Google Fonts
- **Prompt de MS-DOS** — `C:\>` como prefijo en las etiquetas

---

## 🔍 ¿Cómo verificar permisos del portapapeles?

Puedes revisar y gestionar los permisos desde las DevTools del navegador:

1. Presiona `F12` para abrir las **DevTools**
2. Ve a la pestaña **Application**
3. En el menú izquierdo busca **Permissions** o revisa la barra de dirección → ícono de candado → **Permisos del sitio**

---

## 🛠️ Tecnologías

- HTML5
- CSS3 (animaciones, variables CSS, efectos de brillo)
- JavaScript ES6+ (Promises, Clipboard API)
- [Google Fonts](https://fonts.google.com/) — VT323 y Press Start 2P
- Clipboard API (nativa del navegador)