import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck, Award, Star, Clock, MapPin, Phone, MessageCircle,
  ChevronDown, ArrowRight, Menu, X, Check, ExternalLink, KeyRound,
  Sparkles, Calculator, FileCheck, DollarSign, HeartHandshake,
  TrendingUp, CheckCircle2, Navigation, Wrench, Disc, Gauge, HelpCircle
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: PadokPneusLandingPage,
});

export default function PadokPneusLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  // Quotation Simulator State
  const [clientName, setClientName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [tireSizeOrService, setTireSizeOrService] = useState("Jogo de 4 Pneus Michelin + Alinhamento 3D");
  const [paymentPreference, setPaymentPreference] = useState("Parcelado em até 10x Sem Juros");
  const [notes, setNotes] = useState("");

  const phone = "552126431530";
  const phoneDisplay = "(21) 2643-1530";
  const address = "R. Ten. Luiz Meirelles, 439 - Várzea, Teresópolis - RJ";
  const hours = "Segunda a Sexta das 08:00 às 18:00 | Sábados das 08:00 às 12:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site da Padok Pneus e gostaria de solicitar uma cotação de pneus Michelin e alinhamento 3D."
  )}`;

  const handleQuotationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*SOLICITAÇÃO DE COTAÇÃO - PADOK PNEUS (REVENDA MICHELIN)*
---------------------------------------
*Cliente:* ${clientName || "Cliente do Site"}
*Veículo (Modelo/Ano):* ${carModel || "Não informado"}
*Medida do Pneu / Serviço Desejado:* ${tireSizeOrService}
*Condição de Pagamento:* ${paymentPreference}
${notes ? `*Observações:* ${notes}` : ""}
---------------------------------------
Vim pelo site oficial e gostaria de consultar valores e disponibilidade!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const tireCatalog = [
    {
      category: "aro14",
      name: "Michelin Energy XM2+ 175/65 R14 82T",
      vehicle: "Ideais para Gol, Palio, Uno, Ka, Celta e Fox",
      highlight: "Campeão de Durabilidade",
      specs: ["Durabilidade até 25% superior", "Frenagem curta no molhado", "Menor consumo de combustível"],
      tag: "Aro 14"
    },
    {
      category: "aro15",
      name: "Michelin Primacy 4+ 185/65 R15 88H",
      vehicle: "Ideais para Onix, HB20, Prisma, Sandero e Yaris",
      highlight: "Segurança Máxima",
      specs: ["Tecnologia EverGrip", "Excelente aderência na serra", "Silêncio ao rodar e conforto"],
      tag: "Aro 15"
    },
    {
      category: "aro16",
      name: "Michelin Primacy 4+ 205/55 R16 91V",
      vehicle: "Ideais para Corolla, Civic, Cruze, Golf e Renegade",
      highlight: "Mais Vendido da Categoria",
      specs: ["Referência em frenagem no asfalto molhado", "Composto de borracha de alta tecnologia", "Alta quilometragem"],
      tag: "Aro 16"
    },
    {
      category: "aro17",
      name: "Michelin Pilot Sport 4 225/45 R17 94Y",
      vehicle: "Ideais para Sedans Médios, Hatches Premium e Esportivos",
      highlight: "Alta Performance",
      specs: ["Controle absoluto em altas velocidades", "Precisão milimétrica de direção", "Nascido nas pistas"],
      tag: "Aro 17"
    },
    {
      category: "suv",
      name: "Michelin LTX Trail 265/65 R17 112T",
      vehicle: "Ideais para Hilux, SW4, Ranger, S10 e Amarok",
      highlight: "Uso Misto Asfalto & Terra",
      specs: ["Estrutura reforçada contra impactos", "Tração garantida em pistas molhadas e lama", "Durabilidade lendária"],
      tag: "SUV & Pick-up"
    },
    {
      category: "servicos",
      name: "Combo Geometria 3D + Balanceamento Computadorizado",
      vehicle: "Recomendado a cada 10.000 km ou na troca de pneus",
      highlight: "Precisão a Laser",
      specs: ["Ajuste computadorizado de convergência e cambagem", "Balanceamento de 4 rodas", "Inspeção de suspensão inclusa"],
      tag: "Serviço Mecânico"
    }
  ];

  const filteredCatalog = selectedCategory === "todos"
    ? tireCatalog
    : tireCatalog.filter(item => item.category === selectedCategory);

  const pillars = [
    {
      icon: Award,
      title: "Revenda Oficial Autorizada Michelin",
      desc: "Garantia direta de fábrica, procedência 100% comprovada e a chancela da marca de pneus número 1 do mundo no seu carro."
    },
    {
      icon: Gauge,
      title: "Alinhamento 3D & Balanceamento Laser",
      desc: "Equipamentos de última geração para calibrar a geometria veicular com precisão milimétrica, evitando desgastes prematuros dos pneus."
    },
    {
      icon: Disc,
      title: "Excelência em Freios e Suspensão",
      desc: "Substituição de discos, pastilhas, amortecedores e batentes com inspeção de segurança para as descidas de serra de Teresópolis."
    },
    {
      icon: DollarSign,
      title: "Mão de Obra em até 10x Sem Juros",
      desc: "O melhor custo-benefício da região: parcele seu jogo de pneus e todos os serviços de mecânica em até 10x sem juros no cartão."
    }
  ];

  const testimonials = [
    {
      name: "Cesar Patricio",
      role: "Local Guide Google Maps",
      quote: "Realizei troca de disco e pastilha de freio, troca de rolamento e alinhamento, serviço realizado com excelência, preço conforme o esperado, o melhor que a mão de obra pode ser parcelada em até 10x sem juros.",
      highlight: "Mão de obra e peças parceladas em até 10x sem juros!"
    },
    {
      name: "Heitor Franklin",
      role: "Local Guide Google Maps",
      quote: "Ótimo atendimento e preço! Recomendo a todos em Teresópolis que buscam qualidade Michelin.",
      highlight: "Ótimo atendimento, preço justo e serviço impecável."
    },
    {
      name: "Cliente da Região Serrana",
      role: "Avaliação Google Maps",
      quote: "Melhor centro automotivo da Tenente Luiz Meirelles. Troquei os 4 pneus do meu Corolla e fiz alinhamento 3D. Carro ficou perfeito e silencioso na estrada.",
      highlight: "Carro ficou perfeito e silencioso na estrada!"
    }
  ];

  const faqItems = [
    {
      q: "Qual é a garantia dos pneus Michelin adquiridos na Padok Pneus?",
      a: "Como Revenda Autorizada Michelin, todos os pneus comercializados na Padok contam com garantia legal e contratual de fábrica de até 5 anos contra defeitos de fabricação."
    },
    {
      q: "Quanto tempo dura a instalação dos 4 pneus com alinhamento e balanceamento?",
      a: "Em média, o procedimento completo leva de 40 a 60 minutos. Dispomos de elevadores automotivos modernos e equipe ágil para que você retorne rapidamente à sua rotina."
    },
    {
      q: "Posso parcelar peças e mão de obra em até 10x sem juros?",
      a: "Sim! Na Padok Pneus você parcela tanto os pneus Michelin quanto serviços mecânicos (discos, pastilhas, amortecedores e alinhamento 3D) em até 10x sem juros em todos os cartões de crédito."
    },
    {
      q: "O que é o aperto das rodas com torquímetro de precisão?",
      a: "Adotamos o protocolo técnico recomendado pelas montadoras: o aperto final dos parafusos de roda é feito com torquímetro calibrado, garantindo o torque exato sem danificar os prisioneiros ou travar as porcas."
    },
    {
      q: "Onde fica localizada a oficina da Padok Pneus?",
      a: "Estamos localizados na Rua Tenente Luiz Meirelles, nº 439, no polo automotivo da Várzea em Teresópolis - RJ, com amplo espaço para atendimento e fácil acesso."
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F8FAFC] selection:bg-[#FACC15]/30 selection:text-white pb-24 lg:pb-0">
      {/* 1. TOP MICHELIN STRIP */}
      <div className="bg-[#002D72] text-[#F8FAFC] px-4 py-2.5 text-xs font-medium border-b border-[#001D4D]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 rounded-full bg-[#FACC15] animate-pulse"></span>
            <span>
              <strong>Padok Pneus:</strong> Revenda Autorizada Michelin · Pneus e Mão de Obra em até 10x Sem Juros.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#BFDBFE]">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-[#FACC15]" />
              Seg a Sex: 08:00 às 18:00 | Sáb: até 12:00
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-[#FACC15]" />
              R. Ten. Luiz Meirelles, 439 - Várzea
            </span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR - TOTALMENTE SEM ÍCONE NA HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090B]/95 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Logo EXCLUSIVAMENTE Tipográfica SEM NENHUM ÍCONE */}
          <a href="#" className="group flex flex-col transition-opacity hover:opacity-90">
            <span className="font-['Outfit',sans-serif] text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              Padok <span className="text-[#FACC15]">Pneus</span>
            </span>
            <span className="text-[10px] font-bold tracking-wider text-[#93C5FD] uppercase sm:text-xs">
              Revenda Autorizada Michelin & Centro Automotivo · Várzea
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#pneus" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#FACC15]">
              Pneus por Aro
            </a>
            <a href="#servicos" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#FACC15]">
              Serviços Automotivos
            </a>
            <a href="#cotacao" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#FACC15]">
              Pedir Cotação
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#FACC15]">
              230+ Avaliações
            </a>
            <a href="#localizacao" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#FACC15]">
              Onde Estamos
            </a>
            <a href="#faq" className="text-sm font-medium text-[#D1D5DB] transition-colors hover:text-[#FACC15]">
              Dúvidas
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={`tel:${phone}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-[#D1D5DB] hover:text-[#FACC15] px-3 py-2"
            >
              <Phone className="h-3.5 w-3.5 text-[#FACC15]" />
              {phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de consultar cotação de pneus Michelin na Padok Pneus.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] px-5 py-2.5 text-xs sm:text-sm font-extrabold text-[#09090B] shadow-lg shadow-[#FACC15]/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-[#09090B]" />
              Pedir Cotação no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white lg:hidden hover:bg-[#181820]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-[#121216] px-6 py-5 lg:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3.5">
              <a
                href="#pneus"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white py-1 hover:text-[#FACC15]"
              >
                Pneus Michelin por Aro
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white py-1 hover:text-[#FACC15]"
              >
                Serviços de Oficina & Freios
              </a>
              <a
                href="#cotacao"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white py-1 hover:text-[#FACC15]"
              >
                Cotação Rápida WhatsApp
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white py-1 hover:text-[#FACC15]"
              >
                Depoimentos no Google Maps
              </a>
              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white py-1 hover:text-[#FACC15]"
              >
                Localização (Tenente Luiz Meirelles)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white py-1 hover:text-[#FACC15]"
              >
                Dúvidas Frequentes
              </a>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá! Vim pelo site da Padok Pneus e gostaria de cotação de pneus.")}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] py-3 text-sm font-extrabold text-[#09090B]"
                >
                  <MessageCircle className="h-4 w-4 text-[#09090B]" />
                  Chamar no WhatsApp
                </a>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/20 py-2.5 text-xs font-semibold text-white"
                >
                  <Phone className="h-3.5 w-3.5 text-[#FACC15]" />
                  Ligar: {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Radial High-Performance Orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#002D72]/40 blur-[130px]"></div>
        <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-80 w-80 rounded-full bg-[#FACC15]/10 blur-[120px]"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#002D72] bg-[#002D72]/40 px-4 py-1.5 text-xs font-bold text-[#93C5FD] shadow-lg">
                <span className="flex h-2 w-2 rounded-full bg-[#FACC15] animate-ping"></span>
                Revenda Autorizada Michelin · Alinhamento 3D · Mão de Obra em até 10x Sem Juros
              </div>

              <h1 className="mt-6 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                A segurança e a performance dos pneus Michelin no seu carro em{" "}
                <span className="bg-gradient-to-r from-[#FACC15] via-[#FFE000] to-[#EAB308] bg-clip-text text-transparent">
                  até 10x sem juros.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-[#D1D5DB] sm:text-lg sm:leading-relaxed max-w-2xl">
                Muito além de vender pneus: centro automotivo completo com alinhamento computadorizado 3D, balanceamento a laser, freios e suspensão na Tenente Luiz Meirelles com a garantia da marca número 1 do mundo.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de consultar cotação de pneus Michelin e condições de pagamento na Padok Pneus.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FACC15] via-[#FFE000] to-[#EAB308] px-7 py-4 text-sm sm:text-base font-extrabold text-[#09090B] shadow-xl shadow-[#FACC15]/20 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="h-5 w-5 text-[#09090B]" />
                  Pedir Cotação no WhatsApp
                </a>
                <a
                  href="#pneus"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#121216] px-7 py-4 text-sm sm:text-base font-bold text-white shadow-xs transition-all hover:border-[#FACC15] hover:bg-[#181820]"
                >
                  Ver Medidas de Pneus
                  <ArrowRight className="h-4 w-4 text-[#FACC15]" />
                </a>
              </div>

              {/* Social Proof Google Review Strip */}
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-1 text-[#FACC15]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FACC15] text-[#FACC15]" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-[#D1D5DB]">
                  <strong className="text-white font-bold">⭐ 4,5 com 232 Avaliações no Google:</strong>{" "}
                  <span className="italic text-[#FACC15]">"Serviço com excelência e parcelamento em 10x sem juros!"</span> — Cesar Patricio
                </div>
              </div>
            </div>

            {/* Right Card / Michelin Authorized Box */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-[#002D72]/80 bg-gradient-to-b from-[#121216] to-[#09090B] p-6 sm:p-8 shadow-2xl shadow-black">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-[#FACC15] uppercase">
                      Revenda Oficial
                    </span>
                    <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-white">
                      Michelin Certified Center
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#002D72] px-3 py-1 text-xs font-bold text-white border border-[#93C5FD]/30">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#FACC15]" />
                    Garantia 5 Anos
                  </span>
                </div>

                <div className="mt-5 space-y-3.5">
                  <div className="rounded-2xl border border-white/10 bg-[#181820] p-4 transition-all hover:border-[#FACC15]/40">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-white">Primacy 4+ (205/55 R16)</span>
                          <span className="rounded-md bg-[#FACC15] px-1.5 py-0.5 text-[9px] font-extrabold text-[#09090B] uppercase">Top 1</span>
                        </div>
                        <p className="mt-1 text-xs text-[#A1A1AA]">
                          Sedans e Hatches médios · Máxima frenagem na chuva e durabilidade.
                        </p>
                      </div>
                      <span className="text-xs font-extrabold text-[#FACC15] shrink-0">10x Sem Juros</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#181820] p-4 transition-all hover:border-[#FACC15]/40">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="font-bold text-sm text-white">LTX Trail (265/65 R17)</span>
                        <p className="mt-1 text-xs text-[#A1A1AA]">
                          Pick-ups e SUVs (Hilux, SW4, Ranger) · Tração off-road e asfalto.
                        </p>
                      </div>
                      <span className="text-xs font-extrabold text-[#FACC15] shrink-0">Linha 4x4</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#181820] p-4 transition-all hover:border-[#FACC15]/40">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="font-bold text-sm text-white">Geometria 3D + Balanceamento</span>
                        <p className="mt-1 text-xs text-[#A1A1AA]">
                          Alinhamento computadorizado a laser para evitar desgaste prematuro.
                        </p>
                      </div>
                      <span className="text-xs font-extrabold text-[#FACC15] shrink-0">Oficina</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#002D72]/30 border border-[#002D72] p-4 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Atendimento e Agendamento:</span>
                    <span className="font-bold text-[#FACC15]">{phoneDisplay}</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[11px]">
                    <span className="text-[#BFDBFE]">Tenente Luiz Meirelles, 439</span>
                    <span className="text-emerald-400 font-semibold">Instalação Rápida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS / CONFIANÇA STRIP */}
      <section className="border-y border-white/10 bg-[#121216] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            <div className="p-2">
              <span className="font-['Outfit',sans-serif] text-2xl sm:text-4xl font-extrabold text-[#FACC15]">
                10x Sem Juros
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#D1D5DB]">
                Mão de Obra e Peças no Cartão
              </p>
            </div>
            <div className="p-2">
              <span className="font-['Outfit',sans-serif] text-2xl sm:text-4xl font-extrabold text-[#FACC15]">
                ⭐ 4,5
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#D1D5DB]">
                232 Avaliações Reais no Google Maps
              </p>
            </div>
            <div className="p-2">
              <span className="font-['Outfit',sans-serif] text-2xl sm:text-4xl font-extrabold text-[#FACC15]">
                5 Anos
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#D1D5DB]">
                Garantia de Fábrica Michelin
              </p>
            </div>
            <div className="p-2">
              <span className="font-['Outfit',sans-serif] text-2xl sm:text-4xl font-extrabold text-[#FACC15]">
                Alinhamento 3D
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#D1D5DB]">
                Geometria Computadorizada a Laser
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAIS / 4 PILARES */}
      <section id="servicos" className="py-16 md:py-24 bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-[#FACC15] uppercase">
              Por que nos escolher
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Tecnologia de Pista e Precisão Mecânica
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
              A durabilidade dos pneus Michelin aliada a uma equipe técnica experiente e equipamentos de geometria de última geração.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl border border-white/10 bg-[#121216] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FACC15] hover:shadow-xl hover:shadow-[#FACC15]/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002D72] text-[#FACC15] transition-colors group-hover:bg-[#FACC15] group-hover:text-[#09090B]">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-['Outfit',sans-serif] text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#D1D5DB]">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CATÁLOGO DE PNEUS MICHELIN POR ARO */}
      <section id="pneus" className="border-t border-white/10 bg-[#0D0D11] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-[#FACC15] uppercase">
              Catálogo Oficial
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Medidas Michelin Disponíveis
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
              Consulte as principais linhas para carros de passeio, sedans, utilitários e pick-ups.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                { id: "todos", label: "Todas as Linhas" },
                { id: "aro14", label: "Aro 14 (Populares)" },
                { id: "aro15", label: "Aro 15 (Compactos & Sedans)" },
                { id: "aro16", label: "Aro 16 (Médios & Conforto)" },
                { id: "aro17", label: "Aro 17 (Performance)" },
                { id: "suv", label: "SUVs & Pick-ups" },
                { id: "servicos", label: "Oficina & Geometria" }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#002D72] text-white border border-[#93C5FD]/40 shadow-sm"
                      : "bg-[#181820] text-[#D1D5DB] border border-white/10 hover:border-white/30"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Tires / Services */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCatalog.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121216] p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FACC15] hover:shadow-xl hover:shadow-[#FACC15]/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#002D72]/70 px-3 py-1 text-[11px] font-bold text-[#93C5FD] border border-[#002D72]">
                      {item.tag}
                    </span>
                    <span className="text-xs font-bold text-[#FACC15]">{item.highlight}</span>
                  </div>

                  <h3 className="mt-4 font-['Outfit',sans-serif] text-xl font-bold text-white group-hover:text-[#FACC15] transition-colors">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs text-[#A1A1AA] italic">
                    {item.vehicle}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-[#D1D5DB]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#A1A1AA] block uppercase tracking-wider">Condição Especial</span>
                    <span className="font-['Outfit',sans-serif] text-lg font-extrabold text-[#FACC15]">
                      Até 10x Sem Juros
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de cotar o pneu/serviço: ${item.name} em até 10x sem juros.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] px-4 py-2.5 text-xs font-extrabold text-[#09090B] transition hover:scale-105 active:scale-95"
                  >
                    Cotar
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SIMULADOR DE COTAÇÃO VIA WHATSAPP */}
      <section id="cotacao" className="py-16 md:py-24 bg-[#09090B]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-[#002D72] bg-gradient-to-b from-[#121216] to-[#09090B] p-6 sm:p-10 shadow-2xl shadow-black">
            <div className="text-center max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#002D72]/50 px-3.5 py-1 text-xs font-bold text-[#93C5FD] border border-[#002D72]">
                <Calculator className="h-3.5 w-3.5 text-[#FACC15]" />
                Orçamento Online Imediato
              </span>

              <h2 className="mt-3 font-['Outfit',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Peça Sua Cotação de Pneus
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA]">
                Preencha os dados do seu veículo abaixo para receber valores de pneus e opções de parcelamento no WhatsApp.
              </p>
            </div>

            <form onSubmit={handleQuotationSubmit} className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    Seu Nome:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Eduardo"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-[#181820] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    Modelo e Ano do Veículo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Corolla 2021 ou Onix 2020"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-[#181820] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    Item ou Serviço Desejado:
                  </label>
                  <select
                    value={tireSizeOrService}
                    onChange={(e) => setTireSizeOrService(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-[#181820] px-4 py-3 text-sm text-white outline-none transition focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20"
                  >
                    <option value="Jogo de 4 Pneus Michelin + Alinhamento 3D">Jogo de 4 Pneus Michelin + Alinhamento 3D</option>
                    <option value="Par de Pneus Dianteiros (2 unidades)">Par de Pneus Dianteiros (2 unidades)</option>
                    <option value="Pneu Michelin Aro 14 (175/65 R14)">Pneu Michelin Aro 14 (175/65 R14)</option>
                    <option value="Pneu Michelin Aro 15 (185/65 R15)">Pneu Michelin Aro 15 (185/65 R15)</option>
                    <option value="Pneu Michelin Aro 16 (205/55 R16)">Pneu Michelin Aro 16 (205/55 R16)</option>
                    <option value="Pneu Michelin Aro 17 ou SUV / Pick-up">Pneu Michelin Aro 17 ou SUV / Pick-up</option>
                    <option value="Revisão de Freios e Alinhamento 3D">Revisão de Freios e Alinhamento 3D</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                    Forma de Pagamento Preferida:
                  </label>
                  <select
                    value={paymentPreference}
                    onChange={(e) => setPaymentPreference(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-[#181820] px-4 py-3 text-sm text-white outline-none transition focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20"
                  >
                    <option value="Parcelado em até 10x Sem Juros">Parcelado em até 10x Sem Juros no Cartão</option>
                    <option value="À Vista com Desconto no Pix">À Vista com Desconto no Pix</option>
                    <option value="Cartão de Débito">Cartão de Débito</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-1.5">
                  Medida do pneu ou detalhes adicionais (Opcional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Gostaria de saber o valor para aro 16 instalado com alinhamento e balanceamento..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-[#181820] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FACC15] via-[#FFE000] to-[#EAB308] py-4 text-sm sm:text-base font-extrabold text-[#09090B] shadow-xl shadow-[#FACC15]/20 transition-all hover:scale-[1.01] active:scale-98"
              >
                <MessageCircle className="h-5 w-5 text-[#09090B]" />
                Receber Cotação no WhatsApp da Padok Pneus
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#A1A1AA]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FACC15]" />
                <span>Atendimento rápido e orçamento sem custo</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 8. DEPOIMENTOS REAIS DO GOOGLE MAPS */}
      <section id="depoimentos" className="border-t border-white/10 bg-[#0D0D11] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-[#FACC15] uppercase">
              Prova Social Auditada
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Mais de 230 Avaliações no Google
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
              O reconhecimento de motoristas de Teresópolis e de toda a serra fluminense.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121216] p-7 shadow-lg transition-all hover:border-[#FACC15] hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#FACC15] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>

                  <p className="font-['Outfit',sans-serif] text-base font-bold text-[#FACC15] mb-2">
                    "{test.highlight}"
                  </p>

                  <p className="text-xs sm:text-sm leading-relaxed text-[#D1D5DB] italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-white">{test.name}</span>
                    <span className="block text-[11px] text-[#93C5FD]">{test.role}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#FACC15] bg-[#002D72] px-2 py-0.5 rounded-full border border-[#93C5FD]/30">
                    Google Maps
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCALIZAÇÃO SHOWROOM & MAPA */}
      <section id="localizacao" className="py-16 md:py-24 bg-[#09090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Address Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-extrabold tracking-widest text-[#FACC15] uppercase">
                Onde Estamos
              </span>
              <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Venha nos Visitar na Várzea
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#D1D5DB]">
                A Padok Pneus está sediada na Rua Tenente Luiz Meirelles, nº 439, em ponto nobre e de fácil acesso no polo automotivo da Várzea em Teresópolis - RJ. Oficina ampla com elevadores modernos e sala de espera confortável.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 rounded-2xl bg-[#121216] border border-white/10 p-4">
                  <MapPin className="h-5 w-5 text-[#FACC15] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-white">Endereço Completo:</span>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] mt-0.5">{address}</p>
                    <span className="mt-1 inline-block text-[11px] font-semibold text-[#FACC15]">
                      Polo Automotivo da Várzea
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-[#121216] border border-white/10 p-4">
                  <Clock className="h-5 w-5 text-[#FACC15] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-white">Horário de Funcionamento:</span>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] mt-0.5">{hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-2xl bg-[#121216] border border-white/10 p-4">
                  <Phone className="h-5 w-5 text-[#FACC15] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-white">Telefone & WhatsApp de Vendas:</span>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] mt-0.5">{phoneDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FACC15] hover:underline"
                >
                  Abrir Rota no Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#121216] shadow-2xl">
                <div className="bg-[#002D72] px-6 py-4 text-white flex items-center justify-between border-b border-[#001D4D]">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-[#FACC15]" />
                    <span className="text-xs font-bold">Padok Pneus Michelin</span>
                  </div>
                  <span className="text-[11px] text-[#BFDBFE]">R. Ten. Luiz Meirelles, 439</span>
                </div>
                <div className="h-[340px] w-full bg-[#09090B]">
                  <iframe
                    title="Mapa Padok Pneus"
                    src="https://maps.google.com/maps?q=R.+Ten.+Luiz+Meirelles,+439+-+V%C3%A1rzea,+Teres%C3%B3polis+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SANFONADO */}
      <section id="faq" className="border-t border-white/10 bg-[#0D0D11] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-extrabold tracking-widest text-[#FACC15] uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-sm text-[#A1A1AA]">
              Esclarecimentos sobre garantia Michelin, condições de 10x sem juros e agendamento.
            </p>
          </div>

          <div className="mt-10 space-y-3.5">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#121216] transition-all"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-['Outfit',sans-serif] text-base font-bold text-white hover:text-[#FACC15] transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#FACC15] shrink-0 transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-[#D1D5DB] border-t border-white/5 pt-3 animate-in fade-in-50 duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER - TOTALMENTE LIMPO E SEM ÍCONE NA MARCA */}
      <footer className="border-t border-white/10 bg-[#09090B] text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div>
              <span className="font-['Outfit',sans-serif] text-xl font-extrabold text-white block">
                Padok <span className="text-[#FACC15]">Pneus</span>
              </span>
              <span className="text-xs font-semibold text-[#93C5FD] block mt-0.5 uppercase tracking-wider">
                Revenda Autorizada Michelin & Centro Automotivo
              </span>
              <p className="mt-3 text-xs leading-relaxed text-[#A1A1AA]">
                Pneus Michelin com garantia de fábrica, alinhamento 3D, balanceamento, freios e suspensão com parcelamento em até 10x sem juros na Várzea.
              </p>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#FACC15] uppercase">
                Endereço
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-[#D1D5DB]">
                {address}
              </p>
              <p className="mt-1 text-xs text-[#93C5FD] font-medium">
                Polo Automotivo da Várzea
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#FACC15] uppercase">
                Horários
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-[#D1D5DB]">
                Segunda a Sexta: 08:00 às 18:00
              </p>
              <p className="text-xs text-[#D1D5DB]">
                Sábados: 08:00 às 12:00
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#FACC15] uppercase">
                Atendimento
              </h4>
              <p className="mt-3 text-xs text-[#A1A1AA]">Telefone & WhatsApp:</p>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm font-bold text-[#FACC15] hover:underline"
              >
                {phoneDisplay}
              </a>
              <p className="mt-1 text-[11px] text-emerald-400 font-medium">
                Cotações rápidas no WhatsApp
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-400">
            <span>
              © {new Date().getFullYear()} Padok Pneus — Revenda Autorizada Michelin · Todos os direitos reservados.
            </span>
            <span>
              Desenvolvido com excelência por Cronos Agency
            </span>
          </div>
        </div>
      </footer>

      {/* 12. MOBILE FLOATING ACTION BAR (Fixed bottom bar) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#09090B]/95 backdrop-blur-md px-4 py-3 lg:hidden shadow-2xl">
        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-[#FACC15] bg-[#181820]"
            aria-label="Ligar para Padok Pneus"
          >
            <Phone className="h-5 w-5 text-[#FACC15]" />
          </a>
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent("Olá! Vim pelo site da Padok Pneus e gostaria de cotar pneus Michelin.")}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FACC15] to-[#EAB308] py-3 text-sm font-extrabold text-[#09090B] shadow-lg shadow-[#FACC15]/20 active:scale-98"
          >
            <MessageCircle className="h-4 w-4 text-[#09090B]" />
            Cotar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
