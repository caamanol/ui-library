# @caamanol/ui-library

Librería de componentes React (MUI) con tema y Storybook, lista para publicar en GitHub Packages y desplegar Storybook en GitHub Pages.

## Contenido
- Componentes atómicos y moleculares (basados en MUI)
- Temas `lightTheme` y `darkTheme`
- Storybook (local y GitHub Pages)
- Tests unitarios con Vitest + Testing Library
- CI (tests + build) y publicación automatizada a GitHub Packages

---

## Instalación (consumo del package)

1) Configurar el registry (GitHub Packages)

Creá o editá tu archivo `.npmrc` en el proyecto consumidor:

```
@caamanol:registry=https://npm.pkg.github.com
always-auth=true
//npm.pkg.github.com/:_authToken=<TOKEN_CON_PERMISO_read:packages>
```

Sugerencia: Usá un `.npmrc` a nivel de usuario en vez del repo si querés evitar subir el token.

2) Instalar peer dependencies (en tu app)

```
npm i react react-dom @mui/material @mui/icons-material @emotion/react @emotion/styled
```

3) Instalar la librería

```
npm i @caamanol/ui-library
```

> Con pnpm o yarn, usá el comando equivalente.

---

## Uso básico

Envolvé tu app con `ThemeProvider` y uno de los temas provistos.

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, Button } from '@caamanol/ui-library'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Button onClick={() => alert('Hola!')}>Acción</Button>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
```

### Imports disponibles

Todos desde `@caamanol/ui-library`:

- Átomos: `Avatar`, `Badge`, `Button`, `Card`, `Checkbox`, `Divider`, `HelperText`, `IconButton`, `Input`, `Label`, `Radio`, `Select`, `Spinner`, `Switch`, `Textarea`
- Moléculas: `FormField`, `Toolbar`, `SearchBar`, `Breadcrumbs`, `Pagination`, `Toast`, `TopBar`, `MetricCard`, `EmptyState`, `Modal`, `DataTable`
- Temas: `lightTheme`, `darkTheme`

### Ejemplos rápidos

- Input controlado
```jsx
import { Input } from '@caamanol/ui-library'

<Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar…" />
```

- Checkbox / Switch / Radio
```jsx
import { Checkbox, Switch, Radio } from '@caamanol/ui-library'

<Checkbox label="Acepto" checked={accepted} onChange={(_, v) => setAccepted(v)} />
<Switch label="Habilitado" checked={enabled} onChange={(_, v) => setEnabled(v)} />
<Radio name="grupo" label="Opción A" checked={v==='a'} onChange={() => setV('a')} />
```

- Modal con azúcar `onConfirm` / `onCancel`
```jsx
import { Modal } from '@caamanol/ui-library'

<Modal
  open={open}
  title="Confirmación"
  onClose={() => setOpen(false)}
  onConfirm={() => {/* acción */}}
  onCancel={() => setOpen(false)}
>
  ¿Confirmás la acción?
</Modal>
```

- DataTable con click en fila
```jsx
import { DataTable, Badge } from '@caamanol/ui-library'

const columns = [
  { key: 'id', header: 'ID' },
  { key: 'status', header: 'Estado', render: (v) => <Badge>{v}</Badge> },
]

<DataTable
  columns={columns}
  rows={[{ id: 'CH-0001', status: 'Pendiente' }]}
  onRowClick={(row) => console.log('Row:', row)}
/>
```

---

## Storybook

### Local
```
npm run storybook
```
- Abrirá en `http://localhost:6006` con selector Light/Dark.

### GitHub Pages
- El workflow `.github/workflows/storybook-pages.yml` construye y publica Storybook a Pages al hacer push a `main/master`.
- En el repo: Settings → Pages → Source: “GitHub Actions”.
- Tras el build, se publica en `https://<owner>.github.io/<repo>/`.

> Nota: Se agregaron ajustes especiales para builder Vite + pnpm en `.storybook/main.js`.

---

## Tests

- Correr una vez la instalación de dev deps (si el consumidor clona este repo):
```
npm i
```
- Ejecutar tests:
```
npm test
```
- Modo watch:
```
npm run test:watch
```

---

## Publicación (mantenedores)

Este repo publica a GitHub Packages con el scope `@caamanol`.

1) Versionado y tag
```
pnpm version patch   # o minor / major
git push --follow-tags
```

2) Workflow de publicación
- `.github/workflows/publish.yml` se dispara con tags `v*.*.*`.
- Pasos: install → test → build → publish.
- Usa `pnpm publish --no-git-checks` para soportar tags (detached HEAD) en CI.

> Asegurate de que el repo tenga acceso a `GITHUB_TOKEN` (lo inyecta GitHub Actions automáticamente) y que el paquete tenga nombre `@caamanol/ui-library`.

---

## Notas de compatibilidad
- React 18+ (peer dependency)
- MUI v7 y Emotion v11 (peer dependencies)
- Builder: Vite (library mode solo en script `build`)

---

## Changelog
- Ver Releases/tags del repo.

---

## API de Componentes (resumen)

Esta sección resume props clave. Todos aceptan props adicionales de MUI (via el wrapper) y `className`.

- Button
  - `children`: contenido
  - `onClick`: función de click
  - `variant`: 'primary' | 'secondary' | 'success' | 'ghost' | 'light' | 'outline-inverse'
    - Mapeo: primary/secondary/success → contained; light → outlined; ghost/outline-inverse → text/outlined con color heredado
  - `disabled`, `fullWidth`

- Input / Textarea / Select
  - Controlados: `value`/`defaultValue` + `onChange(e)`
  - Textarea: `rows` (mínimo mostrado)
  - Select: contenido `<option>` estándar, `fullWidth`

- Checkbox / Radio / Switch
  - `checked`, `onChange(event, checked)`, `label`
  - `name` en Radio

- Modal
  - `open`, `title`, `onClose`
  - `primary` y `secondary`: props para los botones (ej. `{ children, onClick }`)
  - Azúcar: `onConfirm`, `onCancel` generan botones por defecto si no pasás `primary/secondary`

- DataTable
  - `columns`: `Array<{ key, header, render?(value, row) }>`
  - `rows`: `Array<any>`
  - `emptyText`: texto para tabla vacía
  - `onRowClick(row)`: callback al clickear fila
  - `rowKey`: nombre de la key en `row` (default `'id'`)

- Pagination
  - `current`: página actual (1-based)
  - `totalPages`: cantidad total de páginas
  - `onChange(page)`: callback con el número de página

- Breadcrumbs
  - `items`: `Array<{ label, href? }>`
  - `onNavigate(item, index)`: intercepta clicks (SPA)

- TopBar
  - `brand`, `userEmail`, `brandColorClass` (clase opcional para el icono)
  - `onBrandClick`, `onAvatarClick`

- EmptyState
  - `title`, `description`
  - `primary`, `secondary`: props de botón

- Toast
  - `children`: contenido
  - `variant`: 'error' | 'info'

---

## Theming y Tokens

La librería expone `lightTheme` y `darkTheme` (MUI). Puntos principales:

- Paleta
  - `primary.main`: color activo #233E6B (hover #35527A, disabled #97A7C7)
  - `secondary.main`: #40aabf
  - Textos: `text.primary #0d1a26`, `text.secondary #304050`
  - `divider`: #dcdee0
  - Background (escala)
    - 100: #08121F, 75: #14253B, 50: #35527A, 25: #97A7C7, 15: #F7FAFF, 0: #FFFFFF
    - Light: `default = 15`, `paper = 0`
    - Dark: `default = 100`, `paper = 75`

- Tipografía
  - Headings: Open Sans Bold (XL 48, L 32, M 24, S 18)
  - Body: Inter 16/24, Body2: Open Sans 14/19.07
  - Button: Inter Bold 16/24, sin transform

- Overrides principales
  - Buttons: radios 8, padding 16/33, ancho 300 (contained/outlined/text), gap iconos 16
  - Inputs (Outlined): radios 10, borde #89949f, placeholder #808080
  - TableHead: fondo suave según modo, celdas en negrita
  - Card/Dialog: radios 12; Card con borde divider
  - Chip: radios 8; label Inter 600 12
  - Shadows: S-1 y S-2 mapeados a `theme.shadows[1]` y `[2]`

### Extender el tema

```ts
import { createTheme } from '@mui/material/styles'
import { lightTheme } from '@caamanol/ui-library'

const theme = createTheme(lightTheme, {
  palette: {
    primary: { main: '#1f3b66' },
    success: { main: '#16B364' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 },
      }
    }
  }
})
```

---

## Variantes de Botón (mapeo)

- `primary` → contained, `color="primary"`
- `secondary` → contained, `color="secondary"`
- `success` → contained, `color="success"` (requiere paleta success definida en el tema consumidor si se usa)
- `light` → outlined, `color="primary"`
- `ghost` → text, `color="inherit"`
- `outline-inverse` → outlined, `color="inherit"`

Estados del primario (light): active #233E6B; hover #35527A; disabled #97A7C7 (texto blanco).

---

## Troubleshooting

- GitHub Packages (.npmrc)
  - Evitá commitear tokens. Usá `.npmrc` de usuario o variables de entorno en CI.

- Storybook en GitHub Pages (pnpm)
  - El repo ya incluye ajustes en `.storybook/main.js` para builder Vite + pnpm.
  - Si persisten errores de resolución, como workaround cambiá el step a `npm ci && npm run build-storybook` en el workflow.

- Publicación con tags
  - El workflow usa `pnpm publish --no-git-checks` para soportar detached HEAD.

- Windows y build de librería
  - Si necesitás compatibilidad de `LIB_BUILD` en Windows, podés cambiar el script de build a `cross-env LIB_BUILD=1 vite build` e instalar `cross-env` como devDep.

---

## Contribuir

- Ejecutar Storybook local: `npm run storybook`
- Correr tests: `npm test` (o `npm run test:watch`)
- Build de la librería: `npm run build`

---

## Guía de uso detallada

### Patrones de uso (controlados vs. no controlados)
- Entradas (Input, Textarea, Select): preferí componentes controlados para sincronizar estado de UI y lógica.
- Con `FormField`: usalo para agrupar `Label`, control y mensajes (`helper`/`error`).

Ejemplo con estado local
```jsx
import { FormField, Input, Select, Checkbox, Switch, Button } from '@caamanol/ui-library'

function Filtro() {
  const [form, setForm] = React.useState({ q: '', estado: 'Todos', aceptar: false, habilitado: false })
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <FormField id="q" label="Buscar" helper="Texto a buscar">
        <Input id="q" value={form.q} onChange={(e) => setForm(f => ({ ...f, q: e.target.value }))} />
      </FormField>
      <FormField id="estado" label="Estado">
        <Select id="estado" value={form.estado} onChange={(e) => setForm(f => ({ ...f, estado: e.target.value }))}>
          <option>Todos</option>
          <option>Pendiente</option>
          <option>En proceso</option>
          <option>Aprobado</option>
          <option>Rechazado</option>
        </Select>
      </FormField>
      <Checkbox label="Acepto" checked={form.aceptar} onChange={(_, v) => setForm(f => ({ ...f, aceptar: v }))} />
      <Switch label="Habilitado" checked={form.habilitado} onChange={(_, v) => setForm(f => ({ ...f, habilitado: v }))} />
      <Button onClick={() => console.log(form)}>Aplicar</Button>
    </div>
  )
}
```

### Modal (patrones)
- Acciones: podés pasar `primary/secondary` completos o usar `onConfirm/onCancel`.
- Cerrar en confirmación/cancelación: llamá `onClose()` dentro de tu handler o en el padre.

### DataTable (patrones)
- Render flexible por columna con `render(value, row)`.
- Interacción: `onRowClick(row)`, agregaremos ordenamiento/selección on-demand.

---

## Referencia de Props (por componente)

### Button
| Prop      | Tipo                       | Default     | Descripción |
|----------|----------------------------|-------------|-------------|
| children | node                       | —           | Contenido del botón |
| onClick  | function(event)            | —           | Handler de click |
| variant  | string                     | 'primary'   | 'primary' | 'secondary' | 'success' | 'ghost' | 'light' | 'outline-inverse' |
| disabled | boolean                    | false       | Deshabilita el botón |
| fullWidth| boolean                    | false       | Ocupa todo el ancho |

### Input / Textarea / Select
| Prop        | Tipo            | Descripción |
|-------------|-----------------|-------------|
| value       | string          | Valor controlado |
| defaultValue| string          | Valor inicial |
| onChange    | function(event) | Cambios del input |
| placeholder | string          | Placeholder |
| rows (Textarea) | number      | Altura mínima en filas |

### Checkbox / Radio / Switch
| Prop     | Tipo                    | Descripción |
|----------|-------------------------|-------------|
| label    | string                  | Etiqueta visible |
| checked  | boolean                 | Estado controlado |
| onChange | function(event, checked)| Cambios (segundo arg es boolean) |
| name (Radio) | string              | Agrupación de radio |

### Modal
| Prop       | Tipo                | Descripción |
|------------|---------------------|-------------|
| open       | boolean             | Visibilidad |
| title      | string              | Título |
| onClose    | function()          | Cierre (click fuera/ESC/botones) |
| primary    | object              | Props de botón 1 (ej: { children, onClick }) |
| secondary  | object              | Props de botón 2 |
| onConfirm  | function()          | Azúcar: genera botón Confirmar |
| onCancel   | function()          | Azúcar: genera botón Cancelar |

### DataTable
| Prop       | Tipo                                         | Descripción |
|------------|----------------------------------------------|-------------|
| columns    | Array<{ key, header, render?(value, row) }>  | Definición de columnas |
| rows       | Array<any>                                   | Datos |
| emptyText  | string                                       | Texto cuando no hay filas |
| onRowClick | function(row)                                | Click en fila |
| rowKey     | string                                       | Propiedad usada como key (default 'id') |

### Pagination
| Prop       | Tipo          | Descripción |
|------------|---------------|-------------|
| current    | number        | Página actual (1-based) |
| totalPages | number        | Total de páginas |
| onChange   | function(page)| Callback al cambiar |

### Breadcrumbs
| Prop       | Tipo                      | Descripción |
|------------|---------------------------|-------------|
| items      | Array<{ label, href? }>   | Items/caminos |
| onNavigate | function(item, index)     | Intercepta navegación (SPA) |

### TopBar
| Prop          | Tipo         | Descripción |
|---------------|--------------|-------------|
| brand         | string       | Nombre de marca |
| userEmail     | string       | Email del usuario |
| brandColorClass | string     | Clase opcional para ícono |
| onBrandClick  | function()   | Click en marca |
| onAvatarClick | function()   | Click en avatar |

### Toast
| Prop      | Tipo    | Descripción |
|-----------|---------|-------------|
| children  | node    | Contenido |
| variant   | string  | 'error' | 'info' |

---

## Integración SSR (Next.js)
- Usá el ThemeProvider en `_app` y seguí la guía oficial de MUI para SSR con Emotion (cache + extractCritical).
- Esta librería no agrega SSR propio: sigue los patrones de MUI/Emotion.

Recursos: https://mui.com/material-ui/guides/server-rendering/

---

## ESM vs CJS y tree-shaking
- El package exporta ESM (`dist/opendev-ui.es.js`) y CJS (`dist/opendev-ui.cjs.js`).
- Bundlers modernos harán tree-shaking del ESM automáticamente.
- Evitá imports profundos; importá desde `@caamanol/ui-library`.

