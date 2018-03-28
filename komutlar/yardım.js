const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `n!avatarım = Avatarınınızı Gösterir.\nn!çayiç = Çay İçersiniz.\nn!yaz = Bota İstediğiniz Şeyi Yazdırırsınız.`)
  .addField("**Sunucu Yetkilisi Komutları**", `n!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nn!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nn!sunucu  = Sunucu Hakkında Bilgi Verir.`)
  .addField("**Botun Ana Komutları**", "n!yardım = BOT Komutlarını Atar.\nn!ping = BOT Gecikme Süresini Söyler. \nn!davet = BOT Davet Linkini Atar. \nn!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı Komutları:**", " **Güvenlik Amacı İle Yapımcı Komutları Gösterilmiyor** ")
  .setFooter('**Alt yapıdır.**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'n!yardım [komut]'
};
