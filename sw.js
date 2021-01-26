const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "fogsail"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"cb2b0951b716a031d1dde1cc035d9fe6","url":"./2017/01/29/20170129/index.html"},{"revision":"3708d8306a45b49f3ab08557ada7c02c","url":"./2017/01/30/20170130/index.html"},{"revision":"009edcd6c29cc59baec2e6684e9b0bdf","url":"./2017/02/02/20170202/index.html"},{"revision":"f1ef84c3276fdb5e4e6501292f100412","url":"./2017/02/18/20170218/index.html"},{"revision":"f803d235fe13a8e15891d9bbd09a4a99","url":"./2017/03/05/20170305/index.html"},{"revision":"8b41e293ae2dd85c17039c22af560035","url":"./2017/03/06/20170307/index.html"},{"revision":"ceb0d2fee29d62d4da4eb2687dbc60c7","url":"./2017/03/12/20170312/index.html"},{"revision":"aa2d0e67dad90495718271f41e28dabd","url":"./2017/04/05/20170405/index.html"},{"revision":"e3b220c611a7d4dd7a8c8f168be43e5a","url":"./2017/04/16/20170416/index.html"},{"revision":"1d03a5a6af0ee212e4fe16a2a9f626f9","url":"./2017/04/19/20170419/index.html"},{"revision":"dc5feabb5bbab4b2f75c664dbd2f6d6f","url":"./2017/05/08/20170508/index.html"},{"revision":"6a64d91a269e9b98bc445f68255355d2","url":"./2017/05/12/20170512/index.html"},{"revision":"b27294b2b8477e06b086e7a429927780","url":"./2017/05/13/20170513/index.html"},{"revision":"66e147a851cad823cde51ee3996be846","url":"./2017/05/23/20170523/index.html"},{"revision":"4dd81802c35cf4f0040fc6ebb9e72b84","url":"./2017/05/29/20170529/index.html"},{"revision":"441ff3c877ca9ce6f1aa8c6b2b1ca7f7","url":"./2017/06/26/20170626/index.html"},{"revision":"edf9b9e37119aa7c5b97e5a765e883cb","url":"./2017/06/30/20170630/index.html"},{"revision":"e141770466cadaa033b092bc28f99423","url":"./2018/02/04/20180204/index.html"},{"revision":"3049885a864fa02ec91e3fd84986f975","url":"./2018/02/06/20180206/index.html"},{"revision":"bbdae411f9c26c1b2f07394ba531eff7","url":"./2018/02/22/20180222/index.html"},{"revision":"b270e504cbae1517e840013ac48bcd96","url":"./2018/03/03/20180303/index.html"},{"revision":"84989a5497cf158041fb2ed2baa8beee","url":"./2018/08/23/20180823/index.html"},{"revision":"8a8870831b9f54a6d6b236603e65e6d8","url":"./2018/08/24/20180824/index.html"},{"revision":"40c9aabab4d314136c37cbbca68bf458","url":"./2018/08/27/20180827/index.html"},{"revision":"2dc04583d1a5a39dae8f0cfd772d256e","url":"./2018/08/27/20180828/index.html"},{"revision":"798661831ccbb94c4e232ca95e709f29","url":"./2018/10/08/20181008/index.html"},{"revision":"2d53762ae112929df7c71e89129d22fe","url":"./2018/10/24/20181024/index.html"},{"revision":"13ae85619f31780e77260f8688c4f910","url":"./2019/03/06/20190306/index.html"},{"revision":"87a24471e1491ac5aed7a4238d1f7e4e","url":"./2019/04/02/20190402/index.html"},{"revision":"30163aecd6a21b96e8b6be4129b73895","url":"./2019/04/03/20190403/index.html"},{"revision":"a08dab3b2338e2e5e5d10fcf4834fbd4","url":"./2019/04/21/20190421/index.html"},{"revision":"a7d66a50759773f12062d9db970378c8","url":"./2019/05/03/20190503/index.html"},{"revision":"29dd3d13b17b64a46b5e2d1e6c24623d","url":"./2019/05/14/20190514/index.html"},{"revision":"cf1ede6588781b64da1020ca41743d5b","url":"./2019/05/19/20190519/index.html"},{"revision":"f779b9bd62b83e2e002eb309c0a8e44f","url":"./2019/05/21/20190521/index.html"},{"revision":"ddedf196ea1de9cf46448ac625fc11a4","url":"./2019/05/24/20190524/index.html"},{"revision":"7565307f85667ffe5b378b3103359c11","url":"./2019/06/20/20190620/index.html"},{"revision":"23b0692784efd9f4904bc25536fc15cf","url":"./2019/07/07/20190707/index.html"},{"revision":"0f863cf8175f941d8a7097cb021b89c4","url":"./2019/07/08/20190708/index.html"},{"revision":"24e967130c5694c2fb564331c48bc87d","url":"./2019/07/23/20190723/index.html"},{"revision":"f451b4a59afc4b47f9cc833c7ab2b0de","url":"./2019/07/29/20190729/index.html"},{"revision":"f3e085dbf366f64c5701ffdea9e18e1b","url":"./2019/07/31/20190731/index.html"},{"revision":"9ac60420158acc943b2bb1b5c7c233a0","url":"./2019/08/05/20190805/index.html"},{"revision":"73fdb8055c9a0cd1a0c29eb30ae59dba","url":"./2019/08/09/20190809/index.html"},{"revision":"a2fe4229cc12a1df7d22adafa4f3a550","url":"./2019/08/13/20190813/index.html"},{"revision":"6082eb9f7ccaa98b9de89d6816a4b62d","url":"./2019/08/26/20190826/index.html"},{"revision":"f86fbf86317c8074ae82220052cd7f7c","url":"./2019/08/28/20190828/index.html"},{"revision":"1e30b46065d953709d726cc02abf73be","url":"./2019/08/29/20190829/index.html"},{"revision":"9498aa48ac5de7662729a16156e30c60","url":"./2019/09/09/20190909/index.html"},{"revision":"de72f0b3c6bc5e4418e63806ba078ac5","url":"./2019/09/10/20190910/index.html"},{"revision":"6deb53420d6b05265ff777c79a998071","url":"./2019/09/15/20190915/index.html"},{"revision":"b9421bb4dc22a5aca29b49dc584d49fd","url":"./2019/09/20/20190920/index.html"},{"revision":"30264638c197d25135ae21fd2d9f4093","url":"./2019/09/25/20190925/index.html"},{"revision":"260323a3de02e82ce51a2a8df99bbc93","url":"./2019/10/17/20191017/index.html"},{"revision":"74e94112036d5a38801f9c524aa532ac","url":"./2019/10/22/20191022/index.html"},{"revision":"d1630248e921aa18a42aa189f48b5cbe","url":"./2019/10/25/20191025/index.html"},{"revision":"a1282d26d8917d014d90e87b97e96091","url":"./2019/10/28/20191028/index.html"},{"revision":"96573a987b5f7a2be69aad1c9c8a5fb9","url":"./2019/11/02/20191102/index.html"},{"revision":"e7b41e649df45cd01d52d0b6ef1eae13","url":"./2019/11/13/20191113/index.html"},{"revision":"da383c5caedf2c72cac5b0e139372f04","url":"./2019/11/23/20191123/index.html"},{"revision":"6d1062f7563cf86a05bef4ac67d7d0cc","url":"./2019/11/29/20191129/index.html"},{"revision":"7e536b7f44dc6b3269b5fc8e4a203294","url":"./2019/12/10/20191210/index.html"},{"revision":"d830ccf25b9ec8c2760699eab5a18cdb","url":"./2019/12/11/20191211/index.html"},{"revision":"67e316b37c93613318ee50d80af8cd25","url":"./2020/01/08/20200108/index.html"},{"revision":"95359fff048cfb008b75012c42823072","url":"./2020/01/16/20200116/index.html"},{"revision":"c78b111967cc8076804516f1d7f9b08d","url":"./2020/02/03/20200203/index.html"},{"revision":"5c6051a6049c225cd90f7011a065ea29","url":"./2020/02/12/20200212/index.html"},{"revision":"031dc4c236b3b032655edfd077afed38","url":"./2020/03/05/20200305/index.html"},{"revision":"b898f0c52f3ebeb3e03a83ce6fa25d24","url":"./2020/03/27/20200327/index.html"},{"revision":"eba40a848b640f396aab6195661d9470","url":"./2020/04/11/20200411/index.html"},{"revision":"219af6a6e3ed11035a5aaa414b90fa67","url":"./2020/04/20/20200419/index.html"},{"revision":"061ae1bd39ceffb50abbd2073a797bf4","url":"./2020/04/23/20200420/index.html"},{"revision":"03fc9a1675f99dd50eb42c7057fdeb9d","url":"./2020/04/28/20200421/index.html"},{"revision":"69d4b8cebe29fa21b0c9e74d94babcf0","url":"./2020/05/02/20200422/index.html"},{"revision":"96db1090f97e2d48c05c433fe9f1b066","url":"./2020/05/14/20200513/index.html"},{"revision":"fcc4f709da12c4767245ea163305675d","url":"./2020/05/16/20200514/index.html"},{"revision":"a6f26068ef4428bd04a75481a2c0b09c","url":"./2020/05/20/20200519/index.html"},{"revision":"c3cdca9756acbb9493f166482b65dfc0","url":"./2020/05/23/20200520/index.html"},{"revision":"a7eddfde3c53318d02b4defe727ce22f","url":"./2020/05/25/20200521/index.html"},{"revision":"ebf27fd1989e48a24bf64fb5be987006","url":"./2020/05/30/20200523/index.html"},{"revision":"1fb9a1d3811d8b111d1f7b33d0b46f27","url":"./2020/06/05/20200524/index.html"},{"revision":"dbf3ba6e5be6d34db271bda351f02a57","url":"./2020/06/11/20200601/index.html"},{"revision":"81b1cf308436083bd6416c755eff1977","url":"./2020/06/19/20200602/index.html"},{"revision":"25b1b2e1ec2e169e1844d7b43a31d5a1","url":"./2020/07/01/20200610/index.html"},{"revision":"c1be7a82a2095b43f4f9b9a81934effd","url":"./2020/07/04/20200611/index.html"},{"revision":"c62ffdf3e7dcf5f6607e3229a73c3cb8","url":"./2020/07/09/20200613/index.html"},{"revision":"d643beb6b721eb1c7f6c73116f707e61","url":"./2020/07/13/20200614/index.html"},{"revision":"6f060120e9500917ea89f70867e0a89d","url":"./2020/07/20/20200720/index.html"},{"revision":"be8b0329875d56b75373819ab03d4f83","url":"./2020/07/27/20200721/index.html"},{"revision":"abbc8aa0fd2861d1ce30024bc81c6404","url":"./2020/08/18/20200728/index.html"},{"revision":"f1661c6b777d5dcf4fad22ee124481c9","url":"./2020/08/20/20200729/index.html"},{"revision":"40f718e60fa246e0e9b46bdb1a31d6ac","url":"./2020/08/27/20200801/index.html"},{"revision":"59380ac1a1fdec42548fd52557ba87c1","url":"./2020/09/15/20200802/index.html"},{"revision":"d781c701d91d0b12d05979e88e1036ee","url":"./2020/09/19/20200805/index.html"},{"revision":"817d94a24fff550ef04c61ace109e250","url":"./2020/09/22/20200807/index.html"},{"revision":"073763dba59c521417e36fc72a655530","url":"./2020/09/25/20200810/index.html"},{"revision":"7f70a1216e43c7413df15878b86c25aa","url":"./2020/10/01/20200901/index.html"},{"revision":"ed713b11e367e6522d60beb6a4cdde4f","url":"./2020/10/07/20200902/index.html"},{"revision":"9574b3767516daa6c68efc742bb199b2","url":"./2020/10/15/20200910/index.html"},{"revision":"77366423c103d7eb3e3e7db21e0a6cb9","url":"./2020/10/25/20200911/index.html"},{"revision":"9d55e7621915bac292764fc8e9775839","url":"./2020/10/30/20200915/index.html"},{"revision":"94e176f153be61c509e9ddb6e0b8cbd5","url":"./2020/11/04/20200920/index.html"},{"revision":"3f64ed75a34e5494840822d36188873c","url":"./2020/11/11/20201001/index.html"},{"revision":"610978fff5715b331d05607fd1a6f9d6","url":"./2021/01/22/20210120/index.html"},{"revision":"a40acd93c5bedae72c0ca60d2c0f2350","url":"./2021/01/25/20210121/index.html"},{"revision":"6d55859944be37272a8e57044ca8c584","url":"./archives/2017/01/index.html"},{"revision":"4970ca1f7f3089af03304722a720b1ed","url":"./archives/2017/02/index.html"},{"revision":"97137c291053d7dfa83f327c7598eded","url":"./archives/2017/03/index.html"},{"revision":"f4064e6d8755a04df2bb04e8a135ea44","url":"./archives/2017/04/index.html"},{"revision":"1a443667833ad9b4b2baea9f32c1609f","url":"./archives/2017/05/index.html"},{"revision":"c575ee787c1e360b8dc7fa05fa3d6f04","url":"./archives/2017/06/index.html"},{"revision":"c1f488b0e670caddd87ffa45aa6f66c5","url":"./archives/2017/index.html"},{"revision":"2187c47e866ed4d5cfead8f990919cba","url":"./archives/2017/page/2/index.html"},{"revision":"e8fcd4f22c8c2300631491284c7759d3","url":"./archives/2018/02/index.html"},{"revision":"e74d95d6217569ccdd1eb50f034a6ff6","url":"./archives/2018/03/index.html"},{"revision":"ee97eea374b34622cada27367df09152","url":"./archives/2018/08/index.html"},{"revision":"783a355511764ac50081a50ce008f104","url":"./archives/2018/10/index.html"},{"revision":"bc9830a45eb52e7d71023ee212d29627","url":"./archives/2018/index.html"},{"revision":"9143c7075fae009661073090cbf84f7d","url":"./archives/2019/03/index.html"},{"revision":"c4a2d8fa537124c043ddb3784757cfcf","url":"./archives/2019/04/index.html"},{"revision":"2459d560f6899a30be38a2917d20609f","url":"./archives/2019/05/index.html"},{"revision":"b556ea4ad3368507268825e0e7fea8d3","url":"./archives/2019/06/index.html"},{"revision":"f1be922f26775006d3a048452ea6c65d","url":"./archives/2019/07/index.html"},{"revision":"056eab1e5a85064b6a32bc0674e96e08","url":"./archives/2019/08/index.html"},{"revision":"8995ae0a75a62df5a014d78e7c371912","url":"./archives/2019/09/index.html"},{"revision":"eb94b15841b28a6ccd3d6ac5156cd789","url":"./archives/2019/10/index.html"},{"revision":"05e8790bda5a056ca50da6b76c760535","url":"./archives/2019/11/index.html"},{"revision":"647a068cdb405048cf8a0de8e1587f7f","url":"./archives/2019/12/index.html"},{"revision":"996c2e9fed6545530d0c7d3c6b76e10f","url":"./archives/2019/index.html"},{"revision":"a34f2dcbbee29d92209ba536919ae414","url":"./archives/2019/page/2/index.html"},{"revision":"aaee0e9dff0245a8d827d29edf471f2e","url":"./archives/2019/page/3/index.html"},{"revision":"87f07716f2aaad41bfaa01bdce120001","url":"./archives/2019/page/4/index.html"},{"revision":"ad3a46c0b44ef2b38244605bf091540f","url":"./archives/2020/01/index.html"},{"revision":"8c893ac813ea93cca100897a9161935b","url":"./archives/2020/02/index.html"},{"revision":"dddd204e17d4bcccb886b4354c3982c5","url":"./archives/2020/03/index.html"},{"revision":"419927a3fbc9889477c92afbe128bc22","url":"./archives/2020/04/index.html"},{"revision":"27d3d18d3488a60c42ade37d5571334a","url":"./archives/2020/05/index.html"},{"revision":"5a947351211cbebf5d964b490af7dd3b","url":"./archives/2020/06/index.html"},{"revision":"bc0254dc2188e87ebdf197fc382c96e6","url":"./archives/2020/07/index.html"},{"revision":"580c68a1a6d1db9ef1b8a8639db98c0d","url":"./archives/2020/08/index.html"},{"revision":"4b7d28a0acc24e57d75dbd9164506122","url":"./archives/2020/09/index.html"},{"revision":"5ac03839c2ee826921032c813127850d","url":"./archives/2020/10/index.html"},{"revision":"adf7e2b6104d5e9a2fa00b73806f90d9","url":"./archives/2020/11/index.html"},{"revision":"ca8166262060a9f916d622d0e9ce313c","url":"./archives/2020/index.html"},{"revision":"d54429fac5bd5d8f7dcbb2b18b958519","url":"./archives/2020/page/2/index.html"},{"revision":"94850feca3d7f59bdc1fa7664d9f5d9b","url":"./archives/2020/page/3/index.html"},{"revision":"8bcdd140026fb5e94010151a04f5dd29","url":"./archives/2020/page/4/index.html"},{"revision":"5a1295c443d3d62f26b909e1795bc2bd","url":"./archives/2021/01/index.html"},{"revision":"cbf2318a914c9355e9ec00fe85d4b85e","url":"./archives/2021/index.html"},{"revision":"595477771dbdb5aab6492a3c69657821","url":"./archives/index.html"},{"revision":"a2a13996e386cd0a6f5d08fdf9e8a5b9","url":"./archives/page/10/index.html"},{"revision":"c5f87708ee60a57093bf898d1d83b483","url":"./archives/page/11/index.html"},{"revision":"a122d63a19ce2f285b22a8ff3d918b76","url":"./archives/page/2/index.html"},{"revision":"3a647319bb0dce5d05996237b846b11f","url":"./archives/page/3/index.html"},{"revision":"f14dbf350b76ececdbb361dbacab4531","url":"./archives/page/4/index.html"},{"revision":"4df82a70f60435d9caa9b2db42278408","url":"./archives/page/5/index.html"},{"revision":"8985029b01dd522f907d6d34747e739c","url":"./archives/page/6/index.html"},{"revision":"6d1da4e6e629af06b2cb9f3e2860c004","url":"./archives/page/7/index.html"},{"revision":"6ebde16d4d0ad081d897930793f7584d","url":"./archives/page/8/index.html"},{"revision":"858c074b43bc54aad261d4be8939152a","url":"./archives/page/9/index.html"},{"revision":"0f8fdb2f79828ecedf4e61e7890c6f8f","url":"./categories/algorithm/index.html"},{"revision":"f2c96f285787345a3aa08f307e2ff298","url":"./categories/algorithm/page/2/index.html"},{"revision":"62923b34ea529647de75e00467039f1e","url":"./categories/algorithm/page/3/index.html"},{"revision":"314e496102deadd8c655d6edf4e3b17c","url":"./categories/algorithm/page/4/index.html"},{"revision":"0d2ebba236d1f5cc7e45b6ed5f082073","url":"./categories/algorithm/page/5/index.html"},{"revision":"17289ae2735b229cad2286fa94a18745","url":"./categories/algorithm/page/6/index.html"},{"revision":"34ac62aaedc67d0a426b39553bfedc7b","url":"./categories/algorithm/page/7/index.html"},{"revision":"42f083e51b228d2de0ceaf20db41c212","url":"./categories/algorithm/page/8/index.html"},{"revision":"4b54cc26f27c87c75752ac7276649087","url":"./categories/c/index.html"},{"revision":"66c051a0d340f6a4df314443d92b6058","url":"./categories/computer-networks/index.html"},{"revision":"04c14df9d69aad9ec654ed7ed4e4871f","url":"./categories/csapp/index.html"},{"revision":"13e331e528f7a529aef9eeadffc6d35d","url":"./categories/data-structure/index.html"},{"revision":"f6747d3da2ab65a4cf3fdd26a06da6a3","url":"./categories/hexo/index.html"},{"revision":"1f5f4c4e395e1cc61df6fddd74f0f3fa","url":"./categories/index.html"},{"revision":"d40fa572c5cf27f09ed9cebccdeb9151","url":"./categories/linux/index.html"},{"revision":"8eb0f61a86b884414ea9a1f4b469226a","url":"./categories/math/index.html"},{"revision":"4a304b371b81a250c3c0ee418fc20d8b","url":"./categories/操作系统/index.html"},{"revision":"db40f33bfa961f50a7980241a65f1709","url":"./categories/杂乱的技术/index.html"},{"revision":"d8d81e5d7e2a7217c7733d22ee52c59d","url":"./categories/计算机系统结构/index.html"},{"revision":"714d763c29dd9d8c2c5017ea08c0aa31","url":"./categories/运维/index.html"},{"revision":"1f84d75bb06ff3824f97870cc24cfd74","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"97de9458837efbae0ee3ab94ce47b902","url":"./img/pwa/manifest.json"},{"revision":"97dfd79fdb9c40e32d4ee45825013e4e","url":"./index.html"},{"revision":"f7efbacdf5c8e57ad57deace1198b010","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"906810da373487a9f31c8d0bda627ae6","url":"./link/index.html"},{"revision":"c29d9a240f3f87f9a8f3ee1500a3023a","url":"./page/10/index.html"},{"revision":"60f3f3b0535d10d9691cff190324fc59","url":"./page/11/index.html"},{"revision":"14c816dde897376076502f732781dfec","url":"./page/2/index.html"},{"revision":"bc90beb66404b00843226260031ba75f","url":"./page/3/index.html"},{"revision":"5795235d247d970a924f16b7c3ed42dd","url":"./page/4/index.html"},{"revision":"3f97bab60992427c5d48acf14498d89f","url":"./page/5/index.html"},{"revision":"beb7353d3c93d009a91780d2eca0ac09","url":"./page/6/index.html"},{"revision":"494f89ac1b15287e87df64d6d3f5276e","url":"./page/7/index.html"},{"revision":"0b90be84cbf8fc8cc31f78ee4865a0ff","url":"./page/8/index.html"},{"revision":"88e070456eedd622da710748b9a6b6ca","url":"./page/9/index.html"},{"revision":"0ff97006b4fa0f56d64a92df1c51ee6f","url":"./tags/algorithm/index.html"},{"revision":"973df172751f2f35d6db5840a9c04a35","url":"./tags/algorithm/page/2/index.html"},{"revision":"9aa5302461a904fe71413a924aa7c43e","url":"./tags/algorithm/page/3/index.html"},{"revision":"7457bf0690d9638c5dddc37ef5f85aa4","url":"./tags/algorithm/page/4/index.html"},{"revision":"52906cca33d05c9cafdd27202e58c173","url":"./tags/algorithm/page/5/index.html"},{"revision":"ac9e85905a6d8c4d54645b6aeea6ef0b","url":"./tags/algorithm/page/6/index.html"},{"revision":"6439f927176543a275d16c53eafe0d93","url":"./tags/algorithm/page/7/index.html"},{"revision":"9981765619ee710088526b0734037444","url":"./tags/algorithm/page/8/index.html"},{"revision":"7d5cdc87d74dfaa454e8c5584d945ba3","url":"./tags/c-c/index.html"},{"revision":"54566a79a8fa0e708570000d1d201e53","url":"./tags/c/index.html"},{"revision":"5613b683630ec88b2b281795c8585d8f","url":"./tags/computer-networks/index.html"},{"revision":"eda701c340ee1c03978142d2e1d37433","url":"./tags/csapp/index.html"},{"revision":"1a0667915a8e8a470df1269c86c88b3d","url":"./tags/data-structure/index.html"},{"revision":"d0c59c099b559c981e9b74b059160778","url":"./tags/datastructure/index.html"},{"revision":"967cb8a02c9ccc7d351d9e9e90cb6aae","url":"./tags/dp/index.html"},{"revision":"2f723f76273e906021584d47f53dc5ab","url":"./tags/dp/page/2/index.html"},{"revision":"407173210b207126a2eb20540a392df0","url":"./tags/dynamic-programming/index.html"},{"revision":"05171bb9569169eb90b1ebac3ade4969","url":"./tags/dynamic-programming/page/2/index.html"},{"revision":"ac5bdff875c2615198d2a808716e0ee0","url":"./tags/Graph/index.html"},{"revision":"dd3ddf6024bc89059db43798f70b6309","url":"./tags/hexo/index.html"},{"revision":"ed1cb902370f700f626e5d0f8fe2aee9","url":"./tags/index.html"},{"revision":"965a256e805a7bdc8b6eb60e84cdd425","url":"./tags/linux/index.html"},{"revision":"7a3dbd05adb8a3b42c8146b287426a67","url":"./tags/math/index.html"},{"revision":"b86c649cc85253551da5629192c8128a","url":"./tags/nginx/index.html"},{"revision":"abd9120d4107102523eb6bf1056019da","url":"./tags/二分/index.html"},{"revision":"be91611aaed99fd81d5317f1178adfdd","url":"./tags/二进制/index.html"},{"revision":"b1b6afd8164cdf4083abc27edc4e61ca","url":"./tags/几何/index.html"},{"revision":"2f577af300c2779644058836464eb3ee","url":"./tags/单调队列/index.html"},{"revision":"3aa7f243ca6956d7be251b5a0c980d02","url":"./tags/双指针/index.html"},{"revision":"e75c9e60c7a176584a628091ddea3e9b","url":"./tags/大整数/index.html"},{"revision":"e2d33a94a4454c35745dcfe4f7754839","url":"./tags/差分/index.html"},{"revision":"dc92c2489617073792dff99a508fcb3f","url":"./tags/序列/index.html"},{"revision":"bde25ea594ad68ceffe205788202c53f","url":"./tags/归并/index.html"},{"revision":"009f133c46fb3a5a74b61af982872ef8","url":"./tags/扫描线/index.html"},{"revision":"1ac551a1573330aee3f43c7188a6f9a9","url":"./tags/搜索/index.html"},{"revision":"7727c2616c0f81aecaf0393a25aa6f92","url":"./tags/操作系统/index.html"},{"revision":"e5820bfe0c62eae2ea84ac35a15b17b9","url":"./tags/杂乱的技术/index.html"},{"revision":"fcdd508447d4fd713a2915b290310ad6","url":"./tags/滑动窗口/index.html"},{"revision":"63a417c2d4f07667f0a47390f20d9f1a","url":"./tags/计算几何/index.html"},{"revision":"55c23a33dc90d5bdec52884459d057f5","url":"./tags/计算机系统结构/index.html"},{"revision":"fafe686526a199d47a74e39d2a9e0f80","url":"./tags/贪心/index.html"},{"revision":"66ec023dc745e7e16d8e7a5dd3572094","url":"./tags/运维/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();