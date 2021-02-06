let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Xl Axiata [081803522862]
│ • DANA [081803522862]
│ • OVO [081803522862]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281803522862
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli pulsa/Dana/OVO/ konter/Alfamart terdekat
2.) Bilang ke konter/Alfamart terdekat..
"Beli pulsa XL Axiata/Ingin Topup Saldo Dana"
3.)Dan terus masukkan nomor kami 081803522862
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
