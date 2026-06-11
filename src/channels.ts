import { Channel } from './types';

export const channels: Channel[] = [
  {
    id: 'IctimaiTV.az@SD',
    name: 'İctimai TV',
    logo: 'https://i.imgur.com/HzY4VMo.png',
    url: 'https://live.itv.az/itv.m3u8',
    category: 'Ümumi',
    country: 'az',
    isHd: true
  },
  {
    id: 'AzTV.az@SD',
    name: 'Az TV',
    logo: 'https://i.imgur.com/snBMMeH.png',
    url: 'https://stream8.cinerama.uz/1455/tracks-v1a1/mono.m3u8',
    category: 'Ümumi',
    country: 'az',
    isHd: true
  },
  {
    id: 'CBCSport.az@HD',
    name: 'CBC Sport HD',
    logo: 'https://i.imgur.com/3mEdjuq.png',
    url: 'https://mn-nl.mncdn.com/cbcsports_live/cbcsports/playlist.m3u8',
    category: 'İdman',
    country: 'az',
    isHd: true
  },
  {
    id: 'BakuTV.az@SD',
    name: 'Baku TV',
    logo: 'https://i.imgur.com/r4FzxSg.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/refs/heads/main/myvideo-az/baku-tv.m3u8',
    category: 'Xəbər',
    country: 'az',
    isHd: true
  },
  {
    id: 'AnewZTV.az@SD',
    name: 'AnewZ',
    logo: 'https://i.imgur.com/Lwgdbuu.png',
    url: 'https://53be5ef2d13aa.streamlock.net/cubesanewz-secure/smil:cubesanewz-secure-web.smil/playlist.m3u8',
    category: 'Xəbər',
    country: 'az',
    isHd: true
  },
  {
    id: 'ARB.az@SD',
    name: 'ARB TV',
    logo: 'https://i.imgur.com/E97M2OL.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/main/myvideo-az/arb.m3u8',
    category: 'Ümumi',
    country: 'az',
    isHd: true
  },
  {
    id: 'ARB24.az@SD',
    name: 'ARB 24',
    logo: 'https://i.imgur.com/mtvIFyq.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/main/myvideo-az/arb-24.m3u8',
    category: 'Xəbər',
    country: 'az',
    isHd: true
  },
  {
    id: 'XezerTV.az@SD',
    name: 'Xəzər TV',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/97/X%C9%93z%C9%99r_TV_Logo.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/main/myvideo-az/xezer-tv.m3u8',
    category: 'Ümumi',
    country: 'az',
    isHd: true
  },
  {
    id: 'SpaceTV.az@SD',
    name: 'Space TV',
    logo: 'https://i.imgur.com/ufvVQJH.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/main/myvideo-az/space-tv.m3u8',
    category: 'Ümumi',
    country: 'az',
    isHd: false
  },
  {
    id: 'ARBGunes.az@SD',
    name: 'ARB Günəş',
    logo: 'https://i.imgur.com/dSg7KUK.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/main/myvideo-az/arb-gunes.m3u8',
    category: 'Uşaq',
    country: 'az',
    isHd: false
  },
  {
    id: 'DunyaTV.az@SD',
    name: 'Dünya TV',
    logo: 'https://i.imgur.com/mgDCKiy.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/refs/heads/main/myvideo-az/dunya-tv.m3u8',
    category: 'Ümumi',
    country: 'az',
    isHd: false
  },
  {
    id: 'KapazTV.az@SD',
    name: 'Kəpəz TV',
    logo: 'https://upload.wikimedia.org/wikipedia/az/thumb/3/3e/K%C9%99p%C9%99z_TV_%282019-h.h.%29.png/500px-K%C9%99p%C9%99z_TV_%282019-h.h.%29.png',
    url: 'http://85.132.78.122:8050/hls/stream/index.m3u8',
    category: 'Regional',
    country: 'az',
    isHd: false
  },
  {
    id: 'KanalS.az@SD',
    name: 'Kanal S TV',
    logo: 'https://i.imgur.com/m6CM7VU.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/refs/heads/main/myvideo-az/kanal-s.m3u8',
    category: 'Regional',
    country: 'az',
    isHd: false
  },
  {
    id: 'AlvinChannelTV.az@SD',
    name: 'Alvin Channel',
    logo: 'https://i.imgur.com/m6CM7VU.png',
    url: 'https://cdn10-alvinchannel.yayin.com.tr/alvinchannel/alvinchannel/playlist.m3u8',
    category: 'Regional',
    country: 'az',
    isHd: false
  },
  {
    id: 'TMB.az@SD',
    name: 'TMB Azerbaycan',
    logo: 'https://i.imgur.com/28AyWHe.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/refs/heads/main/myvideo-az/tmb-azerbaycan.m3u8',
    category: 'Musiqi',
    country: 'az',
    isHd: true
  },
  {
    id: 'ELTV.az@SD',
    name: 'EL TV',
    logo: 'https://i.imgur.com/tTlokZ2.png',
    url: 'http://85.132.53.162:1935/live/eltv/playlist.m3u8',
    category: 'Regional',
    country: 'az',
    isHd: false
  },
  {
    id: '4UTV.tr@SD',
    name: '4U TV',
    logo: 'https://i.imgur.com/PexhKwp.png',
    url: 'https://hls.4utv.live/hls/stream.m3u8',
    category: 'Əyləncə',
    country: 'tr',
    isHd: true
  },
  {
    id: '24TV.tr@SD',
    name: '24 TV',
    logo: 'https://i.imgur.com/8FO41es.png',
    url: 'https://mn-nl.mncdn.com/kanal24/smil:kanal24.smil/playlist.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: '360.tr@SD',
    name: '360 TV',
    logo: 'https://i.imgur.com/agn47sQ.png',
    url: 'https://turkmedya-live.ercdn.net/tv360/tv360.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ATurk.tr@SD',
    name: 'A Türk Izmir',
    logo: 'https://i.imgur.com/je5wQ3G.png',
    url: 'https://vdo.digitalbox.xyz:3807/stream/play.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: false
  },
  {
    id: 'AnadoluAgency.tr@SD',
    name: 'AA Live',
    logo: 'https://i.imgur.com/dWElJll.png',
    url: 'https://mtulqxgomrllive.mediatriple.net/mtulqxgomrllive/broadcast_59f9c0c785b88.smil/playlist.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'AfroturkTV.tr@SD',
    name: 'Afroturk TV',
    logo: 'https://i.imgur.com/fWlLvRA.png',
    url: 'https://edge.socialsmart.tv/naturaltv/bant1/playlist.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'AkitTV.tr@SD',
    name: 'Akit TV',
    logo: 'https://i.imgur.com/oGto929.png',
    url: 'https://akittv-live.ercdn.net/akittv/akittv.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'AksuTV.tr@SD',
    name: 'Aksu TV',
    logo: 'https://i.imgur.com/mgDCKiy.png',
    url: 'https://live.artidijitalmedya.com/artidijital_aksutv/aksutv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'AlRafidainTV.tr@SD',
    name: 'Al Rafidain',
    logo: 'https://i.imgur.com/rjXDCN5.png',
    url: 'https://arrafidain.tvplayer.online/arrafidaintv/source/playlist.m3u8',
    category: 'Dini',
    country: 'tr',
    isHd: true
  },
  {
    id: 'AlZahraTVTurkic.tr@SD',
    name: 'Al-Zahra TV Turkic',
    logo: 'https://i.imgur.com/QEHKGnG.png',
    url: 'https://live.al-zahratv.com/live/playlist.m3u8',
    category: 'Dini',
    country: 'tr',
    isHd: true
  },
  {
    id: 'AlanyaPostaTV.tr@SD',
    name: 'Alanya Posta TV',
    logo: 'https://i.imgur.com/a3w9eFe.png',
    url: 'https://api-tv3.yayin.com.tr/postatv/postatv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'AlmahriahTV.tr@SD',
    name: 'Almahriah TV',
    logo: 'https://i.imgur.com/GgEeTNr.png',
    url: 'https://starmenajo.com/hls/almahriah/index.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: false
  },
  {
    id: 'AltasTV.tr@SD',
    name: 'Altas TV',
    logo: 'https://i.imgur.com/XaJ7fp6.png',
    url: 'https://edge1.socialsmart.tv/altastv/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'AnadoluNetTV.tr@SD',
    name: 'Anadolu Net TV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/NTV_%28Turkey%29_logo.svg/960px-NTV_%28Turkey%29_logo.svg.png',
    url: 'https://live.artidijitalmedya.com/artidijital_anadolunet/anadolunet/playlist.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ArasTV.tr@SD',
    name: 'ARAS TV',
    logo: 'https://i.imgur.com/JsDCyWG.png',
    url: 'http://1.rtmp.org/tv217/yayin.stream/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: false
  },
  {
    id: 'ATV.tr@SD',
    name: 'ATV',
    logo: 'https://i.imgur.com/HyVUwFC.png',
    url: 'http://89.187.191.41/ATV-HD-TR/video.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ATVAlanya.tr@SD',
    name: 'ATV Alanya',
    logo: 'https://i.imgur.com/bUwarR0.png',
    url: 'http://stream2.taksimbilisim.com:1935/alanyatv/alanyatv.smil/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ATVAvrupa.tr@SD',
    name: 'ATV Avrupa',
    logo: 'https://i.tmgrup.com.tr/aav/site/v1/i/atv-avrupa-logo.png',
    url: 'https://streamer2.nexgen.bz/ATV/index.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: false
  },
  {
    id: 'BenguturkTV.tr@SD',
    name: 'Bengütürk TV',
    logo: 'https://i.imgur.com/p3ON1oX.png',
    url: 'https://tv.ensonhaber.com/benguturk/benguturk.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'BeratTV.tr@SD',
    name: 'Berat TV',
    logo: 'https://i.imgur.com/BxxH8wE.png',
    url: 'https://cdn-berattv.yayin.com.tr/berattv/berattv/playlist.m3u8',
    category: 'Dini',
    country: 'tr',
    isHd: true
  },
  {
    id: 'BeyazTV.tr@SD',
    name: 'Beyaz TV',
    logo: 'https://i.imgur.com/uykIdML.png',
    url: 'https://beyaztv.daioncdn.net/beyaztv/beyaztv.m3u8?app=fcd5c66b-da9d-44ba-a410-4f34805c397d&ce=3',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'BirTV.tr@SD',
    name: 'Bir TV',
    logo: 'https://birtv.tv/assets/upload/637f83951df60.png',
    url: 'https://live.artidijitalmedya.com/artidijital_birtv/birtv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'BizimevTV.tr@SD',
    name: 'Bizimev TV',
    logo: 'https://i.imgur.com/eJa6sFY.png',
    url: 'https://mn-nl.mncdn.com/blutv_bizimev/bizimev_sd.smil/playlist.m3u8',
    category: 'Əyləncə',
    country: 'tr',
    isHd: true
  },
  {
    id: 'BloombergHT.tr@SD',
    name: 'Bloomberg HT',
    logo: 'https://i.imgur.com/bmkXfIE.png',
    url: 'https://ciner-live.daioncdn.net/bloomberght/bloomberght.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'BRTV.tr@SD',
    name: 'BRTV',
    logo: 'https://i.imgur.com/U3qlEAp.png',
    url: 'https://live.artidijitalmedya.com/artidijital_brtv/brtv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ASTV.tr@SD',
    name: 'Bursa AS TV',
    logo: 'https://asset.artidijitalmedya.com/image/188x188/channels/v1/logo_13.png',
    url: 'https://live.artidijitalmedya.com/artidijital_astv/astv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'BursaTV.tr@SD',
    name: 'Bursa TV',
    logo: 'https://i.imgur.com/9cl1MR8.png',
    url: 'https://win1.yayin.com.tr/bursatv/bursatv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'CanTV.tr@SD',
    name: 'Can TV',
    logo: 'https://i.imgur.com/oIMtuwB.png',
    url: 'https://livetv.canbroadcast.com:7443/canlican/tv.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'CayTV.tr@SD',
    name: 'Çay TV',
    logo: 'https://i.imgur.com/ndupxwu.png',
    url: 'https://edge1.socialsmart.tv/caytv/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'CekmekoyTV.tr@SD',
    name: 'Çekmeköy TV',
    logo: 'https://i.imgur.com/sjAGFWu.png',
    url: 'https://cdn-cekmekoybeltv.yayin.com.tr/cekmekoybeltv/cekmekoybeltv_1080p/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'CGTNDocumentary.tr@SD',
    name: 'CGTN Documentary',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/CGTN_Documentary_logo.png/960px-CGTN_Documentary_logo.png',
    url: 'https://mn-nl.mncdn.com/dogusdyg_drone/cgtn/playlist.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'CiftciTV.tr@SD',
    name: 'Çiftçi TV',
    logo: 'https://i.imgur.com/CLzP4vL.png',
    url: 'https://live.artidijitalmedya.com/artidijital_ciftcitv/ciftcitv/playlist.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'CNBCe.tr@SD',
    name: 'CNBC-e',
    logo: 'https://s.cnbce.com/dist/images/logo-nav.png',
    url: 'https://hnpsechtsc.turknet.ercdn.net/xpnvudnlsv/cnbc-e/cnbc-e.m3u8',
    category: 'Əyləncə',
    country: 'tr',
    isHd: true
  },
  {
    id: 'DehaTV.tr@SD',
    name: 'Deha TV',
    logo: 'https://i.imgur.com/Dlsm9XP.png',
    url: 'https://live.artidijitalmedya.com/artidijital_dehatv/dehatv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'DenizPostasiTV.tr@SD',
    name: 'Deniz Postası TV',
    logo: 'https://i.imgur.com/Mm8hdfx.png',
    url: 'https://live.artidijitalmedya.com/artidijital_denizpostasi/denizpostasi/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'DHA.tr@SD',
    name: 'DHA Xəbər',
    logo: 'https://i.imgur.com/VZhag2x.png',
    url: 'https://603c568fccdf5.streamlock.net/live/dhaweb1_C5efC/playlist.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'DimTV.tr@SD',
    name: 'DİM TV',
    logo: 'https://i.imgur.com/X4QFDhk.png',
    url: 'https://live.artidijitalmedya.com/artidijital_dimtv/dimtv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'DisneyJr.tr@SD',
    name: 'Disney Jr.',
    logo: 'https://www.dsmart.com.tr/api/v1/public/images/kanallar/disneyjr.png',
    url: 'https://saran-live.ercdn.net/disneyjunior/index.m3u8',
    category: 'Uşaq',
    country: 'tr',
    isHd: true
  },
  {
    id: 'DiyanetTV.tr@SD',
    name: 'Diyanet TV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Diyanet_TV_logo.svg/960px-Diyanet_TV_logo.svg.png',
    url: 'https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3bf95a47e07.smil/playlist.m3u8',
    category: 'Dini',
    country: 'tr',
    isHd: true
  },
  {
    id: 'DiyarTV.tr@SD',
    name: 'Diyar TV',
    logo: 'https://i.imgur.com/qWkHjRA.png',
    url: 'https://live.artidijitalmedya.com/artidijital_diyartv/diyartv/playlist.m3u8',
    category: 'Dini',
    country: 'tr',
    isHd: true
  },
  {
    id: 'DostTV.tr@SD',
    name: 'Dost TV',
    logo: 'https://dosttv.com/wp-content/uploads/2022/02/dost_logo.png',
    url: 'https://dost.stream.emsal.im/tv/live.m3u8',
    category: 'Dini',
    country: 'tr',
    isHd: false
  },
  {
    id: 'DreamTurk.tr@SD',
    name: 'Dream Türk',
    logo: 'https://i.imgur.com/vJ8VaZi.png',
    url: 'https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'EdessaTV.tr@SD',
    name: 'Edessa TV',
    logo: 'https://i.imgur.com/rhU6j9I.png',
    url: 'https://canli.edessatv.com/hls/stream.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ElsharqTV.tr@SD',
    name: 'Elsharq TV',
    logo: 'https://i.imgur.com/8vmfZb5.png',
    url: 'https://mn-nl.mncdn.com/elsharq_live/live/playlist.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ERTV.tr@SD',
    name: 'Er TV',
    logo: 'https://i.imgur.com/VDGEPrD.png',
    url: 'https://live.artidijitalmedya.com/artidijital_ertv_new/ertv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ErzurumWebTV.tr@SD',
    name: 'Erzurum Web TV',
    logo: 'https://i.imgur.com/HF7N4Li.png',
    url: 'https://win29.yayin.com.tr/erzurumwebtv/erzurumwebtv/iptvdelisi.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ESTV.tr@SD',
    name: 'ES TV',
    logo: 'https://i.imgur.com/epAEBrp.png',
    url: 'https://live.artidijitalmedya.com/artidijital_estv/estv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ETVKayseri.tr@SD',
    name: 'ETV Kayseri',
    logo: 'https://yt3.googleusercontent.com/ytc/AIdro_msPtG6zfPKIJIIdvG4dehXLoVoXcHM2-2HL9YxsNYzGQ=s512-c-k-c0x00ffffff-no-rj',
    url: 'https://live.artidijitalmedya.com/artidijital_etv/etv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ETVManisa.tr@SD',
    name: 'ETV Manisa',
    logo: 'https://i.ibb.co/QKXtdkz/sOd3INg.png',
    url: 'https://edge1.socialsmart.tv/manisaetv/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'EuroD.tr@SD',
    name: 'Euro D',
    logo: 'https://i.imgur.com/x9kHsXo.png',
    url: 'https://live.duhnet.tv/S2/HLS_LIVE/eurodnp/playlist.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'EuroStar.tr@SD',
    name: 'EuroStar TV',
    logo: 'https://i.tmgrup.com.tr/aav/site/v1/i/atv-avrupa-logo.png',
    url: 'https://canlitvulusal.xyz/live/eurostar/index.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'FBTV.tr@SD',
    name: 'FB TV',
    logo: 'https://i.imgur.com/qBVqtYd.png',
    url: 'http://1hskrdto.rocketcdn.com/fenerbahcetv.smil/playlist.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'FinansTurkTV.tr@SD',
    name: 'Finans Türk TV',
    logo: 'https://i.ibb.co/wBwmB1T/iY0osc7.png',
    url: 'https://yayin30.haber100.com/live/finansturk/playlist.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'FlashTV.tr@SD',
    name: 'Flash TV',
    logo: 'https://i.imgur.com/L0NHKBM.png',
    url: 'https://mn-nl.mncdn.com/blutv_flashtv/live.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'FortunaTV.tr@SD',
    name: 'Fortuna TV',
    logo: 'https://i.imgur.com/ZbUSlOC.png',
    url: 'https://edge1.socialsmart.tv/ftvturk/bant1/playlist.m3u8',
    category: 'Əyləncə',
    country: 'tr',
    isHd: true
  },
  {
    id: 'FX.tr@HD',
    name: 'FX',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/FX_International_logo.svg/960px-FX_International_logo.svg.png',
    url: 'https://saran-live.ercdn.net/fx/index.m3u8',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEM24B.tr@SD',
    name: 'GEM 24B',
    logo: 'https://i.imgur.com/8LgdPst.png',
    url: 'https://ca-rt.onetv.app/gem24b/index-0.m3u8?token=onetv202',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMBollywood.tr@SD',
    name: 'GEM Bollywood',
    logo: 'https://i.imgur.com/2XASeBk.png',
    url: 'https://ca-rt.onetv.app/gembollywood/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMClassic.tr@SD',
    name: 'GEM Classic',
    logo: 'https://i.imgur.com/25BhuOf.png',
    url: 'https://ca-rt.onetv.app/gemclassic/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMComedy.tr@SD',
    name: 'GEM Comedy',
    logo: 'https://i.imgur.com/FuscfJW.png',
    url: 'https://ca-rt.onetv.app/gemcomedy/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMDrama.tr@SD',
    name: 'GEM Drama',
    logo: 'https://i.imgur.com/k2pGyRH.png',
    url: 'https://ca-rt.onetv.app/gemdrama/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMDramaPlus.tr@SD',
    name: 'GEM Drama Plus',
    logo: 'https://gemgroup.tv/assets/images/channels/icon_7.png',
    url: 'https://ca-rt.onetv.app/gemdramaplus/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMEntertainment.tr@SD',
    name: 'GEM Entertainment',
    logo: 'https://www.gemgroup.tv/assets/images/channels/icon_8.png',
    url: 'https://ca-rt.onetv.app/gementertainment/index-0.m3u8?token=onetv202',
    category: 'Əyləncə',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMFilm.tr@SD',
    name: 'GEM Film',
    logo: 'https://i.imgur.com/nrFz3LU.png',
    url: 'https://ca-rt.onetv.app/gemfilm/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMFit.tr@SD',
    name: 'GEM Fit',
    logo: 'https://i.imgur.com/7FQxaII.png',
    url: 'https://ca-rt.onetv.app/gemfit/index-0.m3u8?token=onetv202',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMFood.tr@SD',
    name: 'GEM Food',
    logo: 'https://i.imgur.com/SMtSinK.png',
    url: 'https://ca-rt.onetv.app/gemfood/index-0.m3u8?token=onetv202',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMJunior.tr@SD',
    name: 'GEM Junior',
    logo: 'https://i.imgur.com/jK8yzj2.png',
    url: 'https://ca-rt.onetv.app/gemjunior/index-0.m3u8?token=onetv202',
    category: 'Uşaq',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMKids.tr@SD',
    name: 'GEM Kids',
    logo: 'https://i.imgur.com/ArkjaFk.png',
    url: 'https://ca-rt.onetv.app/gemkids/index-0.m3u8?token=onetv202',
    category: 'Uşaq',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMLife.tr@SD',
    name: 'GEM Life',
    logo: 'https://i.imgur.com/gI8qePa.png',
    url: 'https://ca-rt.onetv.app/gemlife/index-0.m3u8?token=onetv202',
    category: 'Əyləncə',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMMifa.tr@SD',
    name: 'GEM Mifa',
    logo: 'https://i.imgur.com/qlI7o7V.png',
    url: 'https://ca-rt.onetv.app/gemmifa/index-0.m3u8?token=onetv202',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMMifaPlus.tr@SD',
    name: 'GEM Mifa Plus',
    logo: 'https://i.imgur.com/8FIAqR5.png',
    url: 'https://ca-rt.onetv.app/gemmifaplus/index-0.m3u8?token=onetv202',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMNature.tr@SD',
    name: 'GEM Nature',
    logo: 'https://i.imgur.com/ENvOMDQ.png',
    url: 'https://ca-rt.onetv.app/gemnature/index-0.m3u8?token=onetv202',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMOnyx.tr@SD',
    name: 'GEM Onyx',
    logo: 'https://i.imgur.com/gXRIAw4.png',
    url: 'https://ca-rt.onetv.app/gemonyx/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMPixel.tr@SD',
    name: 'GEM Pixel',
    logo: 'https://i.ibb.co/Q3tkbPrn/icon-27.png',
    url: 'https://ca-rt.onetv.app/gempixel/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMRiver.tr@SD',
    name: 'GEM River',
    logo: 'https://i.imgur.com/yJ6f1B6.png',
    url: 'https://ca-rt.onetv.app/gemriver/index-0.m3u8?token=onetv202',
    category: 'Əyləncə',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMRiverPlus.tr@SD',
    name: 'GEM River Plus',
    logo: 'https://gemgroup.tv/assets/images/channels/icon_29.png',
    url: 'https://ca-rt.onetv.app/gemriverplus/index-0.m3u8?token=onetv202',
    category: 'Əyləncə',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMRubix.tr@SD',
    name: 'GEM Rubix',
    logo: 'https://i.imgur.com/cDjOj58.png',
    url: 'https://ca-rt.onetv.app/gemrubix/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMRubixPlus.tr@SD',
    name: 'GEM Rubix Plus',
    logo: 'https://gemgroup.tv/assets/images/channels/icon_31.png',
    url: 'https://ca-rt.onetv.app/gemrubixplus/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMSeries.tr@SD',
    name: 'GEM Series',
    logo: 'https://i.imgur.com/M0WMDXm.png',
    url: 'https://ca-rt.onetv.app/gemseries/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMSeriesPlus.tr@SD',
    name: 'GEM Series Plus',
    logo: 'https://gemgroup.tv/assets/images/channels/icon_33.png',
    url: 'https://ca-rt.onetv.app/gemseriesplus/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMSport.tr@SD',
    name: 'GEM Sport',
    logo: 'https://www.gemgroup.tv/assets/images/channels/icon_34.png',
    url: 'https://steep-wildflower-284d.nhhwkiszzzvcuojxdo.workers.dev/?url=https://gg.hls2.xyz/live/IR+-+GEM+Sport/chunks.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMTV.tr@SD',
    name: 'GEM TV',
    logo: 'https://gemgroup.tv/assets/images/channels/icon_16.png',
    url: 'https://ca-rt.onetv.app/gem/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GEMTVPlus.tr@SD',
    name: 'GEM TV Plus',
    logo: 'https://gemgroup.tv/assets/images/channels/icon_17.png',
    url: 'https://ca-rt.onetv.app/gemtvplus/index-0.m3u8?token=onetv202',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GrandCinema.tr@SD',
    name: 'Grand Cinema',
    logo: 'https://i.imgur.com/PexhKwp.png',
    url: 'https://gcinemahls.wns.live/hls/stream.m3u8',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GRT.tr@SD',
    name: 'GRT TV',
    logo: 'https://i.imgur.com/eRR0gkC.png',
    url: 'https://live.artidijitalmedya.com/artidijital_grt/grt1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GuneydoguTV.tr@SD',
    name: 'Güneydoğu TV',
    logo: 'https://i.imgur.com/JT5pp3Y.png',
    url: 'https://edge1.socialsmart.tv/gtv/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'GZT.tr@SD',
    name: 'GZT TV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/GZT_logo.svg/960px-GZT_logo.svg.png',
    url: 'https://mn-nl.mncdn.com/gzttv/gzttv/playlist.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Haber61TV.tr@SD',
    name: 'Haber61 TV',
    logo: 'https://i.imgur.com/2a2XUKl.png',
    url: 'https://win8.yayin.com.tr/haber61tv/smil:haber61tv.smil/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'HaberGlobal.tr@SD',
    name: 'Haber Global',
    logo: 'https://i.imgur.com/fu6XeGS.png',
    url: 'https://haberglobaldvr.blutv.com/blutv_haberglobal_dvr/live.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'HaberturkTV.tr@SD',
    name: 'Habertürk TV',
    logo: 'https://i.imgur.com/6Tw3rUp.png',
    url: 'https://ciner-live.daioncdn.net/haberturktv/haberturktv.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'HalkTV.tr@SD',
    name: 'Halk TV',
    logo: 'https://i.imgur.com/xM0HA30.png',
    url: 'https://halktv-live.daioncdn.net/halktv/halktv.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'HTSporTV.tr@SD',
    name: 'HTSpor TV',
    logo: 'https://www.htspor.com/images/manifest/social-share-logo.png',
    url: 'https://ciner.daioncdn.net/ht-spor/ht-spor.m3u8?app=web',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'HunatTV.tr@SD',
    name: 'Hunat TV',
    logo: 'https://i.imgur.com/NrxHGnb.png',
    url: 'https://live.artidijitalmedya.com/artidijital_hunattv/hunattv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'IBBTV.tr@SD',
    name: 'İBB TV',
    logo: 'https://i.imgur.com/aXxAz84.png',
    url: 'https://npserver1.ibb.gov.tr/webtv/webtv_wowza1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'IcelTV.tr@SD',
    name: 'İçel TV',
    logo: 'https://i.imgur.com/CGwImKv.png',
    url: 'https://edge1.socialsmart.tv/iceltv/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'IlkeTV.tr@HD',
    name: 'İlke TV',
    logo: 'https://ilketv.com.tr/wp-content/uploads/2024/06/logo.png',
    url: 'https://stream.ilketv.com.tr/hls/ilkecanli.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal3.tr@SD',
    name: 'Kanal 3',
    logo: 'https://i.imgur.com/eXErSv0.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanal3/kanal3/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal7.tr@SD',
    name: 'Kanal 7',
    logo: 'https://i.imgur.com/0gq9xOm.png',
    url: 'https://kanal7-live.daioncdn.net/kanal7/kanal7.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal7Avrupa.tr@SD',
    name: 'Kanal 7 Avrupa',
    logo: 'https://i.imgur.com/wlfyj5l.png',
    url: 'https://livetv.radyotvonline.net/kanal7live/kanal7avr/playlist.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal12.tr@SD',
    name: 'Kanal 12',
    logo: 'https://i.imgur.com/51xCkXG.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanal12/kanal12/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal15.tr@SD',
    name: 'Kanal 15',
    logo: 'https://i.imgur.com/wb1Cdc9.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanal15/kanal15/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal23.tr@SD',
    name: 'Kanal 23',
    logo: 'https://i.imgur.com/3br8RCq.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanal23/kanal23/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal26.tr@SD',
    name: 'Kanal 26',
    logo: 'https://i.imgur.com/Mr7XPii.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanal26/kanal26/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal32.tr@SD',
    name: 'Kanal 32',
    logo: 'https://i.imgur.com/eXErSv0.png',
    url: 'https://edge1.socialsmart.tv/kanal32/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal33.tr@SD',
    name: 'Kanal 33',
    logo: 'https://i.imgur.com/5WYaoFZ.png',
    url: 'https://edge1.socialsmart.tv/kanal33/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal34.tr@SD',
    name: 'Kanal 34',
    logo: 'https://i.imgur.com/SIaI6Sj.png',
    url: 'https://5be5d840359c6.streamlock.net/kanal34tv/kanal34tv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal38.tr@SD',
    name: 'Kanal 38',
    logo: 'https://i.imgur.com/WvtZ7Xd.png',
    url: 'http://yayin3.canlitv.com:1935/live/kanal38/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: false
  },
  {
    id: 'Kanal58.tr@SD',
    name: 'Kanal 58',
    logo: 'https://i.imgur.com/Rgc66sv.png',
    url: 'https://edge1.socialsmart.tv/kanal58/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Kanal68.tr@SD',
    name: 'Kanal 68',
    logo: 'https://i.imgur.com/5y7K9SS.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanal68/kanal68/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KanalAvrupa.tr@SD',
    name: 'Kanal Avrupa',
    logo: 'https://i.imgur.com/bIGk6RN.png',
    url: 'http://51.15.2.151/hls/kanalavrupa.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KanalB.tr@SD',
    name: 'Kanal B',
    logo: 'https://i.imgur.com/bUsbxTQ.png',
    url: 'http://212.174.58.161/hls-live/livepkgr/_definst_/liveevent/kanalb.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: false
  },
  {
    id: 'KanalD.tr@SD',
    name: 'Kanal D',
    logo: 'https://i.imgur.com/9o1atM6.png',
    url: 'https://demiroren.daioncdn.net/kanald/kanald.m3u8?app=kanald_web&ce=3',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KanalDDrama.tr@SD',
    name: 'Kanal D Drama',
    logo: 'https://i.imgur.com/WIeZMKT.png',
    url: 'https://thema-vivekanald-rakuten.amagi.tv/playlist.m3u8',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KanalFirat.tr@SD',
    name: 'Kanal Fırat',
    logo: 'https://i.imgur.com/3o8Rokp.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanalfirat/kanalfirat/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KanalV.tr@SD',
    name: 'Kanal V',
    logo: 'https://i.imgur.com/7RNjTno.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanalv/kanalv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KanalZ.tr@SD',
    name: 'Kanal Z',
    logo: 'https://i.imgur.com/Kr8960d.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanalz/kanalz/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KayTV.tr@SD',
    name: 'Kay TV',
    logo: 'https://i.imgur.com/MymuDJ1.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kaytv/kaytv1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KentTurk.tr@SD',
    name: 'Kent Türk TV',
    logo: 'https://i.imgur.com/FQKPjsm.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kentturktv/kentturktv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KonyaOlayTV.tr@SD',
    name: 'Konya Olay TV',
    logo: 'https://www.konyaolaytv.com/upload/tema/20230307__5154687762.jpg',
    url: 'https://live.artidijitalmedya.com/artidijital_konyaolaytv/konyaolaytv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KralPopTV.tr@SD',
    name: 'Kral Pop TV',
    logo: 'https://i.imgur.com/ch365lh.png',
    url: 'https://dogus-live.daioncdn.net/kralpoptv/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KudusTV.tr@SD',
    name: 'Kudüs TV',
    logo: 'https://i.imgur.com/lwRA84B.png',
    url: 'https://yayin.kudustv.com/981680400/kudustv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: false
  },
  {
    id: 'LalegulTV.tr@SD',
    name: 'Lalegül TV',
    logo: 'https://i.imgur.com/wwCysFs.png',
    url: 'https://lbl.netmedya.net/hls/lalegultv.m3u8',
    category: 'Dini',
    country: 'tr',
    isHd: true
  },
  {
    id: 'LifeTV.tr@SD',
    name: 'Life TV',
    logo: 'https://i.imgur.com/lWeJxm0.png',
    url: 'https://live.artidijitalmedya.com/artidijital_lifetv/lifetv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'LineTV.tr@SD',
    name: 'Line TV',
    logo: 'https://i.imgur.com/6GNp7f8.png',
    url: 'https://edge1.socialsmart.tv/linetv/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'MaviKaradenizTV.tr@SD',
    name: 'Mavi Karadeniz',
    logo: 'https://i.imgur.com/wyWappU.png',
    url: 'https://live.artidijitalmedya.com/artidijital_mavikaradeniz/mavikaradeniz/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'MedMuzik.tr@SD',
    name: 'Med Müzik',
    logo: 'https://i.imgur.com/gtUFmCD.png',
    url: 'http://54.36.110.140/live3/live3.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'MekameleenTV.tr@SD',
    name: 'Mekameleen TV',
    logo: 'https://i.imgur.com/q7iVchl.png',
    url: 'https://mn-nl.mncdn.com/mekameleen/smil:mekameleentv.smil/playlist.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'MeltemTV.tr@SD',
    name: 'Meltem TV',
    logo: 'https://i.imgur.com/C3m6w5S.png',
    url: 'https://vhxyrsly.rocketcdn.com/meltemtv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'MercanTV.tr@SD',
    name: 'Mercan TV',
    logo: 'https://i.imgur.com/3CWV8bS.png',
    url: 'https://live.artidijitalmedya.com/artidijital_mercantv/mercantv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: false
  },
  {
    id: 'MilyonTV.tr@SD',
    name: 'Milyon TV',
    logo: 'https://i.imgur.com/lEIFDwo.png',
    url: 'https://sosyoapp-live.cdnnew.com/sosyo/buraya-bir-isim-verin.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'MinikaCocuk.tr@SD',
    name: 'Minika Çocuk',
    logo: 'https://i.imgur.com/VCywMTv.png',
    url: 'https://tgn.bozztv.com/dvrfl05/gin-minikacocuk/index.m3u8',
    category: 'Uşaq',
    country: 'tr',
    isHd: false
  },
  {
    id: 'MinikaGo.tr@SD',
    name: 'Minika Go',
    logo: 'https://i.imgur.com/qIoipDq.png',
    url: 'https://tgn.bozztv.com/dvrfl05/gin-minikago/index.m3u8',
    category: 'Uşaq',
    country: 'tr',
    isHd: false
  },
  {
    id: 'MovieSmartTurk.tr@SD',
    name: 'MovieSmart Türk',
    logo: 'https://i.imgur.com/DWN9ulT.png',
    url: 'http://playhdnewjj.xyz:8080/recc121412/KVqfhtdJ2nQ7/174',
    category: 'Filmlər',
    country: 'tr',
    isHd: false
  },
  {
    id: 'MTurkTV.tr@SD',
    name: 'MTürk TV',
    logo: 'https://i.imgur.com/xj1gvrq.png',
    url: 'https://edge1.socialsmart.tv/muglaturk/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'NationalGeographic.tr@SD',
    name: 'National Geographic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Natgeologo.svg/960px-Natgeologo.svg.png',
    url: 'https://saran-live.ercdn.net/natgeohd/index.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'NationalGeographicWild.tr@SD',
    name: 'Nat Geo Wild',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/National_Geographic_Wild_logo.svg/960px-National_Geographic_Wild_logo.svg.png',
    url: 'https://saran-live.ercdn.net/natgeowild/index.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'NaturalTV.tr@SD',
    name: 'Natural TV',
    logo: 'https://i.imgur.com/rfcJ674.png',
    url: 'https://edge1.socialsmart.tv/naturaltv/bant1/playlist.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'NOWTV.tr@SD',
    name: 'NOW TV',
    logo: 'https://i.imgur.com/5EYjWK7.png',
    url: 'https://uycyyuuzyh.turknet.ercdn.net/nphindgytw/nowtv/nowtv.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'NTV.tr@SD',
    name: 'NTV Turkey',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/NTV_%28Turkey%29_logo.svg/960px-NTV_%28Turkey%29_logo.svg.png',
    url: 'https://dogus-live.daioncdn.net/ntv/ntv.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Number1Ask.tr@SD',
    name: 'Number 1 Aşk',
    logo: 'https://i.imgur.com/slwbux7.png',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Number1Damar.tr@SD',
    name: 'Number 1 Damar',
    logo: 'https://i.imgur.com/rYtbAGZ.png',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Number1Dance.tr@SD',
    name: 'Number 1 Dance',
    logo: 'https://i.imgur.com/ZM4PSyq.png',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Number1Turk.tr@SD',
    name: 'Number 1 Türk',
    logo: 'https://i.imgur.com/18zjk3q.png',
    url: 'https://mn-nl.mncdn.com/blutv_nr1turk2/live.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Number1TV.tr@SD',
    name: 'Number 1 TV',
    logo: 'https://i.imgur.com/02cDIBi.png',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'On4TV.tr@SD',
    name: 'On4 TV',
    logo: 'https://i.imgur.com/qGRa1KI.png',
    url: 'https://edge1.socialsmart.tv/on4/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'On6.tr@SD',
    name: 'On 6 Bursa',
    logo: 'https://i.imgur.com/k7rS2gC.png',
    url: 'https://live.artidijitalmedya.com/artidijital_kanal16/kanal16/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'OnMedyaTV.tr@SD',
    name: 'ON Medya Haber',
    logo: 'https://i.imgur.com/thvk3Py.png',
    url: 'http://live.arkumedia.com:1935/marmaratv/marmaratv/playlist.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'OncuTV.tr@SD',
    name: 'Öncü TV',
    logo: 'https://i.imgur.com/TGPNYrD.jpg',
    url: 'https://edge1.socialsmart.tv/oncurtv/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'PowerDance.tr@SD',
    name: 'Power Dance',
    logo: 'https://i.imgur.com/QpPteBO.png',
    url: 'https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'PowerLove.tr@SD',
    name: 'Power Love',
    logo: 'https://i.imgur.com/0RzUswR.png',
    url: 'https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'PowerTurkTV.tr@SD',
    name: 'Power Türk TV',
    logo: 'https://i.imgur.com/9OPoXQG.png',
    url: 'https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'PowerTurkAkustik.tr@SD',
    name: 'Power Türk Akustik',
    logo: 'https://i.imgur.com/driabBO.png',
    url: 'https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'PowerTurkSlow.tr@SD',
    name: 'Power Türk Slow',
    logo: 'https://i.imgur.com/tQSoQXW.png',
    url: 'https://livetv.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'PowerTurkTaptaze.tr@SD',
    name: 'Power Türk Taptaze',
    logo: 'https://i.imgur.com/a5nW3HU.png',
    url: 'https://livetv.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'PowerTV.tr@SD',
    name: 'Power TV',
    logo: 'https://i.imgur.com/XSL1gd7.png',
    url: 'https://livetv.powerapp.com.tr/powerTV/powerhd.smil/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'QafTV.tr@SD',
    name: 'Qaf TV',
    logo: 'https://i.imgur.com/hrk7Uce.png',
    url: 'https://customer-9vqui33qma2rownb.cloudflarestream.com/7792e558fe54e23bdd4b462ec275cdba/manifest/video.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'SSport.tr@SD',
    name: 'S Sport',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/S_Sport_logo1.png',
    url: 'https://bcovlive-a.akamaihd.net/540fcb034b144b848e7ff887f61a293a/eu-central-1/6415845530001/profile_0/chunklist.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'SSport2.tr@SD',
    name: 'S Sport 2',
    logo: 'https://i.imgur.com/2jIItAy.png',
    url: 'https://bcovlive-a.akamaihd.net/29c60f23ea4840ba8726925a77fcfd0b/eu-central-1/6415845530001/profile_0/chunklist.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'BricveSatrancTV.tr@SD',
    name: 'Satranç TV',
    logo: 'https://i.imgur.com/TXDV1ty.png',
    url: 'http://139.162.182.79/live/test/index.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: false
  },
  {
    id: 'SemerkandTV.tr@SD',
    name: 'Semerkand TV',
    logo: 'https://i.imgur.com/UVGGrQd.png',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtisvwurbfcyslive/broadcast_58d915bd40efc.smil/playlist.m3u8',
    category: 'Dini',
    country: 'tr',
    isHd: true
  },
  {
    id: 'SportsTV.tr@SD',
    name: 'Sports TV',
    logo: 'https://i.imgur.com/tGTVcVe.jpg',
    url: 'https://live.sportstv.com.tr/hls/low/sportstv.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'SunRTV.tr@SD',
    name: 'Sun RTV',
    logo: 'https://i.imgur.com/64tph9N.png',
    url: 'https://live.artidijitalmedya.com/artidijital_sunrtv/sunrtv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TabiiSpor6.tr@SD',
    name: 'Tabii Spor 6',
    logo: 'https://cms-tabii-public-image.tabii.com/int/w300/43020.jpeg',
    url: 'https://vbtob9hyq58eiophct5qctxr2.medya.trt.com.tr/master.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TarihTV.tr@SD',
    name: 'Tarih TV',
    logo: 'https://i.imgur.com/HbIGZUt.png',
    url: 'https://tv1.arectv30.sbs/live/tarihtv.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TarimTV.tr@SD',
    name: 'Tarım TV',
    logo: 'https://i.imgur.com/q30sFms.png',
    url: 'https://content.tvkur.com/l/c7e1da7mm25p552d9u9g/master.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TatlisesTV.tr@SD',
    name: 'Tatlıses TV',
    logo: 'https://i.imgur.com/et1sbyq.png',
    url: 'https://live.artidijitalmedya.com/artidijital_tatlisestv/tatlisestv/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TBMMTV.tr@SD',
    name: 'TBMM TV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/TBMM_TV_logo.svg/960px-TBMM_TV_logo.svg.png',
    url: 'https://meclistv-live.ercdn.net/meclistv/meclistv.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Tele1.tr@SD',
    name: 'Tele 1',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/4/43/Tele1_logosu.png',
    url: 'https://tele1-live.ercdn.net/tele1/tele1.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TempoTV.tr@SD',
    name: 'Tempo TV',
    logo: 'https://i.imgur.com/tZpx32y.png',
    url: 'https://live.artidijitalmedya.com/artidijital_tempotv/tempotv/playlist.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'tv2.tr@SD',
    name: 'Teve2',
    logo: 'https://i.imgur.com/rsoSLih.png',
    url: 'https://demiroren-live.daioncdn.net/teve2/teve2.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TGRTBelgesel.tr@SD',
    name: 'TGRT Belgesel TV',
    logo: 'https://i.imgur.com/VwWTnf0.png',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtsxxkzwwuqtglive/broadcast_5fe462afc6a0e.smil/playlist.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: false
  },
  {
    id: 'TGRTEurope.tr@SD',
    name: 'TGRT Europe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/TGRT_EU.png/960px-TGRT_EU.png',
    url: 'https://tv.ensonhaber.com/tv/tr/tgrteu/index.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: false
  },
  {
    id: 'TGRTHaber.tr@SD',
    name: 'TGRT Haber',
    logo: 'https://i.imgur.com/PrxwKDw.png',
    url: 'https://canli.tgrthaber.com/tgrt.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Tivi6.tr@SD',
    name: 'Tivi 6',
    logo: 'https://i.imgur.com/Mbi0jbz.png',
    url: 'https://live.artidijitalmedya.com/artidijital_tivi6/tivi6/playlist.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TJKTV2.tr@SD',
    name: 'TJK TV 2',
    logo: 'https://i.imgur.com/3zHdkYG.png',
    url: 'https://tjktv-live.tjk.org/tjktv2/tjktv2.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TJKTV.tr@SD',
    name: 'TJK TV',
    logo: 'https://i.imgur.com/3zHdkYG.png',
    url: 'https://tjktv-live.tjk.org/tjktv.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TMB.tr@SD',
    name: 'TMB TV',
    logo: 'https://i.imgur.com/28AyWHe.png',
    url: 'https://raw.githubusercontent.com/UzunMuhalefet/streams/main/myvideo-az/tmb-tv.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TonTV.tr@SD',
    name: 'Ton TV',
    logo: 'https://i.imgur.com/f0Soeob.png',
    url: 'https://live.artidijitalmedya.com/artidijital_tontv/tontv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ToprakTV.tr@SD',
    name: 'Toprak TV',
    logo: 'https://i.imgur.com/JGnS0qs.png',
    url: 'https://59cba4d34b678.streamlock.net/canlitv/topraktv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TR24TV.tr@SD',
    name: 'TR24 TV',
    logo: 'https://i.imgur.com/8FO41es.png',
    url: 'https://tv.ensonhaber.com/tv24/tv24.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TrabzonBuyuksehirBelediyesiTV.tr@FHD',
    name: 'Trabzon B.B. TV',
    logo: 'https://tbbweb.tv/img/logo.png',
    url: 'https://tv191.radyotelekom.com.tr:3612/stream/play.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TrakyaTurk.tr@SD',
    name: 'Trakya Türk TV',
    logo: 'https://trakyaturktv.com/uploads/library/2024/04/unnamed1.jpg',
    url: 'https://live.artidijitalmedya.com/artidijital_trakyaturk/trakyaturk/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRT1.tr@SD',
    name: 'TRT 1',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/TRT_1_logo_%282021-%29.svg/960px-TRT_1_logo_%282021-%29.svg.png',
    url: 'https://tv-trt1.medya.trt.com.tr/master.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRT3.tr@SD',
    name: 'TRT 3',
    logo: 'https://i.imgur.com/JrWFwBd.png',
    url: 'https://tv-trt3.live.trt.com.tr/master.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTArabi.tr@SD',
    name: 'TRT Arabi',
    logo: 'https://i.imgur.com/dEfI2M9.png',
    url: 'https://tv-trtarabi.medya.trt.com.tr/master.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTAvaz.tr@SD',
    name: 'TRT Avaz',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/TRT_Avaz_logo.svg/960px-TRT_Avaz_logo.svg.png',
    url: 'https://tv-trtavaz.medya.trt.com.tr/master.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTBelgesel.tr@SD',
    name: 'TRT Belgesel',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TRT_Belgesel_logo_%282019-%29.svg/960px-TRT_Belgesel_logo_%282019-%29.svg.png',
    url: 'https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTCocuk.tr@SD',
    name: 'TRT Çocuk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/TRT_%C3%87ocuk_logo_%282021%29.svg/960px-TRT_%C3%87ocuk_logo_%282021%29.svg.png',
    url: 'https://tv-trtcocuk.medya.trt.com.tr/master.m3u8',
    category: 'Uşaq',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTDiyanetCocuk.tr@SD',
    name: 'TRT Diyanet Çocuk',
    logo: 'https://i.imgur.com/8PmXz9t.png',
    url: 'https://tv-trtdiyanetcocuk.medya.trt.com.tr/master.m3u8',
    category: 'Uşaq',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTEBAIlkokul.tr@SD',
    name: 'TRT EBA İlkokul',
    logo: 'https://i.imgur.com/CRBfZi4.png',
    url: 'https://tv-e-okul00.medya.trt.com.tr/master.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTEBALise.tr@SD',
    name: 'TRT EBA Lise',
    logo: 'https://i.imgur.com/vj2L2L2.png',
    url: 'https://tv-e-okul02.medya.trt.com.tr/master.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTEBA.tr@SD',
    name: 'TRT EBA Ortaokul',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/TRT_EBA_TV_logo.svg/960px-TRT_EBA_TV_logo.svg.png',
    url: 'https://tv-e-okul01.medya.trt.com.tr/master.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTHaber.tr@SD',
    name: 'TRT Haber',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/TRT_Haber_Eyl%C3%BCl_2020_Logo.svg/960px-TRT_Haber_Eyl%C3%BCl_2020_Logo.svg.png',
    url: 'https://tv-trthaber.medya.trt.com.tr/master.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTKurdi.tr@SD',
    name: 'TRT Kurdî',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/TRT_Kurd%C3%AE_logo.svg/960px-TRT_Kurd%C3%AE_logo.svg.png',
    url: 'https://tv-trtkurdi.medya.trt.com.tr/master.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTMuzik.tr@SD',
    name: 'TRT Müzik',
    logo: 'https://i.imgur.com/JgUzRH8.png',
    url: 'https://tv-trtmuzik.medya.trt.com.tr/master.m3u8',
    category: 'Musiqi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTSpor.tr@SD',
    name: 'TRT Spor',
    logo: 'https://i.imgur.com/6tv0zxh.png',
    url: 'https://tv-trtspor1.medya.trt.com.tr/master.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTSporYildiz.tr@SD',
    name: 'TRT Spor Yıldız',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/TRT_Spor_Y%C4%B1ld%C4%B1z_Logo.svg/960px-TRT_Spor_Y%C4%B1ld%C4%B1z_Logo.svg.png',
    url: 'https://tv-trtspor2.medya.trt.com.tr/master.m3u8',
    category: 'İdman',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTTurk.tr@SD',
    name: 'TRT Türk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/TRT_T%C3%BCrk_logo.svg/960px-TRT_T%C3%BCrk_logo.svg.png',
    url: 'https://tv-trtturk.medya.trt.com.tr/master.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TRTWorld.tr@HD',
    name: 'TRT World HD',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/TRT_World.svg/960px-TRT_World.svg.png',
    url: 'https://dash2.antik.sk/live/test_trt_world_atktv/playlist.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TurkHaberTV.tr@SD',
    name: 'TürkHaber',
    logo: 'https://i.imgur.com/2AcRKdL.png',
    url: 'https://edge1.socialsmart.tv/turkhaber/bant1/playlist.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TV1.tr@SD',
    name: 'TV 1 Kayseri',
    logo: 'https://i.imgur.com/8CtrYVb.png',
    url: 'https://edge1.socialsmart.tv/tv1/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TV4.tr@SD',
    name: 'TV4',
    logo: 'https://i.imgur.com/UpsQsbd.png',
    url: 'https://turkmedya-live.ercdn.net/tv4/tv4.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TV8.tr@SD',
    name: 'TV 8',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/6/68/Tv8_Yeni_Logo.png/960px-Tv8_Yeni_Logo.png',
    url: 'https://tv8.daioncdn.net/tv8/tv8.m3u8?app=7ddc255a-ef47-4e81-ab14-c0e5f2949788&ce=3',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TV24.tr@SD',
    name: 'TV 24',
    logo: 'https://i.imgur.com/8FO41es.png',
    url: 'https://turkmedya-live.ercdn.net/tv24/tv24.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TV38.tr@SD',
    name: 'TV 38',
    logo: 'https://i.imgur.com/KDBXLqn.png',
    url: 'https://59cba4d34b678.streamlock.net/live/tv38/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: false
  },
  {
    id: 'TV41.tr@SD',
    name: 'TV 41 Kocaeli',
    logo: 'https://i.imgur.com/6T472LM.png',
    url: 'https://live.artidijitalmedya.com/artidijital_tv41/tv41/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TV52.tr@SD',
    name: 'TV 52 Ordu',
    logo: 'https://i.imgur.com/k4R5CzO.png',
    url: 'https://edge1.socialsmart.tv/tv52/bant1/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TV100.tr@SD',
    name: 'TV 100',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/0/0f/TV100_logo.png/960px-TV100_logo.png',
    url: 'https://tv100-live.daioncdn.net/tv100/tv100.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TV264.tr@SD',
    name: 'TV 264 Sakarya',
    logo: 'https://i.imgur.com/tudXdOZ.png',
    url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtdxkkitgbrckilive/broadcast_5ee244263fd6d.smil/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TVDen.tr@SD',
    name: 'TV Den Aydın',
    logo: 'https://i.imgur.com/Uhg95Ze.png',
    url: 'http://canli.tvden.com.tr/hls/live.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: false
  },
  {
    id: 'TVNET.tr@SD',
    name: 'TVNET',
    logo: 'https://i.imgur.com/mQo8yWQ.png',
    url: 'https://mn-nl.mncdn.com/tvnet/tvnet/playlist.m3u8',
    category: 'Xəbər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'TYTTurk.tr@SD',
    name: 'TYT Türk',
    logo: 'https://tytturk.com/upload/tyt-logo.png',
    url: 'https://cdn-tytturk.yayin.com.tr/tytturk/index.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'UlkeTV.tr@SD',
    name: 'Ülke TV',
    logo: 'https://i.imgur.com/wdWR7Qk.png',
    url: 'https://mn-nl.mncdn.com/blutv_ulketv2/live.m3u8',
    category: 'Ümumi',
    country: 'tr',
    isHd: true
  },
  {
    id: 'UniversiteTV.tr@SD',
    name: 'Üniversite TV',
    logo: 'https://i.imgur.com/KeauaSh.png',
    url: 'https://vdo.digitalbox.xyz:3986/live/unitvlive.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'UrfaNatikTV.tr@SD',
    name: 'Urfa Natik TV',
    logo: 'https://i.imgur.com/8KO0uxn.png',
    url: 'https://live.artidijitalmedya.com/artidijital_urfanatiktv/urfanatiktv/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'UUTV2.tr@SD',
    name: 'ÜÜ TV Üsküdar',
    logo: 'https://i.imgur.com/FjFjdY5.png',
    url: 'https://uskudarunv.mediatriple.net/uskudarunv/uskudar2/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'VTV.tr@SD',
    name: 'V TV',
    logo: 'https://www.vtv.net.tr/uploads/logo/sitelogo_4.jpg',
    url: 'https://serdar.tiviplayer.com/player/m3u8/65aae71c9b93f0965aaed3a92660d98b/65aae71c9b93f0965aaed3a92660d98b.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'VavTV.tr@SD',
    name: 'Vav TV',
    logo: 'https://i.imgur.com/jw0gB8L.png',
    url: 'https://playlist.fasttvcdn.com/pl/rfrk9821hdy9dayo8wfyha/kltr-sanat-tv/playlist.m3u8',
    category: 'Dini',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ViasatExplore.tr@SD',
    name: 'Viasat Explore',
    logo: 'https://i.imgur.com/DyT5pKB.png',
    url: 'https://tv.arectv29.sbs/live/viasathistory.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'KanalDDrama2.tr@SD',
    name: 'Vive Kanal D Drama',
    logo: 'https://i.imgur.com/WIeZMKT.png',
    url: 'https://thema-vivekanald-rakuten.amagi.tv/playlist.m3u8',
    category: 'Filmlər',
    country: 'tr',
    isHd: true
  },
  {
    id: 'Vizyon58TV.tr@SD',
    name: 'Vizyon 58 TV',
    logo: 'https://i.imgur.com/tITBc59.png',
    url: 'https://live.artidijitalmedya.com/artidijital_vizyon58/vizyon58/playlist.m3u8',
    category: 'Regional',
    country: 'tr',
    isHd: true
  },
  {
    id: 'WomanTV.tr@SD',
    name: 'Woman TV',
    logo: 'https://i.imgur.com/f2zGoV3.png',
    url: 'https://embedlp.becdn.net/womantv.m3u8',
    category: 'Sənədli',
    country: 'tr',
    isHd: true
  },
  {
    id: 'ZarokTV.tr@SD',
    name: 'Zarok TV',
    logo: 'https://i.imgur.com/o0eevnb.png',
    url: 'https://zindikurmanci.zaroktv.com.tr/hls/stream.m3u8',
    category: 'Uşaq',
    country: 'tr',
    isHd: true
  }
];
