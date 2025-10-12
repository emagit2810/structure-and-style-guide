import sharp from 'sharp';

const images = [
  {
    basePath: 'public/assets/agronica/drone-field',
    palette: ['#064e3b', '#0f766e', '#22c55e'],
  },
  {
    basePath: 'public/assets/agronica/smart-irrigation',
    palette: ['#1e3a8a', '#2563eb', '#38bdf8'],
  },
  {
    basePath: 'public/assets/agronica/greenhouse-monitoring',
    palette: ['#0f172a', '#1f2937', '#22d3ee'],
  },
  {
    basePath: 'public/assets/automatica/robotic-arm',
    palette: ['#111827', '#1f2937', '#f97316'],
  },
  {
    basePath: 'public/assets/automatica/control-room',
    palette: ['#0f172a', '#1e293b', '#60a5fa'],
  },
  {
    basePath: 'public/assets/automatica/plc-panel',
    palette: ['#020617', '#0f172a', '#22d3ee'],
  },
  {
    basePath: 'public/assets/biomedica/mri-suite',
    palette: ['#0b1120', '#1d4ed8', '#93c5fd'],
  },
  {
    basePath: 'public/assets/biomedica/biolab-team',
    palette: ['#0f172a', '#64748b', '#cbd5f5'],
  },
  {
    basePath: 'public/assets/biomedica/surgery-monitor',
    palette: ['#111827', '#1e40af', '#38bdf8'],
  },
  {
    basePath: 'public/assets/equipos/estacion-laser-oftalmica',
    palette: ['#082f49', '#0ea5e9', '#38bdf8'],
  },
  {
    basePath: 'public/assets/equipos/camilla-motorizada',
    palette: ['#1f2937', '#4b5563', '#a855f7'],
  },
  {
    basePath: 'public/assets/equipos/estacion-calibracion',
    palette: ['#111827', '#374151', '#facc15'],
  },
  {
    basePath: 'public/assets/equipos/torre-endoscopia',
    palette: ['#172554', '#1d4ed8', '#22d3ee'],
  },
  {
    basePath: 'public/assets/equipos/panel-diagnostico',
    palette: ['#0f172a', '#1e293b', '#6ee7b7'],
  },
  {
    basePath: 'public/assets/equipos/sistema-anestesia',
    palette: ['#0b1120', '#312e81', '#a855f7'],
  },
];

async function createLayer(width, height, color) {
  return sharp({
    create: {
      width,
      height,
      channels: 4,
      background: color,
    },
  })
    .png()
    .toBuffer();
}

async function generateImage(basePath, palette, width, height) {
  const [primary, secondary, accent] = palette;
  const diagonal = await createLayer(width, height, accent + 'cc');
  const topLayer = await createLayer(width, Math.floor(height * 0.55), secondary + 'dd');

  return sharp({
    create: {
      width,
      height,
      channels: 4,
      background: primary,
    },
  })
    .composite([
      {
        input: topLayer,
        top: 0,
        left: 0,
      },
      {
        input: diagonal,
        top: 0,
        left: 0,
        blend: 'screen',
      },
    ])
    .webp({ quality: 82 })
    .toFile(`${basePath}-${width}.webp`);
}

async function run() {
  await Promise.all(
    images.flatMap(({ basePath, palette }) => [
      generateImage(basePath, palette, 1280, 800),
      generateImage(basePath, palette, 640, 400),
    ])
  );
  console.log('Placeholder images generated.');
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
