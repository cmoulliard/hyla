!function (e, t) {
    "function" == typeof define && define.amd ? define(function () {
        return e.Reveal = t(), e.Reveal
    }) : "object" == typeof exports ? module.exports = t() : e.Reveal = t()
}(this, function () {
    "use strict";
    function e(e) {
        if (t(), Pr.transforms2d || Pr.transforms3d) {
            Cr.wrapper = document.querySelector(".reveal"), Cr.slides = document.querySelector(".reveal .slides"), window.addEventListener("load", W, !1);
            var n = vr.getQueryHash();
            "undefined" != typeof n.dependencies && delete n.dependencies, h(xr, e), h(xr, n), q(), r()
        } else {
            document.body.setAttribute("class", "no-transforms");
            for (var a = document.getElementsByTagName("img"), i = 0, o = a.length; o > i; i++) {
                var s = a[i];
                s.getAttribute("data-src") && (s.setAttribute("src", s.getAttribute("data-src")), s.removeAttribute("data-src"))
            }
        }
    }

    function t() {
        Pr.transforms3d = "WebkitPerspective"in document.body.style || "MozPerspective"in document.body.style || "msPerspective"in document.body.style || "OPerspective"in document.body.style || "perspective"in document.body.style, Pr.transforms2d = "WebkitTransform"in document.body.style || "MozTransform"in document.body.style || "msTransform"in document.body.style || "OTransform"in document.body.style || "transform"in document.body.style, Pr.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, Pr.requestAnimationFrame = "function" == typeof Pr.requestAnimationFrameMethod, Pr.canvas = !!document.createElement("canvas").getContext, Pr.touch = !!("ontouchstart"in window), Pr.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test(navigator.userAgent), wr = /(iphone|ipod|ipad|android)/gi.test(navigator.userAgent)
    }

    function r() {
        function e() {
            a.length && head.js.apply(null, a), n()
        }

        function t(t) {
            head.ready(t.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0], function () {
                "function" == typeof t.callback && t.callback.apply(this), 0 === --i && e()
            })
        }

        for (var r = [], a = [], i = 0, o = 0, s = xr.dependencies.length; s > o; o++) {
            var c = xr.dependencies[o];
            (!c.condition || c.condition()) && (c.async ? a.push(c.src) : r.push(c.src), t(c))
        }
        r.length ? (i = r.length, head.js.apply(null, r)) : e()
    }

    function n() {
        a(), u(), s(), at(), p(), kt(), ut(!0), setTimeout(function () {
            Cr.slides.classList.remove("no-transition"), qr = !0, T("ready", {indexh: hr, indexv: gr, currentSlide: yr})
        }, 1), x() && (v(), "complete" === document.readyState ? o() : window.addEventListener("load", o))
    }

    function a() {
        Cr.slides.classList.add("no-transition"), Cr.background = c(Cr.wrapper, "div", "backgrounds", null), Cr.progress = c(Cr.wrapper, "div", "progress", "<span></span>"), Cr.progressbar = Cr.progress.querySelector("span"), c(Cr.wrapper, "aside", "controls", '<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'), Cr.slideNumber = c(Cr.wrapper, "div", "slide-number", ""), c(Cr.wrapper, "div", "pause-overlay", null), Cr.controls = document.querySelector(".reveal .controls"), Cr.theme = document.querySelector("#theme"), Cr.wrapper.setAttribute("role", "application"), Cr.controlsLeft = g(document.querySelectorAll(".navigate-left")), Cr.controlsRight = g(document.querySelectorAll(".navigate-right")), Cr.controlsUp = g(document.querySelectorAll(".navigate-up")), Cr.controlsDown = g(document.querySelectorAll(".navigate-down")), Cr.controlsPrev = g(document.querySelectorAll(".navigate-prev")), Cr.controlsNext = g(document.querySelectorAll(".navigate-next")), Cr.statusDiv = i()
    }

    function i() {
        var e = document.getElementById("aria-status-div");
        return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.setAttribute("id", "aria-status-div"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), Cr.wrapper.appendChild(e)), e
    }

    function o() {
        var e = z(window.innerWidth, window.innerHeight), t = Math.floor(e.width * (1 + xr.margin)), r = Math.floor(e.height * (1 + xr.margin)), n = e.width, a = e.height;
        L("@page{size:" + t + "px " + r + "px; margin: 0;}"), L(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + n + "px; max-height:" + a + "px}"), document.body.classList.add("print-pdf"), document.body.style.width = t + "px", document.body.style.height = r + "px", g(Cr.wrapper.querySelectorAll(kr)).forEach(function (e) {
            if (e.classList.contains("stack") === !1) {
                var i = (t - n) / 2, o = (r - a) / 2, s = E(e), c = Math.max(Math.ceil(s / r), 1);
                (1 === c && xr.center || e.classList.contains("center")) && (o = Math.max((r - s) / 2, 0)), e.style.left = i + "px", e.style.top = o + "px", e.style.width = n + "px";
                var l = e.querySelector(".slide-background");
                l && (l.style.width = t + "px", l.style.height = r * c + "px", l.style.top = -o + "px", l.style.left = -i + "px")
            }
        }), g(Cr.wrapper.querySelectorAll(kr + " .fragment")).forEach(function (e) {
            e.classList.add("visible")
        })
    }

    function s() {
        Cr.slides.querySelector("iframe") && setInterval(function () {
            (0 !== Cr.wrapper.scrollTop || 0 !== Cr.wrapper.scrollLeft) && (Cr.wrapper.scrollTop = 0, Cr.wrapper.scrollLeft = 0)
        }, 500)
    }

    function c(e, t, r, n) {
        for (var a = e.querySelectorAll("." + r), i = 0; i < a.length; i++) {
            var o = a[i];
            if (o.parentNode === e)return o
        }
        var s = document.createElement(t);
        return s.classList.add(r), "string" == typeof n && (s.innerHTML = n), e.appendChild(s), s
    }

    function l() {
        var e = x();
        Cr.background.innerHTML = "", Cr.background.classList.add("no-transition"), g(Cr.wrapper.querySelectorAll(Ar)).forEach(function (t) {
            var r;
            r = e ? d(t, t) : d(t, Cr.background), g(t.querySelectorAll("section")).forEach(function (t) {
                e ? d(t, t) : d(t, r), r.classList.add("stack")
            })
        }), xr.parallaxBackgroundImage ? (Cr.background.style.backgroundImage = 'url("' + xr.parallaxBackgroundImage + '")', Cr.background.style.backgroundSize = xr.parallaxBackgroundSize, setTimeout(function () {
            Cr.wrapper.classList.add("has-parallax-background")
        }, 1)) : (Cr.background.style.backgroundImage = "", Cr.wrapper.classList.remove("has-parallax-background"))
    }

    function d(e, t) {
        var r = {
            background: e.getAttribute("data-background"),
            backgroundSize: e.getAttribute("data-background-size"),
            backgroundImage: e.getAttribute("data-background-image"),
            backgroundVideo: e.getAttribute("data-background-video"),
            backgroundIframe: e.getAttribute("data-background-iframe"),
            backgroundColor: e.getAttribute("data-background-color"),
            backgroundRepeat: e.getAttribute("data-background-repeat"),
            backgroundPosition: e.getAttribute("data-background-position"),
            backgroundTransition: e.getAttribute("data-background-transition")
        }, n = document.createElement("div");
        n.className = "slide-background " + e.className.replace(/present|past|future/, ""), r.background && (/^(http|file|\/\/)/gi.test(r.background) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test(r.background) ? e.setAttribute("data-background-image", r.background) : n.style.background = r.background), (r.background || r.backgroundColor || r.backgroundImage || r.backgroundVideo || r.backgroundIframe) && n.setAttribute("data-background-hash", r.background + r.backgroundSize + r.backgroundImage + r.backgroundVideo + r.backgroundIframe + r.backgroundColor + r.backgroundRepeat + r.backgroundPosition + r.backgroundTransition), r.backgroundSize && (n.style.backgroundSize = r.backgroundSize), r.backgroundColor && (n.style.backgroundColor = r.backgroundColor), r.backgroundRepeat && (n.style.backgroundRepeat = r.backgroundRepeat), r.backgroundPosition && (n.style.backgroundPosition = r.backgroundPosition), r.backgroundTransition && n.setAttribute("data-background-transition", r.backgroundTransition), t.appendChild(n), e.classList.remove("has-dark-background"), e.classList.remove("has-light-background");
        var a = window.getComputedStyle(n).backgroundColor;
        if (a) {
            var i = k(a);
            i && 0 !== i.a && e.classList.add(A(a) < 128 ? "has-dark-background" : "has-light-background")
        }
        return n
    }

    function u() {
        xr.postMessage && window.addEventListener("message", function (e) {
            var t = e.data;
            "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t), t.method && "function" == typeof vr[t.method] && vr[t.method].apply(vr, t.args))
        }, !1)
    }

    function p(e) {
        var t = Cr.wrapper.querySelectorAll(kr).length;
        Cr.wrapper.classList.remove(xr.transition), "object" == typeof e && h(xr, e), Pr.transforms3d === !1 && (xr.transition = "linear"), Cr.wrapper.classList.add(xr.transition), Cr.wrapper.setAttribute("data-transition-speed", xr.transitionSpeed), Cr.wrapper.setAttribute("data-background-transition", xr.backgroundTransition), Cr.controls.style.display = xr.controls ? "block" : "none", Cr.progress.style.display = xr.progress ? "block" : "none", xr.rtl ? Cr.wrapper.classList.add("rtl") : Cr.wrapper.classList.remove("rtl"), xr.center ? Cr.wrapper.classList.add("center") : Cr.wrapper.classList.remove("center"), xr.pause === !1 && J(), xr.mouseWheel ? (document.addEventListener("DOMMouseScroll", Gt, !1), document.addEventListener("mousewheel", Gt, !1)) : (document.removeEventListener("DOMMouseScroll", Gt, !1), document.removeEventListener("mousewheel", Gt, !1)), xr.rollingLinks ? N() : I(), xr.previewLinks ? C() : (P(), C("[data-preview-link]")), Lr && (Lr.destroy(), Lr = null), t > 1 && xr.autoSlide && xr.autoSlideStoppable && Pr.canvas && Pr.requestAnimationFrame && (Lr = new fr(Cr.wrapper, function () {
            return Math.min(Math.max((Date.now() - zr) / Wr, 0), 1)
        }), Lr.on("click", pr), Fr = !1), xr.fragments === !1 && g(Cr.slides.querySelectorAll(".fragment")).forEach(function (e) {
            e.classList.add("visible"), e.classList.remove("current-fragment")
        }), nt()
    }

    function f() {
        if (Rr = !0, window.addEventListener("hashchange", sr, !1), window.addEventListener("resize", cr, !1), xr.touch && (Cr.wrapper.addEventListener("touchstart", _t, !1), Cr.wrapper.addEventListener("touchmove", Kt, !1), Cr.wrapper.addEventListener("touchend", Vt, !1), window.navigator.pointerEnabled ? (Cr.wrapper.addEventListener("pointerdown", Zt, !1), Cr.wrapper.addEventListener("pointermove", Jt, !1), Cr.wrapper.addEventListener("pointerup", Qt, !1)) : window.navigator.msPointerEnabled && (Cr.wrapper.addEventListener("MSPointerDown", Zt, !1), Cr.wrapper.addEventListener("MSPointerMove", Jt, !1), Cr.wrapper.addEventListener("MSPointerUp", Qt, !1))), xr.keyboard && (document.addEventListener("keydown", $t, !1), document.addEventListener("keypress", Ut, !1)), xr.progress && Cr.progress && Cr.progress.addEventListener("click", er, !1), xr.focusBodyOnPageVisibilityChange) {
            var e;
            "hidden"in document ? e = "visibilitychange" : "msHidden"in document ? e = "msvisibilitychange" : "webkitHidden"in document && (e = "webkitvisibilitychange"), e && document.addEventListener(e, lr, !1)
        }
        var t = ["touchstart", "click"];
        navigator.userAgent.match(/android/gi) && (t = ["touchstart"]), t.forEach(function (e) {
            Cr.controlsLeft.forEach(function (t) {
                t.addEventListener(e, tr, !1)
            }), Cr.controlsRight.forEach(function (t) {
                t.addEventListener(e, rr, !1)
            }), Cr.controlsUp.forEach(function (t) {
                t.addEventListener(e, nr, !1)
            }), Cr.controlsDown.forEach(function (t) {
                t.addEventListener(e, ar, !1)
            }), Cr.controlsPrev.forEach(function (t) {
                t.addEventListener(e, ir, !1)
            }), Cr.controlsNext.forEach(function (t) {
                t.addEventListener(e, or, !1)
            })
        })
    }

    function v() {
        Rr = !1, document.removeEventListener("keydown", $t, !1), document.removeEventListener("keypress", Ut, !1), window.removeEventListener("hashchange", sr, !1), window.removeEventListener("resize", cr, !1), Cr.wrapper.removeEventListener("touchstart", _t, !1), Cr.wrapper.removeEventListener("touchmove", Kt, !1), Cr.wrapper.removeEventListener("touchend", Vt, !1), window.navigator.pointerEnabled ? (Cr.wrapper.removeEventListener("pointerdown", Zt, !1), Cr.wrapper.removeEventListener("pointermove", Jt, !1), Cr.wrapper.removeEventListener("pointerup", Qt, !1)) : window.navigator.msPointerEnabled && (Cr.wrapper.removeEventListener("MSPointerDown", Zt, !1), Cr.wrapper.removeEventListener("MSPointerMove", Jt, !1), Cr.wrapper.removeEventListener("MSPointerUp", Qt, !1)), xr.progress && Cr.progress && Cr.progress.removeEventListener("click", er, !1), ["touchstart", "click"].forEach(function (e) {
            Cr.controlsLeft.forEach(function (t) {
                t.removeEventListener(e, tr, !1)
            }), Cr.controlsRight.forEach(function (t) {
                t.removeEventListener(e, rr, !1)
            }), Cr.controlsUp.forEach(function (t) {
                t.removeEventListener(e, nr, !1)
            }), Cr.controlsDown.forEach(function (t) {
                t.removeEventListener(e, ar, !1)
            }), Cr.controlsPrev.forEach(function (t) {
                t.removeEventListener(e, ir, !1)
            }), Cr.controlsNext.forEach(function (t) {
                t.removeEventListener(e, or, !1)
            })
        })
    }

    function h(e, t) {
        for (var r in t)e[r] = t[r]
    }

    function g(e) {
        return Array.prototype.slice.call(e)
    }

    function m(e) {
        if ("string" == typeof e) {
            if ("null" === e)return null;
            if ("true" === e)return !0;
            if ("false" === e)return !1;
            if (e.match(/^\d+$/))return parseFloat(e)
        }
        return e
    }

    function y(e, t) {
        var r = e.x - t.x, n = e.y - t.y;
        return Math.sqrt(r * r + n * n)
    }

    function b(e, t) {
        e.style.WebkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.transform = t
    }

    function w(e) {
        "string" == typeof e.layout && (Ir.layout = e.layout), "string" == typeof e.overview && (Ir.overview = e.overview), Ir.layout ? b(Cr.slides, Ir.layout + " " + Ir.overview) : b(Cr.slides, Ir.overview)
    }

    function L(e) {
        var t = document.createElement("style");
        t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
    }

    function k(e) {
        var t = e.match(/^#([0-9a-f]{3})$/i);
        if (t && t[1])return t = t[1], {
            r: 17 * parseInt(t.charAt(0), 16),
            g: 17 * parseInt(t.charAt(1), 16),
            b: 17 * parseInt(t.charAt(2), 16)
        };
        var r = e.match(/^#([0-9a-f]{6})$/i);
        if (r && r[1])return r = r[1], {
            r: parseInt(r.substr(0, 2), 16),
            g: parseInt(r.substr(2, 2), 16),
            b: parseInt(r.substr(4, 2), 16)
        };
        var n = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
        if (n)return {r: parseInt(n[1], 10), g: parseInt(n[2], 10), b: parseInt(n[3], 10)};
        var a = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
        return a ? {r: parseInt(a[1], 10), g: parseInt(a[2], 10), b: parseInt(a[3], 10), a: parseFloat(a[4])} : null
    }

    function A(e) {
        return "string" == typeof e && (e = k(e)), e ? (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 : null
    }

    function E(e) {
        var t = 0;
        if (e) {
            var r = 0;
            g(e.childNodes).forEach(function (e) {
                "number" == typeof e.offsetTop && e.style && ("absolute" === window.getComputedStyle(e).position && (r += 1), t = Math.max(t, e.offsetTop + e.offsetHeight))
            }), 0 === r && (t = e.offsetHeight)
        }
        return t
    }

    function S(e, t) {
        if (t = t || 0, e) {
            var r, n = e.style.height;
            return e.style.height = "0px", r = t - e.parentNode.offsetHeight, e.style.height = n + "px", r
        }
        return t
    }

    function x() {
        return /print-pdf/gi.test(window.location.search)
    }

    function q() {
        xr.hideAddressBar && wr && (window.addEventListener("load", M, !1), window.addEventListener("orientationchange", M, !1))
    }

    function M() {
        setTimeout(function () {
            window.scrollTo(0, 1)
        }, 10)
    }

    function T(e, t) {
        var r = document.createEvent("HTMLEvents", 1, 2);
        r.initEvent(e, !0, !0), h(r, t), Cr.wrapper.dispatchEvent(r), xr.postMessageEvents && window.parent !== window.self && window.parent.postMessage(JSON.stringify({
            namespace: "reveal",
            eventName: e,
            state: Mt()
        }), "*")
    }

    function N() {
        if (Pr.transforms3d && !("msPerspective"in document.body.style))for (var e = Cr.wrapper.querySelectorAll(kr + " a"), t = 0, r = e.length; r > t; t++) {
            var n = e[t];
            if (!(!n.textContent || n.querySelector("*") || n.className && n.classList.contains(n, "roll"))) {
                var a = document.createElement("span");
                a.setAttribute("data-title", n.text), a.innerHTML = n.innerHTML, n.classList.add("roll"), n.innerHTML = "", n.appendChild(a)
            }
        }
    }

    function I() {
        for (var e = Cr.wrapper.querySelectorAll(kr + " a.roll"), t = 0, r = e.length; r > t; t++) {
            var n = e[t], a = n.querySelector("span");
            a && (n.classList.remove("roll"), n.innerHTML = a.innerHTML)
        }
    }

    function C(e) {
        var t = g(document.querySelectorAll(e ? e : "a"));
        t.forEach(function (e) {
            /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", ur, !1)
        })
    }

    function P() {
        var e = g(document.querySelectorAll("a"));
        e.forEach(function (e) {
            /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", ur, !1)
        })
    }

    function D(e) {
        R(), Cr.overlay = document.createElement("div"), Cr.overlay.classList.add("overlay"), Cr.overlay.classList.add("overlay-preview"), Cr.wrapper.appendChild(Cr.overlay), Cr.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', '<a class="external" href="' + e + '" target="_blank"><span class="icon"></span></a>', "</header>", '<div class="spinner"></div>', '<div class="viewport">', '<iframe src="' + e + '"></iframe>', "</div>"].join(""), Cr.overlay.querySelector("iframe").addEventListener("load", function () {
            Cr.overlay.classList.add("loaded")
        }, !1), Cr.overlay.querySelector(".close").addEventListener("click", function (e) {
            R(), e.preventDefault()
        }, !1), Cr.overlay.querySelector(".external").addEventListener("click", function () {
            R()
        }, !1), setTimeout(function () {
            Cr.overlay.classList.add("visible")
        }, 1)
    }

    function H() {
        if (xr.help) {
            R(), Cr.overlay = document.createElement("div"), Cr.overlay.classList.add("overlay"), Cr.overlay.classList.add("overlay-help"), Cr.wrapper.appendChild(Cr.overlay);
            var e = '<p class="title">Keyboard Shortcuts</p><br/>';
            e += "<table><th>KEY</th><th>ACTION</th>";
            for (var t in Xr)e += "<tr><td>" + t + "</td><td>" + Xr[t] + "</td></tr>";
            e += "</table>", Cr.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', "</header>", '<div class="viewport">', '<div class="viewport-inner">' + e + "</div>", "</div>"].join(""), Cr.overlay.querySelector(".close").addEventListener("click", function (e) {
                R(), e.preventDefault()
            }, !1), setTimeout(function () {
                Cr.overlay.classList.add("visible")
            }, 1)
        }
    }

    function R() {
        Cr.overlay && (Cr.overlay.parentNode.removeChild(Cr.overlay), Cr.overlay = null)
    }

    function W() {
        if (Cr.wrapper && !x()) {
            var e = z(), t = 20;
            O(xr.width, xr.height, t), Cr.slides.style.width = e.width + "px", Cr.slides.style.height = e.height + "px", Nr = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), Nr = Math.max(Nr, xr.minScale), Nr = Math.min(Nr, xr.maxScale), 1 === Nr ? (Cr.slides.style.zoom = "", Cr.slides.style.left = "", Cr.slides.style.top = "", Cr.slides.style.bottom = "", Cr.slides.style.right = "", w({layout: ""})) : !wr && /chrome/i.test(navigator.userAgent) && "undefined" != typeof Cr.slides.style.zoom ? (Cr.slides.style.zoom = Nr, w({layout: ""})) : (Cr.slides.style.left = "50%", Cr.slides.style.top = "50%", Cr.slides.style.bottom = "auto", Cr.slides.style.right = "auto", w({layout: "translate(-50%, -50%) scale(" + Nr + ")"}));
            for (var r = g(Cr.wrapper.querySelectorAll(kr)), n = 0, a = r.length; a > n; n++) {
                var i = r[n];
                "none" !== i.style.display && (i.style.top = xr.center || i.classList.contains("center") ? i.classList.contains("stack") ? 0 : Math.max((e.height - E(i)) / 2 - t, 0) + "px" : "")
            }
            ct(), pt()
        }
    }

    function O(e, t) {
        g(Cr.slides.querySelectorAll("section > .stretch")).forEach(function (r) {
            var n = S(r, t);
            if (/(img|video)/gi.test(r.nodeName)) {
                var a = r.naturalWidth || r.videoWidth, i = r.naturalHeight || r.videoHeight, o = Math.min(e / a, n / i);
                r.style.width = a * o + "px", r.style.height = i * o + "px"
            } else r.style.width = e + "px", r.style.height = n + "px"
        })
    }

    function z(e, t) {
        var r = {
            width: xr.width,
            height: xr.height,
            presentationWidth: e || Cr.wrapper.offsetWidth,
            presentationHeight: t || Cr.wrapper.offsetHeight
        };
        return r.presentationWidth -= r.presentationHeight * xr.margin, r.presentationHeight -= r.presentationHeight * xr.margin, "string" == typeof r.width && /%$/.test(r.width) && (r.width = parseInt(r.width, 10) / 100 * r.presentationWidth), "string" == typeof r.height && /%$/.test(r.height) && (r.height = parseInt(r.height, 10) / 100 * r.presentationHeight), r
    }

    function F(e, t) {
        "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0)
    }

    function Y(e) {
        if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
            var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
            return parseInt(e.getAttribute(t) || 0, 10)
        }
        return 0
    }

    function X() {
        xr.overview && !_() && (Mr = !0, Cr.wrapper.classList.add("overview"), Cr.wrapper.classList.remove("overview-deactivating"), Pr.overviewTransitions && setTimeout(function () {
            Cr.wrapper.classList.add("overview-animated")
        }, 1), Ht(), Cr.slides.appendChild(Cr.background), g(Cr.wrapper.querySelectorAll(kr)).forEach(function (e) {
            e.classList.contains("stack") || e.addEventListener("click", dr, !0)
        }), st(), j(), B(), W(), T("overviewshown", {indexh: hr, indexv: gr, currentSlide: yr}))
    }

    function j() {
        var e = 70, t = xr.width + e, r = xr.height + e;
        xr.rtl && (t = -t), g(Cr.wrapper.querySelectorAll(Ar)).forEach(function (e, n) {
            e.setAttribute("data-index-h", n), b(e, "translate3d(" + n * t + "px, 0, 0)"), e.classList.contains("stack") && g(e.querySelectorAll("section")).forEach(function (e, t) {
                e.setAttribute("data-index-h", n), e.setAttribute("data-index-v", t), b(e, "translate3d(0, " + t * r + "px, 0)")
            })
        }), g(Cr.background.childNodes).forEach(function (e, n) {
            b(e, "translate3d(" + n * t + "px, 0, 0)"), g(e.querySelectorAll(".slide-background")).forEach(function (e, t) {
                b(e, "translate3d(0, " + t * r + "px, 0)")
            })
        })
    }

    function B() {
        var e = 70, t = xr.width + e, r = xr.height + e;
        xr.rtl && (t = -t), w({overview: ["translateX(" + -hr * t + "px)", "translateY(" + -gr * r + "px)", "translateZ(" + (window.innerWidth < 400 ? -1e3 : -2500) + "px)"].join(" ")})
    }

    function U() {
        xr.overview && (Mr = !1, Cr.wrapper.classList.remove("overview"), Cr.wrapper.classList.remove("overview-animated"), Cr.wrapper.classList.add("overview-deactivating"), setTimeout(function () {
            Cr.wrapper.classList.remove("overview-deactivating")
        }, 1), Cr.wrapper.appendChild(Cr.background), g(Cr.wrapper.querySelectorAll(kr)).forEach(function (e) {
            b(e, ""), e.removeEventListener("click", dr, !0)
        }), g(Cr.background.querySelectorAll(".slide-background")).forEach(function (e) {
            b(e, "")
        }), w({overview: ""}), rt(hr, gr), W(), Dt(), T("overviewhidden", {indexh: hr, indexv: gr, currentSlide: yr}))
    }

    function $(e) {
        "boolean" == typeof e ? e ? X() : U() : _() ? U() : X()
    }

    function _() {
        return Mr
    }

    function K(e) {
        return e = e ? e : yr, e && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
    }

    function V() {
        var e = document.body, t = e.requestFullScreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
        t && t.apply(e)
    }

    function Z() {
        if (xr.pause) {
            var e = Cr.wrapper.classList.contains("paused");
            Ht(), Cr.wrapper.classList.add("paused"), e === !1 && T("paused")
        }
    }

    function J() {
        var e = Cr.wrapper.classList.contains("paused");
        Cr.wrapper.classList.remove("paused"), Dt(), e && T("resumed")
    }

    function Q(e) {
        "boolean" == typeof e ? e ? Z() : J() : G() ? J() : Z()
    }

    function G() {
        return Cr.wrapper.classList.contains("paused")
    }

    function et(e) {
        "boolean" == typeof e ? e ? Wt() : Rt() : Fr ? Wt() : Rt()
    }

    function tt() {
        return !(!Wr || Fr)
    }

    function rt(e, t, r, n) {
        mr = yr;
        var a = Cr.wrapper.querySelectorAll(Ar);
        void 0 !== t || _() || (t = Y(a[e])), mr && mr.parentNode && mr.parentNode.classList.contains("stack") && F(mr.parentNode, gr);
        var i = Tr.concat();
        Tr.length = 0;
        var o = hr || 0, s = gr || 0;
        hr = ot(Ar, void 0 === e ? hr : e), gr = ot(Er, void 0 === t ? gr : t), st(), W();
        e:for (var c = 0, l = Tr.length; l > c; c++) {
            for (var d = 0; d < i.length; d++)if (i[d] === Tr[c]) {
                i.splice(d, 1);
                continue e
            }
            document.documentElement.classList.add(Tr[c]), T(Tr[c])
        }
        for (; i.length;)document.documentElement.classList.remove(i.pop());
        _() && B();
        var u = a[hr], p = u.querySelectorAll("section");
        yr = p[gr] || u, "undefined" != typeof r && It(r);
        var f = hr !== o || gr !== s;
        f ? T("slidechanged", {
            indexh: hr,
            indexv: gr,
            previousSlide: mr,
            currentSlide: yr,
            origin: n
        }) : mr = null, mr && (mr.classList.remove("present"), mr.setAttribute("aria-hidden", "true"), Cr.wrapper.querySelector(Sr).classList.contains("present") && setTimeout(function () {
            var e, t = g(Cr.wrapper.querySelectorAll(Ar + ".stack"));
            for (e in t)t[e] && F(t[e], 0)
        }, 0)), (f || !mr) && (bt(mr), yt(yr)), Cr.statusDiv.textContent = yr.textContent, dt(), ct(), ut(), pt(), lt(), At(), Dt()
    }

    function nt() {
        v(), f(), W(), Wr = xr.autoSlide, Dt(), l(), At(), it(), dt(), ct(), ut(!0), lt(), st(), mt(), _() && j()
    }

    function at() {
        var e = g(Cr.wrapper.querySelectorAll(Ar));
        e.forEach(function (e) {
            var t = g(e.querySelectorAll("section"));
            t.forEach(function (e, t) {
                t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"))
            })
        })
    }

    function it() {
        var e = g(Cr.wrapper.querySelectorAll(Ar));
        e.forEach(function (e) {
            var t = g(e.querySelectorAll("section"));
            t.forEach(function (e) {
                Nt(e.querySelectorAll(".fragment"))
            }), 0 === t.length && Nt(e.querySelectorAll(".fragment"))
        })
    }

    function ot(e, t) {
        var r = g(Cr.wrapper.querySelectorAll(e)), n = r.length, a = x();
        if (n) {
            xr.loop && (t %= n, 0 > t && (t = n + t)), t = Math.max(Math.min(t, n - 1), 0);
            for (var i = 0; n > i; i++) {
                var o = r[i], s = xr.rtl && !K(o);
                if (o.classList.remove("past"), o.classList.remove("present"), o.classList.remove("future"), o.setAttribute("hidden", ""), o.setAttribute("aria-hidden", "true"), o.querySelector("section") && o.classList.add("stack"), a)o.classList.add("present"); else if (t > i) {
                    if (o.classList.add(s ? "future" : "past"), xr.fragments)for (var c = g(o.querySelectorAll(".fragment")); c.length;) {
                        var l = c.pop();
                        l.classList.add("visible"), l.classList.remove("current-fragment")
                    }
                } else if (i > t && (o.classList.add(s ? "past" : "future"), xr.fragments))for (var d = g(o.querySelectorAll(".fragment.visible")); d.length;) {
                    var u = d.pop();
                    u.classList.remove("visible"), u.classList.remove("current-fragment")
                }
            }
            r[t].classList.add("present"), r[t].removeAttribute("hidden"), r[t].removeAttribute("aria-hidden");
            var p = r[t].getAttribute("data-state");
            p && (Tr = Tr.concat(p.split(" ")))
        } else t = 0;
        return t
    }

    function st() {
        var e, t, r = g(Cr.wrapper.querySelectorAll(Ar)), n = r.length;
        if (n && "undefined" != typeof hr) {
            var a = _() ? 10 : xr.viewDistance;
            wr && (a = _() ? 6 : 2), x() && (a = Number.MAX_VALUE);
            for (var i = 0; n > i; i++) {
                var o = r[i], s = g(o.querySelectorAll("section")), c = s.length;
                if (e = Math.abs((hr || 0) - i) || 0, xr.loop && (e = Math.abs(((hr || 0) - i) % (n - a)) || 0), a > e ? ft(o) : vt(o), c)for (var l = Y(o), d = 0; c > d; d++) {
                    var u = s[d];
                    t = Math.abs(i === (hr || 0) ? (gr || 0) - d : d - l), a > e + t ? ft(u) : vt(u)
                }
            }
        }
    }

    function ct() {
        xr.progress && Cr.progressbar && (Cr.progressbar.style.width = wt() * Cr.wrapper.offsetWidth + "px")
    }

    function lt() {
        if (xr.slideNumber && Cr.slideNumber) {
            var e = "c";
            "string" == typeof xr.slideNumber && (e = xr.slideNumber);
            var t = St();
            Cr.slideNumber.innerHTML = e.replace(/h/g, hr).replace(/v/g, gr).replace(/c/g, Math.round(wt() * t) + 1).replace(/t/g, t + 1)
        }
    }

    function dt() {
        var e = ht(), t = gt();
        Cr.controlsLeft.concat(Cr.controlsRight).concat(Cr.controlsUp).concat(Cr.controlsDown).concat(Cr.controlsPrev).concat(Cr.controlsNext).forEach(function (e) {
            e.classList.remove("enabled"), e.classList.remove("fragmented")
        }), e.left && Cr.controlsLeft.forEach(function (e) {
            e.classList.add("enabled")
        }), e.right && Cr.controlsRight.forEach(function (e) {
            e.classList.add("enabled")
        }), e.up && Cr.controlsUp.forEach(function (e) {
            e.classList.add("enabled")
        }), e.down && Cr.controlsDown.forEach(function (e) {
            e.classList.add("enabled")
        }), (e.left || e.up) && Cr.controlsPrev.forEach(function (e) {
            e.classList.add("enabled")
        }), (e.right || e.down) && Cr.controlsNext.forEach(function (e) {
            e.classList.add("enabled")
        }), yr && (t.prev && Cr.controlsPrev.forEach(function (e) {
            e.classList.add("fragmented", "enabled")
        }), t.next && Cr.controlsNext.forEach(function (e) {
            e.classList.add("fragmented", "enabled")
        }), K(yr) ? (t.prev && Cr.controlsUp.forEach(function (e) {
            e.classList.add("fragmented", "enabled")
        }), t.next && Cr.controlsDown.forEach(function (e) {
            e.classList.add("fragmented", "enabled")
        })) : (t.prev && Cr.controlsLeft.forEach(function (e) {
            e.classList.add("fragmented", "enabled")
        }), t.next && Cr.controlsRight.forEach(function (e) {
            e.classList.add("fragmented", "enabled")
        })))
    }

    function ut(e) {
        var t = null, r = xr.rtl ? "future" : "past", n = xr.rtl ? "past" : "future";
        if (g(Cr.background.childNodes).forEach(function (a, i) {
                a.classList.remove("past"), a.classList.remove("present"), a.classList.remove("future"), hr > i ? a.classList.add(r) : i > hr ? a.classList.add(n) : (a.classList.add("present"), t = a), (e || i === hr) && g(a.querySelectorAll(".slide-background")).forEach(function (e, r) {
                    e.classList.remove("past"), e.classList.remove("present"), e.classList.remove("future"), gr > r ? e.classList.add("past") : r > gr ? e.classList.add("future") : (e.classList.add("present"), i === hr && (t = e))
                })
            }), br) {
            var a = br.querySelector("video");
            a && a.pause()
        }
        if (t) {
            var i = t.querySelector("video");
            i && (i.currentTime = 0, i.play());
            var o = t.style.backgroundImage || "";
            /\.gif/i.test(o) && (t.style.backgroundImage = "", window.getComputedStyle(t).opacity, t.style.backgroundImage = o);
            var s = br ? br.getAttribute("data-background-hash") : null, c = t.getAttribute("data-background-hash");
            c && c === s && t !== br && Cr.background.classList.add("no-transition"), br = t
        }
        yr && ["has-light-background", "has-dark-background"].forEach(function (e) {
            yr.classList.contains(e) ? Cr.wrapper.classList.add(e) : Cr.wrapper.classList.remove(e)
        }), setTimeout(function () {
            Cr.background.classList.remove("no-transition")
        }, 1)
    }

    function pt() {
        if (xr.parallaxBackgroundImage) {
            var e, t, r = Cr.wrapper.querySelectorAll(Ar), n = Cr.wrapper.querySelectorAll(Er), a = Cr.background.style.backgroundSize.split(" ");
            1 === a.length ? e = t = parseInt(a[0], 10) : (e = parseInt(a[0], 10), t = parseInt(a[1], 10));
            var i = Cr.background.offsetWidth, o = r.length, s = -(e - i) / (o - 1) * hr, c = Cr.background.offsetHeight, l = n.length, d = l > 1 ? -(t - c) / (l - 1) * gr : 0;
            Cr.background.style.backgroundPosition = s + "px " + d + "px"
        }
    }

    function ft(e) {
        e.style.display = "block", g(e.querySelectorAll("img[data-src], video[data-src], audio[data-src], iframe[data-src]")).forEach(function (e) {
            e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src")
        }), g(e.querySelectorAll("video, audio")).forEach(function (e) {
            var t = 0;
            g(e.querySelectorAll("source[data-src]")).forEach(function (e) {
                e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), t += 1
            }), t > 0 && e.load()
        });
        var t = Et(e), r = qt(t.h, t.v);
        if (r && (r.style.display = "block", r.hasAttribute("data-loaded") === !1)) {
            r.setAttribute("data-loaded", "true");
            var n = e.getAttribute("data-background-image"), a = e.getAttribute("data-background-video"), i = e.getAttribute("data-background-iframe");
            if (n)r.style.backgroundImage = "url(" + n + ")"; else if (a && !Lt()) {
                var o = document.createElement("video");
                a.split(",").forEach(function (e) {
                    o.innerHTML += '<source src="' + e + '">'
                }), r.appendChild(o)
            } else if (i) {
                var s = document.createElement("iframe");
                s.setAttribute("src", i), s.style.width = "100%", s.style.height = "100%", s.style.maxHeight = "100%", s.style.maxWidth = "100%", r.appendChild(s)
            }
        }
    }

    function vt(e) {
        e.style.display = "none";
        var t = Et(e), r = qt(t.h, t.v);
        r && (r.style.display = "none")
    }

    function ht() {
        var e = Cr.wrapper.querySelectorAll(Ar), t = Cr.wrapper.querySelectorAll(Er), r = {
            left: hr > 0 || xr.loop,
            right: hr < e.length - 1 || xr.loop,
            up: gr > 0,
            down: gr < t.length - 1
        };
        if (xr.rtl) {
            var n = r.left;
            r.left = r.right, r.right = n
        }
        return r
    }

    function gt() {
        if (yr && xr.fragments) {
            var e = yr.querySelectorAll(".fragment"), t = yr.querySelectorAll(".fragment:not(.visible)");
            return {prev: e.length - t.length > 0, next: !!t.length}
        }
        return {prev: !1, next: !1}
    }

    function mt() {
        g(Cr.slides.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function (e) {
            var t = e.getAttribute("src");
            /enablejsapi\=1/gi.test(t) || e.setAttribute("src", t + (/\?/.test(t) ? "&" : "?") + "enablejsapi=1")
        }), g(Cr.slides.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function (e) {
            var t = e.getAttribute("src");
            /api\=1/gi.test(t) || e.setAttribute("src", t + (/\?/.test(t) ? "&" : "?") + "api=1")
        })
    }

    function yt(e) {
        e && !Lt() && (g(e.querySelectorAll('img[src$=".gif"]')).forEach(function (e) {
            e.setAttribute("src", e.getAttribute("src"))
        }), g(e.querySelectorAll("video, audio")).forEach(function (e) {
            e.hasAttribute("data-autoplay") && e.play()
        }), g(e.querySelectorAll("iframe")).forEach(function (e) {
            e.contentWindow.postMessage("slide:start", "*")
        }), g(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function (e) {
            e.hasAttribute("data-autoplay") && e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }), g(e.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function (e) {
            e.hasAttribute("data-autoplay") && e.contentWindow.postMessage('{"method":"play"}', "*")
        }))
    }

    function bt(e) {
        e && e.parentNode && (g(e.querySelectorAll("video, audio")).forEach(function (e) {
            e.hasAttribute("data-ignore") || e.pause()
        }), g(e.querySelectorAll("iframe")).forEach(function (e) {
            e.contentWindow.postMessage("slide:stop", "*")
        }), g(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function (e) {
            e.hasAttribute("data-ignore") || "function" != typeof e.contentWindow.postMessage || e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
        }), g(e.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function (e) {
            e.hasAttribute("data-ignore") || "function" != typeof e.contentWindow.postMessage || e.contentWindow.postMessage('{"method":"pause"}', "*")
        }))
    }

    function wt() {
        var e = g(Cr.wrapper.querySelectorAll(Ar)), t = St(), r = 0;
        e:for (var n = 0; n < e.length; n++) {
            for (var a = e[n], i = g(a.querySelectorAll("section")), o = 0; o < i.length; o++) {
                if (i[o].classList.contains("present"))break e;
                r++
            }
            if (a.classList.contains("present"))break;
            a.classList.contains("stack") === !1 && r++
        }
        if (yr) {
            var s = yr.querySelectorAll(".fragment");
            if (s.length > 0) {
                var c = yr.querySelectorAll(".fragment.visible"), l = .9;
                r += c.length / s.length * l
            }
        }
        return r / (t - 1)
    }

    function Lt() {
        return !!window.location.search.match(/receiver/gi)
    }

    function kt() {
        var e = window.location.hash, t = e.slice(2).split("/"), r = e.replace(/#|\//gi, "");
        if (isNaN(parseInt(t[0], 10)) && r.length) {
            var n;
            if (/^[a-zA-Z][\w:.-]*$/.test(r) && (n = document.getElementById(r)), n) {
                var a = vr.getIndices(n);
                rt(a.h, a.v)
            } else rt(hr || 0, gr || 0)
        } else {
            var i = parseInt(t[0], 10) || 0, o = parseInt(t[1], 10) || 0;
            (i !== hr || o !== gr) && rt(i, o)
        }
    }

    function At(e) {
        if (xr.history)if (clearTimeout(Hr), "number" == typeof e)Hr = setTimeout(At, e);
        else if (yr) {
            var t = "/", r = yr.getAttribute("id");
            r && (r = r.toLowerCase(), r = r.replace(/[^a-zA-Z0-9\-\_\:\.]/g, "")), "string" == typeof r && r.length ? t = "/" + r : ((hr > 0 || gr > 0) && (t += hr), gr > 0 && (t += "/" + gr)), window.location.hash = t
        }
    }

    function Et(e) {
        var t, r = hr, n = gr;
        if (e) {
            var a = K(e), i = a ? e.parentNode : e, o = g(Cr.wrapper.querySelectorAll(Ar));
            r = Math.max(o.indexOf(i), 0), n = void 0, a && (n = Math.max(g(e.parentNode.querySelectorAll("section")).indexOf(e), 0))
        }
        if (!e && yr) {
            var s = yr.querySelectorAll(".fragment").length > 0;
            if (s) {
                var c = yr.querySelector(".current-fragment");
                t = c && c.hasAttribute("data-fragment-index") ? parseInt(c.getAttribute("data-fragment-index"), 10) : yr.querySelectorAll(".fragment.visible").length - 1
            }
        }
        return {h: r, v: n, f: t}
    }

    function St() {
        return Cr.wrapper.querySelectorAll(kr + ":not(.stack)").length
    }

    function xt(e, t) {
        var r = Cr.wrapper.querySelectorAll(Ar)[e], n = r && r.querySelectorAll("section");
        return n && n.length && "number" == typeof t ? n ? n[t] : void 0 : r
    }

    function qt(e, t) {
        if (x()) {
            var r = xt(e, t);
            if (r) {
                var n = r.querySelector(".slide-background");
                if (n && n.parentNode === r)return n
            }
            return void 0
        }
        var a = Cr.wrapper.querySelectorAll(".backgrounds>.slide-background")[e], i = a && a.querySelectorAll(".slide-background");
        return i && i.length && "number" == typeof t ? i ? i[t] : void 0 : a
    }

    function Mt() {
        var e = Et();
        return {indexh: e.h, indexv: e.v, indexf: e.f, paused: G(), overview: _()}
    }

    function Tt(e) {
        if ("object" == typeof e) {
            rt(m(e.indexh), m(e.indexv), m(e.indexf));
            var t = m(e.paused), r = m(e.overview);
            "boolean" == typeof t && t !== G() && Q(t), "boolean" == typeof r && r !== _() && $(r)
        }
    }

    function Nt(e) {
        e = g(e);
        var t = [], r = [], n = [];
        e.forEach(function (e) {
            if (e.hasAttribute("data-fragment-index")) {
                var n = parseInt(e.getAttribute("data-fragment-index"), 10);
                t[n] || (t[n] = []), t[n].push(e)
            } else r.push([e])
        }), t = t.concat(r);
        var a = 0;
        return t.forEach(function (e) {
            e.forEach(function (e) {
                n.push(e), e.setAttribute("data-fragment-index", a)
            }), a++
        }), n
    }

    function It(e, t) {
        if (yr && xr.fragments) {
            var r = Nt(yr.querySelectorAll(".fragment"));
            if (r.length) {
                if ("number" != typeof e) {
                    var n = Nt(yr.querySelectorAll(".fragment.visible")).pop();
                    e = n ? parseInt(n.getAttribute("data-fragment-index") || 0, 10) : -1
                }
                "number" == typeof t && (e += t);
                var a = [], i = [];
                return g(r).forEach(function (t, r) {
                    t.hasAttribute("data-fragment-index") && (r = parseInt(t.getAttribute("data-fragment-index"), 10)), e >= r ? (t.classList.contains("visible") || a.push(t), t.classList.add("visible"), t.classList.remove("current-fragment"), Cr.statusDiv.textContent = t.textContent, r === e && t.classList.add("current-fragment")) : (t.classList.contains("visible") && i.push(t), t.classList.remove("visible"), t.classList.remove("current-fragment"))
                }), i.length && T("fragmenthidden", {
                    fragment: i[0],
                    fragments: i
                }), a.length && T("fragmentshown", {
                    fragment: a[0],
                    fragments: a
                }), dt(), ct(), !(!a.length && !i.length)
            }
        }
        return !1
    }

    function Ct() {
        return It(null, 1)
    }

    function Pt() {
        return It(null, -1)
    }

    function Dt() {
        if (Ht(), yr) {
            var e = yr.querySelector(".current-fragment"), t = e ? e.getAttribute("data-autoslide") : null, r = yr.parentNode ? yr.parentNode.getAttribute("data-autoslide") : null, n = yr.getAttribute("data-autoslide");
            Wr = t ? parseInt(t, 10) : n ? parseInt(n, 10) : r ? parseInt(r, 10) : xr.autoSlide, g(yr.querySelectorAll("video, audio")).forEach(function (e) {
                e.hasAttribute("data-autoplay") && Wr && 1e3 * e.duration > Wr && (Wr = 1e3 * e.duration + 1e3)
            }), !Wr || Fr || G() || _() || vr.isLastSlide() && !gt().next && xr.loop !== !0 || (Or = setTimeout(jt, Wr), zr = Date.now()), Lr && Lr.setPlaying(-1 !== Or)
        }
    }

    function Ht() {
        clearTimeout(Or), Or = -1
    }

    function Rt() {
        Wr && !Fr && (Fr = !0, T("autoslidepaused"), clearTimeout(Or), Lr && Lr.setPlaying(!1))
    }

    function Wt() {
        Wr && Fr && (Fr = !1, T("autoslideresumed"), Dt())
    }

    function Ot() {
        xr.rtl ? (_() || Ct() === !1) && ht().left && rt(hr + 1) : (_() || Pt() === !1) && ht().left && rt(hr - 1)
    }

    function zt() {
        xr.rtl ? (_() || Pt() === !1) && ht().right && rt(hr - 1) : (_() || Ct() === !1) && ht().right && rt(hr + 1)
    }

    function Ft() {
        (_() || Pt() === !1) && ht().up && rt(hr, gr - 1)
    }

    function Yt() {
        (_() || Ct() === !1) && ht().down && rt(hr, gr + 1)
    }

    function Xt() {
        if (Pt() === !1)if (ht().up)Ft(); else {
            var e;
            if (e = xr.rtl ? g(Cr.wrapper.querySelectorAll(Ar + ".future")).pop() : g(Cr.wrapper.querySelectorAll(Ar + ".past")).pop()) {
                var t = e.querySelectorAll("section").length - 1 || void 0, r = hr - 1;
                rt(r, t)
            }
        }
    }

    function jt() {
        Ct() === !1 && (ht().down ? Yt() : xr.rtl ? Ot() : zt()), Dt()
    }

    function Bt() {
        xr.autoSlideStoppable && Rt()
    }

    function Ut(e) {
        e.shiftKey && 63 === e.charCode && (Cr.overlay ? R() : H(!0))
    }

    function $t(e) {
        if ("function" == typeof xr.keyboardCondition && xr.keyboardCondition() === !1)return !0;
        var t = Fr;
        Bt(e);
        var r = document.activeElement && "inherit" !== document.activeElement.contentEditable, n = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName);
        if (!(r || n || e.shiftKey && 32 !== e.keyCode || e.altKey || e.ctrlKey || e.metaKey)) {
            if (G() && -1 === [66, 190, 191].indexOf(e.keyCode))return !1;
            var a = !1;
            if ("object" == typeof xr.keyboard)for (var i in xr.keyboard)if (parseInt(i, 10) === e.keyCode) {
                var o = xr.keyboard[i];
                "function" == typeof o ? o.apply(null, [e]) : "string" == typeof o && "function" == typeof vr[o] && vr[o].call(), a = !0
            }
            if (a === !1)switch (a = !0, e.keyCode) {
                case 80:
                case 33:
                    Xt();
                    break;
                case 78:
                case 34:
                    jt();
                    break;
                case 72:
                case 37:
                    Ot();
                    break;
                case 76:
                case 39:
                    zt();
                    break;
                case 75:
                case 38:
                    Ft();
                    break;
                case 74:
                case 40:
                    Yt();
                    break;
                case 36:
                    rt(0);
                    break;
                case 35:
                    rt(Number.MAX_VALUE);
                    break;
                case 32:
                    _() ? U() : e.shiftKey ? Xt() : jt();
                    break;
                case 13:
                    _() ? U() : a = !1;
                    break;
                case 58:
                case 59:
                case 66:
                case 190:
                case 191:
                    Q();
                    break;
                case 70:
                    V();
                    break;
                case 65:
                    xr.autoSlideStoppable && et(t);
                    break;
                default:
                    a = !1
            }
            a ? e.preventDefault && e.preventDefault() : 27 !== e.keyCode && 79 !== e.keyCode || !Pr.transforms3d || (Cr.overlay ? R() : $(), e.preventDefault && e.preventDefault()), Dt()
        }
    }

    function _t(e) {
        Yr.startX = e.touches[0].clientX, Yr.startY = e.touches[0].clientY, Yr.startCount = e.touches.length, 2 === e.touches.length && xr.overview && (Yr.startSpan = y({
            x: e.touches[1].clientX,
            y: e.touches[1].clientY
        }, {x: Yr.startX, y: Yr.startY}))
    }

    function Kt(e) {
        if (Yr.captured)navigator.userAgent.match(/android/gi) && e.preventDefault(); else {
            Bt(e);
            var t = e.touches[0].clientX, r = e.touches[0].clientY;
            if (2 === e.touches.length && 2 === Yr.startCount && xr.overview) {
                var n = y({x: e.touches[1].clientX, y: e.touches[1].clientY}, {x: Yr.startX, y: Yr.startY});
                Math.abs(Yr.startSpan - n) > Yr.threshold && (Yr.captured = !0, n < Yr.startSpan ? X() : U()), e.preventDefault()
            } else if (1 === e.touches.length && 2 !== Yr.startCount) {
                var a = t - Yr.startX, i = r - Yr.startY;
                a > Yr.threshold && Math.abs(a) > Math.abs(i) ? (Yr.captured = !0, Ot()) : a < -Yr.threshold && Math.abs(a) > Math.abs(i) ? (Yr.captured = !0, zt()) : i > Yr.threshold ? (Yr.captured = !0, Ft()) : i < -Yr.threshold && (Yr.captured = !0, Yt()), xr.embedded ? (Yr.captured || K(yr)) && e.preventDefault() : e.preventDefault()
            }
        }
    }

    function Vt() {
        Yr.captured = !1
    }

    function Zt(e) {
        (e.pointerType === e.MSPOINTER_TYPE_TOUCH || "touch" === e.pointerType) && (e.touches = [{
            clientX: e.clientX,
            clientY: e.clientY
        }], _t(e))
    }

    function Jt(e) {
        (e.pointerType === e.MSPOINTER_TYPE_TOUCH || "touch" === e.pointerType) && (e.touches = [{
            clientX: e.clientX,
            clientY: e.clientY
        }], Kt(e))
    }

    function Qt(e) {
        (e.pointerType === e.MSPOINTER_TYPE_TOUCH || "touch" === e.pointerType) && (e.touches = [{
            clientX: e.clientX,
            clientY: e.clientY
        }], Vt(e))
    }

    function Gt(e) {
        if (Date.now() - Dr > 600) {
            Dr = Date.now();
            var t = e.detail || -e.wheelDelta;
            t > 0 ? jt() : Xt()
        }
    }

    function er(e) {
        Bt(e), e.preventDefault();
        var t = g(Cr.wrapper.querySelectorAll(Ar)).length, r = Math.floor(e.clientX / Cr.wrapper.offsetWidth * t);
        rt(r)
    }

    function tr(e) {
        e.preventDefault(), Bt(), Ot()
    }

    function rr(e) {
        e.preventDefault(), Bt(), zt()
    }

    function nr(e) {
        e.preventDefault(), Bt(), Ft()
    }

    function ar(e) {
        e.preventDefault(), Bt(), Yt()
    }

    function ir(e) {
        e.preventDefault(), Bt(), Xt()
    }

    function or(e) {
        e.preventDefault(), Bt(), jt()
    }

    function sr() {
        kt()
    }

    function cr() {
        W()
    }

    function lr() {
        var e = document.webkitHidden || document.msHidden || document.hidden;
        e === !1 && document.activeElement !== document.body && (document.activeElement.blur(), document.body.focus())
    }

    function dr(e) {
        if (Rr && _()) {
            e.preventDefault();
            for (var t = e.target; t && !t.nodeName.match(/section/gi);)t = t.parentNode;
            if (t && !t.classList.contains("disabled") && (U(), t.nodeName.match(/section/gi))) {
                var r = parseInt(t.getAttribute("data-index-h"), 10), n = parseInt(t.getAttribute("data-index-v"), 10);
                rt(r, n)
            }
        }
    }

    function ur(e) {
        if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
            var t = e.currentTarget.getAttribute("href");
            t && (D(t), e.preventDefault())
        }
    }

    function pr() {
        vr.isLastSlide() && xr.loop === !1 ? (rt(0, 0), Wt()) : Fr ? Wt() : Rt()
    }

    function fr(e, t) {
        this.diameter = 50, this.thickness = 3, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render()
    }

    var vr, hr, gr, mr, yr, br, wr, Lr, kr = ".slides section", Ar = ".slides>section", Er = ".slides>section.present>section", Sr = ".slides>section:first-of-type", xr = {
        width: 960,
        height: 700,
        margin: .1,
        minScale: .2,
        maxScale: 1,
        controls: !0,
        progress: !0,
        slideNumber: !1,
        history: !1,
        keyboard: !0,
        keyboardCondition: null,
        overview: !0,
        center: !0,
        touch: !0,
        loop: !1,
        rtl: !1,
        fragments: !0,
        embedded: !1,
        help: !0,
        pause: !0,
        autoSlide: 0,
        autoSlideStoppable: !0,
        mouseWheel: !1,
        rollingLinks: !1,
        hideAddressBar: !0,
        previewLinks: !1,
        postMessage: !0,
        postMessageEvents: !1,
        focusBodyOnPageVisibilityChange: !0,
        transition: "default",
        transitionSpeed: "default",
        backgroundTransition: "default",
        parallaxBackgroundImage: "",
        parallaxBackgroundSize: "",
        viewDistance: 3,
        dependencies: []
    }, qr = !1, Mr = !1, Tr = [], Nr = 1, Ir = {
        layout: "",
        overview: ""
    }, Cr = {}, Pr = {}, Dr = 0, Hr = 0, Rr = !1, Wr = 0, Or = 0, zr = -1, Fr = !1, Yr = {
        startX: 0,
        startY: 0,
        startSpan: 0,
        startCount: 0,
        captured: !1,
        threshold: 40
    }, Xr = {
        "N  ,  SPACE": "Next slide",
        P: "Previous slide",
        "&#8592;  ,  H": "Navigate left",
        "&#8594;  ,  L": "Navigate right",
        "&#8593;  ,  K": "Navigate up",
        "&#8595;  ,  J": "Navigate down",
        Home: "First slide",
        End: "Last slide",
        "B  ,  .": "Pause",
        F: "Fullscreen",
        "ESC, O": "Slide overview"
    };
    return fr.prototype.setPlaying = function (e) {
        var t = this.playing;
        this.playing = e, !t && this.playing ? this.animate() : this.render()
    }, fr.prototype.animate = function () {
        var e = this.progress;
        this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && Pr.requestAnimationFrameMethod.call(window, this.animate.bind(this))
    }, fr.prototype.render = function () {
        var e = this.playing ? this.progress : 0, t = this.diameter / 2 - this.thickness, r = this.diameter / 2, n = this.diameter / 2, a = 14;
        this.progressOffset += .1 * (1 - this.progressOffset);
        var i = -Math.PI / 2 + 2 * e * Math.PI, o = -Math.PI / 2 + 2 * this.progressOffset * Math.PI;
        this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(r, n, t + 2, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(r, n, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#666", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(r, n, t, o, i, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(r - a / 2, n - a / 2), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, a / 2 - 2, a), this.context.fillRect(a / 2 + 2, 0, a / 2 - 2, a)) : (this.context.beginPath(), this.context.translate(2, 0), this.context.moveTo(0, 0), this.context.lineTo(a - 2, a / 2), this.context.lineTo(0, a), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore()
    }, fr.prototype.on = function (e, t) {
        this.canvas.addEventListener(e, t, !1)
    }, fr.prototype.off = function (e, t) {
        this.canvas.removeEventListener(e, t, !1)
    }, fr.prototype.destroy = function () {
        this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas)
    }, vr = {
        initialize: e,
        configure: p,
        sync: nt,
        slide: rt,
        left: Ot,
        right: zt,
        up: Ft,
        down: Yt,
        prev: Xt,
        next: jt,
        navigateFragment: It,
        prevFragment: Pt,
        nextFragment: Ct,
        navigateTo: rt,
        navigateLeft: Ot,
        navigateRight: zt,
        navigateUp: Ft,
        navigateDown: Yt,
        navigatePrev: Xt,
        navigateNext: jt,
        layout: W,
        availableRoutes: ht,
        availableFragments: gt,
        toggleOverview: $,
        togglePause: Q,
        toggleAutoSlide: et,
        isOverview: _,
        isPaused: G,
        isAutoSliding: tt,
        addEventListeners: f,
        removeEventListeners: v,
        getState: Mt,
        setState: Tt,
        getProgress: wt,
        getIndices: Et,
        getTotalSlides: St,
        getSlide: xt,
        getSlideBackground: qt,
        getPreviousSlide: function () {
            return mr
        },
        getCurrentSlide: function () {
            return yr
        },
        getScale: function () {
            return Nr
        },
        getConfig: function () {
            return xr
        },
        getQueryHash: function () {
            var e = {};
            location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function (t) {
                e[t.split("=").shift()] = t.split("=").pop()
            });
            for (var t in e) {
                var r = e[t];
                e[t] = m(unescape(r))
            }
            return e
        },
        isFirstSlide: function () {
            return 0 === hr && 0 === gr
        },
        isLastSlide: function () {
            return yr ? yr.nextElementSibling ? !1 : K(yr) && yr.parentNode.nextElementSibling ? !1 : !0 : !1
        },
        isReady: function () {
            return qr
        },
        addEventListener: function (e, t, r) {
            "addEventListener"in window && (Cr.wrapper || document.querySelector(".reveal")).addEventListener(e, t, r)
        },
        removeEventListener: function (e, t, r) {
            "addEventListener"in window && (Cr.wrapper || document.querySelector(".reveal")).removeEventListener(e, t, r)
        },
        triggerKey: function (e) {
            $t({keyCode: e})
        }
    }
});