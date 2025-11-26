import { BookOpen, Globe, Laptop, Music } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Program IPA",
      description: "Fokus pada ilmu pengetahuan alam dengan laboratorium lengkap dan praktikum intensif",
      features: ["Matematika Lanjutan", "Fisika & Kimia", "Biologi", "Persiapan UTBK"]
    },
    {
      icon: Globe,
      title: "Program IPS",
      description: "Mengembangkan pemahaman sosial dan ekonomi dengan metode pembelajaran modern",
      features: ["Ekonomi", "Sosiologi", "Geografi", "Sejarah"]
    },
    {
      icon: Laptop,
      title: "Program Digital",
      description: "Penguasaan teknologi dan keterampilan digital untuk era industri 4.0",
      features: ["Coding & Programming", "Desain Grafis", "Digital Marketing", "Robotika"]
    },
    {
      icon: Music,
      title: "Ekstrakurikuler",
      description: "Berbagai pilihan kegiatan untuk mengembangkan bakat dan minat siswa",
      features: ["Olahraga", "Seni & Musik", "Pramuka", "English Club"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Program Unggulan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pilih program yang sesuai dengan minat dan bakatmu untuk meraih masa depan cemerlang
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <program.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {program.description}
              </p>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
