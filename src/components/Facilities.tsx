import { Microscope, Library, Dumbbell, Wifi } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Microscope,
      title: "Laboratorium Lengkap",
      description: "Lab Fisika, Kimia, Biologi, dan Komputer dengan peralatan modern"
    },
    {
      icon: Library,
      title: "Perpustakaan Digital",
      description: "Koleksi buku lengkap dan akses e-library untuk referensi tak terbatas"
    },
    {
      icon: Dumbbell,
      title: "Fasilitas Olahraga",
      description: "Lapangan basket, voli, futsal, dan ruang fitness"
    },
    {
      icon: Wifi,
      title: "WiFi & Smart Class",
      description: "Internet cepat dan ruang kelas dilengkapi dengan smartboard"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fasilitas Modern
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nikmati pengalaman belajar yang nyaman dengan fasilitas lengkap dan teknologi terkini
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 text-center"
            >
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <facility.icon className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {facility.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Siap Bergabung dengan Kami?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Daftarkan dirimu sekarang dan jadilah bagian dari generasi penerus bangsa yang cemerlang
          </p>
          <a href="/registrasi">
            <button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-bold px-10 py-4 rounded-xl text-lg shadow-medium transition-all hover:scale-105">
              Daftar Sekarang
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
