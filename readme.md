Earnin' Extracts (for JET v1.1.0)
----------------
Version `1.1.0` (`03.13.2021`)
By Kyodan 

![Screenshot](cover.png)

This mod replaces all "bring a friendly Scav/PMC" extracts and ask you to pay cash instead!

**Download the latest release (in ZIP format) here: https://github.com/KyodanCFG/EarninExtracts/releases**

## Info

- By default, this mod will enable itself, and "friendly" extracts will cost `7000 RUB` and take `15` seconds to extract

## Installation

1. Extract archive to your `server folder/user/mods` folder 
    * Folder structure should look like `server folder/user/mods/Kyodan-EarninExtracts-X.X.X`
2. Close your server (if it's running)
3. Edit `settings.json` in your preferred text editor/IDE, review/modify any settings, then save and close
4. Delete your `server folder/user/cache` folder
5. Run your server (it should generate a new cache)

* If you change a setting in `settings.json`, repeat steps 2-5 above

## Settings

- Below are the default settings:
    * `earninExtracts`: true,
    * `earninExtractCost`: 7000,
    * `earninExtractCurrency`: "RUB",
    * `earninExtractTime_s`: 15

- Below are the flags for each setting:
    * `earninExtracts` (true|false)                         - determines if this script is enabled/disabled
    * `earninExtractCost` (number)                          - determines how much the extract will cost
    * `earninExtractCurrency` ("USD"|"EUR"|"RUB")           - determines which currency will be used
    * `earninExtractTime_s` (number)                        - determines how long (in seconds) the extract will take

## Files

- If any of the files below are missing/misplaced, you may have to redownload/reinstall this archive:
    * `src/Earnin.js`
    * `mod.config.json`
    * `settings.json`
    * `readme.md`

## Need help?

1. Join the EmuTarkov Discord: https://discord.gg/33r4FPp
2. @ me in the #support channel which script + version, what the issue is, and a picture/log of that issue (if possible)

## Disclaimer

I am not responsible for any data loss in relation to the use of this mod (including, but not limited to game/profile data and/or content loss, damage caused to your software, computer, or mobile device). I encourage you to back up your server/profile data before using this mod.

## Changelog

- 03.13.21
    * Initial push to Github
    
- 01.26.21
    * Fixed error messages not working properly
    * Simplified/tidied up some strings
