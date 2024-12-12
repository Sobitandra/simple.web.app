'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "09c5af53465cc733d85d82b9078338a8",
"version.json": "1dd8c90fc22752096fcb5afe0f3acdc6",
"index.html": "551469b777e9ec50d608e9468834738c",
"/": "551469b777e9ec50d608e9468834738c",
"main.dart.js": "241e4a2b24726602be068ae1e9627368",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.wasm.map": "b70d855345c62da5485acb82db896919",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "bc146d91b14c9b40ddf712a689f653cc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66214d5b2e3c12a18dd3000d28b1ff25",
"main.dart.wasm": "855bc3b9a402cdef9cdfee414d916ecb",
".git/config": "231b8fb73b538a98a7d1b05a514ed8fe",
".git/objects/0d/42e53d0071951632c6af5bf6c4fccb5db68632": "5bc793794ea40828868e5ca4677eca6e",
".git/objects/95/3b49ca0cac9705d6ba2c5c4b838bfbea317ded": "2e3d12fcb388409c2dc64382590c0fa8",
".git/objects/59/bb4f5aad76c3234738a9553f32145c46c809bf": "c0dc3570d8a4b47e9af22e647c3032e9",
".git/objects/59/526c71ebf904c33b975883d5f3bf06c2502895": "b3341c0acaf2ee01faee6d9363ef137c",
".git/objects/0c/c606cbf973ac40cea4e229b76e20c679891bb4": "b6babb5c06144e9270e3259b31601fa4",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/f9fa0768991e12546e4c800fe20d2c56af2398": "d560bf7bb3027e11ec450dbbc7af0c36",
".git/objects/03/441c8b90a258329bd18dd76b117bba546f8685": "27473296c92260abc4b7ead921a5d465",
".git/objects/04/ba46fbb30f0161ac120c60763974c32847eb92": "bd1ef93276d47b20e81339e0bf1bd9fb",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/eac7ec7fb11ff5de35f39ac60fff7f7e51f7ae": "d1eef61101302761a7024021b14f772d",
".git/objects/69/6bc5159e07d8e21b49bcd5769e90712f76ad38": "d516c7c222f67eb5f753487ec43d9850",
".git/objects/58/9ae2a1580ce54f18201c13e425993182466d28": "50825577b6a9a71d09c749f502f1a402",
".git/objects/94/0e255d0140b07a15ea0371695c25c02087f368": "18bb485de059e15a7e27f1fdbdef9391",
".git/objects/5a/a730569e782d525196d145c738eeafef18f4d9": "8927ab91081ea0f9c225c95ded7a5c1d",
".git/objects/5a/d25285d70d85d91859e8957275a4c57a463e2c": "9a7834ef315c170cc921016759b177a9",
".git/objects/b5/4269976f6fcfdd832df831a139eea1cf9f424b": "12879bbccd61fac1b46b5738eec6304a",
".git/objects/b2/ad6e44f220163a5b28eaa35a1e2b5eeef8fca9": "d7a8ab7134adeaea0975d025bbc10865",
".git/objects/d9/bc0b28f1e78e95045e65f5edd0e37c2f22e947": "9290853bce5df2dd3f26f3cf74bac003",
".git/objects/d9/89c89230e4d109003c9f0313685ac174608cf4": "2d0c92db13501b800c6625e4311860f1",
".git/objects/d7/1e006510f125726a3c9009462ab55c817c9b03": "c1621204d93b54c7fde21f7f92c5ec71",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/a5a2c13f3c63502ff92b24788c57691ec91fa2": "a50b207c598ec0e194d3a3183a868251",
".git/objects/a2/9f6fba467d059009fae9fee76dd6182c6fe527": "85c499adfab62b83b6ca67ff697cb281",
".git/objects/a5/54787f8d44c35d728b7a1339ca3d53faedb7ac": "b32512a5b7add65617eff7566b70f042",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/59d4272038e0944eeb5082f99173019ec660d3": "0a6cfc382810e8188dde88aa44190214",
".git/objects/ae/c3abb2ca58ba26aab7b1e10f4c08b217efb969": "051c6153ec55658a747d2df964083623",
".git/objects/ae/3edcce599ac398e8932c90a5ab21764bf4a0b2": "561da9d213ab81d102e52d3122e4785f",
".git/objects/ab/68fb197d4479b3b6dec6e85bd5cbaf433a87c5": "ca2fa121978d3f2f4eb4609d4ad0750d",
".git/objects/e5/0fdbb6ec273b814092d8770f42321711b3a4c6": "338033e0ed1b184b90560308216a2abb",
".git/objects/e2/890d0bb402c503ff8521e75c9b6275d2b7b33e": "e0cd615a830c54a32e4e4b9d6f6748f3",
".git/objects/f4/8c8a5eea3ff6bfdb2497b9ab0a4d07508f5d5a": "d8da7ca1ef18ace39c232717ced8344e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/c09342f9293c60e165d9402b1de144a586f4a9": "5edcfe3d4e2b21a75589780db400e5a0",
".git/objects/c0/ac53d25d2523498e683223f8ceffa6ea98022c": "ebf4206de39f7aecab0cb3401ab12fcf",
".git/objects/c0/439aa90d8d6292446fb2b0a47fa8b19ab3d195": "a62b89b8ace9753e689509720c12f065",
".git/objects/ee/eeb7f3adceff9d60df95b04d36a0300223ef1b": "e3aaeae801df09544dbf13dc5c21bc03",
".git/objects/fc/415784789a79b9518f3a26f85dd573ff1a93f7": "b25676f8be98bab81845be70d898e24b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/87c1926a29e2bc3e49aa0ebf99e91c3f81609b": "daf27fe20654043a1f47543f4599110a",
".git/objects/f5/1e1046ab9c3b2219d1dde99865cb20961f85d0": "d610d66a62112bc97ec4622d031020b3",
".git/objects/cf/d6fd02cfe0fcb38acd8b8578663a7c3b2bfb92": "f855d9de503dfef07ea3e950c7a3ded9",
".git/objects/ca/b082557ec472c0e212150a817b1c5ad56a226e": "f3b8e5f8f72adef0531aaee3c54a0cbc",
".git/objects/c8/e0f98cdd11bf34b9b83dbaf2c5f47b7b6ff298": "b185b497cfc402da8f684204fea9c70c",
".git/objects/c8/da732a7eeba3bca393029063dd90cb31c51df1": "3ed8d0ccd6b6b220ca3aa6a57c92bc8f",
".git/objects/fb/0e3e7f747bb35ae5ab04e96afe22f8a22daa2b": "dcb401586358a494565886ee2180add9",
".git/objects/ec/5086ccf54697094c0a33d43adac51616612675": "9f589c679b81ab6f5f4a6b8c8f47cde2",
".git/objects/ec/e526d2a95955f67aead901ae4ef1ead4a25e1e": "6943c3b96852dd2dd1f8489d09f46677",
".git/objects/18/5eff243896219ba7e1a293e28ca6a2adb385da": "0ad833b96bda4439d8fc034f1dce9e0b",
".git/objects/29/c98bb9380d52c75ec436597a897f643e8d2a21": "a573f2942a1a93975be9be59eff21ff7",
".git/objects/89/7a8087365a6b95e14e68070c412627d76bbaf4": "ac2b7bfeead4b61b32f78f0b199ed8db",
".git/objects/8a/250c2adafa128ea64876afd01d2df0a58e1c96": "67b3dbfc8a5b6abd203028791518fed3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/6ff0147da19eca67698c7251551f791c82efbb": "b90aa51e61cefb6900f7583d563a8313",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/9d6126883ab21e1be3a27980f330584a632d2e": "5927f6825e7ae16f94a65cf6a72d5584",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/b702749f2f15567f58e7a62b978293965bbee7": "209a044887c5273d519d800bbb8d4cfa",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/e4759a293853eefd58c5de513535e1594a61b8": "6b2d15b50e8ff6a7fdf07863edeccfaf",
".git/objects/38/aeda714767868ea77716bf741698be586e1865": "59ed04ab6f6b53782c2918bc3c6b9ea4",
".git/objects/00/8256f046080605ef81733db74302b7b4d9f288": "5b25335354cba99b2f37db0d47b85e15",
".git/objects/9a/7a6c844aaaaf841768d5caba079462918878be": "866b8f3516d627bf31a5ddc9d877872a",
".git/objects/5d/cf8f917fda47e1fdff3439ba361634071107cb": "21d58a01071cd4b8c805d7b1b432365a",
".git/objects/5d/7e41302b3ed252f0bb6ee6a5bb0af5783b62f5": "36afaf5dff134de236e6477d4b197de3",
".git/objects/91/f086a34572e9518c6573cd3d19aae91aa5af5c": "a3eff144f05bb0a3d775836f00f396b7",
".git/objects/65/4e20b03fb438b264f5e66098909b39dbf4984d": "11f41d37f3b6a9887bbb5b6e6edbf6dc",
".git/objects/62/2522545479168d86886d905fc1839315eaee15": "18491b8ad6fc74746a7a9a0e7999f20a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/672a282a8634e8ac977a07eca727a0164066ef": "8ace0587e128f5019c528074075400a4",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/8ce2ad1976872456309dcdbf41ee0bf4891a2c": "39740ffbfd831e21d0f8829b77ee97e7",
".git/objects/6d/f71601d91c86d9dc86e9ca065523afa3b1cbe9": "fa1300d4e99a1f259073eac670b956b1",
".git/objects/39/f04476dfbe00d71142a63b04725b77a437cf60": "3100b2ad9547f2eb011414b9d3a5885a",
".git/objects/39/1300536e385aed8c7e3297dd3252de663f90f5": "7cf98f0b1f43b7ff5b3f7f12ed0dd3c7",
".git/objects/52/c81b19b26a844fea3a449ab2db42eb8bc67f17": "2270471c200d97906b1019d0ad65a845",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/97/0d7ffc0aa19d4887320c365a54b4f722717380": "59bd7e23603e9492590ad9023543e4f0",
".git/objects/64/2aefee70b936b486e7f6bf3306179722faf4af": "31398331c7f97b9cf531d9cc63bf57b0",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/cfb0201ae1a29f9290dd717bcafb59ffb13b33": "3a378a24b0cac8c760559b82c536eb39",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a92378b70bc291ee9fa6760e1dcf7f800c5094": "2ef303dfb8e982c4fc7f1357d7b3a603",
".git/objects/a7/d66ad3c16beda9c5b5a2b27dd0bb00959e5d7e": "7c145a394345f2fe79f3bc2a0953c0b5",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/8024d551b86d31796285e83bae45b6bb122d8e": "9a184f94e33e07853cb82865d7f64c29",
".git/objects/dc/890380984044cdc449ec11b66ccee20c70f013": "9d2efc14bdacb6367e1092864a1d0862",
".git/objects/a9/3c26bf1448067e137ae38d5aad5230edcd6205": "b2759eb6d4034c36344b4af14ed19ee5",
".git/objects/aa/176be1dea7b1dc9e012ef80646f48a143a07a0": "e094afd054aa8dc63f373c7ae4b81d09",
".git/objects/aa/ee90dc5917ca8cc38d7721f72dfa6b539a6f5c": "b956e272508e57be75e55f71a66fbdb6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/2408c80a7a43189f6eae1bfa50eb6d6713aaca": "7f8fe3edb11b3f8663e3d16f2140d958",
".git/objects/a8/6a156a87080cd4ea0b56c081ebc4c11edd784e": "c0c295066706cb66a02aed8e6fb59ace",
".git/objects/de/456bfdf9e2e216f40d39da09443d0a27231023": "66b4694f2d3a9ded23799e4b37b2fbfd",
".git/objects/de/8d82cdcaf1e026a97f11ed477dd3422d37fcef": "61f2503ec7cc855d76b88dff954de8f7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ff8ca16aad08480ca41eefe8c7bf83638aee94": "5bb4397181fdb300a78b4056c38a3186",
".git/objects/c4/3976c61df50b03565394d06cbb11a50fd0ea6c": "8383cd1a9c40c00d282ca79d0d6b0441",
".git/objects/cd/96813779b4c56764c99e0dbfa4113de494f4fe": "5055d0dff365ecd5ff86124eaacab2d0",
".git/objects/cc/3815b88170561e92766ab66aa8abc524d64e04": "278945723985d8943cfa0177abf3de81",
".git/objects/fa/12121537e600ca969c97ba1766542a7dad735a": "1d67f2f88a90c50828e1c94777c4a0eb",
".git/objects/fa/c6fd37e63881c4faa12e1ffb6bb28e9b4a1efc": "d4e7e58e6c810193b8dabca5ab824233",
".git/objects/c5/41dc0d5bb6e29bf858e1b91bfdaaebce95e488": "6ce1c49ebd9128a620977cf45bb6ee4b",
".git/objects/e7/114bdf8552dbb0292646d8d9b7c892a5f5c8ea": "8cf1d86179d4ad08f1de333f33d694f5",
".git/objects/cb/a6b89c4b3666db5e4fde28f2cee0c44b023ca2": "a7f06df8dcc3f4166d331b3883cbf613",
".git/objects/f8/d458a1c5543e3cadbd68085e2f35058f688e8c": "4139090508423182a84d3f08018c34c4",
".git/objects/ce/0540a7aa72a74795a783df5b0d9ff879e5484f": "0648f3bbc95906a7c97b24a4af8021c8",
".git/objects/ce/73152dcf9256ad5190b1bfb7b561d543600f76": "3e1fb5eab933fb28c37bf4d4f146f6a3",
".git/objects/46/afd5bbb8394d8ae3a452296882de4739824129": "49e179556c613d18ac0e31cf1475c220",
".git/objects/2d/02a6b0812587caad3947e52ad82830eb3bbf38": "9f34096e5b66db8a42bff4fe51183759",
".git/objects/1b/56f006c76b3e580a5f02a1c4accb9b7753871c": "fa6a412e075042dd1f91176d97155dbf",
".git/objects/77/3b8f69a2238d0c0c49a3a6532a613524b8b313": "492ff0bc696a8a82dc06e2e4847016e0",
".git/objects/77/22df9ca0d36b6ce79dfeb9f242b144fbbcf585": "3f1fee7980f73b8afbe48e7809916bd0",
".git/objects/48/2aa20a98679065d16182e9be239056eadc9d99": "f8640cdffbce947b0ba996a16a37b441",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/f9e576cac74c3ae92169f492be09e2fa3e79c3": "82ee22a935395ec44f4fd55e66e7117a",
".git/objects/23/7b15e60b8da61a946d2f3f557a0b1dae152c8e": "c57ce1b058e499c9cebd894b1bda1fbd",
".git/objects/4f/9785ddd2e803d3eb9a04c177462fa51bc8c5a5": "7dcbb712df08bcd6ceb26eadee2e80b9",
".git/objects/8d/f2836f6165c5df4be5b1e8ea10e2274d23f88a": "5979a148b620dfe7ce1333f73f47a1cf",
".git/objects/12/ca4de91b6538b326b2b12927036927c8b40a7f": "4fbaf3c5e887e3cf8714887b4da95257",
".git/objects/76/df245f478ff942c2ec14a9745d1a6cfaf32c4c": "b54b6dbadb424b60c0be725cad788806",
".git/objects/76/39692d20014c6304dc4dcd1aaca5d962ec205e": "7d8484a10a1076bcca8ad392dfa3716e",
".git/objects/82/b635243c10054a7bd9ba2f6a1425b78b34e829": "b4dc42ec6534297aed139ccc862b9e4d",
".git/objects/40/094bfcbd076eeb8851b3f34b8bc8a121d71e15": "7f138d6a497e4f2855156efb9ac433b8",
".git/objects/2e/4c972041f56edce86679e54d7f0494f6cab6c1": "014f7d0d49232c9c36fbfd4c8d29e02d",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/de58be53cf4e68602c6122efe105e17eb4d74c": "44774f7597e629a8483d46145cc21061",
".git/objects/2b/84b9a8ff786cdf4e82bdef12d8990ddd917c1c": "0178e997a11d2a0d04cccf1b205eaff4",
".git/objects/2b/5b991fb277dd0d356e5b11f35a3b68ffe7fe1a": "356e2b218a91513e0d4c8f7d663bf022",
".git/objects/47/eacb2e0e54644f03dae12c1316018e2be4e643": "2815a64d209bf892b9bb45671ba8cb1a",
".git/objects/25/8844a55bea2720b318a75e640092cd7a390b4b": "c010417e8d5f356c539ec75ca7765a98",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "927d4f2b16a9873823b9ff1238cd8835",
".git/logs/refs/heads/main": "927d4f2b16a9873823b9ff1238cd8835",
".git/logs/refs/remotes/origin/main": "731a0ec78a89fd365b51c6d9a804e5eb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "61b63c44c56aaae30cf936f3627fe813",
".git/refs/remotes/origin/main": "61b63c44c56aaae30cf936f3627fe813",
".git/index": "50fb15a3863adcaff7c64aaedf027577",
".git/COMMIT_EDITMSG": "68bc1b0caaaf7755d4660e1742ea76d3",
"assets/AssetManifest.json": "c2c87edab636e605087202058c583f19",
"assets/NOTICES": "1f2539266e0d24e7dc38efb5cb5c7af6",
"assets/FontManifest.json": "c78f6af764baa4346d9e3defec7ef0b3",
"assets/AssetManifest.bin.json": "f603a637a93e3ba328cfbbddff51d1dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "40da01f4aad5773ed97b32021b9fc7ab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "264ac4c454038f8a922b65755f53f6ed",
"assets/fonts/arial_bold.ttf": "142301adf4e0699237f9e11a77761d0d",
"assets/fonts/arial.ttf": "07d53b5b4d43b671764d7075be494019",
"assets/fonts/MaterialIcons-Regular.otf": "0f2e07035a7580e237a6c4e79e7fcb0e",
"assets/assets/images/blue-arrow.png": "ebe65a8526c8da9d1e97eefd8eb75ae8",
"assets/assets/images/fullScreenOff.png": "6cf018bb24477e88221887b033e8e69d",
"assets/assets/images/check.png": "dc0a5f7aa4b134c008c19c6b238ecca9",
"assets/assets/images/check.jpg": "df066218c21a2f77dac77106c5d3085b",
"assets/assets/images/mustbe.png": "e2dfa1b8db1f57098bbda5f0560c19cd",
"assets/assets/images/3Bars.png": "4c14dcbac9e63cd4ffa76855d9321817",
"assets/assets/images/pc_off.png": "a3edba5617f764145f79ac6a36e27245",
"assets/assets/images/no.png": "c34edc786f8108ea6a576937623a5ae9",
"assets/assets/images/fullScreenOn.png": "322fe5f3af8208f5a541310dd65594f1",
"assets/assets/images/close_bin.png": "28619237a241d34f969c7c3dac446ba0",
"assets/assets/images/reset.png": "669da2ec0c5e91e8696b2d0f0b799603",
"assets/assets/images/yes.png": "f7b40a5dbdbcc4a6cad68d048b21dbf9",
"assets/assets/images/sound.png": "58f9c052f330a26389b7b5ab8ec40f1e",
"assets/assets/images/trashb.jpg": "a148c1b0d94298c777fcea0b21905be0",
"assets/assets/images/open_bin.png": "3af24e7188a7c218adc59cfef23b2250",
"assets/assets/images/123.jpg": "44531d605e9d6c9ea5c3693e52f8395c",
"assets/assets/images/no_sound.png": "3f45d5ef2f2ef03f8e4b7a32985559bd",
"assets/assets/images/logo.png": "c84d805c02296d2be52ef099d4c561da",
"assets/assets/images/pc.png": "30f0ca49f09fc1d6769929e4227bb376",
"assets/assets/images/undo.png": "6a7e4060c03e03fc335e364182068629",
"assets/assets/images/colours.jpg": "f0b1c78211413176f7d40b76273efbfb",
"assets/assets/images/last.png": "98209f8fb6fc90f64a18b136e4c377a6",
"assets/assets/images/123x.jpg": "5aecab68167e0d2d9c96d4ae5d8a0a80",
"assets/assets/images/redo.png": "9e507a801f28a919dbc1c3e94e224692",
"assets/assets/images/dropIcon.png": "9936efb028dad8259ef3ce5ceb0e77eb",
"assets/assets/svg_images/eraser-svgrepo-com.svg": "df92e2f0931e2a2da793efac227c72d6",
"assets/assets/svg_images/redo-svgrepo-com.svg": "6af724c627cc9204aafe5a1c678d93d7",
"assets/assets/svg_images/cross.svg": "40c22658bf654de77a7e071fb1634b12",
"assets/assets/svg_images/undo-svgrepo-com.svg": "43cda4046d91070c321261248cc4ed60",
"assets/assets/objects/balls/rugby.png": "9075a7e9cba32cf36015b0243b7f987b",
"assets/assets/objects/balls/tennis.png": "9b83ef2e2de91876d2139e8948706efc",
"assets/assets/objects/balls/soccer.png": "d5566b4c5e3df2860a72c8db07ca274e",
"assets/assets/objects/balls/basket.png": "7af5acb4f4257e31b28b65623990df22",
"assets/assets/objects/balls/pal.png": "8ccc8676350525508f5a9caea7c8a05b",
"assets/assets/objects/fruit/fruit3.png": "891725e225ca194b41d28110ea72d659",
"assets/assets/objects/fruit/fruit2.png": "bc51476633f6b0ee68ae2b857ef066ef",
"assets/assets/objects/fruit/fruit1.png": "24aeb030babbd816a7705aafba989a75",
"assets/assets/objects/fruit/fruit5.png": "0caf0d89fccd3cb76ddb9b054dc6f9d6",
"assets/assets/objects/fruit/fruit4.png": "6a59a6fc1c882a99b51b34171f81a976",
"assets/assets/objects/fruit/fruit6.png": "a71a21fd28fdd6bafa3c8bc77e84ac75",
"assets/assets/objects/shapes_geometric/ex.png": "8fb71065eeea5582eb0af0b269a86376",
"assets/assets/objects/shapes_geometric/rectangle.png": "cd525d30243f3c2fac04c2d09ce90212",
"assets/assets/objects/shapes_geometric/circle.png": "1232ac8e9c95093427fc2a2cca814578",
"assets/assets/objects/shapes_geometric/triangle.png": "c8ba23f91c683083f5849d2aedcdbf28",
"assets/assets/objects/shapes_geometric/square.png": "9bab90c92f4459c460373f671df36da3",
"assets/assets/objects/toys/colored_ball.png": "22a569f58c6f673c9262806c93f26f48",
"assets/assets/objects/toys/doll.png": "ae7035a112aa2ae5ceac4402ab5aec3e",
"assets/assets/objects/toys/robot.png": "2d28ff13a2ad67bf6eee137aa3667e17",
"assets/assets/objects/toys/car.png": "255e264be5e5153dc5dd242200ae3076",
"assets/assets/objects/geometric/ex.png": "8fb71065eeea5582eb0af0b269a86376",
"assets/assets/objects/geometric/rectangle.png": "cd525d30243f3c2fac04c2d09ce90212",
"assets/assets/objects/geometric/circle.png": "1232ac8e9c95093427fc2a2cca814578",
"assets/assets/objects/geometric/triangle.png": "c8ba23f91c683083f5849d2aedcdbf28",
"assets/assets/objects/geometric/square.png": "9bab90c92f4459c460373f671df36da3",
"assets/assets/objects/shapes/home.png": "4641b164cd3454b701273b9cdab6d8f2",
"assets/assets/objects/shapes/arrow.png": "8fb5f2152817673f184422931e70247c",
"assets/assets/objects/shapes/cloud.png": "dca8c71296b4703d147bbe43eba718ea",
"assets/assets/objects/shapes/star.png": "a069cabff7541c97a5907caaafa83caa",
"assets/assets/objects/shapes/hart.png": "9204b272efdd44e2ef5a295a1fccb17e",
"assets/assets/objects/animals/dog.png": "3a49377d9bc0f63bb6275727041cdfbc",
"assets/assets/objects/animals/scimmia.png": "a5c3764714e98768f3a7dfdd232fb18f",
"assets/assets/objects/animals/cat.png": "adc3e511501ccaf125848219e9c72166",
"assets/assets/objects/animals/tortoies.png": "1efcb6ebfc8eca7962192278ad4af7ed",
"assets/assets/objects/animals/crab.png": "3ffa72b43920e01ab441051e8cce67c7",
"assets/assets/objects/animals/fish.png": "0dc65cfa9ef9c66f0ae2db2500cff1c7",
"assets/assets/objects/figures/home.png": "4641b164cd3454b701273b9cdab6d8f2",
"assets/assets/objects/figures/arrow.png": "8fb5f2152817673f184422931e70247c",
"assets/assets/objects/figures/cloud.png": "dca8c71296b4703d147bbe43eba718ea",
"assets/assets/objects/figures/star.png": "a069cabff7541c97a5907caaafa83caa",
"assets/assets/objects/figures/hart.png": "9204b272efdd44e2ef5a295a1fccb17e",
"assets/assets/objects/insects/insect5.png": "a7e8edde00a9bf24642bacc59a8f57d3",
"assets/assets/objects/insects/insect4.png": "cbc7bea89a4b188a49d1292af2604c53",
"assets/assets/objects/insects/insect6.png": "d86c2906b523f27e17f59e091fdcf0c6",
"assets/assets/objects/insects/insect7.png": "b0c62c56c29d8d33dc1ec062a663b61d",
"assets/assets/objects/insects/insect3.png": "bb1a9686dc882adda1a945dee1a17eed",
"assets/assets/objects/insects/insect2.png": "e5ba4a18ddd0a35a4be5b2888ac17bb1",
"assets/assets/objects/insects/insect1.png": "0f5dbda6876349be3fec5c7524e10cc6",
"assets/assets/objects/insects/flower_1.png": "a2249fbb2c7bbdeb1cf7bdcbb41e5b8a",
"assets/assets/objects/insects/flower_2.png": "8511792ad81140504efb8fd2fb30c77f",
"assets/assets/audio/Trash-bin.mp3": "8f5cde0d1cca64672216ca9a64943355",
"assets/assets/audio/applause.wav": "d2586314f523c85fc4909a9e487a7006",
"assets/assets/audio/click.wav": "36dbff7b5d1fb79d9a42ec8029471149",
"assets/assets/audio/missed.mp3": "1b3c1087d9df0e0e68180a4a0e21a52a",
"assets/assets/audio/Wrong-answer-sound.mp3": "41ef5267fb87705b2ac94a030f1ce981",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
