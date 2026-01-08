# Ranking Online - Templates (Enero 2026)

Este proyecto contiene una colección de 3 plantillas web (templates) diseñadas bajo la identidad de marca de **Ranking Online**. El objetivo de estos templates es servir como bases de diseño adaptables para futuros clientes, ofreciendo opciones modernas y optimizadas.

## 📂 Estructura del Proyecto

El proyecto constará de 3 variantes principales:

1.  **Template Light A**: Diseño base en modo claro.
2.  **Template Light B**: Variante alternativa en modo claro.
3.  **Template Dark**: Diseño base en modo oscuro (Dark Mode).

## 🎨 Sistema de Diseño

El diseño se fundamenta en la identidad visual de Ranking Online, priorizando una estética limpia, corporativa y moderna.

### Tipografía

*   **Familia:** `Poppins`
*   **Uso:** Títulos, cuerpos de texto y elementos de UI. Aporta un carácter geométrico y legible.

---

### Paleta de Colores

#### Color Primario: Brand Primary (`#273480`) y Escala
Hemos generado una escala tonal a partir del color primario para diversos usos (bordes, fondos sutiles, estados hover).

| Tono | Hex | Uso Sugerido |
| :--- | :--- | :--- |
| **50** | `#E9EBF5` | Fondos muy claros, áreas secundarias. |
| **100** | `#C5CBE6` | Bordes sutiles, desactivados. |
| **200** | `#9FA9D6` | Elementos decorativos. |
| **300** | `#7886C7` | Iconos secundarios. |
| **400** | `#5264B8` | Acentos medios. |
| **500 (Base)** | `#273480` | **Color Principal**, Botones, Encabezados. |
| **600** | `#1F2966` | Estado Hover (Botones), Textos oscuros. |
| **700** | `#171F4D` | Fondos oscuros / Footers. |
| **800** | `#0F1433` | Elementos de alto contraste. |
| **900** | `#080A1A` | Texto casi negro. |

#### Colores de Acento y Texto

| Nombre | Hex | Muestra | Uso |
| :--- | :--- | :--- | :--- |
| **Accent** | `#2405E5` | (Azul Eléctrico) | CTAs, enlaces, focos de atención. |
| **Content** | `#515683` | (Gris Azulado) | Texto de párrafo. |

---

### Superficies y Profundidad (Fondos)

Definimos "alturas" mediante el color de fondo para separar capas de información, manteniendo el **Blanco (`#FFFFFF`)** como base.

| Nivel | Hex | Descripción |
| :--- | :--- | :--- |
| **Nivel 0 (Base)** | `#FFFFFF` | Lienzo principal, fondo de página estándar. |
| **Nivel 1 (Sub)** | `#F4F6FA` | Fondos de secciones alternas (ej. Features, Testimonios). Tinte muy suave del primario. |
| **Nivel 2 (Input)** | `#EAEDF5` | Campos de formulario, áreas de código o "hundidas". |
| **Nivel Dark Base**| `#000529` | Fondo principal para el **Template Dark**. |
| **Nivel Dark 1** | `#0D133B` | Superficies elevadas (tarjetas) en modo oscuro. |

---

### Formas y Bordes (Shape System)

El diseño utiliza un juego dinámico entre **curvas suaves** y **ángulos rectos**, evitando la monotonía de usar solo uno.

*   **Esquinas Rectas (0px)**: Para contenedores estructurales grandes, divisiones de secciones o imágenes que requieren seriedad.
*   **Redondeo Sutil (4px - 8px)**: Para tarjetas, inputs y elementos de interfaz estándar.
*   **Redondeo Medio (12px - 16px)**: Para elementos destacados, modales o botones que requieren un toque más amigable.

> **Regla de estilo:** Combinar tarjetas con esquinas redondeadas sobre fondos rectos, o viceversa, para generar contraste visual moderno.

---

### Efectos Visuales: Glassmorphism

Se utiliza un efecto de "cristal esmerilado" para headers flotantes, tarjetas sobre fondos complejos y modales. Esto aporta profundidad y modernidad.

**Reglas de implementación:**
*   **Fondo:** Color blanco o base con opacidad (ej. `rgba(255, 255, 255, 0.7)`).
*   **Blur:** `backdrop-filter: blur(12px)` o superior.
*   **Contorno:** Borde sutil blanco semitransparente (`1px solid rgba(255, 255, 255, 0.5)`) para definir los límites.
*   **Sombra:** Suave y difusa para levantar el elemento (`box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)`).

---

---

### Adaptabilidad Responsive

El diseño está optimizado para funcionar en múltiples dispositivos. Las reglas clave son:

*   **Breakpoints:**
    *   **Desktop:** > 1024px
    *   **Tablet/Laptop:** 768px - 1024px
    *   **Mobile:** < 768px
*   **Header:** Se transforma automáticamente. En desktop muestra menú extendido; en mobile oculta enlaces y muestra botón "Hamburguesa".
*   **Grids:** Pasan de 3 columnas (Desktop) a 2 columnas (Tablet) y 1 columna (Mobile) para mantener la legibilidad.
*   **Tipografía:** Los tamaños de fuente (`h1`, `p`) se ajustan usando unidades relativas (`rem`) y media queries para evitar textos gigantes en pantallas perqueñas.

---

## 🚀 Uso

Cada template se encuentra en su propia carpeta:
*   `/Template-Light-A`
*   `/Template-Light-B`
*   `/Template-Dark`

### Requerimientos
- Navegador web moderno.

---
*Ranking Online - Enero 2026*
