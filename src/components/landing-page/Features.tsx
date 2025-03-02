import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function Features() {
  return (
    <section className="py-20 px-4 bg-accent/5" id="features">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-16">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-secondary/50 backdrop-blur border-primary">
            <CardHeader>
              <CardTitle>Real-time Collaboration</CardTitle>
              <CardDescription className="text-muted-foreground">
                Work together seamlessly with your team in real-time
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-secondary/50 backdrop-blur border-primary">
            <CardHeader>
              <CardTitle>Advanced Drawing Tools</CardTitle>
              <CardDescription className="text-muted-foreground">
                Professional-grade drawing and annotation tools
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-secondary/50 backdrop-blur border-primary">
            <CardHeader>
              <CardTitle>Rich Text Editor</CardTitle>
              <CardDescription className="text-muted-foreground">
                Format and style your text with powerful editing features
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
