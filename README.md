# EEM 431 İleri Mikroişlemciler — Ders Notları

TM4C123GH6PM / EK-TM4C123GXL Tiva C LaunchPad üzerinde çevre birimleri: her konu API'siz (register) ve API'li (TivaWare) örneklerle.

Site: https://burhanbarakli.github.io/eem431-ders-notlari/

| Klasör | İçerik |
|---|---|
| `index.html` | Konu listesi |
| `gpio/` | 1. GPIO ders notu |
| `gpio-kesme/` | 2. GPIO kesmeleri |
| `lcd/` | 3. LCD (HD44780) |
| `timer/` | 6. Zamanlayıcılar (GPTM) ve kesmelere giriş |
| `adc/` | 7. ADC |
| `uart/` | 8. UART ve seri port (PC tarafı C# dahil) |
| `img/` | Şekiller (SVG; sayfaya satır içi gömülür, koyu temaya uyar) |
| `assets/` | Ortak stil ve betik |

Yerelde önizleme (şekiller `fetch` ile yüklendiği için dosyayı doğrudan açmak yerine sunucuyla açın):

```bash
python3 -m http.server 8000
```
