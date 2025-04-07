/*
 * @Author: Mark
 * @Date: 2025-03-24 14:32:44
 * @LastEditTime: 2025-04-07 14:33:24
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/enum/index.ts
 */
// 定义断点
export const enum EnumBreakpoints{
    mobile= 768,
    tablet= 1024,
  };

export enum EnumCustomerSize{
     baseWidth = 1920, // 设计稿宽度
     minWidth = 375,// 最小宽度
     maxWidth = 2560,  // 超大屏最大宽度
     baseFontSize = 12.5, // 设计稿基准字体大小
}

export enum EnumDeviceType{
    Mobile='Mobile',
    Tablet='Tablet',
    Pc='Pc'
}


/**
 * 字体库整理
 */
export enum EnumIconFontType {
  iconXuanzhong1 = 'icon-xuanzhong1',
  iconMzhanShezhiShiqu = 'icon-Mzhan-shezhi-shiqu',
  iconAiscore = 'icon-Aiscore',
  iconMzhanShezhiQiehuanYuyan = 'icon-Mzhan-shezhi-qiehuanyuyan',
  iconMzhanShezhiYejian = 'icon-Mzhan-shezhi-yejian',
  iconMzhanShezhiLiuhang = 'icon-Mzhan-shezhi-liuhang',
  iconMzhanShezhiXihuan = 'icon-Mzhan-shezhi-xihuan',
  iconMzhanShezhiPeishuaiyangshi = 'icon-Mzhan-shezhi-peishuaiyangshi',
  iconAShezhiYixuanzhong1 = 'icon-a-shezhi-yixuanzhong1',
  iconShezhiWeixuanzhong = 'icon-shezhi-weixuanzhong',
  iconRili1 = 'icon-rili1',
  iconJiantou = 'icon-jiantou',
  iconPingju = 'icon-pingju',
  iconXuanzhong = 'icon-xuanzhong',
  iconCaidan = 'icon-caidan',
  iconXiajiang = 'icon-xiajiang',
  iconShangsheng = 'icon-shangsheng',
  iconDianji = 'icon-dianji',
  iconData = 'icon-data',
  iconThesports = 'icon-thesports',
  iconLianghuangyihong = 'icon-lianghuangyihong',
  iconDianqiuweijin = 'icon-dianqiuweijin',
  iconHongpai = 'icon-hongpai',
  iconDianqiujinqiu = 'icon-dianqiujinqiu',
  iconJinqiu = 'icon-jinqiu',
  iconWulongqiu = 'icon-wulongqiu',
  iconSuo = 'icon-suo',
  iconQiuyuan1 = 'icon-qiuyuan1',
  iconLajitong = 'icon-lajitong',
  iconQiudui = 'icon-qiudui',
  iconSaishi = 'icon-saishi',
  iconQiuyuan = 'icon-qiuyuan',
  iconQuxiaoshoucang = 'icon-quxiaoshoucang',
  iconLanqiuYixuanzhong1 = 'icon-lanqiu-yixuanzhong1',
  iconRenshu = 'icon-renshu',
  iconJinhangzhong = 'icon-jinhangzhong',
  iconPingpangqiu = 'icon-pingpangqiu',
  iconBangqiuGunzi = 'icon-bangqiu-gunzi',
  iconBanqiuBanzi = 'icon-banqiu-banzi',
  iconWangqiu = 'icon-wangqiu',
  iconYumaoqiu = 'icon-yumaoqiu',
  iconPaiqiuYixuanzhong = 'icon-paiqiu-yixuanzhong',
  iconShuiqiuYixuanzhong = 'icon-shuiqiu-yixuanzhong',
  iconWangqiuYixuanzhong = 'icon-wangqiu-yixuanzhong',
  iconBanqiuYixuanzhong = 'icon-banqiu-yixuanzhong',
  iconBingqiuYixuanzhong = 'icon-bingqiu-yixuanzhong',
  iconDianjingYixuanzhong = 'icon-dianjing-yixuanzhong',
  iconGanlanqiuYixuanzhong = 'icon-ganlanqiu-yixuanzhong',
  iconBangqiuYixuanzhong = 'icon-bangqiu-yixuanzhong',
  iconPingpangqiuYixuanzhong = 'icon-pingpangqiu-yixuanzhong',
  iconSinuokeYixuanzhong = 'icon-sinuoke-yixuanzhong',
  iconShouqiuYixuanzhong = 'icon-shouqiu-yixuanzhong',
  iconZuqiuYixuanzhong = 'icon-zuqiu-yixuanzhong',
  iconYumaoqiuYixuanzhong = 'icon-yumaoqiu-yixuanzhong',
  iconBanqiuWeixuanzhong = 'icon-banqiu-weixuanzhong',
  iconBingqiuWeixuanzhong = 'icon-bingqiu-weixuanzhong',
  iconPingpangqiuWeixuanzhong = 'icon-pingpangqiu-weixuanzhong',
  iconGanlanqiuWeixuanzhong = 'icon-ganlanqiu-weixuanzhong',
  iconDianjingWeixuanzhong = 'icon-dianjing-weixuanzhong',
  iconBangqiuWeixuanzhong = 'icon-bangqiu-weixuanzhong',
  iconLanqiuWeixuanzhong = 'icon-lanqiu-weixuanzhong',
  iconSinuokeWeixuanzhong = 'icon-sinuoke-weixuanzhong',
  iconShouqiuWeixuanzhong = 'icon-shouqiu-weixuanzhong',
  iconPaiqiuWeixuanzhong = 'icon-paiqiu-weixuanzhong',
  iconWangqiuWeixuanzhong = 'icon-wangqiu-weixuanzhong',
  iconShuiqiuWeixuanzhong = 'icon-shuiqiu-weixuanzhong',
  iconYumaoqiuWeixuanzhong = 'icon-yumaoqiu-weixuanzhong',
  iconZuqiuWeixuanzhong = 'icon-zuqiu-weixuanzhong',
  iconRili = 'icon-rili',
  iconGuanbi = 'icon-guanbi',
  iconShaozi = 'icon-shaozi',
  iconShangla = 'icon-shangla',
  iconSousuo = 'icon-sousuo',
  iconXiala = 'icon-xiala',
  iconXingzhuang = 'icon-xingzhuang',
  iconYejian = 'icon-yejian',
  iconShezhi = 'icon-shezhi',
  iconYoujiantou = 'icon-youjiantou',
  iconZuojiantou = 'icon-zuojiantou',
  iconZhenrong = 'icon-zhenrong',
  iconShipinzhibo = 'icon-shipinzhibo',
  iconWeishoucang = 'icon-weishoucang',
  iconDonghuazhibo = 'icon-donghuazhibo',
  iconYishoucang = 'icon-yishoucang',
  iconRemen = 'icon-remen',
}