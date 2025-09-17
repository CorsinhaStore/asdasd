import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "Como funciona o marketing digital e seus pilares essenciais",
  "Os melhores modelos de negócio online",
  "Estratégias de tráfego gratuito e pago", 
  "Como transformar seguidores em clientes",
  "Ferramentas essenciais para automação",
  "Roteiro de 30 dias pra sair do zero",
];

const bonusFeature = "Bônus exclusivo: checklist dos primeiros 7 dias";

export default function Benefits() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-benefits-title">
            O que você vai aprender
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Você quer ganhar dinheiro online, mas não sabe por onde começar? Este e-book é seu guia completo para transformar internet em renda real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-card border-card-border hover-elevate" data-testid={`card-benefit-${index}`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <p className="text-card-foreground font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bonus Feature */}
        <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30" data-testid="card-bonus">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">🎁</span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-primary mb-1">Bônus Exclusivo</p>
              <p className="text-foreground font-medium">
                {bonusFeature}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}