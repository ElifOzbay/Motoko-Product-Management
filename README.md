# Motoko Ürün Yönetimi Projesi

Motoko ve Internet Computer (IC) kullanarak geliştirilmiş basit bir ürün yönetim uygulamasına hoş geldiniz. Bu proje, ürünlerinizi kaydedip yönetmenize olanak sağlar ve aynı zamanda arayüz üzerinden ürünleri güncelleme, silme ve stok durumunu değiştirme işlemlerini gerçekleştirir.

![image](https://github.com/user-attachments/assets/21c85d79-c6d7-4dea-be0e-c4225c398e86)

## Proje Özeti

Bu proje, Motoko dilini kullanarak geliştirilmiş bir backend ve React ile oluşturulmuş bir frontend içerir. Ürün ekleme, listeleme, güncelleme ve silme işlevlerine sahip olan bu uygulama, basit bir envanter yönetim sistemi olarak çalışır.

### Proje Yapısı

- **Backend (Motoko)**: Ürün verilerini yönetmek için IC üzerinde çalışan canister’lar kullanır.
- **Frontend (React)**: Kullanıcı dostu bir arayüz sağlar ve IC ile etkileşime geçer.

## Kurulum ve Çalıştırma

### Gereksinimler

- [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install) (Internet Computer geliştirici araçları)
- [Node.js](https://nodejs.org/) ve [npm](https://www.npmjs.com/) (Frontend için)

### Proje Özellikleri

- Ürün Ekleme: Ürün adını, fiyatını ve açıklamasını girerek yeni bir ürün ekleyebilirsiniz.
- Ürün Listeleme: Tüm mevcut ürünleri görüntüleyebilir ve her ürün için stok durumu, açıklama ve fiyat gibi bilgileri görebilirsiniz.
- Stok Güncelleme: Ürünü stoğa ekleyebilir veya stoktan çıkarabilirsiniz.
- Ürün Güncelleme: Mevcut ürünleri düzenleyebilir, fiyat ve açıklama gibi bilgilerini güncelleyebilirsiniz.
- Ürün Silme: Ürünleri listeden kaldırabilirsiniz.


## Projeyi Yerel Olarak Çalıştırma
Projeyi yerel olarak test etmek istiyorsanız, aşağıdaki komutları kullanabilirsiniz:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy

# Starts the replica, running in the frontend
npm start
```

