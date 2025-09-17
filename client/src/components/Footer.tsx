export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-lg font-semibold text-foreground" data-testid="text-footer-brand">
              Corsinha Store
            </span>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 Corsinha Store. Todos os direitos reservados.
          </p>
          
          <div className="pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              Este produto é destinado apenas para fins educacionais. Os resultados podem variar de acordo com a dedicação e aplicação das estratégias apresentadas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}