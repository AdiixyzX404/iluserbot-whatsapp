const fs = require('fs-extra')
//const { prefix } = require('./lib/database/setting.json')
const { prefix } = require('../lib/database/setting.json')

function help( pushname ) {
    return `
*Yo ${pushname}*

- Prefix : ${prefix}

*Group Menu*
\t[ *${prefix}menuadmin* ]

*EDUCATION MENU*
› ${prefix}brainly *tugasmu*
› ${prefix}nulis *kalimatmu*
› ${prefix}nulis2 *kalimatmu*
› ${prefix}nulis3 *kalimatmu*
› ${prefix}wiki *kata kunci*
› ${prefix}kbbi *kata kunci*
› ${prefix}translate *_code_ kalimatmu*
› ${prefix}tr *code* [ reply message ]
› ${prefix}google *kata kunci*
› ${prefix}totext *reply with image*
› ${prefix}hitung *angkanya* ( + / * - )

*SEARCH MENU*
› ${prefix}playstore *name application*
› ${prefix}apkpure *name application*
› ${prefix}shopee *nama barang*
› ${prefix}newlinesticker
› ${prefix}ytsearch *kata-kunci*
› ${prefix}spek *nama HP*
› ${prefix}motor *nama motor*
› ${prefix}mobil *nama mobil*
› ${prefix}github *user or repo*
› ${prefix}resep *nama masakan*
› ${prefix}bioskop *kota*

*INFORMATION MENU*
› ${prefix}heroml *nama hero*
› ${prefix}jadwalbola 
› ${prefix}waktu
› ${prefix}news
› ${prefix}covidindo
› ${prefix}covid *country*
› ${prefix}infonomor *phone number*
› ${prefix}kurs *mata uang | jumlah*


*TRACKING MENU*
› ${prefix}resi jne *no resi*
› ${prefix}resi pos *no resi*
› ${prefix}resi tiki *no resi*
› ${prefix}resi wahana *no resi*
› ${prefix}resi jnt *no resi*
› ${prefix}resi sicepat *no resi*
› ${prefix}resi pcp *no resi*
› ${prefix}resi jet *no resi*
› ${prefix}resi dse *no resi*
› ${prefix}resi rpx *no resi*
› ${prefix}resi sap *no resi*
› ${prefix}resi first *no resi*
› ${prefix}resi ninja *no resi*
› ${prefix}resi lion *no resi*
› ${prefix}resi rex *no resi*
› ${prefix}resi idl *no resi*
› ${prefix}checkip *ip target*
› ${prefix}checkip2 *ip target*
› ${prefix}alamat *alamatmu*
› ${prefix}jarak kotamu|kota doimu:v
› ${prefix}ceklokasi *reply with your location*
    
*RELIGI MENU*
› ${prefix}quran *nomor surah*
› ${prefix}tafsir *surah ayat*
› ${prefix}infosurah *nama surah*
› ${prefix}listsurah

*STICKER CREATOR*
› ${prefix}sticker *send or reply with your image/video*
› ${prefix}emstik *your emoji*
› ${prefix}sfire *send or reply with your image*
› ${prefix}slight *send or reply with your image*
› ${prefix}sgif *send or reply with your video/gif*
› ${prefix}ttp *text*
› ${prefix}attp *text*
› ${prefix}ttp2 *text*
› ${prefix}ttg *text*
› ${prefix}memesticker *text1 | text2*
› ${prefix}findstiker *nama stiker*
› ${prefix}sline *link sticker line*
› ${prefix}take *pack | author*
› ${prefix}takevid *| pack | author*

*DOWNLOAD MENU*
› ${prefix}video *nama video*
› ${prefix}getvideo *kode /urutan video*
› ${prefix}music *nama audio*
› ${prefix}getmusic *kode / urutan music*
› ${prefix}asupan *username tiktok*
› ${prefix}yt *link youtube*
› ${prefix}ytmp3 *link youtube*
› ${prefix}lagu *judul lagu*
› ${prefix}play *judul lagu*
› ${prefix}joox *judul lagu*
› ${prefix}ig *link instagram*
› ${prefix}ig2 *link instagram*
› ${prefix}tw *link twitter*
› ${prefix}tw2 *link twitter*
› ${prefix}pin *link pinterest*
› ${prefix}fb *link facebook*
› ${prefix}fb2 *link facebook*
› ${prefix}tiktok *link tiktok*
› ${prefix}tt *link tiktok*
› ${prefix}smule *link smule*
› ${prefix}starmaker *link startmaker*
› ${prefix}igstory *username*


*AUDIO MENU*
› ${prefix}tomp3 *reply video*
› ${prefix}bass *reply audio*
› ${prefix}distord *reply audio*
› ${prefix}tts *_code_ text*
› ${prefix}setvn *nama vn*
› ${prefix}v *nama vn*
› ${prefix}listvn

*TEXT MENU*
› ${prefix}wattpad *nama wattpad*
› ${prefix}wpread *url wattpad*
› ${prefix}cerpen
› ${prefix}puisi
› ${prefix}kebalik *text*
› ${prefix}creepyfact
› ${prefix}fakta
› ${prefix}cersex
› ${prefix}bacot
› ${prefix}bacotadd *text*
› ${prefix}renungan
› ${prefix}pantun 
› ${prefix}bucin
› ${prefix}katabijak
› ${prefix}katasenja
› ${prefix}motivasi
› ${prefix}katafiersa
› ${prefix}quotes 
› ${prefix}hilih *text*
› ${prefix}alay *text*
› ${prefix}chord *kata kunci*
› ${prefix}lirik *judul lagu*
› ${prefix}zodiak *zodiakmu*
› ${prefix}zodiak2 *zodiakmu*

*IMAGE-MANIPULATION MENU*
› ${prefix}wall
› ${prefix}toimg *reply sticker*
› ${prefix}textmaker *|Hai|maniez*
› ${prefix}gambar *kata kunci*
› ${prefix}googleimage *|kata kunci|jumlah*
› ${prefix}quotemaker *|text|author|theme*
› ${prefix}quoteit *text|author*
› ${prefix}maps *nama kota*
› ${prefix}pokemon 
› ${prefix}kucing 
› ${prefix}anjing
› ${prefix}memeindo
› ${prefix}meme
› ${prefix}qrcode *text*
› ${prefix}dadu
› ${prefix}koin 
› ${prefix}cewe 
› ${prefix}cowo 
› ${prefix}ptlvid
› ${prefix}infoGempa
› ${prefix}ssphone *url*
› ${prefix}sspc *url*
› ${prefix}springflow *your image*
› ${prefix}watersplash *your image*
› ${prefix}cloudy *your image*
› ${prefix}sketch *your image*
› ${prefix}threats *your image*
› ${prefix}glass *your image*
› ${prefix}greyscale *your image*
› ${prefix}invert *your image*
› ${prefix}invertgrey *your image*
› ${prefix}brightness *your image*
› ${prefix}sepia *your image*
› ${prefix}burik *your image*
› ${prefix}blurfry *your image*
› ${prefix}magik *your image*
› ${prefix}captcha *your image & text*
› ${prefix}kpop

*STALKING MENU*
› ${prefix}twtstalk *username*
› ${prefix}tiktokstalk *username*
› ${prefix}igstalk *username*
› ${prefix}smulestalk *username*

*CREATE MENU*
› ${prefix}kue *text*
› ${prefix}chalktext *text*
› ${prefix}wooden-sign *text*
› ${prefix}salju *text1 | text2*
› ${prefix}bioskoptext *text1 | text2*
› ${prefix}kalung *text*
› ${prefix}gelang *text*
› ${prefix}beach-sign *text*
› ${prefix}bordir2 *text*
› ${prefix}blood2 *text*
› ${prefix}window *text*
› ${prefix}snow-sign *text*
› ${prefix}kapal *text*
› ${prefix}pesawat *text*
› ${prefix}jalan *text*
› ${prefix}einstein *text*
› ${prefix}lipstick *text*
› ${prefix}typewriter *text*
› ${prefix}graffiti *text*
› ${prefix}graffiti2 *text*
› ${prefix}graffiti3 *text*
› ${prefix}tahta *text*
› ${prefix}goreng *reply image*
› ${prefix}carbon *text*
› ${prefix}neon-sign *text1 | text2*
› ${prefix}karat *text*
› ${prefix}kayu *text1 | text2*
› ${prefix}tato *text*
› ${prefix}embun *text*
› ${prefix}trumptwt *your text*
› ${prefix}silktext *your text*
› ${prefix}mymind *your text*
› ${prefix}coffee *your text*
› ${prefix}ukir *your text*
› ${prefix}smoketext *your text*
› ${prefix}kanna *your text*
› ${prefix}sarah *your text*
› ${prefix}phcomment *nama|text*

*OTHER MENU*
› ${prefix}resend *reply bot media*
› ${prefix}film *nama film*
› ${prefix}kadargay *tag*
› ${prefix}aiquote
› ${prefix}subreddit *kata kunci*
› ${prefix}artinama *namamu*
› ${prefix}pasangan *namamu | nama doimu*
› ${prefix}nomorhoki *nomormu*
› ${prefix}shorturl *urlnya*
› ${prefix}readmore *text|text*
› ${prefix}imgcompress tag gambarnya
› ${prefix}nickepep
› ${prefix}wasted *reply image*
› ${prefix}gdrive *link file google drive*
› ${prefix}kiss *reply pesan target*
› ${prefix}jail *reply pesan target*
› ${prefix}wame
› ${prefix}imgtourl *reply with image*
› ${prefix}imgtopdf *reply with image*
› ${prefix}topdf *reply document*

*GAME MENU*
› ${prefix}tod *truth/dare*
› ${prefix}family100
› ${prefix}caklontong
› ${prefix}tebakgambar

*INSIDE GROUP MENU*
› ${prefix}trash *@tag*
› ${prefix}hitler *@tag*
› ${prefix}getpp *@tag orangnya*
› ${prefix}getsts *@tag orangnya*
› ${prefix}slap *@tag orangnya*
› ${prefix}hug *@tag yang mau di peluk*
› ${prefix}pat *@tag yang mau di elus*
› ${prefix}afk *Your reason*
› ${prefix}groupinfo

*Anime MENU*
› ${prefix}hnder *kode nuklir*
› ${prefix}randombkiss
› ${prefix}randomhug 
› ${prefix}randomcry 
› ${prefix}fetish *Kata kunci*
› ${prefix}husbu
› ${prefix}randomNekoNime 
› ${prefix}randomanime
› ${prefix}lewds
› ${prefix}fetish *armpits*
› ${prefix}fetish *feets*
› ${prefix}fetish *thighs*
› ${prefix}fetish *ass*
› ${prefix}fetish *boobs*
› ${prefix}fetish *belly*
› ${prefix}fetish *sideboobs*
› ${prefix}fetish *ahegao*
› ${prefix}loli 
› ${prefix}malanime *Nama anime*
› ${prefix}wallanime 
› ${prefix}wait *repy gambar*
› ${prefix}waifu

*18+ CONTENT*
${prefix}xnxx *_linknya_*
${prefix}hehe *_kata kunci_*
${prefix}randomblowjob 
${prefix}xxx *kata kunci*
${prefix}getxxxx *kode / nomor urutan*
${prefix}xvideos *kata kunci*
${prefix}getxvideos *kode / nomor urutan*

*ABOUT*
${prefix}rules
${prefix}about
${prefix}info
${prefix}snk
${prefix}bug
${prefix}premfitur
cekprefix
${prefix}donasi
`
}
exports.help = help()
function menuadmin() {
    return `
*MENU GROUP*

${prefix}lock 
${prefix}unlock 
${prefix}bot off 
${prefix}bot on 
${prefix}link 
${prefix}resetlink
${prefix}add *@tag* 
${prefix}kick *@tag / reply pesan target* 
${prefix}promote *@tag / reply pesan target* 
${prefix}demote *@tag / reply pesan target* 
${prefix}info-lock
${prefix}info-unlock
${prefix}tagall *_kata-kata_* 
${prefix}setgroupicon *send image* 
${prefix}adminList 
${prefix}antiporn enable|disable 
${prefix}antilink enable|disable 
${prefix}autosticker enable|disable 
${prefix}warn
${prefix}delete *reply pesan bot* 
${prefix}kickall
`
}
exports.menuadmin = menuadmin()

function own(){
    return` *OWNER MENU*
    
${prefix}stat
${prefix}getses
${prefix}restart
${prefix}restlimit
${prefix}block *@tag*
${prefix}unblock *@tag*
${prefix}setname *Name*
${prefix}setinfo *Status*
${prefix}setprofile *Tag Image*
${prefix}banchat
${prefix}unbanchat
${prefix}prem *@tag _number_ format* 
${prefix}delprem *@tag*
${prefix}setprefix *Prefix*
${prefix}bc *Message*
${prefix}cgc *Name*
${prefix}setgrouplimit *Number*
${prefix}setmemberlimit *Number*
${prefix}setlimituser *Number*
${prefix}mtcstart
${prefix}mtcstop
${prefix}exif text | text
${prefix}addasupan *user*
${prefix}listasupan
${prefix}addtruth *sentence*
${prefix}adddare *sentence*
${prefix}deltruth *sentence*
${prefix}deldare *sentence*
${prefix}darelist *sentence*
${prefix}truthlist
${prefix}darelist
${prefix}run *your code*
${prefix}runtime*
${prefix}shutdown
`
}
exports.own = own()
function piloot(){
    return` *PILOT MENU*
    
${prefix}stat
${prefix}getses
${prefix}restart
${prefix}listgroup
${prefix}block *@tag*
${prefix}unblock *@tag*
${prefix}setname *Name* 
${prefix}setstatus *Status*
${prefix}setprofile *Tag Image*
${prefix}bc *Message*
${prefix}okickall
${prefix}clearall
${prefix}cgc *Name*
${prefix}setgrouplimit *Number*
${prefix}setgrouplimit *@tag age*
${prefix}ban *@tag*
${prefix}unban *@tag*
`
}
exports.piloot = piloot()
function readme() {
    return `
*CHANGELOG BOT*
`
}
exports.readme = readme()

function info( pushname ) {
    return `Hai ${pushname} 👋
`
}
exports.info = info()

function snk() {
    return `Syarat dan Ketentuan *ADYYBOT*

1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!
`
}
exports.snk = snk()

function rules() {
    return `
    PERATURAN *ADYYBOT*
    
1. Nelpon/VC = Block!
2. Spamming = Block!
3. Menggunakan fitur bot untuk hal yang ilegal/kejahatan = block!
4. Jika melakukan hal-hal yang di atas di dalam grup, maka grup anda akan di blacklist selamanya.

=====================

1. Call / VC = Block!
2. Spamming = Block!
3. Using the bot feature for things that are illegal / crime = block!
4. If you do any of the things above in the group, your group will be blacklisted forever.
`
}
exports.rules = rules()

function premfitur() {
    return `
    [ PREMIUM FEATURE ]
    
1. Unlimited limit
2. Memasukkan bot ke grupmu
3. Akses seluruh fitur yang tersedia
4. Masa aktif 30 hari
5. Full support dari develper bot
6. Daftar pertama 15k/ bulan
7. Biaya perpanjang 10k/bulan
`
}
exports.premfitur = premfitur()

function mit(){
    return`   
     *INFO*

Open Donation If the Bot Server is Dead
Pulsa: 60199782326
Saweria: saweria.co/itsukichan
`
}
exports.mit = mit()

function donatee( pushname ) {
    return `${pushname} mau donasi?
    
Langsung ae ke :
Pulsa: 60199782326
Saweria : saweria.co/itsukichan

Donasi akan digunakan untuk pengoperasian dan pengembangan bot ini`
}
exports.donatee = donatee()
function bahasalist() {
    return `*List kode Bahasa*\n
  *Code    :    Bahasa*

    sq     =   Albanian
    ar     =   Arabic
    hy     =   Armenian
    ca     =   Catalan
    zh     =   Chinese
    zh-cn  =   Chinese (China)
    zh-tw  =   Chinese (Taiwan)
    zh-yue =   Chinese (Cantonese)
    hr     =   Croatian
    cs     =   Czech
    da     =   Danish
    nl     =   Dutch
    en     =   English
    en-au  =   English (Australia)
    en-uk  =   English (United Kingdom)
    en-us  =   English (United States)
    eo     =   Esperanto
    fi     =   Finnish
    fr     =   French
    de     =   German
    el     =   Greek
    ht     =   Haitian Creole
    hi     =   Hindi
    hu     =   Hungarian
    is     =   Icelandic
    id     =   Indonesian
    it     =   Italian
    ja     =   Japanese
    ko     =   Korean
    la     =   Latin
    lv     =   Latvian
    mk     =   Macedonian
    no     =   Norwegian
    pl     =   Polish
    pt     =   Portuguese
    pt-br  =   Portuguese (Brazil)
    ro     =   Romanian
    ru     =   Russian
    sr     =   Serbian
    sk     =   Slovak
    es     =   Spanish
    es-es  =   Spanish (Spain)
    es-us  =   Spanish (United States)
    sw     =   Swahili
    sv     =   Swedish
    ta     =   Tamil
    th     =   Thai
    tr     =   Turkish
    vi     =   Vietnamese
    cy     =   Welsh
      `
}
exports.bahasalist = bahasalist()

function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
