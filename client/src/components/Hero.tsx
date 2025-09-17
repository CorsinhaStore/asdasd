import { Button } from "@/components/ui/button";
import ebookCover from "@assets/generated_images/Marketing_Digital_e-book_cover_2d64bda6.png";

export default function Hero() {
  const handlePurchase = () => {
    window.open('https://www.ggmax.com.br/anuncio/marketing-digital-aprenda-a-ganhar-dinheiro-online', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
              style={{ textShadow: '0 0 20px rgba(236, 72, 153, 0.3)' }}
              data-testid="hero-title"
            >
              Marketing Digital{" "}
              <span className="text-primary">Descomplicado</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Seu Guia Prático pra Ganhar Dinheiro Online
            </p>
          </div>
          
          <p className="text-lg text-secondary-foreground leading-relaxed max-w-lg">
            Transforme a internet em renda real com estratégias comprovadas e um roteiro passo a passo de 30 dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-lg hover:shadow-primary/25"
              onClick={handlePurchase}
              data-testid="button-hero-cta"
            >
              Quero meu E-book Agora 🚀
            </Button>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold text-primary">R$ 19,99</p>
              <p className="text-sm text-muted-foreground">Oferta de entrada, fácil de começar!</p>
            </div>
          </div>
        </div>

        {/* E-book Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg blur-xl"
              style={{ transform: 'scale(1.1)' }}
            ></div>
            <img 
              src={ebookCover} 
              alt="Capa do E-book Marketing Digital Descomplicado" 
              className="relative w-80 md:w-96 h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              data-testid="img-ebook-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}