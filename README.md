# Stephano Portella

**Senior iOS Developer · Líder Técnico iOS · AI Engineer**
Lima, Perú · Más de seis años construyendo apps de banca y pagos en Italia

Desarrollo apps nativas para el ecosistema Apple desde 2019. He trabajado en productos financieros con millones de usuarios, donde la seguridad, la calidad y la estabilidad pesan en cada decisión, y he liderado equipos iOS de 3 a 4 desarrolladores combinando arquitectura, revisión de código y desarrollo activo.

Hoy dedico mi laboratorio personal, **8+Core**, a una pregunta concreta: cómo construir software de calidad con agentes de IA manteniendo el control técnico. Aquí encontrarás parte de ese trabajo.

---

## Experiencia

| Periodo | Rol | Dónde |
|---|---|---|
| 2026 – hoy | Líder Técnico iOS · AI Engineer | 8+Core, laboratorio personal (Lima) |
| 2025 – 2026 | Líder Técnico iOS | Satispay, FinTech de pagos digitales (Turín) |
| 2022 – 2025 | Líder Técnico iOS | Hays, consultoría para Allianz, Luxottica y Leonardo (Turín) |
| 2020 – 2022 | Desarrollador iOS Senior | Iriscube Reply, banca digital para Intesa Sanpaolo, Nexi y BPER Banca (Turín) |
| 2019 | Desarrollador iOS | bitApp, app de transporte AeroBus (Bolonia) |

Me formé en la **Apple Developer Academy** de la Università degli Studi di Napoli Federico II (2018–2019). Antes de dedicarme al desarrollo, pasé nueve años en Nokia Perú en ventas, análisis comercial y liderazgo de equipos de campo; ahí empecé a estudiar por mi cuenta cómo se construían las apps de Symbian.

---

## Cómo trabajo

**Arquitectura.** Clean Architecture con MVVM y Coordinators, módulos con Swift Package Manager e inyección de dependencias. El dominio no depende de la interfaz ni de la red, para poder probarlo y cambiarlo con seguridad. He migrado módulos VIPER legacy a MVVM-C en apps bancarias en producción.

**Calidad.** Tests con Swift Testing y XCTest, CI con GitHub Actions en cada push y pull request, y code review que también sirve para formar al equipo. En pagos aprendí a tratar el dinero con `Decimal`, la sesión con Keychain y biometría, y los datos personales bajo PSD2 y GDPR.

**Swift moderno.** Swift 6 con concurrencia estricta, SwiftUI con `@Observable`, async/await y UIKit cuando el caso lo pide.

**Liderazgo.** Definir estándares de código, estimar con el equipo, ordenar la deuda técnica y explicar riesgos técnicos a perfiles no técnicos.

---

## 8+Core: desarrollo de software con agentes de IA

8+Core es mi laboratorio para crear apps de iOS, iPadOS y macOS con **Claude Code**. Trabajo con un proceso en el que cada agente tiene un rol, límites claros y una persona que aprueba los cambios.

- **Agentes y subagentes por etapa del ciclo de desarrollo:** requisitos, arquitectura, implementación, revisión de código y testing.
- **Revisores independientes:** agentes de solo lectura que revisan arquitectura y calidad antes de cada merge.
- **Hooks de seguridad con tests:** bloquean acciones de riesgo (push a main, force push, escritura fuera del alcance, secretos).
- **Evals y métricas:** registro de cada tarea con el resultado del build y los tests, y el número de correcciones humanas, para medir si el proceso mejora.
- **MCP:** servidores para que los agentes compilen, prueben y consulten documentación de forma controlada.
- **Probado en dos escenarios:** una app legacy en VIPER y una app nueva construida de punta a punta.

Parte de este trabajo es privado; lo muestro con gusto en una entrevista.

---

## Por dónde empezar

| Repositorio | Qué muestra |
|---|---|
| [InvestFlow](https://github.com/iostephano/InvestFlow) | App de inversión con Clean Architecture, MVVM-C, módulos SPM, Swift Charts, Face ID y 24 suites de tests. Mi referencia de arquitectura. |
| [WalletApp](https://github.com/iostephano/WalletApp) | Wallet cripto en SwiftUI organizada por features, con cálculos monetarios en `Decimal`. |
| [AerthysApp](https://github.com/iostephano/AerthysApp) | Reconocimiento visual de líquenes con Apple Vision, sin internet, para un proyecto de investigación escolar en Chorrillos. Usuarios reales. |
| [BrushCore](https://github.com/iostephano/BrushCore) | Swift Package con API pública para iOS y macOS, app demo y CI sobre los tests del paquete. |
| [Particle-Numbers](https://github.com/iostephano/Particle-Numbers) | 2000 partículas renderizadas en GPU con Metal que forman números. |
| [mods](https://github.com/kit-para-devs/mods) | Plugin para Claude Code: un panel en vivo con el consumo de la sesión. |

También exploro gráficos y 3D en el ecosistema Apple: **Metal** (ColorMorph, MyMusic), **RealityKit** (CoffeeDemo), **Core Graphics** y **Core Animation** (ShapeMorph, Magnetic-Particles, ColorKit).

---

## Stack

**Apple:** Swift 6 · SwiftUI · UIKit · Swift Concurrency · Combine · Metal · RealityKit · Vision · AVFoundation · Core Graphics · MapKit · PDFKit · Keychain · Swift Package Manager
**Arquitectura:** Clean Architecture · MVVM · MVVM-C · VIPER · SOLID · Dependency Injection · modularización
**Calidad y entrega:** Swift Testing · XCTest · XCUITest · GitHub Actions · Fastlane · TestFlight · App Store Connect
**IA:** Claude Code · Claude API · Model Context Protocol · agentes y subagentes · evals · RAG · Amazon Bedrock · Python para automatizaciones

---

## Certificaciones

- **Anthropic Academy:** 14 credenciales verificables (2026) en Claude Code, subagentes, MCP, Claude API, Amazon Bedrock, tool use, evals, equipos de personas y agentes, y adopción de IA en empresas.
- **Apple Foundation Program**, Basic y Advanced (2017).
- **Scrum Master**, C&P Management Academy (2019).

---

## Contacto

[LinkedIn](https://www.linkedin.com/in/iostephano) · Español nativo · Italiano fluido · Inglés técnico
