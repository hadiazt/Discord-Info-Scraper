const { settings } = require('../settings.js')
const chalk = require('chalk')
const { Database } = require('beta.db')

const Discord = require('discord.js')
const client = new Discord.Client({ fetchAllMembers: true })
client.login(settings.token)

client.on("ready", () => {
    console.log(client.user.tag);

    if (client.guilds.cache.get(settings.guild) === undefined) {
        console.log(chalk.red('Error: Unknown Guild / Not Cacheable'));
        client.destroy()
    } else {
        // ? MemberName 
        if (settings.scrap.MemberName.Log === true) {
            console.log(chalk.green('Message: Scraping MemberName \n') + (chalk.yellow('Mode : Log')));
            client.guilds.cache.get(settings.guild).members.cache.forEach(member => { if (member.user.bot === true) { return; } console.log(member.user.tag); })
        } else if (settings.scrap.MemberName.Log === false) { } else {
            console.log(chalk.red('Error: Unknown MemberName Log Value, Only True/False Is Acceptable'));
        }
        if (settings.scrap.MemberName.WriteInFile === true) {
            const MemberName = new Database('./data/MemberName.json')
            console.log(chalk.green('Message: Scraping MemberName \n') + (chalk.yellow('Mode : WriteInFile')));
            client.guilds.cache.get(settings.guild).members.cache.forEach(member => {
                if (member.user.bot === true) { return; }
                MemberName.push('NAMES', member.user.tag);
            })
        } else if (settings.scrap.MemberName.WriteInFile === false) { } else {
            console.log(chalk.red('Error: Unknown MemberName WriteInFile Value, Only True/False Is Acceptable'));
        }
        // ? MemberAvatar 
        if (settings.scrap.MemberAvatar.Log === true) {
            console.log(chalk.green('Message: Scraping MemberAvatar \n') + (chalk.yellow('Mode : Log')));
            client.guilds.cache.get(settings.guild).members.cache.forEach(member => {
                if (member.user.avatarURL({ dynamic: true, size: 4096 }) === null || member.user.bot === true) { return; }
                console.log(member.user.avatarURL({ dynamic: true, size: 4096 }));
            })
        } else if (settings.scrap.MemberAvatar.Log === false) { } else {
            console.log(chalk.red('Error: Unknown MemberAvatar Log Value, Only True/False Is Acceptable'));
        }
        if (settings.scrap.MemberAvatar.WriteInFile === true) {
            const MemberAvatar = new Database('./data/MemberAvatar.json')
            console.log(chalk.green('Message: Scraping MemberAvatar \n') + (chalk.yellow('Mode : WriteInFile')));
            client.guilds.cache.get(settings.guild).members.cache.forEach(member => {
                if (member.user.avatarURL({ dynamic: true, size: 4096 }) === null || member.user.bot === true) { return; }
                MemberAvatar.push('URLS', member.user.avatarURL({ dynamic: true, size: 4096 }));
            })
        } else if (settings.scrap.MemberAvatar.WriteInFile === false) { } else {
            console.log(chalk.red('Error: Unknown MemberAvatar WriteInFile Value, Only True/False Is Acceptable'));
        }
        // ? MemberStatus
        if (settings.scrap.MemberStatus.Log === true) {
            console.log(chalk.green('Message: Scraping MemberStatus \n') + (chalk.yellow('Mode : Log')));
            client.guilds.cache.get(settings.guild).members.cache.forEach(member => {
                if (member.user.presence.activities[0]) {
                    if (member.user.presence.activities[0].type === 'CUSTOM_STATUS') {
                        if (member.user.presence.activities[0].emoji.id === undefined) {
                            console.log(member.user.presence.activities[0].emoji.name + member.user.presence.activities[0].state);
                        }
                    }
                }
            })
        } else if (settings.scrap.MemberStatus.Log === false) { } else {
            console.log(chalk.red('Error: Unknown MemberStatus Log Value, Only True/False Is Acceptable'));
        }
        if (settings.scrap.MemberStatus.WriteInFile === true) {
            console.log(chalk.green('Message: Scraping MemberStatus \n') + (chalk.yellow('Mode : WriteInFile')));
            client.guilds.cache.get(settings.guild).members.cache.forEach(member => {
                if (member.user.presence.activities[0]) {
                    if (member.user.presence.activities[0].type === 'CUSTOM_STATUS') {
                        if (member.user.presence.activities[0].emoji.id === undefined) {
                            const MemberStatus = new Database('./data/MemberStatus.json')
                            MemberStatus.push('STATUS', member.user.presence.activities[0].emoji.name + member.user.presence.activities[0].state)
                        }
                    }
                }
            })
        } else if (settings.scrap.MemberStatus.WriteInFile === false) { } else {
            console.log(chalk.red('Error: Unknown MemberStatus WriteInFile Value, Only True/False Is Acceptable'));
        }
        // ? ChannelRole
        if (settings.scrap.ChannelRole.Log === true) {
            client.guilds.cache.get(settings.guild).roles.cache.forEach(role => { console.log(role.name + ' | ' + role.hexColor); })
        } else if (settings.scrap.ChannelRole.Log === false) { } else {
            console.log(chalk.red('Error: Unknown ChannelRole Log Value, Only True/False Is Acceptable'));
        }
        if (settings.scrap.ChannelRole.WriteInFile === true) {
            client.guilds.cache.get(settings.guild).roles.cache.forEach(role => {
                const ChannelRole = new Database('./data/ChannelRole.json')
                ChannelRole.set(role.name, role.hexColor);
            })
        } else if (settings.scrap.ChannelRole.WriteInFile === false) { } else {
            console.log(chalk.red('Error: Unknown ChannelRole WriteInFile Value, Only True/False Is Acceptable'));
        }

        // ? ChannelName
        if (settings.scrap.ChannelName.Log === true) {
            client.guilds.cache.get(settings.guild).channels.cache.forEach(channel => { console.log(channel.name + ' | ' + channel.type); })
        } else if (settings.scrap.ChannelName.Log === false) { } else {
            console.log(chalk.red('Error: Unknown ChannelName Log Value, Only True/False Is Acceptable'));
        }
        if (settings.scrap.ChannelName.WriteInFile === true) {
            client.guilds.cache.get(settings.guild).channels.cache.forEach(channel => {
                const ChannelName = new Database('./data/ChannelName.json')
                ChannelName.set(channel.name, channel.type);
            })
        } else if (settings.scrap.ChannelName.WriteInFile === false) { } else {
            console.log(chalk.red('Error: Unknown ChannelName WriteInFile Value, Only True/False Is Acceptable'));
        }
        // ? End of Process
        console.log(chalk.green('Message: Process Successfully Finished'))
        client.destroy()
    }

})

