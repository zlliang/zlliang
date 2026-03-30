/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    error?: {
      status: number
      statusText: string
    }
  }
}
