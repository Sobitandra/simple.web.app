'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "af4a5000015ed97800300df57b726b4d",
"version.json": "1dd8c90fc22752096fcb5afe0f3acdc6",
"index.html": "551469b777e9ec50d608e9468834738c",
"/": "551469b777e9ec50d608e9468834738c",
"main.dart.js": "159538cbe9f098515fe7fe3727d42dcf",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66214d5b2e3c12a18dd3000d28b1ff25",
".git/config": "231b8fb73b538a98a7d1b05a514ed8fe",
".git/objects/95/3b49ca0cac9705d6ba2c5c4b838bfbea317ded": "2e3d12fcb388409c2dc64382590c0fa8",
".git/objects/59/526c71ebf904c33b975883d5f3bf06c2502895": "b3341c0acaf2ee01faee6d9363ef137c",
".git/objects/59/5dcd32fab36166c71c723860fea64225e3da6c": "694218261f542d1a60a80d050a42da37",
".git/objects/59/dff3c4ed3c67e20be356e964e768fa55d86352": "401405dfeb1a3a8268e0510a00df7193",
".git/objects/04/ba46fbb30f0161ac120c60763974c32847eb92": "bd1ef93276d47b20e81339e0bf1bd9fb",
".git/objects/35/e394508ea969155f8c3657c287df8f4555f33e": "6332defd19054d9b7e48984a32262152",
".git/objects/35/ea39912d17aa8bcfdb3c793b2535532bb75f9c": "dfb878506d726211623237f1a6897ae0",
".git/objects/35/b43e3aa3c67c3011baefb13738cbce2d895afc": "e81c934592bb27880b653fe4106f5bdc",
".git/objects/3d/8e9b75dbce6a273935f68589ec0aedb98bc385": "0220f2b83192c5046288f1f03e8f973a",
".git/objects/58/9dbec6ef64628e71e9c7ef8fdd1ee7a9eabd4d": "e0100fddba5441b29ad786a002a03e74",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/786aaa29ba966bea9dc5b59b779241248cd66c": "a8c076fa6d0f5ff66417feb7b700cd68",
".git/objects/93/50a36a2ec3fddc4bb5eea0904aca83efcd0d95": "33f75c0f05ef2d8b75010d8829a984ba",
".git/objects/94/e86da3857fff7baa5d9eb401fd6915e153fbf7": "8cf05b7a14515e71e1b2c9a19732ef02",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/0e255d0140b07a15ea0371695c25c02087f368": "18bb485de059e15a7e27f1fdbdef9391",
".git/objects/0e/791aca4b3f87a4e2f605704b1427e439e4bb3a": "948ec105a1f79fe3d4fba7f60e58c169",
".git/objects/60/64fcfbef077b969c4eb5dadddf4ca3f764ff60": "79e84959e6bba23c474f55ed5304c23f",
".git/objects/34/7b7364c61fd54d9d8f91b7123f818372754a3f": "0379936c1d0ba01becbfb76bbdf97209",
".git/objects/5a/a730569e782d525196d145c738eeafef18f4d9": "8927ab91081ea0f9c225c95ded7a5c1d",
".git/objects/5f/bc8fc600401ac98a695982a840f84cddaca522": "fc610c2fea7ded9a68d0bdd67ed17623",
".git/objects/05/8068c08a38f6bb83fb94dd86431f8dc8f3038e": "a281e20a1c65a46dba43942db3ad0805",
".git/objects/05/9615f9c2204328df8d47d1005bf2b529bcbb3c": "c0717de94b575970823f100540aa28c0",
".git/objects/02/8d616708ddbcf4bb8709bcfd7240cb92559e45": "eed7f2fc92baf7bb5bcc18b46cffecb1",
".git/objects/02/053a9a81223794543b5ed2c12aa5e6d089e053": "882e0f69df51e933e012a002e5b2c99a",
".git/objects/d9/ec1a04c7e9ef1225516951ec87f6552282014a": "3452d9d099672e8bf0fa3e349c14dcae",
".git/objects/d7/1e006510f125726a3c9009462ab55c817c9b03": "c1621204d93b54c7fde21f7f92c5ec71",
".git/objects/d0/45bc21fe820a7b0c0db2f33992f812f343e0dc": "3531850714de0050083e616c2cef0a88",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/caa0b6ec82717343d575320586e860373c7ccd": "4cad02433362ba89a2c97af3a336557a",
".git/objects/b4/a5a2c13f3c63502ff92b24788c57691ec91fa2": "a50b207c598ec0e194d3a3183a868251",
".git/objects/b4/c1bd1270551f77cd7866f8e8dbb7f08aa928fc": "50c31c01ab505278a0ccee7a98e97d12",
".git/objects/a2/9f6fba467d059009fae9fee76dd6182c6fe527": "85c499adfab62b83b6ca67ff697cb281",
".git/objects/bd/921eda8009d342a904cfcc41a73d9ac8835d43": "7f411edf275ddc570bb90b98da3b105e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/73338b021029be83fd9601b5ea4534c0962ae0": "5dcef68013f4496c2afe31b0889ef843",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/59d4272038e0944eeb5082f99173019ec660d3": "0a6cfc382810e8188dde88aa44190214",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/ab/4080dbe87a21150cbcbf61feda0946b0f37a41": "6f2bf37e050db1dcdf6b7922aea8b901",
".git/objects/ab/68fb197d4479b3b6dec6e85bd5cbaf433a87c5": "ca2fa121978d3f2f4eb4609d4ad0750d",
".git/objects/e2/890d0bb402c503ff8521e75c9b6275d2b7b33e": "e0cd615a830c54a32e4e4b9d6f6748f3",
".git/objects/f4/8c8a5eea3ff6bfdb2497b9ab0a4d07508f5d5a": "d8da7ca1ef18ace39c232717ced8344e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/c09342f9293c60e165d9402b1de144a586f4a9": "5edcfe3d4e2b21a75589780db400e5a0",
".git/objects/c0/ac53d25d2523498e683223f8ceffa6ea98022c": "ebf4206de39f7aecab0cb3401ab12fcf",
".git/objects/ee/eeb7f3adceff9d60df95b04d36a0300223ef1b": "e3aaeae801df09544dbf13dc5c21bc03",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/1b08245157dcdf9b7fb0344096788b9d61341e": "93f3970dcc92be33f7e48a1ae1a1a6a2",
".git/objects/fc/415784789a79b9518f3a26f85dd573ff1a93f7": "b25676f8be98bab81845be70d898e24b",
".git/objects/fd/8adac0244b796de485d754e41a737b562ec3aa": "13bd45b138a4fc1f265c755dbaf98004",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/096ffe2e43fb33f71d0676cf1d9754bbddccc0": "6fa195a83a7b8c0c63595e1172fa1c1f",
".git/objects/cf/2df0faae2289b5859545bbba687c0f17cf7cfa": "0d722f7810a1334ad4910704476e4043",
".git/objects/ca/b082557ec472c0e212150a817b1c5ad56a226e": "f3b8e5f8f72adef0531aaee3c54a0cbc",
".git/objects/e4/f65b90fb6ea00aa99a172b227a0f29747a3279": "18e30b5a4713ac16adb6ba8545398253",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/fb/063dfdae465eda5a4fcbb3b4d0f1992462427e": "bcfdfb35c7c0fbc0d0006d5aa27bc3dd",
".git/objects/ec/e526d2a95955f67aead901ae4ef1ead4a25e1e": "6943c3b96852dd2dd1f8489d09f46677",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/5eff243896219ba7e1a293e28ca6a2adb385da": "0ad833b96bda4439d8fc034f1dce9e0b",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7d/84003f837e0e470c2b07a9d78517ceb7e960dc": "0a3d08eda7e4a9852e7778b767425c54",
".git/objects/7d/d7aaecdb89d4ee792526465b5ebfdb1f6dd6d6": "a46bc3bce3782ef1a216ae749bc8e92b",
".git/objects/7c/afefaea9f8d4d576da87ea07f72d85c7e5bd58": "bee73a33895bc0b96cc74fbbd426c368",
".git/objects/16/235a552a16a7ac30440df33d50ba7748d06499": "15c49c1b3b17911142b86bfe709bad8a",
".git/objects/87/ffc19d5fce371df2ce01616bd6b3e704806be3": "9faebc87d11198d5b648edc071116254",
".git/objects/1a/4d2bf6358b47c689ee12e31b81c8ef673e6703": "3c4a38c8ea1bef19c9629ce9c658541a",
".git/objects/7b/f02ba2ba0279eb0ff43d32359a7890cb3d5830": "4960857a29a73b78412e6c02c5780952",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/1545597b7e1e3e24900982efcff8e12bd3188f": "3587fa30ff4fe2da20a91e2b11ead50c",
".git/objects/2a/a6144c2f6f1b536b83f87d21e8b49d5983d3cc": "816dff584a61b6c9cb508fed56562255",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/b702749f2f15567f58e7a62b978293965bbee7": "209a044887c5273d519d800bbb8d4cfa",
".git/objects/38/1dacc364f514d248716f832e5d28cd8aaf834c": "a40b73142018627b3e67273796e0f2bd",
".git/objects/38/63dccb112a936d68e610c2357ab72404629f24": "7db8409c5daa06804d4967b7a46c3f85",
".git/objects/00/8256f046080605ef81733db74302b7b4d9f288": "5b25335354cba99b2f37db0d47b85e15",
".git/objects/9a/7a6c844aaaaf841768d5caba079462918878be": "866b8f3516d627bf31a5ddc9d877872a",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/a23845547e8cd1a46a9c4973bcc3d2d4512e46": "76b28346463d82ae4fa67def9ea49cfe",
".git/objects/31/070408b3a88dedf7ef713cc62aa3fcba74462f": "fb6578da343f625c7b0b5a2c84909ba9",
".git/objects/91/f086a34572e9518c6573cd3d19aae91aa5af5c": "a3eff144f05bb0a3d775836f00f396b7",
".git/objects/65/4e20b03fb438b264f5e66098909b39dbf4984d": "11f41d37f3b6a9887bbb5b6e6edbf6dc",
".git/objects/62/2522545479168d86886d905fc1839315eaee15": "18491b8ad6fc74746a7a9a0e7999f20a",
".git/objects/3f/e8daca5957770202d684b3a6d55d4e3f6c5c92": "22e67ae926c86f8a40765afdba37b673",
".git/objects/08/17df4e42206ada001ffbd6b79c94390a07b37e": "0fd6a0f4b63b670f5c42bbe81a102a13",
".git/objects/08/be0ee01ddb6b2fcf3e936373c81a8cbf73cc12": "bd2853c6b21282a6591299c08914b5e9",
".git/objects/01/82db5321f8057ce29fe90bf598d743040e79ce": "618ace0fb0325928ba155f7f0675675e",
".git/objects/39/1300536e385aed8c7e3297dd3252de663f90f5": "7cf98f0b1f43b7ff5b3f7f12ed0dd3c7",
".git/objects/52/5d6caab2e82244e978f119080e3ea70defc6de": "8f78e48ce865934f654ece8c0e117537",
".git/objects/97/0d7ffc0aa19d4887320c365a54b4f722717380": "59bd7e23603e9492590ad9023543e4f0",
".git/objects/97/a8428571a9da404d9c92986eaa91499783abf1": "93a9144686978cc3b97ae0547dc1aad9",
".git/objects/64/2aefee70b936b486e7f6bf3306179722faf4af": "31398331c7f97b9cf531d9cc63bf57b0",
".git/objects/64/b783ac6e41acd769d0471b59f2129564335853": "53ee671c274048e7bbf64860205b7734",
".git/objects/64/5df8b7ee398c288d1d2794376c1517c2201c7f": "3ff702c168ec020c718c3e3a7dfcf673",
".git/objects/64/dcd59ce657fa258945df05b537a7d1c753f606": "0bd9b5c453d31a80af3de3856c32fda2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/e5c12bc7259361ba7c3074dce982a94782c9b8": "7c8595bdfb8e9f559b5f9be33f2b384f",
".git/objects/a9/90918654b59a523195fc9cbece774fedca59f0": "bb5087bae359b37cdc64f5d6b57fe071",
".git/objects/af/41d341af98f3edf692e151e50daec57752919f": "6db702723f20ca2898b370621b68bee5",
".git/objects/b7/f18372ae06c55750e883379dfdffe9c7cd7542": "d011535662f7435847beaae5b4dec39a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/8d82cdcaf1e026a97f11ed477dd3422d37fcef": "61f2503ec7cc855d76b88dff954de8f7",
".git/objects/a6/8da2fe9e9a1f63c94fb4a1bb08fd123b510e80": "04c59be6cd6556a9093e1cfb266a962f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/3976c61df50b03565394d06cbb11a50fd0ea6c": "8383cd1a9c40c00d282ca79d0d6b0441",
".git/objects/e1/b1ad6301a58c3906a9f6e2d85870bdad4d8988": "6b82359c89e54e5a57c3026f5b1f20e7",
".git/objects/f9/c6ede0f78cc1d39e90681718365835a6824440": "738f3b5b5fc0c54e371fd65e5de42669",
".git/objects/e8/da1340ce5c1984d7e8a76bf1131ec3f85b3095": "5ddc69df0f3d7f006e49649247e757f4",
".git/objects/ff/f267f28d9eb6bfea7be8c626980c94f0687c42": "56f9a2ecce76fa2bb4e2ecbc6d848865",
".git/objects/e7/d642bf5434dcd23c187c017e0cf1493a22897d": "237b217a377d73149a6259b8c5e69290",
".git/objects/cb/7dd7ba8050a74fbb020392cfa912b1b84b4979": "e0a630fdf035ea3770e927caeff693cc",
".git/objects/f8/a107117cd4e6f79c7277cbc2c43fc37d01d07e": "217f0ef79ee41f0fc8d3369d3e0b7ac5",
".git/objects/f8/d458a1c5543e3cadbd68085e2f35058f688e8c": "4139090508423182a84d3f08018c34c4",
".git/objects/f8/e94ca6f73467cd9617c7c18a54608c7acb277b": "f42edae4615ba53cb5867e91b176c702",
".git/objects/ce/984d080d3341e3460a2a6190fba526244b5b76": "848d5f2893add50e727792e6c872e1a9",
".git/objects/2d/6e21ffdbed93ad1cbf6e664f5d502e20f21d5d": "30e03daf39d02847536beddc3bd729a1",
".git/objects/1b/56f006c76b3e580a5f02a1c4accb9b7753871c": "fa6a412e075042dd1f91176d97155dbf",
".git/objects/77/3b8f69a2238d0c0c49a3a6532a613524b8b313": "492ff0bc696a8a82dc06e2e4847016e0",
".git/objects/77/8303d791a641bbe7e92f9507cb8624b5c8e280": "030c1dbf158a612becff7d9e481910be",
".git/objects/4a/8fa5b3ec8aad3eb50e30692d31aa016d2183a1": "511065f1cf7b86e3c03c4ccd25366d40",
".git/objects/4f/9785ddd2e803d3eb9a04c177462fa51bc8c5a5": "7dcbb712df08bcd6ceb26eadee2e80b9",
".git/objects/8d/f2836f6165c5df4be5b1e8ea10e2274d23f88a": "5979a148b620dfe7ce1333f73f47a1cf",
".git/objects/71/b1ec654d53be1e79c165e9eb38d351a1b218b9": "733799ccaa80ad2dd3adb275e33610c0",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/e09d83a2bf6daf19d1cc514ce360530e101112": "a7b75b25fd8c325c2798ba1d0f98ec13",
".git/objects/2b/5b991fb277dd0d356e5b11f35a3b68ffe7fe1a": "356e2b218a91513e0d4c8f7d663bf022",
".git/objects/47/eacb2e0e54644f03dae12c1316018e2be4e643": "2815a64d209bf892b9bb45671ba8cb1a",
".git/objects/13/1dc22a26c7a3ffd05f69b9d38095caa60ac8a5": "1ff446f0cf4f69e83e8adcadefdc196a",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "726889142a4458977ae79d2f3e72de0d",
".git/logs/refs/heads/main": "726889142a4458977ae79d2f3e72de0d",
".git/logs/refs/remotes/origin/main": "92b3538254183394f021cc6fe82247ff",
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
".git/refs/heads/main": "c13ddd4cd0478915b645c9ec9250890c",
".git/refs/remotes/origin/main": "c13ddd4cd0478915b645c9ec9250890c",
".git/index": "cba2c41f204178969b75cdbf68a5353e",
".git/COMMIT_EDITMSG": "68bc1b0caaaf7755d4660e1742ea76d3",
"assets/AssetManifest.json": "59cfc8daf7a511c86074d7f8dd0b3748",
"assets/NOTICES": "c155dfaf69118ec3a7cac153f6fb6c5c",
"assets/FontManifest.json": "c78f6af764baa4346d9e3defec7ef0b3",
"assets/AssetManifest.bin.json": "0525eefe7cbb7d68d6ee6cdd7f9c61a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "40da01f4aad5773ed97b32021b9fc7ab",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c2874d29cbc2e8b7b88c3393c94a1518",
"assets/fonts/arial_bold.ttf": "142301adf4e0699237f9e11a77761d0d",
"assets/fonts/arial.ttf": "07d53b5b4d43b671764d7075be494019",
"assets/fonts/MaterialIcons-Regular.otf": "0f2e07035a7580e237a6c4e79e7fcb0e",
"assets/assets/images/blue-arrow.png": "491c60bb89069e4e53e8dfdf9fc53c5f",
"assets/assets/images/fullScreenOff.png": "ce711d7099fc32483479fd20fefc3de5",
"assets/assets/images/check.png": "02a707f58661843c13196ab60dface5a",
"assets/assets/images/check.jpg": "12b4dd7e94118c8de6424be069401fa9",
"assets/assets/images/mustbe.png": "9728dcb9638f626f3c690dad9b1a57f1",
"assets/assets/images/3Bars.png": "996bc9733ff0c31e2f56ee2f23364e81",
"assets/assets/images/pc_off.png": "03fa82fa73174893703eb3e124400a23",
"assets/assets/images/no.png": "3a804f2e7a6cf1528add836a74382310",
"assets/assets/images/fullScreenOn.png": "541d3dd2975569d89492d616b772700f",
"assets/assets/images/close_bin.png": "e7d755b7e38fb126a16ba327b75ed934",
"assets/assets/images/reset.png": "669da2ec0c5e91e8696b2d0f0b799603",
"assets/assets/images/yes.png": "2e2e01553e27bad778d1635ab042a8db",
"assets/assets/images/sound.png": "58f9c052f330a26389b7b5ab8ec40f1e",
"assets/assets/images/trashb.jpg": "a148c1b0d94298c777fcea0b21905be0",
"assets/assets/images/open_bin.png": "2cf0225bda341587ee9e2215736c7ecd",
"assets/assets/images/123.jpg": "23e72832989bfc7c6e3a2ef66f3d1ad3",
"assets/assets/images/no_sound.png": "2ea642b67d32254adbfc9e2def887e99",
"assets/assets/images/logo.png": "8775a5bf2a56e2565b1ff5874b84c3a4",
"assets/assets/images/pc.png": "0eb27d705642cfa1b9061d614b32760e",
"assets/assets/images/undo.png": "6a7e4060c03e03fc335e364182068629",
"assets/assets/images/colours.jpg": "18693e01345fd6559a5379bb0d307873",
"assets/assets/images/last.png": "34239103561819b5b6b8a197fd9e99d6",
"assets/assets/images/123x.jpg": "2742a27243d2e4c99f6aedf7593d7459",
"assets/assets/images/redo.png": "caa119eb97c7a98597edc58e978ac2d2",
"assets/assets/images/dropIcon.png": "1a8afde746fa3352be739a7fcbc0f14e",
"assets/assets/svg_images/eraser-svgrepo-com.svg": "df92e2f0931e2a2da793efac227c72d6",
"assets/assets/svg_images/redo-svgrepo-com.svg": "6af724c627cc9204aafe5a1c678d93d7",
"assets/assets/svg_images/cross.svg": "40c22658bf654de77a7e071fb1634b12",
"assets/assets/svg_images/undo-svgrepo-com.svg": "43cda4046d91070c321261248cc4ed60",
"assets/assets/objects/balls/rugby.png": "523ef8b2d7739a1b56f1849f47f427c7",
"assets/assets/objects/balls/tennis.png": "ac8b4d78f25e27f67e79e8521abb875b",
"assets/assets/objects/balls/soccer.png": "4168b10748fa9805d837224139d95a14",
"assets/assets/objects/balls/basket.png": "f32ae3050d4ac8b3355e9aae77ac43b7",
"assets/assets/objects/balls/pal.png": "a99d22801dbaa5bbdffcf19d87e3bb44",
"assets/assets/objects/fruit/fruit3.png": "925419123eb2be1570a8fda6eeb30411",
"assets/assets/objects/fruit/fruit2.png": "030fa7cbc67db9d46ad4db246d7b212b",
"assets/assets/objects/fruit/fruit1.png": "450d734ce2751a9aea99aca4fa933fbb",
"assets/assets/objects/fruit/fruit5.png": "3ac3049c11a2f827e42cb3b9d900b60a",
"assets/assets/objects/fruit/fruit4.png": "5098729b3a77c2d721e0aae5d385a8db",
"assets/assets/objects/fruit/fruit6.png": "a3b71ab3928f3131b3b36b8d47e82170",
"assets/assets/objects/shapes_geometric/ex.png": "8fb71065eeea5582eb0af0b269a86376",
"assets/assets/objects/shapes_geometric/rectangle.png": "cd525d30243f3c2fac04c2d09ce90212",
"assets/assets/objects/shapes_geometric/circle.png": "1232ac8e9c95093427fc2a2cca814578",
"assets/assets/objects/shapes_geometric/triangle.png": "c8ba23f91c683083f5849d2aedcdbf28",
"assets/assets/objects/shapes_geometric/square.png": "9bab90c92f4459c460373f671df36da3",
"assets/assets/objects/toys/colored_ball.png": "72156b8ab27aa374a338f10d8df8db1c",
"assets/assets/objects/toys/doll.png": "754bc18a90ca6e40fbaaefd9774a98a7",
"assets/assets/objects/toys/robot.png": "160b985916ce743d22bf18b7badf28a0",
"assets/assets/objects/toys/car.png": "9e6770cee2c5f64c2b04090413ee28de",
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
"assets/assets/objects/animals/dog.png": "3bc3ce387cbe72e27e2d6990d5333fa1",
"assets/assets/objects/animals/scimmia.png": "a6bd5e3278c1ab05acd6406e0147a265",
"assets/assets/objects/animals/cat.png": "1e9170b62c0c36e00d6a00f2e48edad0",
"assets/assets/objects/animals/tortoies.png": "1152910ee0fd2d393ec368d951d42864",
"assets/assets/objects/animals/crab.png": "8fc4727672b8a552efe1dcc6454e1ebe",
"assets/assets/objects/animals/fish.png": "4c7ca2e77f941af7dda59efc33d3098c",
"assets/assets/objects/figures/home.png": "4641b164cd3454b701273b9cdab6d8f2",
"assets/assets/objects/figures/arrow.png": "8fb5f2152817673f184422931e70247c",
"assets/assets/objects/figures/cloud.png": "dca8c71296b4703d147bbe43eba718ea",
"assets/assets/objects/figures/star.png": "a069cabff7541c97a5907caaafa83caa",
"assets/assets/objects/figures/hart.png": "9204b272efdd44e2ef5a295a1fccb17e",
"assets/assets/objects/insects/insect5.png": "233c229559839254b14f9d9d3b7ad20c",
"assets/assets/objects/insects/insect4.png": "a81ee65c5016032fa0be929caab8340f",
"assets/assets/objects/insects/insect6.png": "512c5701dbe86eb61bf298e5870f5af2",
"assets/assets/objects/insects/insect7.png": "9ec9eb017674c382f31cade9a849390d",
"assets/assets/objects/insects/insect3.png": "a303f6135951f330bd5f1a8078cbcd30",
"assets/assets/objects/insects/insect2.png": "04c11669eee4a76803ac5b1ab34f6d2f",
"assets/assets/objects/insects/insect1.png": "9e9c322015c5dd0ef26d2c25d3b38db0",
"assets/assets/objects/insects/flower_1.png": "e937e4ede4a8a83c5ecfa6accff7a800",
"assets/assets/objects/insects/flower_2.png": "c431708234603700155b85b9999df23b",
"assets/assets/audio/Trash-bin.mp3": "8f5cde0d1cca64672216ca9a64943355",
"assets/assets/audio/applause.wav": "d2586314f523c85fc4909a9e487a7006",
"assets/assets/audio/click.wav": "36dbff7b5d1fb79d9a42ec8029471149",
"assets/assets/audio/missed.mp3": "1b3c1087d9df0e0e68180a4a0e21a52a",
"assets/assets/audio/Wrong-answer-sound.mp3": "41ef5267fb87705b2ac94a030f1ce981",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
