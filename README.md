<h1 align="center">Welcome To Discord Info Scraper ReadMe</h1>

You can Scrape Any Server's Information Such As `MemberName` / `MemberAvatar` / `MemberStatus` / `ChannelRole` / `ChannelName` With Bot Token

Created From [discord.js@12.5.3](https://www.npmjs.com/package/discord.js/v/12.5.3) & [beta.db@3.0.2](https://www.npmjs.com/package/beta.db/v/3.0.2) For Saving Scraped Data In File

Use 

```log
node .
```
For Running Script

<h3>Settings Example :</h3>
</br>

```javascript
const settings = {
    token : "NzY4NTAzNTMXXXXXX.X5BasA.z7PN3mHXXXX-Kn2vh8fVbrA8", // ! Bot Token
    guild: "8883089XXXX77237", // ! Server ID
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
            WriteInFile:false,
        },
        ChannelName:{
            Log: false,
            WriteInFile:false,
        },
    }
}

```

<span style="color:red">NOTE : Make Sure You Have `data` Folder In Your WorkSpace</span>
