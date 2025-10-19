import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Cómo las máquinas de luz eliminan los vellos: láser vs. IPL",
    summary:
      "La física de la fototermólisis selectiva explicada paso a paso, con diferencias prácticas entre equipos láser e IPL y recomendaciones de seguridad.",
    date: "2024-10-19",
    displayDate: "19 de octubre de 2024",
    tag: "Tutorial",
    image: "https://images.unsplash.com/photo-1598300183876-0b93d4fa9b59?q=80&w=1600&auto=format&fit=crop",
    href: "/blog/laser-ipl-fototermolisis",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-white to-secondary-light opacity-70" aria-hidden="true" />
          <div className="relative container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Blog de Innovación y Tecnología</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Historias, tutoriales y guías sobre automatización, biomédica, mecanizado y equipamiento tecnológico.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Publicaciones destacadas</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.href}
                  className="group rounded-2xl bg-white shadow-card overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link to={post.href} className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/3] object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                      <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                        {post.tag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 text-left">
                      <time className="text-sm text-muted-foreground" dateTime={post.date}>
                        {post.displayDate}
                      </time>
                      <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground flex-1">
                        {post.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                        Leer más
                        <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
