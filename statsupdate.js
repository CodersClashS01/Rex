module.exports = {
    /*Client.setInterval(function() {
        Client.statchannelsGuilds.fetchAll().then(guilds => {
            guilds.forEach(guild => {
                Client.statchannels.fetch(guild, { target: '.ms' }).then(ms => ms.setName('Member: ' + msg.guild.members.filter(m => !(m.user.bot)).size));
                Client.statchannels.fetch(guild, { target: '.bs' }).then(bs => bs.setName('Bots: ' + msg.guild.members.filter(m => m.user.bot).size));
                Client.statchannels.fetch(guild, { target: '.tcs' }).then(tcs => tcs.setName('Text channels: ' + msg.guild.channels.filter(c => c.type == 'text').size));
                Client.statchannels.fetch(guild, { target: '.vcs' }).then(vcs => vcs.setName('Voice channels: ' + (msg.guild.channels.filter(c => c.type == 'voice').size - 3)));
            });
        })
    }, 30);*/
    async channel(guild, Client) {
        var statchannels = Client.statchannels
        statchannels.fetch(guild).then(isGuild => {
            if (isGuild != null) {
                if (Client.channels.find(c => c.name.startsWith('Text channels:')).type == 'voice') {
                    Client.channels.find(c => c.name.startsWith('Text channels:')).setName('Text channels: ' + Client.guilds.get(guild).guild.channels.filter(c => c.type == 'text').size);
                }
                if (Client.channels.find(c => c.name.startsWith('Voice channels:')).type == 'voice') {
                    Client.channels.find(c => c.name.startsWith('Voice channels:')).setName('Voice channels: ' + (Client.guilds.get(guild).channels.filter(c => c.type == 'voice').size - 3));
                }
            }
        });
    },

    async member(guild, Client) {
        var statchannels = Client.statchannels;
        statchannels.fetch(guild).then(isGuild => {
            if (isGuild != null) {
                if (Client.channels.find(c => c.name.startsWith('Members:')).type == 'voice') {
                    Client.channels.find(c => c.name.startsWith('Members:')).setName('Members: ' + Client.guilds.get(guild).members.filter(m => !(m.user.bot)).size);
                }
                if (Client.channels.find(c => c.name.startsWith('Bots:')).type == 'voice') {
                    Client.channels.find(c => c.name.startsWith('Bots:')).setName('Bots: ' + Client.guilds.get(guild).members.filter(m => m.user.bot).size);
                }
            }
        });
    }
}