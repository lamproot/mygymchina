function geneDialog(e) {
    var t = {
        lj: {
            id: "lj",
            name: "",
            avatar: _imgFileUrl+"/美吉姆头像.jpg"
        }
    };
    _members = $.extend(_members, t),
    _dialog.d0 = [
    {
        type: "plain",
        author: _members.lj,
        content: "Hi，我是Mymo",
        pause: 2e3
    },
    // {
    //     type: "plain",
    //     author: _members.lj,
    //     content: "欢迎家长朋友来到美吉姆大型父母学堂讲座现场",
    //     //flag: "emoji-welcome"
    //     pause: 2e3
    // },
    // {
    //     type: "plain",
    //     author: _members.lj,
    //     content: "美吉姆成长金字塔（互动技能及发育追踪体系）已经上线很久了。",
    //     pause: 2e3
    // },
    // {
    //     type: "plain",
    //     author: _members.lj,
    //     content: "讲座开始之前，要不要了解下我们宝宝这个阶段的成长技能呢？"
    // }
    ],
    _dialog.d1 = [{
        type: "plain",
        author: _members.me,
        content: "开始了解"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "美吉姆成长金字塔是美吉姆为0-6岁儿 童家庭量身打造的成长解决方案，是一 套针对0-6岁小朋友的互动技能几发育 追踪识别系统。",
        pause: 2e3
    },

    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/chengzhangjinzita.jpeg",
        pause: 2e3
    },
    {
        type: "plain",
        author: _members.lj,
        content: "美吉姆成长金字塔" + _translate2.replace("%placehold%", "快来看看宝宝成长过程的必备技能吧"),
        //pause: 4e3,
        linkplain:"openSkillTest",
        linkcolor:"blue",
        linkimg:_imgFileUrl+"/chengzhangjinzita.jpeg"
    }

    ],

    _dialog.d2 = [{
        type: "plain",
        author: _members.me,
        content: "了解课程"
    },
    // {
    //     type: "picture",
    //     author: _members.lj,
    //     content: _imgFileUrl+"/kecheng.jpg",
    //     pause: 2e3
    // },
    {
        type: "plain",
        author: _members.lj,
        content: "美吉姆三大课程介绍" + _translate2.replace("%placehold%", "欢动课、艺术课、音乐课课程介绍"),
        //pause: 4e3,
        linkplain:"openKecheng",
        linkcolor:"blue",
        linkimg:_imgFileUrl+"美吉姆头像.jpg",
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
        content: "我猜，您一定喜欢这些！！！ ",
        pause: 2e3
    },
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/一.jpg",
        pause: 2e3
    },
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/二.jpg",
        pause: 2e3
    },
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/三.jpg",
        pause: 2e3
    }
    // {
    //     type: "picture",
    //     author: _members.lj,
    //     content: _imgFileUrl+"/chengzhangjinzita.jpeg",
    // }
    ],
    _dialog.d4_2 = [{
        type: "plain",
        author: _members.me,
        content: "今天有啥优惠吗？"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "问到了关键，今天我们老板可是下血本喽！ ！！",
        pause: 2e3
    },
    {
        type: "picture",
        author: _members.lj,
        content: _imgFileUrl+"/6重礼.jpg",
        pause: 2e3
    },
    {
        type: "plain",
        author: _members.lj,
        content: "还有一重大礼，就在咨询处那里！",
        pause: 2e3
    },
    {
        type: "plain",
        author: _members.lj,
        content: "这已经是年度钜惠了，赶上开业预售的价格了，仅限今天哦！",
        pause: 2e3
    },
    {
        type: "plain",
        author: _members.lj,
        content: "场地后方的咨询区，随时欢迎您！",
        pause: 2e3
    }
    ],
    _dialog.d5 = [
    {
        type: "plain",
        author: _members.lj,
        content: "对了，还有2件事儿，差点忘了告诉您！",
        pause: 2e3
    },
    {
        type: "plain",
        author: _members.me,
        content: "还有什么事儿？"
    },
    {
        type: "plain",
        author: _members.lj,
        content: "后面那家做儿童艺术的，叫艾涂图，也是我们家的兄弟品牌，今天也有大优惠哦！",
        //flag: "emoji",
        pause: 2e3
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
        pause: 2e3
    },
    {
        type: "plain",
        author: _members.lj,
        content: "我们的地址 \n 万达美吉姆：烟台市芝罘区万达十字街友谊街c-123美吉姆早教 0535-6661880 \n 爱琴海艾涂图：烟台市经济技术开发区衡山路18号 万行爱琴海购物公园F2021 0535-3038880 \n 爱琴海艾涂图：烟台市经济技术开发区衡山路18号 万行爱琴海购物公园F2021 0535-3389990",
        pause: 2e3
    },
    {
        type: "plain",
        author: _members.lj,
        content: "好嘞，您可以抬头，认真学习啦。感谢您的支持与配合！",
        pause: 2e3
    }
    ],
    _dialog.d6 = [{
        type: "plain",
        author: _members.me,
        content: "了解更多"
    },
    // {
    //     type: "plain",
    //     author: _members.lj,
    //     content: "美吉姆成长金字塔是美吉姆为0-6岁儿童家庭量身打造的成长解决方案，是一套针对0-6岁小朋友的互动技能及发育追踪识别体系。",
    //     pause: 2e3
    // },
    {
        type: "plain",
        author: _members.lj,
        content: "宝宝成长，不能再用身体健康这个单一的指标去衡量，对于宝宝综合素质的培养才是合格家长的目标。通过成长金字塔，家长可以对宝宝不同年龄段能力的成长进行直观的观察和追踪宝宝，并及时给到宝宝更多鼓励和帮助。成长金字塔将儿童每个阶段所要获得的技能分成了不同的2－6个成长技能积木。在这个过程中，培养小朋友朝着自己的目标努力，完成每个技能积木的学习；教师在教学过程中，也会针对每个技能积木给予小朋友因人而异的鼓励和指导，做到因材施教；家长也能够追踪自已孩子每个技能积木的学习情况，给予及时的指导和鼓励，认可小朋友取得的成就，从而帮助孩子更好的成长。",
        pause: 2e3
    },
    {
        type: "plain",
        author: _members.lj,
        content: "成长金字塔以激励的方式，明确每位小朋友的个人目标，完成每个阶段所有技能积木的学习，以获得并掌握该阶段所应具备的各项发育及技能。随着小朋友接受每项挑战并获得成功，他们的自尊心和自信心也随之增长。在完成技能积木的过程中，小朋友学习如何朝着目标而努力，老师也将针对每个小朋友的实际技能水平因材施教，而家长也可以更加准确直观地了解小朋友每个阶段的成长情况，并给予及时的鼓励及帮助。"
    }],
    _dialog.d7 = [{
        type: "plain",
        author: _members.me,
        content: "下一步"
    },{
        type: "plain",
        author: _members.lj,
        content: "了解了宝宝现阶段的成长技能，难道您就不好奇美吉姆是通过什么课程实现这些技能的吗？"
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
    }],
    _dialog.dr_2 = [{
        type: "plain",
        author: _members.lj,
        content: ""
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
            clearTimeout(window.waitUser);
            if ( parseInt(a) == 1 && parseInt(n) == 6) {
                $(".J_choiceWrapper").hide();
            }

            if ( parseInt(a) == 6 && parseInt(n) == 6) {
                //alert("了解更多");
                $(".J_skillTestMoreDiv").filter('[data-gallery="1"]').show();
                var t = $(".J_galleryClose"),
                a = $(".J_skillTestMoreDiv");
                t.on("click",
                function() {
                    a.hide()
                })
                // $(".J_mainChoice").find(".J_liNext").not(".disabled") || clearTimeout(window.waitUser)
                return false;
            }

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
            //alert(e)
            // "true" != $(this).attr("translated") && $(this).html($(this).siblings(".J_actualContent").html()).attr("translated", "true")
            $(".J_skillTestDiv").filter('[data-gallery="1"]').show();
            // $(".J_gallerySlide").css({
            //     "line-height": $(window).height() + "px"
            // });
            //alert($(".J_choice").html());
            // $(".J_choiceWrapper").hide()
            // $(".choosen").addClass("J_inputWrapper")
            var t = $(".J_galleryClose"),
            a = $(".J_skillTestDiv");
            t.on("click",
            function() {
                a.hide()
            })
        }),
        $(document).on("click", ".openKecheng",
        function(e) {
            //"true" != $(this).attr("translated") && $(this).html($(this).siblings(".J_actualContent").html()).attr("translated", "true")

            $(".J_KechengDiv").filter('[data-gallery="1"]').show();
            $(".J_gallerySlide").css({
                "line-height": $(window).height() + "px"
            });

            var t = $(".J_galleryClose"),
            a = $(".J_KechengDiv");
            t.on("click",
            function() {
                a.hide()
            })
        }),



        // $(document).on("click", ".J_register",
        // function(e) {
        //     var t = $(this);
        //     "true" != $(this).attr("registered") && $.ajax({
        //         url: "http://xmt.www.mi.com/index.php?id=338&do=book",
        //         type: "POST",
        //         dataType: "json",
        //         success: function(e) {
        //             e && 1e3 === e.header.code ? (t.html("您已成功预约").attr("registered", "true"), l(_dialog.dreg_1)) : l(_dialog.dreg_2)
        //         }
        //     })
        // }),

        $(document).on("click", ".startSkillTest",
        function(e) {
            var t = $(this);
            //alert($(".Box_name").val())
            var Box_name = $(".Box_name").val();
            var Box_birthday = $(".Box_birthday").val();
            var Box_isvip = $(".Box_isvip").val();
            var Box_mobile = $(".Box_mobile").val();

            if (Box_birthday == "" || Box_birthday === undefined) {
                alert("请选择宝宝生日");return false;
            }

            if (Box_name == "" || Box_name === undefined) {
                alert("请填写宝宝姓名");return false;
            }

            if (Box_mobile == "" || Box_mobile === undefined) {
                alert("请填写手机号");return false;
            }

            var stopDate = new Date();
            console.log(Box_birthday);
            console.log(new Date(Box_birthday));
            console.log(stopDate);
            var month = monthDiff(new Date(Box_birthday),stopDate)

            $.ajax({
                url: "/index/",
                type: "POST",
                dataType: "json",
                data:{
                    "Box_name" : Box_name,
                    "Box_birthday" : Box_birthday,
                    "Box_isvip" : Box_isvip,
                    "Box_mobile" : Box_mobile
                },
                success: function(e) {
                    // e && 1e3 === e.header.code ? (t.html("您已成功预约").attr("registered", "true"), l(_dialog.dreg_1)) : l(_dialog.dreg_2)
                }
            })
            //alert(month)

            //金字塔1
            if (month <= 6 && month >= 0) {
                $(".J_skillTestDiv").hide();
                _skillText = "您宝宝的月龄是"+month+"个月，您需要掌握上图中的必备技能 \n 可以参加：\n 美吉姆欢动课：学阶一";
                _skillImg = _imgFileUrl+"/成长金字塔1.jpg";
                _dialog.dr_1[0]['content'] = _skillImg;
                _dialog.dr_1[1]['content'] = _skillText;
            }

            //金字塔2
            if (month <= 13 && month >= 7) {
                $(".J_skillTestDiv").hide();
                _skillText = "您宝宝的月龄是"+month+"个月，您需要掌握上图中的必备技能 \n可以参加： \n 美吉姆欢动课：学阶二 \n 美吉姆音乐课";
                _skillImg = _imgFileUrl+"/成长金字塔2.jpg";
                _dialog.dr_1[0]['content'] = _skillImg;
                _dialog.dr_1[1]['content'] = _skillText;
            }
            //金字塔3
            if (month <= 22 && month >= 14) {
                $(".J_skillTestDiv").hide();
                _skillText = "您宝宝的月龄是"+month+"个月，您需要掌握上图中的必备技能 \n可以参加： \n 美吉姆欢动课：学阶三 \n 美吉姆艺术课：学阶一 \n 美吉姆音乐课";
                _skillImg = _imgFileUrl+"/成长金字塔3.jpg";
                _dialog.dr_1[0]['content'] = _skillImg;
                _dialog.dr_1[1]['content'] = _skillText;
            }
            //金字塔4
            if (month <= 30 && month >= 23) {
                $(".J_skillTestDiv").hide();
                _skillText = "您宝宝的月龄是"+month+"个月，您需要掌握上图中的必备技能 \n可以参加： \n 美吉姆欢动课：学阶四 \n 美吉姆艺术课：学阶一 \n 美吉姆音乐课";
                _skillImg = _imgFileUrl+"/成长金字塔4.jpg";
                _dialog.dr_1[0]['content'] = _skillImg;
                _dialog.dr_1[1]['content'] = _skillText;
            }
            //金字塔5
            if (month <= 42 && month >= 31) {
                $(".J_skillTestDiv").hide();
                _skillText = "您宝宝的月龄是"+month+"个月，您需要掌握上图中的必备技能 \n可以参加： \n 美吉姆欢动课：学阶五 \n 美吉姆艺术课：学阶二 \n 美吉姆音乐课";
                _skillImg = _imgFileUrl+"/成长金字塔4.jpg";
                _dialog.dr_1[0]['content'] = _skillImg;
                _dialog.dr_1[1]['content'] = _skillText;
            }
            //金字塔6 43 - 54
            if (month <= 54 && month >= 43) {
                $(".J_skillTestDiv").hide();
                _skillText = "您宝宝的月龄是"+month+"个月，您需要掌握上图中的必备技能 \n可以参加： \n 美吉姆欢动课：学阶六 \n 美吉姆艺术课：学阶二 \n 美吉姆音乐课";
                _skillImg = _imgFileUrl+"/成长金字塔4.jpg";
                _dialog.dr_1[0]['content'] = _skillImg;
                _dialog.dr_1[1]['content'] = _skillText;
            }
            //金字塔7 55 - 72
            if (month <= 72 && month >= 55) {
                $(".J_skillTestDiv").hide();
                _skillText = "您宝宝的月龄是"+month+"个月，您需要掌握上图中的必备技能 \n可以参加： \n 美吉姆欢动课： \n 美吉姆艺术课：学阶二 \n 美吉姆音乐课";
                _skillImg = _imgFileUrl+"/成长金字塔4.jpg";
                _dialog.dr_1[0]['content'] = _skillImg;
                _dialog.dr_1[1]['content'] = _skillText;
            }
            // $(".J_choice[data-choice="0"]").hide();
            // $(".J_choice").find('.J_choic[data-choice="2"]').show();
            //alert($(".J_choice").find('.choosen').html())

            // $(".J_choiceWrapper").find('.J_choice[data-choice="0"]').hide();
            // $(".J_choiceWrapper").find('.J_choice[data-choice="6"]').show();

            //l(_dialog.dr_1,)

            l(_dialog.dr_1,
            function() {
                $(".J_choiceWrapper").show()
            })

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
    p();
    // function fanye(e){
    // 	var fy=1;
    // 	$(".main").on("touchstart",function(e) {
    // 		$(".main").hide()
    //         $(".chat").show()
    // 	});
    // };
    fanye();
    function fanye(){
    	var fy=1;
        $(document).on("touchstart", ".main",
        function(e) {
            x1 = e.originalEvent.targetTouches[0].pageX;
        });

        $(document).on("touchmove", ".main",
        function(e) {
            e.preventDefault()
        });

        $(document).on("touchend", ".main",
        function(e) {
            x2 = e.originalEvent.changedTouches[0].pageX;
    		if((x1-x2)<-10){ //往右滑
    			if(fy==0)return false;
    			fy=0;
                $(".main").hide()
                $(".chat").show()
    			//$(".main").addClass("move-right")
    		}
        });

    }
    $(document).on("touchstart", ".main",
    function(e) {
        x1 = e.originalEvent.targetTouches[0].pageX;
    });

    var myDate = new Date();
    $(".bb>.s1").html(myRight(myDate.getHours(),2)+":"+myRight(myDate.getMinutes(),2));
    $(".bb>.s2").html(myRight(myDate.getMonth()+1,2)+"月"+myRight(myDate.getDate(),2)+"日 "+myDay(myDate.getDay()));

    function myRight(str, len){
    	return ("0"+str).substr(-len);
    }
    function myDay(str){
    	var Week = ['日','一','二','三','四','五','六'];
        return '星期' + Week[str];
    }
});
