# GestionDeCuentas
Proyecto de sistema de gestión de cuentas bancarias - JS
# Banco Popular - Sistema de Gestión de Cuentas

**Autor:** Darwin Bello  
**Tecnología:** JavaScript (ES6+), Módulos

---

## Descripción

Este proyecto es un sistema de gestión de **cuentas bancarias** que permite manejar:

- Cuentas corrientes, de ahorro y de nómina.
- Clientes y empleados (con roles como empleado, gerente y director).
- Bonificaciones automáticas para empleados según su rol.
- Depósitos, retiros y transferencias entre cuentas.
- Sistema de autenticación básico para empleados.

Está hecho completamente en **JavaScript moderno**, usando clases, herencia, métodos privados y módulos ES6.

## Funcionalidades principales

### Cuentas
- **CuentaCorriente:** Retiros con comisión del 5%.
- **CuentaNomina:** Retiros con comisión del 1%.
- **CuentaAhorro:** Retiros con comisión del 2%.
- Permite **depósitos**, **retiros** y **transferencias** entre cuentas.

### Empleados
- Roles: **Empleado**, **Gerente**, **Director**.
- Cada rol tiene **bonificación distinta**.
- Empleados pueden **autenticarse** usando un sistema básico de login.

### Clientes
- Datos básicos: nombre, DNI y RUT.
- Sistema para asignar clave y verificar autenticación.
