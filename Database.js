const SURROUND_MAP_LEFT = [0, 0];
const SURROUND_MAP_RIGHT = [1300, 1300];
const SURROUND_MAP_TOP = [-25, 0];
const SURROUND_MAP_DOWN = [575, 550];

const HEALTH_BAR_MAX_X = 900;
const HEALTH_BAR_MAX_Y = 80;
const HEALTH_BAR_CURRENT_X = 1200;
const HEALTH_BAR_CURRENT_Y = 80;
const HEALTH_BAR_CURRENT_REVERSE = -1;
const COLOR_STOP_1 = "0.5";
const COLOR_STOP_2 = "0.0";
const COLOR_STOP_3 = "1.0";
const POKEMON_LOGO_X = 1220;
const POKEMON_LOGO_Y = 15;
const POKEMON_LEVEL_X = 900;
const POKEMON_LEVEL_Y = 60;
const POKEMON_NAME_X = 960;
const POKEMON_NAME_Y = 10;

const MY_POKEMON_HEALTH_BAR_MAX_X = 150;
const MY_POKEMON_HEALTH_BAR_MAX_Y = 80;
const MY_POKEMON_HEALTH_BAR_CURRENT_X = 150;
const MY_POKEMON_HEALTH_BAR_CURRENT_Y = 80;
const MY_POKEMON_HEALTH_BAR_CURRENT_ORIENTATION = 1;
const MY_POKEMON_LOGO_X = 30;
const MY_POKEMON_LOGO_Y = 15;
const MY_POKEMON_NAME_X = 150;
const MY_POKEMON_NAME_Y = 10;
const MY_POKEMON_LEVEL_X = 390;
const MY_POKEMON_LEVEL_Y = 60;
const MY_POKEMON_EFFECT_X = 380;
const MY_POKEMON_EFFECT_Y = 50;

const MYPOKEMON_LEFT = 150;
const MYPOKEMON_TOP = canvas.height - 270;

const ENEMYPOKEMON_LEFT = canvas.width - 550;
const ENEMYPOKEMON_TOP = 150;

const POKE_BALL_LEFT = 50;
const POKE_BALL_TOP = 180;
const POKEBALL_DISTANCE = 250;

const HEALTH_MAX_WIDTH = 300;
const HEALTH_MAX_HEIGHT = 30;

const BASE_HP = 100;
const FLEXIBLE_HP = 50;

const COLOR_1 = "white";
const COLOR_2 = "red";

const FONT = "bold 25px verdana, sans-serif";

const EXP_INCREASE = 10;
const RANDOM_DAMAGE = [11, 10];
const DAMAGE_BONUS = 0.01;

const CATCH_RANDOM = [10,1];

const BAG_FULL = 5;
const BACKGROUND = 0;

const X = 100;
const Y = 180;

let dataLevel = [1, 2, 3, 4, 5];
let dataLevelUp = [100, 350, 800, 1500];

let dataPokemon =
   [[MYPOKEMON_LEFT,    MYPOKEMON_TOP,    "pikachu",    "thunder", dataLevel[0]],
    [MYPOKEMON_LEFT-X,  MYPOKEMON_TOP-Y,  "raichu",     "thunder", dataLevel[4]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "magikarp",   "water",   dataLevel[0]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "bulbasaur",  "plant",   dataLevel[0]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "charmander", "fire",    dataLevel[0]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "squirtle",   "water",   dataLevel[0]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "butterfree", "plant",   dataLevel[1]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "eevee",      "plant",   dataLevel[1]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "nidorino",   "plant",   dataLevel[1]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "lapras",     "water",   dataLevel[2]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "machamp",    "fire",    dataLevel[2]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "koffing",    "fire",    dataLevel[2]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "dragonite",  "fire",    dataLevel[3]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "gyarados",   "water",   dataLevel[3]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "charizard",  "fire",    dataLevel[4]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "blastoise",  "water",   dataLevel[4]],
    [ENEMYPOKEMON_LEFT, ENEMYPOKEMON_TOP, "venusaur",   "plant",   dataLevel[4]]];

let dataPokemonPositionMapTown =
    [[675,  150, "pikachu", "bulbasaur" ],
     [700,  550, "pikachu", "bulbasaur" ],
     [1225, 125, "pikachu", "bulbasaur" ],
     [375,  0,   "pikachu", "charmander"],
     [0,    50,  "pikachu", "charmander"],
     [25,   550, "pikachu", "charmander"],
     [1150, 275, "pikachu", "squirtle"  ],
     [1000, 450, "pikachu", "squirtle"  ],
     [1075, 375, "pikachu", "squirtle"  ],
     [825,  100, "pikachu", "butterfree"],
     [975,  300, "pikachu", "butterfree"],
     [300,  225, "pikachu", "butterfree"],
     [350,  425, "pikachu", "eevee"     ],
     [725,  300, "pikachu", "eevee"     ],
     [975,  550, "pikachu", "eevee"     ],
     [200,  475, "pikachu", "machamp"   ],
     [175,  125, "pikachu", "machamp"   ],
     [1200, -25, "pikachu", "magikarp"  ],
     [550,  450, "pikachu", "nidorino"  ],
     [1200, 350, "pikachu", "lapras"    ],
     [25,   225, "pikachu", "koffing"   ],
     [75,   325, "pikachu", "dragonite" ],
     [1175, 450, "pikachu", "gyarados"  ]];

let dataPokemonPositionMapTownExtension =
    [[525,  400, "pikachu", "bulbasaur" ],
     [650,  50,  "pikachu", "bulbasaur" ],
     [50,   450, "pikachu", "charmander"],
     [250,  25,  "pikachu", "charmander"],
     [1125, 425, "pikachu", "squirtle"  ],
     [825,  250, "pikachu", "squirtle"  ],
     [425,  225, "pikachu", "butterfree"],
     [950,  150, "pikachu", "eevee"     ],
     [50,   25,  "pikachu", "machamp"   ],
     [375,  400, "pikachu", "nidorino"  ],
     [1175, 150, "pikachu", "nidorino"  ],
     [950,  525, "pikachu", "nidorino"  ],
     [975,  375, "pikachu", "lapras"    ],
     [1125, 350, "pikachu", "lapras"    ],
     [225,  100, "pikachu", "koffing"   ],
     [225,  425, "pikachu", "koffing"   ],
     [275,  300, "pikachu", "dragonite" ],
     [1250, 425, "pikachu", "gyarados"  ],
     [50,   300, "pikachu", "charizard" ],
     [1200, 575, "pikachu", "blastoise" ],
     [1250, 225, "pikachu", "venusaur"  ]];

let dataSpecialPosition =
    [[900,  575, "town"         ],
     [875,  575, "town"         ],
     [900,  -25, "townExtension"],
     [875,  -25, "townExtension"],
     [975,  100, "pc"           ],
     [1000, 100, "pc"           ],
     [550,  550, "gym"          ],
     [575,  550, "gym"          ],
     [1050, 275, "misticHouse"  ],
     [850,  450, "mart"         ],
     [425,  225, "home"         ],
     [575,  -25, "comingSoon"   ],
     [600,  -25, "comingSoon"   ],
     [425,  75,  "guide"        ]];

let dataBackGround =
    [["town",           "map"],
     ["town-extension", "map"],
     ["mountain",      "fire"],
     ["river",        "water"],
     ["jungle",       "plant"],
     ["bag",         "player"],
     ["login",         "game"],
     ["guide",         "game"],
     ["coming-soon",   "game"]];
