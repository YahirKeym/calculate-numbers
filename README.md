
# Examen Técnico - Microservicios con NestJS y RabbitMQ

  

## Descripción del Reto

  

Este proyecto es una evaluación técnica que demuestra la implementación de una arquitectura de microservicios utilizando NestJS y RabbitMQ. La aplicación realiza diversos cálculos matemáticos a partir de un número entero de entrada, estructurada en un monorepo.

  

### Características Principales

  

- Arquitectura de microservicios

- Comunicación asíncrona mediante RabbitMQ

- Implementación en NestJS

- Estructura de monorepo

- Contenedores Docker

  

## Requisitos Previos

  

- Node.js

- Docker y Docker Compose

- npm o yarn

  

## Estructura del Proyecto

  

El proyecto está organizado en un monorepo que contiene:

  

-  `rabbitmq/`: Servicio consumidor

-  `rabbitmq-producer/`: Servicio productor

-  `docker-compose.yml`: Configuración de contenedores

-  `.env`: Configuración de puertos y ruta de rabbitMQ

  

## Comandos Disponibles

  

### Desarrollo

    npm run dev

### Producción

    npm run prod
    
## Configuración

El proyecto utiliza Docker Compose para gestionar los siguientes servicios:
- RabbitMQ: Broker de mensajería
- Consumer: Servicio consumidor
- Producer: Servicio productor