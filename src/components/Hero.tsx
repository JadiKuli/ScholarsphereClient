import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-school.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Wujudkan Masa Depan Cemerlang
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
          Bergabunglah dengan SMA Harapan Bangsa dan raih prestasi terbaikmu dengan fasilitas modern dan tenaga pengajar berkualitas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Link to="/registrasi">
            <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold px-8 py-6 text-lg shadow-medium">
              Daftar Siswa Baru
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg"
            asChild
          >
            <a href="#about">Pelajari Lebih Lanjut</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
