const adminprefix = "!";  
const devs = ['538676483455975431'];  

hngel.on('message', message => {  
  var argresult = message.content.split(` `).slice(1).join(' ');  
    if (!devs.includes(message.author.id)) return;  
    
if (message.content.startsWith(adminprefix + 'pl')) {  
  hngel.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'nm')) {
hngel.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'av')) {
hngel.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  hngel.user.setGame(argresult, "https://www.twitch.tv/hngel2667");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});



client.login(process.env.B);
