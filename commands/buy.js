module.exports.run = async (Client, msg, args) => {
    const boughtColors = Client.boughtColors
    switch (args[0]) {
        case '1':
            var alreadyHas = await boughtColors.fetch(msg.author.id + '_turquoise')
            if (alreadyHas == 1) {
                msg.channel.send({embed: {
                    color: 0xe74c3c,
                    title: 'You already have this item!',
                    description: msg.member.displayName + ', you have already bought Turquoise!'
                }});
            } else {
                var canBuy = await Client.coins.subtract(msg.author.id, 20, Client)
                if (canBuy == true) {
                    boughtColors.set(msg.author.id + '_turquoise', 1);
                    msg.channel.send({embed: {
                        color: 0x1abc9c,
                        title: 'Succesfully bought!',
                        description: 'Congratulations ' + msg.member.displayName + '! You just bought Turquoise for 20 Coins.'
                    }})
                } else {
                    msg.channel.send({embed: {
                        color: 0xe74c3c,
                        title: 'Not enough coins!',
                        description: msg.member.displayName + ', you do not have enough coins to buy Turquoise!'
                    }}); 
                }
            }
            break;
        case '2':
            var alreadyHas = await boughtColors.fetch(msg.author.id + '_red')
            if (alreadyHas == 1) {
                msg.channel.send({embed: {
                    color: 0xe74c3c,
                    title: 'You already have this item!',
                    description: msg.member.displayName + ', you have already bought Red!'
                }});
            } else {
                var canBuy = await Client.coins.subtract(msg.author.id, 10, Client)
                if (canBuy == true) {
                    boughtColors.set(msg.author.id + '_red', 1);
                    msg.channel.send({embed: {
                        color: 0xe74c3c,
                        title: 'Succesfully bought!',
                        description: 'Congratulations ' + msg.member.displayName + '! You just bought Red for 10 Coins.'
                    }})
                } else {
                    msg.channel.send({embed: {
                        color: 0xe74c3c,
                        title: 'Not enough coins!',
                        description: msg.member.displayName + ', you do not have enough coins to buy Red!'
                    }}); 
                }
            }
            break;
        case '3':
            var alreadyHas = await boughtColors.fetch(msg.author.id + '_green')
            if (alreadyHas == 1) {
                msg.channel.send({embed: {
                    color: 0xe74c3c,
                    title: 'You already have this item!',
                    description: msg.member.displayName + ', you have already bought Green!'
                }});
            } else {
                var canBuy = await Client.coins.subtract(msg.author.id, 10, Client)
                if (canBuy == true) {
                    boughtColors.set(msg.author.id + '_green', 1);
                    msg.channel.send({embed: {
                        color: 0x2ecc71,
                        title: 'Succesfully bought!',
                        description: 'Congratulations ' + msg.member.displayName + '! You just bought Green for 10 Coins.'
                    }})
                } else {
                    msg.channel.send({embed: {
                        color: 0xe74c3c,
                        title: 'Not enough coins!',
                        description: msg.member.displayName + ', you do not have enough coins to buy Green!'
                    }}); 
                }
            }
            break;
        case '4':
            var alreadyHas = await boughtColors.fetch(msg.author.id + '_orange')
            if (alreadyHas == 1) {
                msg.channel.send({embed: {
                    color: 0xe74c3c,
                    title: 'You already have this item!',
                    description: msg.member.displayName + ', you have already bought orange!'
                }});
            } else {
                var canBuy = await Client.coins.subtract(msg.author.id, 5, Client)
                if (canBuy == true) {
                    boughtColors.set(msg.author.id + '_orange', 1);
                    msg.channel.send({embed: {
                        color: 0xe67e22,
                        title: 'Succesfully bought!',
                        description: 'Congratulations ' + msg.member.displayName + '! You just bought Orange for 5 Coins.'
                    }})
                } else {
                    msg.channel.send({embed: {
                        color: 0xe74c3c,
                        title: 'Not enough coins!',
                        description: msg.member.displayName + ', you do not have enough coins to buy Orange!'
                    }}); 
                }
            }
            break;
        default:
            msg.channel.send("Please tell me what you want to buy. Do " + Client.prefix + "shop to see what you can buy.")
        }
    }
