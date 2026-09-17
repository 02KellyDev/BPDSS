## INSTALLATION
Install the project dependencies:
```bash
npm install
```
## FIRST STEPS OF EXECUTION
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## INTEGRANTES DEL EQUIPO
- SAMUEL DUQUE LOPEZ :Integración y control de versiones (Git)
- NICOLAS YAIR CORRO MARQUEZ :Lógica (JavaScript)
- BREITNER SUAREZ PERALTA : Estilos (CSS)
- EDWIN RAFAEL CERA ROMERO : Estructura (HTML)

## Funcionalidades Principales

  Creación rápida: Permite añadir nuevas tareas a la lista general escribiendo en el campo principal, presionando el botón `+`y pulsando Enter en el teclado.

Edición interactiva: Al hacer clic sobre cualquier tarea, se habilita un modo de edición para modificar su nombre, guardando los cambios con el ícono de validación.

Control de estado: Cuenta con casillas de verificación para marcar y desmarcar tareas como completadas (tachándolas visualmente).

Eliminación de tareas: Permite borrar de la lista principal aquellas tareas que ya no se necesitan utilizando el ícono de papelera dentro del modo de edición.

Vista de Papelera: Sección independiente donde se almacenan y visualizan exclusivamente las tareas que han sido eliminadas previamente.

Métricas de seguimiento:Muestra en tiempo real el total de tareas creadas y cuántas de ellas ya fueron completadas.


1. MAIN VIEW
Esta es la vista principal, que muestra la lista de tareas con un campo de entrada para agregar nuevas tareas. En este momento, hay dos tareas: una completada y otra incompleta.
<img width="960" height="1025" alt="Cap1" src="https://github.com/user-attachments/assets/b3b64f47-ea96-4d2f-9901-5d820be37b45" />



2. ADD NEW TASK
Para agregar una nueva tarea, simplemente escribe el nombre de la tarea y haz clic en el botón '+' en rojo. Esto agrega una nueva entrada en blanco a la lista.
<img width="960" height="1025" alt="cap 2" src="https://github.com/user-attachments/assets/75475209-85d2-47d7-b3a2-05a2ef92d960" />
<img width="960" height="1025" alt="cap 3" src="https://github.com/user-attachments/assets/7f553116-e0ac-4fc6-a418-7a9c28c51070" />




3. TASK EDITING
Haz clic en cualquier tarea para ingresar al modo de edición. En este modo, puedes modificar el nombre de la tarea, guardar los cambios con el icono de check o eliminar la tarea con el icono de la papelera.
<img width="960" height="1025" alt="cap 4" src="https://github.com/user-attachments/assets/9c319cc1-633b-4ea8-964b-02b072a384d9" />
<img width="960" height="1025" alt="cap 5 " src="https://github.com/user-attachments/assets/b139718c-3090-4674-85c8-a8a7e702009c" />



4. COMPLETE TASK
Para marcar una tarea como completada, simplemente haz clic en el checkbox. La tarea se marcará con un check y su texto se atenuará para indicar que está terminada.
<img width="960" height="1032" alt="cap 9 " src="https://github.com/user-attachments/assets/9ec25aac-894d-48e2-8f4b-5f34a8c0b001" />


5. TASK DELETION
Para eliminar una tarea de forma permanente, haz clic en el icono de la papelera mientras estás en el modo de edición. Esto eliminará la tarea de la lista.
<img width="960" height="1025" alt="cap 6" src="https://github.com/user-attachments/assets/3fe28aaf-5f41-484d-8e65-1a1bfb06987c" />
<img width="960" height="1025" alt="cap 7" src="https://github.com/user-attachments/assets/902de89b-dc40-4b5a-a070-1a0a9e0d44e0" />

6. TRASH BIN VIEW
En esta sección se pueden observar exclusivamente las tareas que han sido eliminadas.
<img width="960" height="1025" alt="cap 8 " src="https://github.com/user-attachments/assets/b4c1665f-b1e4-4e37-9456-aad15f15fee2" />







