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

