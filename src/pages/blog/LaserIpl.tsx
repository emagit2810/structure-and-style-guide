import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const LaserIplPost = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <article className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-8 text-sm text-muted-foreground">
              <Link to="/blog" className="hover:text-primary font-semibold transition-colors">← Volver al blog</Link>
            </nav>
            <header className="mb-10">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">Tutorial</p>
              <h1 className="mt-3 text-4xl font-bold text-foreground leading-tight">
                Cómo las máquinas de luz (láser/IPL) eliminan los vellos capilares y por qué no se regeneran
              </h1>
              <p className="mt-4 text-muted-foreground">
                Publicado el <time dateTime="2024-10-19">19 de octubre de 2024</time> • Lectura de 8 minutos
              </p>
            </header>
            <figure className="mb-10 overflow-hidden rounded-3xl shadow-card">
              <img
                src="https://images.unsplash.com/photo-1556228578-0d85b1c772e0?q=80&w=1600&auto=format&fit=crop"
                alt="Profesional utilizando un equipo de luz pulsada intensa en una clínica"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[16/9] object-cover"
              />
            </figure>
            <p className="mb-8 text-sm text-muted-foreground italic">
              Contenido educativo para profesionales y usuarios informados. No reemplaza una valoración médica individual.
            </p>

            <section className="prose prose-slate max-w-none">
              <h2>1. Qué es la fototermólisis selectiva</h2>
              <p>
                La fototermólisis selectiva describe la capacidad de dirigir energía lumínica a cromóforos específicos —en este caso la
                melanina del tallo y la matriz del folículo— sin dañar en exceso los tejidos circundantes. Cuando el haz tiene la longitud de onda,
                duración del pulso y fluencia correctas, la melanina absorbe la luz, la convierte en calor y alcanza temperaturas suficientes para coagular
                las células germinativas responsables de producir un nuevo vello.
              </p>

              <h2>2. Láser vs. IPL: diferencias prácticas</h2>
              <ul>
                <li>
                  <strong>Láser:</strong> emplea una longitud de onda única, altamente coherente. Permite mayor selectividad en folículos pigmentados
                  y un perfil de penetración conocido, ideal para zonas con alto contraste entre piel y vello.
                </li>
                <li>
                  <strong>IPL (Luz Pulsada Intensa):</strong> emite un espectro amplio filtrado. Es versátil para distintos fototipos, pero requiere filtros y
                  ajustes para concentrar la energía en el rango más efectivo y minimizar calor en estructuras vecinas.
                </li>
              </ul>

              <h2>3. Ciclo del folículo piloso y sesiones requeridas</h2>
              <p>
                Los folículos no están sincronizados: algunos se encuentran en fase anágena (crecimiento activo), otros en catágena o telógena. Solo el
                folículo en fase anágena posee suficiente melanina y conexión con la papila dérmica para que la energía lumínica destruya la matriz.
                Por eso se programan varias sesiones —habitualmente entre 6 y 10— espaciadas de 4 a 8 semanas, permitiendo tratar nuevos folículos activos
                en cada cita.
              </p>

              <h2>4. Parámetros típicos y seguridad (visión educativa)</h2>
              <p>
                Profesionales certificados ajustan la fluencia (J/cm²), la duración del pulso y el tamaño del spot considerando fototipo, densidad de vello,
                grosor y zona anatómica. Se utilizan sistemas de enfriamiento por contacto, aire frío o criógeno para proteger la epidermis y mantener el
                confort. Es indispensable el uso de gafas de protección homologadas para operador y paciente, y la verificación previa de contraindicaciones
                como fotosensibilidad, uso de fármacos específicos o presencia de tatuajes en el área.
              </p>

              <h2>5. Contraindicaciones generales y cuidados posteriores</h2>
              <ul>
                <li>Evitar la exposición solar y cabinas de bronceo al menos 2 semanas antes y después de la sesión.</li>
                <li>Suspender productos fotosensibilizantes (retinoides, ciertos antibióticos) según la indicación médica.</li>
                <li>No tratar zonas con infecciones cutáneas activas, heridas abiertas, tatuajes o lesiones sospechosas.</li>
                <li>Hidratar y calmar la piel con geles reparadores, evitando exfoliaciones y calor intenso (saunas, duchas muy calientes) durante 48 horas.</li>
              </ul>

              <h2>6. Conclusiones y recursos</h2>
              <p>
                La reducción prolongada del vello capilar se logra cuando el calor generado por la luz alcanza la matriz del folículo y la coagula de manera
                selectiva. Comprender el ciclo piloso, seleccionar adecuadamente entre láser o IPL y respetar los parámetros de seguridad es clave para
                obtener resultados consistentes y minimizar efectos adversos. Consulta fuentes académicas, guías clínicas y entes regulatorios para profundizar
                en protocolos actualizados.
              </p>

              <p className="mt-8 text-sm text-muted-foreground">
                <em>Este artículo tiene fines informativos y formativos. No constituye consejo médico ni reemplaza la valoración de un profesional de salud.
                Ante dudas o condiciones particulares, acude a un especialista certificado.</em>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LaserIplPost;
