'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, ShoppingCart, User, AlertTriangle, CheckCircle } from 'lucide-react'

export default function TermsAndConditions() {
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
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-lg text-gray-600">
            Syarat dan Ketentuan Layanan <span className="font-bold text-orange-600">TRI WAHYUNINGSIH</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-green-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <FileText className="w-6 h-6 text-orange-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di <span className="font-bold text-orange-600">TRI WAHYUNINGSIH</span>. Syarat dan Ketentuan ini mengatur penggunaan layanan produk makanan yang kami sediakan. 
                Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <ShoppingCart className="w-6 h-6 text-green-600 mr-3" />
                Layanan Kami
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Produk Makanan</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <span className="font-bold text-orange-600">TRI WAHYUNINGSIH</span> menyediakan berbagai produk makanan lainnya dengan kualitas terbaik:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Produk makanan segar dan berkualitas</li>
                    <li>Produk yang diproses dengan standar kebersihan tinggi</li>
                    <li>Berbagai pilihan produk untuk memenuhi kebutuhan keluarga</li>
                    <li>Produk yang tersedia sesuai musim dan ketersediaan</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Layanan Pengiriman</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Pengiriman dalam area Bekasi dan sekitarnya</li>
                    <li>Waktu pengiriman sesuai kesepakatan</li>
                    <li>Packaging yang aman dan higienis</li>
                    <li>Tracking pengiriman untuk pesanan tertentu</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <User className="w-6 h-6 text-orange-600 mr-3" />
                Tanggung Jawab Pengguna
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sebagai pengguna layanan kami, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Memberikan informasi yang akurat dan lengkap saat pemesanan</li>
                <li>Memastikan alamat pengiriman benar dan dapat diakses</li>
                <li>Melakukan pembayaran sesuai dengan harga yang disepakati</li>
                <li>Menerima pesanan pada waktu yang telah ditentukan</li>
                <li>Memeriksa kondisi produk saat diterima</li>
                <li>Melaporkan masalah atau keluhan dalam waktu 24 jam</li>
                <li>Tidak menggunakan layanan untuk tujuan ilegal atau tidak sah</li>
              </ul>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Pemesanan dan Pembayaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Proses Pemesanan</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Pemesanan dapat dilakukan melalui telepon, WhatsApp, atau langsung</li>
                    <li>Konfirmasi pesanan akan dikirimkan melalui WhatsApp atau telepon</li>
                    <li>Minimum order berlaku untuk beberapa produk</li>
                    <li>Pesanan akan diproses setelah konfirmasi pembayaran</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Metode Pembayaran</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Transfer Bank (BCA, Mandiri, BNI, BRI)</li>
                    <li>E-Wallet (GoPay, OVO, Dana)</li>
                    <li>Pembayaran tunai (COD - Cash on Delivery)</li>
                    <li>Pembayaran harus diselesaikan sebelum pengiriman</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation and Refunds */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Pembatalan dan Pengembalian</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Kebijakan Pembatalan</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Pembatalan dapat dilakukan maksimal 2 jam sebelum pengiriman</li>
                    <li>Pembatalan setelah waktu tersebut tidak dapat diproses</li>
                    <li>Biaya pembatalan mungkin berlaku untuk pesanan khusus</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Kebijakan Pengembalian</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Pengembalian diterima jika produk rusak atau tidak sesuai</li>
                    <li>Keluhan harus dilaporkan maksimal 24 jam setelah penerimaan</li>
                    <li>Bukti foto/video diperlukan untuk klaim pengembalian</li>
                    <li>Pengembalian akan diproses dalam 3-5 hari kerja</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Quality */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                Kualitas Produk
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-bold text-orange-600">TRI WAHYUNINGSIH</span> berkomitmen untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Menyediakan produk makanan segar dan berkualitas</li>
                <li>Memastikan produk diproses dengan standar kebersihan tinggi</li>
                <li>Mengikuti regulasi pangan yang berlaku di Indonesia</li>
                <li>Memberikan informasi lengkap tentang produk</li>
                <li>Menjamin keamanan pangan untuk konsumen</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                Keterbatasan Layanan
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Ketersediaan Produk</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ketersediaan produk dapat berubah sewaktu-waktu tergantung pada:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Musim dan kondisi pasar</li>
                    <li>Ketersediaan bahan baku</li>
                    <li>Kapasitas produksi</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Area Layanan</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Layanan pengiriman kami saat ini terbatas pada area:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Kota Bekasi dan sekitarnya</li>
                    <li>Area lain dapat dilayani dengan biaya tambahan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-700 leading-relaxed">
                Semua konten, merek, logo, dan materi milik <span className="font-bold text-orange-600">TRI WAHYUNINGSIH</span> dilindungi oleh hukum hak cipta dan merek dagang. 
                Anda tidak diperbolehkan menggunakan, menyalin, atau mendistribusikan materi kami tanpa izin tertulis.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Hukum yang Berlaku</h2>
              <p className="text-gray-700 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa yang timbul dari atau terkait dengan syarat dan ketentuan ini akan diselesaikan melalui perundingan baik-baik. 
                Jika tidak dapat diselesaikan, sengketa akan diajukan ke pengadilan yang berwenang di Bekasi, Jawa Barat.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="p-8 shadow-lg bg-gradient-to-r from-orange-50 to-green-50">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Hubungi Kami</h2>
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@triwahyuningsih.com</p>
                <p><strong>Telepon:</strong> 085353876138</p>
                <p><strong>Alamat:</strong> PERUMAHAN WAHANA PONDOK GEDE BLOK S6 NO. 15, Jatisari, Jatiasih, Bekasi, Jawa Barat</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Syarat dan Ketentuan ini berlaku efektif sejak: 1 Januari 2024
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Terakhir diperbarui: 1 Januari 2024
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