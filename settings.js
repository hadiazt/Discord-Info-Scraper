const settings = {
    token : "NzY4NXXXXXDk5.XXXXXX7PN3mHXXXXXfVbrA8", // ! Bot Token
    guild: "88830XXXXX4377237", // ! Server ID
    // * keys blow must be true/false 
    scrap: {
        MemberName: {
            Log: false,
            WriteInFile: true,
        },
        MemberAvatar: {
            Log: false,
            WriteInFile: false,
        },
        MemberStatus:{
            Log: false,
            WriteInFile: false,
        },
        // * This Works If Bot has permission
        ChannelRole:{
            Log: false,
            WriteInFile:true,
        },
        ChannelName:{
            Log: false,
            WriteInFile:false,
        },
    }
}

module.exports = { settings }

