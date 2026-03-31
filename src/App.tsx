export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/Contrato Solar - Logo.png" 
              alt="Contrato Solar Logo" 
              className="h-10 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <img 
              src="/solarever-logo.png" 
              alt="Solarever Logo" 
              className="h-10 w-auto"
            />
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold mb-4">Bienvenido</h2>
        <p className="text-lg text-muted-foreground">Tu aplicacion de brochure esta lista.</p>
      </main>
    </div>
  )
}
