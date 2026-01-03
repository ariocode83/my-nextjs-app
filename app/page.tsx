"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Phone, Shield, Zap, Home, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-gold/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-[#d4af37]" />
              <span className="text-2xl font-bold text-[#d4af37]">noisegard</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                Fitur
              </a>
              <a href="#products" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                Produk
              </a>
              <a href="#about" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                Tentang
              </a>
            </div>

            {/* CTA Button */}
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941e] text-black font-semibold rounded-lg hover:from-[#f4d03f] hover:to-[#d4af37] transition-all duration-300 shadow-lg shadow-[#d4af37]/20">
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gold/20 px-4 py-6 space-y-4"
          >
            <a href="#features" className="block text-gray-300 hover:text-[#d4af37] transition-colors">
              Fitur
            </a>
            <a href="#products" className="block text-gray-300 hover:text-[#d4af37] transition-colors">
              Produk
            </a>
            <a href="#about" className="block text-gray-300 hover:text-[#d4af37] transition-colors">
              Tentang
            </a>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941e] text-black font-semibold rounded-lg hover:from-[#f4d03f] hover:to-[#d4af37] transition-all duration-300">
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-[#d4af37] to-white bg-clip-text text-transparent">
                Heningkan Dunia di Luar, Ciptakan Damai di Dalam
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                UPVC Windows & Doors premium dengan teknologi canggih untuk hunian yang tenang, nyaman, dan hemat energi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8941e] text-black font-semibold rounded-lg hover:from-[#f4d03f] hover:to-[#d4af37] transition-all duration-300 shadow-lg shadow-[#d4af37]/20 transform hover:scale-105">
                  Lihat Katalog
                </button>
                <button className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Modern UPVC Windows"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mengapa Pilih <span className="text-[#d4af37]">noisegard</span>?
            </h2>
            <p className="text-gray-400 text-lg">Teknologi terdepan untuk kenyamanan maksimal</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-[#d4af37]/10 rounded-xl">
                  <Shield className="w-8 h-8 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Perlindungan Suara Premium</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Teknologi UPVC dengan insulasi akustik canggih mengurangi kebisingan hingga 45dB. 
                    Ciptakan lingkungan yang benar-benar tenang untuk istirahat dan produktivitas maksimal.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="p-4 bg-[#d4af37]/10 rounded-xl w-fit mb-4">
                  <Zap className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Hemat Energi</h3>
                <p className="text-gray-400 leading-relaxed">
                  Sistem insulasi termal yang unggul mengurangi penggunaan AC hingga 40%, 
                  menghemat biaya listrik bulanan Anda.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-3 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                    alt="Durable UPVC Material"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="p-4 bg-[#d4af37]/10 rounded-xl w-fit mb-4">
                    <Shield className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Tahan Lama & Ramah Lingkungan</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Material UPVC berkualitas tinggi dengan garansi 20 tahun. Tahan cuaca ekstrem, 
                    tidak berkarat, tidak perlu dicat, dan 100% dapat didaur ulang.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#d4af37]">20+</div>
                      <div className="text-sm text-gray-400">Tahun Garansi</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#d4af37]">100%</div>
                      <div className="text-sm text-gray-400">Recyclable</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Produk <span className="text-[#d4af37]">Signature</span>
            </h2>
            <p className="text-gray-400 text-lg">Pilihan terbaik untuk hunian Anda</p>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
            {/* Product 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 w-[350px] bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300 snap-start"
            >
              <div className="relative h-[250px]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80"
                  alt="Noisegard Classic"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#d4af37] text-black text-sm font-semibold rounded-full">
                  Bestseller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Noisegard Classic</h3>
                <p className="text-gray-400 mb-4">Jendela UPVC dengan desain klasik elegan, cocok untuk hunian modern dan tradisional.</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#d4af37]">Rp 2.500.000</span>
                  <button className="px-6 py-2 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#f4d03f] transition-colors">
                    Detail
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-shrink-0 w-[350px] bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300 snap-start"
            >
              <div className="relative h-[250px]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
                  alt="Noisegard Premium"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#d4af37] text-black text-sm font-semibold rounded-full">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Noisegard Premium</h3>
                <p className="text-gray-400 mb-4">Sistem jendela sliding dengan frame tipis dan isolasi suara maksimal untuk apartemen.</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#d4af37]">Rp 3.800.000</span>
                  <button className="px-6 py-2 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#f4d03f] transition-colors">
                    Detail
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0 w-[350px] bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300 snap-start"
            >
              <div className="relative h-[250px]">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"
                  alt="Noisegard Deluxe"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#d4af37] text-black text-sm font-semibold rounded-full">
                  New
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Noisegard Deluxe</h3>
                <p className="text-gray-400 mb-4">Pintu utama dengan sistem keamanan ganda dan desain mewah untuk rumah impian Anda.</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#d4af37]">Rp 5.200.000</span>
                  <button className="px-6 py-2 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#f4d03f] transition-colors">
                    Detail
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Home className="w-8 h-8 text-[#d4af37]" />
                <span className="text-2xl font-bold text-[#d4af37]">noisegard</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Solusi premium untuk hunian yang tenang, nyaman, dan hemat energi. 
                Transformasi hunian Anda dengan teknologi UPVC terdepan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-lg hover:bg-[#d4af37] hover:text-black transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-lg hover:bg-[#d4af37] hover:text-black transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-lg hover:bg-[#d4af37] hover:text-black transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] rounded-lg hover:bg-[#d4af37] hover:text-black transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Jendela UPVC</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Pintu UPVC</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Sliding Doors</a></li>
                <li><a href="#" className="hover:text-[#d4af37] transition-colors">Katalog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+62 812-3456-7890</span>
                </li>
                <li className="hover:text-[#d4af37] transition-colors cursor-pointer">
                  <a href="mailto:info@noisegard.com">info@noisegard.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#d4af37]/20 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 noisegard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
