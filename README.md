# Family Task Manager

Una aplicación web construida con **Astro** y **SSR** para gestionar tareas del hogar, asignaciones y recompensas para la familia.

## Características

### 🏠 Dashboard Principal
- Vista personalizada para cada miembro de la familia.
- Lista de tareas asignadas con estado (Pendiente, En Revisión, Verificada).
- Visualización de puntos acumulados.
- Notificaciones de tareas vencidas.

### 👨‍👩‍👧‍👦 Panel de Padres (Admin)
- **Gestión de Usuarios**: Crear, eliminar y modificar usuarios (Hijos/Admins).
- **Gestión de Tareas**: 
  - Crear nuevas tareas asignadas a miembros específicos.
  - Editar tareas existentes (título, descripción, puntos, fecha).
  - Verificar tareas completadas por los hijos para otorgar puntos.
- **Gestión de Solicitudes**: Aprobar o rechazar solicitudes de "compras" o permisos de los hijos.

### 📊 Reportes (en desarrollo)
- Visualización gráfica del rendimiento familiar.
- Gráficos de puntos por usuario.
- Gráficos de tareas completadas.
- Distribución global de estado de tareas.

### 🎮 Sistema de Puntos y Recompensas
- Los hijos ganan puntos al completar tareas.
- Los padres verifican las tareas para validar los puntos.
- (Próximamente) Canje de puntos por recompensas.

## Tecnologías

- **Framework**: [Astro](https://astro.build/) (SSR Mode)
- **Base de Datos**: [Astro DB](https://astro.build/db/) (LibSQL/SQLite)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Gráficos**: [Chart.js](https://www.chartjs.org/)
- **Notificaciones**: Discord Webhooks integration.

## Instalación y Uso

1.  **Clonar el repositorio**
2.  **Instalar dependencias**:
    ```bash
    npm install
    ```
3.  **Configurar Variables de Entorno**:
    Crear un archivo `.env` con las claves necesarias (ej. `DISCORD_WEBHOOK_URL`).
4.  **Inicializar Base de Datos**:
    ```bash
    npx astro db push
    ```
5.  **Ejecutar en desarrollo**:
    ```bash
    npm run dev
    ```

## Estructura del Proyecto

- `src/pages/`: Rutas de la aplicación.
  - `admin.astro`: Panel de control principal.
  - `reports.astro`: Página de estadísticas.
  - `dashboard/[userId].astro`: Dashboard individual.
- `src/layouts/`: Plantillas base.
- `db/config.ts`: Definición del esquema de base de datos.

## Demo

![Admin Panel](./public/screenshot-admin.png)
*Panel de administración*
