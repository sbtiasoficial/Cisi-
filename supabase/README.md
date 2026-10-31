# Supabase — Cisi

El proyecto Supabase existente es el backend conectado desde `js/config.js`.

## Estado actual

El esquema ya fue aplicado directamente al proyecto remoto antes de separar el frontend. Las tablas existentes son `profiles`, `conversations`, `conversation_members`, `messages` y `message_hidden`; todas tienen RLS habilitado.

## Importante sobre migraciones

Los SQL originales que se ejecutaron en el proyecto remoto no estaban guardados en el repositorio. Por eso no se inventan aquí archivos de migración que aparenten ser el historial exacto ni se vuelven a ejecutar cambios de esquema sobre una base que ya contiene esas tablas y políticas.

A partir de esta reorganización, toda modificación futura del esquema debe añadirse como un archivo SQL versionado en `supabase/migrations/` y revisarse antes de aplicarse al proyecto remoto. Para reconstruir un baseline reproducible, primero hay que exportar y revisar las definiciones actuales completas (tablas, constraints, índices, funciones, triggers, grants y políticas).
