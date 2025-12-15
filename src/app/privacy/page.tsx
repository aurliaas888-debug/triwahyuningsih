'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, Users, Lock } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TW</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                TRI WAHYUNINGSIH
              </h1>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition">
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-lg text-gray-600">
            Kebijakan Privasi <span className="font-bold text-orange-600">TRI WAHYUNINGSIH</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Eye className="w-6 h-6 text-orange-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di <span className="font-bold text-orange-600">TRI WAHYUNINGSIH</span>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan produk makanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Database className="w-6 h-6 text-green-600 mr-3" />
                Pengumpulan Data
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Informasi yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                    <li><strong>Informasi Pesanan:</strong> Detail produk yang dipesan, metode pembayaran, riwayat pembelian</li>
                    <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, informasi perangkat, waktu akses</li>
                    <li><strong>Informasi Lokasi:</strong> Data geolokasi untuk pengiriman dan layanan</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cara Kami Mengumpulkan Data:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Formulir pemesanan online dan offline</li>
                    <li>Komunikasi langsung (telepon, email, WhatsApp)</li>
                    <li>Website dan aplikasi mobile</li>
                    <li>Cookie dan teknologi pelacakan lainnya</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Users className="w-6 h-6 text-orange-600 mr-3" />
                Penggunaan Data
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menggunakan informasi pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Memproses dan mengelola pesanan produk makanan Anda</li>
                <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                <li>Mengirimkan informasi tentang pesanan dan pengiriman</li>
                <li>Memperbaiki kualitas produk dan layanan kami</li>
                <li>Mengirimkan promosi dan penawaran khusus (dengan persetujuan Anda)</li>
                <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Lock className="w-6 h-6 text-green-600 mr-3" />
                Perlindungan Data
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-bold text-orange-600">TRI WAHYUNINGSIH</span> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Enkripsi data sensitif dengan teknologi terkini</li>
                <li>Akses terbatas hanya untuk authorized personnel</li>
                <li>Server yang aman dan terlindungi</li>
                <li>Backup data rutin dan aman</li>
                <li>Audit keamanan berkala</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Hak Anda Sebagai Pengguna</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Mengakses dan melihat data pribadi yang kami simpan</li>
                <li>Memperbarui atau mengoreksi data yang tidak akurat</li>
                <li>Menghapus data pribadi Anda (dengan batasan tertentu)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Mengajukan keluhan tentang penanganan data Anda</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third Party */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Pihak Ketiga</h2>
              <p className="text-gray-700 leading-relaxed">
                Kami mungkin berbagi informasi Anda dengan pihak ketiga terpercaya untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Layanan Pengiriman:</strong> Untuk mengirimkan produk kepada Anda</li>
                <li><strong>Payment Processors:</strong> Untuk memproses pembayaran Anda</li>
                <li><strong>Analytics Providers:</strong> Untuk menganalisis penggunaan website</li>
                <li><strong>Marketing Partners:</strong> Untuk promosi (dengan persetujuan Anda)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Kami memastikan semua pihak ketiga memiliki kebijakan privasi yang sesuai dan melindungi data Anda.
              </p>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Perubahan Kebijakan</h2>
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Pemberitahuan di website kami</li>
                <li>Email kepada pengguna terdaftar</li>
                <li>Pemberitahuan langsung untuk perubahan signifikan</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="p-8 shadow-lg bg-gradient-to-r from-orange-50 to-green-50">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Hubungi Kami</h2>
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan data pribadi Anda, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@triwahyuningsih.com</p>
                <p><strong>Telepon:</strong> 085353876138</p>
                <p><strong>Alamat:</strong> PERUMAHAN WAHANA PONDOK GEDE BLOK S6 NO. 15, Jatisari, Jatiasih, Bekasi, Jawa Barat</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Kebijakan Privasi ini berlaku efektif sejak: 1 Januari 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">TW</span>
            </div>
            <h3 className="text-lg font-bold">TRI WAHYUNINGSIH</h3>
          </div>
          <p className="text-gray-400 mb-4">Produk makanan berkualitas untuk keluarga Indonesia</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-400 transition">Terms & Conditions</Link>
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">&copy; 2024 TRI WAHYUNINGSIH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}