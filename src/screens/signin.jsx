import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "../components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

// Imagens
import plantsImg from "../assets/plants.svg";
import cactusImg from "../assets/cactus.svg";

// Importação do Carrossel
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function SignIn() {
  return (
    <main className="h-screen flex flex-col lg:flex-row w-full">
      <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-4 lg:p-16">
        {/* Carrossel com imagens */}
        <Carousel className="w-full max-w-xl">
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square rounded p-4 lg:p-8">
                <img
                  src={plantsImg}
                  alt="Imagem de Plantas"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square rounded p-4 lg:p-8">
                <img
                  src={cactusImg}
                  alt="Imagem de Cactos"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>

      <section className="flex items-center justify-center bg-background h-full w-full p-4 lg:p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Entre com sua conta
            </CardTitle>
            <CardDescription>
              Utilize seu e-mail e senha ou o GitHub para entrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="exemplo@email.com" type="email" />
            </div>

            <div className="mt-4">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                placeholder="Digite sua senha"
                type="password"
              />
            </div>
            <Button className="mt-6 w-full">Entrar</Button>
            <div className="flex items-center mt-4">
              <Separator />
              <span className="text-xs text-muted-foreground gap-6">OU</span>
              <Separator />
            </div>
            <Button variant="outline" className="mt-4 w-full">
              <GitHubLogoIcon /> Entrar com o GitHub
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-center text-sm">
              Ao entrar em nossa plataforma, você concorda com nossos Termos de
              Uso e Política de Privacidade.
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
