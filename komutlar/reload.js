exports.run = (client, message, args) => {

  let command;
  if (client.commands.has(args[4])) {
    command = args[4];
  } else if (client.aliases.has(args[4])) {
    command = client.aliases.get(args[4]);
  }
  if (!command) {
    return message.channel.send("`" + args[4] + "` adında bir komut yok.");
  } else {
    message.channel.send("`" + command + "` adlı komut yeniden başlatılıyor...")
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit("`" + command + "` adlı komut başarıyla yeniden başlatıldı.");
          })
          .catch(e => {
            m.edit(`Komut yeniden başlatılırken bir hata oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'İstediğiniz bir komutu yeniden başlatır.',
  usage: 'n!reload <komut adı>'
};
