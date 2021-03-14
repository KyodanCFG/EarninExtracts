exports.mod = (mod_info) => {
    logger.logInfo(`   [MOD] Loading: ${mod_info.name} (${mod_info.version}) by ${mod_info.author}`);
    let locationsCache = fileIO.readParsed(global.db.user.cache.locations);                     	// read from server cache (locations)
    let settingsFile = require("../settings.json");								    		// read from settings.json file
    let gameplaySettings = settingsFile.gameplay;                                           // for tidying up code a bit/abstraction

    if (gameplaySettings.earninExtracts == true) {                                          // if 'earninExtracts' var in settings.json is set to true, execute script
        for (let map in locationsCache) {
            for (let exit in locationsCache[map].base.exits) {
                let cacheData = locationsCache[map].base.exits[exit];						// for tidying up code a bit/abstraction

			if (typeof gameplaySettings.earninExtractTime_s == "number" && typeof gameplaySettings.earninExtractCost == "number" && typeof gameplaySettings.earninExtractCurrency == "string") {	// check variables in settings.json exist or are of correct type
					if (cacheData.PassageRequirement === "ScavCooperation") {               // look for extracts with type 'ScavCooperation'
						cacheData.PassageRequirement = "TransferItem";                      // and change them to extract type 'TransferItem'
						cacheData.ExfiltrationType = "Individual";                          // for individuals only (per person)
						cacheData.ExfiltrationTime = gameplaySettings.earninExtractTime_s;  // set exfil time to 'earninExtractTime_s' var in settings.json
						cacheData.RequirementTip = "EXFIL_Transfer";                        // change exfil tooltip to match new extract type
						cacheData.Count = gameplaySettings.earninExtractCost;               // set exfil cost to 'earninExtractCost' var in settings.json
						
						if (gameplaySettings.earninExtractCurrency === "RUB") {        		// if 'earninExtractCurrency' var in settings.json reads "RUB"
							cacheData.Id = "5449016a4bdc2d6f028b456f";                      // change required item ID to RUB
						}
						else if (gameplaySettings.earninExtractCurrency === "EUR") {        // if 'earninExtractCurrency' var in settings.json reads "EUR"
							cacheData.Id = "569668774bdc2da2298b4568";                      // change required item ID to EUR
						}
						else if (gameplaySettings.earninExtractCurrency === "USD") {        // if 'earninExtractCurrency' var in settings.json reads "USD"
							cacheData.Id = "5696686a4bdc2da3298b456a";                      // change required item ID to USD
						}
						else {
							cacheData.Id = "5449016a4bdc2d6f028b456f";						// otherwise, default 'earninExtractCurrency' to RUB
						} 
					}
				} else {
					logger.logError(`[MOD] ${mod_info.name}: variables have no values/are incorrect type! Check user/mods/${mod_info.author}-${mod_info.name}-${mod_info.version}/settings.json`);
					return;
				}
			}
        }
        
        fileIO.write(global.db.user.cache.locations, locationsCache);								// write all changes to cache (locations.json specifically)
		logger.logSuccess(`[MOD] -- ${mod_info.name}: ON (${gameplaySettings.earninExtractCost} ${gameplaySettings.earninExtractCurrency} for ${gameplaySettings.earninExtractTime_s}s)`);
    } else {																				// if 'earninExtracts' var in settings.json is set to false, skip entire script
		logger.logSuccess(`[MOD] -- ${mod_info.name}: OFF`); 
    }
}