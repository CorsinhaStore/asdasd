import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PriceSection() {
  const handlePurchase = () => {
    window.open('https://www.ggmax.com.br/anuncio/marketing-digital-aprenda-a-ganhar-dinheiro-online', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-card to-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="p-8 bg-card border-card-border shadow-xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-price-title">
                Comece Agora por Apenas
              </h2>
              <div className="text-6xl md:text-7xl font-bold text-primary mb-2" data-testid="text-price-value">
                R$ 19,99
              </div>
              <p className="text-lg text-muted-foreground">
                Oferta de entrada, fácil de começar!
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full text-xl px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={handlePurchase}
                data-testid="button-purchase-cta"
              >
                Quero meu E-book Agora 🚀
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Acesso imediato após a compra • Satisfação garantida
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Acesso vitalício</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Bônus inclusos</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Suporte incluso</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}