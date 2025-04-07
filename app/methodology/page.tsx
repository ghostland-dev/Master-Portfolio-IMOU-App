import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icon } from "@/components/ui/icon"
import Link from "next/link"
import Image from "next/image"

export default function MethodologyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <Badge className="px-3 py-1.5 text-sm badge-gradient">Méthodologie</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Approche méthodologique</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez les méthodologies que j'utilise pour garantir le succès de vos projets
          </p>
        </div>

        <Tabs defaultValue="agile" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="agile">Agile</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="design">Design Thinking</TabsTrigger>
          </TabsList>
          <TabsContent value="agile" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Méthodologie Agile</h2>
                <p className="text-muted-foreground mb-4">
                  J'adopte une approche Agile pour tous mes projets, ce qui permet une grande flexibilité, une livraison
                  continue de valeur et une adaptation rapide aux changements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Sprints de 1 à 2 semaines pour des livraisons régulières</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Réunions quotidiennes pour suivre l'avancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Revues de sprint et rétrospectives pour l'amélioration continue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Implication continue du client pour des feedbacks réguliers</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">
                    Discuter de votre projet <Icon name="ArrowRight" className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Méthodologie Agile"
                  fill
                  className="object-cover image-filter"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="devops" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Approche DevOps</h2>
                <p className="text-muted-foreground mb-4">
                  J'applique les principes DevOps pour automatiser et optimiser le cycle de développement, garantissant
                  des déploiements rapides et fiables.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Intégration et déploiement continus (CI/CD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Infrastructure as Code pour des environnements reproductibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Monitoring et observabilité pour une détection rapide des problèmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Automatisation des tests pour garantir la qualité</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/services">
                    Découvrir mes services DevOps <Icon name="ArrowRight" className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Approche DevOps"
                  fill
                  className="object-cover image-filter"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="design" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Design Thinking</h2>
                <p className="text-muted-foreground mb-4">
                  J'utilise le Design Thinking pour comprendre les besoins des utilisateurs et concevoir des solutions
                  centrées sur l'humain.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Empathie avec les utilisateurs finaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Définition précise des problèmes à résoudre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Idéation collaborative pour des solutions innovantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                    <span>Prototypage rapide et tests utilisateurs itératifs</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/portfolio">
                    Voir mes projets <Icon name="ArrowRight" className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Design Thinking"
                  fill
                  className="object-cover image-filter"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

