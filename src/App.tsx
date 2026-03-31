export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <img 
            src="/Contrato Solar - Logo.png" 
            alt="Contrato Solar Logo" 
            className="h-12 w-auto object-contain"
          />
          <img 
            src="/solarever-logo.png" 
            alt="Solarever Logo" 
            className="h-12 w-auto object-contain"
          />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-emerald-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Alianza Estrategica
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Contrato Solar & Solarever
          </p>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Financiamiento solar accesible para transformar tu hogar o negocio con energia limpia
          </p>
        </div>
      </section>

      {/* Quienes Somos */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Quienes Somos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-sky-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src="/Contrato Solar - Logo.png" alt="Contrato Solar" className="h-10 w-auto" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Empresa lider en financiamiento de sistemas solares en Mexico. Ofrecemos planes accesibles 
                que permiten a familias y negocios acceder a energia solar sin grandes inversiones iniciales.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src="/solarever-logo.png" alt="Solarever" className="h-10 w-auto" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Fabricante y distribuidor de paneles solares de alta calidad. Con tecnologia de punta 
                y garantias extendidas, Solarever es sinonimo de confiabilidad en energia renovable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Beneficios de la Alianza</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "Ahorro Inmediato",
                description: "Reduce tu recibo de luz hasta un 95% desde el primer mes de instalacion"
              },
              {
                icon: "📋",
                title: "Sin Enganche",
                description: "Comienza tu proyecto solar sin necesidad de pago inicial"
              },
              {
                icon: "🔧",
                title: "Instalacion Profesional",
                description: "Tecnicos certificados garantizan una instalacion segura y eficiente"
              },
              {
                icon: "📅",
                title: "Plazos Flexibles",
                description: "Elige el plan de pagos que mejor se adapte a tu presupuesto"
              },
              {
                icon: "🛡️",
                title: "Garantia Extendida",
                description: "25 anos de garantia en paneles y 10 anos en inversores"
              },
              {
                icon: "🌱",
                title: "Energia Limpia",
                description: "Contribuye al medio ambiente reduciendo tu huella de carbono"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Requisitos para el Financiamiento</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-sky-100 to-emerald-100 rounded-2xl p-8">
              <ul className="space-y-4">
                {[
                  "Identificacion oficial vigente (INE o pasaporte)",
                  "Comprobante de domicilio no mayor a 3 meses",
                  "Ultimos 3 recibos de luz de CFE",
                  "Comprobante de ingresos (nomina, estados de cuenta o declaracion fiscal)",
                  "Ser propietario del inmueble o contar con autorizacion del propietario",
                  "Buen historial crediticio"
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Proceso de Contratacion</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Contacto", desc: "Solicita tu cotizacion sin compromiso" },
              { step: "2", title: "Evaluacion", desc: "Analizamos tu consumo y disenamos tu sistema" },
              { step: "3", title: "Aprobacion", desc: "Revision de documentos y autorizacion en 48 hrs" },
              { step: "4", title: "Instalacion", desc: "Instalacion profesional en 1-2 semanas" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Comienza a Ahorrar Hoy</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Unete a miles de mexicanos que ya disfrutan de los beneficios de la energia solar
          </p>
          <a 
            href="tel:+525512345678" 
            className="inline-block bg-white text-sky-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            Solicitar Cotizacion
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <img src="/Contrato Solar - Logo.png" alt="Contrato Solar" className="h-8 w-auto brightness-0 invert opacity-70" />
              <span className="text-2xl text-gray-600">&times;</span>
              <img src="/solarever-logo.png" alt="Solarever" className="h-8 w-auto brightness-0 invert opacity-70" />
            </div>
            <p className="text-sm">
              © 2024 Contrato Solar & Solarever. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
