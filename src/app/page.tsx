'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Star, ChefHat, Heart, Truck } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TW</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                TRI WAHYUNINGSIH
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => setActiveSection('home')} className="text-gray-700 hover:text-orange-600 transition">Beranda</button>
              <button onClick={() => setActiveSection('about')} className="text-gray-700 hover:text-orange-600 transition">Tentang</button>
              <button onClick={() => setActiveSection('products')} className="text-gray-700 hover:text-orange-600 transition">Produk</button>
              <button onClick={() => setActiveSection('contact')} className="text-gray-700 hover:text-orange-600 transition">Kontak</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-green-400/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-3xl">TW</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              TRI WAHYUNINGSIH
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4">Produk Makanan Berkualitas</p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Menyediakan berbagai produk makanan pilihan dengan kualitas terbaik untuk keluarga Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full">
                Lihat Produk
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Kualitas Terbaik</h3>
                <p className="text-gray-600">Produk makanan dengan bahan pilihan dan standar kualitas tinggi</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dibuat dengan Cinta</h3>
                <p className="text-gray-600">Setiap produk dibuat dengan perhatian khusus dan keahlian</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pengiriman Cepat</h3>
                <p className="text-gray-600">Layanan pengiriman tepat waktu dan aman untuk produk Anda</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full"></div>
          </div>
          <Card className="p-8">
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-2xl text-orange-600">TRI WAHYUNINGSIH</span> adalah usaha yang bergerak di bidang produk makanan lainnya, 
                berkomitmen untuk menyediakan produk makanan berkualitas tinggi untuk memenuhi kebutuhan keluarga Indonesia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan pengalaman dan dedikasi dalam industri makanan, kami selalu mengutamakan kualitas, kebersihan, dan kepuasan pelanggan. 
                Setiap produk yang kami hasilkan melalui proses seleksi ketat untuk memastikan hanya yang terbaik yang sampai ke tangan Anda.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Alamat</p>
                    <p className="text-gray-600 text-sm">
                      PERUMAHAN WAHANA PONDOK GEDE BLOK S6 NO. 15<br/>
                      Desa/Kelurahan Jatisari, Kec. Jatiasih<br/>
                      Kota Bekasi, Provinsi Jawa Barat
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Telepon</p>
                    <p className="text-gray-600">085353876138</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@triwahyuningsih.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Jam Operasional</p>
                    <p className="text-gray-600">Senin - Sabtu: 08:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Kirim Pesan</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Pesan Anda"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TW</span>
                </div>
                <h3 className="text-xl font-bold">TRI WAHYUNINGSIH</h3>
              </div>
              <p className="text-gray-400">Produk makanan berkualitas untuk keluarga Indonesia</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-orange-400 transition">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Bekasi, Jawa Barat</li>
                <li>085353876138</li>
                <li>info@triwahyuningsih.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TRI WAHYUNINGSIH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}