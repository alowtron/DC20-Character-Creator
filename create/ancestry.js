async function initialize() {
    // Wait for getCharacter to finish and return characterInfo
    await getCharacter();

    // Now that characterInfo is available, you can safely use it
    document.getElementById('ancestry1').value = characterInfo['ancestry1']


    

    updateAncestries()
    
}

function ancestryPoints() {
    let points =  5
    if (document.getElementById('ancestry2Level').value != 0) {
        points -= document.getElementById('ancestry2Level').value
    }
    if (document.getElementById('ancestry3Level').value != 0) {
        points -= document.getElementById('ancestry3Level').value
    }

    return points
}

function updateAncestries() {
    document.getElementById('ancestriesPoints').innerHTML = ancestryPoints()
}

// Call the initialize function to ensure it runs after getCharacter
initialize()


document.getElementById('ancestry1').addEventListener('change', function() {
    let ancestry1 = document.getElementById('ancestry1').value
    console.log(ancestry1)
    // clear the display traits section
    document.getElementById('ancestryTrait0').innerHTML = ""
    document.getElementById('ancestryTrait0Info').innerHTML = ""
    document.getElementById('ancestryTrait1').innerHTML = ""
    document.getElementById('ancestryTrait1Info').innerHTML = ""
    document.getElementById('ancestryTrait2').innerHTML = ""
    document.getElementById('ancestryTrait2Info').innerHTML = ""
    document.getElementById('ancestryTrait3').innerHTML = ""
    document.getElementById('ancestryTrait3Info').innerHTML = ""
    document.getElementById('ancestryTrait4').innerHTML = ""
    document.getElementById('ancestryTrait4Info').innerHTML = ""
    document.getElementById('ancestryTrait5').innerHTML = ""
    document.getElementById('ancestryTrait5Info').innerHTML = ""
    document.getElementById('ancestryTrait6').innerHTML = ""
    document.getElementById('ancestryTrait6Info').innerHTML = ""
    document.getElementById('ancestryTrait7').innerHTML = ""
    document.getElementById('ancestryTrait7Info').innerHTML = ""
    document.getElementById('ancestryTrait8').innerHTML = ""
    document.getElementById('ancestryTrait8Info').innerHTML = ""
    // Eventually check to see if "simple mode" is on.
    if (ancestry1 == "human") {
        document.getElementById('ancestryTrait0').innerHTML = "Undying"
        document.getElementById('ancestryTrait0Info').innerHTML = "You have ADV on Saves against the Doomed Condition."
        document.getElementById('ancestryTrait1').innerHTML = "Attribute Increase"
        document.getElementById('ancestryTrait1Info').innerHTML = "Choose an Attribute, the chosen Attribute increases by 1 (up to the Attribute Limit)."
        document.getElementById('ancestryTrait2').innerHTML = "Resilience"
        document.getElementById('ancestryTrait2Info').innerHTML = "Choose an Attribute, the chosen Attribute gains Save Mastery."
        document.getElementById('ancestryTrait3').innerHTML = "Human Resolve"
        document.getElementById('ancestryTrait3Info').innerHTML = "Your Death's Door Threshold value is expanded by 1."
    } else if (ancestry1 == "elf") {
        document.getElementById('ancestryTrait0').innerHTML = "Discerning Sight"
        document.getElementById('ancestryTrait0Info').innerHTML = "You have ADV on Checks and Saves made to discern through visual illusions."
        document.getElementById('ancestryTrait1').innerHTML = "Elvin Will"
        document.getElementById('ancestryTrait1Info').innerHTML = "You have ADV on Checks and Saves against being Charmed and put to Sleep."
        document.getElementById('ancestryTrait2').innerHTML = "Nimble"
        document.getElementById('ancestryTrait2Info').innerHTML = "When you take the Dodge Action, you instead gain the benefits of the Full Dodge Action."
        document.getElementById('ancestryTrait3').innerHTML = "Agile Explorer"
        document.getElementById('ancestryTrait3Info').innerHTML = "You are not affected by Difficult Terrain."
    } else if (ancestry1 == "dwarf") {
        document.getElementById('ancestryTrait0').innerHTML = "Iron Stomach"
        document.getElementById('ancestryTrait0Info').innerHTML = "You have ADV on Saves against effects that come from consuming food or liquids."
        document.getElementById('ancestryTrait1').innerHTML = "Tough"
        document.getElementById('ancestryTrait1Info').innerHTML = "Your HP maximum increases by 1"
        document.getElementById('ancestryTrait2').innerHTML = "Toxic Fortitude"
        document.getElementById('ancestryTrait2Info').innerHTML = "You have Poison Resistance (Half) and ADV on Saves against being Poisoned."
        document.getElementById('ancestryTrait3').innerHTML = "Physically Sturdy"
        document.getElementById('ancestryTrait3Info').innerHTML = "You have ADV on Saves against being Impaired, Deafened, or Petrified."
    } else if (ancestry1 == "halfling") {
        document.getElementById('ancestryTrait0').innerHTML = "Beast Whisperer"
        document.getElementById('ancestryTrait0Info').innerHTML = "You can speak to Beasts in a limited manner. They can understand the meanings of simple words, concepts, or states of emotion. You have no special ability to understand them in return."
        document.getElementById('ancestryTrait1').innerHTML = "Small Sized"
        document.getElementById('ancestryTrait1Info').innerHTML = "Your Size is considered Small."
        document.getElementById('ancestryTrait2').innerHTML = "Elusive"
        document.getElementById('ancestryTrait2Info').innerHTML = "When you take the Disengage Action, you instead gain the benefits of the Full Disengage Action."
        document.getElementById('ancestryTrait3').innerHTML = "Halfling Bravery"
        document.getElementById('ancestryTrait3Info').innerHTML = "You have ADV on Saves against being Intimidated, Rattled, or Frightened."
        document.getElementById('ancestryTrait4').innerHTML = "Halfling Endurance"
        document.getElementById('ancestryTrait4Info').innerHTML = "You have ADV on Saves made to resist gaining Exhaustion."
        document.getElementById('ancestryTrait5').innerHTML = "Deft Footwork"
        document.getElementById('ancestryTrait5Info').innerHTML = "You can move through the space of a hostile creature 1 size larger then you as if it were difficult Terrain."
    } else if (ancestry1 == "gnome") {
        document.getElementById('ancestryTrait0').innerHTML = "Predict Weather"
        document.getElementById('ancestryTrait0Info').innerHTML = "You can naturally tell what the weather is going to be in the next hour in the area within 1 mile of you. You don’t have DisADV on Checks or Saves as a result of naturally occurring weather."
        document.getElementById('ancestryTrait1').innerHTML = "Small Sized"
        document.getElementById('ancestryTrait1Info').innerHTML = "Your Size is considered Small."
        document.getElementById('ancestryTrait2').innerHTML = "Escape Artist"
        document.getElementById('ancestryTrait2Info').innerHTML = "You have ADV on Checks and and Saves to avoid or escape being Grappled or Restrained."
        document.getElementById('ancestryTrait3').innerHTML = "Magnified Vision"
        document.getElementById('ancestryTrait3Info').innerHTML = "You have ADV on Investigation Checks made to inspect something your're holding or touching."
        document.getElementById('ancestryTrait4').innerHTML = "Mental Clarity"
        document.getElementById('ancestryTrait4Info').innerHTML = "You have ADV on Saves against being Dazed or Stun."
        document.getElementById('ancestryTrait5').innerHTML = "Strong-Minded"
        document.getElementById('ancestryTrait5Info').innerHTML = "Your MD increases by 1."
    } else if (ancestry1 == "orc") {
        document.getElementById('ancestryTrait0').innerHTML = "Already Cursed"
        document.getElementById('ancestryTrait0Info').innerHTML = "You have ADV on Saves against Curses."
        document.getElementById('ancestryTrait1').innerHTML = "Cursed Mind"
        document.getElementById('ancestryTrait1Info').innerHTML = "Your MD decreases by 1."
        document.getElementById('ancestryTrait2').innerHTML = "Orc Rush"
        document.getElementById('ancestryTrait2Info').innerHTML = "Once per Combat, when you willing move toward an enemy you can spend 1 AP to gain Temp HP equal to your Prime Modifier."
        document.getElementById('ancestryTrait3').innerHTML = "Brutal Strikes."
        document.getElementById('ancestryTrait3Info').innerHTML = "You deal +1 damage when you score a Brutal or Critical Hit with a Melee Weapon or Unarmed Strike."
        document.getElementById('ancestryTrait4').innerHTML = "Tough"
        document.getElementById('ancestryTrait4Info').innerHTML = "Your HP maximum increases by 1."
        document.getElementById('ancestryTrait5').innerHTML = "Orchish Resolve"
        document.getElementById('ancestryTrait5Info').innerHTML = "You can now spend up to 2 AP while on Death's Door instead of 1."
    } else if (ancestry1 == "dragonborn") {
        document.getElementById('ancestryTrait0').innerHTML = "Reptilian Superiority"
        document.getElementById('ancestryTrait0Info').innerHTML = "You have ADV on Intimidation Checks against reptilian creatures or Medium or smaller (not including other Dragonborn)"
        document.getElementById('ancestryTrait1').innerHTML = "Darkvision"
        document.getElementById('ancestryTrait1Info').innerHTML = "You have Darkvision 10 spaces"
        document.getElementById('ancestryTrait2').innerHTML = "Draconic Resistance"
        document.getElementById('ancestryTrait2Info').innerHTML = "You gain Resistance (Half) to your Draconic damage type."
        document.getElementById('ancestryTrait3').innerHTML = "Draconic Breath Weapon"
        document.getElementById('ancestryTrait3Info').innerHTML = "You gain a Breath Weapon based on your Draconic Origin. You can Spend 2 AP to exhale in a 3 Space Cone or a 6 Space Line. Alternatively, you can choose to make an Attack against a single target within 6 Spaces, increasing the damage by 1. You can use this ability once between Long Rests. When you Roll for Initiative, or meet some other unique criteria at the GM's discretion, this ability recharges.<br> • Elemental Breath Weapon: Make a Spell Check against every target's PD within the area. Hit: The target takes 2 Draconic damage. Before you make your Spell Check, you can spend 1 SP to increase the damage by 1, or 1 MP to increase it by 2.\ <br> • Mystic Breath Weapon: Make a Spell Check against every target’s MD within the area. Hit: The target takes 1 Draconic damage. Before you make your Spell Check, you can spend 1 SP to increase the damage by 1, or 1 MP to increase it by 2."
    } else if (ancestry1 == "giantborn") {
        document.getElementById('ancestryTrait0').innerHTML = "Unyielding Movement"
        document.getElementById('ancestryTrait0Info').innerHTML = "You are immune to being Slowed 2 (or higher.)"
        document.getElementById('ancestryTrait1').innerHTML = "Tough"
        document.getElementById('ancestryTrait1Info').innerHTML = "Your HP maximum increases by 1"
        document.getElementById('ancestryTrait2').innerHTML = "Powerful Build"
        document.getElementById('ancestryTrait2Info').innerHTML = "You increase by 1 size, but you occupy the SPace of a creature 1 size smaller."
        document.getElementById('ancestryTrait3').innerHTML = "Unstoppable"
        document.getElementById('ancestryTrait3Info').innerHTML = "You have ADV on Saves against being Slowed or Stunned."
        document.getElementById('ancestryTrait4').innerHTML = "Giant's Resolve"
        document.getElementById('ancestryTrait4Info').innerHTML = "While on Death's Door, you reduce all damage taken by 1."
    } else if (ancestry1 == "angelborn") {
        document.getElementById('ancestryTrait0').innerHTML = "Divine Glow"
        document.getElementById('ancestryTrait0Info').innerHTML = "Your body can emit Bright Light in a 5 space radius around you at will."
        document.getElementById('ancestryTrait1').innerHTML = "Radiant Resistance"
        document.getElementById('ancestryTrait1Info').innerHTML = "You have Resistance (Half) to Radiant damage."
        document.getElementById('ancestryTrait2').innerHTML = "Celestial Magic"
        document.getElementById('ancestryTrait2Info').innerHTML = "You learn 1 Spell of your choice from the Divine Spell List (Holy & Restoration during the Beta). Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 mp). The Spell's total MP cost (before all reductions) still can't exceed your Mana Spend Limit."
        document.getElementById('ancestryTrait3').innerHTML = "Healing Touch"
        document.getElementById('ancestryTrait3Info').innerHTML = "Once per Combat, you can spend 1 AP to touch a creature and Heal it. Make a DC 10 Spell Check. <br> Success: you can restore up to 2 HP. Success(each 5): +1 HP. <br> Failure: You only restore 1 HP."
    } else if (ancestry1 == "fiendborn") {
        document.getElementById('ancestryTrait0').innerHTML = "Light's Bane"
        document.getElementById('ancestryTrait0Info').innerHTML = "You can spend 1 AP to snuff out a mundane light source within 5 spaces of you."
        document.getElementById('ancestryTrait1').innerHTML = "Fiendish Resistance"
        document.getElementById('ancestryTrait1Info').innerHTML = "You gain Resistance (Half) to your Fiendish damage type."
        document.getElementById('ancestryTrait2').innerHTML = "Fiendish Magic"
        document.getElementById('ancestryTrait2Info').innerHTML = "You learn 1 Spell of your choice from the Arcane Spell List from the Destruction or Enchantment Spell Schools. If the Spell deals damage, then it must be the same damage type as your Fiendish damage. Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum of 0 MP). The Spell’s total MP cost (before all reductions) still can’t exceed your Mana Spend Limit."
        document.getElementById('ancestryTrait3').innerHTML = "Darkvision"
        document.getElementById('ancestryTrait3Info').innerHTML = "You have Darkvision 10 Spaces."
    } else if (ancestry1 == "beastborn") {
        document.getElementById('ancestryTrait0').innerHTML = "Beastkind"
        document.getElementById('ancestryTrait0Info').innerHTML = "You can understand and speak to (in a limited capacity) the species of Beast your Beastborn is modeled after. You can understand the meaning of their noises and behaviors, and they understand the meanings of simple words, concepts, or states of emotion."
        document.getElementById('ancestryTrait1').innerHTML = "Climb Speed"
        document.getElementById('ancestryTrait1Info').innerHTML = "You gain a Climb Speed equal to your Ground Speed."
        document.getElementById('ancestryTrait2').innerHTML = "Jumper"
        document.getElementById('ancestryTrait2Info').innerHTML = "Your Jump Distance increases by 2, and you can take the Jump action as a Minor Action."
        document.getElementById('ancestryTrait3').innerHTML = "Darkvision"
        document.getElementById('ancestryTrait3Info').innerHTML = "You have Darkvision 10 Spaces."
        document.getElementById('ancestryTrait4').innerHTML = "Tough"
        document.getElementById('ancestryTrait4Info').innerHTML = "Your HP maximum increase by 1"
        document.getElementById('ancestryTrait5').innerHTML = "Secondary Arms"
        document.getElementById('ancestryTrait5Info').innerHTML = "You have 2 slightly smaller secondary arms below your primary pair of arms. They function just like your primary arms, but they can’t wield Weapons with the Heavy Property or Shields."
    }
})

async function next() {
    characterInfo['ancestry1'] = document.getElementById('ancestry1').value
    //characterInfo['ancestry2'] = document.getElementById('ancestry2').value
    characterInfo['ancestry3'] = document.getElementById('ancestry3').value
    characterInfo['ancestry3_level'] = document.getElementById('ancestry3Level').value

    await updateCharacter()
    window.location.href = `language.php?character_id=${character['character_id']}`
}

async function save() {
    characterInfo['ancestry2'] = document.getElementById('ancestry2').value
    characterInfo['ancestry2_level'] = document.getElementById('ancestry2Level').value
    characterInfo['ancestry3'] = document.getElementById('ancestry3').value
    characterInfo['ancestry3_level'] = document.getElementById('ancestry3Level').value

    await updateCharacter()
}