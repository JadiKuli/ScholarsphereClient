import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const registrationSchema = z.object({
  // Data Siswa
  fullName: z.string().min(3, "Nama lengkap minimal 3 karakter").max(100),
  nickname: z.string().min(2, "Nama panggilan minimal 2 karakter").max(50),
  birthPlace: z.string().min(2, "Tempat lahir minimal 2 karakter").max(50),
  birthDate: z.string().min(1, "Tanggal lahir wajib diisi"),
  gender: z.string().min(1, "Jenis kelamin wajib dipilih"),
  religion: z.string().min(1, "Agama wajib dipilih"),
  address: z.string().min(10, "Alamat minimal 10 karakter").max(200),
  phone: z.string().min(10, "Nomor telepon minimal 10 digit").max(15),
  email: z.string().email("Email tidak valid").max(100),
  
  // Data Sekolah Asal
  previousSchool: z.string().min(3, "Nama sekolah minimal 3 karakter").max(100),
  nisn: z.string().min(10, "NISN harus 10 digit").max(10),
  
  // Data Orang Tua/Wali
  fatherName: z.string().min(3, "Nama ayah minimal 3 karakter").max(100),
  fatherJob: z.string().min(2, "Pekerjaan ayah minimal 2 karakter").max(50),
  motherName: z.string().min(3, "Nama ibu minimal 3 karakter").max(100),
  motherJob: z.string().min(2, "Pekerjaan ibu minimal 2 karakter").max(50),
  parentPhone: z.string().min(10, "Nomor telepon minimal 10 digit").max(15),
  parentEmail: z.string().email("Email tidak valid").max(100),
  
  // Program Pilihan
  program: z.string().min(1, "Program pilihan wajib dipilih"),
  reason: z.string().min(20, "Alasan minimal 20 karakter").max(500),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const Registration = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationForm) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Pendaftaran Berhasil!",
      description: "Data Anda telah kami terima. Tim kami akan menghubungi Anda segera.",
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-card rounded-3xl shadow-medium p-12 text-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-12 w-12 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Pendaftaran Berhasil!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Terima kasih telah mendaftar di SMA Harapan Bangsa. Tim kami akan menghubungi Anda melalui email atau telepon dalam 2x24 jam untuk informasi lebih lanjut.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Beranda
        </Link>

        <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Formulir Pendaftaran Siswa Baru
            </h1>
            <p className="text-muted-foreground">
              Tahun Ajaran 2024/2025
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                1
              </div>
              <div className={`w-20 h-1 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                2
              </div>
              <div className={`w-20 h-1 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                3
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Data Siswa */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">Data Siswa</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nama Lengkap *</Label>
                    <Input id="fullName" {...register("fullName")} placeholder="Nama lengkap sesuai akta kelahiran" />
                    {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nickname">Nama Panggilan *</Label>
                    <Input id="nickname" {...register("nickname")} placeholder="Nama panggilan sehari-hari" />
                    {errors.nickname && <p className="text-sm text-destructive">{errors.nickname.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthPlace">Tempat Lahir *</Label>
                    <Input id="birthPlace" {...register("birthPlace")} placeholder="Kota tempat lahir" />
                    {errors.birthPlace && <p className="text-sm text-destructive">{errors.birthPlace.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Tanggal Lahir *</Label>
                    <Input id="birthDate" type="date" {...register("birthDate")} />
                    {errors.birthDate && <p className="text-sm text-destructive">{errors.birthDate.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Jenis Kelamin *</Label>
                    <Select onValueChange={(value) => setValue("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis kelamin" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="male">Laki-laki</SelectItem>
                        <SelectItem value="female">Perempuan</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gender && <p className="text-sm text-destructive">{errors.gender.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="religion">Agama *</Label>
                    <Select onValueChange={(value) => setValue("religion", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih agama" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="islam">Islam</SelectItem>
                        <SelectItem value="kristen">Kristen</SelectItem>
                        <SelectItem value="katolik">Katolik</SelectItem>
                        <SelectItem value="hindu">Hindu</SelectItem>
                        <SelectItem value="buddha">Buddha</SelectItem>
                        <SelectItem value="konghucu">Konghucu</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.religion && <p className="text-sm text-destructive">{errors.religion.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon Siswa *</Label>
                    <Input id="phone" {...register("phone")} placeholder="08xxxxxxxxxx" />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Siswa *</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="email@example.com" />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Alamat Lengkap *</Label>
                  <Textarea 
                    id="address" 
                    {...register("address")} 
                    placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten"
                    rows={3}
                  />
                  {errors.address && <p className="text-sm text-destructive">{errors.address.message}</p>}
                </div>

                <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Data Sekolah Asal</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="previousSchool">Nama Sekolah Asal *</Label>
                    <Input id="previousSchool" {...register("previousSchool")} placeholder="SMP/MTs asal" />
                    {errors.previousSchool && <p className="text-sm text-destructive">{errors.previousSchool.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nisn">NISN *</Label>
                    <Input id="nisn" {...register("nisn")} placeholder="10 digit NISN" maxLength={10} />
                    {errors.nisn && <p className="text-sm text-destructive">{errors.nisn.message}</p>}
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <Button type="button" onClick={nextStep} className="bg-gradient-primary hover:opacity-90">
                    Lanjut ke Data Orang Tua
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Data Orang Tua */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">Data Orang Tua/Wali</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Nama Ayah *</Label>
                    <Input id="fatherName" {...register("fatherName")} placeholder="Nama lengkap ayah" />
                    {errors.fatherName && <p className="text-sm text-destructive">{errors.fatherName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fatherJob">Pekerjaan Ayah *</Label>
                    <Input id="fatherJob" {...register("fatherJob")} placeholder="Pekerjaan ayah" />
                    {errors.fatherJob && <p className="text-sm text-destructive">{errors.fatherJob.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motherName">Nama Ibu *</Label>
                    <Input id="motherName" {...register("motherName")} placeholder="Nama lengkap ibu" />
                    {errors.motherName && <p className="text-sm text-destructive">{errors.motherName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motherJob">Pekerjaan Ibu *</Label>
                    <Input id="motherJob" {...register("motherJob")} placeholder="Pekerjaan ibu" />
                    {errors.motherJob && <p className="text-sm text-destructive">{errors.motherJob.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentPhone">Nomor Telepon Orang Tua *</Label>
                    <Input id="parentPhone" {...register("parentPhone")} placeholder="08xxxxxxxxxx" />
                    {errors.parentPhone && <p className="text-sm text-destructive">{errors.parentPhone.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentEmail">Email Orang Tua *</Label>
                    <Input id="parentEmail" type="email" {...register("parentEmail")} placeholder="email@example.com" />
                    {errors.parentEmail && <p className="text-sm text-destructive">{errors.parentEmail.message}</p>}
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button type="button" onClick={prevStep} variant="outline">
                    Kembali
                  </Button>
                  <Button type="button" onClick={nextStep} className="bg-gradient-primary hover:opacity-90">
                    Lanjut ke Program Pilihan
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Program Pilihan */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">Program Pilihan</h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="program">Pilih Program *</Label>
                    <Select onValueChange={(value) => setValue("program", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih program yang diminati" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover">
                        <SelectItem value="ipa">Program IPA (Ilmu Pengetahuan Alam)</SelectItem>
                        <SelectItem value="ips">Program IPS (Ilmu Pengetahuan Sosial)</SelectItem>
                        <SelectItem value="digital">Program Digital & Teknologi</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.program && <p className="text-sm text-destructive">{errors.program.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Alasan Memilih SMA Harapan Bangsa *</Label>
                    <Textarea 
                      id="reason" 
                      {...register("reason")} 
                      placeholder="Ceritakan mengapa kamu ingin bergabung dengan SMA Harapan Bangsa (minimal 20 karakter)"
                      rows={5}
                    />
                    {errors.reason && <p className="text-sm text-destructive">{errors.reason.message}</p>}
                  </div>

                  <div className="bg-accent/50 rounded-xl p-6">
                    <h3 className="font-bold text-foreground mb-3">Catatan Penting:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span>Pastikan semua data yang Anda isi adalah benar dan sesuai</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span>Tim kami akan menghubungi Anda dalam 2x24 jam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span>Siapkan dokumen pendukung seperti ijazah, rapor, dan foto</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button type="button" onClick={prevStep} variant="outline">
                    Kembali
                  </Button>
                  <Button type="submit" className="bg-gradient-secondary hover:opacity-90">
                    Kirim Pendaftaran
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
