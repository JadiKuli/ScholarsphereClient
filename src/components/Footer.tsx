import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">SMA Harapan Bangsa</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Membangun generasi cerdas dan berkarakter untuk masa depan Indonesia yang lebih baik.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Tentang</a></li>
              <li><a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Program</a></li>
              <li><a href="#facilities" className="text-muted-foreground hover:text-primary transition-colors">Fasilitas</a></li>
              <li><Link to="/registrasi" className="text-muted-foreground hover:text-primary transition-colors">Registrasi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>Jl. Pendidikan No. 123, Jakarta Selatan 12345</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>info@smaharapanbangsa.sch.id</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Jam Operasional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Senin - Jumat: 07:00 - 16:00</li>
              <li>Sabtu: 07:00 - 13:00</li>
              <li>Minggu & Libur: Tutup</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; 2024 SMA Harapan Bangsa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
