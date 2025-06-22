# NestJS User Management API

Bu proje, NestJS kullanarak PostgreSQL ile entegre bir kullanıcı yönetim API'sidir.  
Proje, temiz branch yapısı, anlamlı commitler ve .env kullanımıyla geliştirilmiştir.

---

PROJEYİ ÇALIŞTIRMA

1. Gereksinimler

- Node.js (v16+)
- PostgreSQL veritabanı
- pgAdmin (opsiyonel, veritabanı yönetimi için)

2. Kurulum

git clone https://github.com/kullanici/proje-adi.git
cd proje-adi
npm install

3. Ortam Değişkenleri

Proje kökünde .env dosyası oluşturun:

DB_HOST=host
DB_PORT=5432
DB_USERNAME=username
DB_PASSWORD=pass
DB_NAME=dbname

.env dosyası .gitignore içinde yer alır, bu nedenle hassas bilgiler GitHub'a gönderilmez.

4. Uygulamayı Başlatma

npm run start:dev

Uygulama http://localhost:3000 adresinde çalışır.

---

PROJE YAPISI VE TEKNOLOJİLER

- NestJS: Node.js için progressive framework
- TypeORM: NestJS ile PostgreSQL veritabanı entegrasyonu
- class-validator: DTO’larda veri doğrulama
- ConfigModule: .env dosyasından yapılandırma yönetimi
- Branch Yapısı:
  - dev: Geliştirme branch’i
  - feature/\*: Özellik branch’leri (örn: feature/user)

---

ÖZELLİKLER

- PostgreSQL’e bağlanma ve TypeORM kullanarak CRUD işlemleri
- User entity ile kullanıcıların oluşturulması, listelenmesi, silinmesi
- DTO (Data Transfer Object) ile isteklerin doğrulanması
- Anlamlı commit mesajları ve branch kullanımı
- Loglama ile SQL sorgularının takip edilmesi

---
