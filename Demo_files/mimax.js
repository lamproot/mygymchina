function geneDialog(e) {
    var t = {
        lj: {
            id: "lj",
            name: "",
            avatar: "https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/679112633afafbbfe544024ecc21b79f_121_121.jpg"
        },
        lwq: {
            id: "lwq",
            name: "",
            avatar: _imgUrl + "a-lwq.png"
        },
        lb: {
            id: "lb",
            name: "",
            avatar: _imgUrl + "a-lb.png"
        },
        zgp: {
            id: "zgp",
            name: "",
            avatar: _imgUrl + "a-zgp.png"
        },
        wc: {
            id: "wc",
            name: "",
            avatar: _imgUrl + "a-wc.png"
        },
        ld: {
            id: "ld",
            name: "",
            avatar: _imgUrl + "a-ld.png"
        },
        hf: {
            id: "hf",
            name: "",
            avatar: _imgUrl + "a-hf.png"
        },
        kk: {
            id: "kk",
            name: "",
            avatar: _imgUrl + "a-kk.png"
        },
        st: {
            id: "st",
            name: "",
            avatar: _imgUrl + "a-st.png"
        }
    };
    _members = $.extend(_members, t),
    _dialog.d0 = [
    // {
    //     type: "plain",
    //     author: _members.lj,
    //     content: "Hi，我是Mymo",
    //     pause: 2e3
    // },
    // {
    //     type: "plain",
    //     author: _members.lj,
    //     content: "欢迎家长朋友来到美吉姆大型父母学堂讲座现场",
    //     //flag: "emoji-welcome"
    // },
    // {
    //     type: "plain",
    //     author: _members.lj,
    //     content: "美吉姆成长金字塔（互动技能及发育追踪体系）已经上线很久了，您想了解吗？"
    // },
    // {
    //     type: "picture",
    //     author: _members.lj,
    //     content: _imgFileUrl+"/chengzhangjinzita.jpeg",
    //     extra: "gallery",
    //     pause: 4e3
    // },
    {
        type: "plain",
        author: _members.lj,
        content: "讲座开始之前，要不要了解下我们宝宝这个阶段的成长技能呢？"
    }],
    _dialog.d1 = [{
        type: "plain",
        author: _members.me,
        content: "开始了解"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "美吉姆成长金字塔是美吉姆为0-6岁儿 童家庭量身打造的成长解决方案，是一 套针对0-6岁小朋友的互动技能几发育 追踪识别系统。"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "美吉姆成长金字塔" + _translate2.replace("%placehold%", "快来看看宝宝成长过程的必备技能吧"),
        pause: 4e3,
        linkplain:"openSkillTest"
    },

    ],

    _dialog.d2 = [{
        type: "plain",
        author: _members.me,
        content: "了解课程"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "美吉姆三大课程介绍" + _translate2.replace("%placehold%", "欢动课、艺术课、音乐课课程介绍"),
        pause: 4e3
    }
    ],
    _dialog.d3 = [{
        type: "plain",
        author: _members.me,
        content: "猴子，可以介绍重点了吗？"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "😓😓😓😓",
        pause: 2e3
    },
    {
        type: "plain",
        author: _members.lj,
        content: "明人不说暗话，您要什么货儿？ "
    }],
    _dialog.d4_1 = [{
        type: "plain",
        author: _members.me,
        content: "讲座礼品"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "我猜，您一定喜欢这些！！！ "
    },
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/chengzhangjinzita.jpeg",
    },
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/chengzhangjinzita.jpeg",
    },
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/chengzhangjinzita.jpeg",
    },
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/chengzhangjinzita.jpeg",
    }
    ],
    _dialog.d4_2 = [{
        type: "plain",
        author: _members.me,
        content: "今天有啥优惠吗？"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "问到了关键，今天我们老板可是下血本喽！ ！！"
    },
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/chengzhangjinzita.jpeg",
    },
    {
        type: "plain",
        author: _members.lj,
        content: "还有一重大礼，就在咨询处那里！"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "这已经是年度钜惠了，赶上开业预售的价格了，仅限今天哦！"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "场地后方的咨询区，随时欢迎您！"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "对了，还有2件事儿，差点忘了告诉您！"
    }
    ],
    _dialog.d5 = [{
        type: "plain",
        author: _members.me,
        content: "还有什么事儿？"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "后面那家做儿童艺术的，叫艾涂图，也是我们家的兄弟品牌，今天也有大优惠哦！",
        //flag: "emoji",
        //pause: 5e3
    },
    {
        type: "plain",
        author: _members.me,
        content: "😓😓😓😓"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "以上优惠，仅限今日哦！\n 帮忙转告下您身边的好友呗！！！",
        pause: 100
    },
    {
        type: "plain",
        author: _members.lj,
        content: "我们的地址：xxxx \n 万达：xxxx \n爱琴海：xxx",
        pause: 100
    },
    {
        type: "plain",
        author: _members.lj,
        content: "好嘞，您可以抬头，认真学习啦。感谢您的支持与配合！",
        pause: 100
    }
    ],
    // _dialog.d6 = [{
    //     type: "plain",
    //     author: _members.me,
    //     content: "咋买呢"
    // },
    // {
    //     type: "plain",
    //     author: _members.lb,
    //     content: "这个我来回答，小米网5月17日周二首批开售3GB+32GB版本，小米之家17日也同步开售哦",
    //     pause: 2500
    // },
    // {
    //     type: "picture",
    //     author: _members.lb,
    //     content: _imgUrl + "d-6-fcode.jpg",
    //     pause: 2e3
    // },
    // {
    //     type: "plain",
    //     author: _members.ld,
    //     content: "我也没有" + gif.cry + gif.cry + gif.cry
    // },
    // {
    //     type: "plain",
    //     author: _members.kk,
    //     content: "我也没有" + gif.cry + gif.cry
    // },
    // {
    //     type: "plain",
    //     author: _members.lb,
    //     content: "除了小米网和小米之家，天猫、京东、苏宁等电商平台都能买到哦，请多留意～"
    // }],
    // _dialog.d7 = [{
    //     type: "plain",
    //     author: _members.me,
    //     content: "彩蛋是什么呀？"
    // },
    // {
    //     type: "system",
    //     content: "沈腾加入群聊"
    // },
    // {
    //     type: "plain",
    //     author: _members.st,
    //     content: "彩蛋在这儿呢"
    // },
    // {
    //     type: "plain",
    //     author: _members.st,
    //     content: "哈哈哈" + gif.lol + gif.lol + gif.lol
    // },
    // {
    //     type: "plain",
    //     author: _members.st,
    //     content: "我们和小米合作了一系列脑洞大开的大片，你要先看哪个？",
    //     pause: 2e3
    // }],
    // _dialog.d8 = [{
    //     type: "plain",
    //     author: _members.me,
    //     content: "我听了这么多，老板们发个红包呗"
    // },
    // {
    //     type: "system",
    //     content: "生态链刘德退出群聊",
    //     pause: 500
    // },
    // {
    //     type: "system",
    //     content: "小米网林斌退出群聊",
    //     pause: 400
    // },
    // {
    //     type: "system",
    //     content: "MIUI洪锋退出群聊",
    //     pause: 700
    // },
    // {
    //     type: "system",
    //     content: "小米电视王川退出群聊",
    //     pause: 400
    // },
    // {
    //     type: "system",
    //     content: "小米路由云KK退出群聊",
    //     pause: 500
    // },
    // {
    //     type: "system",
    //     content: "手机研发周光平退出群聊",
    //     pause: 1500
    // },
    // {
    //     type: "plain",
    //     author: _members.lwq,
    //     content: "哈哈，大家开个玩笑，微信公众号现在不允许H5发红包了哦.."
    // },
    // {
    //     type: "plain",
    //     author: _members.lwq,
    //     content: "但是到16号为止，小米网有预约赢手机的活动，每2小时抽1台，你可以去小米网看看"
    // },
    // {
    //     type: "plain",
    //     author: _members.lwq,
    //     content: "说不定会中手机呢"
    // }],
    // _dialog.d9 = [{
    //     type: "plain",
    //     author: _members.me,
    //     content: "不聊了，我妈喊我回家吃饭了"
    // },
    // {
    //     type: "plain",
    //     author: _members.me,
    //     content: "感谢各位老板介绍，我能把我们的聊天记录晒给朋友们吗？"
    // },
    // {
    //     type: "plain",
    //     author: _members.lj,
    //     content: "当然可以"
    // },
    // {
    //     type: "plain",
    //     author: _members.lb,
    //     content: "感谢 " + e
    // },
    // {
    //     type: "plain",
    //     author: _members.hf,
    //     content: "大屏手机就是小米Max，" + e + "再见"
    // },
    // {
    //     type: "plain",
    //     author: _members.wc,
    //     content: "大屏手机就是小米Max，" + e + "再见"
    // },
    // {
    //     type: "plain",
    //     author: _members.lwq,
    //     content: "大屏手机就是小米Max，" + e + "再见",
    //     pause: 5e3
    // },
    // {
    //     type: "system",
    //     content: "本活动页面中涉及图片、数据及宣传用语的详细说明，来源自小米官网mi.com，以官网信息为准；相关信息不作为买卖交易条件，仅供参考；因客观环境变化，测试数据会有偏差；活动页面中合伙人及沈腾对话均为活动用语，不代表本人言论立场。"
    // }],
    _dialog.d2_1 = [{
        type: "plain",
        author: _members.me,
        content: "我觉得能放个30部影片已经很大了！"
    },
    {
        type: "plain",
        author: _members.wc,
        content: "那你可就小看小米Max了，它最大可是能放下700集左右的海贼王的！"
    },
    {
        type: "plain",
        author: _members.me,
        content: "果然是大容量啊！"
    }],
    _dialog.d2_2 = [{
        type: "plain",
        author: _members.me,
        content: "我觉得能放个80集美剧已经很牛了！"
    },
    {
        type: "plain",
        author: _members.wc,
        content: "那你可就小看小米Max了，它最大可是能放下700集左右的海贼王的！",
        pause: 3e3
    },
    {
        type: "plain",
        author: _members.me,
        content: "果然是大容量啊！"
    }],
    _dialog.d2_3 = [{
        type: "plain",
        author: _members.me,
        content: "既然容量这么大，应该能放一整部海贼王吧？"
    },
    {
        type: "plain",
        author: _members.wc,
        content: "你太厉害了，小米Max通过扩展卡最大存储达到256GB，700集左右的《海贼王》存进去杠杠的！",
        pause: 3e3
    },
    {
        type: "plain",
        author: _members.me,
        content: "果然是大容量啊！"
    }],
    _dialog.d7_1 = [{
        type: "plain",
        author: _members.st,
        content: "这个彩蛋很给力吧？你再问问老板们其他问题，我也一起了解一下。",
        pause: 2800
    }],
    _dialog.dr_1 = [
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/chengzhangjinzita.jpeg",
    },
    {
        type: "plain",
        author: _members.lj,
        content: ""
    },{
        type: "plain",
        author: _members.lj,
        content: "了解了宝宝现阶段的成长技能，难道您就不好奇美吉姆是通过什么课程实现这些技能的吗？"
    }],
    _dialog.dr_2 = [{
        type: "plain",
        author: _members.lj,
        content: ""
    }],
    _dialog.dr_3 = [{
        type: "plain",
        author: _members.lwq,
        content: "再看看其他方面的特性吧，关于小米Max我们还有很多要跟你分享"
    }],
    _dialog.dv_1 = [{
        type: "plain",
        author: _members.lb,
        content: "怎么样？够大吗？"
    },
    {
        type: "plain",
        author: _members.me,
        content: "好大，好轻薄！小米的妹子也很美" + gif.lol + gif.lol + gif.lol
    },
    {
        type: "plain",
        author: _members.hf,
        content: "同感，哈哈..还有啥感兴趣的？"
    }],
    _dialog.dv_2 = [{
        type: "system",
        content: "视频通话已拒绝"
    },
    {
        type: "plain",
        author: _members.lwq,
        content: "了解点儿别的吧？"
    }],
    _dialog.dreg_1 = [{
        type: "plain",
        author: _members.lb,
        content: "赞！你已经成功预约了。5月17日可以到小米网来购买" + gif.lol
    }],
    _dialog.dreg_2 = [{
        type: "plain",
        author: _members.hf,
        content: "系统说预约失败，再点一下试试"
    }]
} !
function(e) {
    function t(e) {
        e = e || {},
        this.maxFlake = e.maxFlake || 200,
        this.flakeSize = e.flakeSize || 10,
        this.fallSpeed = e.fallSpeed || 2,
        this.emojiImage = e.emojiImage
    }
    function a() {
        var e = document.getElementById("emoji");
        this.canvas = e,
        this.ctx = e.getContext("2d")
    }
    function n() {
        for (var e = this.maxFlake,
        t = this.flakes = [], a = this.canvas, n = 0; e > n; n++) t.push(new r(a.width, a.height, this.flakeSize, this.fallSpeed, this.emojiImage))
    }
    function o() {
        var e = this.maxFlake,
        t = this.flakes;
        ctx = this.ctx,
        canvas = this.canvas,
        that = this,
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var a = 0; e > a; a++) t[a].update(),
        t[a].render(ctx);
        this.loop = l(function() {
            o.apply(that)
        })
    }
    function i() {
        var e = this.ctx,
        t = this.canvas;
        e && e.clearRect(0, 0, t.width, t.height)
    }
    function r(e, t, a, n, o) {
        this.x = Math.floor(Math.random() * e),
        this.y = Math.floor(Math.random() * t * 1.5) - 1.5 * t,
        this.size = Math.random() * a + 2,
        this.maxSize = a,
        this.speed = 1 * Math.random() + n,
        this.fallSpeed = n,
        this.velY = this.speed,
        this.velX = 0,
        this.stepSize = Math.random() / 30,
        this.step = 0,
        this.emojiImage = o
    }
    e.emojiFall = t;
    var l = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame ||
    function(e) {
        setTimeout(e, 1e3 / 60)
    },
    m = e.cancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelAnimationFrame || e.msCancelAnimationFrame || e.oCancelAnimationFrame;
    t.prototype.start = function() {
        a.apply(this),
        n.apply(this),
        o.apply(this)
    },
    r.prototype.update = function() {
        this.x,
        this.y;
        this.velX *= .98,
        this.velY <= this.speed && (this.velY = this.speed),
        this.velX += Math.cos(this.step += .05) * this.stepSize * 5,
        this.y += this.velY,
        this.x += this.velX
    },
    r.prototype.reset = function(e, t) {
        this.x = Math.floor(Math.random() * e),
        this.y = 0,
        this.size = Math.random() * this.maxSize + 2,
        this.speed = 1 * Math.random() + this.fallSpeed,
        this.velY = this.speed,
        this.velX = 0
    },
    t.prototype.stop = function() {
        this.pause(),
        i()
    },
    t.prototype.pause = function() {
        m(this.loop)
    },
    t.prototype.resume = function() {
        this.loop = l(function() {
            o.apply(that)
        })
    },
    r.prototype.render = function(e) {
        var t = new Image;
        t.src = this.emojiImage,
        t.complete ? e.drawImage(t, this.x, this.y, 84, 84) : (t.onload = function() {
            e.drawImage(t, this.x, this.y, 84, 84)
        },
        t.onerror = function() {})
    }
} (window);
var _imgUrl = "http://c1.mifile.cn/f/i/hd/2016051101/",
_skillText,
_imgFileUrl = "./Demo_files/",
_userName = me.name,
_dialog = {},
_members = {},
_emoji = new emojiFall({
    maxFlake: 20,
    fallSpeed: 5,
    emojiImage: _imgUrl + "cry.gif"
}),
gif = {
    welcome: '<img src="' + _imgUrl + 'welcome.gif">',
    lol: '<img src="' + _imgUrl + 'lol.gif">',
    cry: '<img src="' + _imgUrl + 'cry.gif">'
},
_animation = {
    tour: $(".J_map").html()
},
_translate = '<span class="trans J_trans">点击翻译</span><span class="hide J_actualContent">%placehold%</span>';
_translate2 = '<p><span class="trans"></span><span class="J_actualContent">%placehold%</span></p>';
$.fn.loadingMask = function() {
    var e = this,
    t = e.css("position").toLowerCase();
    "relative" != t && "absolute" != t && "fixed" != t && e.css("position", "relative"),
    e.css("minHeight", 100);
    var a = $('<div class="loading"><div class="loader loader-white"></div></div>').appendTo(e);
    return function() {
        a.remove(),
        e.css("position", t)
    }
},
$.fn.scrollSmooth = function(e, t) {
    function a() {
        var e = Math.min(1, (Date.now() - l) / t);
        o.scrollTop = r * e + i,
        1 > e && setTimeout(a, 10)
    }
    var n = this,
    o = n[0],
    i = o.scrollTop,
    r = e - i,
    l = Date.now();
    a()
},
$.fn.goSmooth = function(e, t) {
    function a() {
        var e = Math.min(1, (Date.now() - r) / t);
        n.css("margin-bottom", i * e + o),
        1 > e && setTimeout(a, 10)
    }
    var n = this,
    o = 1 * n.css("margin-bottom").replace("px", ""),
    i = e - o,
    r = Date.now();
    a()
},
$(document).ready(function() {
    function e() {}
    function t(t) {
        for (var a = new e,
        n = 0; n < t.length; n++) a.add(t[n]);
        return a
    }
    function a(e) {
        h.html(""),
        unmask = h.loadingMask();
        var t = new Image;
        t.onload = function() {
            var a = t.width,
            n = t.height,
            o = $(window).width(),
            i = $(window).height(); (n > i || a > o) && (n / a > i / o ? (a = a * i / n, n = i) : (n = n * o / a, a = o)),
            h.css({
                width: a,
                height: n,
                marginLeft: -a / 2,
                marginTop: -n / 2
            }),
            unmask && unmask(),
            unmask = null,
            h.append('<img src="' + e + '">')
        },
        t.src = e
    }
    function n() {
        _members.me = me
    }
    function o() {
        $(".J_mapWrapper").addClass("animate");
        var e = 0,
        t = setInterval(function() {
            e >= 9 ? ($(".J_tourtime").html(8), clearInterval(t)) : (e++, $(".J_tourtime").html(e % 9))
        },
        5e3 / 9)
    }
    function i() {
        $(".box_ft").find(".input-wrapper").addClass("J_inputWrapper")
    }
    function r() {
        $(".box_ft").find(".input-wrapper").removeClass("J_inputWrapper")
    }
    function l(e, a) {
        function n(e) {
            void 0 == e && (e = 1e3 * Math.random() + 600);
            var t = setTimeout(function() {
                if (l) {
                    var e = m([l.el]);
                    c.append(e),
                    $("#message-push-music")[0].play();
                    var r = $(".J_scrollContent").height(),
                    s = c.height();
                    if (s > r && $(".J_scrollContent").scrollSmooth(s - r + 16, 300), l.el.flag) {
                        var p = l.el.flag;
                        switch (p) {
                        case "emoji":
                            _emoji.stop(),
                            _emoji.start();
                            break;
                        case "emoji-welcome":
                            var h = new emojiFall({
                                maxFlake: 20,
                                fallSpeed: 9,
                                emojiImage: _imgUrl + "welcome.gif"
                            });
                            h.start();
                            break;
                        case "playVideo":
                            break;
                        case "animate-tour":
                            o();
                            break;
                        case "animate-train":
                            setTimeout(function() {
                                var e = $(".J_train").find("img"),
                                t = e.attr("data-origin");
                                e.attr("src", t),
                                $(".J_train").addClass("animate"),
                                $("#train-run-music")[0].play()
                            },
                            800),
                            setTimeout(function() {
                                $(".J_train").hide(),
                                $("#train-run-music")[0].pause()
                            },
                            5e3)
                        }
                    }
                    void 0 != l.el.pause ? n(l.el.pause) : n(),
                    l = l._next
                } else i(),
                clearTimeout(t),
                a && a()
            },
            e)
        }
        r();
        var l = t(e)._first,
        m = doT.template($("#messageTpl").html());
        n(0)
    }
    function m(e, t) {
        $(".J_noticeInput").hide(),
        null === t && (t = 100),
        e || (e = "0"),
        setTimeout(function() {
            $(".J_choiceWrapper").addClass("opened").find(".J_choice").removeClass("choosen").hide(),
            $(".J_inputWrapper").addClass("opened");
            var t = $(".J_choiceWrapper").find(".J_choice").filter('[data-choice="' + e + '"]'),
            a = t.addClass("choosen").show().height(),
            n = $(".box_ft").height(),
            o = $("#chatContent").height();
            $(".box_bd").goSmooth(a, 100),
            $(".J_scrollContent").scrollSmooth(n + o, 300)
        },
        t)
    }
    function s() {
        $(".box_bd").goSmooth(0, 100),
        $(".J_inputWrapper").removeClass("opened"),
        $(".J_choiceWrapper").removeClass("opened")
    }
    function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
    }
    function p() {
        n(),
        geneDialog(_userName),
        l(_dialog.d0,
        function() {
            $(".J_noticeInput").show()
        }),
        $(".box_ft").on("click", ".J_choice .J_liNext",
        function(e) {
            e.preventDefault();
            var t = $(this),
            a = t.attr("data-target-dialog"),
            n = t.attr("data-target-choice"),
            o = "false" !== t.attr("data-continue");
            $(".J_mainChoice").find('.J_liNext[data-target-dialog="' + a + '"]').addClass("disabled"),
            n || (n = "0"),
            s(),
            clearTimeout(window.waitUser),
            l(_dialog["d" + a],
            function() {
                o && (m(n, 100), window.waitUser = setTimeout(function() {
                    //var e = Math.floor(3 * Math.random() + 1);
                    //l(_dialog["dr_" + a])
                    //alert("dr_" + (a+1))
                },
                3e4))
            })
            //$(".J_mainChoice").find('.J_liNext[data-target-dialog="' + (parseInt(a) + 1) + '"]').not(".disabled") || clearTimeout(window.waitUser)
            $(".J_mainChoice").find(".J_liNext").not(".disabled") || clearTimeout(window.waitUser)
        }),
        $(document).on("click", ".J_inputWrapper",
        function() {
            var e = $(".J_choice").filter(".choosen").attr("data-choice");
            $(".J_choiceWrapper").hasClass("opened") ? s() : m(e, 0)
        }),
        $(document).on("click", ".J_img",
        function(e) {
            var t = $(this),
            n = t.attr("src").replace(/\.(jpg|jpeg|png|gif)/, "-hd.$1");
            n && (a(n), $("#J_fullPics").show())
        }),
        $(document).on("click", "#J_fullPics",
        function(e) {
            h.html("").attr("style", ""),
            $("#J_fullPics").hide()
        }),
        $(document).on("click", ".J_trans",
        function(e) {
            "true" != $(this).attr("translated") && $(this).html($(this).siblings(".J_actualContent").html()).attr("translated", "true")
        }),
        $(document).on("click", ".openSkillTest",
        function(e) {
            // "true" != $(this).attr("translated") && $(this).html($(this).siblings(".J_actualContent").html()).attr("translated", "true")
            $(".J_skillTestDiv").filter('[data-gallery="1"]').show();
            // $(".J_gallerySlide").css({
            //     "line-height": $(window).height() + "px"
            // });

            var t = $(".J_galleryClose"),
            a = $(".J_skillTestDiv");
            t.on("click",
            function() {
                a.hide()
            })
        }),

        $(document).on("click", ".J_register",
        function(e) {
            var t = $(this);
            "true" != $(this).attr("registered") && $.ajax({
                url: "http://xmt.www.mi.com/index.php?id=338&do=book",
                type: "POST",
                dataType: "json",
                success: function(e) {
                    e && 1e3 === e.header.code ? (t.html("您已成功预约").attr("registered", "true"), l(_dialog.dreg_1)) : l(_dialog.dreg_2)
                }
            })
        }),

        $(document).on("click", ".startSkillTest",
        function(e) {
            var t = $(this);
            //alert($(".Box_name").val())
            var Box_name = $(".Box_name").val();
            var Box_birthday = $(".Box_birthday").val();
            var Box_isvip = $(".Box_isvip").val();
            var Box_mobile = $(".Box_mobile").val();

            if (!Box_birthday || Box_birthday == undefined) {
                alert("请选择宝宝生日");return false;
            }
            var stopDate = new Date();
            console.log(Box_birthday);
            console.log(new Date(Box_birthday));
            console.log(stopDate);
            var month = monthDiff(new Date(Box_birthday),stopDate)
            //alert(month)

            //金字塔1
            if (month <= 6 && month > 0) {
                $(".J_skillTestDiv").hide();
                _skillText = "您宝宝的月龄是 "+month+"个月，您需要掌握上图中的必备技能 \n 可以参加：\n 美吉姆欢动课：学阶一"
                _skillImg = _imgFileUrl+"/成长金字塔2.png";

                _dialog.dr_1[0]['content'] = _skillImg;
                _dialog.dr_1[1]['content'] = _skillText;
            }


            l(_dialog.dr_1)

            //alert(month)
            // "true" != $(this).attr("registered") && $.ajax({
            //     url: "http://xmt.www.mi.com/index.php?id=338&do=book",
            //     type: "POST",
            //     dataType: "json",
            //     success: function(e) {
            //         e && 1e3 === e.header.code ? (t.html("您已成功预约").attr("registered", "true"), l(_dialog.dreg_1)) : l(_dialog.dreg_2)
            //     }
            // })
        }),



        $(document).on("click", ".J_fpVideo",
        function(e) {
            var t = $(this).attr("data-src"),
            a = $(".J_videoOverlay");
            if (t) {
                var n = a.loadingMask(),
                o = document.createElement("iframe");
                o.onload = function() {
                    n && n(),
                    n = null
                },
                o.src = t,
                $(o).attr({
                    frameborder: 0,
                    allowfullscreen: !0
                }),
                $(".J_videoOverlay").show().find(".J_videoWrapper").append(o)
            }
        }),
        $(document).on("click", ".J_videoClose",
        function(e) {
            $(".J_videoOverlay").hide().find(".J_videoWrapper").html("")
        }),
        $(document).on("click", ".J_galleryShow",
        function(e) {
            $(".J_galleryOverlay").filter('[data-gallery="1"]').show(),
            $(".J_gallerySlide").css({
                "line-height": $(window).height() + "px"
            }),
            $(".J_gallerySlide").find("img").each(function(e, t) {
                var a = $(t).attr("data-origin");
                a && $(t).attr("src", a)
            }),
            XIAOMI.app.slide({
                slideObj: ".J_gallerySlide",
                edgeType: "rollback",
                autoPlay: !1
            });
            var t = $(".J_galleryClose"),
            a = $(".J_galleryOverlay");
            t.on("click",
            function() {
                a.hide()
            })
        })
    }
    var c = $("#chatContent"),
    h = $("#J_fullPics .pic");
    e.prototype = {
        add: function(e) {
            return this._last ? this._last = this._last._next = {
                el: e,
                _next: null
            }: this._last = this._first = {
                el: e,
                _next: null
            },
            this
        }
    },
    p()
});
