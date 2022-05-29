import { levelN, levelR, levelSR, levelSSR } from "../../Card/LevelType";
import { ConfigState } from "../../store/configSlice";

const war3: Partial<ConfigState> = {
  teams: [
    {
      homeX: 2,
      homeY: 2,
      name: "人族",
      shortName: "人",
      color: 0xffffff,
      joinCommand: ["红"],
      icon: "/theme/war3/icons/hum.png",
      hall: "/theme/war3/halls/hum.png",
      tile: "/theme/war3/tiles/hum.png",
    },
    {
      homeX: 32,
      homeY: 2,
      name: "兽族",
      shortName: "兽",
      color: 0xffffff,
      joinCommand: ["蓝"],
      icon: "/theme/war3/icons/orc.png",
      hall: "/theme/war3/halls/orc.png",
      tile: "/theme/war3/tiles/orc.png",
    },
    {
      homeX: 2,
      homeY: 32,
      name: "不死",
      shortName: "死",
      color: 0xffffff,
      joinCommand: ["黄"],
      icon: "/theme/war3/icons/ud.png",
      hall: "/theme/war3/halls/ud.png",
      tile: "/theme/war3/tiles/ud.png",
    },
    {
      homeX: 32,
      homeY: 32,
      name: "暗夜",
      shortName: "暗",
      color: 0x333333,
      joinCommand: ["绿"],
      icon: "/theme/war3/icons/ne.png",
      hall: "/theme/war3/halls/ne.png",
      tile: "/theme/war3/tiles/ne.png",
    },
  ],
  gameName: "魔兽争霸",
  styleTheme: {
    backgroundColor: 0x333333,
    textColor: 0xffffff,
    blockColor: 0x333333,
  },
  cards: [
    {
      name: "农民",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/peasant.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "步兵",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/footman.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "火枪手",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/rifleman.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "人族男巫",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/priest.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "人族女巫",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/sorceress.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "破法者",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/spellBreaker.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "飞机",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/flyingMachine.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "迫击炮小队",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/mortarTeam.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "龙鹰骑士",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/dragonHawk.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "骑士",
      level: levelSR,
      speed: 400,
      scale: 1.4,
      face: "/theme/war3/npcs/knight.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "攻城坦克",
      level: levelSR,
      speed: 400,
      scale: 1.4,
      face: "/theme/war3/npcs/seigeEngine.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "狮鹫骑士",
      level: levelSR,
      speed: 400,
      scale: 1.4,
      face: "/theme/war3/npcs/gryphonRider.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "大法师",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/heroArchMage.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "血法师",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/bloodElfPrince.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "山丘之王",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/mountainKing.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "圣骑士",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/paladin.png",
      team: "人族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "大G",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/grunt.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "苦工",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/peon.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "巨魔猎头",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/headhunter.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "掠夺者",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/raider.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "投石车",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/demolisher.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "萨满",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/shaman.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "巫医",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/witchDoctor.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "风骑士",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/wyvernRider.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "科多兽",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/kotoBeast.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "巨魔蝙蝠骑士",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/trollBatRider.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "灵魂行者",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/spiritWalker.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "牛头人",
      level: levelSR,
      speed: 400,
      scale: 1.4,
      face: "/theme/war3/npcs/tauren.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "剑圣",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/heroBlademaster.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "先知",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/farseer.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "暗影猎手",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/shadowHunter.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "牛头人酋长",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/taurenChieftain.png",
      team: "兽族",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "寺僧",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/acolyte.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "食尸鬼",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/ghoul.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "地穴恶魔",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/cryptFiend.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "石像鬼",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/gargoyle.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "亡灵巫师",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/necromancer.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "女妖",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/banshee.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "绞肉车",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/meatWagon.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "黑曜石雕像",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/obsidianStatue.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "冰霜巨龙",
      level: levelSR,
      speed: 400,
      scale: 1.4,
      face: "/theme/war3/npcs/frostWyrm.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "冰霜巨龙",
      level: levelSR,
      speed: 400,
      scale: 1.4,
      face: "/theme/war3/npcs/frostWyrm.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "憎恶",
      level: levelSR,
      speed: 400,
      scale: 1.4,
      face: "/theme/war3/npcs/abomination.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "死亡骑士",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/heroDeathKnight.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "地穴领主",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/cryptLord.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "恐惧魔王",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/dreadLord.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "Lich",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/lich.png",
      team: "不死",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "小精灵",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/wisp.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "弓箭手",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/archer.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "女猎手",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/huntress.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "弩车",
      level: levelN,
      speed: 50,
      scale: 0.8,
      face: "/theme/war3/npcs/glaiveThrower.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "熊德",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/druidOfTheClaw.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "角鹰兽",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/hippogriff.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "鸟德",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/druidOfTheTalon.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "精灵龙",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/faerieDragon.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "小鹿",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/dryad.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "山岭巨人",
      level: levelR,
      speed: 150,
      scale: 1,
      face: "/theme/war3/npcs/mountainGiant.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "奇美拉",
      level: levelSR,
      speed: 400,
      scale: 1.4,
      face: "/theme/war3/npcs/chimaera.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "恶魔猎手",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/heroDemonHunter.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "丛林守护者",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/keeperOfTheGrove.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "月之女祭司",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/priestessOfTheMoon.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
    {
      name: "守望者",
      level: levelSSR,
      speed: 700,
      scale: 2,
      face: "/theme/war3/npcs/warden.png",
      team: "暗夜",
      onlyTeam: true,
      goldIgnoreTeam: true,
    },
  ],
};

export default war3;
