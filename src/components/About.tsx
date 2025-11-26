import { Award, Users, BookOpen, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "95%", label: "Lulusan Diterima PTN" },
    { icon: Users, value: "50+", label: "Tenaga Pengajar" },
    { icon: BookOpen, value: "30+", label: "Program Unggulan" },
    { icon: Target, value: "25 Tahun", label: "Pengalaman" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tentang Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SMA Harapan Bangsa telah menjadi pilihan utama pendidikan berkualitas selama lebih dari dua dekade
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-shadow"
            >
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Visi & Misi
              </h3>
              <p className="text-muted-foreground mb-6">
                Menjadi lembaga pendidikan terdepan yang menghasilkan generasi cerdas, berkarakter, dan siap bersaing di tingkat global.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Mengembangkan potensi akademik dan non-akademik siswa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Membentuk karakter yang berintegritas dan bertanggung jawab</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-foreground">Menyediakan lingkungan belajar yang inovatif dan teknologi terkini</span>
                </li>
              </ul>
            </div>
            <div className="bg-accent/50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-foreground mb-4">Keunggulan Kami</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold text-foreground">Kurikulum Terpadu</h5>
                    <p className="text-sm text-muted-foreground">Kombinasi kurikulum nasional dan internasional</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold text-foreground">Fasilitas Modern</h5>
                    <p className="text-sm text-muted-foreground">Laboratorium lengkap dan ruang kelas ber-AC</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold text-foreground">Guru Berpengalaman</h5>
                    <p className="text-sm text-muted-foreground">Tim pengajar tersertifikasi dan berdedikasi tinggi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
