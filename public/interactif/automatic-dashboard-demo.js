// node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: d, getOwnPropertyNames: f, getOwnPropertySymbols: p, getPrototypeOf: m } = Object, h = globalThis, g = h.trustedTypes, ee = g ? g.emptyScript : "", te = h.reactiveElementPolyfillSupport, _ = (e, t) => e, ne = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ee : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, re = (e, t) => !l(e, t), ie = {
	attribute: !0,
	type: String,
	converter: ne,
	reflect: !1,
	useDefault: !1,
	hasChanged: re
};
Symbol.metadata ??= Symbol("metadata"), h.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var v = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = ie) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && u(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = d(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? ie;
	}
	static _$Ei() {
		if (this.hasOwnProperty(_("elementProperties"))) return;
		let e = m(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(_("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(_("properties"))) {
			let e = this.properties, t = [...f(e), ...p(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return s(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? ne : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? ne : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? re)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
v.elementStyles = [], v.shadowRootOptions = { mode: "open" }, v[_("elementProperties")] = /* @__PURE__ */ new Map(), v[_("finalized")] = /* @__PURE__ */ new Map(), te?.({ ReactiveElement: v }), (h.reactiveElementVersions ??= []).push("2.1.2");
// node_modules/lit-html/lit-html.js
var ae = globalThis, oe = (e) => e, se = ae.trustedTypes, ce = se ? se.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, le = "$lit$", y = `lit$${Math.random().toFixed(9).slice(2)}$`, ue = "?" + y, de = `<${ue}>`, b = document, fe = () => b.createComment(""), pe = (e) => e === null || typeof e != "object" && typeof e != "function", me = Array.isArray, he = (e) => me(e) || typeof e?.[Symbol.iterator] == "function", ge = "[ 	\n\f\r]", _e = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ve = /-->/g, ye = />/g, x = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), be = /'/g, xe = /"/g, Se = /^(?:script|style|textarea|title)$/i, Ce = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), S = Ce(1), C = Ce(2), w = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), we = /* @__PURE__ */ new WeakMap(), Te = b.createTreeWalker(b, 129);
function Ee(e, t) {
	if (!me(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return ce === void 0 ? t : ce.createHTML(t);
}
var De = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = _e;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === _e ? c[1] === "!--" ? o = ve : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = x) : (Se.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = x) : o = ye : o === x ? c[0] === ">" ? (o = i ?? _e, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? x : c[3] === "\"" ? xe : be) : o === xe || o === be ? o = x : o === ve || o === ye ? o = _e : (o = x, i = void 0);
		let d = o === x && e[t + 1].startsWith("/>") ? " " : "";
		a += o === _e ? n + de : l >= 0 ? (r.push(s), n.slice(0, l) + le + n.slice(l) + y + d) : n + y + (l === -2 ? t : d);
	}
	return [Ee(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Oe = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = De(t, n);
		if (this.el = e.createElement(l, r), Te.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = Te.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(le)) {
					let t = u[o++], n = i.getAttribute(e).split(y), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Ne : r[1] === "?" ? Pe : r[1] === "@" ? Fe : Me
					}), i.removeAttribute(e);
				} else e.startsWith(y) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Se.test(i.tagName)) {
					let e = i.textContent.split(y), t = e.length - 1;
					if (t > 0) {
						i.textContent = se ? se.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], fe()), Te.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], fe());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === ue) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(y, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += y.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = b.createElement("template");
		return n.innerHTML = e, n;
	}
};
function ke(e, t, n = e, r) {
	if (t === w) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = pe(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = ke(e, i._$AS(e, t.values), i, r)), t;
}
var Ae = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? b).importNode(t, !0);
		Te.currentNode = r;
		let i = Te.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new je(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Ie(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Te.nextNode(), a++);
		}
		return Te.currentNode = b, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, je = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = ke(this, e, t), pe(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== w && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? he(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== T && pe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(b.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Oe.createElement(Ee(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Ae(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = we.get(e.strings);
		return t === void 0 && we.set(e.strings, t = new Oe(e)), t;
	}
	k(t) {
		me(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(fe()), this.O(fe()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = oe(e).nextSibling;
			oe(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Me = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = T;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = ke(this, e, t, 0), a = !pe(e) || e !== this._$AH && e !== w, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = ke(this, r[n + o], t, o), s === w && (s = this._$AH[o]), a ||= !pe(s) || s !== this._$AH[o], s === T ? e = T : e !== T && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Ne = class extends Me {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === T ? void 0 : e;
	}
}, Pe = class extends Me {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== T);
	}
}, Fe = class extends Me {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = ke(this, e, t, 0) ?? T) === w) return;
		let n = this._$AH, r = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== T && (n === T || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Ie = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		ke(this, e);
	}
}, Le = ae.litHtmlPolyfillSupport;
Le?.(Oe, je), (ae.litHtmlVersions ??= []).push("3.3.3");
var Re = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new je(t.insertBefore(fe(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, ze = globalThis, E = class extends v {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Re(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return w;
	}
};
E._$litElement$ = !0, E.finalized = !0, ze.litElementHydrateSupport?.({ LitElement: E });
var Be = ze.litElementPolyfillSupport;
Be?.({ LitElement: E }), (ze.litElementVersions ??= []).push("4.2.2");
// node_modules/lit-html/directive.js
var Ve = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, He = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Ue = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, We = (e) => e.startsWith("--") ? e : e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`), D = He(class extends Ue {
	constructor(e) {
		if (super(e), this.avant = /* @__PURE__ */ new Set(), e.type !== Ve.ELEMENT) throw Error("poserStyle() se pose sur l'élément lui-même");
	}
	render(e) {
		return w;
	}
	update(e, [t]) {
		let n = e.element.style;
		for (let e of this.avant) t[e] ?? n.removeProperty(We(e));
		for (let [e, r] of Object.entries(t)) r != null && n.setProperty(We(e), String(r));
		return this.avant = new Set(Object.keys(t)), w;
	}
}), Ge = 32, Ke = 864e5, qe = /* @__PURE__ */ new Map();
function Je(e, t, n) {
	let r = qe.get(t);
	if (r && Date.now() - r.quand < 9e5) return r.promesse;
	let i = (/* @__PURE__ */ new Date(Date.now() - Ke)).toISOString(), a = e.callWS({
		type: "recorder/statistics_during_period",
		start_time: i,
		statistic_ids: n,
		period: "5minute",
		types: ["mean"]
	}).then((t) => {
		let r = Object.fromEntries(Object.entries(t ?? {}).filter(([, e]) => e.length > 1).map(([e, t]) => [e, t.map((e) => ({
			s: e.mean,
			lu: e.start > 0xe8d4a51000 ? e.start / 1e3 : e.start
		}))]));
		return Object.keys(r).length ? r : e.callWS({
			type: "history/history_during_period",
			start_time: i,
			entity_ids: n,
			minimal_response: !0,
			no_attributes: !0,
			significant_changes_only: !1
		});
	}).then((e) => Ye(e)).catch(() => []);
	return qe.set(t, {
		quand: Date.now(),
		promesse: a
	}), a;
}
function Ye(e) {
	let t = Date.now(), n = Object.values(e ?? {}), r = n.flatMap((e) => e.length ? [(e[0].lu ?? e[0].lc ?? 0) * 1e3] : []), i = Math.min(Math.max(Math.min(...r, t), t - Ke), t - 72e5), a = (t - i) / Ge, o = Array.from({ length: Ge }, () => []);
	for (let e of n) {
		let t = null;
		for (let n of e) {
			let e = Number.parseFloat(String(n.s)), r = (n.lu ?? n.lc ?? 0) * 1e3;
			if (Number.isNaN(e)) continue;
			let s = Math.max(0, Math.min(31, Math.floor((r - i) / a)));
			if (t) for (let e = t.i + 1; e < s; e++) o[e].push(t.v);
			o[s].push(e), t = {
				i: s,
				v: e
			};
		}
		if (t) for (let e = t.i + 1; e < Ge; e++) o[e].push(t.v);
	}
	let s = null;
	return o.map((e) => e.length ? s = e.reduce((e, t) => e + t, 0) / e.length : s);
}
var Xe = /* @__PURE__ */ new Map();
function Ze(e, t, n = 0) {
	let r = `${t.join()}|${n}`, i = Xe.get(r);
	if (i && Date.now() - i.quand < 3e5) return i.promesse;
	let a = Promise.all(t.map((t) => e.callWS({
		type: "recorder/statistic_during_period",
		statistic_id: t,
		calendar: {
			period: "day",
			offset: n
		},
		types: ["change"]
	}).then((e) => e?.change ?? null).catch(() => null))).then((e) => e.every((e) => e === null) ? null : e.reduce((e, t) => e + (t || 0), 0));
	return Xe.set(r, {
		quand: Date.now(),
		promesse: a
	}), a;
}
// src/mise-en-page/courbes.ts
function Qe(e) {
	return e.map((t, n) => {
		if (t === null) return null;
		let r = [
			e[n - 1],
			t,
			e[n + 1]
		].filter((e) => e != null);
		return r.reduce((e, t) => e + t, 0) / r.length;
	});
}
var $e = (e) => e.flatMap((e, t) => e === null ? [] : [[t, e]]);
function et(e, t = 120, n = 34) {
	let r = $e(e);
	if (r.length < 2) return T;
	let i = r.map(([, e]) => e), a = Math.min(...i), o = Math.max(...i) - a || 1, s = (n) => n / (e.length - 1) * t, c = (e) => n - 3 - (e - a) / o * (n - 6), l = r.map(([e, t], n) => `${n ? "L" : "M"}${s(e).toFixed(1)} ${c(t).toFixed(1)}`).join(" ");
	return S`<svg class="courbe" viewBox="0 0 ${t} ${n}" preserveAspectRatio="none" aria-hidden="true">${C`
    <path d=${`${l} L${s(r[r.length - 1][0]).toFixed(1)} ${n} L${s(r[0][0]).toFixed(1)} ${n} Z`} fill="var(--primary-color)" fill-opacity=".10"/><path d=${l} fill="none" stroke="var(--primary-color)" stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>`}</svg>`;
}
function tt(e, t = 300, n = 92) {
	let r = e.map((e) => ({
		...e,
		valeurs: Qe(e.valeurs)
	})), i = r.flatMap((e) => e.valeurs.filter((e) => e !== null));
	if (i.length < 2) return T;
	let a = Math.min(...i), o = Math.max(...i) - a || 1;
	return S`<svg class="graphe" viewBox="0 0 ${t} ${n}" preserveAspectRatio="none" aria-hidden="true">${r.map((e, r) => {
		let i = $e(e.valeurs);
		if (i.length < 2) return T;
		let s = (n) => n / (e.valeurs.length - 1) * t, c = (e) => n - 6 - (e - a) / o * (n - 14), l = i.map(([e, t], n) => `${n ? "L" : "M"}${s(e).toFixed(1)} ${c(t).toFixed(1)}`).join(" ");
		return C`${r === 0 ? C`<path d=${`${l} L${s(i[i.length - 1][0])} ${n} L${s(i[0][0])} ${n} Z`} fill=${e.couleur} fill-opacity=".10"/>` : T}<path d=${l} fill="none" stroke=${e.couleur} stroke-width=${r === 0 ? 2 : 1.6} stroke-dasharray=${r ? "4 4" : T} vector-effect="non-scaling-stroke" stroke-linejoin="round"/>`;
	})}</svg>`;
}
// src/langues/en.ts
var nt = {
	textes: {
		bonjour: "Good morning",
		apresmidi: "Good afternoon",
		bonsoir: "Good evening",
		nuit: "Good night",
		accueil: "Home",
		favoris: "Favorites",
		pieces: "Rooms",
		votreMaison: "Your home",
		aujourdhui: "Today",
		climat: "Climate",
		energie: "Energy",
		securite: "Security",
		systeme: "System",
		aRanger: "To sort",
		meteo: "Weather",
		lumieres: "Lights",
		volets: "Shutters",
		appareils: "Devices",
		capteurs: "Sensors",
		medias: "Music and TV",
		thermostats: "Heating and cooling",
		temperatures: "Temperatures",
		sauvegardes: "Backups",
		misesAJour: "Updates",
		piles: "Batteries",
		machine: "The machine",
		ouvertures: "Doors and windows",
		alertes: "Detectors",
		toutVaBien: "All is well at home.",
		mesFavoris: "My favorites",
		mesFavorisPhrase: "Yours replace the dashboard's, for you only, on all your screens.",
		mesFavorisListe: "Your favorites",
		mesFavorisOrdre: "In home page order: the arrows change it.",
		mesFavorisVide: "You haven't chosen any: the home page shows the dashboard's. Tap the stars below.",
		monter: "Move up",
		descendre: "Move down",
		retirerFavori: "Remove from my favorites",
		sansPieceTitre: "Without area",
		favorisDuTableau: "Back to the dashboard's favorites",
		termine: "Done",
		modifierFavoris: "My favorites",
		air: "Air",
		vehicule: "Vehicle",
		exterieur: "Outdoor",
		airBon: "The air is good everywhere.",
		vehiculeSansBatterie: "Your vehicle and its charging.",
		vehiculeBatterie: (e, t) => `Battery at ${e}%${t ? ", charging" : ""}.`,
		voitureChargee: "The car is charged",
		jePars: "I'm leaving",
		departPhrase: "What is still open, on or unlocked, with a button for each step.",
		departLumieres: (e) => `${e} light${e > 1 ? "s" : ""} on`,
		departSerrures: (e) => `${e} lock${e > 1 ? "s" : ""} open`,
		departVolets: (e) => `${e} shutter${e > 1 ? "s" : ""} open`,
		departAlarme: "The alarm is disarmed",
		departOuvertures: (e) => e > 1 ? `${e} doors or windows open` : "1 door or window open",
		aLaMain: "To close by hand",
		departPret: "Everything is closed and off. Have a nice day!",
		departEchec: "That didn't work:",
		toutVerrouiller: "Lock all",
		aFaire: (e) => `${e} to do`,
		reveiller: "Touch to wake the screen",
		pleinEcran: "Full screen",
		sortirPleinEcran: "Long press to leave full screen",
		bilan: "Report",
		bilanPret: "The weekly report is ready",
		bilanPretMois: "The monthly report is ready",
		bilanPretDetail: "Energy, temperatures and openings.",
		bilanEntete: "The past week or month: energy and its cost, temperatures, what was opened.",
		semaine: "Week",
		mois: "Month",
		bilanPartielMois: (e) => `Home Assistant only has ${e} day${e > 1 ? "s" : ""} of history for this month: the first full report arrives on the 1st of next month.`,
		bilanPhrase: (e, t) => `From ${e} to ${t}.`,
		bilanVide: "Not enough history yet: the report will fill in by itself over the weeks.",
		bilanSansEnergie: "No energy meter for the home.",
		bilanSansTemperature: "No temperature tracked.",
		bilanEcart: (e) => `${e} vs the week before`,
		bilanBarres: "Consumption day by day",
		bilanFois: (e) => e > 1 ? "openings" : "opening",
		bilanPartiel: (e) => `Home Assistant only has ${e} day${e > 1 ? "s" : ""} of history for this week: the first full report arrives next Monday.`,
		bilanSansDonnee: "No data yet for this day",
		absenceCalme: "Nobody home, everything is closed and off.",
		absenceReste: (e) => `Nobody home: ${e}.`,
		absOuverts: (e) => e > 1 ? `${e} openings` : "1 opening",
		absSerrures: (e) => e > 1 ? `${e} locks open` : "1 lock open",
		absLumieres: (e) => e > 1 ? `${e} lights on` : "1 light on",
		absAlarme: "the alarm disarmed",
		verrouiller: (e) => `Lock ${e}`,
		verrouillerSans: "To lock",
		armer: "Arm the alarm",
		eteindre: "Turn off the lights",
		personneLa: "Nobody is home.",
		lumieresOubliees: (e, t) => `${e} on${t ? `: ${t}` : ""}.`,
		points: (e) => e > 1 ? `${e} things to check, the rest is fine.` : "1 thing to check, the rest is fine.",
		alerteGrave: (e) => `${e}.`,
		ouverte: "Open",
		fuite: "Leak detected",
		fumee: "Smoke detected",
		alarme: "Alarm triggered",
		pileFaible: "Low battery",
		serviceEnPanne: "Service offline",
		fermer: (e) => `Close ${e}`,
		fermerSans: "To close",
		chauffageOuvert: "The heating is on while it's open.",
		aerer: (e) => `Air out ${e}`,
		aererSans: "To air out",
		fermerVolets: (e) => `Close the shutters in ${e}`,
		fermerVoletsSans: "Shutters to close",
		chaleur: (e, t) => `It's ${e} outside and ${t} inside: keep the cool in.`,
		ouvrirFrais: "Open the windows",
		fraisDehors: (e, t) => `It's cooler outside: ${e}, against ${t} inside.`,
		machineFinie: (e) => `${e} has finished`,
		machineFinieSans: "Finished",
		depuis: (e) => e < 60 ? `${e} min ago.` : `${Math.floor(e / 60)} h ${String(e % 60).padStart(2, "0")} ago.`,
		co2: (e) => `${e} ppm of CO₂: a few minutes with the window open is enough.`,
		humidite: (e) => `${e}% humidity: air it out to prevent mould.`,
		majs: (e) => e > 1 ? `${e} updates available` : "1 update available",
		majsDetail: "System, apps and devices",
		sauvegardeAucune: "No automatic backup",
		sauvegardeAucuneDetail: "Set it up in backups",
		sauvegardeEchec: "The last backup failed",
		sauvegardeEchecDetail: "Open backups",
		vigilance: (e) => `${e} warning`,
		autres: (e) => `and ${e} more`,
		ignorer: "Ignore while nothing changes",
		actions: "What to do with this item?",
		prevenir: "Notify me next time",
		prevenu: "You will be notified: see the automation",
		prevenirAdmin: "To be notified, an administrator can turn it on in the dashboard settings.",
		automatismeCree: (e) => `Automation created: ${e}.`,
		automatismeEchec: "The automation could not be created.",
		voir: "See",
		ignores: (e) => `${e} item${e > 1 ? "s" : ""} ignored while ${e > 1 ? "they don't" : "it doesn't"} change.`,
		remontrer: "Show again",
		allumees: (e) => e > 1 ? `${e} on` : e === 1 ? "1 on" : "Off",
		dedans: "inside",
		dehors: "Outside",
		moyenne: "on average",
		toutFerme: "Everything is closed",
		ouverts: (e) => e > 1 ? `${e} open` : "1 open",
		aJour: "Up to date",
		enCeMoment: "right now",
		sansPiece: (e) => e > 1 ? `${e} devices without a room` : "1 device without a room",
		choisirPieces: "Choose their room",
		toutEteindre: "All off",
		toutFermer: "Close all",
		alarmeEtat: {
			disarmed: "Alarm off",
			armed_home: "Alarm on (home)",
			armed_away: "Alarm on",
			armed_night: "Night alarm",
			triggered: "Alarm triggered"
		},
		aucuneFuite: "no leak",
		sauvegardeIlYa: (e) => `Backup ${e}`,
		sauvegardeNon: "Backups to set up",
		lever: "Sunrise",
		coucher: "Sunset",
		deJour: "of daylight",
		soleil: "Sun",
		ferie: "Next public holiday",
		ferieAujourdhui: "Public holiday today",
		dansJours: (e) => e === 1 ? "tomorrow" : `in ${e} days`,
		premiersPas: "First steps",
		premiersPasDetail: "To get the most out of Automatic Dashboard today.",
		etapes: {
			emplacement: "Tell Home Assistant where your home is",
			meteoFrance: "Add Météo-France: rain in the next hour and warnings",
			meteo: "Add the weather",
			feries: "Show public holidays",
			sauvegardes: "Turn on automatic backups",
			pieces: "Put your devices in rooms",
			appli: "Install the app on your phone",
			appareil: "Add a device"
		},
		phraseMeteo: (e, t) => `${e}, ${t}.`,
		pasDePluie: "No rain in the next hour.",
		pluieDansPhrase: (e) => `Rain in ${e} min.`,
		pluieEnCours: "It is raining.",
		piecePhrase: (e) => e.join(", ") + ".",
		lumieresAllumees: (e) => e > 1 ? `${e} lights on` : "1 light on",
		voletsOuverts: (e) => e > 1 ? `${e} shutters open` : "shutter open",
		chauffe: "heating on",
		clim: "cooling on",
		toutEteint: "Everything is off",
		climatPhrase: (e, t) => [e, t].filter(Boolean).join(", ") + ".",
		energiePhrase: (e) => `${e} right now.`,
		pieceSurtitre: "Room",
		etagePrefixe: "",
		enCeMomentTitre: "Right now",
		mediasEnLecture: (e) => `${e} players on`,
		pauseMedia: "Pause",
		aLaMaison: (e) => `Home: ${e.join(", ")}`,
		personnesALaMaison: (e) => e > 1 ? `${e} people home` : "1 person home",
		personne: "Nobody home",
		ailleurs: (e, t) => `${e}: ${t ?? "away"}`,
		enCours: "Now",
		demain: "Tomorrow",
		toutLeJour: "Today",
		enMarche: (e) => `${e} running`,
		minuteur: (e, t) => `${e}: ${t} min`,
		enPause: (e) => `${e}: paused`,
		articles: (e) => e > 1 ? `${e} items to buy` : "1 item to buy",
		pluieTitre: "Rain in the next hour",
		pluieAucune: "No rain in the next hour",
		pluieDans: (e, t) => `${e} in ${t} min`,
		pluieFin: (e) => `Raining now, should stop in ${e} min`,
		pluieContinue: "Rain for the whole hour",
		pluieSource: (e) => `Météo-France, ${e}`,
		maintenant: "now",
		dans1h: "in 1 h",
		pluieTypes: {
			"Pluie faible": "Light rain",
			"Pluie modérée": "Moderate rain",
			"Pluie forte": "Heavy rain"
		},
		couleurs: [
			"Green",
			"Yellow",
			"Orange",
			"Red"
		],
		vigilanceVerte: "No weather warning today",
		conseils: [
			"",
			"Be aware: usual but occasionally dangerous weather is expected.",
			"Be very careful: dangerous weather is expected. Follow the advice of the authorities.",
			"Take extreme care: exceptionally dangerous weather is expected. Follow the instructions of the authorities."
		],
		vigilanceCarte: "See the Météo-France map",
		panneTitre: "The dashboard could not be built",
		panneTexte: "Automatic Dashboard ran into an error while reading your home. Nothing is broken in Home Assistant: your devices and automations work as usual.",
		panneEtapes: [
			"Reload the page.",
			"If Automatic Dashboard was just updated, restart Home Assistant (*Settings*, *System*, top right), then reload the page.",
			"If the error comes back, [report it](LIEN) with the message below (read it first: it describes the error, not your home)."
		],
		dehorsTitre: "Outside",
		et: " and ",
		bonPartout: "Comfortable everywhere.",
		bonPresquePartout: (e) => `Comfortable almost everywhere. Keep an eye on ${e}.`,
		horsConfort: (e) => `${e} rooms outside the comfort zone.`,
		chauffagesEnMarche: (e) => `${e} heater${e > 1 ? "s" : ""} on.`,
		toutFermePhrase: "Everything is closed.",
		ouvertsPhrase: (e, t) => `${e} ${t > 1 ? "are" : "is"} open.`,
		sansSauvegardePhrase: (e) => `No automatic backup.${e ? ` ${e}.` : ""}`,
		systemeOkPhrase: (e, t) => `All good. Backup ${t}.`,
		donnerPiece: "Give them a room: they will show up on the home page and in their room.",
		pastilleSansPiece: (e) => e > 1 ? `${e} devices without a room` : "1 device without a room",
		motsEnMarche: {
			chauffage: ["heater", "heaters"],
			clim: ["AC unit", "AC units"],
			appareil: ["device", "devices"]
		},
		tableauPret: "Your Automatic Dashboard dashboard is ready.",
		ouvrir: "Open",
		leverCoucher: (e, t) => `Sunrise ${e} · sunset ${t}`,
		nbEntites: (e) => `${e} entit${e > 1 ? "ies" : "y"}`,
		sansAppareil: "no device",
		rangerDans: (e) => `Put in ${e}`,
		autreChoix: "Other",
		choisir: "Choose",
		rangeDans: (e, t) => `${e}: put in ${t}.`,
		annuler: "Undo",
		noteAdmin: "An administrator can put these devices in the suggested room in one click.",
		airSec: "Dry air",
		airHumide: "Humid air: ventilate",
		confortable: "Comfortable",
		humiditeTitre: "Humidity",
		rienOuvert: "Nothing was opened.",
		autresTitre: "Other",
		autresPieces: "Other rooms",
		pieceParPiece: "Room by room",
		compteurs: "Meters",
		repartition: "Breakdown",
		septJours: "Last 7 days",
		serruresTitre: "Locks",
		presence: "Presence",
		activite: "Activity",
		huitSemaines: "Last 8 weeks",
		temperatures7j: "Temperatures, 7 days",
		co2Jour: "CO₂, 24 hours",
		jardin: "The garden",
		portailGarage: "Gate and garage",
		arrosage: "Watering and pool",
		tondeuse: "Mower",
		tabletteMurale: "Wall tablet",
		deuxPoints: ": "
	},
	heros: {
		dedans: "inside",
		dehors: "outside",
		humidite: "humidity",
		maintenant: "now",
		aujourdhui: "today",
		hier: "yesterday",
		production: "production",
		ouvertures: (e, t) => `open of ${t}`,
		serrures: () => "unlocked",
		detecteurs: (e) => e === 1 ? "alert" : "alerts",
		toutFerme: "Everything is closed",
		ouvert: "open",
		gerer: "Manage",
		voir: "See",
		regler: "Set up",
		majs: (e) => e > 1 ? `${e} updates available` : "1 update available",
		aJour: "Everything is up to date",
		sauvegarde: "backup",
		prochaine: "next",
		taille: "size",
		version: "Home Assistant",
		jamais: "never",
		nonPrevue: "not scheduled",
		reussie: "succeeded",
		echouee: "failed",
		sansSauvegarde: "No automatic backup",
		sansSauvegardeDetail: "Without it, a failure can erase everything.",
		ranges: (e) => `${e} device${e > 1 ? "s" : ""} sorted`,
		aRanger: (e) => `${e} to sort`,
		rangerTout: "Sort my devices",
		creerPiece: "Create a room",
		legende24: "last 24 hours",
		puissance: "power",
		alarme: "Alarm"
	},
	editeur: {
		mode: "Mode",
		modes: {
			auto: ["Automatic", "Chosen from your home, and reviewed when it changes."],
			decouverte: ["Discovery", "Few devices: the weather and each device shown large."],
			maison: ["Home", "Things to check, favorites, rooms and overviews."],
			complet: ["Complete", "Many devices: rooms by floor, compact tiles."]
		},
		nomsModes: {
			decouverte: "Discovery",
			maison: "Home",
			complet: "Complete"
		},
		detecte: (e, t, n, r) => `From your home: ${e} mode (${t} useful entit${t > 1 ? "ies" : "y"}, ${n} device${n > 1 ? "s" : ""}, ${r} room${r > 1 ? "s" : ""}).`,
		apparence: "Appearance",
		apparenceAide: "Choose the style and what the dashboard shows. Everything else stays automatic.",
		style: "Style",
		styles: {
			automatic: ["Automatic", "Blue and terracotta, with the site's dot pattern."],
			doux: ["Soft", "Cream and sage green, no borders, rounder."],
			contraste: ["High contrast", "Black on white, strong borders: the most readable."],
			home_assistant: ["Your theme", "The one chosen in your Home Assistant profile."]
		},
		piecesClimat: "Rooms, in Climate",
		barres: "Bars",
		mosaique: "Mosaic",
		tuiles: "Favorite tiles",
		tuilesAutomatic: "Name on two lines",
		tuilesHA: "Home Assistant",
		ciel: "The sky of the day",
		cielAide: "At the top of the home page: the sun's arc, and the moon at night.",
		conseils: "Advice",
		conseilsAide: "\"Close the living room window\", \"Air out the bedroom\"… in the things to check.",
		bilanPage: "The weekly report",
		bilanPageAide: "A page of its own, announced on Mondays.",
		favoris: "Favorites",
		favorisAide: "Your favorites first, in the order you choose: drag them to change it.",
		completer: "Fill in with the devices you use most",
		completerAide: "Home Assistant suggests them by time of day: they change throughout the day.",
		propose: "Suggested",
		epingler: "Pin",
		retirer: "Remove",
		deplacer: (e) => `Move ${e} (drag, or arrow keys)`,
		ajouterFavori: "Add a favorite",
		aucunFavori: "No favorites: the row won't appear.",
		favorisDecouverte: "In Discovery mode, the home page already shows each device large: favorites will appear in Home or Complete mode.",
		masques: "Hidden",
		masquesAide: "What Automatic Dashboard never shows. The rest of Home Assistant is not affected.",
		masquer: "Hide a device or entity",
		aucunMasque: "Nothing is hidden.",
		masquesEtiquette: (e) => `And ${e} entit${e > 1 ? "ies" : "y"} by the "Automatic Dashboard: hide" label, set in Home Assistant on entities, devices or areas.`,
		parEtiquette: "By label",
		parEtiquetteAide: "Pinned by the \"Automatic Dashboard: favorite\" label, set in Home Assistant",
		noms: "Names",
		nomsAide: "The name shown in Automatic Dashboard. The Home Assistant name (and voice assistants) stays the same.",
		renommer: "Rename a device or entity",
		nomTableau: "Name in Automatic Dashboard",
		nomDansHA: (e) => `In Home Assistant: ${e}`,
		pieces: "Rooms",
		piecesAide: "Rooms and floors follow the order chosen in Home Assistant.",
		changerOrdre: "Change the order",
		enregistrerDabord: "Save your settings first to change the order of rooms.",
		prevenirTitre: "Notify me",
		prevenirAide: "Automatic Dashboard creates the ready-made automation in Home Assistant (Settings, Automations), watching every sensor of the same kind. Applies right away.",
		sujets: {
			fuite: "On a water leak",
			fumee: "On smoke or gas",
			pile: "When a battery is low",
			sauvegarde: "If the backup fails"
		},
		surveille: (e) => `Watches ${e} sensor${e > 1 ? "s" : ""}.`,
		surveilleSauvegarde: "Watches Home Assistant's automatic backups.",
		rienASurveiller: {
			fuite: "No leak detector in the home.",
			fumee: "No smoke or gas detector.",
			pile: "No battery tracked.",
			sauvegarde: "Automatic backups are not set up."
		},
		quiPrevenir: "Who to notify",
		notificationHA: "The notification in Home Assistant",
		aucunTelephone: "No phone has the Home Assistant app: install it to be notified on your phone.",
		tablette: "Wall tablet",
		tabletteAide: (e) => `On the tablet, open ${e}: the time shown large, the status sentence, things to check and, at night, a screen saver.`,
		ouvrirTablette: "Open the page",
		nuit: "Night screen saver, from",
		a: "to",
		heureCourte: (e) => `${e}:00`,
		reveil: "Wake the screen when someone passes",
		reveilAide: "A motion or presence sensor near the tablet.",
		choisirDetecteur: "Pick the sensor",
		signaler: "Report a problem",
		signalerAide: "A device misplaced, missing or shown by mistake? Pick it, then attach the diagnostic to your issue. It describes your home without any name or value, and becomes a test case so the mistake never comes back.",
		signalerChoisir: "Pick the device involved",
		devraitEtre: "It should be…",
		attenteCache: "Hidden: it's technical information",
		attenteVisible: "Visible: it's missing today",
		dansLaPiece: "In the area",
		dansLaPage: "On the page",
		pages: {
			securite: "Security",
			climat: "Climate",
			energie: "Energy",
			systeme: "System"
		},
		telecharger: "Download the diagnostic",
		copier: "Copy",
		ouvrirTicket: "Open an issue",
		copie: "Diagnostic copied: paste it into the issue.",
		copieEchec: "Copying failed: download the diagnostic and attach the file to the issue.",
		tropLong: "Diagnostic copied, but too long to paste into an issue: download it and attach the file."
	},
	automatismes: {
		alias: {
			fuite: "notify on leak",
			fumee: "notify on smoke or gas",
			pile: "notify when a battery is low",
			sauvegarde: "notify if the backup fails"
		},
		titre: {
			fuite: "Leak detected",
			fumee: "Smoke or gas detected",
			pile: "Low battery",
			sauvegarde: "Backup failed"
		},
		message: {
			fuite: "{{ trigger.to_state.name }} detected water.",
			fumee: "{{ trigger.to_state.name }} went off.",
			pile: "{{ trigger.to_state.name }}: {{ trigger.to_state.state }}%, replace it soon.",
			sauvegarde: "The last automatic Home Assistant backup failed."
		},
		description: "Created by Automatic Dashboard from a thing to check. It is yours: edit it freely."
	},
	integrations: {
		demo: "Demo",
		template: "Templates",
		systemmonitor: "System monitor"
	},
	sections: {
		etat: ["Automatic Dashboard: the state of the home", "The home in one sentence, today's sky and the things to check."],
		moment: ["Automatic Dashboard: right now", "What's going on: music, who's home, appointments, running machines, shopping list."],
		climat: ["Automatic Dashboard: climate", "Inside, outside, humidity, today's curve and comfort room by room."],
		systeme: ["Automatic Dashboard: system", "Updates, the last backup and the state of Home Assistant."],
		"a-ranger": ["Automatic Dashboard: to sort", "Devices without a room, with the suggested room in one click."],
		depart: ["Automatic Dashboard: before leaving", "What is still open, on or unlocked, with one button per action."]
	},
	tableau: ["Automatic Dashboard", "A complete dashboard that builds itself from your devices."],
	cartes: {
		points: ["Automatic Dashboard: things to check", "What needs checking in the home, or nothing."],
		piece: ["Automatic Dashboard: room", "A room, its temperature and what is on."]
	},
	meteo: {
		"clear-night": "Clear night",
		cloudy: "Cloudy",
		fog: "Fog",
		hail: "Hail",
		lightning: "Lightning",
		"lightning-rainy": "Thunderstorm",
		partlycloudy: "Partly cloudy",
		pouring: "Pouring",
		rainy: "Rainy",
		snowy: "Snowy",
		"snowy-rainy": "Sleet",
		sunny: "Sunny",
		windy: "Windy",
		"windy-variant": "Windy",
		exceptional: "Exceptional"
	}
}, rt = {
	textes: {
		bonjour: "Bonjour",
		apresmidi: "Bon après-midi",
		bonsoir: "Bonsoir",
		nuit: "Bonne nuit",
		accueil: "Accueil",
		favoris: "Favoris",
		pieces: "Pièces",
		votreMaison: "Votre maison",
		aujourdhui: "Aujourd'hui",
		climat: "Climat",
		energie: "Énergie",
		securite: "Sécurité",
		systeme: "Système",
		aRanger: "À ranger",
		meteo: "Météo",
		lumieres: "Lumières",
		volets: "Volets",
		appareils: "Appareils",
		capteurs: "Capteurs",
		medias: "Musique et télé",
		thermostats: "Chauffage et climatisation",
		temperatures: "Températures",
		sauvegardes: "Sauvegardes",
		misesAJour: "Mises à jour",
		piles: "Piles",
		machine: "La machine",
		ouvertures: "Portes et fenêtres",
		alertes: "Détecteurs",
		toutVaBien: "Tout va bien à la maison.",
		mesFavoris: "Mes favoris",
		mesFavorisPhrase: "Les vôtres remplacent ceux du tableau, pour vous seulement, sur tous vos écrans.",
		mesFavorisListe: "Vos favoris",
		mesFavorisOrdre: "Dans l'ordre de l'accueil : les flèches le changent.",
		mesFavorisVide: "Vous n'en avez pas choisi : l'accueil montre ceux du tableau. Touchez les étoiles ci-dessous.",
		monter: "Monter",
		descendre: "Descendre",
		retirerFavori: "Retirer de mes favoris",
		sansPieceTitre: "Sans pièce",
		favorisDuTableau: "Revenir aux favoris du tableau",
		termine: "Terminé",
		modifierFavoris: "Mes favoris",
		air: "Air",
		vehicule: "Véhicule",
		exterieur: "Extérieur",
		airBon: "L'air est bon partout.",
		vehiculeSansBatterie: "Votre véhicule et sa recharge.",
		vehiculeBatterie: (e, t) => `Batterie à ${e} %${t ? ", en charge" : ""}.`,
		voitureChargee: "La voiture est chargée",
		jePars: "Je pars",
		departPhrase: "Ce qui reste ouvert, allumé ou déverrouillé, et un bouton pour chaque geste.",
		departLumieres: (e) => `${e} lumière${e > 1 ? "s allumées" : " allumée"}`,
		departSerrures: (e) => `${e} serrure${e > 1 ? "s ouvertes" : " ouverte"}`,
		departVolets: (e) => `${e} volet${e > 1 ? "s ouverts" : " ouvert"}`,
		departAlarme: "L'alarme est désarmée",
		departOuvertures: (e) => e > 1 ? `${e} portes ou fenêtres ouvertes` : "1 porte ou fenêtre ouverte",
		aLaMain: "À fermer à la main",
		departPret: "Tout est fermé et éteint. Bonne journée !",
		departEchec: "Ça n'a pas marché :",
		toutVerrouiller: "Tout verrouiller",
		aFaire: (e) => `${e} à faire`,
		reveiller: "Toucher pour rallumer l'écran",
		pleinEcran: "Plein écran",
		sortirPleinEcran: "Appui long pour quitter le plein écran",
		bilan: "Bilan",
		bilanPret: "Le bilan de la semaine est prêt",
		bilanPretMois: "Le bilan du mois est prêt",
		bilanPretDetail: "Énergie, températures et ouvertures.",
		bilanEntete: "La semaine ou le mois passé : l'énergie et son coût, les températures, ce qui s'est ouvert.",
		semaine: "Semaine",
		mois: "Mois",
		bilanPartielMois: (e) => `Home Assistant n'a que ${e} jour${e > 1 ? "s" : ""} d'historique pour ce mois : le premier bilan complet arrivera le 1er du mois prochain.`,
		bilanPhrase: (e, t) => `Du ${e} au ${t}.`,
		bilanVide: "Pas encore assez d'historique : le bilan se remplira tout seul au fil des semaines.",
		bilanSansEnergie: "Pas de compteur d'énergie pour la maison.",
		bilanSansTemperature: "Pas de température suivie.",
		bilanEcart: (e) => `${e} par rapport à la semaine d'avant`,
		bilanBarres: "Consommation jour par jour",
		bilanFois: (e) => e > 1 ? "ouvertures" : "ouverture",
		bilanPartiel: (e) => `Home Assistant n'a que ${e} jour${e > 1 ? "s" : ""} d'historique pour cette semaine : le premier bilan complet arrivera lundi prochain.`,
		bilanSansDonnee: "Pas encore de données ce jour-là",
		absenceCalme: "Personne à la maison, tout est fermé et éteint.",
		absenceReste: (e) => `Personne à la maison : ${e}.`,
		absOuverts: (e) => e > 1 ? `${e} ouvertures` : "1 ouverture",
		absSerrures: (e) => e > 1 ? `${e} serrures ouvertes` : "1 serrure ouverte",
		absLumieres: (e) => e > 1 ? `${e} lumières allumées` : "1 lumière allumée",
		absAlarme: "l'alarme désarmée",
		verrouiller: (e) => `Verrouillez ${e}`,
		verrouillerSans: "À verrouiller",
		armer: "Armez l'alarme",
		eteindre: "Éteignez les lumières",
		personneLa: "Personne n'est à la maison.",
		lumieresOubliees: (e, t) => `${e > 1 ? `${e} allumées` : "1 allumée"}${t ? ` : ${t}` : ""}.`,
		points: (e) => e > 1 ? `${e} points à regarder, le reste va bien.` : "1 point à regarder, le reste va bien.",
		alerteGrave: (e) => `${e}.`,
		ouverte: "Ouverte",
		fuite: "Fuite détectée",
		fumee: "Fumée détectée",
		alarme: "Alarme déclenchée",
		pileFaible: "Pile faible",
		serviceEnPanne: "Service hors ligne",
		fermer: (e) => `Fermez ${e}`,
		fermerSans: "À fermer",
		chauffageOuvert: "Le chauffage tourne pendant que c'est ouvert.",
		aerer: (e) => `Aérez ${e}`,
		aererSans: "À aérer",
		fermerVolets: (e) => `Fermez les volets ${e.replace(/^le /, "du ").replace(/^la /, "de la ").replace(/^l'/, "de l'")}`,
		fermerVoletsSans: "Volets à fermer",
		chaleur: (e, t) => `Il fait ${e} dehors et ${t} dedans : gardez la fraîcheur.`,
		ouvrirFrais: "Ouvrez les fenêtres",
		fraisDehors: (e, t) => `Il fait plus frais dehors : ${e}, contre ${t} dedans.`,
		machineFinie: (e) => `${e} a fini`,
		machineFinieSans: "Terminé",
		depuis: (e) => e < 60 ? `Depuis ${e} min.` : `Depuis ${Math.floor(e / 60)} h ${String(e % 60).padStart(2, "0")}.`,
		co2: (e) => `${e} ppm de CO₂ : quelques minutes de fenêtre ouverte suffisent.`,
		humidite: (e) => `${e} % d'humidité : aérez pour éviter la moisissure.`,
		majs: (e) => e > 1 ? `${e} mises à jour disponibles` : "1 mise à jour disponible",
		majsDetail: "Système, applications et appareils",
		sauvegardeAucune: "Aucune sauvegarde automatique",
		sauvegardeAucuneDetail: "À régler dans les sauvegardes",
		sauvegardeEchec: "La dernière sauvegarde a échoué",
		sauvegardeEchecDetail: "Ouvrir les sauvegardes",
		vigilance: (e) => `Vigilance ${e}`,
		autres: (e) => `et ${e} autre${e > 1 ? "s" : ""}`,
		ignorer: "Ignorer tant que ça ne change pas",
		actions: "Que faire de ce point ?",
		prevenir: "Me prévenir la prochaine fois",
		prevenu: "Vous serez prévenu : voir l'automatisme",
		prevenirAdmin: "Pour être prévenu, un administrateur peut l'activer dans les réglages du tableau.",
		automatismeCree: (e) => `Automatisme créé : ${e}.`,
		automatismeEchec: "L'automatisme n'a pas pu être créé.",
		voir: "Voir",
		ignores: (e) => `${e} point${e > 1 ? "s" : ""} ignoré${e > 1 ? "s" : ""} tant qu'il${e > 1 ? "s ne changent" : " ne change"} pas.`,
		remontrer: "Remontrer",
		allumees: (e) => e > 1 ? `${e} allumées` : e === 1 ? "1 allumée" : "Éteintes",
		dedans: "dedans",
		dehors: "Dehors",
		moyenne: "en moyenne",
		toutFerme: "Tout est fermé",
		ouverts: (e) => e > 1 ? `${e} ouvertures` : "1 ouverture",
		aJour: "À jour",
		enCeMoment: "en ce moment",
		sansPiece: (e) => e > 1 ? `${e} appareils sans pièce` : "1 appareil sans pièce",
		choisirPieces: "Choisir leur pièce",
		toutEteindre: "Tout éteindre",
		toutFermer: "Tout fermer",
		alarmeEtat: {
			disarmed: "Alarme désactivée",
			armed_home: "Alarme activée (présence)",
			armed_away: "Alarme activée",
			armed_night: "Alarme de nuit",
			triggered: "Alarme déclenchée"
		},
		aucuneFuite: "aucune fuite",
		sauvegardeIlYa: (e) => `Sauvegarde ${e}`,
		sauvegardeNon: "Sauvegardes à régler",
		lever: "Lever",
		coucher: "Coucher",
		deJour: "de jour",
		soleil: "Soleil",
		ferie: "Prochain jour férié",
		ferieAujourdhui: "Aujourd'hui, férié",
		dansJours: (e) => e === 1 ? "demain" : `dans ${e} jours`,
		premiersPas: "Premiers pas",
		premiersPasDetail: "Pour profiter d'Automatic Dashboard dès aujourd'hui.",
		etapes: {
			emplacement: "Indiquer où est la maison",
			meteoFrance: "Ajouter Météo-France : pluie dans l'heure et vigilance",
			meteo: "Ajouter la météo",
			feries: "Afficher les jours fériés",
			sauvegardes: "Activer les sauvegardes automatiques",
			pieces: "Ranger vos appareils dans des pièces",
			appli: "Installer l'application sur votre téléphone",
			appareil: "Ajouter un appareil"
		},
		phraseMeteo: (e, t) => `${e}, ${t}.`,
		pasDePluie: "Pas de pluie dans l'heure.",
		pluieDansPhrase: (e) => `Pluie dans ${e} min.`,
		pluieEnCours: "Il pleut.",
		piecePhrase: (e) => e.join(", ") + ".",
		lumieresAllumees: (e) => e > 1 ? `${e} lumières allumées` : "1 lumière allumée",
		voletsOuverts: (e) => e > 1 ? `${e} volets ouverts` : "volet ouvert",
		chauffe: "chauffage en marche",
		clim: "climatisation en marche",
		toutEteint: "Tout est éteint",
		climatPhrase: (e, t) => [e, t].filter(Boolean).join(", ") + ".",
		energiePhrase: (e) => `${e} en ce moment.`,
		pieceSurtitre: "Pièce",
		etagePrefixe: "",
		enCeMomentTitre: "En ce moment",
		mediasEnLecture: (e) => `${e} médias en lecture`,
		pauseMedia: "Mettre en pause",
		aLaMaison: (e) => `À la maison : ${e.join(", ")}`,
		personnesALaMaison: (e) => e > 1 ? `${e} personnes à la maison` : "1 personne à la maison",
		personne: "Personne à la maison",
		ailleurs: (e, t) => `${e} : ${t ?? "ailleurs"}`,
		enCours: "En cours",
		demain: "Demain",
		toutLeJour: "Aujourd'hui",
		enMarche: (e) => `${e} en marche`,
		minuteur: (e, t) => `${e} : ${t} min`,
		enPause: (e) => `${e} : en pause`,
		articles: (e) => e > 1 ? `${e} articles à acheter` : "1 article à acheter",
		pluieTitre: "Pluie dans l'heure",
		pluieAucune: "Pas de pluie dans l'heure",
		pluieDans: (e, t) => `${e} dans ${t} min`,
		pluieFin: (e) => `Il pleut, fin prévue dans ${e} min`,
		pluieContinue: "Pluie pendant toute l'heure",
		pluieSource: (e) => `Météo-France, ${e}`,
		maintenant: "maintenant",
		dans1h: "dans 1 h",
		pluieTypes: {},
		couleurs: [
			"vert",
			"jaune",
			"orange",
			"rouge"
		],
		vigilanceVerte: "Pas de vigilance météo aujourd'hui",
		conseils: [
			"",
			"Soyez attentif : des phénomènes habituels mais parfois dangereux sont prévus.",
			"Soyez très vigilant : des phénomènes dangereux sont prévus. Suivez les consignes des autorités.",
			"Vigilance absolue : des phénomènes dangereux d'une intensité exceptionnelle sont prévus. Respectez les consignes des autorités."
		],
		vigilanceCarte: "Voir la carte de Météo-France",
		panneTitre: "Le tableau n'a pas pu se construire",
		panneTexte: "Automatic Dashboard a rencontré une erreur en lisant votre maison. Rien n'est cassé dans Home Assistant : vos appareils et vos automatismes fonctionnent normalement.",
		panneEtapes: [
			"Rechargez la page.",
			"Si Automatic Dashboard vient d'être mis à jour, redémarrez Home Assistant (*Paramètres*, *Système*, en haut à droite), puis rechargez la page.",
			"Si l'erreur revient, [signalez-la](LIEN) en joignant le message ci-dessous (relisez-le : il décrit l'erreur, pas votre maison)."
		],
		dehorsTitre: "Dehors",
		et: " et ",
		bonPartout: "Il fait bon partout.",
		bonPresquePartout: (e) => `Il fait bon presque partout. À surveiller : ${e}.`,
		horsConfort: (e) => `${e} pièces hors de la zone de confort.`,
		chauffagesEnMarche: (e) => `${e} chauffage${e > 1 ? "s" : ""} en marche.`,
		toutFermePhrase: "Tout est fermé.",
		ouvertsPhrase: (e, t) => `${e} ${t > 1 ? "sont ouvertes" : "est ouverte"}. ${t > 2 ? `Et ${t - 2} autres.` : "Tout le reste est fermé."}`,
		sansSauvegardePhrase: (e) => `Aucune sauvegarde automatique.${e ? ` ${e}.` : " Tout le reste est à jour."}`,
		systemeOkPhrase: (e, t) => `Tout fonctionne. ${e ? `${e}, sauvegarde ${t}.` : `Tout est à jour, sauvegarde ${t}.`}`,
		donnerPiece: "Donnez-leur une pièce : ils apparaîtront sur l'accueil et dans leur pièce.",
		pastilleSansPiece: (e) => `${e} appareil${e > 1 ? "s n'ont" : " n'a"} pas de pièce`,
		motsEnMarche: {
			chauffage: ["chauffage", "chauffages"],
			clim: ["clim", "clims"],
			appareil: ["appareil", "appareils"]
		},
		tableauPret: "Votre tableau Automatic Dashboard est prêt.",
		ouvrir: "Ouvrir",
		leverCoucher: (e, t) => `Lever ${e} · coucher ${t}`,
		nbEntites: (e) => `${e} entité${e > 1 ? "s" : ""}`,
		sansAppareil: "sans appareil",
		rangerDans: (e) => `Ranger dans ${e}`,
		autreChoix: "Autre",
		choisir: "Choisir",
		rangeDans: (e, t) => `${e} : rangé dans ${t}.`,
		annuler: "Annuler",
		noteAdmin: "Un administrateur peut ranger ces appareils en un clic, dans la pièce proposée.",
		airSec: "Air sec",
		airHumide: "Air humide : aérez",
		confortable: "Confortable",
		humiditeTitre: "Humidité",
		rienOuvert: "Rien ne s'est ouvert.",
		autresTitre: "Autres",
		autresPieces: "Autres pièces",
		pieceParPiece: "Pièce par pièce",
		compteurs: "Compteurs",
		repartition: "Répartition",
		septJours: "7 derniers jours",
		serruresTitre: "Serrures",
		presence: "Présence",
		activite: "Activité",
		huitSemaines: "8 dernières semaines",
		temperatures7j: "Températures, 7 jours",
		co2Jour: "CO₂, 24 heures",
		jardin: "Le jardin",
		portailGarage: "Portail et garage",
		arrosage: "Arrosage et piscine",
		tondeuse: "Tondeuse",
		tabletteMurale: "Tablette murale",
		deuxPoints: " : "
	},
	heros: {
		dedans: "dedans",
		dehors: "dehors",
		humidite: "humidité",
		maintenant: "maintenant",
		aujourdhui: "aujourd'hui",
		hier: "hier",
		production: "production",
		ouvertures: (e, t) => `${e > 1 ? "ouvertes" : "ouverte"} sur ${t}`,
		serrures: (e) => e > 1 ? "déverrouillées" : "déverrouillée",
		detecteurs: (e) => e > 1 ? "alertes" : "alerte",
		toutFerme: "Tout est fermé",
		ouvert: "ouverte",
		gerer: "Gérer",
		voir: "Voir",
		regler: "Régler",
		majs: (e) => e > 1 ? `${e} mises à jour disponibles` : "1 mise à jour disponible",
		aJour: "Tout est à jour",
		sauvegarde: "sauvegarde",
		prochaine: "prochaine",
		taille: "taille",
		version: "Home Assistant",
		jamais: "jamais",
		nonPrevue: "non prévue",
		reussie: "réussie",
		echouee: "échouée",
		sansSauvegarde: "Aucune sauvegarde automatique",
		sansSauvegardeDetail: "Sans elle, une panne peut tout effacer.",
		ranges: (e) => `${e} appareil${e > 1 ? "s" : ""} rangé${e > 1 ? "s" : ""}`,
		aRanger: (e) => `${e} à ranger`,
		rangerTout: "Ranger mes appareils",
		creerPiece: "Créer une pièce",
		legende24: "24 dernières heures",
		puissance: "puissance",
		alarme: "Alarme"
	},
	editeur: {
		mode: "Mode",
		modes: {
			auto: ["Automatique", "Choisi d'après votre maison, et revu quand elle change."],
			decouverte: ["Découverte", "Peu d'appareils : la météo et chaque appareil en grand."],
			maison: ["Maison", "Points à regarder, favoris, pièces et aperçus."],
			complet: ["Complet", "Beaucoup d'appareils : pièces par étage, tuiles compactes."]
		},
		nomsModes: {
			decouverte: "Découverte",
			maison: "Maison",
			complet: "Complet"
		},
		detecte: (e, t, n, r) => `D'après votre maison : mode ${e} (${t} entité${t > 1 ? "s" : ""} utile${t > 1 ? "s" : ""}, ${n} appareil${n > 1 ? "s" : ""}, ${r} pièce${r > 1 ? "s" : ""}).`,
		apparence: "Apparence",
		apparenceAide: "Choisissez le style et ce que le tableau montre. Tout reste réglé automatiquement.",
		style: "Style",
		styles: {
			automatic: ["Automatic", "Bleu et terre cuite, avec la trame du site."],
			doux: ["Doux", "Crème et vert sauge, sans bordure, plus arrondi."],
			contraste: ["Contrasté", "Noir sur blanc, bordures marquées : le plus lisible."],
			home_assistant: ["Votre thème", "Celui choisi dans votre profil Home Assistant."]
		},
		piecesClimat: "Les pièces, dans Climat",
		barres: "Barres",
		mosaique: "Mosaïque",
		tuiles: "Les tuiles des favoris",
		tuilesAutomatic: "Nom sur deux lignes",
		tuilesHA: "Home Assistant",
		ciel: "Le ciel du jour",
		cielAide: "En tête de l'accueil : l'arc du soleil, et la lune la nuit.",
		conseils: "Les conseils",
		conseilsAide: "« Fermez la fenêtre du salon », « Aérez la chambre »… dans les points à regarder.",
		bilanPage: "Le bilan de la semaine",
		bilanPageAide: "Une page à part, annoncée le lundi.",
		favoris: "Favoris",
		favorisAide: "Vos favoris d'abord, dans l'ordre choisi : faites-les glisser pour le changer.",
		completer: "Compléter avec les appareils que vous utilisez le plus",
		completerAide: "Home Assistant les propose selon l'heure : ils changent au fil de la journée.",
		propose: "Proposé",
		epingler: "Épingler",
		retirer: "Retirer",
		deplacer: (e) => `Déplacer ${e} (glisser, ou flèches du clavier)`,
		ajouterFavori: "Ajouter un favori",
		aucunFavori: "Aucun favori : la rangée n'apparaîtra pas.",
		favorisDecouverte: "En mode Découverte, l'accueil montre déjà chaque appareil en grand : les favoris apparaîtront en mode Maison ou Complet.",
		masques: "Masqués",
		masquesAide: "Ce qu'Automatic Dashboard ne montre nulle part. Le reste de Home Assistant n'en est pas changé.",
		masquer: "Masquer un appareil ou une entité",
		aucunMasque: "Rien n'est masqué.",
		masquesEtiquette: (e) => `Et ${e} entité${e > 1 ? "s" : ""} par l'étiquette « Automatic Dashboard : masquer », posée dans Home Assistant sur des entités, des appareils ou des pièces.`,
		parEtiquette: "Par étiquette",
		parEtiquetteAide: "Épinglé par l'étiquette « Automatic Dashboard : favori », posée dans Home Assistant",
		noms: "Noms",
		nomsAide: "Le nom affiché dans Automatic Dashboard. Celui de Home Assistant (et des assistants vocaux) ne change pas.",
		renommer: "Renommer un appareil ou une entité",
		nomTableau: "Nom dans Automatic Dashboard",
		nomDansHA: (e) => `Dans Home Assistant : ${e}`,
		pieces: "Pièces",
		piecesAide: "Les pièces et les étages suivent l'ordre choisi dans Home Assistant.",
		changerOrdre: "Changer l'ordre",
		enregistrerDabord: "Enregistrez d'abord vos réglages pour changer l'ordre des pièces.",
		prevenirTitre: "Me prévenir",
		prevenirAide: "Automatic Dashboard crée l'automatisme tout fait dans Home Assistant (Paramètres, Automatisations), qui surveille tous les capteurs du même genre. S'applique tout de suite.",
		sujets: {
			fuite: "En cas de fuite d'eau",
			fumee: "En cas de fumée ou de gaz",
			pile: "Quand une pile est faible",
			sauvegarde: "Si la sauvegarde échoue"
		},
		surveille: (e) => `Surveille ${e} capteur${e > 1 ? "s" : ""}.`,
		surveilleSauvegarde: "Surveille les sauvegardes automatiques de Home Assistant.",
		rienASurveiller: {
			fuite: "Aucun détecteur de fuite dans la maison.",
			fumee: "Aucun détecteur de fumée ou de gaz.",
			pile: "Aucune pile suivie.",
			sauvegarde: "Les sauvegardes automatiques ne sont pas réglées."
		},
		quiPrevenir: "Qui prévenir",
		notificationHA: "La notification dans Home Assistant",
		aucunTelephone: "Aucun téléphone n'a l'application Home Assistant : installez-la pour être prévenu sur votre téléphone.",
		tablette: "Tablette murale",
		tabletteAide: (e) => `Sur la tablette, ouvrez ${e} : l'heure en grand, la phrase d'état, les points à regarder et, la nuit, un écran de veille.`,
		ouvrirTablette: "Ouvrir la page",
		nuit: "Écran de veille la nuit, de",
		a: "à",
		heureCourte: (e) => `${e} h`,
		reveil: "Rallumer l'écran au passage",
		reveilAide: "Un détecteur de mouvement ou de présence près de la tablette.",
		choisirDetecteur: "Choisir le détecteur",
		signaler: "Signaler un problème",
		signalerAide: "Un appareil mal rangé, absent ou en trop ? Choisissez-le, puis joignez le diagnostic à votre ticket. Il décrit votre maison sans aucun nom ni valeur, et devient un cas de test pour que l'erreur ne revienne jamais.",
		signalerChoisir: "Choisir l'appareil concerné",
		devraitEtre: "Il devrait être…",
		attenteCache: "Caché : c'est une information technique",
		attenteVisible: "Visible : il manque aujourd'hui",
		dansLaPiece: "Dans la pièce",
		dansLaPage: "Dans la page",
		pages: {
			securite: "Sécurité",
			climat: "Climat",
			energie: "Énergie",
			systeme: "Système"
		},
		telecharger: "Télécharger le diagnostic",
		copier: "Copier",
		ouvrirTicket: "Ouvrir un ticket",
		copie: "Diagnostic copié : collez-le dans le ticket.",
		copieEchec: "La copie n'a pas marché : téléchargez le diagnostic et joignez le fichier au ticket.",
		tropLong: "Diagnostic copié, mais trop long pour être collé dans un ticket : téléchargez-le et joignez le fichier."
	},
	automatismes: {
		alias: {
			fuite: "prévenir en cas de fuite",
			fumee: "prévenir en cas de fumée ou de gaz",
			pile: "prévenir quand une pile est faible",
			sauvegarde: "prévenir si la sauvegarde échoue"
		},
		titre: {
			fuite: "Fuite détectée",
			fumee: "Fumée ou gaz détecté",
			pile: "Pile faible",
			sauvegarde: "Sauvegarde ratée"
		},
		message: {
			fuite: "{{ trigger.to_state.name }} a détecté de l'eau.",
			fumee: "{{ trigger.to_state.name }} s'est déclenché.",
			pile: "{{ trigger.to_state.name }} : {{ trigger.to_state.state }} %, à changer bientôt.",
			sauvegarde: "La dernière sauvegarde automatique de Home Assistant a échoué."
		},
		description: "Créé par Automatic Dashboard, depuis un point à regarder. Il vous appartient : modifiez-le librement."
	},
	integrations: {
		demo: "Démonstration",
		template: "Modèles",
		systemmonitor: "Moniteur système"
	},
	sections: {
		etat: ["Automatic Dashboard : l'état de la maison", "La maison en une phrase, le ciel du jour et les points à regarder."],
		moment: ["Automatic Dashboard : en ce moment", "Ce qui se passe : musique, présences, rendez-vous, machines en marche, courses."],
		climat: ["Automatic Dashboard : le climat", "Dedans, dehors, l'humidité, la courbe du jour et le confort pièce par pièce."],
		systeme: ["Automatic Dashboard : le système", "Les mises à jour, la dernière sauvegarde et l'état de Home Assistant."],
		"a-ranger": ["Automatic Dashboard : à ranger", "Les appareils sans pièce, avec la pièce proposée en un clic."],
		depart: ["Automatic Dashboard : avant de partir", "Ce qui reste ouvert, allumé ou déverrouillé, et un bouton par geste."]
	},
	tableau: ["Automatic Dashboard", "Un tableau de bord complet, construit tout seul à partir de vos appareils."],
	cartes: {
		points: ["Automatic Dashboard : points à regarder", "Ce qu'il faut regarder dans la maison, ou rien."],
		piece: ["Automatic Dashboard : pièce", "Une pièce, sa température et ce qui est allumé."]
	},
	meteo: {
		"clear-night": "Nuit claire",
		cloudy: "Nuageux",
		fog: "Brouillard",
		hail: "Grêle",
		lightning: "Orage",
		"lightning-rainy": "Orage et pluie",
		partlycloudy: "Éclaircies",
		pouring: "Averses",
		rainy: "Pluie",
		snowy: "Neige",
		"snowy-rainy": "Pluie et neige",
		sunny: "Ensoleillé",
		windy: "Venteux",
		"windy-variant": "Venteux",
		exceptional: "Exceptionnel"
	}
}, it = {
	fr: rt,
	en: nt
}, at = nt;
rt.textes, nt.textes, rt.heros, nt.heros, rt.editeur, nt.editeur;
var ot = {
	"clear-night": "mdi:weather-night",
	cloudy: "mdi:weather-cloudy",
	fog: "mdi:weather-fog",
	hail: "mdi:weather-hail",
	lightning: "mdi:weather-lightning",
	"lightning-rainy": "mdi:weather-lightning-rainy",
	partlycloudy: "mdi:weather-partly-cloudy",
	pouring: "mdi:weather-pouring",
	rainy: "mdi:weather-rainy",
	snowy: "mdi:weather-snowy",
	"snowy-rainy": "mdi:weather-snowy-rainy",
	sunny: "mdi:weather-sunny",
	windy: "mdi:weather-windy",
	"windy-variant": "mdi:weather-windy-variant",
	exceptional: "mdi:alert-circle-outline"
}, O = (e) => (e?.locale?.language || e?.language || "fr").slice(0, 2), st = (e) => O(e) === "fr", ct = (e) => it[O(e)] ?? at, k = (e) => ct(e).textes, lt = (e) => ct(e).heros, A = (e, t, n = 1) => new Intl.NumberFormat(e?.locale?.language || "fr", {
	maximumFractionDigits: n,
	minimumFractionDigits: n
}).format(t), j = (e, t) => `${A(e, t, 1)}°`;
function ut(e) {
	let t = e?.locale?.time_format;
	if (t === "12") return !0;
	if (t === "24") return !1;
	if (t === "system") return new Intl.DateTimeFormat(void 0, { hour: "numeric" }).resolvedOptions().hour12;
}
var M = (e, t) => {
	let n = ut(e);
	return st(e) && !n ? `${t.getHours()} h ${String(t.getMinutes()).padStart(2, "0")}` : new Intl.DateTimeFormat(e?.locale?.language || "en", {
		hour: "numeric",
		minute: "2-digit",
		hour12: n
	}).format(t);
}, N = (e) => e && e.charAt(0).toUpperCase() + e.slice(1), P = (e) => !!e && !["unknown", "unavailable"].includes(e.state);
function dt(e, t) {
	let n = new Intl.RelativeTimeFormat(O(e), { numeric: "auto" }), r = Math.round((t.getTime() - Date.now()) / 6e4);
	if (Math.abs(r) < 60) return n.format(r, "minute");
	let i = Math.round(r / 60);
	return Math.abs(i) < 36 ? n.format(i, "hour") : n.format(Math.round(i / 24), "day");
}
function ft(e, t) {
	let n = t?.state ?? "";
	return {
		icone: ot[n] ?? "mdi:weather-cloudy",
		texte: ct(e).meteo[n] ?? n
	};
}
function F(e) {
	let t = window.__automaticDashboardNaviguer;
	if (t) return t(e);
	let n = e.startsWith("/") ? e : `/${location.pathname.split("/")[1]}/${e}`;
	history.pushState(null, "", n), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function I(e, t) {
	e.dispatchEvent(new CustomEvent("hass-more-info", {
		detail: { entityId: t },
		bubbles: !0,
		composed: !0
	}));
}
function L(e, t, n = {}) {
	if (n[t]) return n[t];
	let r = e.devices?.[e.entities[t]?.device_id ?? ""];
	return r?.name_by_user || r?.name || e.states[t]?.attributes.friendly_name || t;
}
var pt = {
	mqtt: "MQTT",
	zha: "Zigbee (ZHA)",
	matter: "Matter",
	hue: "Philips Hue",
	esphome: "ESPHome",
	hassio: "Supervisor",
	glances: "Glances",
	uptime_kuma: "Uptime Kuma",
	adguard: "AdGuard Home",
	pi_hole: "Pi-hole",
	speedtestdotnet: "Speedtest",
	proxmoxve: "Proxmox VE",
	synology_dsm: "Synology DSM",
	unifi: "UniFi Network",
	truenas: "TrueNAS",
	fritz: "FRITZ!Box",
	netdata: "Netdata"
};
function mt(e, t) {
	let n = ct(e).integrations[t] ?? pt[t];
	return e.localize?.(`component.${t}.title`) || n || N(t.replace(/_/g, " "));
}
function ht(e) {
	return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Crect width='2.8' height='2.8' fill='${e?.themes?.darkMode ? "%23FFFFFF" : "%230277BD"}' fill-opacity='${e?.themes?.darkMode ? "0.12" : "0.30"}'/%3E%3C/svg%3E")`;
}
function gt(e, t) {
	let n = 29.530588853, r = ((e.getTime() - Date.UTC(2e3, 0, 6, 18, 14)) / 864e5 % n + n) % n, [i, a, o] = [
		[
			"mdi:moon-new",
			"Nouvelle lune",
			"New moon"
		],
		[
			"mdi:moon-waxing-crescent",
			"Premier croissant",
			"Waxing crescent"
		],
		[
			"mdi:moon-first-quarter",
			"Premier quartier",
			"First quarter"
		],
		[
			"mdi:moon-waxing-gibbous",
			"Gibbeuse croissante",
			"Waxing gibbous"
		],
		[
			"mdi:moon-full",
			"Pleine lune",
			"Full moon"
		],
		[
			"mdi:moon-waning-gibbous",
			"Gibbeuse décroissante",
			"Waning gibbous"
		],
		[
			"mdi:moon-last-quarter",
			"Dernier quartier",
			"Last quarter"
		],
		[
			"mdi:moon-waning-crescent",
			"Dernier croissant",
			"Waning crescent"
		]
	][Math.floor((r + n / 16) % n / (n / 8))], s = Math.round(((n / 2 - r) % n + n) % n), c = t === "fr" ? s === 0 ? "pleine lune ce soir" : `pleine lune dans ${s} jour${s > 1 ? "s" : ""}` : s === 0 ? "full moon tonight" : `full moon in ${s} day${s > 1 ? "s" : ""}`;
	return {
		icone: i,
		nom: t === "fr" ? a : o,
		pleine: c
	};
}
// src/donnees/energie.ts
var _t = null, vt = null;
function yt(e, t = {}) {
	let n = e?.energy_sources ?? [];
	if (!n.length) return null;
	let r = {
		reseau: [],
		retour: [],
		solaire: [],
		gaz: [],
		eau: [],
		couts: [],
		appareils: [],
		puissance: []
	}, i = (e, n) => {
		r.reseau.push(e);
		let i = n || t[e];
		i && r.couts.push(i);
	};
	for (let e of n) if (e.type === "grid") {
		e.stat_energy_from && i(e.stat_energy_from, e.stat_cost), e.stat_energy_to && r.retour.push(e.stat_energy_to), e.stat_rate && r.puissance.push(e.stat_rate);
		for (let t of e.flow_from ?? []) t.stat_energy_from && i(t.stat_energy_from, t.stat_cost);
		for (let t of e.flow_to ?? []) t.stat_energy_to && r.retour.push(t.stat_energy_to);
	} else e.type === "solar" && e.stat_energy_from ? r.solaire.push(e.stat_energy_from) : e.type === "gas" && e.stat_energy_from ? r.gaz.push(e.stat_energy_from) : e.type === "water" && e.stat_energy_from && r.eau.push(e.stat_energy_from);
	return r.appareils = (e?.device_consumption ?? []).map((e) => e.stat_consumption).filter((e) => !!e), r;
}
function bt(e) {
	return _t && Date.now() - _t.quand < 36e5 ? Promise.resolve(_t.valeur) : (vt ??= Promise.all([e.callWS({ type: "energy/get_prefs" }).catch(() => null), e.callWS({ type: "energy/info" }).catch(() => null)]).then(([e, t]) => {
		let n = yt(e, t?.cost_sensors ?? {});
		return _t = {
			quand: Date.now(),
			valeur: n
		}, vt = null, n;
	}), vt);
}
var xt = () => _t?.valeur ?? null, St = [
	[/^(chambre|cuisine|salle|buanderie|cave|mezzanine|v(é|e)randa|terrasse|piscine|fen(ê|e)tre|porte|baie|lucarne|trappe|machine)\b/i, "la "],
	[/^(salon|bureau|s(é|e)jour|couloir|garage|grenier|cellier|dressing|hall|palier|jardin|balcon|patio|velux|portail|volet|garde-manger|wc|lave-linge|lave-vaisselle|s(è|e)che-linge|four)\b/i, "le "],
	[/^(entr(é|e)e|(é|e)tage|atelier|abri|escalier)\b/i, "l'"]
], Ct = /^(bedroom|kitchen|living|bathroom|office|hall|hallway|garage|attic|basement|cellar|laundry|dining|nursery|guest|master|kids?|window|door|patio|garden|terrace|balcony|washer|washing|dryer|dishwasher|oven)\b/i, wt = /lave-linge|lave-vaisselle|s(è|e)che-linge|machine (à|a) laver|washer|washing machine|dryer|dishwasher/i, Tt = 72e5;
function Et(e, t) {
	let n = (e) => e.charAt(0).toLowerCase() + e.slice(1);
	if (!t) return Ct.test(e) ? `the ${n(e)}` : null;
	let r = St.find(([t]) => t.test(e));
	return r ? `${r[1]}${n(e)}` : null;
}
function Dt(e) {
	if (!e || [
		"off",
		"unavailable",
		"unknown"
	].includes(e.state)) return !1;
	let t = e.attributes.hvac_action;
	return t ? t === "heating" || t === "preheating" : [
		"heat",
		"heat_cool",
		"auto"
	].includes(e.state);
}
function Ot(e, t) {
	let n = st(e), r = k(e), i = (t) => e.states[t], a = [], o = /* @__PURE__ */ new Set(), s = t.climats.filter((e) => e.domaine === "climate" && Dt(i(e.id))), c = s.some((e) => !e.piece);
	for (let l of t.ouvrants) {
		if (i(l.id)?.state !== "on" || !c && !s.some((e) => e.piece && e.piece === l.piece)) continue;
		let u = L(e, l.id, t.noms), d = Et(u, n);
		a.push({
			cle: `ouvrant:${l.id}`,
			niveau: 2,
			icone: "mdi:radiator",
			conseil: !0,
			securite: !0,
			titre: d ? r.fermer(d) : `${r.fermerSans} : ${u}`,
			detail: r.chauffageOuvert,
			entite: l.id
		}), o.add(l.id);
	}
	for (let o of t.pieces.filter((e) => !e.exterieur)) {
		let t = (e) => o.entites.filter((t) => t.role === "mesure" && t.classe === e).map((e) => [e.id, Number.parseFloat(i(e.id)?.state ?? "")]).filter(([, e]) => !Number.isNaN(e)).sort((e, t) => t[1] - e[1])[0], s = Et(o.name, n), c = s ? r.aerer(s) : `${r.aererSans} : ${o.name}`, l = t("carbon_dioxide");
		if (l && l[1] >= 1e3) {
			a.push({
				cle: `air:${o.area_id}`,
				niveau: l[1] >= 1500 ? 2 : 1,
				icone: "mdi:molecule-co2",
				conseil: !0,
				titre: c,
				detail: r.co2(A(e, l[1], 0)),
				entite: l[0]
			});
			continue;
		}
		let u = t("humidity");
		u && u[1] >= 80 && a.push({
			cle: `air:${o.area_id}`,
			niveau: 1,
			icone: "mdi:water-percent",
			conseil: !0,
			titre: c,
			detail: r.humidite(A(e, u[1], 0)),
			entite: u[0]
		});
	}
	let l = z(e, t), u = e.states["sun.sun"]?.state === "above_horizon", d = (/* @__PURE__ */ new Date()).getHours(), f = !1;
	for (let o of t.pieces.filter((e) => !e.exterieur && !e.annexe)) {
		let s = R(e, o.temperatures);
		if (l === null || s === null) continue;
		let c = Pt(e, t), p = Mt(e, o.temperatures), m = o.entites.filter((e) => e.domaine === "cover" && ![
			"garage",
			"gate",
			"door"
		].includes(e.classe ?? "") && i(e.id)?.state === "open"), h = Et(o.name, n);
		u && c >= 25 && p >= 24 && m.length ? a.push({
			cle: `volets:${o.area_id}`,
			niveau: 1,
			icone: "mdi:weather-sunny-alert",
			conseil: !0,
			titre: h ? r.fermerVolets(h) : `${r.fermerVoletsSans} : ${o.name}`,
			detail: r.chaleur(j(e, l), j(e, s)),
			entite: m[0].id
		}) : !f && p >= 24 && c <= p - 2 && (d >= 18 || d < 10) && !t.ouvrants.some((e) => e.piece === o.area_id && i(e.id)?.state === "on") && (f = !0, a.push({
			cle: "fraicheur",
			niveau: 1,
			icone: "mdi:weather-windy",
			conseil: !0,
			titre: r.ouvrirFrais,
			detail: r.fraisDehors(j(e, l), j(e, s))
		}));
	}
	let p = Date.now();
	for (let o of t.gardees.filter((e) => e.domaine === "binary_sensor" && e.classe === "running")) {
		let s = i(o.id), c = L(e, o.id, t.noms), l = o.appareil ? e.devices[o.appareil] : void 0, u = l?.name_by_user || l?.name || c;
		if (s?.state !== "off" || !s.last_changed || !wt.test(`${c} ${u}`)) continue;
		let d = p - new Date(s.last_changed).getTime();
		if (d < 0 || d > Tt) continue;
		let f = Et(u, n);
		a.push({
			cle: `machine:${o.id}`,
			niveau: 1,
			icone: "mdi:washing-machine",
			conseil: !0,
			titre: f ? r.machineFinie(N(f)) : `${r.machineFinieSans} : ${u}`,
			detail: r.depuis(Math.max(1, Math.round(d / 6e4))),
			entite: o.id
		});
	}
	return {
		points: a,
		remplaces: o
	};
}
// src/moteur/valeurs.ts
function kt(e, t) {
	let n = t ? e?.states?.[t]?.attributes : void 0;
	return n?.unit_of_measurement ?? n?.temperature_unit ?? e?.config?.unit_system?.temperature;
}
var At = (e, t, n) => kt(e, n) === "°F" ? (t - 32) * 5 / 9 : t, jt = (e, t, n) => kt(e, n) === "°F" ? t * 9 / 5 + 32 : t;
function Mt(e, t) {
	for (let n of t ?? []) {
		let t = Number.parseFloat(e.states[n]?.state ?? "");
		if (!Number.isNaN(t)) return At(e, t, n);
	}
	return null;
}
function R(e, t) {
	for (let n of t ?? []) {
		let t = Number.parseFloat(e.states[n]?.state ?? "");
		if (!Number.isNaN(t)) return t;
	}
	return null;
}
function Nt(e, t) {
	let n = t.temperaturesInterieures.map((t) => R(e, t)).filter((e) => e !== null);
	return n.length ? n.reduce((e, t) => e + t, 0) / n.length : null;
}
function Pt(e, t) {
	let n = Mt(e, t.temperaturesExterieures);
	if (n !== null) return n;
	let r = z(e, t);
	return r === null ? null : At(e, r, t.meteo ?? void 0);
}
function z(e, t) {
	let n = R(e, t.temperaturesExterieures);
	if (n !== null) return n;
	let r = t.meteo ? e.states[t.meteo] : void 0;
	return P(r) && typeof r.attributes.temperature == "number" ? r.attributes.temperature : null;
}
function Ft(e, t) {
	let n = xt()?.reseau ?? [];
	if (n.length) return n;
	let r = t.puissanceReseau ? e.entities[t.puissanceReseau]?.device_id : null, i = t.energie.filter((e) => e.classe === "energy");
	if (r) {
		let e = i.filter((e) => e.appareil === r);
		if (e.length) return e.map((e) => e.id);
	}
	let a = i.find((e) => !e.piece && /maison|home|total|linky|compteur|index|r(é|e)seau|grid/i.test(e.etat.attributes.friendly_name ?? ""));
	return a ? [a.id] : [];
}
function It(e, t) {
	let n = t.climats.filter((t) => ![
		"off",
		"unavailable",
		"unknown"
	].includes(e.states[t.id]?.state ?? "off"));
	if (!n.length) return "";
	let r = (t) => e.states[t], i = (e) => r(e)?.attributes.hvac_action === "cooling" || !r(e)?.attributes.hvac_action && r(e)?.state === "cool", a = n.filter((e) => e.domaine === "water_heater" || e.domaine === "climate" && Dt(r(e.id))).length, o = n.filter((e) => e.domaine === "climate" && i(e.id)).length, s = n.length - a - o, c = (e, t, n) => e ? `${e} ${e > 1 ? n : t}` : "", l = k(e), u = l.motsEnMarche, d = [
		c(a, u.chauffage[0], u.chauffage[1]),
		c(o, u.clim[0], u.clim[1]),
		c(s, u.appareil[0], u.appareil[1])
	].filter(Boolean), f = d.length > 1 ? `${d.slice(0, -1).join(", ")}${l.et}${d.at(-1)}` : d[0];
	return l.enMarche(f);
}
// src/donnees/ignores.ts
var Lt = "automatic_dashboard_ignores", Rt = "automatic-dashboard-ignores", zt = 2592e6, Bt = {}, Vt = !1, Ht = (e, t) => Bt[e]?.s === t;
function Ut(e) {
	let t = {};
	if (e && typeof e == "object") for (let [n, r] of Object.entries(e)) r && typeof r == "object" && typeof r.s == "string" && typeof r.t == "number" && (t[n] = r);
	Bt = t, typeof window < "u" && window.dispatchEvent(new Event(Rt));
}
function Wt() {
	try {
		Ut(JSON.parse(localStorage.getItem(Lt) ?? "{}"));
	} catch {
		Ut({});
	}
}
function Gt(e) {
	if (Vt) return;
	Vt = !0;
	let t = e.connection;
	if (!t) return Wt();
	t.subscribeMessage((e) => Ut(e.value), {
		type: "frontend/subscribe_user_data",
		key: Lt
	}).catch(Wt);
}
async function Kt(e, t, n) {
	let r = Date.now(), i = Object.fromEntries(Object.entries(Bt).filter(([, e]) => r - e.t < zt));
	for (let e of t) n ? i[e.cle] = {
		s: e.signature,
		t: r
	} : delete i[e.cle];
	Ut(i);
	try {
		await e.callWS({
			type: "frontend/set_user_data",
			key: Lt,
			value: i
		});
	} catch {
		localStorage.setItem(Lt, JSON.stringify(i));
	}
}
// src/moteur/regles.ts
var qt = /* @__PURE__ */ new Set([
	"ai_task",
	"assist_satellite",
	"automation",
	"configurator",
	"conversation",
	"device_tracker",
	"event",
	"geo_location",
	"image_processing",
	"notify",
	"persistent_notification",
	"stt",
	"tag",
	"tts",
	"wake_word",
	"zone",
	"sun",
	"person"
]), Jt = /* @__PURE__ */ new Set([
	"input_boolean",
	"input_button",
	"input_number",
	"input_select",
	"input_text",
	"input_datetime",
	"counter",
	"timer",
	"schedule",
	"script"
]), Yt = /* @__PURE__ */ new Set([
	"backup",
	"hassio",
	"systemmonitor",
	"glances",
	"uptime_kuma",
	"adguard",
	"pi_hole",
	"speedtestdotnet",
	"proxmoxve",
	"synology_dsm",
	"unifi",
	"truenas",
	"fritz",
	"netdata"
]), Xt = /* @__PURE__ */ new Set([
	"sun",
	"backup",
	"met",
	"person",
	"shopping_list",
	"google_translate",
	"radio_browser",
	"go2rtc",
	"analytics",
	"marketplace",
	"meteo_france",
	"holiday",
	"moon",
	"open_meteo",
	"mobile_app",
	"local_calendar",
	"local_todo",
	"workday",
	"season"
]), Zt = /* @__PURE__ */ new Set([
	"signal_strength",
	"timestamp",
	"date",
	"duration",
	"data_rate",
	"data_size",
	"enum"
]), Qt = /* @__PURE__ */ new Set([
	"lqi",
	"dBm",
	"dB",
	"ms",
	"B",
	"kB",
	"MB",
	"GB",
	"bit/s",
	"kbit/s",
	"Mbit/s"
]), $t = /* @__PURE__ */ new Set(/* @__PURE__ */ "tesla_fleet.teslemetry.tessie.tesla_wall_connector.renault.bmw_connected_drive.volvo.kia_uvo.hyundai_kia_connect.mbapi2020.mercedes_me.polestar.audiconnect.volkswagencarnet.volkswagen_we_connect_id.myskoda.skodaconnect.toyota.nissan_leaf.stellantis_vehicles.psa_car_controller.fordpass.smartcar.easee.wallbox.ocpp.zaptec.ohme.myenergi.goecharger.go_echarger.evcc_intg.peblar.v2c.ev_smart_charging".split(".")), en = /* @__PURE__ */ new Set([
	"carbon_dioxide",
	"pm25",
	"pm10",
	"pm1",
	"volatile_organic_compounds",
	"volatile_organic_compounds_parts",
	"aqi",
	"nitrogen_dioxide",
	"ozone",
	"carbon_monoxide"
]), tn = /arrosage|irrigation|sprinkler|piscine|pool|bassin|tondeuse|mower|portail|gate/i, nn = /* @__PURE__ */ new Set([
	"temperature",
	"humidity",
	"carbon_dioxide",
	"pm25",
	"pm10",
	"pm1",
	"volatile_organic_compounds",
	"aqi",
	"nitrogen_dioxide",
	"ozone",
	"carbon_monoxide"
]), rn = /* @__PURE__ */ new Set([
	"illuminance",
	"atmospheric_pressure",
	"pressure",
	"sound_pressure",
	"moisture",
	"distance",
	"speed",
	"wind_speed",
	"precipitation",
	"irradiance",
	"weight"
]), an = /* @__PURE__ */ new Set([
	"power",
	"apparent_power",
	"energy",
	"gas",
	"water"
]), on = /* @__PURE__ */ new Set([
	"current",
	"voltage",
	"power_factor",
	"reactive_power",
	"frequency",
	"volume_flow_rate",
	"energy_storage",
	"monetary"
]), sn = /* @__PURE__ */ new Set([
	"door",
	"window",
	"garage_door",
	"opening"
]), cn = /* @__PURE__ */ new Set([
	"moisture",
	"smoke",
	"gas",
	"carbon_monoxide",
	"safety",
	"tamper",
	"glass_break",
	"heat",
	"cold"
]), ln = /* @__PURE__ */ new Set([
	"motion",
	"occupancy",
	"presence"
]), un = /signal|rssi|lqi|qualit(é|e) du lien|link ?quality|uptime|derni(è|e)re vue|last seen|adresse ip|ip address|wi-?fi|micrologiciel|firmware/i, dn = [
	[/salle (à|a) manger|dining/i, "mdi:silverware-fork-knife"],
	[/salle de bain|bathroom|douche|sdb/i, "mdi:shower"],
	[/salon|s(é|e)jour|living|lounge/i, "mdi:sofa-outline"],
	[/cuisine|kitchen/i, "mdi:stove"],
	[/enfant|b(é|e)b(é|e)|kid|nursery/i, "mdi:teddy-bear"],
	[/chambre|bedroom/i, "mdi:bed-outline"],
	[/\bwc\b|toilette|toilet/i, "mdi:toilet"],
	[/bureau|office|study/i, "mdi:desk"],
	[/entr(é|e)e|hall\b|entrance/i, "mdi:door-open"],
	[/couloir|palier|hallway|corridor/i, "mdi:stairs"],
	[/garage/i, "mdi:garage"],
	[/jardin|terrasse|balcon|cour\b|garden|terrace|patio|ext(é|e)rieur|outside/i, "mdi:flower-outline"],
	[/buanderie|laundry/i, "mdi:washing-machine"],
	[/cave|cellier|cellar|basement/i, "mdi:stairs-down"],
	[/grenier|combles|attic/i, "mdi:home-roof"],
	[/dressing|closet/i, "mdi:hanger"]
], fn = (e) => dn.find(([t]) => t.test(e))?.[1] ?? "mdi:home-outline", pn = /jardin|terrasse|balcon|cour\b|garden|terrace|patio|ext(é|e)rieur|outside|piscine|pool/i, mn = /garage|cave|cellier|grenier|combles|abri|cellar|basement|attic|shed/i, hn = {
	masquer: ["automatic_dashboard_masquer", "automatic_dashboard_hide"],
	favori: ["automatic_dashboard_favori", "automatic_dashboard_favorite"],
	exterieur: ["automatic_dashboard_exterieur", "automatic_dashboard_outdoor"]
}, B = (e, t) => !!e?.some((e) => hn[t].includes(e));
function gn(e) {
	let t = e?.attributes ?? {};
	if (t.device_class) return t.device_class;
	let n = t.unit_of_measurement, r = String(t.friendly_name ?? "");
	if (n === "°C" || n === "°F") return "temperature";
	if (n === "W" || n === "kW") return "power";
	if (n === "kWh" || n === "Wh" || n === "MWh") return "energy";
	if (n === "VA") return "apparent_power";
	if (n === "lx") return "illuminance";
	if (n === "%" && /humid/i.test(r)) return "humidity";
	if (n === "ppm" && /co2|co₂/i.test(r)) return "carbon_dioxide";
}
function _n(e, t, n) {
	let { domaine: r, classe: i } = e;
	if (t.hidden) {
		e.ecart = "masquee";
		return;
	}
	if (n.has(e.id)) {
		e.ecart = "masquee_reglage";
		return;
	}
	if (qt.has(r)) {
		e.ecart = "domaine_technique";
		return;
	}
	if (r === "update") {
		e.role = "maintenance", e.section = "systeme";
		return;
	}
	if (i === "battery" && $t.has(e.plateforme)) {
		e.role = "mesure", e.section = "pieces", e.secondaire = r === "binary_sensor";
		return;
	}
	if ((r === "sensor" || r === "binary_sensor") && i === "battery") {
		if (e.mobile) {
			e.ecart = "pile_telephone";
			return;
		}
		e.role = "maintenance", e.section = "systeme";
		return;
	}
	if (Yt.has(e.plateforme)) {
		e.role = "systeme", e.section = "systeme";
		return;
	}
	if (e.categorie) {
		e.ecart = `categorie_${e.categorie}`;
		return;
	}
	if (r === "button" && i && [
		"identify",
		"restart",
		"update"
	].includes(i) || r === "sensor" && (i && Zt.has(i) || e.unite && Qt.has(e.unite) || un.test(e.nomPropre))) {
		e.ecart = "technique";
		return;
	}
	if (Jt.has(r) && !e.piece) {
		e.ecart = "aide_sans_piece";
		return;
	}
	let a = (t, n, r = !1) => {
		e.role = t, e.section = n, e.secondaire = r;
	};
	[
		"light",
		"switch",
		"fan",
		"vacuum",
		"lawn_mower",
		"valve",
		"siren",
		"remote",
		"input_boolean"
	].includes(r) ? a("commande", "pieces") : r === "cover" ? a("commande", i && [
		"door",
		"garage",
		"gate"
	].includes(i) ? "securite" : "pieces") : r === "scene" || r === "script" || r === "button" ? a("commande", "pieces", !0) : [
		"climate",
		"water_heater",
		"humidifier"
	].includes(r) ? a("commande", "climat") : r === "media_player" ? a("commande", "medias") : r === "lock" || r === "alarm_control_panel" ? a("commande", "securite") : r === "camera" ? a("camera", "securite") : r === "binary_sensor" ? i && sn.has(i) ? a("ouvrant", "securite") : i && cn.has(i) ? a("alerte", "securite") : i && ln.has(i) ? a("presence", "securite", !0) : a("info", "pieces", !0) : r === "sensor" ? i && nn.has(i) ? a("mesure", "climat") : i && an.has(i) ? a("energie", "energie") : i && on.has(i) ? a("energie", "energie", !0) : i && rn.has(i) ? a("mesure", "pieces", !0) : a("info", "pieces", !0) : r === "weather" ? a("meteo", "accueil") : [
		"number",
		"select",
		"text",
		"date",
		"time",
		"datetime"
	].includes(r) ? a("reglage", "pieces", !0) : a("info", "pieces", !0);
}
// src/moteur/ranger.ts
var vn = (e) => e.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim(), yn = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), bn = (e, t) => t.length >= 2 && RegExp(`(^|[^\\p{L}\\p{N}])${yn(t)}($|[^\\p{L}\\p{N}])`, "u").test(e);
function xn(e, t) {
	if (!e || !t.length) return null;
	let n = vn(e), r = null;
	for (let e of t) for (let t of [e.name, ...e.aliases ?? []]) {
		let i = vn(t ?? "");
		bn(n, i) && (!r || i.length > r.longueur) && (r = {
			id: e.area_id,
			longueur: i.length
		});
	}
	if (r) return r.id;
	for (let [n] of dn) {
		let r = RegExp(`(^|[^\\p{L}])(?:${n.source})($|[^\\p{L}])`, "iu");
		if (!r.test(e)) continue;
		let i = t.filter((e) => r.test(e.name) || (e.aliases ?? []).some((e) => r.test(e)));
		if (i.length === 1) return i[0].area_id;
	}
	return null;
}
// src/moteur/analyser.ts
var Sn = /* @__PURE__ */ new Set([
	"commande",
	"ouvrant",
	"alerte",
	"camera",
	"mesure",
	"energie"
]), Cn = [
	"meteo_france",
	"met",
	"open_meteo"
], wn = /* @__PURE__ */ new Set([
	"holiday",
	"workday",
	"demo"
]), Tn = (e) => e.ecart !== "masquee" && e.ecart !== "masquee_reglage";
function En(e, t, n, r) {
	return t <= 5 && e <= 15 ? "decouverte" : e >= 100 || e >= 60 && (r >= 250 || n >= 12) ? "complet" : "maison";
}
function Dn(e, t = {}) {
	let n = e.devices ?? {}, r = new Set(t.masquer ?? []), i = (e) => {
		let t = e ? n[e] : void 0;
		return t && (t.area_id || t.parent_device_id && n[t.parent_device_id]?.area_id) || null;
	}, a = (e) => n[e]?.parent_device_id || e, o = e.areas ?? {}, s = [];
	for (let t of Object.values(e.entities ?? {})) {
		let a = e.states[t.entity_id];
		if (!a) continue;
		let c = t.device_id ? n[t.device_id] : void 0, l = {
			id: t.entity_id,
			domaine: t.entity_id.split(".")[0],
			etat: a,
			classe: gn(a),
			unite: a.attributes.unit_of_measurement,
			piece: t.area_id || i(t.device_id),
			appareil: t.device_id || null,
			plateforme: t.platform,
			categorie: t.entity_category ?? null,
			principale: !(!t.device_id || t.name),
			service: c?.entry_type === "service",
			mobile: t.platform === "mobile_app",
			nomPropre: t.name ?? "",
			ecart: null,
			role: null,
			section: null,
			secondaire: !1
		};
		(B(t.labels, "masquer") || B(c?.labels, "masquer") || B(l.piece ? o[l.piece]?.labels : null, "masquer")) && r.add(l.id), _n(l, t, r), s.push(l);
	}
	let c = s.filter((e) => !e.ecart), l = [];
	for (let t of c) B(e.entities[t.id]?.labels, "favori") && l.push(t.id);
	for (let [e, t] of Object.entries(n)) {
		if (!B(t.labels, "favori")) continue;
		let n = c.filter((t) => t.appareil === e), r = n.find((e) => e.principale) ?? n.find((e) => e.role === "commande") ?? n[0];
		r && !l.includes(r.id) && l.push(r.id);
	}
	let u = /* @__PURE__ */ new Map();
	for (let e of c) e.appareil && (u.has(e.appareil) || u.set(e.appareil, []), u.get(e.appareil).push(e));
	let d = /* @__PURE__ */ new Set();
	for (let [e, t] of u) {
		let n = t.filter((e) => e.role !== "maintenance");
		n.length && n.every((e) => e.role === "mesure") && d.add(e);
	}
	let f = new Set(c.filter((e) => e.role === "energie" && (e.classe === "power" || e.classe === "apparent_power")).map((e) => e.appareil).filter(Boolean)), p = c.filter((e) => e.role && Sn.has(e.role) && !e.secondaire && !e.service && !Xt.has(e.plateforme) && ![
		"scene",
		"script",
		"group"
	].includes(e.domaine) && !(e.classe === "energy" && e.appareil && f.has(e.appareil))), m = /* @__PURE__ */ new Set(), h = 0;
	for (let e of p) e.appareil ? m.add(a(e.appareil)) : h++;
	let g = p.length, ee = m.size + h, te = new Set(p.map((e) => e.piece).filter(Boolean)).size, _ = Object.values(e.entities ?? {}).filter((e) => !e.hidden).length, ne = t.mode && t.mode !== "auto" ? t.mode : En(g, ee, te, _), re = Object.values(e.floors ?? {}).sort((e, t) => (e.level ?? 0) - (t.level ?? 0)), ie = new Map(re.map((e, t) => [e.floor_id, t])), v = Object.values(o).filter((e) => !B(e.labels, "masquer")).map((e, t) => {
		let n = c.filter((t) => t.piece === e.area_id && t.role !== "maintenance" && t.role !== "systeme" && t.role !== "meteo"), r = (t) => e.temperature_entity_id === t.id || e.humidity_entity_id === t.id ? 0 : t.appareil && (d.has(t.appareil) || t.principale) ? 1 : t.appareil ? 3 : 2, i = (e) => n.filter((t) => t.role === "mesure" && t.classe === e).sort((e, t) => r(e) - r(t)).map((e) => e.id);
		return {
			...e,
			ordre: t,
			icon: e.icon || fn(e.name),
			exterieur: pn.test(e.name) || B(e.labels, "exterieur"),
			annexe: mn.test(e.name),
			etage: e.floor_id && ie.has(e.floor_id) ? e.floor_id : null,
			entites: n,
			utiles: p.filter((t) => t.piece === e.area_id).length,
			temperatures: i("temperature"),
			humidites: i("humidity")
		};
	}).sort((e, t) => (ie.get(e.etage ?? "") ?? 99) - (ie.get(t.etage ?? "") ?? 99) || e.ordre - t.ordre), ae = (e) => c.filter((t) => t.role === e), oe = c.filter((e) => !e.piece && !e.service && !Xt.has(e.plateforme) && e.role !== null && [
		"commande",
		"ouvrant",
		"alerte",
		"mesure",
		"presence",
		"camera"
	].includes(e.role) && (e.principale || !e.appareil)), se = {};
	for (let e of oe) {
		let t = e.appareil ? n[e.appareil] : void 0, r = xn(t?.name_by_user, v) ?? xn(t?.name, v) ?? xn(String(e.etat.attributes.friendly_name ?? ""), v);
		r && (se[e.id] = r);
	}
	let ce = c.filter((e) => e.domaine === "weather").sort((e, t) => {
		let n = (e) => Cn.includes(e.plateforme) ? Cn.indexOf(e.plateforme) : Cn.length;
		return n(e) - n(t);
	}), le = ae("energie"), y = c.filter((e) => e.domaine === "sensor" && e.classe && en.has(e.classe)), ue = c.filter((e) => $t.has(e.plateforme) && e.role !== null && e.role !== "maintenance"), de = new Set(v.filter((e) => e.exterieur).map((e) => e.area_id)), b = c.filter((e) => e.role !== null && e.role !== "maintenance" && e.role !== "systeme" && e.role !== "meteo" && (e.piece && de.has(e.piece) || ["lawn_mower", "valve"].includes(e.domaine) || e.domaine === "cover" && ["gate", "garage"].includes(e.classe ?? "") || tn.test(`${e.nomPropre} ${e.etat.attributes.friendly_name ?? ""}`)));
	return {
		toutes: s,
		gardees: c,
		utiles: p,
		pieces: v,
		etages: re,
		mode: ne,
		compteurs: {
			U: g,
			D: ee,
			P: te,
			T: _
		},
		favorisEtiquette: l,
		reglages: t,
		air: y,
		vehicules: ue,
		exterieur: b,
		meteo: ce[0]?.id ?? null,
		meteoFrance: s.find((e) => e.plateforme === "meteo_france" && Tn(e) && (e.id.endsWith("_next_rain") || e.etat.attributes["1_hour_forecast"]))?.id ?? null,
		vigilance: c.find((e) => e.plateforme === "meteo_france" && (e.id.endsWith("_weather_alert") || [
			"Vert",
			"Jaune",
			"Orange",
			"Rouge"
		].includes(e.etat.state)))?.id ?? null,
		ferie: c.find((e) => e.domaine === "calendar" && e.plateforme === "holiday")?.id ?? null,
		lune: c.find((e) => e.plateforme === "moon")?.id ?? null,
		lumieres: c.filter((e) => e.domaine === "light" && e.piece),
		climats: c.filter((e) => [
			"climate",
			"water_heater",
			"humidifier"
		].includes(e.domaine)),
		temperaturesInterieures: v.filter((e) => !e.exterieur && !e.annexe && e.temperatures.length).map((e) => e.temperatures),
		temperaturesExterieures: v.filter((e) => e.exterieur).flatMap((e) => e.temperatures),
		energie: le.filter((e) => !e.secondaire),
		puissanceReseau: On(le),
		securite: c.filter((e) => e.role && [
			"ouvrant",
			"alerte",
			"camera"
		].includes(e.role) || e.domaine === "lock" || e.domaine === "alarm_control_panel"),
		ouvrants: ae("ouvrant"),
		alertes: ae("alerte"),
		majs: s.filter((e) => e.domaine === "update" && !e.ecart),
		piles: s.filter((e) => e.role === "maintenance" && e.classe === "battery"),
		systeme: ae("systeme"),
		aRanger: oe,
		propositions: se,
		medias: c.filter((e) => e.domaine === "media_player" && !Array.isArray(e.etat.attributes.entity_id)),
		personnes: s.filter((e) => e.domaine === "person" && Tn(e)).map((e) => e.id),
		agendas: c.filter((e) => e.domaine === "calendar" && !wn.has(e.plateforme)).map((e) => e.id),
		enMarche: [...c.filter((e) => ["vacuum", "lawn_mower"].includes(e.domaine) || e.domaine === "binary_sensor" && e.classe === "running"), ...s.filter((e) => e.domaine === "timer" && Tn(e))].map((e) => e.id),
		courses: s.find((e) => e.domaine === "todo" && e.plateforme === "shopping_list" && Tn(e))?.id ?? null,
		noms: Object.fromEntries(Object.entries(t.noms ?? {}).filter(([, e]) => typeof e == "string" && e.trim()).map(([e, t]) => [e, t.trim()]))
	};
}
function On(e) {
	let t = xt()?.puissance.find((t) => e.some((e) => e.id === t));
	if (t) return t;
	let n = e.filter((e) => e.classe === "power" || e.classe === "apparent_power");
	return (n.find((e) => e.classe === "apparent_power" || /linky|compteur|tic\b|meter|grid|r(é|e)seau|maison|home/i.test(e.etat.attributes.friendly_name ?? "")) ?? n.find((e) => !e.piece))?.id ?? null;
}
var kn = null;
function An(e, t = {}) {
	let n = [
		e.entities,
		e.devices,
		e.areas,
		e.floors,
		JSON.stringify(t)
	];
	if (kn && n.every((e, t) => e === kn.cle[t])) return kn.resultat;
	let r = Dn(e, t);
	return kn = {
		cle: n,
		resultat: r
	}, r;
}
// src/cartes/styles.ts
var V = o`
  :host{display:block;height:100%;font-family:var(--ha-font-family-body, Inter, sans-serif);container-type:inline-size}
  ha-card{height:100%;box-sizing:border-box;overflow:hidden}
  .ico{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;flex:none;
    background:var(--automatic-dashboard-fond-alt, var(--secondary-background-color));color:var(--secondary-text-color)}
  .ico.actif{background:var(--automatic-dashboard-accent-pale, rgba(2,119,189,.12));color:var(--primary-color)}
  .ico.chaud{background:rgba(233,162,59,.16);color:var(--state-light-active-color, #E9A23B)}
  .ico ha-icon{--mdc-icon-size:22px}
  .doux{color:var(--secondary-text-color)}
  .sur{font-size:11.5px;font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--secondary-text-color)}
  button{all:unset;cursor:pointer;box-sizing:border-box}
  button:focus-visible{outline:2px solid var(--primary-color);outline-offset:2px;border-radius:12px}
  .chiffre{font-variant-numeric:tabular-nums}
  .courbe{display:block;width:100%;height:34px}
  /* En attendant les données : une forme pâle qui respire, à la place de ce qui va arriver. */
  .attente{display:block;border-radius:10px;background:var(--automatic-dashboard-fond-alt, var(--secondary-background-color));
    animation:automatic-dashboard-attente 1.4s ease-in-out infinite}
  @keyframes automatic-dashboard-attente{0%,100%{opacity:1}50%{opacity:.45}}
  @media (prefers-reduced-motion: reduce){ .attente{animation:none} }
`, H = (e) => e.filter((e) => !!e), U = class extends E {
	constructor(...e) {
		super(...e), this._cache = !1, this._vide = !1, this._surIgnores = () => this.requestUpdate();
	}
	static {
		this.properties = {
			hass: { attribute: !1 },
			_config: { state: !0 }
		};
	}
	static {
		this.styles = V;
	}
	setConfig(e) {
		this._config = e ?? {};
	}
	connectedCallback() {
		super.connectedCallback(), window.addEventListener(Rt, this._surIgnores);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), window.removeEventListener(Rt, this._surIgnores);
	}
	getCardSize() {
		return 2;
	}
	get maison() {
		return An(this.hass, this._config?.reglages ?? {});
	}
	suivies(e) {
		return [];
	}
	rendu(e, t) {
		return null;
	}
	autresChangements(e) {
		return !1;
	}
	shouldUpdate(e) {
		let t = this.hass;
		if (!t || !this._config) return !1;
		for (let t of e.keys()) if (t !== "hass") return !0;
		let n = e.get("hass");
		return !n || n.themes?.darkMode !== t.themes?.darkMode || O(n) !== O(t) || n.entities !== t.entities || n.devices !== t.devices || n.areas !== t.areas || n.floors !== t.floors || this.autresChangements(n) ? !0 : this.suivies(this.maison).some((e) => n.states[e] !== t.states[e]);
	}
	render() {
		if (!this.hass || !this._config) return T;
		Gt(this.hass);
		let e = this.rendu(this.hass, this.maison);
		return this._vide = e === null, e ?? T;
	}
	updated(e) {
		super.updated(e), this.cacher(this._vide);
	}
	cacher(e) {
		this._cache !== e && (this._cache = e, this.style.display = e ? "none" : "", this.toggleAttribute("hidden", e), this.dispatchEvent(new CustomEvent("card-visibility-changed", {
			detail: { value: !e },
			bubbles: !0,
			composed: !0
		})));
	}
}, jn = class extends U {
	static {
		this.properties = { _courbe: { state: !0 } };
	}
	static {
		this.styles = [V, o`
    button.carte{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;padding:13px 15px 12px;border-radius:var(--ha-card-border-radius)}
    .valeur{font-size:25px;font-weight:650;letter-spacing:-.02em;line-height:1.1;color:var(--primary-text-color);margin-top:4px}
    .valeur small{font-size:14px;font-weight:600;color:var(--secondary-text-color);margin-left:3px}
    .detail{font-size:12.5px;line-height:1.35}
    .detail{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}
    .bas{display:block;margin:0 -15px -12px}
    .courbe{height:30px}
    .lignes{display:grid;gap:7px;margin-top:6px}
    .ligne{display:flex;align-items:center;gap:9px;font-size:14px;font-weight:550;color:var(--primary-text-color)}
    .ligne ha-icon{--mdc-icon-size:18px;color:var(--secondary-text-color)}
    .ligne .doux{font-weight:500}
    .tete{display:flex;align-items:center;justify-content:space-between}
    .tete ha-icon{--mdc-icon-size:18px;color:var(--secondary-text-color)}
    @container (max-width: 150px){ .bas{display:none} }
  `];
	}
	getGridOptions() {
		return {
			columns: 6,
			rows: 2,
			min_columns: 4,
			max_columns: 12,
			min_rows: 2,
			max_rows: 2
		};
	}
	suivies(e) {
		let t = this._config?.sorte;
		return t === "climat" ? H([...e.temperaturesInterieures.flat(), e.meteo]) : t === "energie" ? H([e.puissanceReseau]) : t === "ephemeride" ? H([
			"sun.sun",
			e.ferie,
			e.lune
		]) : t === "humidite" ? e.pieces.flatMap((e) => e.humidites) : [];
	}
	rendu(e, t) {
		let n = k(e), r = this._config?.sorte, i = (t) => t ? e.states[t] : void 0;
		if (r === "climat") {
			let r = Nt(e, t);
			if (r === null) return null;
			let i = z(e, t), a = It(e, t);
			return this.chargerCourbe("climat", t.temperaturesInterieures.map((e) => e[0]).slice(0, 8)), this.gabarit("mdi:home-thermometer-outline", n.climat, S`${A(e, r, 1)}<small>° ${n.dedans}</small>`, [i === null ? "" : `${n.dehors} ${j(e, i)}`, a].filter(Boolean).join(" · "));
		}
		if (r === "energie") {
			let r = i(t.puissanceReseau), a = Number.parseFloat(r?.state ?? "");
			return Number.isNaN(a) ? null : (this.chargerCourbe("energie", [t.puissanceReseau]), this.gabarit("mdi:lightning-bolt-outline", n.energie, S`${A(e, a, 0)}<small>${r.attributes.unit_of_measurement || "W"}</small>`, n.enCeMoment));
		}
		if (r === "humidite") {
			let n = t.pieces.filter((e) => !e.exterieur && !e.annexe && e.humidites.length).map((e) => e.humidites[0]), r = n.map((e) => Number.parseFloat(i(e)?.state ?? "")).filter((e) => !Number.isNaN(e));
			if (!r.length) return null;
			let a = r.reduce((e, t) => e + t, 0) / r.length;
			this.chargerCourbe("humidite", n.slice(0, 8));
			let o = k(e), s = a < 35 ? o.airSec : a > 65 ? o.airHumide : o.confortable;
			return this.gabarit("mdi:water-percent", o.humiditeTitre, S`${A(e, a, 0)}<small>%</small>`, s);
		}
		if (r === "a-ranger") {
			if (!t.aRanger.length) return null;
			let e = t.aRanger.slice(0, 3).map((e) => t.noms[e.id] || e.etat.attributes.friendly_name).join(", ");
			return this.gabarit("mdi:tray-arrow-down", n.aRanger, n.sansPiece(t.aRanger.length), `${e} · ${n.choisirPieces} ›`);
		}
		if (r === "ephemeride") {
			let r = i("sun.sun"), a = [];
			if (r) {
				let t = new Date(r.attributes.next_rising), i = new Date(r.attributes.next_setting), o = (i.getTime() - t.getTime()) / 6e4;
				o < 0 && (o += 1440), a.push(S`<div class="ligne"><ha-icon icon="mdi:weather-sunset-up"></ha-icon>${M(e, t)}
          <ha-icon icon="mdi:weather-sunset-down"></ha-icon>${M(e, i)}
          <span class="doux">· ${Math.floor(o / 60)} h ${String(Math.round(o % 60)).padStart(2, "0")} ${n.deJour}</span></div>`);
			}
			let o = i(t.ferie);
			if (o?.attributes.message) {
				let e = Math.round((new Date(o.attributes.start_time).getTime() - (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)) / 864e5);
				a.push(S`<div class="ligne"><ha-icon icon="mdi:calendar-star"></ha-icon>${o.state === "on" ? n.ferieAujourdhui : o.attributes.message}
          <span class="doux">· ${o.state === "on" ? o.attributes.message : n.dansJours(e)}</span></div>`);
			}
			let s = i(t.lune);
			if (P(s)) a.push(S`<div class="ligne"><ha-icon icon="mdi:moon-waxing-crescent"></ha-icon>${e.formatEntityState?.(s) || s.state}</div>`);
			else {
				let t = gt(/* @__PURE__ */ new Date(), O(e));
				a.push(S`<div class="ligne"><ha-icon icon=${t.icone}></ha-icon>${t.nom}<span class="doux">· ${t.pleine}</span></div>`);
			}
			return a.length ? S`<ha-card><button class="carte" data-entite="sun.sun" @click=${this._clic}><span class="tete"><span class="sur">${n.aujourdhui}</span>
        <ha-icon icon="mdi:white-balance-sunny"></ha-icon></span><span class="lignes">${a}</span></button></ha-card>` : null;
		}
		return null;
	}
	gabarit(e, t, n, r) {
		let i = this._courbe ?? [];
		return S`<ha-card><button class="carte" @click=${this._clic}><span class="tete"><span class="sur">${t}</span><ha-icon icon=${e}></ha-icon></span>
      <span><span class="valeur chiffre">${n}</span><span class="detail doux" ${D({ display: "block" })}>${r}</span></span>
      ${i.length ? S`<span class="bas">${et(i, 200, 30)}</span>` : this._demande && this._courbe === void 0 ? S`<span class="bas" aria-busy="true"><span class="attente" ${D({
			height: "22px",
			margin: "0 15px 8px"
		})}></span></span>` : T}
      </button></ha-card>`;
	}
	chargerCourbe(e, t) {
		let n = H(t);
		this._demande !== e && n.length && (this._demande = e, Je(this.hass, e, n).then((e) => {
			this._courbe = e;
		}));
	}
	_clic() {
		let e = this._config?.sorte;
		e && (e === "ephemeride" ? I(this, "sun.sun") : F(e === "humidite" ? "climat" : e));
	}
}, Mn = {
	light: "mdi:lightbulb-outline",
	switch: "mdi:toggle-switch-variant",
	fan: "mdi:fan",
	cover: "mdi:window-shutter",
	climate: "mdi:thermostat",
	sensor: "mdi:eye-outline",
	binary_sensor: "mdi:checkbox-blank-circle-outline",
	lock: "mdi:lock-outline",
	alarm_control_panel: "mdi:shield-home-outline",
	media_player: "mdi:speaker",
	vacuum: "mdi:robot-vacuum",
	camera: "mdi:cctv"
}, Nn = 3e5, W = [], Pn = class extends U {
	static {
		this.properties = {
			...U.properties,
			_version: { state: !0 },
			_enCours: { state: !0 }
		};
	}
	constructor() {
		super(), this._version = 0, this._enCours = null;
	}
	get ranges() {
		return W = W.filter((e) => Date.now() - e.quand < Nn), W;
	}
	static {
		this.styles = [V, o`
    ha-card{padding:6px 18px 10px}
    .groupe{font-size:11.5px;font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--secondary-text-color);padding:12px 0 4px}
    .ligne{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;min-height:54px;border-top:1px solid var(--divider-color)}
    .groupe + .ligne{border-top:0}
    .nom{font-weight:600;font-size:14.5px;color:var(--primary-text-color)}
    .nom small{display:block;font-weight:500;font-size:12.5px;color:var(--secondary-text-color);margin-top:2px}
    .choisir{display:inline-flex;align-items:center;gap:2px;font-size:14px;font-weight:650;color:var(--primary-color)}
    .choisir ha-icon{--mdc-icon-size:18px}
    .actions{display:flex;align-items:center;gap:14px}
    .proposer{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 14px 0 10px;border-radius:17px;font-size:14px;font-weight:650;
      background:color-mix(in srgb, var(--primary-color) 13%, transparent);color:var(--primary-color);transition:background-color .15s}
    .proposer:hover{background:color-mix(in srgb, var(--primary-color) 22%, transparent)}
    .proposer:disabled{opacity:.5;cursor:default}
    .proposer ha-icon{--mdc-icon-size:18px}
    .choisir.discret{font-weight:600;color:var(--secondary-text-color)}
    .indice{font-size:13.5px;font-weight:600;color:var(--secondary-text-color);padding:0 4px}
    .note{margin:6px 0 4px;padding-top:10px;border-top:1px solid var(--divider-color);font-size:13px;color:var(--secondary-text-color)}
    .range{display:flex;align-items:center;gap:10px;margin:8px 0 2px;padding:10px 12px;border-radius:12px;font-size:14px;
      background:color-mix(in srgb, var(--success-color, #2e7d32) 11%, transparent);color:var(--primary-text-color)}
    .range > ha-icon{--mdc-icon-size:20px;color:var(--success-color, #2e7d32);flex:none}
    .range span{flex:1}
    .range button{font-weight:650;color:var(--primary-color)}
    @media (max-width: 520px){
      .ligne{grid-template-columns:auto 1fr;padding:8px 0}
      .actions{grid-column:2;justify-content:flex-start;flex-wrap:wrap}
    }
    @media (prefers-reduced-motion: reduce){.proposer{transition:none}}
  `];
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: "auto"
		};
	}
	rendu(e, t) {
		let n = this.ranges;
		if (!t.aRanger.length && !n.length) return null;
		let r = k(e), i = !!e.user?.is_admin, a = /* @__PURE__ */ new Map();
		for (let e of t.aRanger) a.has(e.plateforme) || a.set(e.plateforme, []), a.get(e.plateforme).push(e);
		let o = (t) => Object.values(e.entities).filter((e) => e.device_id === t && !e.hidden).length, s = [], c = 0;
		for (let [n, l] of a) {
			let a = mt(e, n);
			s.push(S`<div class="groupe">${a}</div>`);
			for (let n of l) {
				let a = n.appareil ? e.devices[n.appareil] : void 0, l = t.noms[n.id] || a?.name_by_user || a?.name || n.etat.attributes.friendly_name, u = a ? o(n.appareil) : 1, d = a ? r.nbEntites(u) : r.sansAppareil, f = t.pieces.find((e) => e.area_id === t.propositions[n.id]);
				f && !i && c++, s.push(S`<div class="ligne"><span class="ico"><ha-icon icon=${Mn[n.domaine] || "mdi:devices"}></ha-icon></span>
          <span class="nom">${l}<small>${d}</small></span>
          <span class="actions">
            ${f && !i ? S`<span class="indice">${f.name} ?</span>` : T}
            ${f && i ? S`<button class="proposer" ?disabled=${this._enCours === n.id} @click=${() => this.ranger(n, String(l), f.area_id)}
                  title=${r.rangerDans(f.name)}><ha-icon icon=${f.icon}></ha-icon>${f.name} ?</button>` : T}
            <button class=${f && i ? "choisir discret" : "choisir"} @click=${() => this.choisir(n)}>
              ${f && i ? r.autreChoix : r.choisir}<ha-icon icon="mdi:chevron-right"></ha-icon></button>
          </span></div>`);
			}
		}
		return S`<ha-card>${n.map((t) => {
			let n = e.areas[t.piece]?.name ?? t.piece;
			return S`<div class="range" role="status"><ha-icon icon="mdi:check-circle"></ha-icon>
        <span>${r.rangeDans(t.nom, n)}</span>
        <button @click=${() => this.annuler(t)}>${r.annuler}</button></div>`;
		})}${s}${c ? S`<p class="note">${r.noteAdmin}</p>` : T}</ha-card>`;
	}
	async ranger(e, t, n) {
		this._enCours = e.id;
		try {
			W = [...W, {
				id: e.id,
				appareil: e.appareil,
				nom: t,
				piece: n,
				quand: Date.now()
			}], await this.changerPiece(e.id, e.appareil, n).catch((t) => {
				throw W = W.filter((t) => t.id !== e.id), t;
			}), this._version++;
		} finally {
			this._enCours = null;
		}
	}
	async annuler(e) {
		W = W.filter((t) => t !== e), this._version++, await this.changerPiece(e.id, e.appareil, null);
	}
	changerPiece(e, t, n) {
		return t ? this.hass.callWS({
			type: "config/device_registry/update",
			device_id: t,
			area_id: n
		}) : this.hass.callWS({
			type: "config/entity_registry/update",
			entity_id: e,
			area_id: n
		});
	}
	choisir(e) {
		e.appareil && this.hass?.user?.is_admin ? F(`/config/devices/device/${e.appareil}`) : I(this, e.id);
	}
}, Fn = 864e5;
function In(e = /* @__PURE__ */ new Date()) {
	let t = new Date(e);
	t.setHours(0, 0, 0, 0), t.setDate(t.getDate() - (t.getDay() + 6) % 7);
	let n = new Date(t);
	n.setDate(n.getDate() - 7);
	let r = new Date(t);
	return r.setDate(r.getDate() - 14), {
		debut: n,
		fin: t,
		avant: r
	};
}
var Ln = (e) => typeof e == "string" ? Date.parse(e) : e > 0xe8d4a51000 ? e : e * 1e3;
function Rn(e = /* @__PURE__ */ new Date()) {
	let t = new Date(e.getFullYear(), e.getMonth(), 1);
	return {
		debut: new Date(e.getFullYear(), e.getMonth() - 1, 1),
		fin: t,
		avant: new Date(e.getFullYear(), e.getMonth() - 2, 1)
	};
}
var zn = (e, t = /* @__PURE__ */ new Date()) => e === "mois" ? Rn(t) : In(t), Bn = (e, t) => Math.round((t.getTime() - e.getTime()) / Fn);
function Vn(e, t, n) {
	let r = Array.from({ length: n }, () => null);
	for (let i of Object.values(e ?? {})) for (let e of i) {
		if (e.change === null || e.change === void 0) continue;
		let i = Math.round((Ln(e.start) - t.getTime()) / Fn);
		i >= 0 && i < n && (r[i] = (r[i] ?? 0) + e.change);
	}
	return r;
}
function Hn(e) {
	let t = Object.values(e ?? {}).flat(), n = t.map((e) => e.mean).filter((e) => typeof e == "number");
	if (!n.length) return null;
	let r = t.map((e) => e.min ?? e.mean).filter((e) => typeof e == "number"), i = t.map((e) => e.max ?? e.mean).filter((e) => typeof e == "number");
	return {
		moyenne: n.reduce((e, t) => e + t, 0) / n.length,
		min: Math.min(...r),
		max: Math.max(...i)
	};
}
function Un(e) {
	return Object.entries(e ?? {}).map(([e, t]) => [e, t.slice(1).filter((e, n) => e.s === "on" && t[n].s !== "on").length]).filter(([, e]) => e > 0).sort((e, t) => t[1] - e[1]);
}
var Wn = (e, t) => Ft(e, t).length > 0 || t.temperaturesInterieures.length > 0 || t.ouvrants.length > 0, Gn = /* @__PURE__ */ new Map();
function Kn(e, t, n = /* @__PURE__ */ new Date(), r = "semaine") {
	let { debut: i, fin: a, avant: o } = zn(r, n), s = xt()?.couts ?? [], c = Ft(e, t), l = t.temperaturesInterieures.map((e) => e[0]).filter(Boolean), u = t.temperaturesExterieures.slice(0, 1), d = t.ouvrants.slice(0, 40).map((e) => e.id), f = [
		r,
		i.getTime(),
		c,
		s,
		l,
		u,
		d
	].join("|"), p = Gn.get(f);
	if (p && Date.now() - p.quand < 36e5) return p.promesse;
	let m = (t, n, r) => t.length ? e.callWS({
		type: "recorder/statistics_during_period",
		start_time: n.toISOString(),
		end_time: a.toISOString(),
		statistic_ids: t,
		period: "day",
		types: r
	}).catch(() => ({})) : Promise.resolve({}), h = Promise.all([
		m(c, o, ["change"]),
		m(s, o, ["change"]),
		m(l, i, [
			"mean",
			"min",
			"max"
		]),
		m(u, i, [
			"mean",
			"min",
			"max"
		]),
		d.length ? e.callWS({
			type: "history/history_during_period",
			start_time: i.toISOString(),
			end_time: a.toISOString(),
			entity_ids: d,
			minimal_response: !0,
			no_attributes: !0,
			significant_changes_only: !1
		}).catch(() => null) : Promise.resolve(null)
	]).then(([e, t, n, s, c]) => {
		let l = Bn(o, i), u = Bn(i, a), d = (e) => e.some((e) => e !== null) ? e.reduce((e, t) => e + (t ?? 0), 0) : null, f = Vn(e, o, l + u), p = Vn(t, o, l + u), m = d(f.slice(l)), h = c ? Un(c) : [];
		return {
			periode: r,
			debut: i,
			fin: a,
			energie: m === null ? null : {
				jours: f.slice(l),
				total: m,
				precedent: d(f.slice(0, l)),
				cout: d(p.slice(l)),
				coutPrecedent: d(p.slice(0, l))
			},
			dedans: Hn(n),
			dehors: Hn(s),
			ouvertures: c ? {
				total: h.reduce((e, [, t]) => e + t, 0),
				parEntite: h
			} : null
		};
	});
	return Gn.set(f, {
		quand: Date.now(),
		promesse: h
	}), h;
}
// src/cartes/bilan.ts
var qn = class extends U {
	static {
		this.properties = {
			_bilan: { state: !0 },
			_periode: { state: !0 }
		};
	}
	constructor() {
		super(), this._periode = localStorage.getItem("automatic_dashboard_bilan") === "mois" ? "mois" : "semaine";
	}
	changerPeriode(e) {
		this._periode = e, localStorage.setItem("automatic_dashboard_bilan", e);
	}
	static {
		this.styles = [V, o`
    ha-card{padding:16px 20px 16px;display:grid;gap:18px 28px;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);
      grid-template-areas:"tete tete" "energie temperatures" "ouvertures ouvertures"}
    .tete{grid-area:tete;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
    .periode{font-size:15px;font-weight:650;color:var(--primary-text-color)}
    .segments{display:inline-flex;padding:3px;border-radius:12px;background:var(--secondary-background-color);gap:2px}
    .segments button{padding:6px 13px;border-radius:9px;font-size:13px;font-weight:600;color:var(--secondary-text-color)}
    .segments button.choisi{background:var(--card-background-color, #fff);color:var(--primary-text-color);box-shadow:0 1px 3px rgba(0,0,0,.12)}
    .cout{font-size:20px;font-weight:650;color:var(--secondary-text-color)}
    .energie{grid-area:energie}
    .temperatures{grid-area:temperatures;display:grid;gap:16px;align-content:start}
    .ouvertures{grid-area:ouvertures;padding-top:16px;border-top:1px solid var(--divider-color)}
    .grand{display:flex;align-items:baseline;flex-wrap:wrap;gap:6px 10px;margin-top:6px}
    .valeur{font-size:32px;font-weight:680;letter-spacing:-.025em;line-height:1;color:var(--primary-text-color)}
    .valeur small{font-size:15px;font-weight:600;color:var(--secondary-text-color);margin-left:3px;letter-spacing:0}
    .ecart{font-size:12.5px;font-weight:650;padding:3px 9px;border-radius:11px;background:var(--automatic-dashboard-fond-alt, var(--secondary-background-color))}
    .ecart.baisse{background:color-mix(in srgb, var(--success-color, #2e7d32) 14%, transparent);color:var(--success-color, #2e7d32)}
    .ecart.hausse{background:rgba(233,162,59,.16);color:var(--warning-color)}
    .barres{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:clamp(2px,1vw,8px);align-items:end;height:92px;margin-top:16px}
    .barre{display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end}
    .barre span{display:block;width:100%;max-width:34px;border-radius:7px 7px 3px 3px;min-height:3px;
      background:color-mix(in srgb, var(--primary-color) 32%, transparent)}
    .barre.haut span{background:var(--primary-color)}
    .barre small{font-size:11.5px;font-weight:600;color:var(--secondary-text-color);text-transform:uppercase}
    .ligne{display:grid;grid-template-columns:auto 1fr;gap:2px 12px;align-items:center}
    .ligne .nom{font-size:13px;font-weight:600;color:var(--secondary-text-color)}
    .ligne .moy{grid-row:span 2;font-size:26px;font-weight:680;letter-spacing:-.02em;color:var(--primary-text-color);min-width:76px}
    .plage{position:relative;height:8px;border-radius:4px;background:var(--automatic-dashboard-fond-alt, var(--secondary-background-color))}
    .plage span{position:absolute;top:0;bottom:0;border-radius:4px;background:linear-gradient(90deg, #4FA3D9, #E9A23B)}
    .bornes{display:flex;justify-content:space-between;font-size:12px;color:var(--secondary-text-color)}
    .ouvertures .grand{margin:4px 0 10px}
    .ouvertures .valeur{font-size:24px}
    .liste{display:flex;flex-wrap:wrap;gap:8px}
    .liste button{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 12px;border-radius:17px;font-size:13.5px;
      background:var(--automatic-dashboard-fond-alt, var(--secondary-background-color));color:var(--primary-text-color)}
    .liste b{font-variant-numeric:tabular-nums;color:var(--primary-color)}
    .vide{font-size:13.5px;color:var(--secondary-text-color);margin-top:8px}
    .partiel{margin:10px 0 0;font-size:13px;line-height:1.4;color:var(--secondary-text-color)}
    .barre.sans span{background:transparent;border:1px dashed var(--divider-color);min-height:14px;box-sizing:border-box}
    .attente.e{height:150px}
    .attente.t{height:120px}
    @container (max-width: 560px){
      ha-card{grid-template-columns:1fr;grid-template-areas:"tete" "energie" "temperatures" "ouvertures"}
    }
  `];
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: "auto"
		};
	}
	rendu(e, t) {
		if (this._demande !== this._periode) {
			this._demande = this._periode;
			let n = this._periode;
			Kn(e, t, /* @__PURE__ */ new Date(), n).then((e) => {
				e.periode === this._periode && (this._bilan = e);
			});
		}
		let n = this._bilan?.periode === this._periode ? this._bilan : void 0, r = this.tete(e, n);
		return n ? !n.energie && !n.dedans && !n.ouvertures?.total ? S`<ha-card>${r}<p class="vide" ${D({ "grid-column": "1/-1" })}>${k(e).bilanVide}</p></ha-card>` : S`<ha-card>${r}${this.energie(e, n)}${this.temperatures(e, n)}${this.ouvertures(e, t, n)}</ha-card>` : S`<ha-card>${r}<span class="attente e"></span><span class="attente t"></span></ha-card>`;
	}
	tete(e, t) {
		let n = k(e), r = O(e), i = "";
		if (t) {
			let e = /* @__PURE__ */ new Date(t.fin.getTime() - 432e5);
			i = t.periode === "mois" ? N(new Intl.DateTimeFormat(r, {
				month: "long",
				year: "numeric"
			}).format(t.debut)) : n.bilanPhrase(new Intl.DateTimeFormat(r, {
				weekday: "long",
				day: "numeric"
			}).format(t.debut), new Intl.DateTimeFormat(r, {
				weekday: "long",
				day: "numeric",
				month: "long"
			}).format(e));
		}
		return S`<div class="tete"><span class="periode">${i}</span>
      <div class="segments" role="radiogroup" aria-label=${n.bilan}>
        ${["semaine", "mois"].map((e) => S`<button role="radio" aria-checked=${this._periode === e ? "true" : "false"}
          class=${this._periode === e ? "choisi" : ""} @click=${() => this.changerPeriode(e)}>${e === "mois" ? n.mois : n.semaine}</button>`)}
      </div></div>`;
	}
	energie(e, t) {
		let n = k(e);
		if (!t.energie) return S`<div class="energie"><div class="sur">${n.energie}</div><p class="vide">${n.bilanSansEnergie}</p></div>`;
		let { jours: r, total: i, precedent: a, cout: o } = t.energie, s = Math.max(...r.map((e) => e ?? 0), .001), c = new Intl.DateTimeFormat(O(e), { weekday: "narrow" }), l = a ? Math.round((i - a) / a * 100) : null, u = e.config.currency || "EUR", d = o === null ? null : new Intl.NumberFormat(O(e), {
			style: "currency",
			currency: u
		}).format(o), f = (e, n) => t.periode === "mois" ? n % 7 == 0 ? String(e.getDate()) : "" : c.format(e);
		return S`<div class="energie">
      <div class="sur">${n.energie}</div>
      <div class="grand"><span class="valeur chiffre">${A(e, i, +(i < 100))}<small>kWh</small></span>
        ${d ? S`<span class="cout chiffre">${d}</span>` : T}
        ${l !== null && l !== 0 ? S`<span class=${`ecart ${l < 0 ? "baisse" : "hausse"}`}>${n.bilanEcart(`${l > 0 ? "+" : "−"}${Math.abs(l)} %`)}</span>` : T}</div>
      ${r.some((e) => e === null) ? S`<p class="partiel">${t.periode === "mois" ? n.bilanPartielMois(r.filter((e) => e !== null).length) : n.bilanPartiel(r.filter((e) => e !== null).length)}</p>` : T}
      <div class="barres" role="img" aria-label=${n.bilanBarres}>
        ${r.map((r, i) => {
			let a = new Date(t.debut.getFullYear(), t.debut.getMonth(), t.debut.getDate() + i, 12);
			return S`<div class=${`barre${r === null ? " sans" : r === s ? " haut" : ""}`} title=${r === null ? n.bilanSansDonnee : `${A(e, r, 1)} kWh`}>
            <span ${D({ height: `${r === null ? 0 : Math.max(3, r / s * 100)}%` })}></span><small>${f(a, i)}</small></div>`;
		})}
      </div></div>`;
	}
	temperatures(e, t) {
		let n = k(e), r = [[N(n.dedans), t.dedans], [n.dehors, t.dehors]].filter((e) => !!e[1]);
		if (!r.length) return S`<div class="temperatures"><div class="sur">${n.temperatures}</div><p class="vide">${n.bilanSansTemperature}</p></div>`;
		let i = Math.min(...r.map(([, e]) => e.min)) - 1, a = Math.max(...r.map(([, e]) => e.max)) + 1, o = (e) => (e - i) / (a - i) * 100;
		return S`<div class="temperatures"><div class="sur">${n.temperatures}</div>
      ${r.map(([t, r]) => S`<div class="ligne">
        <span class="moy chiffre">${j(e, r.moyenne)}</span><span class="nom">${t} · ${n.moyenne}</span>
        <div><div class="plage"><span ${D({
			left: `${o(r.min)}%`,
			right: `${100 - o(r.max)}%`
		})}></span></div>
          <div class="bornes chiffre"><span>${j(e, r.min)}</span><span>${j(e, r.max)}</span></div></div>
      </div>`)}</div>`;
	}
	ouvertures(e, t, n) {
		let r = k(e);
		if (!n.ouvertures || !t.ouvrants.length) return T;
		let { total: i, parEntite: a } = n.ouvertures;
		return S`<div class="ouvertures"><div class="sur">${r.ouvertures}</div>
      <div class="grand"><span class="valeur chiffre">${i}<small>${r.bilanFois(i)}</small></span></div>
      ${a.length ? S`<div class="liste">${a.slice(0, 4).map(([n, r]) => S`<button @click=${() => I(this, n)}>
            ${L(e, n, t.noms)}<b>${r}</b></button>`)}</div>` : S`<p class="vide">${k(e).rienOuvert}</p>`}</div>`;
	}
}, Jn = 14, Yn = 28, Xn = 19, Zn = 22, Qn = class extends U {
	static {
		this.styles = [V, o`
    ha-card{padding:8px 18px}
    .ligne{display:grid;grid-template-columns:minmax(90px,1.1fr) 62px minmax(90px,2.4fr) 48px 22px;align-items:center;gap:12px;min-height:44px;
      border-top:1px solid var(--divider-color);cursor:pointer}
    .ligne:first-child{border-top:0}
    .nom{font-weight:600;font-size:14.5px;color:var(--primary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .temp{font-size:16px;font-weight:650;text-align:right;color:var(--primary-text-color)}
    .echelle{position:relative;height:8px;border-radius:999px;background:var(--automatic-dashboard-fond-alt, var(--secondary-background-color))}
    .zone{position:absolute;top:0;bottom:0;border-radius:999px;background:var(--automatic-dashboard-vert-pale, color-mix(in srgb, var(--success-color, #1E6B47) 12%, transparent));box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--automatic-dashboard-vert, var(--success-color, #1E6B47)) 30%, transparent)}
    .point{position:absolute;top:50%;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;border:2px solid var(--ha-card-background);background:var(--primary-color)}
    .point.froid{background:var(--state-climate-cool-color)} .point.chaud{background:var(--state-climate-heat-color)}
    .hum{font-size:12.5px;text-align:right}
    .etat ha-icon{--mdc-icon-size:18px}
    .chauffe{color:var(--state-climate-heat-color)} .refroidit{color:var(--state-climate-cool-color)}
    .graduations{display:grid;grid-template-columns:minmax(90px,1.1fr) 62px minmax(90px,2.4fr) 48px 22px;gap:12px;font-size:11px;color:var(--secondary-text-color);padding:2px 0 6px}
    .graduations .g{display:flex;justify-content:space-between}
    @container (max-width: 520px){
      .ligne,.graduations{grid-template-columns:minmax(70px,1fr) 52px minmax(70px,1.6fr) 22px}
      .hum{display:none}
    }
  `];
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: "auto"
		};
	}
	suivies(e) {
		return e.pieces.flatMap((e) => [
			...e.temperatures,
			...e.humidites,
			...e.entites.filter((e) => e.domaine === "climate").map((e) => e.id)
		]);
	}
	rendu(e, t) {
		let n = (t) => e.states[t]?.state ?? "", r = t.pieces.filter((e) => !e.exterieur && !e.annexe && e.temperatures.length).map((t) => {
			let r = R(e, t.temperatures), i = R(e, t.humidites), a = t.entites.some((e) => e.domaine === "climate" && [
				"heat",
				"heat_cool",
				"auto"
			].includes(n(e.id))), o = t.entites.some((e) => e.domaine === "climate" && n(e.id) === "cool"), s = Mt(e, t.temperatures);
			return {
				p: t,
				temp: r,
				c: s,
				hum: i,
				chauffe: a,
				froid: o,
				ecart: s === null ? -1 : s < Xn ? Xn - s : s > Zn ? s - Zn : 0
			};
		}).filter((e) => e.c !== null);
		if (r.length < 2) return null;
		r.sort((e, t) => t.ecart - e.ecart);
		let i = (e) => `${(Math.max(Jn, Math.min(Yn, e)) - Jn) / 14 * 100}%`;
		return S`<ha-card>${r.map((t) => S`<div class="ligne" @click=${() => F(t.p.area_id)}>
      <span class="nom">${t.p.name}</span><span class="temp chiffre">${j(e, t.temp)}</span>
      <span class="echelle"><span class="zone" ${D({
			left: i(Xn),
			right: `calc(100% - ${i(Zn)})`
		})}></span>
        <span class="point ${t.c < Xn ? "froid" : t.c > Zn ? "chaud" : ""}" ${D({ left: i(t.c) })}></span></span>
      <span class="hum doux chiffre">${t.hum === null ? T : `${A(e, t.hum, 0)} %`}</span>
      <span class="etat">${t.chauffe ? S`<ha-icon class="chauffe" icon="mdi:radiator"></ha-icon>` : t.froid ? S`<ha-icon class="refroidit" icon="mdi:snowflake"></ha-icon>` : T}</span></div>`)}<div class="graduations"><span></span><span></span><span class="g">${[
			Jn,
			Xn,
			Zn,
			Yn
		].map((t) => S`<span>${Math.round(jt(e, t, r[0].p.temperatures[0]))}°</span>`)}</span><span></span><span></span></div></ha-card>`;
	}
};
// src/cartes/depart.ts
function $n(e, t) {
	let n = (t) => e.states[t.id]?.state;
	return {
		ouvertures: t.ouvrants.filter((e) => n(e) === "on"),
		lumieres: t.lumieres.filter((e) => n(e) === "on"),
		serrures: t.gardees.filter((e) => e.domaine === "lock" && ["unlocked", "open"].includes(n(e) ?? "")),
		volets: t.gardees.filter((e) => e.domaine === "cover" && n(e) === "open" && ![
			"garage",
			"gate",
			"door"
		].includes(e.classe ?? "")),
		alarmes: t.gardees.filter((e) => e.domaine === "alarm_control_panel" && n(e) === "disarmed")
	};
}
var er = class extends U {
	static {
		this.properties = {
			_enCours: { state: !0 },
			_message: { state: !0 }
		};
	}
	constructor() {
		super(), this._enCours = null, this._message = "";
	}
	static {
		this.styles = [V, o`
    ha-card{padding:8px 20px 16px}
    .groupe{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:14px;padding:14px 0;border-top:1px solid var(--divider-color)}
    .groupe:first-child{border-top:0}
    .titre{font-size:15px;font-weight:650;color:var(--primary-text-color)}
    .liste{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}
    .liste button{font-size:13px;padding:4px 10px;border-radius:12px;background:var(--secondary-background-color);color:var(--primary-text-color)}
    .agir{display:inline-flex;align-items:center;gap:6px;height:38px;padding:0 16px 0 12px;border-radius:19px;font-size:14px;font-weight:650;
      background:var(--primary-color);color:var(--text-primary-color, #fff)}
    .agir:disabled{opacity:.5;cursor:default}
    .agir ha-icon{--mdc-icon-size:18px}
    .main{font-size:13px;color:var(--secondary-text-color)}
    .pret{display:flex;align-items:center;gap:14px;padding:18px 0 10px;font-size:17px;font-weight:600;color:var(--primary-text-color)}
    .pret ha-icon{--mdc-icon-size:32px;color:var(--automatic-dashboard-vert, var(--success-color, #1E6B47))}
    .message{margin:8px 0 0;font-size:13px;color:var(--secondary-text-color)}
    @container (max-width: 480px){ .groupe{grid-template-columns:auto 1fr} .groupe > .agir,.groupe > .main{grid-column:2;justify-self:start} }
  `];
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: "auto"
		};
	}
	suivies(e) {
		return [
			...e.ouvrants,
			...e.lumieres,
			...e.gardees.filter((e) => [
				"lock",
				"cover",
				"alarm_control_panel"
			].includes(e.domaine))
		].map((e) => e.id);
	}
	rendu(e, t) {
		let n = k(e), r = $n(e, t), i = [], a = (n) => S`<div class="liste">${n.map((n) => S`<button @click=${() => I(this, n.id)}>
      ${L(e, n.id, t.noms)}</button>`)}</div>`, o = (e, t, n, r) => S`<div class="groupe">
      <span class="ico actif"><ha-icon icon=${e}></ha-icon></span><div><div class="titre">${t}</div>${a(n)}</div>${r}</div>`, s = (e, t, n, r) => S`<button class="agir"
      ?disabled=${this._enCours !== null} @click=${() => this.agir(e, r)}><ha-icon icon=${n}></ha-icon>${t}</button>`, c = (t, n, r) => () => e.callService(t, n, { entity_id: r });
		r.lumieres.length && i.push(o("mdi:lightbulb-group-outline", n.departLumieres(r.lumieres.length), r.lumieres, s("lumieres", n.toutEteindre, "mdi:lightbulb-off-outline", c("light", "turn_off", r.lumieres.map((e) => e.id))))), r.serrures.length && i.push(o("mdi:lock-open-variant-outline", n.departSerrures(r.serrures.length), r.serrures, s("serrures", n.toutVerrouiller, "mdi:lock-outline", c("lock", "lock", r.serrures.map((e) => e.id))))), r.volets.length && i.push(o("mdi:window-shutter-open", n.departVolets(r.volets.length), r.volets, s("volets", n.toutFermer, "mdi:window-shutter", c("cover", "close_cover", r.volets.map((e) => e.id)))));
		for (let t of r.alarmes) {
			let r = !!e.states[t.id]?.attributes.code_arm_required;
			i.push(o("mdi:shield-off-outline", n.departAlarme, [t], r ? S`<button class="agir" @click=${() => I(this, t.id)}><ha-icon icon="mdi:shield-lock-outline"></ha-icon>${n.armer}</button>` : s("alarme", n.armer, "mdi:shield-lock-outline", c("alarm_control_panel", "alarm_arm_away", [t.id]))));
		}
		return r.ouvertures.length && i.push(o("mdi:window-open-variant", n.departOuvertures(r.ouvertures.length), r.ouvertures, S`<span class="main">${n.aLaMain}</span>`)), S`<ha-card>
      ${i.length ? i : S`<div class="pret"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${n.departPret}</div>`}
      ${this._message ? S`<p class="message" role="status">${this._message}</p>` : T}
    </ha-card>`;
	}
	async agir(e, t) {
		this._enCours = e, this._message = "";
		try {
			await t();
		} catch (e) {
			this._message = `${k(this.hass).departEchec} ${e?.message ?? ""}`.trim();
		} finally {
			this._enCours = null;
		}
	}
}, tr = /* @__PURE__ */ new Set([
	"light",
	"switch",
	"fan",
	"input_boolean",
	"siren",
	"humidifier"
]), nr = /* @__PURE__ */ new Set([
	"on",
	"open",
	"opening",
	"playing",
	"heat",
	"cool",
	"heat_cool",
	"auto",
	"dry",
	"fan_only",
	"unlocked",
	"cleaning",
	"mowing"
]), rr = class extends U {
	constructor(...e) {
		super(...e), this._long = !1, this.appuyer = () => {
			this._long = !1, window.clearTimeout(this._appui), this._appui = window.setTimeout(() => {
				this._long = !0, I(this, String(this._config?.entity));
			}, 500);
		}, this.relacher = (e) => {
			window.clearTimeout(this._appui), !this._long && e.button === 0 && this.toucher();
		}, this.annuler = () => window.clearTimeout(this._appui);
	}
	static {
		this.styles = [V, o`
    button.tuile{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:11px;width:100%;height:100%;min-height:56px;
      padding:4px 12px 4px 9px;border-radius:var(--ha-card-border-radius, 12px);box-sizing:border-box;text-align:left;
      background:var(--ha-card-background, var(--card-background-color));border:var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color));
      box-shadow:var(--ha-card-box-shadow, none);transition:background-color .15s}
    button.tuile:hover{background:color-mix(in srgb, var(--primary-color) 5%, var(--ha-card-background, var(--card-background-color)))}
    .icone{display:grid;place-items:center;width:36px;height:36px;border-radius:var(--ha-tile-icon-border-radius, 10px);
      background:var(--automatic-dashboard-fond-alt, var(--secondary-background-color));color:var(--state-icon-color, var(--secondary-text-color))}
    .actif .icone{background:color-mix(in srgb, var(--couleur) 18%, transparent);color:var(--couleur)}
    .icone ha-state-icon{--mdc-icon-size:21px}
    .texte{min-width:0;display:flex;flex-direction:column;gap:1px}
    /* Deux lignes de nom et l'état tiennent dans la hauteur d'une tuile (56 px). */
    .nom{font-size:13.5px;font-weight:600;line-height:1.1;color:var(--primary-text-color);
      display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}
    .etat{font-size:11.5px;line-height:1.15;color:var(--secondary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    @media (prefers-reduced-motion: reduce){ button.tuile{transition:none} }
  `];
	}
	getGridOptions() {
		return {
			columns: 6,
			rows: 1,
			min_columns: 4
		};
	}
	suivies() {
		return this._config?.entity ? [String(this._config.entity)] : [];
	}
	rendu(e, t) {
		let n = String(this._config?.entity ?? ""), r = e.states[n];
		if (!r) return null;
		let i = n.split(".")[0], a = nr.has(r.state), o = i === "light" ? "var(--state-light-active-color, #E9A23B)" : r.state === "heat" ? "var(--state-climate-heat-color, #D97A2B)" : r.state === "cool" ? "var(--state-climate-cool-color, #0288D1)" : "var(--state-active-color, var(--primary-color))", s = String(this._config?.name ?? L(e, n, t.noms)), c = P(r) && i === "light" && r.state === "on" && typeof r.attributes.brightness == "number" ? `${Math.round(r.attributes.brightness / 255 * 100)} %` : e.formatEntityState?.(r) ?? r.state;
		return S`<button class=${a ? "tuile actif" : "tuile"} ${D({ "--couleur": o })} title=${s}
      @pointerdown=${this.appuyer} @pointerup=${this.relacher} @pointerleave=${this.annuler} @contextmenu=${(e) => e.preventDefault()}
      @keydown=${(e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.toucher());
		}}>
      <span class="icone"><ha-state-icon .hass=${e} .stateObj=${r}></ha-state-icon></span>
      <span class="texte"><span class="nom">${s}</span><span class="etat">${c}</span></span>
    </button>`;
	}
	toucher() {
		let e = String(this._config?.entity ?? ""), t = e.split(".")[0], n = this.hass?.callService;
		n && tr.has(t) ? n(t, "toggle", { entity_id: e }) : n && (t === "scene" || t === "script") ? n(t, "turn_on", { entity_id: e }) : n && t === "cover" ? n("cover", "toggle", { entity_id: e }) : I(this, e);
	}
}, ir = class extends U {
	static {
		this.properties = { _donnees: { state: !0 } };
	}
	static {
		this.styles = [V, o`
    ha-card{position:relative;padding:22px 26px;border-radius:28px;box-shadow:var(--automatic-dashboard-ombre, var(--ha-card-box-shadow))}
    .trame{position:absolute;inset:0 0 auto auto;width:55%;height:100%;background-size:22px 22px;pointer-events:none;
      -webkit-mask-image:linear-gradient(225deg,#000 0%,transparent 65%);mask-image:linear-gradient(225deg,#000 0%,transparent 65%)}
    .contenu{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr);gap:12px 36px;height:100%;align-items:center}
    @container (max-width: 600px){ .contenu{grid-template-columns:1fr;grid-template-rows:auto 1fr;align-items:stretch} }
    .chiffres{display:flex;flex-wrap:wrap;gap:16px 28px;align-content:center;max-width:560px}
    .v{font-size:40px;font-weight:650;letter-spacing:-.03em;line-height:1;color:var(--primary-text-color);white-space:nowrap}
    .v small{font-size:18px;font-weight:600;color:var(--secondary-text-color);margin-left:2px;letter-spacing:0}
    .l{font-size:13px;color:var(--secondary-text-color);margin-top:7px;display:flex;align-items:center;gap:6px}
    .l .trait{width:14px;height:0;border-top:2px solid var(--primary-color)}
    .l .trait.pointille{border-top:2px dashed var(--secondary-text-color)}
    @container (max-width: 460px){ .v{font-size:30px} .chiffres{gap:12px 22px} }
    .visuel{display:flex;flex-direction:column;justify-content:flex-end;height:100%;min-height:0}
    .graphe{display:block;width:100%;height:100%;min-height:70px;max-height:150px}
    .axe{display:flex;justify-content:space-between;font-size:11.5px;color:var(--secondary-text-color);margin-top:4px}
    .ligne{display:flex;align-items:center;gap:12px;font-size:17px;font-weight:650;color:var(--primary-text-color)}
    .ligne .ico{width:44px;height:44px;border-radius:14px}
    .ligne .detail{font-size:13.5px;font-weight:500;color:var(--secondary-text-color);margin-top:2px}
    .bouton{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 16px;border-radius:999px;font-size:14px;font-weight:650;
      background:var(--primary-color);color:var(--text-primary-color, #fff);cursor:pointer;white-space:nowrap}
    .bouton.second{background:transparent;color:var(--primary-color);border:1.5px solid var(--primary-color)}
    .bouton ha-icon{--mdc-icon-size:18px}
    .boutons{display:flex;flex-wrap:wrap;gap:10px}
    .liste{display:grid;gap:8px;align-content:center}
    .item{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:12px;background:var(--automatic-dashboard-fond-alt, var(--secondary-background-color));font-size:14px;font-weight:550;color:var(--primary-text-color)}
    .item ha-icon{--mdc-icon-size:18px;color:var(--warning-color)}
    .item.ok ha-icon{color:var(--automatic-dashboard-vert, var(--success-color, #1E6B47))}
    .alerte{background:var(--automatic-dashboard-alerte-pale, color-mix(in srgb, var(--error-color, #B42318) 12%, transparent))} .alerte .ico{background:var(--automatic-dashboard-alerte, var(--error-color, #B42318));color:#fff}
    .barre{height:12px;border-radius:999px;background:var(--automatic-dashboard-fond-alt, var(--secondary-background-color));overflow:hidden;margin:12px 0 6px}
    .barre span{display:block;height:100%;border-radius:999px;background:var(--automatic-dashboard-vert, var(--success-color, #1E6B47))}
    .legende{display:flex;justify-content:space-between;gap:16px;font-size:13px;color:var(--secondary-text-color)}
    .colonne{display:flex;flex-direction:column;gap:16px;justify-content:center;height:100%}
  `];
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: this._config?.page === "a-ranger" ? 3 : 4
		};
	}
	suivies(e) {
		let t = this._config?.page;
		return t === "climat" ? H([
			...e.temperaturesInterieures.flat(),
			...e.temperaturesExterieures,
			e.meteo,
			...e.pieces.flatMap((e) => e.humidites)
		]) : t === "energie" ? H([e.puissanceReseau, ...e.energie.map((e) => e.id)]) : t === "securite" ? e.securite.map((e) => e.id) : t === "systeme" ? [...e.majs.map((e) => e.id), ...e.systeme.map((e) => e.id)] : [];
	}
	rendu(e, t) {
		switch (this._config?.page) {
			case "climat": return this.climat(e, t);
			case "energie": return this.energie(e, t);
			case "securite": return this.securite(e, t);
			case "systeme": return this.systeme(e, t);
			case "a-ranger": return this.aRanger(e, t);
			default: return null;
		}
	}
	chiffre(e, t, n, r = "") {
		return S`<div><div class="v chiffre">${e}${t ? S`<small>${t}</small>` : T}</div>
      <div class="l">${r ? S`<span class="trait ${r}"></span>` : T}${n}</div></div>`;
	}
	enveloppe(e, t, n, r = "") {
		return S`<ha-card class=${r}><div class="trame" ${D({ "background-image": ht(e) })}></div>
      <div class="contenu">${t}${n}</div></ha-card>`;
	}
	charger(e, t) {
		this._charge !== e && (this._charge = e, this._donnees = void 0, t().then((t) => {
			this._charge === e && (this._donnees = t);
		}));
	}
	get enAttente() {
		return this._donnees === void 0;
	}
	courbeEnAttente() {
		return S`<div class="visuel" aria-busy="true"><span class="attente graphe"></span><div class="axe"><span class="attente" ${D({
			width: "120px",
			height: "11px"
		})}></span></div></div>`;
	}
	chiffreEnAttente(e) {
		return S`<div aria-busy="true"><div class="v"><span class="attente" ${D({
			width: "96px",
			height: "36px"
		})}></span></div><div class="l">${e}</div></div>`;
	}
	climat(e, t) {
		let n = lt(e), r = Nt(e, t), i = z(e, t);
		if (r === null && i === null) return null;
		let a = t.pieces.filter((e) => !e.exterieur && !e.annexe).map((t) => R(e, t.humidites)).filter((e) => e !== null), o = a.length ? a.reduce((e, t) => e + t, 0) / a.length : null, s = t.temperaturesInterieures.length, c = [];
		r !== null && c.push(this.chiffre(A(e, r, 1), "°", s === 1 && t.pieces.find((e) => e.temperatures.length && !e.exterieur)?.name || n.dedans, "plein")), i !== null && c.push(this.chiffre(A(e, i, 1), "°", n.dehors, t.temperaturesExterieures.length ? "pointille" : "")), o !== null && c.push(this.chiffre(A(e, o, 0), "%", n.humidite));
		let l = t.temperaturesInterieures.map((e) => e[0]).slice(0, 8), u = t.temperaturesExterieures[0];
		if (this.charger(`climat|${l.join()}|${u}`, () => Promise.all([l.length ? Je(e, "climat", l) : Promise.resolve([]), u ? Je(e, `dehors|${u}`, [u]) : Promise.resolve([])])), this.enAttente) return this.enveloppe(e, S`<div class="chiffres">${c}</div>`, this.courbeEnAttente());
		let [d = [], f = []] = this._donnees ?? [], p = tt([{
			valeurs: d,
			couleur: "var(--primary-color)"
		}, {
			valeurs: f,
			couleur: "var(--secondary-text-color)"
		}]);
		return this.enveloppe(e, S`<div class="chiffres">${c}</div>`, S`<div class="visuel">${p}${p === T ? T : S`<div class="axe"><span>${n.legende24}</span><span>${n.maintenant}</span></div>`}</div>`);
	}
	energie(e, t) {
		let n = lt(e), r = t.puissanceReseau ? e.states[t.puissanceReseau] : void 0, i = Number.parseFloat(r?.state ?? ""), a = Ft(e, t), o = t.energie.find((e) => e.classe === "power" && /solaire|solar|pv|onduleur|inverter|production/i.test(e.etat.attributes.friendly_name || "")), s = t.puissanceReseau;
		this.charger(`energie|${a.join()}`, () => Promise.all([
			s ? Je(e, "energie", [s]) : Promise.resolve([]),
			a.length ? Ze(e, a, 0) : Promise.resolve(null),
			a.length ? Ze(e, a, -1) : Promise.resolve(null)
		]));
		let [c = [], l = null, u = null] = this._donnees ?? [], d = this.enAttente, f = [];
		if (Number.isNaN(i) || f.push(this.chiffre(A(e, i, 0), r.attributes.unit_of_measurement || "W", n.maintenant)), d && a.length && f.push(this.chiffreEnAttente(n.aujourdhui)), l !== null && f.push(this.chiffre(A(e, l, l < 10 ? 2 : 1), "kWh", n.aujourdhui)), u !== null && u > 0 && f.push(this.chiffre(A(e, u, u < 10 ? 2 : 1), "kWh", n.hier)), o && t.mode === "complet") {
			let t = Number.parseFloat(e.states[o.id]?.state ?? "");
			Number.isNaN(t) || f.push(this.chiffre(A(e, t, 0), "W", n.production));
		}
		if (!f.length) return null;
		if (d && s) return this.enveloppe(e, S`<div class="chiffres">${f}</div>`, this.courbeEnAttente());
		let p = tt([{
			valeurs: c,
			couleur: "var(--primary-color)"
		}]);
		return this.enveloppe(e, S`<div class="chiffres">${f}</div>`, S`<div class="visuel">${p}${p === T ? T : S`<div class="axe"><span>${n.puissance}, ${n.legende24}</span><span>${n.maintenant}</span></div>`}</div>`);
	}
	securite(e, t) {
		let n = lt(e), r = k(e), i = (t) => e.states[t], a = (n) => L(e, n.id, t.noms), o = t.ouvrants.filter((e) => i(e.id)?.state === "on"), s = t.gardees.filter((e) => e.domaine === "lock"), c = s.filter((e) => i(e.id)?.state === "unlocked"), l = t.alertes.filter((e) => i(e.id)?.state === "on"), u = t.gardees.find((e) => e.domaine === "alarm_control_panel"), d = [];
		if (u) {
			let e = i(u.id)?.state, t = (e ? r.alarmeEtat[e] : void 0) || `${n.alarme} : ${e}`;
			d.push(S`<div class="ligne"><span class="ico ${e && e !== "disarmed" ? "actif" : ""}"><ha-icon icon="mdi:shield-home-outline"></ha-icon></span>
        <span>${t}</span><button class="bouton second" @click=${() => I(this, u.id)}>${n.gerer}</button></div>`);
		}
		let f = [];
		if (t.ouvrants.length && f.push(this.chiffre(String(o.length), "", n.ouvertures(o.length, t.ouvrants.length))), s.length && f.push(this.chiffre(String(c.length), "", n.serrures(c.length))), t.alertes.length && f.push(this.chiffre(String(l.length), "", n.detecteurs(l.length))), !f.length && !u) return null;
		d.push(S`<div class="chiffres">${f}</div>`);
		let p = [
			...l.map((e) => S`<div class="item"><ha-icon icon="mdi:water-alert"></ha-icon>${a(e)}</div>`),
			...o.slice(0, 4).map((e) => S`<div class="item"><ha-icon icon="mdi:window-open-variant"></ha-icon>${a(e)} · ${n.ouvert}</div>`),
			...c.map((e) => S`<div class="item"><ha-icon icon="mdi:lock-open-variant-outline"></ha-icon>${a(e)}</div>`)
		], m = p.length ? S`<div class="liste">${p}</div>` : S`<div class="liste"><div class="item ok"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${n.toutFerme}</div></div>`;
		return this.enveloppe(e, S`<div class="colonne">${d}</div>`, m, l.length ? "alerte" : "");
	}
	systeme(e, t) {
		let n = lt(e), r = (t) => e.states[t], i = (n) => t.systeme.find((t) => t.plateforme === "backup" && e.entities[t.id]?.translation_key === n), a = i("last_successful_automatic_backup"), o = i("last_attempted_automatic_backup"), s = i("next_scheduled_automatic_backup"), c = i("last_successful_automatic_backup_size"), l = t.majs.filter((e) => r(e.id)?.state === "on").length, u = (e) => e ? new Date(r(e.id)?.state ?? "") : void 0, d = u(a), f = u(o), p = u(s), m = (e) => !!e && !Number.isNaN(e.getTime()), h = S`<div class="ligne"><span class="ico ${l ? "" : "actif"}"><ha-icon icon=${l ? "mdi:package-up" : "mdi:check-decagram-outline"}></ha-icon></span>
      <span>${l ? n.majs(l) : n.aJour}<div class="detail">${n.version} ${e.config.version ?? ""}</div></span>
      ${l ? S`<button class="bouton" @click=${() => F("/config/updates")}>${n.voir}</button>` : T}</div>`, g;
		if (!m(d) && !m(p)) g = S`<div class="colonne"><div class="ligne"><span class="ico" ${D({
			background: "var(--automatic-dashboard-alerte-pale, color-mix(in srgb, var(--error-color, #B42318) 12%, transparent))",
			color: "var(--automatic-dashboard-alerte, var(--error-color, #B42318))"
		})}><ha-icon icon="mdi:backup-restore"></ha-icon></span>
        <span>${n.sansSauvegarde}<div class="detail">${n.sansSauvegardeDetail}</div></span></div>
        <div class="boutons"><button class="bouton" @click=${() => F("/config/backup")}>${n.regler}</button></div></div>`;
		else {
			let t = m(f) && (!m(d) || f > d), i = [this.chiffre(m(d) ? dt(e, d) : n.jamais, "", `${n.sauvegarde} ${t ? n.echouee : n.reussie}`), this.chiffre(m(p) ? dt(e, p) : n.nonPrevue, "", n.prochaine)], a = c ? Number.parseFloat(r(c.id)?.state ?? "") : NaN;
			a && !Number.isNaN(a) && i.push(this.chiffre(A(e, a >= 1024 ? a / 1024 : a, 1), a >= 1024 ? "Go" : "Mo", n.taille)), g = S`<div class="chiffres">${i}</div>`;
		}
		return this.enveloppe(e, S`<div class="colonne">${h}</div>`, g);
	}
	aRanger(e, t) {
		let n = lt(e), r = new Set(t.utiles.filter((e) => e.appareil && e.piece).map((t) => e.devices[t.appareil]?.parent_device_id || t.appareil)), i = t.utiles.filter((e) => !e.appareil && e.piece).length, a = r.size + i, o = t.aRanger.length;
		if (!o) return null;
		let s = Math.round(a / Math.max(1, a + o) * 100), c = S`<div class="colonne"><div ${D({ width: "min(100%, 360px)" })}><div class="v chiffre">${a}<small>/ ${a + o}</small></div>
      <div class="barre"><span ${D({ width: `${s}%` })}></span></div>
      <div class="legende"><span>${n.ranges(a)}</span><span>${n.aRanger(o)}</span></div></div></div>`, l = S`<div class="boutons" ${D({ "justify-content": "flex-end" })}>
      <button class="bouton" @click=${() => F("/config/devices/dashboard")}><ha-icon icon="mdi:sofa-outline"></ha-icon>${n.rangerTout}</button>
      <button class="bouton second" @click=${() => F("/config/areas/dashboard")}><ha-icon icon="mdi:plus"></ha-icon>${n.creerPiece}</button></div>`;
		return this.enveloppe(e, c, l);
	}
}, ar = "automatic_dashboard_favoris";
async function or(e) {
	try {
		let t = await e.callWS({
			type: "frontend/get_user_data",
			key: ar
		});
		return Array.isArray(t?.value) ? t.value.filter((e) => typeof e == "string") : [];
	} catch {
		return [];
	}
}
async function sr(e, t) {
	await e.callWS({
		type: "frontend/set_user_data",
		key: ar,
		value: t.length ? [...new Set(t)] : null
	});
}
// src/editeur/reglages.ts
function cr(e, t, n) {
	let r = [...e], [i] = r.splice(t, 1);
	return i === void 0 ? e : (r.splice(Math.max(0, Math.min(n, r.length)), 0, i), r);
}
// src/cartes/mes-favoris.ts
var lr = class extends U {
	static {
		this.properties = { _favoris: { state: !0 } };
	}
	constructor() {
		super(), this._demande = !1, this.terminer = () => {
			F("accueil"), window.setTimeout(() => location.reload(), 50);
		}, this._favoris = null;
	}
	static {
		this.styles = [V, o`
    ha-card{padding:16px 20px 18px;display:grid;gap:18px}
    h2{margin:0;font-size:16px;font-weight:650;color:var(--primary-text-color)}
    .aide{margin:4px 0 0;font-size:13.5px;color:var(--secondary-text-color)}
    ol{list-style:none;margin:0;padding:0;display:grid;gap:6px}
    .ligne{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;min-height:46px;padding:4px 6px 4px 10px;border-radius:12px;
      background:var(--secondary-background-color)}
    .ligne ha-state-icon{--mdc-icon-size:20px;color:var(--secondary-text-color)}
    .nom{font-size:14px;font-weight:600;color:var(--primary-text-color)}
    .nom small{display:block;font-size:12px;font-weight:500;color:var(--secondary-text-color)}
    .boutons{display:flex;gap:2px}
    .rond{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;color:var(--secondary-text-color)}
    .rond:hover{background:var(--card-background-color, #fff);color:var(--primary-text-color)}
    .rond:disabled{opacity:.3;cursor:default}
    .rond ha-icon{--mdc-icon-size:19px}
    .piece{font-size:11.5px;font-weight:650;letter-spacing:.08em;text-transform:uppercase;color:var(--secondary-text-color);margin:6px 0 2px}
    .choix{display:flex;flex-wrap:wrap;gap:6px}
    .choix button{display:inline-flex;align-items:center;gap:7px;min-height:36px;padding:0 13px 0 9px;border-radius:18px;font-size:13.5px;
      background:var(--secondary-background-color);color:var(--primary-text-color)}
    .choix button.pris{background:color-mix(in srgb, var(--primary-color) 16%, transparent);color:var(--primary-color);font-weight:600}
    .choix ha-icon{--mdc-icon-size:17px}
    .bas{display:flex;flex-wrap:wrap;gap:10px;justify-content:space-between;align-items:center;padding-top:6px;border-top:1px solid var(--divider-color)}
    .lien{font-size:13.5px;font-weight:600;color:var(--secondary-text-color)}
    .fini{display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 18px;border-radius:20px;font-size:14px;font-weight:650;
      background:var(--primary-color);color:var(--text-primary-color, #fff)}
  `];
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: "auto"
		};
	}
	rendu(e, t) {
		let n = k(e);
		if (this._demande || (this._demande = !0, or(e).then((e) => this._favoris = e)), this._favoris === null) return S`<ha-card><span class="attente" ${D({ height: "120px" })}></span></ha-card>`;
		let r = this._favoris.filter((t) => e.states[t]), i = t.gardees.filter((e) => e.role === "commande" && !e.secondaire || e.domaine === "scene" || e.domaine === "script"), a = [...t.pieces.map((e) => [e.name, i.filter((t) => t.piece === e.area_id)]), [n.sansPieceTitre, i.filter((e) => !e.piece)]].filter(([, e]) => e.length), o = (e) => t.pieces.find((n) => n.area_id === t.toutes.find((t) => t.id === e)?.piece)?.name ?? "";
		return S`<ha-card>
      <div><h2>${n.mesFavorisListe}</h2>
        <p class="aide">${r.length ? n.mesFavorisOrdre : n.mesFavorisVide}</p></div>
      ${r.length ? S`<ol>${r.map((i, a) => S`<li class="ligne">
        <ha-state-icon .hass=${e} .stateObj=${e.states[i]}></ha-state-icon>
        <span class="nom">${L(e, i, t.noms)}<small>${o(i)}</small></span>
        <span class="boutons">
          <button class="rond" ?disabled=${a === 0} title=${n.monter} aria-label=${n.monter} @click=${() => this.enregistrer(cr(r, a, a - 1))}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="rond" ?disabled=${a === r.length - 1} title=${n.descendre} aria-label=${n.descendre} @click=${() => this.enregistrer(cr(r, a, a + 1))}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="rond" title=${n.retirerFavori} aria-label=${n.retirerFavori} @click=${() => this.enregistrer(r.filter((e) => e !== i))}><ha-icon icon="mdi:close"></ha-icon></button>
        </span></li>`)}</ol>` : T}
      <div>${a.map(([n, i]) => S`<div class="piece">${n}</div><div class="choix">${i.map((n) => {
			let i = r.includes(n.id);
			return S`<button class=${i ? "pris" : ""} aria-pressed=${i ? "true" : "false"}
          @click=${() => this.enregistrer(i ? r.filter((e) => e !== n.id) : [...r, n.id])}>
          <ha-icon icon=${i ? "mdi:star" : "mdi:star-outline"}></ha-icon>${L(e, n.id, t.noms)}</button>`;
		})}</div>`)}</div>
      <div class="bas">
        ${r.length ? S`<button class="lien" @click=${() => this.enregistrer([])}>${n.favorisDuTableau}</button>` : S`<span></span>`}
        <button class="fini" @click=${this.terminer}>${n.termine}</button>
      </div>
    </ha-card>`;
	}
	async enregistrer(e) {
		this._favoris = e, await sr(this.hass, e);
	}
}, ur = {
	"Temps sec": 0,
	"Pluie faible": 1,
	"Pluie modérée": 2,
	"Pluie forte": 3
};
function dr(e) {
	if (!e || e.state === "unavailable") return null;
	let t = e.attributes["1_hour_forecast"];
	if (!t || typeof t != "object") return null;
	let n = Object.entries(t).map(([e, t]) => ({
		debut: Number.parseInt(e, 10),
		texte: String(t ?? "")
	})).filter((e) => !Number.isNaN(e.debut)).sort((e, t) => e.debut - t.debut);
	if (!n.length) return null;
	let r = n.map((e, t) => ({
		debut: e.debut,
		duree: Math.max(1, (n[t + 1]?.debut ?? 60) - e.debut),
		intensite: ur[e.texte] ?? +!!e.texte,
		texte: e.texte
	})), i = r.find((e) => e.intensite > 0), a = r[0].intensite > 0, o = a ? r.find((e) => e.intensite === 0) : void 0, s = new Date(String(e.attributes.forecast_time_ref ?? ""));
	return {
		tranches: r,
		dans: i ? i.debut : null,
		type: i ? i.texte : null,
		fin: o ? o.debut : null,
		continue: a && !o,
		reference: Number.isNaN(s.getTime()) ? null : s
	};
}
var fr = [
	"Vert",
	"Jaune",
	"Orange",
	"Rouge"
], pr = {
	"Vent violent": ["Vent violent", "Strong wind"],
	"Pluie-inondation": ["Pluie et inondation", "Rain and flooding"],
	Orages: ["Orages", "Thunderstorms"],
	Inondation: ["Crues", "River flooding"],
	"Neige-verglas": ["Neige et verglas", "Snow and ice"],
	Canicule: ["Canicule", "Heatwave"],
	"Grand-froid": ["Grand froid", "Extreme cold"],
	Avalanches: ["Avalanches", "Avalanches"],
	"Vagues-submersion": ["Vagues et submersion", "Waves and coastal flooding"]
};
function mr(e) {
	let t = fr.indexOf(e?.state);
	return !e || t < 0 ? null : {
		niveau: t,
		phenomenes: Object.entries(e.attributes).map(([e, t]) => ({
			nom: e,
			niveau: fr.indexOf(t)
		})).filter((e) => e.niveau > 0).sort((e, t) => t.niveau - e.niveau)
	};
}
var hr = (e, t) => pr[e]?.[+!t] ?? e, gr = "https://vigilance.meteofrance.fr", _r = class extends U {
	static {
		this.styles = [V, o`
    ha-card{display:flex;flex-direction:column;gap:12px;padding:14px 16px}
    button.pluie{display:block;width:100%;border-radius:12px}
    .tete{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
    .source{font-size:12px;white-space:nowrap}
    .phrase{display:flex;align-items:center;gap:8px;margin-top:6px;font-size:15px;font-weight:650;color:var(--primary-text-color)}
    .phrase ha-icon{--mdc-icon-size:20px;color:var(--primary-color)}
    .barre{display:flex;gap:3px;height:12px;margin-top:10px}
    .barre i{display:block;min-width:4px;border-radius:4px;background:color-mix(in srgb, var(--secondary-text-color) 20%, transparent)}
    .barre i.i1{background:color-mix(in srgb, var(--primary-color) 38%, transparent)}
    .barre i.i2{background:color-mix(in srgb, var(--primary-color) 68%, transparent)}
    .barre i.i3{background:var(--primary-color)}
    .axe{display:flex;justify-content:space-between;margin-top:5px;font-size:11.5px;color:var(--secondary-text-color)}
    button.vert{display:flex;align-items:center;gap:9px;font-size:13.5px;color:var(--secondary-text-color);border-radius:8px}
    .pastille{width:9px;height:9px;border-radius:50%;background:var(--automatic-dashboard-vert, var(--success-color, #1E6B47));flex:none}
    .vigilance{display:grid;grid-template-columns:auto 1fr;gap:12px;padding:13px 14px;border-radius:14px}
    .vigilance .ico{width:38px;height:38px}
    .n1{background:rgba(232,194,26,.16)} .n1 .ico{background:#E8C21A;color:#3A3000}
    .n2{background:rgba(233,140,40,.16)} .n2 .ico{background:#E98C28;color:#fff}
    .n3{background:var(--automatic-dashboard-alerte-pale, color-mix(in srgb, var(--error-color, #B42318) 12%, transparent))} .n3 .ico{background:var(--automatic-dashboard-alerte, var(--error-color, #B42318));color:#fff}
    .titre{font-size:15px;font-weight:700;color:var(--primary-text-color)}
    .phenomenes{font-size:13.5px;font-weight:600;color:var(--primary-text-color);margin-top:2px}
    .conseil{margin:6px 0 0;font-size:13px;line-height:1.4;color:var(--secondary-text-color)}
    a{display:inline-flex;align-items:center;gap:4px;margin-top:8px;font-size:13px;font-weight:650;color:var(--primary-color);text-decoration:none}
    a ha-icon{--mdc-icon-size:15px}
  `];
	}
	getGridOptions() {
		return {
			columns: 12,
			rows: "auto"
		};
	}
	suivies(e) {
		return H([e.meteoFrance, e.vigilance]);
	}
	rendu(e, t) {
		let n = k(e), r = dr(t.meteoFrance ? e.states[t.meteoFrance] : void 0), i = mr(t.vigilance ? e.states[t.vigilance] : void 0);
		if (!r && !i) return null;
		let a = st(e), o = i && i.niveau > 0 ? S`<div class="vigilance n${i.niveau}" role="alert"><span class="ico"><ha-icon icon="mdi:alert-outline"></ha-icon></span><div>
          <div class="titre">${n.vigilance(n.couleurs[i.niveau])}</div>
          <div class="phenomenes">${i.phenomenes.map((e) => hr(e.nom, a)).join(", ")}</div>
          <p class="conseil">${n.conseils[i.niveau]}</p>
          <a href=${gr} target="_blank" rel="noopener noreferrer">${n.vigilanceCarte}<ha-icon icon="mdi:open-in-new"></ha-icon></a></div></div>` : T, s = i && i.niveau === 0 ? S`<button class="vert" @click=${() => I(this, t.vigilance)}><span class="pastille"></span>${n.vigilanceVerte}</button>` : T;
		return S`<ha-card>${o}${r ? this.pluie(e, r, t.meteoFrance) : T}${s}</ha-card>`;
	}
	pluie(e, t, n) {
		let r = k(e), i = (e) => e ? r.pluieTypes[e] ?? e : "", a = t.dans === null ? r.pluieAucune : t.continue ? r.pluieContinue : t.fin === null ? r.pluieDans(i(t.type), t.dans) : r.pluieFin(t.fin);
		return S`<button class="pluie" @click=${() => I(this, n)}>
      <span class="tete"><span class="sur">${r.pluieTitre}</span>${t.reference ? S`<span class="source doux">${r.pluieSource(M(e, t.reference))}</span>` : T}</span>
      <span class="phrase"><ha-icon icon=${t.dans === null ? "mdi:umbrella-closed-outline" : "mdi:umbrella-outline"}></ha-icon>${a}</span>
      <span class="barre" aria-hidden="true">${t.tranches.map((e) => S`<i class="i${e.intensite}" ${D({ flex: `${e.duree} 1 0` })}
        title=${`${e.debut} min · ${i(e.texte)}`}></i>`)}</span>
      <span class="axe"><span>${r.maintenant}</span><span>${r.dans1h}</span></span></button>`;
	}
}, vr = 6e4, yr = [
	[/lave-vaisselle|dishwasher/i, "mdi:dishwasher"],
	[/s(è|e)che-linge|dryer/i, "mdi:tumble-dryer"],
	[/lave-linge|washing|washer/i, "mdi:washing-machine"]
], br = class extends U {
	constructor(...e) {
		super(...e), this._minute = 0;
	}
	static {
		this.styles = [V, o`
    ha-card{padding:12px 16px 8px}
    ul{list-style:none;margin:6px 0 0;padding:0}
    li{display:flex;align-items:center;gap:6px;border-top:1px solid var(--divider-color)}
    li:first-child{border-top:0}
    button.ligne{display:flex;align-items:center;gap:11px;flex:1;min-width:0;min-height:46px;padding:6px 0;border-radius:10px}
    .ligne ha-icon{--mdc-icon-size:20px;color:var(--secondary-text-color);flex:none}
    .texte{min-width:0;font-size:14px;font-weight:600;line-height:1.3;color:var(--primary-text-color)}
    .texte b{font-weight:700;color:var(--primary-color);margin-right:6px}
    .texte small{display:block;font-size:12.5px;font-weight:500;color:var(--secondary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .texte span{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    button.pause{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;flex:none;
      background:var(--automatic-dashboard-accent-pale, rgba(2,119,189,.12));color:var(--primary-color)}
    button.pause ha-icon{--mdc-icon-size:20px}
  `];
	}
	getGridOptions() {
		return {
			columns: 12,
			rows: "auto"
		};
	}
	suivies(e) {
		return [
			...e.medias.map((e) => e.id),
			...e.personnes,
			...e.agendas,
			...e.enMarche,
			...e.courses ? [e.courses] : []
		];
	}
	autresChangements() {
		return Math.floor(Date.now() / vr) !== this._minute;
	}
	rendu(e, t) {
		this._minute = Math.floor(Date.now() / vr);
		let n = [
			...this.medias(e, t),
			...this.presence(e, t),
			...this.agenda(e, t),
			...this.machines(e, t),
			...this.courses(e, t)
		].slice(0, t.mode === "complet" ? 5 : 6);
		return n.length ? S`<ha-card><span class="sur">${k(e).enCeMomentTitre}</span><ul>${n.map((t) => S`<li>
      <button class="ligne" @click=${() => this.ouvrir(t)}><ha-icon icon=${t.icone}></ha-icon>
        <span class="texte"><span>${t.avant ? S`<b>${t.avant}</b>` : T}${t.texte}</span>${t.detail ? S`<small>${t.detail}</small>` : T}</span></button>
      ${t.pause ? S`<button class="pause" title=${k(e).pauseMedia} aria-label=${k(e).pauseMedia} @click=${() => this.pause(t.pause)}>
        <ha-icon icon="mdi:pause"></ha-icon></button>` : T}</li>`)}</ul></ha-card>` : null;
	}
	medias(e, t) {
		let n = t.medias.filter((t) => e.states[t.id]?.state === "playing");
		return n.length > 2 ? [{
			icone: "mdi:play-circle-outline",
			texte: k(e).mediasEnLecture(n.length),
			entite: n[0].id
		}] : n.map((n) => {
			let r = e.states[n.id].attributes, i = [r.media_artist, r.media_title].filter(Boolean).join(" · ") || r.app_name || r.source;
			return {
				icone: "mdi:play-circle-outline",
				texte: L(e, n.id, t.noms),
				detail: i,
				entite: n.id,
				pause: n.id
			};
		});
	}
	presence(e, t) {
		let n = k(e), r = t.personnes.map((t) => e.states[t]).filter((e) => P(e) && Array.isArray(e.attributes.device_trackers) && e.attributes.device_trackers.length > 0);
		if (!r.length) return [];
		let i = (e) => t.noms[e.entity_id] || e.attributes.friendly_name || e.entity_id, a = r.filter((e) => e.state === "home"), o = r.filter((e) => e.state !== "home"), s = a.length ? a.length > 3 || t.mode === "complet" && a.length > 2 ? n.personnesALaMaison(a.length) : n.aLaMaison(a.map(i)) : n.personne, c = o.length > 2 ? void 0 : o.map((e) => n.ailleurs(i(e), e.state === "not_home" ? null : e.state)).join(" · ");
		return [{
			icone: a.length ? "mdi:home-account" : "mdi:home-export-outline",
			texte: s,
			detail: c || void 0,
			entite: (a[0] ?? r[0]).entity_id
		}];
	}
	agenda(e, t) {
		let n = k(e), r = (/* @__PURE__ */ new Date(/* @__PURE__ */ new Date())).setHours(0, 0, 0, 0), i = (e) => Math.floor((new Date(e).setHours(0, 0, 0, 0) - r) / 864e5), a = (e) => new Date(String(e ?? "").replace(" ", "T"));
		return t.agendas.map((t) => e.states[t]).filter((e) => P(e) && !!e.attributes.message && !Number.isNaN(a(e.attributes.start_time).getTime())).map((e) => ({
			e,
			debut: a(e.attributes.start_time),
			enCours: e.state === "on",
			journee: !!e.attributes.all_day
		})).filter((e) => e.enCours || i(e.debut) <= 1).sort((e, t) => e.debut.getTime() - t.debut.getTime()).slice(0, 2).map(({ e: t, debut: r, enCours: a, journee: o }) => {
			let s = i(r);
			return {
				icone: "mdi:calendar-clock",
				avant: a ? n.enCours : o ? s === 0 ? n.toutLeJour : n.demain : s === 0 ? M(e, r) : `${n.demain} ${M(e, r)}`,
				texte: String(t.attributes.message),
				chemin: "/calendar"
			};
		});
	}
	machines(e, t) {
		let n = k(e), r = [];
		for (let i of t.enMarche) {
			let a = e.states[i];
			if (!P(a)) continue;
			let o = L(e, i, t.noms), s = i.split(".")[0], c = e.formatEntityState?.(a) || a.state;
			if (s === "vacuum" && ["cleaning", "returning"].includes(a.state)) r.push({
				icone: "mdi:robot-vacuum",
				texte: o,
				detail: c,
				entite: i
			});
			else if (s === "lawn_mower" && a.state === "mowing") r.push({
				icone: "mdi:robot-mower",
				texte: o,
				detail: c,
				entite: i
			});
			else if (s === "binary_sensor" && a.state === "on") r.push({
				icone: yr.find(([e]) => e.test(o))?.[1] ?? "mdi:progress-clock",
				texte: n.enMarche(o),
				entite: i
			});
			else if (s === "timer" && a.state === "active") {
				let e = Math.max(1, Math.ceil((new Date(a.attributes.finishes_at ?? "").getTime() - Date.now()) / vr));
				Number.isNaN(e) || r.push({
					icone: "mdi:timer-outline",
					texte: n.minuteur(o, e),
					entite: i
				});
			} else s === "timer" && a.state === "paused" && r.push({
				icone: "mdi:timer-pause-outline",
				texte: n.enPause(o),
				entite: i
			});
		}
		return r;
	}
	courses(e, t) {
		let n = Number.parseInt(e.states[t.courses ?? ""]?.state ?? "", 10);
		return !t.courses || Number.isNaN(n) || n <= 0 ? [] : [{
			icone: "mdi:cart-outline",
			texte: k(e).articles(n),
			chemin: `/todo?entity_id=${t.courses}`
		}];
	}
	ouvrir(e) {
		e.chemin ? F(e.chemin) : e.entite && I(this, e.entite);
	}
	pause(e) {
		this.hass?.callService?.("media_player", "media_pause", { entity_id: e });
	}
};
// src/moteur/absence.ts
function xr(e, t) {
	if (t.securite.some((t) => t.domaine === "alarm_control_panel" && ["armed_away", "armed_vacation"].includes(e.states[t.id]?.state ?? ""))) return !0;
	let n = t.personnes.map((t) => e.states[t]).filter((e) => e && Array.isArray(e.attributes.device_trackers) && e.attributes.device_trackers.length > 0);
	return n.length > 0 && n.every((e) => e.state !== "home" && e.state !== "unknown" && e.state !== "unavailable");
}
function Sr(e, t) {
	let n = (t) => e.states[t]?.state;
	return {
		ouverts: t.ouvrants.filter((e) => n(e.id) === "on"),
		lumieres: t.lumieres.filter((e) => n(e.id) === "on"),
		serrures: t.securite.filter((e) => e.domaine === "lock" && [
			"unlocked",
			"open",
			"opening"
		].includes(n(e.id) ?? "")),
		alarmes: t.securite.filter((e) => e.domaine === "alarm_control_panel" && n(e.id) === "disarmed")
	};
}
function Cr(e, t) {
	let n = k(e), r = st(e), i = Sr(e, t), a = [];
	for (let o of i.serrures) {
		let i = L(e, o.id, t.noms), s = Et(i, r);
		a.push({
			cle: `serrure:${o.id}`,
			niveau: 2,
			icone: "mdi:lock-open-variant-outline",
			conseil: !0,
			securite: !0,
			titre: s ? n.verrouiller(s) : `${n.verrouillerSans} : ${i}`,
			detail: n.personneLa,
			entite: o.id
		});
	}
	for (let e of i.alarmes) a.push({
		cle: `alarme-desarmee:${e.id}`,
		niveau: 2,
		icone: "mdi:shield-off-outline",
		conseil: !0,
		securite: !0,
		titre: n.armer,
		detail: n.personneLa,
		entite: e.id
	});
	if (i.lumieres.length) {
		let e = [...new Set(i.lumieres.map((e) => t.pieces.find((t) => t.area_id === e.piece)?.name).filter(Boolean))];
		a.push({
			cle: "lumieres-absence",
			niveau: 1,
			icone: "mdi:lightbulb-group-off-outline",
			conseil: !0,
			securite: !0,
			titre: n.eteindre,
			detail: n.lumieresOubliees(i.lumieres.length, e.slice(0, 3).join(", ")),
			entite: i.lumieres[0].id
		});
	}
	return a;
}
// src/moteur/points.ts
function wr(e, t) {
	let n = k(e), r = (t) => e.states[t], i = [];
	for (let a of t.alertes) {
		if (r(a.id)?.state !== "on") continue;
		let o = a.classe === "moisture";
		i.push({
			cle: `alerte:${a.id}`,
			niveau: 3,
			icone: o ? "mdi:water-alert" : "mdi:smoke-detector-alert",
			titre: o ? n.fuite : n.fumee,
			detail: L(e, a.id, t.noms),
			entite: a.id,
			prevenir: o ? "fuite" : [
				"smoke",
				"gas",
				"carbon_monoxide"
			].includes(a.classe ?? "") ? "fumee" : void 0
		});
	}
	for (let a of t.gardees.filter((e) => e.domaine === "alarm_control_panel")) r(a.id)?.state === "triggered" && i.push({
		cle: `alarme:${a.id}`,
		niveau: 3,
		icone: "mdi:shield-alert",
		titre: n.alarme,
		detail: L(e, a.id, t.noms),
		entite: a.id
	});
	let a = mr(t.vigilance ? r(t.vigilance) : void 0);
	if (a && a.niveau >= 2) {
		let r = a.phenomenes.map((t) => hr(t.nom, st(e))).join(", ");
		i.push({
			cle: "vigilance",
			niveau: a.niveau === 3 ? 3 : 2,
			icone: "mdi:alert-outline",
			titre: n.vigilance(n.couleurs[a.niveau]),
			detail: r,
			entite: t.vigilance
		});
	}
	let o = t.reglages.conseils === !1 ? {
		points: [],
		remplaces: /* @__PURE__ */ new Set()
	} : Ot(e, t);
	i.push(...o.points);
	for (let a of t.ouvrants) o.remplaces.has(a.id) || r(a.id)?.state === "on" && i.push({
		cle: `ouvrant:${a.id}`,
		securite: !0,
		niveau: 2,
		icone: "mdi:window-open-variant",
		titre: L(e, a.id, t.noms),
		detail: n.ouverte,
		entite: a.id
	});
	for (let a of t.piles) {
		let o = Number.parseFloat(r(a.id)?.state ?? "");
		!Number.isNaN(o) && o <= 20 && i.push({
			cle: `pile:${a.id}`,
			niveau: o <= 10 ? 2 : 1,
			icone: "mdi:battery-alert-variant-outline",
			titre: n.pileFaible,
			detail: `${L(e, a.id, t.noms)}, ${A(e, o, 0)} %`,
			entite: a.id,
			prevenir: "pile"
		});
	}
	for (let a of t.systeme.filter((e) => e.plateforme === "uptime_kuma" && e.domaine === "sensor")) r(a.id)?.state === "down" && i.push({
		cle: `service:${a.id}`,
		niveau: 2,
		icone: "mdi:server-off",
		titre: n.serviceEnPanne,
		detail: L(e, a.id, t.noms),
		entite: a.id
	});
	let s = t.majs.filter((e) => r(e.id)?.state === "on");
	s.length && i.push({
		cle: "majs",
		niveau: 1,
		icone: "mdi:package-up",
		titre: n.majs(s.length),
		detail: n.majsDetail,
		chemin: "/config/updates"
	});
	let c = (n) => t.systeme.find((t) => t.plateforme === "backup" && e.entities[t.id]?.translation_key === n), l = c("last_successful_automatic_backup"), u = c("last_attempted_automatic_backup");
	if (l) {
		let e = new Date(r(l.id)?.state ?? ""), t = new Date((u && r(u.id)?.state) ?? "");
		!Number.isNaN(t.getTime()) && (Number.isNaN(e.getTime()) || t > e) ? i.push({
			cle: "sauvegarde",
			niveau: 2,
			icone: "mdi:backup-restore",
			titre: n.sauvegardeEchec,
			detail: n.sauvegardeEchecDetail,
			chemin: "/config/backup",
			prevenir: "sauvegarde"
		}) : Number.isNaN(e.getTime()) && i.push({
			cle: "sauvegarde",
			niveau: 1,
			icone: "mdi:backup-restore",
			titre: n.sauvegardeAucune,
			detail: n.sauvegardeAucuneDetail,
			chemin: "/config/backup"
		});
	}
	let d = t.vehicules.find((e) => e.classe === "battery_charging"), f = t.vehicules.find((e) => e.classe === "battery" && e.domaine === "sensor"), p = d ? r(d.id) : void 0, m = f ? Number.parseFloat(r(f.id)?.state ?? "") : NaN;
	p?.state === "off" && p.last_changed && Date.now() - new Date(p.last_changed).getTime() < 36e5 && m >= 80 && i.push({
		cle: "vehicule-charge",
		niveau: 1,
		icone: "mdi:car-electric-outline",
		titre: n.voitureChargee,
		detail: n.vehiculeBatterie(A(e, m, 0), !1),
		entite: f.id,
		chemin: "vehicule"
	});
	let h = /* @__PURE__ */ new Date();
	if (t.reglages.bilan !== !1 && (h.getDay() === 1 || h.getDate() === 1) && Wn(e, t)) {
		let e = h.getDate() === 1;
		i.push({
			cle: e ? "bilan-mois" : "bilan",
			niveau: 1,
			icone: e ? "mdi:calendar-month" : "mdi:calendar-week",
			titre: e ? n.bilanPretMois : n.bilanPret,
			detail: n.bilanPretDetail,
			chemin: "bilan"
		});
	}
	if (xr(e, t)) {
		i.push(...Cr(e, t));
		let n = (e) => e.niveau === 3 ? 0 : e.securite ? 1 : 2;
		return i.sort((e, t) => n(e) - n(t) || t.niveau - e.niveau);
	}
	return i.sort((e, t) => t.niveau - e.niveau);
}
var Tr = (e) => e.niveau < 3;
function Er(e, t) {
	let n = t.cle.split(":")[0], r = t.entite ? e.states[t.entite] : void 0;
	return r && [
		"ouvrant",
		"serrure",
		"alarme-desarmee",
		"service"
	].includes(n) ? `${r.state}|${r.last_changed ?? ""}` : [
		"lumieres-absence",
		"majs",
		"vigilance"
	].includes(n) ? `${t.titre}|${t.detail}` : `${t.niveau}|${t.titre}`;
}
function Dr(e, t) {
	let n = wr(e, t), r = n.filter((t) => Tr(t) && Ht(t.cle, Er(e, t)));
	return {
		visibles: n.filter((e) => !r.includes(e)),
		ignores: r
	};
}
// src/phrases.ts
var Or = "var(--automatic-dashboard-vert, var(--success-color, #1E6B47))", G = "var(--warning-color)", kr = "var(--automatic-dashboard-alerte, var(--error-color, #B42318))", K = "var(--primary-color)";
function Ar(e, t) {
	let n = k(e), r = Dr(e, t).visibles, i = r.filter((e) => e.niveau === 3);
	if (i.length) return {
		phrase: n.alerteGrave(`${i[0].titre} : ${i[0].detail}`),
		point: kr
	};
	if (xr(e, t)) {
		let r = Sr(e, t), i = [
			r.ouverts.length ? n.absOuverts(r.ouverts.length) : "",
			r.serrures.length ? n.absSerrures(r.serrures.length) : "",
			r.lumieres.length ? n.absLumieres(r.lumieres.length) : "",
			r.alarmes.length ? n.absAlarme : ""
		].filter(Boolean);
		return i.length ? {
			phrase: n.absenceReste(i.join(", ")),
			point: G
		} : {
			phrase: n.absenceCalme,
			point: Or
		};
	}
	return t.mode === "decouverte" ? jr(e, t) : r.length ? {
		phrase: n.points(r.length),
		point: G
	} : {
		phrase: n.toutVaBien,
		point: Or
	};
}
function jr(e, t) {
	let n = k(e), r = t.meteo ? e.states[t.meteo] : void 0;
	if (!P(r)) return {
		phrase: "",
		point: K
	};
	let i = ft(e, r).texte, a = n.phraseMeteo(i, j(e, r.attributes.temperature)), o = dr(t.meteoFrance ? e.states[t.meteoFrance] : void 0);
	return o && (a += " " + (o.dans === null ? n.pasDePluie : o.dans === 0 ? n.pluieEnCours : n.pluieDansPhrase(o.dans))), {
		phrase: a,
		point: K
	};
}
function Mr(e, t) {
	let n = k(e), r = [], i = R(e, t.temperatures), a = R(e, t.humidites);
	i !== null && r.push(`${j(e, i)}${a === null ? "" : ` · ${A(e, a, 0)} %`}`);
	let o = (t) => e.states[t]?.state, s = t.entites.filter((e) => e.domaine === "light" && o(e.id) === "on").length, c = t.entites.filter((e) => e.domaine === "cover" && o(e.id) === "open").length;
	return s && r.push(n.lumieresAllumees(s)), c && r.push(n.voletsOuverts(c)), t.entites.some((e) => e.domaine === "climate" && [
		"heat",
		"heat_cool",
		"auto"
	].includes(o(e.id) ?? "")) && r.push(n.chauffe), t.entites.some((e) => e.domaine === "climate" && o(e.id) === "cool") && r.push(n.clim), !s && !c && r.length <= 1 && r.push(n.toutEteint.toLowerCase()), {
		phrase: N(n.piecePhrase(r)),
		point: K
	};
}
function Nr(e, t, n) {
	let r = k(e), i = (t) => t ? e.states[t] : void 0, a = (n) => L(e, n.id, t.noms);
	if (n === "climat") {
		let n = t.pieces.filter((e) => !e.exterieur && !e.annexe && e.temperatures.length).map((t) => ({
			p: t,
			v: R(e, t.temperatures),
			c: Mt(e, t.temperatures)
		})).filter((e) => e.v !== null && e.c !== null), a = n.filter((e) => e.c < 18.5), o = n.filter((e) => e.c > 24), s = [...a, ...o], c;
		if (!n.length) {
			let n = z(e, t);
			c = n === null ? "" : `${r.dehorsTitre} ${j(e, n)}.`;
		} else if (n.length === 1) {
			let i = z(e, t);
			c = `${n[0].p.name}${r.deuxPoints}${j(e, n[0].v)}.${i === null ? "" : ` ${r.dehorsTitre}${r.deuxPoints}${j(e, i)}.`}`;
		} else if (!s.length) c = r.bonPartout;
		else if (s.length <= 2) {
			let t = s.map((t) => `${t.p.name} (${j(e, t.v)})`).join(r.et);
			c = r.bonPresquePartout(t);
		} else c = r.horsConfort(s.length);
		let l = t.climats.filter((e) => e.domaine === "climate" && [
			"heat",
			"heat_cool",
			"auto"
		].includes(i(e.id)?.state ?? "")).length;
		return l && (c += ` ${r.chauffagesEnMarche(l)}`), {
			phrase: c,
			point: s.length ? G : Or
		};
	}
	if (n === "energie") {
		let n = i(t.puissanceReseau), a = Number.parseFloat(n?.state ?? "");
		return Number.isNaN(a) ? {
			phrase: "",
			point: K
		} : {
			phrase: r.energiePhrase(`${A(e, a, 0)} ${n.attributes.unit_of_measurement || "W"}`),
			point: K
		};
	}
	if (n === "securite") {
		let e = t.ouvrants.filter((e) => i(e.id)?.state === "on"), n = t.alertes.filter((e) => i(e.id)?.state === "on");
		if (n.length) return {
			phrase: `${r.fuite}${r.deuxPoints}${n.map(a).join(", ")}.`,
			point: kr
		};
		if (!e.length) return {
			phrase: r.toutFermePhrase,
			point: Or
		};
		let o = e.slice(0, 2).map(a).join(r.et);
		return {
			phrase: r.ouvertsPhrase(o, e.length),
			point: G
		};
	}
	if (n === "systeme") {
		let n = t.majs.filter((e) => i(e.id)?.state === "on").length, a = t.systeme.find((t) => t.plateforme === "backup" && e.entities[t.id]?.translation_key === "last_successful_automatic_backup"), o = a ? new Date(i(a.id)?.state ?? "") : null;
		return !o || Number.isNaN(o.getTime()) ? {
			phrase: r.sansSauvegardePhrase(n ? r.majs(n) : ""),
			point: G
		} : {
			phrase: r.systemeOkPhrase(n ? r.majs(n) : "", dt(e, o)),
			point: n ? G : Or
		};
	}
	return n === "a-ranger" ? {
		phrase: r.donnerPiece,
		point: K
	} : {
		phrase: "",
		point: K
	};
}
function Pr(e, t) {
	let n = k(e), r = Ot(e, t).points.filter((e) => e.cle.startsWith("air:")).sort((e, t) => t.niveau - e.niveau);
	return r.length ? {
		phrase: `${r[0].titre} : ${r[0].detail}`,
		point: r[0].niveau >= 2 ? G : K
	} : {
		phrase: n.airBon,
		point: Or
	};
}
function Fr(e, t) {
	let n = k(e), r = t.vehicules.find((e) => e.classe === "battery" && e.domaine === "sensor"), i = t.vehicules.find((e) => e.classe === "battery_charging" || e.domaine === "binary_sensor" && e.classe === "plug"), a = r ? Number.parseFloat(e.states[r.id]?.state ?? "") : NaN, o = i ? e.states[i.id]?.state === "on" : !1;
	return Number.isNaN(a) ? {
		phrase: n.vehiculeSansBatterie,
		point: K
	} : {
		phrase: n.vehiculeBatterie(A(e, a, 0), o),
		point: a < 20 ? G : Or
	};
}
// src/cartes/ciel.ts
var Ir = 29.530588853, Lr = o`
  .ciel{margin:0;flex:none;display:flex;flex-direction:column;align-items:center;gap:2px}
  .ciel svg{display:block;overflow:visible}
  .ciel .rond{width:216px;height:96px}
  .ciel .bandeau{display:none;width:100%;height:auto}
  .ciel figcaption{font-size:12px;font-weight:550;color:var(--secondary-text-color);font-variant-numeric:tabular-nums;white-space:nowrap}
  .horizon{stroke:var(--divider-color);stroke-width:1.5}
  .arc{fill:none;stroke:var(--divider-color);stroke-width:2;stroke-dasharray:3 5;stroke-linecap:round}
  .parcouru{fill:none;stroke-width:2.5;stroke-linecap:round}
  .soleil{fill:#F6C453;stroke:#fff;stroke-width:1.5}
  .lune-ombre{fill:var(--automatic-dashboard-fond-alt, var(--secondary-background-color));stroke:var(--divider-color)}
  .lune{fill:#E8E4D8}
`, Rr = (e) => ((e.getTime() - Date.UTC(2e3, 0, 6, 18, 14)) / 864e5 % Ir + Ir) % Ir / Ir;
function zr(e, t) {
	let n = new Date(e?.attributes.next_rising ?? ""), r = new Date(e?.attributes.next_setting ?? "");
	if (Number.isNaN(n.getTime()) || Number.isNaN(r.getTime())) return null;
	let i = (e) => e.toDateString() === t.toDateString() ? e : /* @__PURE__ */ new Date(e.getTime() - 864e5), a = i(n), o = i(r);
	return {
		lever: a,
		coucher: o,
		avancement: (t.getTime() - a.getTime()) / (o.getTime() - a.getTime())
	};
}
function Br(e, t, n, r) {
	let i = Math.cos(2 * Math.PI * r), a = Math.abs(i) * n, o = r < .5;
	return `M${e} ${t - n}A${n} ${n} 0 0 ${+!!o} ${e} ${t + n}A${a} ${n} 0 0 ${o ? i > 0 ? 0 : 1 : +(i > 0)} ${e} ${t - n}Z`;
}
function Vr(e, t, n, r, i, a, o, s) {
	let c = e / 2, l = a.avancement >= 0 && a.avancement <= 1, u = Math.min(1, Math.max(0, a.avancement)), d = c - r * Math.cos(Math.PI * u), f = n - i * Math.sin(Math.PI * u), p = `M${c - r} ${n}A${r} ${i} 0 0 1 ${c + r} ${n}`, m = `M${c - r} ${n}A${r} ${i} 0 0 1 ${d.toFixed(1)} ${f.toFixed(1)}`, h = Math.min(15, i * .45), g = n - i * .72;
	return C`<svg class=${s} viewBox="0 0 ${e} ${t}" aria-hidden="true">
      <line x1="6" x2=${e - 6} y1=${n} y2=${n} class="horizon"/>
      <path d=${p} class="arc"/>
      ${l ? C`<path d=${m} stroke="url(#arc-jour)" class="parcouru"/>
            <circle cx=${d} cy=${f} r="18" fill="url(#halo)"/><circle cx=${d} cy=${f} r="7" class="soleil"/>` : C`<circle cx=${c} cy=${g} r=${h} class="lune-ombre"/><path d=${Br(c, g, h, Rr(o))} class="lune"/>`}
    </svg>`;
}
function Hr(e, t = /* @__PURE__ */ new Date()) {
	let n = zr(e.states["sun.sun"], t);
	if (!n) return T;
	let r = n.avancement >= 0 && n.avancement <= 1, i = gt(t, O(e)), a = r ? k(e).leverCoucher(M(e, n.lever), M(e, n.coucher)) : i.nom;
	return S`<figure class="ciel" aria-label=${a}>
    <svg width="0" height="0" ${D({ position: "absolute" })} aria-hidden="true"><defs>
      <linearGradient id="arc-jour" x1="0" x2="1"><stop offset="0" stop-color="#E9A23B" stop-opacity=".25"/><stop offset="1" stop-color="#E9A23B"/></linearGradient>
      <radialGradient id="halo"><stop offset="0" stop-color="#F6C453" stop-opacity=".55"/><stop offset="1" stop-color="#F6C453" stop-opacity="0"/></radialGradient>
    </defs></svg>
    ${Vr(216, 96, 74, 92, 56, n, t, "rond")}
    ${Vr(360, 54, 46, 168, 34, n, t, "bandeau")}
    <figcaption>${a}</figcaption>
  </figure>`;
}
// src/cartes/ouverture.ts
var Ur = class extends U {
	constructor(...e) {
		super(...e), this._heure = -1;
	}
	static {
		this.styles = [
			V,
			Lr,
			o`
    :host{display:block}
    .bloc{padding:6px 2px 4px}
    .sur{display:inline-flex;align-items:center;gap:8px;color:var(--accent-color)}
    .sur::before{content:"";width:8px;height:8px;border-radius:2px;background:var(--primary-color)}
    h1{margin:10px 0 6px;font-family:var(--ha-font-family-heading, Inter, sans-serif);font-size:34px;line-height:1.08;font-weight:700;letter-spacing:-.025em;color:var(--primary-text-color)}
    .phrase{display:flex;align-items:baseline;gap:9px;font-size:16.5px;line-height:1.4;color:var(--primary-text-color);max-width:62ch}
    .phrase::before{content:"";flex:none;width:9px;height:9px;border-radius:50%;transform:translateY(-1px);background:var(--point, var(--automatic-dashboard-vert, var(--success-color, #1E6B47)))}
    @container (max-width: 420px){ h1{font-size:28px} .phrase{font-size:15.5px} }
    .tete{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}
    .tete .bloc{flex:1;min-width:0}
    /* Le ciel passe sous la phrase, en bandeau aligné sur le texte, la légende à droite. */
    .tete{flex-direction:column;align-items:stretch;gap:4px}
    .tete .ciel{display:grid;grid-template-columns:minmax(0,520px) auto;justify-content:start;align-items:end;gap:14px;margin-top:2px}
    .tete .ciel .rond{display:none}
    .tete .ciel .bandeau{display:block;max-height:58px}
    @container (max-width: 560px){ .tete .ciel{grid-template-columns:1fr auto;gap:10px} .tete .ciel figcaption{font-size:11px} }
  `
		];
	}
	suivies(e) {
		return H([
			"sun.sun",
			...e.personnes,
			...e.securite.map((e) => e.id),
			e.meteo,
			e.meteoFrance,
			e.vigilance,
			...e.alertes.map((e) => e.id),
			...e.ouvrants.map((e) => e.id),
			...e.piles.map((e) => e.id),
			...e.majs.map((e) => e.id),
			...e.systeme.map((e) => e.id),
			...e.temperaturesInterieures.flat(),
			e.puissanceReseau,
			...e.pieces.flatMap((e) => e.entites.map((e) => e.id))
		]);
	}
	autresChangements() {
		return (/* @__PURE__ */ new Date()).getHours() !== this._heure;
	}
	rendu(e, t) {
		let n = k(e), r = this._config?.page || "accueil", i = /* @__PURE__ */ new Date();
		this._heure = i.getHours();
		let a = N(new Intl.DateTimeFormat(O(e), {
			weekday: "long",
			day: "numeric",
			month: "long"
		}).format(i)), o = `${a} · ${e.config.location_name || ""}`, s = "", c = "", l = "var(--automatic-dashboard-vert, var(--success-color, #1E6B47))";
		if (r === "accueil") {
			let r = this._heure, i = (e.user?.name || "").replace(/\s*\(.*\)\s*$/, "").split(" ")[0];
			s = `${r < 5 ? n.nuit : r < 12 ? n.bonjour : r < 18 ? n.apresmidi : n.bonsoir}${i ? `, ${i}` : ""}`, {phrase: c, point: l} = Ar(e, t);
		} else if (r === "air" || r === "vehicule" || r === "exterieur") s = {
			air: n.air,
			vehicule: n.vehicule,
			exterieur: n.exterieur
		}[r], o = a, {phrase: c, point: l} = r === "air" ? Pr(e, t) : r === "vehicule" ? Fr(e, t) : jr(e, t);
		else if (r === "mes-favoris") s = n.mesFavoris, o = a, c = n.mesFavorisPhrase, l = "var(--primary-color)";
		else if (r === "depart") s = n.jePars, o = a, c = n.departPhrase, l = "var(--primary-color)";
		else if (r === "bilan") s = n.bilan, o = a, c = n.bilanEntete, l = "var(--primary-color)";
		else if (this._config?.piece) {
			let r = t.pieces.find((e) => e.area_id === this._config?.piece);
			s = r?.name || "", o = [n.pieceSurtitre, r?.floor_id ? e.floors?.[r.floor_id]?.name : void 0].filter(Boolean).join(" · "), c = r ? Mr(e, r).phrase : "", l = "var(--primary-color)";
		} else {
			let i = t.aRanger.length;
			s = {
				climat: n.climat,
				energie: n.energie,
				securite: n.securite,
				systeme: n.systeme,
				"a-ranger": n.pastilleSansPiece(i)
			}[r] || "", o = a, {phrase: c, point: l} = Nr(e, t, r);
		}
		let u = S`<div class="bloc" ${D({ "--point": l })}><div class="sur">${o}</div><h1>${s}</h1>
      ${c ? S`<div class="phrase">${c}</div>` : T}</div>`;
		return r === "accueil" && t.reglages.ciel !== !1 ? S`<div class="tete">${u}${Hr(e, i)}</div>` : u;
	}
}, Wr = class extends U {
	static {
		this.styles = [V, o`
    :host{display:inline-block;height:auto;container-type:normal}
    button{display:inline-flex;align-items:center;gap:7px;height:36px;padding:0 13px 0 10px;border-radius:999px;white-space:nowrap;
      background:var(--ha-card-background);border:1px solid var(--divider-color);font-size:14px;font-weight:600;color:var(--primary-text-color)}
    button:hover{border-color:var(--primary-color)}
    ha-icon{--mdc-icon-size:18px;color:var(--secondary-text-color)}
    .valeur{font-weight:500;color:var(--secondary-text-color)}
    .court{display:none}
    @media (max-width: 600px){
      .long{display:none} .court{display:inline}
      button{height:34px;gap:6px;padding:0 11px 0 9px;font-size:13.5px}
    }
    .actif{background:var(--automatic-dashboard-accent-pale, color-mix(in srgb, var(--primary-color) 12%, transparent))} .actif ha-icon{color:var(--state-light-active-color)}
    .attention{background:rgba(233,162,59,.14)} .attention ha-icon{color:var(--warning-color)}
    .action{border-color:color-mix(in srgb, var(--primary-color) 45%, var(--divider-color))} .action ha-icon{color:var(--primary-color)}
    .alerte{background:var(--automatic-dashboard-alerte-pale, color-mix(in srgb, var(--error-color, #B42318) 12%, transparent))} .alerte ha-icon{color:var(--automatic-dashboard-alerte, var(--error-color, #B42318))}
  `];
	}
	suivies(e) {
		let t = this._config?.sujet;
		return t === "meteo" ? H([e.meteo]) : t === "climat" ? e.temperaturesInterieures.flat() : t === "lumieres" ? e.lumieres.map((e) => e.id) : t === "securite" ? [...e.ouvrants, ...e.alertes].map((e) => e.id) : t === "energie" ? H([e.puissanceReseau]) : t === "systeme" ? e.majs.map((e) => e.id) : t === "soleil" ? ["sun.sun"] : t === "air" ? e.air.map((e) => e.id) : t === "vehicule" ? e.vehicules.map((e) => e.id) : t === "depart" ? [
			...e.ouvrants,
			...e.lumieres,
			...e.gardees.filter((e) => [
				"lock",
				"cover",
				"alarm_control_panel"
			].includes(e.domaine))
		].map((e) => e.id) : t === "piece" ? e.pieces.find((e) => e.area_id === this._config?.piece)?.temperatures ?? [] : [];
	}
	rendu(e, t) {
		let n = k(e), r = this._config?.sujet, i = (t) => t ? e.states[t] : void 0, a = "mdi:circle-small", o = "", s = "", c = "", l = null;
		if (r === "meteo") {
			let n = i(t.meteo);
			if (!P(n)) return null;
			({icone: a} = ft(e, n)), o = j(e, n.attributes.temperature), s = ft(e, n).texte, l = "";
		} else if (r === "climat") {
			let r = Nt(e, t);
			if (r === null) return null;
			a = "mdi:home-thermometer-outline", o = j(e, r), s = n.dedans;
		} else if (r === "lumieres") {
			let e = t.lumieres.filter((e) => i(e.id)?.state === "on").length;
			a = "mdi:lightbulb-group-outline", o = n.lumieres, s = n.allumees(e), l = String(e), c = e ? "actif" : "";
		} else if (r === "securite") {
			let e = t.ouvrants.filter((e) => i(e.id)?.state === "on").length, r = t.alertes.filter((e) => i(e.id)?.state === "on").length;
			a = r ? "mdi:shield-alert-outline" : "mdi:shield-home-outline", o = n.securite, s = r ? n.fuite : e ? n.ouverts(e) : n.toutFerme, c = r ? "alerte" : e ? "attention" : "", l = r ? "!" : e ? String(e) : "";
		} else if (r === "energie") {
			let r = i(t.puissanceReseau), c = Number.parseFloat(r?.state ?? "");
			if (Number.isNaN(c)) return null;
			a = "mdi:lightning-bolt-outline", o = `${A(e, c, 0)} ${r.attributes.unit_of_measurement || "W"}`, s = n.enCeMoment, l = "";
		} else if (r === "systeme") {
			let e = t.majs.filter((e) => i(e.id)?.state === "on").length;
			a = "mdi:server-outline", o = n.systeme, s = e ? n.majs(e) : n.aJour, l = e ? String(e) : "", c = e ? "attention" : "";
		} else if (r === "a-ranger") {
			if (!t.aRanger.length) return null;
			a = "mdi:tray-arrow-down", o = n.aRanger, s = String(t.aRanger.length);
		} else if (r === "piece") {
			let n = t.pieces.find((e) => e.area_id === this._config?.piece);
			if (!n) return null;
			let r = R(e, n.temperatures);
			a = n.icon, o = n.name, s = r === null ? "" : j(e, r);
		} else if (r === "air") {
			let r = t.air.filter((e) => e.classe === "carbon_dioxide").map((e) => Number.parseFloat(i(e.id)?.state ?? "")).filter((e) => !Number.isNaN(e));
			if (a = "mdi:air-filter", o = n.air, r.length) {
				let t = Math.max(...r);
				s = `${A(e, t, 0)} ppm`, c = t >= 1e3 ? "attention" : "";
			}
		} else if (r === "vehicule") {
			let r = t.vehicules.find((e) => e.classe === "battery" && e.domaine === "sensor"), c = r ? Number.parseFloat(i(r.id)?.state ?? "") : NaN;
			a = "mdi:car-electric-outline", o = n.vehicule, s = Number.isNaN(c) ? "" : `${A(e, c, 0)} %`;
		} else if (r === "exterieur") a = "mdi:tree-outline", o = n.exterieur;
		else if (r === "depart") {
			let r = $n(e, t), i = r.lumieres.length + r.serrures.length + r.volets.length + r.alarmes.length + r.ouvertures.length;
			a = "mdi:exit-run", o = n.jePars, s = i ? n.aFaire(i) : "", l = i ? String(i) : "", c = "action";
		} else if (r === "soleil") {
			let t = i("sun.sun");
			if (!t) return null;
			let r = t.state === "above_horizon";
			a = r ? "mdi:weather-sunset-down" : "mdi:weather-sunset-up", o = r ? n.coucher : n.lever, s = M(e, new Date(r ? t.attributes.next_setting : t.attributes.next_rising));
		}
		let u = l === null || l === s ? s ? S`<span class="valeur">${s}</span>` : T : S`${s ? S`<span class="valeur long">${s}</span>` : T}${l ? S`<span class="valeur court">${l}</span>` : T}`;
		return S`<button class=${c} title=${[o, s].filter(Boolean).join(" ")} @click=${this._clic}><ha-icon icon=${a}></ha-icon>${o}${u}</button>`;
	}
	_clic() {
		let e = this._config?.sujet;
		if (e) {
			if (e === "meteo") {
				let e = this.maison.meteo;
				e && I(this, e);
			} else e === "soleil" ? I(this, "sun.sun") : e === "lumieres" ? this.hass?.panels?.light && F("/light") : F(e === "piece" ? this._config?.piece ?? "" : e);
		}
	}
}, Gr = class extends U {
	static {
		this.styles = [V, o`
    button.carte{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;padding:13px 14px 12px;border-radius:var(--ha-card-border-radius)}
    .haut{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
    .mesures{text-align:right;line-height:1}
    .temp{font-size:24px;font-weight:650;letter-spacing:-.02em;color:var(--primary-text-color);white-space:nowrap}
    .hum{font-size:12.5px;margin-top:5px}
    .nom{display:flex;align-items:center;gap:6px;font-weight:650;font-size:15.5px;line-height:1.2;color:var(--primary-text-color);
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .nom .point{flex:none;width:8px;height:8px;border-radius:50%;background:var(--warning-color)}
    .compteurs{display:flex;gap:11px;margin-top:5px;font-size:12.5px;font-weight:600;color:var(--secondary-text-color);min-height:16px}
    .compteur{display:inline-flex;align-items:center;gap:3px}
    .compteur ha-icon{--mdc-icon-size:15px}
    .compteur.lum{color:var(--state-light-active-color)}
    .compteur.att{color:var(--warning-color)}
    .compteur.chaud ha-icon{color:var(--state-climate-heat-color)}
    .compteur.froid ha-icon{color:var(--state-climate-cool-color)}
    .calme{font-weight:500}
    @container (max-width: 150px){
      button.carte{padding:11px 11px 10px}
      .ico{width:32px;height:32px;border-radius:10px} .ico ha-icon{--mdc-icon-size:18px}
      .temp{font-size:19px} .hum{display:none} .compteurs{display:none}
      .nom{font-size:13.5px;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.2}
    }
    @container (min-width: 330px){ button.carte{padding:15px 18px 14px} .temp{font-size:30px} .nom{font-size:17px} }
  `];
	}
	getGridOptions() {
		return {
			columns: 6,
			rows: 2,
			min_columns: 4,
			max_columns: 12,
			min_rows: 2,
			max_rows: 2
		};
	}
	suivies(e) {
		let t = e.pieces.find((e) => e.area_id === this._config?.piece);
		return t ? [
			...t.temperatures,
			...t.humidites,
			...t.entites.map((e) => e.id)
		] : [];
	}
	rendu(e, t) {
		let n = k(e), r = t.pieces.find((e) => e.area_id === this._config?.piece);
		if (!r) return null;
		let i = (t) => e.states[t]?.state ?? "", a = R(e, r.temperatures), o = R(e, r.humidites), s = r.entites.filter((e) => e.domaine === "light" && i(e.id) === "on").length, c = r.entites.filter((e) => e.domaine === "cover" && i(e.id) === "open").length, l = r.entites.filter((e) => e.role === "ouvrant" && i(e.id) === "on").length, u = r.entites.some((e) => e.domaine === "climate" && [
			"heat",
			"heat_cool",
			"auto"
		].includes(i(e.id))), d = r.entites.some((e) => e.domaine === "climate" && i(e.id) === "cool"), f = r.entites.some((e) => e.domaine === "media_player" && i(e.id) === "playing"), p = [
			s ? S`<span class="compteur lum"><ha-icon icon="mdi:lightbulb-on"></ha-icon>${s}</span>` : null,
			c ? S`<span class="compteur"><ha-icon icon="mdi:window-shutter-open"></ha-icon>${c}</span>` : null,
			l ? S`<span class="compteur att"><ha-icon icon="mdi:window-open-variant"></ha-icon>${l}</span>` : null,
			u ? S`<span class="compteur chaud"><ha-icon icon="mdi:radiator"></ha-icon></span>` : null,
			d ? S`<span class="compteur froid"><ha-icon icon="mdi:snowflake"></ha-icon></span>` : null,
			f ? S`<span class="compteur"><ha-icon icon="mdi:music"></ha-icon></span>` : null
		].filter((e) => e !== null), m = r.entites.filter((e) => !e.secondaire).length;
		return S`<ha-card><button class="carte" title=${r.name} @click=${() => F(this._config?.piece ?? "")}>
      <span class="haut"><span class="ico ${s ? "chaud" : ""}"><ha-icon icon=${r.icon}></ha-icon></span>
        <span class="mesures">${a === null ? T : S`<div class="temp chiffre">${j(e, a)}</div>`}
        ${o === null ? T : S`<div class="hum doux chiffre">${A(e, o, 0)} %</div>`}</span></span>
      <span><span class="nom">${r.name}${l ? S`<span class="point"></span>` : T}</span>
        <span class="compteurs">${p.length ? p : S`<span class="calme">${a === null ? `${m} ${n.appareils.toLowerCase()}` : n.toutEteint}</span>`}</span></span>
    </button></ha-card>`;
	}
}, Kr = [
	[17, "#3E6FB0"],
	[19, "#7BA7D1"],
	[22, "#CDBB8F"],
	[24, "#E9A23B"],
	[Infinity, "#C8613A"]
], qr = (e) => e === null ? null : Kr.find(([t]) => e < t)[1], Jr = class extends U {
	static {
		this.styles = [V, o`
    ha-card{padding:16px 16px 14px;display:grid;gap:12px}
    .etage{display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:stretch}
    .etage > .sur{writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;font-size:10.5px;padding:4px 0}
    .sans-etage{grid-template-columns:1fr}
    .pieces{display:flex;flex-wrap:wrap;gap:6px}
    .piece{display:flex;flex-direction:column;justify-content:space-between;min-width:86px;height:84px;padding:10px 12px;border-radius:12px;
      box-sizing:border-box;text-align:left;background:color-mix(in srgb, var(--c, #888) 30%, var(--card-background-color, #fff));
      border:1px solid color-mix(in srgb, var(--c, #888) 50%, transparent);transition:transform .12s}
    .piece:hover{transform:translateY(-1px)}
    .piece.inconnue{--c:var(--secondary-text-color);background:transparent;border-style:dashed}
    .piece.dehors{background:repeating-linear-gradient(135deg, color-mix(in srgb, var(--c, #888) 18%, transparent) 0 6px, transparent 6px 12px);border-style:dashed}
    .nom{font-size:13px;font-weight:650;color:var(--primary-text-color);line-height:1.2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .bas{display:flex;align-items:baseline;justify-content:space-between;gap:6px}
    .temp{font-size:22px;font-weight:700;letter-spacing:-.02em;color:var(--primary-text-color)}
    .hum{font-size:12px;font-weight:600;color:var(--secondary-text-color)}
    .legende{display:flex;align-items:center;gap:10px;font-size:11.5px;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}
    .legende span.degrade{flex:1;max-width:220px;height:6px;border-radius:3px;
      background:linear-gradient(90deg, #3E6FB0, #7BA7D1 25%, #CDBB8F 50%, #E9A23B 75%, #C8613A)}
    @media (prefers-reduced-motion: reduce){ .piece{transition:none} }
  `];
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: "auto"
		};
	}
	suivies(e) {
		return e.pieces.flatMap((e) => [...e.temperatures, ...e.humidites]);
	}
	rendu(e, t) {
		let n = t.pieces.filter((e) => e.entites.length || e.temperatures.length);
		if (n.filter((e) => e.temperatures.length).length < 2) return null;
		let r = n.find((e) => e.temperatures.length).temperatures[0], i = [...t.etages].sort((e, t) => (t.level ?? 0) - (e.level ?? 0)).map((e) => [e.name, n.filter((t) => t.etage === e.floor_id)]).filter(([, e]) => e.length), a = n.filter((e) => !e.etage);
		return a.length && i.push([i.length ? k(e).autresTitre : null, a]), S`<ha-card>
      ${i.map(([t, n]) => S`<div class=${t ? "etage" : "etage sans-etage"}>
        ${t ? S`<span class="sur">${t}</span>` : T}
        <div class="pieces">${n.map((t) => this.piece(e, t))}</div></div>`)}
      <div class="legende"><span>${Math.round(jt(e, 16, r))}°</span><span class="degrade"></span><span>${Math.round(jt(e, 26, r))}°</span></div>
    </ha-card>`;
	}
	piece(e, t) {
		let n = R(e, t.temperatures), r = R(e, t.humidites), i = qr(Mt(e, t.temperatures)), a = 1 + Math.min(1, t.utiles / 8);
		return S`<button class=${[
			"piece",
			i ? "" : "inconnue",
			t.exterieur ? "dehors" : ""
		].join(" ")} ${D({
			flex: `${a} 1 ${Math.round(86 * a)}px`,
			...i ? { "--c": i } : {}
		})}
      title=${t.name} @click=${() => t.entites.length && F(t.area_id)}>
      <span class="nom">${t.name}</span>
      <span class="bas"><span class="temp chiffre">${n === null ? "—" : j(e, n)}</span>
        ${r === null ? T : S`<span class="hum chiffre">${A(e, r, 0)} %</span>`}</span>
    </button>`;
	}
}, Yr = /* @__PURE__ */ new Set([
	"smoke",
	"gas",
	"carbon_monoxide"
]), Xr = (e) => `automatic_dashboard_${e}`, Zr = (e, t) => Object.values(e.states).some((e) => e.entity_id.startsWith("automation.") && e.attributes.id === Xr(t)), Qr = (e) => e.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
function $r(e) {
	let t = Object.keys(e.services?.notify ?? {}).filter((e) => e.startsWith("mobile_app_")).sort(), n = Object.values(e.devices ?? {});
	return t.map((e) => {
		let t = e.slice(11), r = n.find((e) => Qr(e.name_by_user || e.name || "") === t || Qr(e.name || "") === t);
		return {
			service: e,
			nom: r?.name_by_user || r?.name || t.replace(/_/g, " ").replace(/^./, (e) => e.toUpperCase())
		};
	});
}
var ei = (e) => ({
	telephones: $r(e).map((e) => e.service),
	homeAssistant: !0
});
function ti(e, t, n, r) {
	return [...r.homeAssistant ? [{
		action: "persistent_notification.create",
		data: {
			title: e,
			message: t,
			notification_id: Xr(n)
		}
	}] : [], ...r.telephones.map((n) => ({
		action: `notify.${n}`,
		data: {
			title: e,
			message: t
		}
	}))];
}
function ni(e, t, n, r = ei(e)) {
	let i = ct(e).automatismes, a = [], o = [];
	if (n === "fuite" || n === "fumee") {
		let e = t.alertes.filter((e) => n === "fuite" ? e.classe === "moisture" : Yr.has(e.classe ?? "")).map((e) => e.id);
		if (!e.length) return null;
		a = [{
			trigger: "state",
			entity_id: e,
			from: "off",
			to: "on"
		}];
	} else if (n === "pile") {
		let e = t.piles.filter((e) => e.domaine === "sensor").map((e) => e.id), n = t.piles.filter((e) => e.domaine === "binary_sensor").map((e) => e.id);
		if (e.length && a.push({
			trigger: "numeric_state",
			entity_id: e,
			below: 20
		}), n.length && a.push({
			trigger: "state",
			entity_id: n,
			from: "off",
			to: "on"
		}), !a.length) return null;
	} else {
		let n = (n) => t.systeme.find((t) => t.plateforme === "backup" && e.entities[t.id]?.translation_key === n)?.id, r = n("last_attempted_automatic_backup"), i = n("last_successful_automatic_backup");
		if (!r || !i) return null;
		a = [{
			trigger: "state",
			entity_id: r
		}], o = [{
			condition: "template",
			value_template: `{% set t = states('${r}') | as_datetime %}{% set r = states('${i}') | as_datetime %}{{ t is not none and (r is none or t > r) }}`
		}];
	}
	return {
		id: Xr(n),
		config: {
			id: Xr(n),
			alias: `Automatic Dashboard${ct(e).textes.deuxPoints}${i.alias[n]}`,
			description: i.description,
			mode: "queued",
			triggers: a,
			conditions: o,
			actions: ti(i.titre[n], i.message[n], n, r)
		}
	};
}
async function ri(e, t) {
	await ii(e)("POST", `config/automation/config/${t.id}`, t.config);
}
var ii = (e) => {
	let t = e.callApi;
	if (!t) throw Error("callApi indisponible");
	return t;
}, ai = class extends U {
	static {
		this.properties = { _ouvert: { state: !0 } };
	}
	constructor() {
		super(), this._ouvert = null;
	}
	static {
		this.styles = [V, o`
    ha-card{padding:6px 16px}
    ha-card.grave{background:var(--automatic-dashboard-alerte-pale, color-mix(in srgb, var(--error-color, #B42318) 12%, transparent));border-color:transparent}
    ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr;column-gap:28px;align-items:start}
    @container (min-width: 640px){ ul{grid-template-columns:1fr 1fr} }
    li{border-top:1px solid var(--divider-color)}
    li:first-child{border-top:0}
    @container (min-width: 640px){ li:nth-child(2){border-top:0} }
    .ligne{display:grid;grid-template-columns:1fr auto;align-items:center;gap:4px}
    .ouvrir{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:13px;width:100%;min-height:58px;padding:9px 0;text-align:left}
    .plus-actions{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;color:var(--secondary-text-color)}
    .plus-actions:hover,.plus-actions:focus-visible,.plus-actions[aria-expanded="true"]{background:var(--secondary-background-color);color:var(--primary-text-color)}
    .plus-actions ha-icon{--mdc-icon-size:20px}
    .menu{display:flex;flex-wrap:wrap;gap:8px;padding:0 0 12px 53px}
    .menu button{display:inline-flex;align-items:center;gap:7px;min-height:36px;padding:0 14px 0 11px;border-radius:18px;font-size:13.5px;font-weight:600;
      background:var(--secondary-background-color);color:var(--primary-text-color)}
    .menu button:hover{background:color-mix(in srgb, var(--primary-color) 12%, var(--secondary-background-color))}
    .menu button.fait{color:var(--success-color, #2e7d32)}
    .menu ha-icon{--mdc-icon-size:18px}
    .menu .note{font-size:12.5px;line-height:1.4;color:var(--secondary-text-color);flex-basis:100%}
    .ignores{display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:9px 0 11px;font-size:13px;color:var(--secondary-text-color);border-top:1px solid var(--divider-color)}
    ul:empty + .ignores{border-top:0}
    .ignores ha-icon{--mdc-icon-size:17px}
    .ignores button{font-weight:650;color:var(--primary-color)}
    .n3 .ico{background:var(--automatic-dashboard-alerte-pale, color-mix(in srgb, var(--error-color, #B42318) 12%, transparent));color:var(--automatic-dashboard-alerte, var(--error-color, #B42318))}
    .n2 .ico{background:rgba(233,162,59,.16);color:var(--warning-color)}
    .n1 .ico{background:var(--automatic-dashboard-accent-pale, color-mix(in srgb, var(--primary-color) 12%, transparent));color:var(--primary-color)}
    .nom{font-weight:650;font-size:14.5px;line-height:1.25;color:var(--primary-text-color)}
    .nom small{display:block;font-weight:500;font-size:13px;color:var(--secondary-text-color);margin-top:2px}
    .plus{display:block;padding:8px 0 10px;font-size:13px;color:var(--secondary-text-color)}
    @container (max-width: 420px){ .menu{padding-left:0} }
  `];
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: "auto"
		};
	}
	suivies(e) {
		return H([
			e.vigilance,
			...e.personnes,
			...[
				...e.alertes,
				...e.ouvrants,
				...e.piles,
				...e.majs,
				...e.systeme,
				...e.securite,
				...e.lumieres
			].map((e) => e.id),
			...e.pieces.flatMap((e) => [...e.temperatures, ...e.humidites])
		]);
	}
	rendu(e, t) {
		let n = k(e), { visibles: r, ignores: i } = Dr(e, t);
		if (!r.length && !i.length) return null;
		let a = t.mode === "decouverte" ? 3 : 4, o = r.slice(0, a), s = r.length - o.length;
		return S`<ha-card class=${r.some((e) => e.niveau === 3) ? "grave" : ""}><ul>${o.map((r) => {
			let i = this.actions(e, t, r), a = this._ouvert === r.cle;
			return S`<li class="n${r.niveau}">
        <div class="ligne">
          <button class="ouvrir" @click=${() => this.ouvrir(r)}>
            <span class="ico"><ha-icon icon=${r.icone}></ha-icon></span>
            <span class="nom">${r.titre}<small>${r.detail}</small></span></button>
          ${i.length ? S`<button class="plus-actions" aria-expanded=${a ? "true" : "false"} title=${n.actions} aria-label=${`${n.actions} ${r.titre}`}
                @click=${() => this._ouvert = a ? null : r.cle}><ha-icon icon="mdi:dots-horizontal"></ha-icon></button>` : T}
        </div>
        ${a ? S`<div class="menu">${i}</div>` : T}</li>`;
		})}</ul>
      ${s > 0 ? S`<span class="plus">${N(n.autres(s))}</span>` : T}
      ${i.length ? S`<div class="ignores"><ha-icon icon="mdi:eye-off-outline"></ha-icon><span>${n.ignores(i.length)}</span>
            <button @click=${() => Kt(e, i.map((t) => ({
			cle: t.cle,
			signature: Er(e, t)
		})), !1)}>${n.remontrer}</button></div>` : T}</ha-card>`;
	}
	actions(e, t, n) {
		let r = k(e), i = [];
		if (Tr(n) && i.push(S`<button @click=${() => {
			this._ouvert = null, Kt(e, [{
				cle: n.cle,
				signature: Er(e, n)
			}], !0);
		}}>
        <ha-icon icon="mdi:eye-off-outline"></ha-icon>${r.ignorer}</button>`), n.prevenir) {
			if (Zr(e, n.prevenir)) i.push(S`<button class="fait" @click=${() => F(`/config/automation/edit/${Xr(n.prevenir)}`)}>
          <ha-icon icon="mdi:bell-check-outline"></ha-icon>${r.prevenu}</button>`);
			else if (e.user?.is_admin) {
				let a = ni(e, t, n.prevenir);
				a && i.push(S`<button @click=${() => this.creer(a)}><ha-icon icon="mdi:bell-plus-outline"></ha-icon>${r.prevenir}</button>`);
			} else i.push(S`<span class="note">${r.prevenirAdmin}</span>`);
		}
		return i;
	}
	async creer(e) {
		let t = k(this.hass), n = (e, t) => this.dispatchEvent(new CustomEvent("hass-notification", {
			detail: {
				message: e,
				action: t
			},
			bubbles: !0,
			composed: !0
		}));
		try {
			await ri(this.hass, e), this._ouvert = null, n(t.automatismeCree(String(e.config.alias)), {
				text: t.voir,
				action: () => F(`/config/automation/edit/${e.id}`)
			});
		} catch (e) {
			n(`${t.automatismeEchec} ${e?.message ?? ""}`.trim());
		}
	}
	ouvrir(e) {
		e.entite ? I(this, e.entite) : e.chemin && F(e.chemin);
	}
}, oi = {
	latitude: 52.3731339,
	longitude: 4.8903147
}, si = class extends U {
	static {
		this.styles = [V, o`
    ha-card{padding:16px 18px 10px}
    .titre{font-size:17px;font-weight:700;color:var(--primary-text-color)}
    .sous{font-size:13px;margin:3px 0 8px}
    ol{list-style:none;margin:0;padding:0}
    li{border-top:1px solid var(--divider-color)}
    li button{display:flex;align-items:center;gap:12px;width:100%;min-height:48px;font-size:14.5px;font-weight:550;color:var(--primary-text-color)}
    .coche{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;flex:none;border:2px solid var(--divider-color)}
    .fait .coche{background:var(--automatic-dashboard-vert, var(--success-color, #1E6B47));border-color:var(--automatic-dashboard-vert, var(--success-color, #1E6B47));color:#fff}
    .fait .coche ha-icon{--mdc-icon-size:16px}
    .fait span.texte{color:var(--secondary-text-color);text-decoration:line-through;text-decoration-color:var(--divider-color)}
    .texte{flex:1}
    .fleche{--mdc-icon-size:18px;color:var(--secondary-text-color)}
  `];
	}
	getGridOptions() {
		return {
			columns: 12,
			rows: "auto"
		};
	}
	suivies() {
		return [this.prochaineSauvegarde() ?? "sensor.backup_next_scheduled_automatic_backup"];
	}
	autresChangements(e) {
		let t = this.hass;
		return (e.config.components ?? []).length !== (t.config.components ?? []).length || e.config.latitude !== t.config.latitude;
	}
	prochaineSauvegarde() {
		return Object.values(this.hass?.entities ?? {}).find((e) => e.platform === "backup" && e.translation_key === "next_scheduled_automatic_backup")?.entity_id;
	}
	rendu(e, t) {
		if (!e.user?.is_admin) return null;
		let n = k(e), r = new Set(e.config.components ?? []), i = Math.abs(e.config.latitude - oi.latitude) < .001 && Math.abs(e.config.longitude - oi.longitude) < .001, a = this.prochaineSauvegarde(), o = !!a && P(e.states[a]), s = (e.config.country || "") === "FR", c = [
			{
				cle: "emplacement",
				fait: !i,
				lien: "/_my_redirect/general"
			},
			s ? {
				cle: "meteoFrance",
				fait: r.has("meteo_france"),
				lien: "/_my_redirect/config_flow_start?domain=meteo_france"
			} : {
				cle: "meteo",
				fait: !!t.meteo,
				lien: "/_my_redirect/config_flow_start?domain=met"
			},
			{
				cle: "feries",
				fait: r.has("holiday"),
				lien: "/_my_redirect/config_flow_start?domain=holiday"
			},
			{
				cle: "sauvegardes",
				fait: o,
				lien: "/_my_redirect/backup_config"
			},
			{
				cle: "pieces",
				fait: t.aRanger.length === 0 && t.utiles.some((e) => e.piece),
				lien: "/_my_redirect/areas"
			},
			{
				cle: "appli",
				fait: Object.values(e.entities).some((e) => e.platform === "mobile_app"),
				lien: "https://www.home-assistant.io/integrations/mobile_app/#apps"
			}
		];
		return c.every((e) => e.fait) ? null : S`<ha-card><div class="titre">${n.premiersPas}</div><div class="sous doux">${n.premiersPasDetail}</div><ol>
      ${c.map((e) => S`<li class=${e.fait ? "fait" : ""}><button @click=${() => this.ouvrir(e)}><span class="coche">${e.fait ? S`<ha-icon icon="mdi:check"></ha-icon>` : T}</span>
        <span class="texte">${n.etapes[e.cle]}</span>${e.fait ? T : S`<ha-icon class="fleche" icon="mdi:chevron-right"></ha-icon>`}</button></li>`)}
      </ol></ha-card>`;
	}
	ouvrir(e) {
		e.fait || (e.lien.startsWith("http") ? window.open(e.lien, "_blank", "noopener") : F(e.lien));
	}
};
// src/mise-en-page/rangees.ts
function ci(e, t = 6, n = "promotion") {
	let r = [];
	if (t === 6) {
		let t = e % 2 == 1;
		t && n === "promotion" && r.push([12]);
		for (let t = 0; t < Math.floor(e / 2); t++) r.push([6, 6]);
		t && n !== "promotion" && r.push([12]);
	} else {
		let t = e % 3;
		t === 1 && r.push([12]), t === 2 && r.push([6, 6]);
		for (let t = 0; t < Math.floor(e / 3); t++) r.push([
			4,
			4,
			4
		]);
	}
	if (r.length % 2 == 1) {
		let e = r[r.length - 1];
		r[r.length - 1] = e.length === 1 ? ["full"] : e.length === 2 ? [12, 12] : [
			12,
			6,
			6
		];
	}
	return r.flat();
}
function q(e, t, n, r) {
	let i = ci(e.length, t, n);
	return e.map((e, t) => ({
		...e,
		grid_options: {
			...e.grid_options ?? {},
			columns: i[t],
			...r ? { rows: r } : {}
		}
	}));
}
// src/strategie/configs.ts
var li = "Automatic Dashboard", J = (e, t = {}) => ({
	type: "grid",
	column_span: 2,
	cards: e,
	...t
}), Y = (e, t = {}) => ({
	type: "heading",
	heading: e,
	heading_style: "title",
	...t
});
function X({ path: e, title: t, icon: n, ouverture: r, badges: i = [], scene: a, cote: o = [], subview: s = !1, coteApres: c = 0 }) {
	let l = [...a];
	return o.length && (l.splice(c, 0, J(o, { visibility: [{
		condition: "view_columns",
		min: 2,
		max: 2
	}] })), l.push(J(o, { visibility: [{
		condition: "view_columns",
		max: 1
	}] }))), {
		path: e,
		title: t,
		icon: n,
		type: "sections",
		max_columns: 3,
		theme: li,
		subview: s,
		header: {
			layout: "start",
			badges_position: "bottom",
			badges_wrap: "wrap",
			card: r
		},
		badges: i,
		sections: l,
		...o.length ? { sidebar: {
			visibility: [{
				condition: "view_columns",
				min: 3
			}],
			sections: [{
				type: "grid",
				cards: o
			}]
		} } : {}
	};
}
function ui(e, t, n = {}) {
	let { sansFonction: r, titre: i, ...a } = n, o = {
		type: "tile",
		entity: e.id,
		...a
	};
	return r || t === "complet" || (e.domaine === "light" ? o.features = [{ type: "light-brightness" }] : e.domaine === "cover" ? o.features = [{ type: "cover-open-close" }] : e.domaine === "climate" ? o.features = [{ type: "target-temperature" }] : e.domaine === "lock" ? o.features = [{ type: "lock-commands" }] : e.domaine === "sensor" && e.classe && [
		"temperature",
		"humidity",
		"power",
		"carbon_dioxide"
	].includes(e.classe) && (o.features = [{ type: "trend-graph" }])), o;
}
var di = (e) => Array.isArray(e.features) && e.features.length > 0;
// src/strategie/accueil.ts
async function fi(e, t) {
	let n = new Set(t.gardees.filter((e) => e.role === "commande").map((e) => e.id)), r = (t) => t.filter((t) => e.states[t] && n.has(t)), i = [];
	try {
		i = r((await e.callWS({ type: "usage_prediction/common_control" }))?.entities ?? []);
	} catch {}
	return i.length || (i = r([...t.pieces.filter((e) => !e.exterieur && !e.annexe).map((e) => e.entites.find((e) => e.domaine === "light" && e.principale) ?? e.entites.find((e) => e.domaine === "light")).filter((e) => e !== void 0).map((e) => e.id), ...t.climats.filter((e) => e.piece).map((e) => e.id)])), i;
}
async function pi(e, t, n = {}) {
	let r = await or(e);
	return mi(e, t, r.length ? {
		...n,
		favoris: r
	} : n);
}
async function mi(e, t, n = {}) {
	let r = [.../* @__PURE__ */ new Set([...n.favoris ?? [], ...t.favorisEtiquette])].filter((t) => e.states[t]);
	if (t.mode === "decouverte") return [];
	if (n.completer === !1) return r;
	let i = (await fi(e, t)).filter((e) => !r.includes(e));
	return [...r, ...i].slice(0, hi(r.length, i.length));
}
var hi = (e, t) => e > 8 ? e : Math.max(e, e + t >= 8 ? 8 : 4), gi = (e) => e.config.location_name ? { name: e.config.location_name } : {}, _i = (e, t, n) => e.meteoFrance || e.vigilance ? [t({
	type: "custom:automatic-dashboard-meteo-france",
	grid_options: {
		columns: n,
		rows: "auto"
	}
})] : [], vi = (e) => e({
	type: "custom:automatic-dashboard-moment",
	grid_options: {
		columns: 12,
		rows: "auto"
	}
});
function yi(e, t, n) {
	let r = [];
	t.meteo && r.push({
		type: "weather-forecast",
		entity: t.meteo,
		...gi(e),
		forecast_type: "hourly",
		show_current: !0,
		show_forecast: !0,
		grid_options: {
			columns: 12,
			rows: 4
		}
	}), r.push(..._i(t, n, 12));
	let i = [];
	return t.temperaturesInterieures.length && i.push(n({
		type: "custom:automatic-dashboard-apercu",
		sorte: "climat"
	})), t.puissanceReseau && i.push(n({
		type: "custom:automatic-dashboard-apercu",
		sorte: "energie"
	})), r.push(...i.map((e) => ({
		...e,
		grid_options: {
			columns: i.length === 1 ? 12 : 6,
			rows: 2
		}
	}))), r.push(vi(n)), r.push(n({
		type: "custom:automatic-dashboard-apercu",
		sorte: "ephemeride",
		grid_options: {
			columns: 12,
			rows: 2
		}
	})), r;
}
function bi(e, t, n, r, i) {
	let a = k(e), o = (e) => n({
		type: "custom:automatic-dashboard-piece",
		piece: e
	}), s = [J([n({ type: "custom:automatic-dashboard-points" })])], c = (e) => t.reglages.tuiles === "home_assistant" ? {
		type: "tile",
		entity: e
	} : n({
		type: "custom:automatic-dashboard-favori",
		entity: e
	}), l = { badges: [{
		type: "button",
		text: a.modifierFavoris,
		icon: "mdi:star-cog-outline",
		tap_action: {
			action: "navigate",
			navigation_path: "mes-favoris"
		}
	}] };
	i.length && s.push(J([Y(a.favoris, l), ...i.map(c)]));
	let u = t.pieces.filter((e) => e.utiles > 0);
	if (t.mode === "complet" && t.etages.length > 1) {
		for (let e of t.etages) {
			let t = u.filter((t) => t.etage === e.floor_id);
			t.length && s.push(J([Y(e.name, { icon: e.icon || void 0 }), ...q(t.map((e) => o(e.area_id)), 4, "promotion", 2)]));
		}
		let n = u.filter((e) => !e.etage);
		n.length && s.push(J([Y(k(e).autresPieces), ...q(n.map((e) => o(e.area_id)), 4, "promotion", 2)]));
	} else if (t.mode === "complet" && u.length) s.push(J([Y(a.pieces), ...q(u.map((e) => o(e.area_id)), 4, "promotion", 2)]));
	else if (u.length) {
		let e = [...u];
		if (e.length % 2 == 1) {
			let t = e.reduce((e, t) => t.utiles > e.utiles ? t : e);
			e.splice(e.indexOf(t), 1), e.unshift(t);
		}
		s.push(J([Y(a.pieces), ...q(e.map((e) => o(e.area_id)), 6, "promotion", 2)]));
	}
	return t.aRanger.length && s.push(J([n({
		type: "custom:automatic-dashboard-apercu",
		sorte: "a-ranger",
		grid_options: {
			columns: "full",
			rows: 2
		}
	})])), X({
		path: "accueil",
		title: a.accueil,
		icon: "mdi:home-roof",
		badges: r,
		ouverture: n({
			type: "custom:automatic-dashboard-ouverture",
			page: "accueil"
		}),
		scene: s,
		cote: yi(e, t, n),
		coteApres: 1
	});
}
function xi(e, t, n, r) {
	let i = k(e), a = [];
	t.meteo && a.push(J([{
		type: "weather-forecast",
		entity: t.meteo,
		...gi(e),
		forecast_type: "hourly",
		show_current: !0,
		show_forecast: !0,
		forecast_slots: 9,
		grid_options: {
			columns: "full",
			rows: 4
		}
	}, ..._i(t, n, "full")])), a.push(J([n({ type: "custom:automatic-dashboard-points" })]));
	let o = t.utiles.filter((e) => e.principale || !e.appareil);
	if (o.length) {
		let e = o.slice(0, 6).map((e) => ui(e, "maison", { vertical: !1 })), r = t.aRanger.length ? [n({
			type: "custom:automatic-dashboard-apercu",
			sorte: "a-ranger",
			grid_options: {
				columns: "full",
				rows: 2
			}
		})] : [];
		a.push(J([
			Y(i.votreMaison),
			...q(e, 6, "promotion", 2),
			...r
		]));
	}
	a.push(J([n({
		type: "custom:automatic-dashboard-premiers-pas",
		grid_options: {
			columns: "full",
			rows: "auto"
		}
	})]));
	let s = [];
	return t.meteo && s.push({
		type: "weather-forecast",
		entity: t.meteo,
		...gi(e),
		forecast_type: "daily",
		show_current: !1,
		show_forecast: !0,
		grid_options: {
			columns: 12,
			rows: 4
		}
	}), s.push(vi(n)), s.push(n({
		type: "custom:automatic-dashboard-apercu",
		sorte: "ephemeride",
		grid_options: {
			columns: 12,
			rows: 2
		}
	})), X({
		path: "accueil",
		title: i.accueil,
		icon: "mdi:home-roof",
		badges: r,
		ouverture: n({
			type: "custom:automatic-dashboard-ouverture",
			page: "accueil"
		}),
		scene: a,
		cote: s,
		coteApres: 1
	});
}
// src/cartes/tablette.ts
var Si = (e, t = 23, n = 6) => {
	let r = e.getHours();
	return t === n ? !1 : t > n ? r >= t || r < n : r >= t && r < n;
}, Ci = 6e4, wi = "automatic_dashboard_kiosque", Ti = /* @__PURE__ */ new Set([
	"light",
	"switch",
	"fan",
	"input_boolean",
	"cover",
	"siren"
]);
function Ei(e, t) {
	let n = e.querySelector(t);
	if (n) return n;
	for (let n of e.querySelectorAll("*")) if (n.shadowRoot) {
		let e = Ei(n.shadowRoot, t);
		if (e) return e;
	}
	return null;
}
var Di = class extends U {
	static {
		this.properties = {
			_veille: { state: !0 },
			_minute: { state: !0 },
			_favoris: { state: !0 },
			_kiosque: { state: !0 }
		};
	}
	constructor() {
		super(), this._dernierGeste = Date.now(), this._demandeFavoris = !1, this._echap = (e) => {
			e.key === "Escape" && this._kiosque && this.basculerKiosque(!1);
		}, this._reveil = (e) => {
			this._dernierGeste = Date.now(), this._veille &&= (e.preventDefault(), e.stopPropagation(), !1);
		}, this._veille = !1, this._minute = -1, this._favoris = [], this._kiosque = localStorage.getItem(wi) === "1";
	}
	get reglagesTablette() {
		let e = (this._config?.reglages ?? {}).tablette ?? {};
		return {
			debut: e.debut_nuit ?? 23,
			fin: e.fin_nuit ?? 6,
			reveil: e.reveil
		};
	}
	appliquerKiosque(e) {
		let t = Ei(document, "hui-root")?.shadowRoot, n = t?.getElementById("automatic-dashboard-kiosque");
		if (e && t && !n) {
			let e = document.createElement("style");
			e.id = "automatic-dashboard-kiosque", e.textContent = ".header{display:none!important}#view{padding-top:0!important;min-height:100vh}", t.appendChild(e);
		} else e || n?.remove();
		this.dispatchEvent(new CustomEvent("hass-dock-sidebar", {
			detail: { dock: e ? "always_hidden" : "docked" },
			bubbles: !0,
			composed: !0
		}));
	}
	basculerKiosque(e) {
		this._kiosque = e, localStorage.setItem(wi, e ? "1" : "0"), this.appliquerKiosque(e), e ? document.documentElement.requestFullscreen?.().catch(() => void 0) : document.fullscreenElement && document.exitFullscreen?.().catch(() => void 0);
	}
	static {
		this.styles = [
			V,
			Lr,
			o`
    :host{height:100%}
    .ecran{position:relative;box-sizing:border-box;min-height:calc(100vh - var(--header-height, 56px) - 16px);display:grid;
      grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:clamp(20px,4vw,64px);padding:clamp(20px,4vw,56px);align-items:center}
    .heure{user-select:none;-webkit-user-select:none;cursor:default}
    .plein{position:absolute;top:14px;right:16px;display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px 0 10px;border-radius:18px;
      font-size:13.5px;font-weight:600;color:var(--secondary-text-color);background:var(--secondary-background-color)}
    .plein ha-icon{--mdc-icon-size:20px}
    .commandes{grid-column:1 / -1;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}
    .commande{display:flex;align-items:center;gap:14px;min-height:72px;padding:12px 18px;border-radius:20px;font-size:17px;font-weight:650;
      color:var(--primary-text-color);background:var(--ha-card-background, var(--card-background-color));border:1px solid var(--divider-color)}
    .commande ha-state-icon{--mdc-icon-size:28px;color:var(--secondary-text-color)}
    .commande.actif{background:color-mix(in srgb, var(--state-light-active-color, #E9A23B) 16%, var(--ha-card-background, var(--card-background-color)))}
    .commande.actif ha-state-icon{color:var(--state-light-active-color, #E9A23B)}
    .commande span{text-align:left;line-height:1.2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
    .heure{font-size:clamp(84px,14vw,200px);font-weight:700;letter-spacing:-.05em;line-height:.9;color:var(--primary-text-color);font-variant-numeric:tabular-nums}
    .date{margin-top:14px;font-size:clamp(20px,2.4vw,30px);font-weight:600;color:var(--secondary-text-color)}
    .phrase{display:flex;align-items:baseline;gap:14px;margin-top:clamp(20px,3vw,40px);font-size:clamp(20px,2.3vw,30px);line-height:1.35;
      color:var(--primary-text-color);max-width:28ch}
    .phrase::before{content:"";flex:none;width:14px;height:14px;border-radius:50%;background:var(--point);transform:translateY(-2px)}
    .chiffres{display:flex;flex-wrap:wrap;gap:clamp(18px,3vw,44px);margin-top:clamp(24px,3vw,44px)}
    .chiffre-tab{display:flex;flex-direction:column;gap:4px}
    .chiffre-tab b{font-size:clamp(28px,3.4vw,46px);font-weight:680;letter-spacing:-.02em;color:var(--primary-text-color);font-variant-numeric:tabular-nums}
    .chiffre-tab span{font-size:15px;font-weight:600;color:var(--secondary-text-color);display:flex;align-items:center;gap:6px}
    .chiffre-tab ha-icon{--mdc-icon-size:18px}
    .droite{display:grid;gap:18px;align-content:center}
    .ciel{align-self:start}
    .ciel .rond{width:min(100%,320px);height:auto}
    .ciel figcaption{font-size:14px}
    ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}
    li button{display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center;width:100%;padding:16px 18px;border-radius:18px;
      background:var(--ha-card-background, var(--card-background-color));border:1px solid var(--divider-color)}
    li .ico{width:48px;height:48px;border-radius:14px}
    li .ico ha-icon{--mdc-icon-size:26px}
    .n3 .ico{background:var(--automatic-dashboard-alerte-pale, color-mix(in srgb, var(--error-color, #B42318) 12%, transparent));color:var(--automatic-dashboard-alerte, var(--error-color, #B42318))}
    .n2 .ico{background:rgba(233,162,59,.16);color:var(--warning-color)}
    .n1 .ico{background:var(--automatic-dashboard-accent-pale, color-mix(in srgb, var(--primary-color) 12%, transparent));color:var(--primary-color)}
    .titre{font-size:19px;font-weight:650;color:var(--primary-text-color);line-height:1.25}
    .titre small{display:block;font-size:15px;font-weight:500;color:var(--secondary-text-color);margin-top:3px}
    .calme{font-size:20px;color:var(--secondary-text-color);display:flex;align-items:center;gap:12px}
    .calme ha-icon{--mdc-icon-size:30px;color:var(--automatic-dashboard-vert, var(--success-color, #1E6B47))}
    .veille{position:fixed;inset:0;z-index:100;background:#000;cursor:none;display:block}
    .veille .heure{position:absolute;color:#fff;opacity:.32;font-size:clamp(64px,10vw,140px);transition:left 2s, top 2s}
    @container (max-width: 760px){ .ecran{grid-template-columns:1fr;align-items:start} }
    @media (prefers-reduced-motion: reduce){ .veille .heure{transition:none} }
  `
		];
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: "auto"
		};
	}
	suivies(e) {
		return H([
			"sun.sun",
			e.meteo,
			e.puissanceReseau,
			...e.personnes,
			...e.temperaturesInterieures.flat(),
			...e.securite.map((e) => e.id),
			...e.alertes.map((e) => e.id),
			...e.piles.map((e) => e.id),
			...e.majs.map((e) => e.id),
			...e.lumieres.map((e) => e.id)
		]);
	}
	connectedCallback() {
		super.connectedCallback(), this._horloge = window.setInterval(() => {
			let e = /* @__PURE__ */ new Date();
			e.getMinutes() !== this._minute && (this._minute = e.getMinutes());
			let { debut: t, fin: n, reveil: r } = this.reglagesTablette;
			r && this.hass?.states[r]?.state === "on" && (this._dernierGeste = Date.now());
			let i = Si(e, t, n) && Date.now() - this._dernierGeste > Ci;
			i !== this._veille && (this._veille = i);
		}, 1e3);
		for (let e of [
			"pointerdown",
			"keydown",
			"touchstart"
		]) window.addEventListener(e, this._reveil, { capture: !0 });
		window.addEventListener("keydown", this._echap), this._kiosque && window.setTimeout(() => this.appliquerKiosque(!0), 300);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), window.clearInterval(this._horloge);
		for (let e of [
			"pointerdown",
			"keydown",
			"touchstart"
		]) window.removeEventListener(e, this._reveil, { capture: !0 });
		window.removeEventListener("keydown", this._echap), this._kiosque && this.appliquerKiosque(!1);
	}
	rendu(e, t) {
		let n = k(e), r = /* @__PURE__ */ new Date(), i = new Intl.DateTimeFormat(O(e), {
			hour: "2-digit",
			minute: "2-digit",
			hour12: ut(e)
		}).format(r);
		if (this._veille) {
			let e = r.getHours() * 60 + r.getMinutes(), t = 8 + e * 37 % 50, a = 10 + e * 53 % 60;
			return S`<div class="veille" role="button" aria-label=${n.reveiller}><span class="heure" ${D({
				left: `${t}%`,
				top: `${a}%`
			})}>${i}</span></div>`;
		}
		let a = N(new Intl.DateTimeFormat(O(e), {
			weekday: "long",
			day: "numeric",
			month: "long"
		}).format(r)), { phrase: o, point: s } = Ar(e, t), c = Nt(e, t), l = z(e, t), u = t.meteo ? e.states[t.meteo] : void 0, d = t.puissanceReseau ? Number.parseFloat(e.states[t.puissanceReseau]?.state ?? "") : NaN, f = Dr(e, t).visibles.slice(0, 4);
		this._demandeFavoris || (this._demandeFavoris = !0, pi(e, t, t.reglages).then((e) => this._favoris = e.slice(0, 6)));
		let p = this._favoris.filter((t) => e.states[t]);
		return S`<div class="ecran">
      ${this._kiosque ? T : S`<button class="plein" title=${n.pleinEcran} @click=${() => this.basculerKiosque(!0)}>
        <ha-icon icon="mdi:fullscreen"></ha-icon>${n.pleinEcran}</button>`}
      <div>
        <div class="heure" title=${this._kiosque ? n.sortirPleinEcran : ""}
          @pointerdown=${() => {
			this._appuiHeure = window.setTimeout(() => this.basculerKiosque(!1), 1e3);
		}}
          @pointerup=${() => window.clearTimeout(this._appuiHeure)} @pointerleave=${() => window.clearTimeout(this._appuiHeure)}>${i}</div>
        <div class="date">${a}</div>
        <div class="phrase" ${D({ "--point": s })}>${o}</div>
        <div class="chiffres">
          ${l === null ? T : S`<div class="chiffre-tab"><b>${j(e, l)}</b>
            <span><ha-icon icon=${ft(e, u).icone}></ha-icon>${n.dehors}</span></div>`}
          ${c === null ? T : S`<div class="chiffre-tab"><b>${j(e, c)}</b><span><ha-icon icon="mdi:home-thermometer-outline"></ha-icon>${N(n.dedans)}</span></div>`}
          ${Number.isNaN(d) ? T : S`<div class="chiffre-tab"><b>${A(e, d, 0)} W</b>
            <span><ha-icon icon="mdi:lightning-bolt-outline"></ha-icon>${n.energie}</span></div>`}
        </div>
      </div>
      <div class="droite">
        ${Hr(e, r)}
        ${f.length ? S`<ul>${f.map((e) => S`<li class="n${e.niveau}"><button @click=${() => e.entite && I(this, e.entite)}>
              <span class="ico"><ha-icon icon=${e.icone}></ha-icon></span><span class="titre">${e.titre}<small>${e.detail}</small></span></button></li>`)}</ul>` : S`<div class="calme"><ha-icon icon="mdi:check-circle-outline"></ha-icon>${n.toutVaBien}</div>`}
      </div>
      ${p.length ? S`<div class="commandes">${p.map((n) => this.commande(e, t, n))}</div>` : T}
    </div>`;
	}
	commande(e, t, n) {
		let r = e.states[n], i = n.split(".")[0];
		return S`<button class=${[
			"on",
			"open",
			"playing",
			"heat",
			"cool",
			"auto",
			"heat_cool"
		].includes(r.state) ? "commande actif" : "commande"} @click=${() => {
			Ti.has(i) && e.callService ? e.callService(i, "toggle", { entity_id: n }) : (i === "scene" || i === "script") && e.callService ? e.callService(i, "turn_on", { entity_id: n }) : I(this, n);
		}}>
      <ha-state-icon .hass=${e} .stateObj=${r}></ha-state-icon>
      <span>${t.noms[n] || L(e, n, t.noms)}</span></button>`;
	}
}, Oi = [
	["automatic-dashboard-ouverture", Ur],
	["automatic-dashboard-pastille", Wr],
	["automatic-dashboard-points", ai],
	["automatic-dashboard-piece", Gr],
	["automatic-dashboard-apercu", jn],
	["automatic-dashboard-premiers-pas", si],
	["automatic-dashboard-heros", ir],
	["automatic-dashboard-confort", Qn],
	["automatic-dashboard-a-ranger", Pn],
	["automatic-dashboard-meteo-france", _r],
	["automatic-dashboard-moment", br],
	["automatic-dashboard-bilan", qn],
	["automatic-dashboard-plan", Jr],
	["automatic-dashboard-tablette", Di],
	["automatic-dashboard-favori", rr],
	["automatic-dashboard-depart", er],
	["automatic-dashboard-mes-favoris", lr]
], ki = {
	"mdi:lightbulb-outline": "M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z",
	"mdi:toggle-switch-variant": "M18.4 1.6C18 1.2 17.5 1 17 1H7C6.5 1 6 1.2 5.6 1.6C5.2 2 5 2.5 5 3V21C5 21.5 5.2 22 5.6 22.4C6 22.8 6.5 23 7 23H17C17.5 23 18 22.8 18.4 22.4C18.8 22 19 21.5 19 21V3C19 2.5 18.8 2 18.4 1.6M16 7C16 7.6 15.6 8 15 8H9C8.4 8 8 7.6 8 7V5C8 4.4 8.4 4 9 4H15C15.6 4 16 4.4 16 5V7Z",
	"mdi:fan": "M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",
	"mdi:window-shutter": "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V15M8 18H16V20H8V18Z",
	"mdi:thermostat": "M16.95,16.95L14.83,14.83C15.55,14.1 16,13.1 16,12C16,11.26 15.79,10.57 15.43,10L17.6,7.81C18.5,9 19,10.43 19,12C19,13.93 18.22,15.68 16.95,16.95M12,5C13.57,5 15,5.5 16.19,6.4L14,8.56C13.43,8.21 12.74,8 12,8A4,4 0 0,0 8,12C8,13.1 8.45,14.1 9.17,14.83L7.05,16.95C5.78,15.68 5,13.93 5,12A7,7 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",
	"mdi:eye-outline": "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",
	"mdi:checkbox-blank-circle-outline": "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
	"mdi:lock-outline": "M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",
	"mdi:shield-home-outline": "M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14",
	"mdi:speaker": "M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z",
	"mdi:robot-vacuum": "M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6A6,6 0 0,1 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12A6,6 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z",
	"mdi:cctv": "M6.03 12.03L8.03 15.5L5.5 18.68L2 12.62L6.03 12.03M17 18V15.29C17.88 14.9 18.5 14.03 18.5 13C18.5 12.43 18.3 11.9 17.97 11.5L19.94 10.35C20.95 9.76 21.3 8.47 20.71 7.46L19.33 5.06C18.74 4.05 17.45 3.7 16.44 4.28L8.31 9C7.36 9.53 7.03 10.75 7.58 11.71L9.08 14.31C9.63 15.26 10.86 15.59 11.81 15.04L13.69 13.96C13.94 14.55 14.41 15.03 15 15.29V18C15 19.1 15.9 20 17 20H22V18H17Z",
	"mdi:devices": "M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z",
	"mdi:chevron-right": "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
	"mdi:check-circle": "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",
	"mdi:home-thermometer-outline": "M19 8C20.11 8 21 8.9 21 10V16.76C21.61 17.31 22 18.11 22 19C22 20.66 20.66 22 19 22C17.34 22 16 20.66 16 19C16 18.11 16.39 17.31 17 16.76V10C17 8.9 17.9 8 19 8M19 9C18.45 9 18 9.45 18 10V11H20V10C20 9.45 19.55 9 19 9M12 5.69L7 10.19V18H14.1L14 19L14.1 20H5V12H2L12 3L16.4 6.96C15.89 7.4 15.5 7.97 15.25 8.61L12 5.69Z",
	"mdi:lightning-bolt-outline": "M11 9.47V11H14.76L13 14.53V13H9.24L11 9.47M13 1L6 15H11V23L18 9H13V1Z",
	"mdi:water-percent": "M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",
	"mdi:tray-arrow-down": "M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z",
	"mdi:weather-sunset-up": "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z",
	"mdi:weather-sunset-down": "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,20.71L15.82,17.6C16.21,17.21 16.21,16.57 15.82,16.18C15.43,15.79 14.8,15.79 14.41,16.18L12,18.59L9.59,16.18C9.2,15.79 8.57,15.79 8.18,16.18C7.79,16.57 7.79,17.21 8.18,17.6L11.29,20.71C11.5,20.9 11.74,21 12,21C12.26,21 12.5,20.9 12.71,20.71Z",
	"mdi:calendar-star": "M19 19H5V8H19M16 1V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3H18V1M10.88 12H7.27L10.19 14.11L9.08 17.56L12 15.43L14.92 17.56L13.8 14.12L16.72 12H13.12L12 8.56L10.88 12Z",
	"mdi:moon-waxing-crescent": "M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z",
	"mdi:white-balance-sunny": "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13",
	"mdi:radiator": "M7.95,3L6.53,5.19L7.95,7.4H7.94L5.95,10.5L4.22,9.6L5.64,7.39L4.22,5.19L6.22,2.09L7.95,3M13.95,2.89L12.53,5.1L13.95,7.3L13.94,7.31L11.95,10.4L10.22,9.5L11.64,7.3L10.22,5.1L12.22,2L13.95,2.89M20,2.89L18.56,5.1L20,7.3V7.31L18,10.4L16.25,9.5L17.67,7.3L16.25,5.1L18.25,2L20,2.89M2,22V14A2,2 0 0,1 4,12H20A2,2 0 0,1 22,14V22H20V20H4V22H2M6,14A1,1 0 0,0 5,15V17A1,1 0 0,0 6,18A1,1 0 0,0 7,17V15A1,1 0 0,0 6,14M10,14A1,1 0 0,0 9,15V17A1,1 0 0,0 10,18A1,1 0 0,0 11,17V15A1,1 0 0,0 10,14M14,14A1,1 0 0,0 13,15V17A1,1 0 0,0 14,18A1,1 0 0,0 15,17V15A1,1 0 0,0 14,14M18,14A1,1 0 0,0 17,15V17A1,1 0 0,0 18,18A1,1 0 0,0 19,17V15A1,1 0 0,0 18,14Z",
	"mdi:snowflake": "M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z",
	"mdi:lightbulb-group-outline": "M7 19A2.93 2.93 0 0 0 7.17 20H6A1 1 0 0 1 5 19V18H7M10 19A1 1 0 0 0 11 20H13A1 1 0 0 0 14 19V18H10M4 16A1 1 0 0 0 5 17H7V14.88A6.92 6.92 0 0 1 5 10A6.79 6.79 0 0 1 5.68 7A4 4 0 0 0 4 14.45M17 19A2.93 2.93 0 0 1 16.83 20H18A1 1 0 0 0 19 19V18H17M17 10A5 5 0 0 1 15 14V16A1 1 0 0 1 14 17H10A1 1 0 0 1 9 16V14A5 5 0 1 1 17 10M15 10A3 3 0 1 0 11 12.82V15H13V12.82A3 3 0 0 0 15 10M18.32 7A6.79 6.79 0 0 1 19 10A6.92 6.92 0 0 1 17 14.88V17H19A1 1 0 0 0 20 16V14.45A4 4 0 0 0 18.32 7Z",
	"mdi:lightbulb-off-outline": "M12,2C9.76,2 7.78,3.05 6.5,4.68L7.93,6.11C8.84,4.84 10.32,4 12,4A5,5 0 0,1 17,9C17,10.68 16.16,12.16 14.89,13.06L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M7.23,10.5L12.73,16H10V13.58C8.68,13 7.66,11.88 7.23,10.5M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z",
	"mdi:lock-open-variant-outline": "M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17S8 16.11 8 15 8.9 13 10 13M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V10C18 8.9 17.1 8 16 8H15V6C15 4.34 16.34 3 18 3S21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M16 10V20H4V10H16Z",
	"mdi:window-shutter-open": "M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9Z",
	"mdi:shield-off-outline": "M1,4.27L3,6.27V11C3,16.55 6.84,21.74 12,23C13.87,22.54 15.57,21.56 16.97,20.24L19.23,22.5L20.5,21.22L2.28,3L1,4.27M12,21C8.25,20 5,15.54 5,11.22V8.27L15.59,18.86C14.53,19.89 13.3,20.65 12,21M21,5V11C21,13.28 20.35,15.5 19.23,17.4L17.77,15.95C18.54,14.5 19,12.84 19,11.22V6.3L12,3.18L7.16,5.34L5.65,3.82L12,1L21,5Z",
	"mdi:shield-lock-outline": "M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M14.8,11V9.5C14.8,8.1 13.4,7 12,7C10.6,7 9.2,8.1 9.2,9.5V11C8.6,11 8,11.6 8,12.2V15.7C8,16.4 8.6,17 9.2,17H14.7C15.4,17 16,16.4 16,15.8V12.3C16,11.6 15.4,11 14.8,11M13.5,11H10.5V9.5C10.5,8.7 11.2,8.2 12,8.2C12.8,8.2 13.5,8.7 13.5,9.5V11Z",
	"mdi:window-open-variant": "M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z",
	"mdi:check-circle-outline": "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z",
	"mdi:water-alert": "M10 3.25C10 3.25 16 10 16 14C16 17.31 13.31 20 10 20S4 17.31 4 14C4 10 10 3.25 10 3.25M20 7V13H18V7H20M18 17H20V15H18V17Z",
	"mdi:package-up": "M20.54,5.23C20.83,5.57 21,6 21,6.5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V6.5C3,6 3.17,5.57 3.46,5.23L4.84,3.55C5.12,3.21 5.53,3 6,3H18C18.47,3 18.88,3.21 19.15,3.55L20.54,5.23M5.12,5H18.87L17.93,4H5.93L5.12,5M12,9.5L6.5,15H10V17H14V15H17.5L12,9.5Z",
	"mdi:check-decagram-outline": "M23 12L20.6 9.2L20.9 5.5L17.3 4.7L15.4 1.5L12 3L8.6 1.5L6.7 4.7L3.1 5.5L3.4 9.2L1 12L3.4 14.8L3.1 18.5L6.7 19.3L8.6 22.5L12 21L15.4 22.5L17.3 19.3L20.9 18.5L20.6 14.8L23 12M18.7 16.9L16 17.5L14.6 19.9L12 18.8L9.4 19.9L8 17.5L5.3 16.9L5.5 14.1L3.7 12L5.5 9.9L5.3 7.1L8 6.5L9.4 4.1L12 5.2L14.6 4.1L16 6.5L18.7 7.1L18.5 9.9L20.3 12L18.5 14.1L18.7 16.9M16.6 7.6L18 9L10 17L6 13L7.4 11.6L10 14.2L16.6 7.6Z",
	"mdi:backup-restore": "M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z",
	"mdi:sofa-outline": "M21 9V7C21 5.35 19.65 4 18 4H14C13.23 4 12.53 4.3 12 4.78C11.47 4.3 10.77 4 10 4H6C4.35 4 3 5.35 3 7V9C1.35 9 0 10.35 0 12V17C0 18.65 1.35 20 3 20V22H5V20H19V22H21V20C22.65 20 24 18.65 24 17V12C24 10.35 22.65 9 21 9M14 6H18C18.55 6 19 6.45 19 7V9.78C18.39 10.33 18 11.12 18 12V14H13V7C13 6.45 13.45 6 14 6M5 7C5 6.45 5.45 6 6 6H10C10.55 6 11 6.45 11 7V14H6V12C6 11.12 5.61 10.33 5 9.78V7M22 17C22 17.55 21.55 18 21 18H3C2.45 18 2 17.55 2 17V12C2 11.45 2.45 11 3 11S4 11.45 4 12V16H20V12C20 11.45 20.45 11 21 11S22 11.45 22 12V17Z",
	"mdi:plus": "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
	"mdi:arrow-up": "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
	"mdi:arrow-down": "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",
	"mdi:close": "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
	"mdi:star": "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
	"mdi:star-outline": "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
	"mdi:alert-outline": "M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",
	"mdi:open-in-new": "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",
	"mdi:umbrella-closed-outline": "M12 2C12.4 2 12.8 2.2 12.9 2.6L17.5 15H13V19C13 20.7 11.7 22 10 22S7 20.7 7 19V18H9V19C9 19.6 9.4 20 10 20C10.6 20 11 19.6 11 19V15H6.5L11.1 2.6C11.2 2.2 11.6 2 12 2M12 5.9L9.4 13H14.7L12 5.9Z",
	"mdi:umbrella-outline": "M12,4C8.9,4 6.18,6.03 5.3,9H18.7C17.82,6.04 15.09,4 12,4M12,2A9,9 0 0,1 21,11H13V19A3,3 0 0,1 10,22A3,3 0 0,1 7,19V18H9V19A1,1 0 0,0 10,20A1,1 0 0,0 11,19V11H3A9,9 0 0,1 12,2Z",
	"mdi:dishwasher": "M18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2M10,4A1,1 0 0,1 11,5A1,1 0 0,1 10,6A1,1 0 0,1 9,5A1,1 0 0,1 10,4M7,4A1,1 0 0,1 8,5A1,1 0 0,1 7,6A1,1 0 0,1 6,5A1,1 0 0,1 7,4M18,20H6V8H18V20M14.67,15.33C14.69,16.03 14.41,16.71 13.91,17.21C12.86,18.26 11.15,18.27 10.09,17.21C9.59,16.71 9.31,16.03 9.33,15.33C9.4,14.62 9.63,13.94 10,13.33C10.37,12.5 10.81,11.73 11.33,11L12,10C13.79,12.59 14.67,14.36 14.67,15.33",
	"mdi:tumble-dryer": "M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8M8.11,10.5H10C9.76,11.88 10,12.67 10.58,13.29C11.68,14.36 12.16,15.71 11.89,17.5H10C10.24,16.12 10,15.33 9.42,14.71C8.32,13.64 7.85,12.29 8.11,10.5M12.11,10.5H14C13.76,11.88 14,12.67 14.58,13.29C15.68,14.36 16.16,15.71 15.89,17.5H14C14.24,16.12 14,15.33 13.42,14.71C12.32,13.64 11.85,12.29 12.11,10.5Z",
	"mdi:washing-machine": "M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z",
	"mdi:pause": "M14,19H18V5H14M6,19H10V5H6V19Z",
	"mdi:play-circle-outline": "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z",
	"mdi:home-account": "M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z",
	"mdi:home-export-outline": "M24 13L20 17V14H11V12H20V9L24 13M4 20V12H1L11 3L18 9.3V10H15.79L11 5.69L6 10.19V18H16V16H18V20H4Z",
	"mdi:calendar-clock": "M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z",
	"mdi:robot-mower": "M1 14V5H13C18.5 5 23 9.5 23 15V17H20.83C20.42 18.17 19.31 19 18 19C16.69 19 15.58 18.17 15.17 17H10C9.09 18.21 7.64 19 6 19C3.24 19 1 16.76 1 14M6 11C4.34 11 3 12.34 3 14C3 15.66 4.34 17 6 17C7.66 17 9 15.66 9 14C9 12.34 7.66 11 6 11M15 10V12H20.25C19.92 11.27 19.5 10.6 19 10H15Z",
	"mdi:progress-clock": "M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z",
	"mdi:timer-outline": "M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z",
	"mdi:timer-pause-outline": "M21 13.35C20.36 13.13 19.7 13 19 13C19 9.13 15.87 6 12 6S5 9.13 5 13 8.13 20 12 20C12.37 20 12.72 19.96 13.08 19.91C13.18 20.6 13.4 21.25 13.71 21.83C13.16 21.94 12.59 22 12 22C7.03 22 3 17.97 3 13S7.03 4 12 4C14.12 4 16.07 4.74 17.62 6L19.04 4.56C19.55 5 20 5.46 20.45 5.97L19.03 7.39C20.26 8.93 21 10.88 21 13C21 13.12 21 13.23 21 13.35M11 14H13V8H11V14M15 1H9V3H15V1M19.63 16.5V21.5H21.5V16.5H19.63M16.5 21.5H18.38V16.5H16.5V21.5Z",
	"mdi:cart-outline": "M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z",
	"mdi:circle-small": "M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z",
	"mdi:shield-alert-outline": "M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,7H13V13H11V7M11,15H13V17H11V15Z",
	"mdi:server-outline": "M2 4.6V9.4C2 10.3 2.5 11 3.2 11H20.9C21.5 11 22.1 10.3 22.1 9.4V4.6C22 3.7 21.5 3 20.8 3H3.2C2.5 3 2 3.7 2 4.6M10 8V6H9V8H10M5 8H7V6H5V8M20 9H4V5H20V9M2 14.6V19.4C2 20.3 2.5 21 3.2 21H20.9C21.5 21 22.1 20.3 22.1 19.4V14.6C22.1 13.7 21.6 13 20.9 13H3.2C2.5 13 2 13.7 2 14.6M10 18V16H9V18H10M5 18H7V16H5V18M20 19H4V15H20V19Z",
	"mdi:air-filter": "M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",
	"mdi:car-electric-outline": "M18.92 2C18.72 1.42 18.16 1 17.5 1H6.5C5.84 1 5.29 1.42 5.08 2L3 8V16C3 16.55 3.45 17 4 17H5C5.55 17 6 16.55 6 16V15H18V16C18 16.55 18.45 17 19 17H20C20.55 17 21 16.55 21 16V8L18.92 2M6.85 3H17.14L18.22 6.11H5.77L6.85 3M19 13H5V8H19V13M7.5 9C8.33 9 9 9.67 9 10.5S8.33 12 7.5 12 6 11.33 6 10.5 6.67 9 7.5 9M16.5 9C17.33 9 18 9.67 18 10.5S17.33 12 16.5 12C15.67 12 15 11.33 15 10.5S15.67 9 16.5 9M7 20H11V18L17 21H13V23L7 20Z",
	"mdi:tree-outline": "M10.5,3C8,3 6,5 6,7.5C6,8.11 6.13,8.71 6.37,9.27C5.5,10.12 5,11.28 5,12.5C5,15 7,17 9.5,17C10,17 10.5,16.89 11,16.72V21H13V15.77C13.5,15.91 14,16 14.5,16A5.5,5.5 0 0,0 20,10.5A5.5,5.5 0 0,0 14.5,5C14.41,5 14.33,5 14.24,5C13.41,3.76 12,3 10.5,3M10.5,5C11.82,5 12.91,6.03 13,7.35C13.46,7.12 14,7 14.5,7A3.5,3.5 0 0,1 18,10.5A3.5,3.5 0 0,1 14.5,14C13.54,14 12.63,13.61 11.96,12.91C11.76,14.12 10.72,15 9.5,15A2.5,2.5 0 0,1 7,12.5C7,11.12 7.8,10.54 9,9.79C8.2,8.76 8,8.16 8,7.5A2.5,2.5 0 0,1 10.5,5Z",
	"mdi:exit-run": "M13.34,8.17C12.41,8.17 11.65,7.4 11.65,6.47A1.69,1.69 0 0,1 13.34,4.78C14.28,4.78 15.04,5.54 15.04,6.47C15.04,7.4 14.28,8.17 13.34,8.17M10.3,19.93L4.37,18.75L4.71,17.05L8.86,17.9L10.21,11.04L8.69,11.64V14.5H7V10.54L11.4,8.67L12.07,8.59C12.67,8.59 13.17,8.93 13.5,9.44L14.36,10.79C15.04,12 16.39,12.82 18,12.82V14.5C16.14,14.5 14.44,13.67 13.34,12.4L12.84,14.94L14.61,16.63V23H12.92V17.9L11.14,16.21L10.3,19.93M21,23H19V3H6V16.11L4,15.69V1H21V23M6,23H4V19.78L6,20.2V23Z",
	"mdi:lightbulb-on": "M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z",
	"mdi:music": "M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z",
	"mdi:dots-horizontal": "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z",
	"mdi:eye-off-outline": "M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z",
	"mdi:bell-check-outline": "M17.75 21.16L15 18.16L16.16 17L17.75 18.59L21.34 15L22.5 16.41L17.75 21.16M10 21H12.8C13.04 21.41 13.33 21.79 13.65 22.13C13.29 22.66 12.69 23 12 23C10.9 23 10 22.11 10 21M3 20V19L5 17V11C5 7.9 7.03 5.18 10 4.29V4C10 2.9 10.9 2 12 2C13.11 2 14 2.9 14 4V4.29C16.97 5.18 19 7.9 19 11V12.08L18 12L17 12.08V11C17 8.24 14.76 6 12 6C9.24 6 7 8.24 7 11V18H12C12 18.7 12.12 19.37 12.34 20H3Z",
	"mdi:bell-plus-outline": "M12 2C10.9 2 10 2.9 10 4C10 4.1 10 4.19 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H12.35C12.12 19.36 12 18.68 12 18H7V11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11V12.09C17.33 12.03 17.67 12 18 12C18.34 12 18.67 12.03 19 12.09V11C19 7.82 16.88 5.14 14 4.29C14 4.19 14 4.1 14 4C14 2.9 13.11 2 12 2M17 14V17H14V19H17V22H19V19H22V17H19V14M10 21C10 22.11 10.9 23 12 23C12.66 23 13.28 22.67 13.65 22.13C13.33 21.79 13.05 21.41 12.81 21Z",
	"mdi:check": "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
	"mdi:fullscreen": "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z",
	"mdi:bookmark-outline": "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z",
	"mdi:window-closed-variant": "M21 20V2H3V20H1V23H23V20M19 4V11H13V4M5 4H11V11H5M5 20V13H11V20M13 20V13H19V20Z",
	"mdi:door-open": "M12,3C10.89,3 10,3.89 10,5H3V19H2V21H22V19H21V5C21,3.89 20.11,3 19,3H12M12,5H19V19H12V5M5,11H7V13H5V11Z",
	"mdi:door-closed": "M16,11H18V13H16V11M12,3H19C20.11,3 21,3.89 21,5V19H22V21H2V19H10V5C10,3.89 10.89,3 12,3M12,5V19H19V5H12Z",
	"mdi:garage-open": "M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12Z",
	"mdi:garage": "M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z",
	"mdi:water-off": "M20.84 22.73L16.29 18.18C15.2 19.3 13.69 20 12 20C8.69 20 6 17.31 6 14C6 12.67 6.67 11.03 7.55 9.44L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M18 14C18 10 12 3.25 12 3.25S10.84 4.55 9.55 6.35L17.95 14.75C18 14.5 18 14.25 18 14Z",
	"mdi:smoke-detector-variant-alert": "M10 4C14.4 4 18 7.6 18 12S14.4 20 10 20 2 16.4 2 12 5.6 4 10 4M10 2C4.5 2 0 6.5 0 12S4.5 22 10 22 20 17.5 20 12 15.5 2 10 2M10 11C9.4 11 9 11.4 9 12S9.4 13 10 13 11 12.6 11 12 10.6 11 10 11M8.7 9.3C9.1 9.1 9.5 9 10 9S10.9 9.1 11.3 9.3L12 8.6C11.4 8.2 10.7 8 10 8S8.6 8.2 8 8.6L8.7 9.3M13 12C13 12.5 12.9 12.9 12.7 13.3L13.4 14C13.8 13.4 14 12.7 14 12S13.8 10.6 13.4 10L12.7 10.7C12.9 11.1 13 11.5 13 12M7 12C7 11.5 7.1 11.1 7.3 10.7L6.6 10C6.2 10.6 6 11.3 6 12S6.2 13.4 6.6 14L7.3 13.3C7.1 12.9 7 12.5 7 12M11.3 14.7C10.9 14.9 10.5 15 10 15S9.1 14.9 8.7 14.7L8 15.4C8.6 15.8 9.3 16 10 16S11.4 15.8 12 15.4L11.3 14.7M14.9 8.5L14.2 9.2C14.7 10 15 11 15 12S14.7 14 14.2 14.8L14.9 15.5C15.6 14.5 16 13.3 16 12S15.6 9.5 14.9 8.5M7.2 7.8C8 7.3 9 7 10 7S12 7.3 12.8 7.8L13.5 7.1C12.5 6.4 11.3 6 10 6S7.5 6.4 6.5 7.1L7.2 7.8M12.8 16.2C12 16.7 11 17 10 17S8 16.7 7.2 16.2L6.5 16.9C7.5 17.6 8.7 18 10 18S12.5 17.6 13.5 16.9L12.8 16.2M5.8 14.8C5.3 14 5 13 5 12S5.3 10 5.8 9.2L5.1 8.5C4.4 9.5 4 10.7 4 12S4.4 14.5 5.1 15.5L5.8 14.8M24 7H22V13H24V8M24 15H22V17H24V15Z",
	"mdi:smoke-detector-variant": "M12 4C16.41 4 20 7.59 20 12S16.41 20 12 20 4 16.41 4 12 7.59 4 12 4M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 11C11.45 11 11 11.45 11 12S11.45 13 12 13 13 12.55 13 12 12.55 11 12 11M10.72 9.3C11.11 9.11 11.54 9 12 9S12.89 9.11 13.29 9.3L14 8.57C13.43 8.22 12.74 8 12 8S10.58 8.22 10 8.57L10.72 9.3M15 12C15 12.46 14.89 12.89 14.7 13.29L15.43 14C15.79 13.43 16 12.74 16 12S15.79 10.58 15.43 10L14.7 10.72C14.89 11.11 15 11.54 15 12M9 12C9 11.54 9.11 11.11 9.3 10.72L8.57 10C8.22 10.58 8 11.26 8 12S8.22 13.43 8.57 14L9.3 13.29C9.11 12.89 9 12.46 9 12M13.29 14.7C12.89 14.89 12.46 15 12 15S11.11 14.89 10.72 14.7L10 15.43C10.58 15.79 11.26 16 12 16S13.43 15.79 14 15.43L13.29 14.7M16.89 8.53L16.17 9.25C16.69 10.04 17 11 17 12S16.69 13.96 16.17 14.75L16.89 15.47C17.59 14.5 18 13.3 18 12S17.59 9.5 16.89 8.53M9.25 7.83C10.04 7.31 11 7 12 7S13.96 7.31 14.75 7.83L15.47 7.11C14.5 6.42 13.3 6 12 6S9.5 6.42 8.53 7.11L9.25 7.83M14.75 16.17C13.96 16.69 13 17 12 17S10.04 16.69 9.25 16.17L8.53 16.89C9.5 17.59 10.7 18 12 18S14.5 17.59 15.47 16.89L14.75 16.17M7.83 14.75C7.31 13.96 7 13 7 12S7.31 10.04 7.83 9.25L7.11 8.53C6.42 9.5 6 10.7 6 12S6.42 14.5 7.11 15.47L7.83 14.75Z",
	"mdi:motion-sensor": "M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",
	"mdi:motion-sensor-off": "M11.4 8.2H15V10H13.2L11.4 8.2M19.67 1H18.33C18.33 3.58 20.42 5.67 23 5.67V4.33C21.16 4.33 19.67 2.84 19.67 1M21 1C21 2.11 21.9 3 23 3V1H21M17 1H15.67C15.67 5.05 18.95 8.33 23 8.33V7C19.69 7 17 4.31 17 1M10 3.8C11 3.8 11.8 3 11.8 2S11 .2 10 .2 8.2 1 8.2 2 9 3.8 10 3.8M2.39 1.73L1.11 3L3.46 5.35L2 5.8V11H3.8V7.33L5.05 6.94L5.68 7.57L2 22H3.8L6.67 13.89L9 17V22H10.8V15.59L8.31 11.05L8.5 10.37L20.84 22.73L22.11 21.46L2.39 1.73M9.38 4.87C9.08 4.37 8.54 4.03 7.92 4.03C7.75 4.03 7.58 4.06 7.42 4.11L7.34 4.14L11.35 8.15L9.38 4.87Z",
	"mdi:home-outline": "M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22",
	"mdi:power-plug": "M16,7V3H14V7H10V3H8V7H8C7,7 6,8 6,9V14.5L9.5,18V21H14.5V18L18,14.5V9C18,8 17,7 16,7Z",
	"mdi:power-plug-off": "M20.84 22.73L15.31 17.2L14.5 18V21H9.5V18L6 14.5V9C6 8.7 6.1 8.41 6.25 8.14L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M18 14.5V9C18 8 17 7 16 7V3H14V7H10.2L17.85 14.65L18 14.5M10 3H8V4.8L10 6.8V3Z",
	"mdi:thermometer": "M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",
	"mdi:flash": "M7,2V13H10V22L17,10H13L17,2H7Z",
	"mdi:lightning-bolt": "M11 15H6L13 1V9H18L11 23V15Z",
	"mdi:battery-60": "M16,12H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z",
	"mdi:molecule-co2": "M5,7A2,2 0 0,0 3,9V15A2,2 0 0,0 5,17H8V15H5V9H8V7H5M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9M16,10.5V12H19V13.5H17.5A1.5,1.5 0 0,0 16,15V18H20.5V16.5H17.5V15H19A1.5,1.5 0 0,0 20.5,13.5V12A1.5,1.5 0 0,0 19,10.5H16Z",
	"mdi:lightbulb": "M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",
	"mdi:toggle-switch-variant-off": "M5.6 1.6C6 1.2 6.5 1 7 1H17C17.5 1 18 1.2 18.4 1.6C18.8 2 19 2.5 19 3V21C19 21.5 18.8 22 18.4 22.4C18 22.8 17.5 23 17 23H7C6.5 23 6 22.8 5.6 22.4C5.2 22 5 21.5 5 21V3C5 2.5 5.2 2 5.6 1.6M8 3C7.4 3 7 3.4 7 4V20C7 20.6 7.4 21 8 21H16C16.6 21 17 20.6 17 20V4C17 3.4 16.6 3 16 3H8M8 17C8 16.4 8.4 16 9 16H15C15.6 16 16 16.4 16 17V19C16 19.6 15.6 20 15 20H9C8.4 20 8 19.6 8 19V17Z",
	"mdi:fan-off": "M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z",
	"mdi:lock-open-variant": "M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z",
	"mdi:lock": "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",
	"mdi:speaker-play": "M16 15V21L21 18L16 15M12.28 19.81C11.87 19.92 11.45 20 11 20C8.24 20 6 17.76 6 15S8.24 10 11 10C12.89 10 14.5 11.06 15.37 12.61C16.16 12.23 17.06 12 18 12V4C18 2.89 17.1 2 16 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H13.54C13 21.37 12.54 20.63 12.28 19.81M11 4C12.11 4 13 4.89 13 6S12.11 8 11 8C9.89 8 9 7.1 9 6C9 4.89 9.89 4 11 4M13.74 13.78C12.7 14.82 12.06 16.24 12 17.81C11.69 17.93 11.36 18 11 18C9.34 18 8 16.66 8 15S9.34 12 11 12C12.22 12 13.27 12.73 13.74 13.78Z",
	"mdi:shield-home": "M11,13H13V16H16V11H18L12,6L6,11H8V16H11V13M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1Z",
	"mdi:account": "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",
	"mdi:account-outline": "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z",
	"mdi:weather-partly-cloudy": "M12.74,5.47C15.1,6.5 16.35,9.03 15.92,11.46C17.19,12.56 18,14.19 18,16V16.17C18.31,16.06 18.65,16 19,16A3,3 0 0,1 22,19A3,3 0 0,1 19,22H6A4,4 0 0,1 2,18A4,4 0 0,1 6,14H6.27C5,12.45 4.6,10.24 5.5,8.26C6.72,5.5 9.97,4.24 12.74,5.47M11.93,7.3C10.16,6.5 8.09,7.31 7.31,9.07C6.85,10.09 6.93,11.22 7.41,12.13C8.5,10.83 10.16,10 12,10C12.7,10 13.38,10.12 14,10.34C13.94,9.06 13.18,7.86 11.93,7.3M13.55,3.64C13,3.4 12.45,3.23 11.88,3.12L14.37,1.82L15.27,4.71C14.76,4.29 14.19,3.93 13.55,3.64M6.09,4.44C5.6,4.79 5.17,5.19 4.8,5.63L4.91,2.82L7.87,3.5C7.25,3.71 6.65,4.03 6.09,4.44M18,9.71C17.91,9.12 17.78,8.55 17.59,8L19.97,9.5L17.92,11.73C18.03,11.08 18.05,10.4 18,9.71M3.04,11.3C3.11,11.9 3.24,12.47 3.43,13L1.06,11.5L3.1,9.28C3,9.93 2.97,10.61 3.04,11.3M19,18H16V16A4,4 0 0,0 12,12A4,4 0 0,0 8,16H6A2,2 0 0,0 4,18A2,2 0 0,0 6,20H19A1,1 0 0,0 20,19A1,1 0 0,0 19,18Z",
	"mdi:package": "M5.12,5H18.87L17.93,4H5.93L5.12,5M20.54,5.23C20.83,5.57 21,6 21,6.5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V6.5C3,6 3.17,5.57 3.46,5.23L4.84,3.55C5.12,3.21 5.53,3 6,3H18C18.47,3 18.88,3.21 19.15,3.55L20.54,5.23M6,18H12V15H6V18Z",
	"mdi:water-boiler": "M8 2C6.89 2 6 2.89 6 4V16C6 17.11 6.89 18 8 18H9V20H6V22H9C10.11 22 11 21.11 11 20V18H13V20C13 21.11 13.89 22 15 22H18V20H15V18H16C17.11 18 18 17.11 18 16V4C18 2.89 17.11 2 16 2H8M12 4.97A2 2 0 0 1 14 6.97A2 2 0 0 1 12 8.97A2 2 0 0 1 10 6.97A2 2 0 0 1 12 4.97M10 14.5H14V16H10V14.5Z",
	"mdi:water-boiler-off": "M10 6.82L6.25 3.05C6.59 2.42 7.24 2 8 2H16C17.11 2 18 2.89 18 4V14.8L12.16 8.96C13.19 8.87 14 8 14 6.97C14 5.87 13.11 4.97 12 4.97C10.95 4.97 10.1 5.78 10 6.82M15 18V20H18V22H15C13.89 22 13 21.11 13 20V18H11V20C11 21.11 10.11 22 9 22H6V20H9V18H8C6.89 18 6 17.11 6 16V7.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73L16.1 18C16.06 18 16.03 18 16 18H15M14 16V15.89L12.61 14.5H10V16H14Z",
	"mdi:palette": "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",
	"mdi:script-text": "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z",
	"mdi:checkbox-marked-circle": "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
	"mdi:radiobox-blank": "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
	"mdi:eye": "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",
	"mdi:calendar": "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",
	"mdi:clipboard-list": "M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 8H9V12H8V9H7V8M10 17V18H7V17.08L9 15H7V14H9.25C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10M11 4C11 3.45 11.45 3 12 3S13 3.45 13 4 12.55 5 12 5 11 4.55 11 4M17 17H12V15H17V17M17 11H12V9H17V11Z",
	"mdi:weather-night": "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",
	"mdi:shield-lock": "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z",
	"mdi:minus": "M19,13H5V11H19V13Z",
	"mdi:arrow-left": "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
	"mdi:information-outline": "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",
	"mdi:drag-vertical": "M9,3H11V5H9V3M13,3H15V5H13V3M9,7H11V9H9V7M13,7H15V9H13V7M9,11H11V13H9V11M13,11H15V13H13V11M9,15H11V17H9V15M13,15H15V17H13V15M9,19H11V21H9V19M13,19H15V21H13V19Z",
	"mdi:label-outline": "M16,17H5V7H16L19.55,12M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z",
	"mdi:pin-outline": "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z",
	"mdi:arrow-right": "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z",
	"mdi:cellphone": "M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z",
	"mdi:bell-outline": "M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z",
	"mdi:download": "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z",
	"mdi:content-copy": "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",
	"mdi:home-roof": "M19 16H22L12 7L2 16H5L12 9.69L19 16M7 8.81V7H4V11.5L7 8.81Z",
	"mdi:lightbulb-group-off-outline": "M22.11 21.46L2.39 1.73L1.11 3L5.2 7.09C3.25 7.5 1.85 9.27 2 11.31C2.12 12.62 2.86 13.79 4 14.45V16C4 16.55 4.45 17 5 17H7V14.88C5.72 13.58 5 11.83 5 10C5 9.11 5.18 8.23 5.5 7.4L7.12 9C6.74 10.84 7.4 12.8 9 14V16C9 16.55 9.45 17 10 17H14C14.31 17 14.57 16.86 14.75 16.64L17 18.89V19C17 19.34 16.94 19.68 16.83 20H18C18.03 20 18.06 20 18.09 20L20.84 22.73L22.11 21.46M9.23 11.12L10.87 12.76C10.11 12.46 9.53 11.86 9.23 11.12M13 15H11V12.89L13 14.89V15M10.57 7.37L9.13 5.93C10.86 4.72 13.22 4.67 15 6C16.26 6.94 17 8.43 17 10C17 11.05 16.67 12.05 16.08 12.88L14.63 11.43C14.86 11 15 10.5 15 10C15 8.34 13.67 7 12 7C11.5 7 11 7.14 10.57 7.37M17.5 14.31C18.47 13.09 19 11.57 19 10C19 8.96 18.77 7.94 18.32 7C19.63 7.11 20.8 7.85 21.46 9C22.57 10.9 21.91 13.34 20 14.45V16C20 16.22 19.91 16.42 19.79 16.59L17.5 14.31M10 18H14V19C14 19.55 13.55 20 13 20H11C10.45 20 10 19.55 10 19V18M7 19C7 19.34 7.06 19.68 7.17 20H6C5.45 20 5 19.55 5 19V18H7V19Z",
	"mdi:weather-sunny-alert": "M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56M19,13V7H21V13H19M19,17V15H21V17",
	"mdi:weather-windy": "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z",
	"mdi:smoke-detector-alert": "M10 18C13.3 18 16 15.3 16 12C16 8.7 13.3 6 10 6C6.7 6 4 8.7 4 12C4 15.3 6.7 18 10 18M17 3C18.1 3 19 3.9 19 5V19C19 20.1 18.1 21 17 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3H17M6 12C6 9.8 7.8 8 10 8S14 9.8 14 12 12.2 16 10 16 6 14.2 6 12M23 7H21V13H23V8M23 15H21V17H23V15Z",
	"mdi:shield-alert": "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5M11,7H13V13H11M11,15H13V17H11",
	"mdi:battery-alert-variant-outline": "M14 20H6V6H14M14.67 4H13V2H7V4H5.33C4.6 4 4 4.6 4 5.33V20.67C4 21.4 4.6 22 5.33 22H14.67C15.4 22 16 21.4 16 20.67V5.33C16 4.6 15.4 4 14.67 4M21 7H19V13H21V8M21 15H19V17H21V15Z",
	"mdi:server-off": "M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H8.82L6.82,5H7V3H5V3.18L3.21,1.39C3.39,1.15 3.68,1 4,1M22,22.72L20.73,24L19.73,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17H13.73L11.73,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9H5.73L3.68,6.95C3.38,6.85 3.15,6.62 3.05,6.32L1,4.27L2.28,3L22,22.72M20,9A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H16.82L10.82,9H20M20,17A1,1 0 0,1 21,18V19.18L18.82,17H20M9,5H10V3H9V5M9,13H9.73L9,12.27V13M9,21H10V19H9V21M5,11V13H7V11H5M5,19V21H7V19H5Z",
	"mdi:calendar-month": "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z",
	"mdi:calendar-week": "M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z",
	"mdi:silverware-fork-knife": "M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z",
	"mdi:shower": "M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z",
	"mdi:stove": "M6,14H8L11,17H9L6,14M4,4H5V3A1,1 0 0,1 6,2H10A1,1 0 0,1 11,3V4H13V3A1,1 0 0,1 14,2H18A1,1 0 0,1 19,3V4H20A2,2 0 0,1 22,6V19A2,2 0 0,1 20,21V22H17V21H7V22H4V21A2,2 0 0,1 2,19V6A2,2 0 0,1 4,4M18,7A1,1 0 0,1 19,8A1,1 0 0,1 18,9A1,1 0 0,1 17,8A1,1 0 0,1 18,7M14,7A1,1 0 0,1 15,8A1,1 0 0,1 14,9A1,1 0 0,1 13,8A1,1 0 0,1 14,7M20,6H4V10H20V6M4,19H20V12H4V19M6,7A1,1 0 0,1 7,8A1,1 0 0,1 6,9A1,1 0 0,1 5,8A1,1 0 0,1 6,7M13,14H15L18,17H16L13,14Z",
	"mdi:teddy-bear": "M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12",
	"mdi:bed-outline": "M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z",
	"mdi:toilet": "M9,22H17V19.5C19.41,17.87 21,15.12 21,12V4A2,2 0 0,0 19,2H15C13.89,2 13,2.9 13,4V12H3C3,15.09 5,18 9,19.5V22M5.29,14H18.71C18.14,15.91 16.77,17.5 15,18.33V20H11V18.33C9,18 5.86,15.91 5.29,14M15,4H19V12H15V4M16,5V8H18V5H16Z",
	"mdi:desk": "M3 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8V19H19V17H15V19H13V8H5V19H3V8C2.45 8 2 7.55 2 7C2 6.45 2.45 6 3 6M16 10.5V11H18V10.5C18 10.22 17.78 10 17.5 10H16.5C16.22 10 16 10.22 16 10.5M16 14.5V15H18V14.5C18 14.22 17.78 14 17.5 14H16.5C16.22 14 16 14.22 16 14.5Z",
	"mdi:stairs": "M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z",
	"mdi:flower-outline": "M8.66,13.07C6.92,13.07 5.5,11.66 5.5,9.93C5.5,9.22 5.76,8.54 6.19,8C5.77,7.46 5.5,6.78 5.5,6.07C5.5,4.34 6.93,2.93 8.66,2.93L9.09,2.96C9.56,1.81 10.69,1 12,1C13.31,1 14.44,1.81 14.91,2.96L15.34,2.93C17.07,2.93 18.5,4.34 18.5,6.07C18.5,6.78 18.24,7.46 17.81,8C18.23,8.54 18.5,9.22 18.5,9.93C18.5,11.66 17.07,13.07 15.34,13.07L14.91,13.04C14.44,14.19 13.31,15 12,15C10.69,15 9.56,14.19 9.09,13.04L8.66,13.07M12,13C12.62,13 13.12,12.5 13.14,11.9L13.03,10.81C12.71,10.93 12.36,11 12,11C11.64,11 11.3,10.93 11,10.81L10.86,11.9C10.88,12.5 11.38,13 12,13M15.34,11.07C15.97,11.07 16.5,10.56 16.5,9.92C16.5,9.5 16.23,9.08 15.83,8.89L14.95,8.47C14.83,9.21 14.44,9.85 13.89,10.3L14.7,10.87C14.88,11 15.1,11.07 15.34,11.07M14.69,5.13L13.87,5.69C14.43,6.14 14.82,6.78 14.94,7.5L15.82,7.1C16.23,6.9 16.5,6.5 16.5,6.07C16.5,5.44 15.97,4.93 15.34,4.93C15.11,4.93 14.89,5 14.69,5.13M12,3C11.38,3 10.88,3.5 10.86,4.1L11,5.19C11.3,5.07 11.64,5 12,5C12.36,5 12.71,5.07 13.03,5.19L13.14,4.1C13.12,3.5 12.62,3 12,3M8.66,4.93C8.03,4.93 7.5,5.44 7.5,6.07C7.5,6.5 7.77,6.9 8.17,7.1L9.05,7.5C9.17,6.78 9.56,6.14 10.11,5.69L9.3,5.13C9.12,5 8.9,4.93 8.66,4.93M8.17,8.9C7.77,9.1 7.5,9.5 7.5,9.92C7.5,10.55 8.03,11.06 8.66,11.06C8.89,11.06 9.11,11 9.31,10.86L10.12,10.31C9.56,9.86 9.17,9.22 9.05,8.5L8.17,8.9M12,22A9,9 0 0,1 3,13A9,9 0 0,1 12,22A9,9 0 0,1 21,13A9,9 0 0,1 12,22M14.44,19.56C16.34,18.85 17.85,17.34 18.56,15.44C16.66,16.14 15.15,17.66 14.44,19.56M5.44,15.44C6.15,17.34 7.66,18.85 9.56,19.56C8.86,17.66 7.34,16.15 5.44,15.44Z",
	"mdi:stairs-down": "M15 6H22V9H18V13H14V17H10V21H3V18H7V14H11V10H15V6M4.83 8.34L10.34 2.83L12.17 4.66L6.66 10.17L8.5 12H3V6.5L4.83 8.34Z",
	"mdi:hanger": "M12 4A3.5 3.5 0 0 0 8.5 7.5H10.5A1.5 1.5 0 0 1 12 6A1.5 1.5 0 0 1 13.5 7.5A1.5 1.5 0 0 1 12 9C11.45 9 11 9.45 11 10V11.75L2.4 18.2A1 1 0 0 0 3 20H21A1 1 0 0 0 21.6 18.2L13 11.75V10.85A3.5 3.5 0 0 0 15.5 7.5A3.5 3.5 0 0 0 12 4M12 13.5L18 18H6Z",
	"mdi:weather-cloudy": "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z",
	"mdi:moon-new": "M12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z",
	"mdi:moon-first-quarter": "M12 2V22A10 10 0 0 0 12 2Z",
	"mdi:moon-waxing-gibbous": "M6 12C6 7.5 7.93 3.26 12 2A10 10 0 0 1 12 22C7.93 20.74 6 16.5 6 12Z",
	"mdi:moon-full": "M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z",
	"mdi:moon-waning-gibbous": "M18 12C18 7.5 16.08 3.26 12 2A10 10 0 0 0 12 22C16.08 20.74 18 16.5 18 12Z",
	"mdi:moon-last-quarter": "M12 2A10 10 0 0 0 12 22Z",
	"mdi:moon-waning-crescent": "M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z",
	"mdi:star-cog-outline": "M10.29 10.13L5.91 10.5L9.23 13.38L8.24 17.66L12 15.39L12.76 15.85C12.5 16.33 12.32 16.85 12.19 17.39L12 17.27L5.82 21L7.45 13.97L2 9.24L9.19 8.63L12 2L14.81 8.63L22 9.24L18.8 12C17.29 12.05 15.91 12.57 14.78 13.43L14.77 13.38L18.09 10.5L13.71 10.13L12 6.09L10.29 10.13M23.83 20.64L22.83 22.37C22.76 22.5 22.63 22.5 22.5 22.5L21.27 22C21 22.18 20.73 22.34 20.43 22.47L20.24 23.79C20.22 23.91 20.11 24 20 24H18C17.86 24 17.76 23.91 17.74 23.79L17.55 22.47C17.24 22.35 16.96 22.18 16.7 22L15.46 22.5C15.34 22.5 15.21 22.5 15.15 22.37L14.15 20.64C14.09 20.53 14.12 20.4 14.21 20.32L15.27 19.5C15.25 19.33 15.24 19.17 15.24 19S15.25 18.67 15.27 18.5L14.21 17.68C14.11 17.6 14.09 17.47 14.15 17.36L15.15 15.63C15.22 15.5 15.35 15.5 15.46 15.5L16.7 16C16.96 15.82 17.25 15.66 17.55 15.53L17.74 14.21C17.76 14.09 17.87 14 18 14H20C20.11 14 20.22 14.09 20.23 14.21L20.42 15.53C20.73 15.65 21 15.82 21.27 16L22.5 15.5C22.63 15.5 22.76 15.5 22.82 15.63L23.82 17.36C23.88 17.47 23.85 17.6 23.76 17.68L22.7 18.5C22.73 18.67 22.74 18.83 22.74 19S22.72 19.33 22.7 19.5L23.77 20.32C23.86 20.4 23.89 20.53 23.83 20.64M20.5 19C20.5 18.17 19.83 17.5 19 17.5S17.5 18.17 17.5 19 18.16 20.5 19 20.5C19.83 20.5 20.5 19.83 20.5 19Z",
	"mdi:tablet-dashboard": "M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4M7,8H13V13H7V8M14,8H17V10H14V8M17,11V16H14V11H17M7,14H13V16H7V14Z",
	"mdi:weather-fog": "M3,15H13A1,1 0 0,1 14,16A1,1 0 0,1 13,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15M16,15H21A1,1 0 0,1 22,16A1,1 0 0,1 21,17H16A1,1 0 0,1 15,16A1,1 0 0,1 16,15M1,12A5,5 0 0,1 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21A2,2 0 0,0 19,11H17V10A5,5 0 0,0 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9A3,3 0 0,0 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5A1,1 0 0,1 6,20A1,1 0 0,1 5,21H3A1,1 0 0,1 2,20A1,1 0 0,1 3,19M8,19H21A1,1 0 0,1 22,20A1,1 0 0,1 21,21H8A1,1 0 0,1 7,20A1,1 0 0,1 8,19Z",
	"mdi:weather-hail": "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M10,18A2,2 0 0,1 12,20A2,2 0 0,1 10,22A2,2 0 0,1 8,20A2,2 0 0,1 10,18M14.5,16A1.5,1.5 0 0,1 16,17.5A1.5,1.5 0 0,1 14.5,19A1.5,1.5 0 0,1 13,17.5A1.5,1.5 0 0,1 14.5,16M10.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,15A1.5,1.5 0 0,1 9,13.5A1.5,1.5 0 0,1 10.5,12Z",
	"mdi:weather-lightning": "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z",
	"mdi:weather-lightning-rainy": "M4.5,13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.44 4,15.6 3.5,15.33V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59M9.5,11H12.5L10.5,15H12.5L8.75,22L9.5,17H7L9.5,11M17.5,18.67C17.5,19.96 16.5,21 15.25,21C14,21 13,19.96 13,18.67C13,17.12 15.25,14.5 15.25,14.5C15.25,14.5 17.5,17.12 17.5,18.67Z",
	"mdi:weather-pouring": "M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z",
	"mdi:weather-rainy": "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59",
	"mdi:weather-snowy": "M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z",
	"mdi:weather-snowy-rainy": "M18.5,18.67C18.5,19.96 17.5,21 16.25,21C15,21 14,19.96 14,18.67C14,17.12 16.25,14.5 16.25,14.5C16.25,14.5 18.5,17.12 18.5,18.67M4,17.36C3.86,16.82 4.18,16.25 4.73,16.11L7,15.5L5.33,13.86C4.93,13.46 4.93,12.81 5.33,12.4C5.73,12 6.4,12 6.79,12.4L8.45,14.05L9.04,11.8C9.18,11.24 9.75,10.92 10.29,11.07C10.85,11.21 11.17,11.78 11,12.33L10.42,14.58L12.67,14C13.22,13.83 13.79,14.15 13.93,14.71C14.08,15.25 13.76,15.82 13.2,15.96L10.95,16.55L12.6,18.21C13,18.6 13,19.27 12.6,19.67C12.2,20.07 11.54,20.07 11.15,19.67L9.5,18L8.89,20.27C8.75,20.83 8.18,21.14 7.64,21C7.08,20.86 6.77,20.29 6.91,19.74L7.5,17.5L5.26,18.09C4.71,18.23 4.14,17.92 4,17.36M1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A1,1 0 0,1 18,15A1,1 0 0,1 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,11.85 3.35,12.61 3.91,13.16C4.27,13.55 4.26,14.16 3.88,14.54C3.5,14.93 2.85,14.93 2.47,14.54C1.56,13.63 1,12.38 1,11Z",
	"mdi:weather-sunny": "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",
	"mdi:weather-windy-variant": "M6,6L6.69,6.06C7.32,3.72 9.46,2 12,2A5.5,5.5 0 0,1 17.5,7.5L17.42,8.45C17.88,8.16 18.42,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H6A4,4 0 0,1 2,10A4,4 0 0,1 6,6M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12H19A1,1 0 0,0 20,11A1,1 0 0,0 19,10H15.5V7.5A3.5,3.5 0 0,0 12,4A3.5,3.5 0 0,0 8.5,7.5V8H6M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z",
	"mdi:alert-circle-outline": "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",
	"mdi:fire": "M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",
	"mdi:snowflake-alert": "M16.46,9.41L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L16.46,14.61M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44M19,13V7H21V13H19M19,17V15H21V17H19Z",
	"mdi:weather-cloudy-alert": "M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13M13,12H11V8H13V12M13,16H11V14H13",
	"mdi:sunglasses": "M7,17H4C2.38,17 0.96,15.74 0.76,14.14L0.26,11.15C0.15,10.3 0.39,9.5 0.91,8.92C1.43,8.34 2.19,8 3,8H9C9.83,8 10.58,8.35 11.06,8.96C11.17,9.11 11.27,9.27 11.35,9.45C11.78,9.36 12.22,9.36 12.64,9.45C12.72,9.27 12.82,9.11 12.94,8.96C13.41,8.35 14.16,8 15,8H21C21.81,8 22.57,8.34 23.09,8.92C23.6,9.5 23.84,10.3 23.74,11.11L23.23,14.18C23.04,15.74 21.61,17 20,17H17C15.44,17 13.92,15.81 13.54,14.3L12.64,11.59C12.26,11.31 11.73,11.31 11.35,11.59L10.43,14.37C10.07,15.82 8.56,17 7,17Z",
	"mdi:home": "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
}, Ai = class extends E {
	static {
		this.styles = o`
    :host{display:block;box-sizing:border-box;height:100%;background:var(--ha-card-background,var(--card-background-color,#fff));
      border-radius:var(--ha-card-border-radius,12px);border:var(--ha-card-border-width,1px) solid var(--ha-card-border-color,var(--divider-color,rgba(0,0,0,.12)));
      box-shadow:var(--ha-card-box-shadow,none);color:var(--primary-text-color);overflow:hidden}
  `;
	}
	render() {
		return S`<slot></slot>`;
	}
}, ji = class extends E {
	static {
		this.properties = { icon: {} };
	}
	static {
		this.styles = o`
    :host{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);fill:currentColor;flex:none}
    svg{width:100%;height:100%}
  `;
	}
	render() {
		return S`<svg viewBox="0 0 24 24" aria-hidden="true">${C`<path d=${ki[this.icon ?? ""] ?? ki["mdi:circle-small"] ?? ""}></path>`}</svg>`;
	}
};
function Mi(e) {
	if (!e) return "mdi:bookmark-outline";
	if (typeof e.attributes.icon == "string") return e.attributes.icon;
	let [t] = e.entity_id.split("."), n = [
		"on",
		"open",
		"unlocked",
		"playing",
		"home",
		"heat",
		"cool",
		"cleaning"
	].includes(e.state), r = String(e.attributes.device_class ?? ""), i = {
		window: ["mdi:window-open-variant", "mdi:window-closed-variant"],
		door: ["mdi:door-open", "mdi:door-closed"],
		garage_door: ["mdi:garage-open", "mdi:garage"],
		moisture: ["mdi:water-alert", "mdi:water-off"],
		smoke: ["mdi:smoke-detector-variant-alert", "mdi:smoke-detector-variant"],
		motion: ["mdi:motion-sensor", "mdi:motion-sensor-off"],
		occupancy: ["mdi:home-account", "mdi:home-outline"],
		outlet: ["mdi:power-plug", "mdi:power-plug-off"],
		shutter: ["mdi:window-shutter-open", "mdi:window-shutter"],
		temperature: ["mdi:thermometer", "mdi:thermometer"],
		humidity: ["mdi:water-percent", "mdi:water-percent"],
		power: ["mdi:flash", "mdi:flash"],
		energy: ["mdi:lightning-bolt", "mdi:lightning-bolt"],
		battery: ["mdi:battery-60", "mdi:battery-60"],
		carbon_dioxide: ["mdi:molecule-co2", "mdi:molecule-co2"]
	};
	return i[r] ? i[r][+!n] : t === "alarm_control_panel" ? e.state === "disarmed" ? "mdi:shield-off-outline" : "mdi:shield-lock" : t === "sun" ? e.state === "above_horizon" ? "mdi:white-balance-sunny" : "mdi:weather-night" : {
		light: ["mdi:lightbulb", "mdi:lightbulb-outline"],
		switch: ["mdi:toggle-switch-variant", "mdi:toggle-switch-variant-off"],
		fan: ["mdi:fan", "mdi:fan-off"],
		cover: ["mdi:window-shutter-open", "mdi:window-shutter"],
		lock: ["mdi:lock-open-variant", "mdi:lock"],
		climate: ["mdi:thermostat", "mdi:thermostat"],
		media_player: ["mdi:speaker-play", "mdi:speaker"],
		vacuum: ["mdi:robot-vacuum", "mdi:robot-vacuum"],
		alarm_control_panel: ["mdi:shield-off-outline", "mdi:shield-home"],
		person: ["mdi:account", "mdi:account-outline"],
		weather: ["mdi:weather-partly-cloudy", "mdi:weather-partly-cloudy"],
		update: ["mdi:package-up", "mdi:package"],
		water_heater: ["mdi:water-boiler", "mdi:water-boiler-off"],
		scene: ["mdi:palette", "mdi:palette"],
		script: ["mdi:script-text", "mdi:script-text"],
		binary_sensor: ["mdi:checkbox-marked-circle", "mdi:radiobox-blank"],
		sensor: ["mdi:eye", "mdi:eye"],
		calendar: ["mdi:calendar", "mdi:calendar"],
		todo: ["mdi:clipboard-list", "mdi:clipboard-list"],
		sun: ["mdi:white-balance-sunny", "mdi:weather-night"]
	}[t]?.[+!n] ?? "mdi:bookmark-outline";
}
var Ni = class extends E {
	static {
		this.properties = {
			stateObj: { attribute: !1 },
			icon: {},
			hass: { attribute: !1 }
		};
	}
	static {
		this.styles = o`:host{display:inline-flex;--mdc-icon-size:inherit}`;
	}
	render() {
		return S`<ha-icon .icon=${this.icon || Mi(this.stateObj)}></ha-icon>`;
	}
};
function Pi() {
	let e = [
		["ha-card", Ai],
		["ha-icon", ji],
		["ha-state-icon", Ni]
	];
	for (let [t, n] of e) customElements.get(t) || customElements.define(t, n);
}
// src/demo/textes.ts
var Fi = {
	fr: {
		utilisateur: "Camille",
		essayez: "Essayez",
		aide: "La maison est fictive, le tableau est le vrai : touchez un favori, une pièce, un point à regarder, ou l'un de ces gestes.",
		retour: "Accueil",
		remettre: "Remettre la maison comme au début",
		scenarios: {
			fenetre: ["Ouvrir la fenêtre du salon", "Fermer la fenêtre du salon"],
			fuite: ["Une fuite sous l'évier", "Réparer la fuite"],
			depart: ["Tout le monde part", "Tout le monde rentre"],
			chaleur: ["Une journée de canicule", "Retour à la normale"],
			lumieres: ["Allumer toutes les lumières", "Tout éteindre"]
		},
		ailleurs: (e) => `Dans Home Assistant, ce bouton ouvre ${e}. La démo reste sur le tableau.`,
		plusDInfos: (e, t) => `${e} : ${t}. Dans Home Assistant, la fenêtre de l'appareil s'ouvre ici.`,
		journalVide: "Rien ne s'est passé depuis l'ouverture de la page.",
		previsions: "Prévisions",
		consigne: "Consigne",
		noms: {},
		etats: {
			on: "Allumé",
			off: "Éteint",
			open: "Ouvert",
			closed: "Fermé",
			locked: "Verrouillé",
			unlocked: "Déverrouillé",
			home: "À la maison",
			not_home: "Absent",
			playing: "En lecture",
			paused: "En pause",
			idle: "Inactif",
			heat: "Chauffe",
			cool: "Refroidit",
			heat_cool: "Chauffe ou refroidit",
			fan_only: "Ventilation",
			dry: "Déshumidifie",
			auto: "Automatique",
			armed_away: "Armée (absence)",
			armed_home: "Armée (présence)",
			disarmed: "Désarmée",
			docked: "Sur sa base",
			cleaning: "Nettoie",
			unavailable: "Indisponible",
			unknown: "Inconnu",
			"window.on": "Ouverte",
			"window.off": "Fermée",
			"door.on": "Ouverte",
			"door.off": "Fermée",
			"moisture.on": "Fuite",
			"moisture.off": "Sec",
			"smoke.on": "Fumée",
			"smoke.off": "RAS",
			"motion.on": "Détecté",
			"motion.off": "Rien",
			"occupancy.on": "Présence",
			"occupancy.off": "Personne",
			"battery.on": "Faible",
			"battery.off": "Normale"
		}
	},
	en: {
		utilisateur: "Camille",
		essayez: "Try it",
		aide: "The home is fictional, the dashboard is real: tap a favorite, a room, a thing to check, or one of these actions.",
		retour: "Home",
		remettre: "Reset the home",
		scenarios: {
			fenetre: ["Open the living room window", "Close the living room window"],
			fuite: ["A leak under the sink", "Fix the leak"],
			depart: ["Everyone leaves", "Everyone comes back"],
			chaleur: ["A heatwave day", "Back to normal"],
			lumieres: ["Turn on every light", "Turn everything off"]
		},
		ailleurs: (e) => `In Home Assistant, this button opens ${e}. The demo stays on the dashboard.`,
		plusDInfos: (e, t) => `${e}: ${t}. In Home Assistant, the device's dialog opens here.`,
		journalVide: "Nothing has happened since the page was opened.",
		previsions: "Forecast",
		consigne: "Target",
		noms: {
			Bureau: "Office",
			Chambre: "Bedroom",
			"Chambre des enfants": "Kids' room",
			Cuisine: "Kitchen",
			Entrée: "Hallway",
			"Salle de bain": "Bathroom",
			Salon: "Living room",
			"Appartement d'essai": "Demo apartment",
			"Aspirateur robot": "Robot vacuum",
			Climatisation: "Air conditioning",
			"Fuite sous l'évier": "Leak under the sink",
			"Guirlande lumineuse": "String lights",
			Lampadaire: "Floor lamp",
			"Lampe de bureau": "Desk lamp",
			"Lampe de chevet": "Bedside lamp",
			"Mouvement dans l'entrée": "Hallway motion",
			"Plafonnier de l'entrée": "Hallway ceiling light",
			"Plafonnier du salon": "Living room ceiling light",
			"Prise du lave-linge": "Washing machine plug",
			"Qualité de l'air": "Air quality",
			"Radiateur des enfants": "Kids' heater",
			"Radiateur du salon": "Living room heater",
			"Réglette du plan de travail": "Worktop light strip",
			"Température extérieure": "Outdoor temperature",
			"Volet de la chambre": "Bedroom shutter",
			"Volet de la cuisine": "Kitchen shutter",
			"Volet du salon": "Living room shutter",
			"Énergie consommée": "Energy used",
			Alarme: "Alarm",
			"Chauffe-eau": "Water heater",
			"Consommation de la maison": "Home consumption",
			"Détecteur de fumée": "Smoke detector",
			"Enceinte du salon": "Living room speaker",
			"Fenêtre de la chambre": "Bedroom window",
			"Fenêtre du salon": "Living room window",
			"Fuite dans la salle de bain": "Bathroom leak",
			"Humidité chambre": "Bedroom humidity",
			"Humidité salle de bain": "Bathroom humidity",
			"Humidité salon": "Living room humidity",
			"Lave-linge": "Washing machine",
			Maison: "Home",
			"Pile du capteur de fenêtre": "Window sensor battery",
			"Pile du capteur de porte": "Door sensor battery",
			"Pile du détecteur de fuite": "Leak sensor battery",
			"Porte d'entrée": "Front door",
			"Présence dans le salon": "Living room presence",
			"Puissance du lave-linge": "Washing machine power",
			"Température bureau": "Office temperature",
			"Température chambre": "Bedroom temperature",
			"Température chambre des enfants": "Kids' room temperature",
			"Température cuisine": "Kitchen temperature",
			"Température entrée": "Hallway temperature",
			"Température salle de bain": "Bathroom temperature",
			"Température salon": "Living room temperature",
			Ventilateur: "Fan",
			"Énergie de la maison": "Home energy",
			"Cours de piano": "Piano lesson"
		},
		etats: {
			on: "On",
			off: "Off",
			open: "Open",
			closed: "Closed",
			locked: "Locked",
			unlocked: "Unlocked",
			home: "Home",
			not_home: "Away",
			playing: "Playing",
			paused: "Paused",
			idle: "Idle",
			heat: "Heating",
			cool: "Cooling",
			heat_cool: "Heat/cool",
			fan_only: "Fan only",
			dry: "Dry",
			auto: "Auto",
			armed_away: "Armed (away)",
			armed_home: "Armed (home)",
			disarmed: "Disarmed",
			docked: "Docked",
			cleaning: "Cleaning",
			unavailable: "Unavailable",
			unknown: "Unknown",
			"window.on": "Open",
			"window.off": "Closed",
			"door.on": "Open",
			"door.off": "Closed",
			"moisture.on": "Wet",
			"moisture.off": "Dry",
			"smoke.on": "Smoke",
			"smoke.off": "Clear",
			"motion.on": "Detected",
			"motion.off": "Clear",
			"occupancy.on": "Detected",
			"occupancy.off": "Clear",
			"battery.on": "Low",
			"battery.off": "Normal"
		}
	}
}, Ii = (e) => Fi[O(e) === "fr" ? "fr" : "en"], Li = /* @__PURE__ */ new Set([
	"light",
	"switch",
	"fan",
	"input_boolean",
	"cover",
	"lock",
	"media_player"
]), Ri = [], zi = (e) => {
	Ri = e;
}, Z = class extends E {
	static {
		this.properties = {
			hass: { attribute: !1 },
			config: { state: !0 }
		};
	}
	setConfig(e) {
		this.config = e;
	}
	getGridOptions() {
		return {
			columns: "full",
			rows: "auto"
		};
	}
	etat(e = String(this.config?.entity ?? "")) {
		return this.hass?.states[e];
	}
	infos(e) {
		this.dispatchEvent(new CustomEvent("hass-more-info", {
			detail: { entityId: e },
			bubbles: !0,
			composed: !0
		}));
	}
}, Bi = o`
  :host{display:block;height:100%;font-family:var(--ha-font-family-body,inherit)}
  ha-card{height:100%;box-sizing:border-box}
  button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer;text-align:left}
`, Vi = class extends Z {
	static {
		this.styles = [Bi, o`
    :host{height:auto}
    .titre{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 2px 0;min-height:36px}
    h2{margin:0;font-size:18px;font-weight:650;letter-spacing:-.01em;color:var(--primary-text-color)}
    h2.sous{font-size:14px;font-weight:600;color:var(--secondary-text-color)}
    .badges{display:flex;gap:6px;flex-wrap:wrap}
    .badge{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:600;
      background:var(--secondary-background-color);color:var(--primary-text-color)}
    .badge ha-icon{--mdc-icon-size:16px}
  `];
	}
	agir(e) {
		Hi(this.hass, e);
	}
	render() {
		let e = this.config.badges ?? [];
		return S`<div class="titre"><h2 class=${this.config.heading_style === "subtitle" ? "sous" : ""}>${this.config.heading ?? ""}</h2>
      ${e.length ? S`<div class="badges">${e.map((e) => S`<button class="badge" @click=${() => this.agir(e.tap_action)}>
        ${e.icon ? S`<ha-icon .icon=${e.icon}></ha-icon>` : T}${e.text ?? ""}</button>`)}</div>` : T}</div>`;
	}
};
function Hi(e, t) {
	if (!e || !t) return;
	if (t.action === "navigate" && t.navigation_path) return F(String(t.navigation_path));
	if (t.action !== "perform-action" || !t.perform_action) return;
	let [n, r] = String(t.perform_action).split("."), i = t.target?.area_id, a = Object.values(e.entities).filter((t) => t.entity_id.startsWith(`${n}.`) && (t.area_id ?? e.devices[t.device_id ?? ""]?.area_id) === i).map((e) => e.entity_id);
	e.callService?.(n, r, { entity_id: a });
}
var Ui = class extends Z {
	constructor(...e) {
		super(...e), this.toucher = () => {
			let e = String(this.config.entity), t = e.split(".")[0];
			if (!Li.has(t)) return this.infos(e);
			let n = this.etat(), r = t === "lock" ? n.state === "locked" ? "unlock" : "lock" : t === "media_player" ? "media_play_pause" : "toggle";
			this.hass?.callService?.(t, r, { entity_id: e });
		};
	}
	static {
		this.styles = [Bi, o`
    button{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:10px;width:100%;height:100%;min-height:54px;padding:8px 12px;box-sizing:border-box}
    .ico{display:grid;place-items:center;width:36px;height:36px;border-radius:var(--tile-icon-border-radius,10px);
      background:var(--secondary-background-color);color:var(--secondary-text-color)}
    .ico.actif{background:color-mix(in srgb, var(--state-icon-active-color, var(--primary-color)) 18%, transparent);color:var(--state-icon-active-color, var(--primary-color))}
    .ico ha-state-icon{--mdc-icon-size:20px}
    .nom{font-size:14px;font-weight:600;line-height:1.25;color:var(--primary-text-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .etat{display:block;font-size:12.5px;font-weight:500;color:var(--secondary-text-color)}
  `];
	}
	getGridOptions() {
		return {
			columns: 6,
			rows: 1
		};
	}
	render() {
		let e = this.etat();
		if (!e || !this.hass) return T;
		let t = [
			"on",
			"open",
			"unlocked",
			"playing",
			"heat",
			"cool",
			"home",
			"cleaning"
		].includes(e.state), n = this.config.name ?? L(this.hass, e.entity_id);
		return S`<ha-card><button title=${n} @click=${this.toucher}>
      <span class="ico ${t ? "actif" : ""}"><ha-state-icon .stateObj=${e} .icon=${this.config.icon}></ha-state-icon></span>
      <span class="nom">${n}<span class="etat">${this.hass.formatEntityState?.(e) ?? e.state}</span></span></button></ha-card>`;
	}
}, Wi = class extends Z {
	static {
		this.styles = [Bi, o`
    ha-card{padding:16px 18px;display:grid;gap:14px}
    .haut{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:14px}
    .haut ha-icon{--mdc-icon-size:46px;color:var(--primary-color)}
    .cond{font-size:17px;font-weight:650;color:var(--primary-text-color)}
    .lieu{font-size:13px;color:var(--secondary-text-color)}
    .temp{font-size:30px;font-weight:700;letter-spacing:-.03em;color:var(--primary-text-color)}
    .jours{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;text-align:center;font-size:12.5px;color:var(--secondary-text-color)}
    .jours ha-icon{--mdc-icon-size:22px;color:var(--primary-text-color);margin:4px 0}
    .jours b{display:block;font-size:13.5px;color:var(--primary-text-color)}
  `];
	}
	render() {
		let e = this.etat();
		if (!e || !this.hass) return T;
		let t = this.hass, { icone: n, texte: r } = ft(t, e), i = Number(e.attributes.temperature ?? 15), a = [
			"partlycloudy",
			"sunny",
			"cloudy",
			"rainy",
			"sunny"
		], o = new Intl.DateTimeFormat(O(t), { weekday: "short" });
		return S`<ha-card>
      <div class="haut"><ha-icon .icon=${n}></ha-icon>
        <div><div class="cond">${r}</div><div class="lieu">${t.config.location_name ?? ""}</div></div>
        <div class="temp">${j(t, i)}</div></div>
      <div class="jours">${a.map((e, n) => {
			let r = new Date(Date.now() + (n + 1) * 864e5), a = ft(t, {
				entity_id: "weather.demo",
				state: e,
				attributes: {}
			});
			return S`<div>${o.format(r)}<br><ha-icon .icon=${a.icone}></ha-icon><b>${Math.round(i + 2 - n % 3)}°</b>${Math.round(i - 5 + n % 2)}°</div>`;
		})}</div></ha-card>`;
	}
}, Gi = class extends Z {
	static {
		this.styles = [Bi, o`
    ha-card{padding:16px 18px;display:grid;justify-items:center;gap:8px;text-align:center}
    .nom{font-size:14px;font-weight:650;color:var(--primary-text-color)}
    .consigne{display:flex;align-items:center;gap:18px}
    .consigne b{font-size:34px;font-weight:700;letter-spacing:-.03em;color:var(--primary-text-color)}
    .rond{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:var(--secondary-background-color);color:var(--primary-text-color)}
    .rond ha-icon{--mdc-icon-size:20px}
    .etat{font-size:12.5px;color:var(--secondary-text-color)}
  `];
	}
	getGridOptions() {
		return {
			columns: 6,
			rows: "auto"
		};
	}
	render() {
		let e = this.etat();
		if (!e || !this.hass) return T;
		let t = Number(e.attributes.temperature ?? 20), n = (n) => this.hass?.callService?.("climate", "set_temperature", {
			entity_id: e.entity_id,
			temperature: t + n
		});
		return S`<ha-card><div class="nom">${L(this.hass, e.entity_id)}</div>
      <div class="consigne"><button class="rond" aria-label="−" @click=${() => n(-.5)}><ha-icon icon="mdi:minus"></ha-icon></button>
        <b>${j(this.hass, t)}</b>
        <button class="rond" aria-label="+" @click=${() => n(.5)}><ha-icon icon="mdi:plus"></ha-icon></button></div>
      <div class="etat">${Ii(this.hass).consigne} · ${this.hass.formatEntityState?.(e) ?? e.state}${typeof e.attributes.current_temperature == "number" ? ` · ${j(this.hass, e.attributes.current_temperature)}` : ""}</div></ha-card>`;
	}
}, Ki = class extends Z {
	static {
		this.properties = {
			...Z.properties,
			_series: { state: !0 }
		};
	}
	static {
		this.styles = [Bi, o`
    ha-card{padding:14px 16px;display:grid;gap:10px}
    .serie{display:grid;gap:4px}
    .nom{font-size:12.5px;font-weight:600;color:var(--secondary-text-color)}
    svg{width:100%;height:70px;overflow:visible}
    path{fill:none;stroke:var(--primary-color);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke}
    rect{fill:var(--primary-color);opacity:.75}
  `];
	}
	constructor() {
		super(), this._cle = "", this._series = [];
	}
	render() {
		return !this.hass || (this.charger(), !this._series.length) ? T : S`<ha-card>${this._series.map((e) => S`<div class="serie"><span class="nom">${e.nom}</span>${this.dessin(e.points, e.barres)}</div>`)}</ha-card>`;
	}
	dessin(e, t) {
		let n = t ? 0 : Math.min(...e), r = Math.max(...e) - n || 1, i = (t) => t / Math.max(1, e.length - 1) * 100, a = (e) => 66 - (e - n) / r * 60;
		return t ? S`<svg viewBox="0 0 100 70" preserveAspectRatio="none">${e.map((t, n) => C`<rect x=${n / e.length * 100 + 1} y=${a(t)} width=${100 / e.length - 2} height=${66 - a(t)} rx="1"></rect>`)}</svg>` : S`<svg viewBox="0 0 100 70" preserveAspectRatio="none">${C`<path d=${e.map((e, t) => `${t ? "L" : "M"}${i(t)},${a(e)}`).join(" ")}></path>`}</svg>`;
	}
	charger() {
		let e = (this.config.entities ?? []).map((e) => typeof e == "string" ? e : e.entity).slice(0, 4), t = e.join(",");
		if (t === this._cle) return;
		this._cle = t;
		let n = this.config.type === "statistics-graph", r = Number(this.config.days_to_show ?? 0), i = /* @__PURE__ */ new Date(Date.now() - (r ? r * 864e5 : Number(this.config.hours_to_show ?? 24) * 36e5)), a = n ? String(this.config.period ?? "day") : "hour", o = n && (this.config.stat_types ?? []).includes("change");
		this.hass.callWS({
			type: "recorder/statistics_during_period",
			start_time: i.toISOString(),
			statistic_ids: e,
			period: a,
			types: o ? ["change"] : ["mean"]
		}).then((t) => {
			this._series = e.map((e) => ({
				nom: L(this.hass, e),
				barres: o,
				points: (t[e] ?? []).map((e) => (o ? e.change : e.mean) ?? 0)
			})).filter((e) => e.points.length > 1);
		});
	}
}, qi = class extends Z {
	static {
		this.styles = [Bi, o`
    ha-card{padding:12px 16px;display:grid;gap:2px}
    .ligne{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;min-height:38px;font-size:13.5px;color:var(--primary-text-color)}
    .ligne ha-state-icon{--mdc-icon-size:18px;color:var(--secondary-text-color)}
    .quand{font-size:12px;color:var(--secondary-text-color)}
    .vide{margin:6px 0;font-size:13.5px;color:var(--secondary-text-color)}
  `];
	}
	render() {
		if (!this.hass) return T;
		let e = this.hass, t = Ri.filter((t) => e.states[t.entite]).slice(0, 6);
		return S`<ha-card>${t.length ? t.map((t) => {
			let n = {
				...e.states[t.entite],
				state: t.etat
			};
			return S`<div class="ligne"><ha-state-icon .stateObj=${n}></ha-state-icon>
        <span>${L(e, t.entite)} · ${e.formatEntityState?.(n) ?? t.etat}</span><span class="quand">${M(e, new Date(t.quand))}</span></div>`;
		}) : S`<p class="vide">${Ii(e).journalVide}</p>`}</ha-card>`;
	}
}, Ji = {
	heading: "demo-titre",
	tile: "demo-tuile",
	"weather-forecast": "demo-meteo",
	thermostat: "demo-thermostat",
	"history-graph": "demo-courbe",
	"statistics-graph": "demo-courbe",
	logbook: "demo-journal"
};
function Yi() {
	let e = [
		["demo-titre", Vi],
		["demo-tuile", Ui],
		["demo-meteo", Wi],
		["demo-thermostat", Gi],
		["demo-courbe", Ki],
		["demo-journal", qi]
	];
	for (let [t, n] of e) customElements.get(t) || customElements.define(t, n);
}
// \0virtual:theme-demo
var Xi = ".ad-demo{--ha-font-family-body:Inter, 'Inter repli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;--ha-font-family-heading:Inter, 'Inter repli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;--primary-font-family:Inter, 'Inter repli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;--paper-font-common-base_-_font-family:Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;--ha-card-border-radius:22px;--ha-card-border-width:1px;--ha-tile-icon-border-radius:10px;--tile-icon-border-radius:10px;--primary-color:#0277BD;--accent-color:#0369A1;--dark-primary-color:#01609A;--light-primary-color:#E1F1FB;--text-light-primary-color:var(--primary-text-color);--primary-text-color:#0B1E2D;--secondary-text-color:#4F6273;--disabled-text-color:#8A99A6;--text-primary-color:#FFFFFF;--primary-background-color:#F5F8FB;--secondary-background-color:#E9F1F7;--lovelace-background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='704' height='308'%3E%3Cdefs%3E%3Cpattern id='p' width='22' height='22' patternUnits='userSpaceOnUse'%3E%3Crect width='2.8' height='2.8' fill='%230277BD' fill-opacity='0.34'/%3E%3C/pattern%3E%3ClinearGradient id='g' x1='1' y1='0' x2='0.15' y2='1'%3E%3Cstop offset='0' stop-color='white'/%3E%3Cstop offset='0.8' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3Cmask id='m'%3E%3Crect width='704' height='308' fill='url(%23g)'/%3E%3C/mask%3E%3C/defs%3E%3Crect width='704' height='308' fill='url(%23p)' mask='url(%23m)'/%3E%3C/svg%3E\") no-repeat top right,;--card-background-color:#FFFFFF;--ha-card-background:#FFFFFF;--ha-card-border-color:rgba(11, 30, 45, 0.1);--ha-card-box-shadow:0 1px 2px rgba(11, 30, 45, 0.05), 0 2px 8px rgba(11, 30, 45, 0.04);--divider-color:rgba(11, 30, 45, 0.1);--app-header-background-color:#F5F8FB;--app-header-text-color:#0B1E2D;--sidebar-background-color:#FFFFFF;--sidebar-text-color:#23384A;--sidebar-icon-color:#4F6273;--sidebar-selected-icon-color:#0277BD;--sidebar-selected-text-color:#0369A1;--state-icon-color:#4F6273;--state-active-color:#0277BD;--state-light-active-color:#E9A23B;--state-switch-active-color:#0277BD;--state-cover-active-color:#0277BD;--state-climate-heat-color:#D97A2B;--state-climate-cool-color:#0288D1;--success-color:#1E6B47;--warning-color:#B26A00;--error-color:#B42318;--info-color:#0369A1;--automatic-dashboard-fond-alt:#E9F1F7;--automatic-dashboard-accent-pale:#E1F1FB;--automatic-dashboard-vert:#1E6B47;--automatic-dashboard-vert-pale:#E0F0E8;--automatic-dashboard-alerte:#B42318;--automatic-dashboard-alerte-pale:#FCEBEA;--automatic-dashboard-trame:rgba(2, 119, 189, 0.34);--automatic-dashboard-ombre:0 2px 6px rgba(11, 30, 45, 0.05), 0 14px 34px rgba(11, 30, 45, 0.08)}@media (prefers-color-scheme: dark){.ad-demo{--primary-color:#4FC3F7;--accent-color:#7DD3FC;--dark-primary-color:#81D4FA;--light-primary-color:rgba(79, 195, 247, 0.14);--text-light-primary-color:var(--primary-text-color);--primary-text-color:#EEF4F9;--secondary-text-color:#9EB1C1;--disabled-text-color:#5F7385;--text-primary-color:#04131F;--primary-background-color:#0B131B;--secondary-background-color:#101B25;--lovelace-background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='704' height='308'%3E%3Cdefs%3E%3Cpattern id='p' width='22' height='22' patternUnits='userSpaceOnUse'%3E%3Crect width='2.8' height='2.8' fill='%23FFFFFF' fill-opacity='0.16'/%3E%3C/pattern%3E%3ClinearGradient id='g' x1='1' y1='0' x2='0.15' y2='1'%3E%3Cstop offset='0' stop-color='white'/%3E%3Cstop offset='0.8' stop-color='white' stop-opacity='0'/%3E%3C/linearGradient%3E%3Cmask id='m'%3E%3Crect width='704' height='308' fill='url(%23g)'/%3E%3C/mask%3E%3C/defs%3E%3Crect width='704' height='308' fill='url(%23p)' mask='url(%23m)'/%3E%3C/svg%3E\") no-repeat top right,;--card-background-color:#15212C;--ha-card-background:#15212C;--ha-card-border-color:rgba(255, 255, 255, 0.09);--ha-card-box-shadow:0 1px 2px rgba(0, 0, 0, 0.3);--divider-color:rgba(255, 255, 255, 0.09);--app-header-background-color:#0B131B;--app-header-text-color:#EEF4F9;--sidebar-background-color:#0E1822;--sidebar-text-color:#CFDAE3;--sidebar-icon-color:#9EB1C1;--sidebar-selected-icon-color:#4FC3F7;--sidebar-selected-text-color:#7DD3FC;--state-icon-color:#9EB1C1;--state-active-color:#4FC3F7;--state-light-active-color:#F2B84B;--state-switch-active-color:#4FC3F7;--state-cover-active-color:#4FC3F7;--state-climate-heat-color:#F2A15C;--state-climate-cool-color:#4FC3F7;--success-color:#7CC4A0;--warning-color:#F2B84B;--error-color:#FF9B8F;--info-color:#7DD3FC;--automatic-dashboard-fond-alt:#101B25;--automatic-dashboard-accent-pale:rgba(79, 195, 247, 0.14);--automatic-dashboard-vert:#7CC4A0;--automatic-dashboard-vert-pale:rgba(124, 196, 160, 0.13);--automatic-dashboard-alerte:#FF9B8F;--automatic-dashboard-alerte-pale:rgba(255, 155, 143, 0.14);--automatic-dashboard-trame:rgba(255, 255, 255, 0.10);--automatic-dashboard-ombre:0 2px 6px rgba(0, 0, 0, 0.25), 0 14px 34px rgba(0, 0, 0, 0.3)}}", Zi = /* @__PURE__ */ new Set(["systemmonitor", "hassio"]);
function Qi(e, t, n, r = {}) {
	let i = k(e), a = [], o = (e, t = {}) => n({
		type: "custom:automatic-dashboard-ouverture",
		page: e,
		...t
	}), s = (e) => n({
		type: "custom:automatic-dashboard-heros",
		page: e
	}), c = (e, t) => n({
		type: "custom:automatic-dashboard-apercu",
		sorte: e,
		grid_options: t
	}), l = (t) => e.states[t]?.state, u = (e, t, n, r = {}) => {
		if (!t.length) return null;
		let i = t.map((e) => ui(e, n));
		return J([Y(e, r), ...q(i, 6, "fin", i.some(di) ? 2 : 1)]);
	}, d = (e, t, n) => ({ badges: [{
		type: "button",
		text: e,
		icon: t,
		tap_action: n
	}] });
	for (let e of t.pieces.filter((e) => e.entites.length)) {
		let n = (t) => e.entites.filter(t), r = n((e) => e.domaine === "light"), s = n((e) => e.domaine === "cover"), c = n((e) => [
			"climate",
			"water_heater",
			"humidifier"
		].includes(e.domaine)), l = n((e) => e.role === "commande" && ![
			"light",
			"cover",
			"climate",
			"water_heater",
			"humidifier"
		].includes(e.domaine) && !e.secondaire), f = n((t) => t.role !== null && [
			"mesure",
			"ouvrant",
			"alerte",
			"energie"
		].includes(t.role) && !t.secondaire && !e.temperatures.slice(0, 1).includes(t.id) && !e.humidites.slice(0, 1).includes(t.id)), p = t.mode === "complet" ? n((e) => e.secondaire && e.role !== "info") : [], m = [
			u(i.lumieres, r, r.length > 8 ? "complet" : t.mode, d(i.toutEteindre, "mdi:lightbulb-off-outline", {
				action: "perform-action",
				perform_action: "light.turn_off",
				target: { area_id: e.area_id }
			})),
			u(i.volets, s, t.mode, d(i.toutFermer, "mdi:window-shutter", {
				action: "perform-action",
				perform_action: "cover.close_cover",
				target: { area_id: e.area_id }
			})),
			u(i.appareils, l, t.mode),
			u(i.capteurs, f, t.mode),
			u(i.autresTitre, p, "complet")
		].filter((e) => e !== null), h = c.map((e) => ({
			type: e.domaine === "climate" ? "thermostat" : "tile",
			entity: e.id,
			grid_options: {
				columns: 12,
				rows: e.domaine === "climate" ? 4 : 1
			}
		})), g = [e.temperatures[0], e.humidites[0]].filter(Boolean);
		g.length && h.push({
			type: "history-graph",
			entities: g,
			hours_to_show: 24,
			grid_options: {
				columns: 12,
				rows: 4
			}
		}), (m.length || h.length) && a.push(X({
			path: e.area_id,
			title: e.name,
			icon: e.icon,
			subview: !0,
			ouverture: o("piece", { piece: e.area_id }),
			scene: m.length ? m : [J([Y(e.name)])],
			cote: h,
			coteApres: 1
		}));
	}
	let f = t.pieces.filter((e) => !e.exterieur && !e.annexe && e.temperatures.length);
	if (f.length || t.climats.length) {
		let l = r.pieces === "mosaique" ? "custom:automatic-dashboard-plan" : "custom:automatic-dashboard-confort", u = [J([s("climat"), ...f.length >= 2 ? [Y(i.pieceParPiece), n({ type: l })] : []])], d = t.climats.filter((e) => e.domaine === "climate");
		if (d.length) {
			if (t.mode === "complet") u.push(J([Y(i.thermostats), ...q(d.map((e) => ui(e, "maison")), 6, "fin", 2)]));
			else {
				let e = d.map((e) => ({
					type: "thermostat",
					entity: e.id
				}));
				e.length % 2 == 1 && f.length && e.push({
					type: "history-graph",
					entities: f.map((e) => e.temperatures[0]).slice(0, 8),
					hours_to_show: 24
				}), u.push(J([Y(i.thermostats), ...e.map((e) => ({
					...e,
					grid_options: {
						columns: 12,
						rows: 4
					}
				}))]));
			}
		}
		let p = [];
		t.meteo && p.push({
			type: "weather-forecast",
			entity: t.meteo,
			forecast_type: "daily",
			show_current: !0,
			show_forecast: !0,
			...e.config.location_name ? { name: e.config.location_name } : {},
			grid_options: {
				columns: 12,
				rows: 4
			}
		}), t.pieces.some((e) => !e.exterieur && e.humidites.length) && p.push(c("humidite", {
			columns: 12,
			rows: 2
		})), a.push(X({
			path: "climat",
			title: i.climat,
			icon: "mdi:thermometer",
			subview: !0,
			ouverture: o("climat"),
			scene: u,
			cote: p,
			coteApres: 1
		}));
	}
	if (t.energie.length) {
		let n = t.energie.filter((e) => e.classe === "power" && e.id !== t.puissanceReseau && e.piece).slice(0, t.mode === "complet" ? 12 : 8), r = t.energie.filter((e) => e.classe === "energy"), c = [J([s("energie")])];
		n.length && c.push(J([Y(i.appareils), ...q(n.map((e) => ui(e, "maison")), 6, "fin", 2)])), r.length && t.mode !== "decouverte" && c.push(J([Y(i.compteurs), ...q(r.map((e) => ui(e, "complet")), 6, "fin", 1)]));
		let l = [];
		n.length >= 2 && l.push(Y(i.repartition), {
			type: "distribution",
			entities: n.map((e) => e.id),
			grid_options: {
				columns: 12,
				rows: "auto"
			}
		});
		let u = Ft(e, t);
		u.length && (l.push(Y(i.septJours), {
			type: "statistics-graph",
			entities: u,
			period: "day",
			days_to_show: 7,
			chart_type: "bar",
			stat_types: ["change"],
			grid_options: {
				columns: 12,
				rows: 4
			}
		}), l.push(Y(i.bilan, d(i.voir, "mdi:calendar-week", {
			action: "navigate",
			navigation_path: "bilan"
		})))), a.push(X({
			path: "energie",
			title: i.energie,
			icon: "mdi:lightning-bolt-outline",
			subview: !0,
			ouverture: o("energie"),
			scene: c,
			cote: l,
			coteApres: 1
		}));
	}
	if (t.securite.length) {
		let e = [...t.ouvrants].sort((e, t) => Number(l(t.id) === "on") - Number(l(e.id) === "on")), n = t.gardees.filter((e) => e.domaine === "lock"), r = [
			J([s("securite")]),
			u(i.ouvertures, e, "complet"),
			u(i.serruresTitre, n, "maison"),
			u(i.alertes, t.alertes, "complet"),
			t.mode === "complet" ? u(i.presence, t.gardees.filter((e) => e.role === "presence"), "complet") : null
		].filter((e) => e !== null), c = [
			...t.ouvrants,
			...t.alertes,
			...t.gardees.filter((e) => e.domaine === "lock" || e.domaine === "alarm_control_panel")
		].map((e) => e.id), d = c.length ? [Y(i.activite), {
			type: "logbook",
			target: { entity_id: c },
			hours_to_show: 24,
			grid_options: {
				columns: 12,
				rows: 6
			}
		}] : [];
		a.push(X({
			path: "securite",
			title: i.securite,
			icon: "mdi:shield-home-outline",
			subview: !0,
			ouverture: o("securite"),
			scene: r,
			cote: d,
			coteApres: 1
		}));
	}
	let p = (e) => Number.parseFloat(l(e.id) ?? ""), m = [...t.piles].sort((e, t) => p(e) - p(t)), h = [...t.majs].sort((e, t) => Number(l(t.id) === "on") - Number(l(e.id) === "on")), g = t.mode === "complet" ? 16 : 8, ee = t.systeme.filter((e) => e.plateforme !== "backup" && [
		"sensor",
		"binary_sensor",
		"switch"
	].includes(e.domaine)), te = ee.filter((e) => Zi.has(e.plateforme) && e.domaine !== "switch"), _ = [...new Set(ee.map((e) => e.plateforme))].filter((e) => !Zi.has(e)).map((t) => u(mt(e, t), ee.filter((e) => e.plateforme === t).slice(0, g), "maison")), ne = [
		J([s("systeme")]),
		u(i.misesAJour, h.slice(0, g), "complet"),
		u(i.piles, m.slice(0, g), "complet"),
		u(i.machine, te.slice(0, 12), "maison"),
		..._
	].filter((e) => e !== null);
	if (a.push(X({
		path: "systeme",
		title: i.systeme,
		icon: "mdi:server-outline",
		subview: !0,
		ouverture: o("systeme"),
		scene: ne,
		cote: e.user?.is_admin ? [{
			type: "repairs",
			hide_empty: !0,
			grid_options: { columns: 12 }
		}, {
			type: "discovered-devices",
			hide_empty: !0,
			grid_options: { columns: 12 }
		}] : [],
		coteApres: 1
	})), r.bilan !== !1 && Wn(e, t)) {
		let r = Ft(e, t), s = t.temperaturesInterieures.map((e) => e[0]).slice(0, 6), c = [...r.length ? [Y(i.huitSemaines), {
			type: "statistics-graph",
			entities: r,
			period: "week",
			days_to_show: 56,
			chart_type: "bar",
			stat_types: ["change"],
			grid_options: {
				columns: 12,
				rows: 4
			}
		}] : [], ...s.length ? [Y(i.temperatures7j), {
			type: "history-graph",
			entities: s,
			hours_to_show: 168,
			grid_options: {
				columns: 12,
				rows: 4
			}
		}] : []];
		a.push(X({
			path: "bilan",
			title: i.bilan,
			icon: "mdi:calendar-week",
			subview: !0,
			ouverture: o("bilan"),
			scene: [J([n({ type: "custom:automatic-dashboard-bilan" })])],
			cote: c,
			coteApres: 1
		}));
	}
	if (t.aRanger.length && a.push(X({
		path: "a-ranger",
		title: i.aRanger,
		icon: "mdi:tray-arrow-down",
		subview: !0,
		ouverture: o("a-ranger"),
		scene: [J([s("a-ranger"), n({ type: "custom:automatic-dashboard-a-ranger" })])]
	})), t.air.length) {
		let e = [...t.pieces.map((e) => [e.name, t.air.filter((t) => t.piece === e.area_id)]), [i.sansPieceTitre, t.air.filter((e) => !e.piece)]], n = t.air.filter((e) => e.classe === "carbon_dioxide").map((e) => e.id).slice(0, 8);
		a.push(X({
			path: "air",
			title: i.air,
			icon: "mdi:air-filter",
			subview: !0,
			ouverture: o("air"),
			scene: e.map(([e, t]) => u(e, t, "maison")).filter((e) => e !== null),
			cote: n.length ? [Y(i.co2Jour), {
				type: "history-graph",
				entities: n,
				hours_to_show: 24,
				grid_options: {
					columns: 12,
					rows: 4
				}
			}] : [],
			coteApres: 1
		}));
	}
	if (t.vehicules.length) {
		let n = /* @__PURE__ */ new Map();
		for (let e of t.vehicules) {
			let t = e.appareil ?? e.id;
			n.has(t) || n.set(t, []), n.get(t).push(e);
		}
		let r = [...n].map(([t, n]) => u(e.devices[t]?.name_by_user || e.devices[t]?.name || i.vehicule, n.filter((e) => !e.secondaire || e.role === "mesure").slice(0, 12), "maison")).filter((e) => e !== null);
		a.push(X({
			path: "vehicule",
			title: i.vehicule,
			icon: "mdi:car-electric-outline",
			subview: !0,
			ouverture: o("vehicule"),
			scene: r
		}));
	}
	if (t.exterieur.length >= 3) {
		let n = /* @__PURE__ */ new Set(), r = (e) => t.exterieur.filter((t) => !n.has(t.id) && e(t)).map((e) => (n.add(e.id), e)), s = r((e) => e.domaine === "cover" && ["gate", "garage"].includes(e.classe ?? "")), c = r((e) => e.domaine === "lawn_mower"), l = r((e) => e.domaine === "valve" || /arrosage|irrigation|sprinkler|piscine|pool|bassin/i.test(`${e.nomPropre} ${e.etat.attributes.friendly_name ?? ""}`)), d = r(() => !0), f = [
			u(i.jardin, d, "maison"),
			u(i.portailGarage, s, "maison"),
			u(i.arrosage, l, "maison"),
			u(i.tondeuse, c, "maison")
		].filter((e) => e !== null), p = t.meteo ? [{
			type: "weather-forecast",
			entity: t.meteo,
			forecast_type: "hourly",
			show_current: !0,
			show_forecast: !0,
			...e.config.location_name ? { name: e.config.location_name } : {},
			grid_options: {
				columns: 12,
				rows: 4
			}
		}] : [];
		a.push(X({
			path: "exterieur",
			title: i.exterieur,
			icon: "mdi:tree-outline",
			subview: !0,
			ouverture: o("exterieur"),
			scene: f,
			cote: p,
			coteApres: 1
		}));
	}
	return t.mode !== "decouverte" && a.push(X({
		path: "mes-favoris",
		title: i.mesFavoris,
		icon: "mdi:star-outline",
		subview: !0,
		ouverture: o("mes-favoris"),
		scene: [J([n({ type: "custom:automatic-dashboard-mes-favoris" })])]
	})), t.mode !== "decouverte" && (t.lumieres.length || t.securite.length) && a.push(X({
		path: "depart",
		title: i.jePars,
		icon: "mdi:exit-run",
		subview: !0,
		ouverture: o("depart"),
		scene: [J([n({ type: "custom:automatic-dashboard-depart" })])]
	})), a.push({
		path: "tablette",
		title: i.tabletteMurale,
		icon: "mdi:tablet-dashboard",
		type: "panel",
		subview: !0,
		theme: li,
		cards: [n({ type: "custom:automatic-dashboard-tablette" })]
	}), a;
}
// src/strategie/strategie.ts
function $i(e) {
	let t = (e) => Array.isArray(e) ? e.filter((e) => typeof e == "string") : void 0, n = [
		"auto",
		"decouverte",
		"maison",
		"complet"
	], r = e.noms && typeof e.noms == "object" && !Array.isArray(e.noms) ? Object.fromEntries(Object.entries(e.noms).filter(([, e]) => typeof e == "string" && e.trim())) : void 0, i = (e, t) => t.includes(e) ? e : void 0, a = (e) => typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 23 ? e : void 0, o = e.tablette && typeof e.tablette == "object" ? e.tablette : void 0, s = o ? {
		debut_nuit: a(o.debut_nuit),
		fin_nuit: a(o.fin_nuit),
		reveil: typeof o.reveil == "string" && o.reveil.includes(".") ? o.reveil : void 0
	} : void 0;
	return {
		mode: n.includes(e.mode) ? e.mode : void 0,
		masquer: t(e.masquer),
		favoris: t(e.favoris),
		completer: e.completer !== !1 && void 0,
		noms: r,
		style: i(e.style, [
			"automatic",
			"doux",
			"contraste",
			"home_assistant"
		]),
		pieces: i(e.pieces, ["barres", "mosaique"]),
		tuiles: i(e.tuiles, ["automatic", "home_assistant"]),
		ciel: e.ciel !== !1 && void 0,
		conseils: e.conseils !== !1 && void 0,
		bilan: e.bilan !== !1 && void 0,
		tablette: s && Object.values(s).some((e) => e !== void 0) ? s : void 0
	};
}
function ea(e, t) {
	let n = typeof e.entity == "string" ? e.entity : "";
	return t[n] && e.name === void 0 ? {
		...e,
		name: t[n]
	} : e;
}
async function ta(e, t) {
	let n = $i(e);
	await bt(t);
	let r = An(t, n), i = (e) => ({
		...e,
		reglages: n
	}), a = [
		r.meteo && "meteo",
		r.temperaturesInterieures.length > 0 && "climat",
		r.lumieres.length > 0 && "lumieres",
		r.securite.length > 0 && "securite",
		r.puissanceReseau && "energie",
		r.mode === "decouverte" && "soleil",
		"systeme",
		r.air.length > 0 && "air",
		r.vehicules.length > 0 && "vehicule",
		r.exterieur.length >= 3 && "exterieur",
		r.aRanger.length > 0 && "a-ranger",
		r.mode !== "decouverte" && (r.lumieres.length > 0 || r.securite.length > 0) && "depart"
	].filter((e) => typeof e == "string").map((e) => i({
		type: "custom:automatic-dashboard-pastille",
		sujet: e
	})), o = [r.mode === "decouverte" ? xi(t, r, i, a) : bi(t, r, i, a, await pi(t, r, n)), ...Qi(t, r, i, n)];
	Object.keys(r.noms).length && (o = o.map((e) => ({
		...e,
		...e.sections ? { sections: e.sections.map((e) => ({
			...e,
			cards: e.cards.map((e) => ea(e, r.noms))
		})) } : {},
		...e.sidebar ? { sidebar: {
			...e.sidebar,
			sections: e.sidebar.sections.map((e) => ({
				...e,
				cards: e.cards.map((e) => ea(e, r.noms))
			}))
		} } : {}
	})));
	let s = {
		automatic: li,
		doux: `${li} Soft`,
		contraste: `${li} Contrast`,
		home_assistant: void 0
	}[n.style ?? "automatic"];
	return o = o.map(({ theme: e, ...t }) => s ? {
		...t,
		theme: s
	} : t), {
		title: e.title || "Automatic Dashboard",
		views: o
	};
}
var na = {
	areas: {
		bureau: {
			aliases: [],
			area_id: "bureau",
			floor_id: null,
			humidity_entity_id: null,
			icon: "mdi:desk",
			labels: [],
			name: "Bureau",
			temperature_entity_id: null
		},
		chambre: {
			aliases: [],
			area_id: "chambre",
			floor_id: null,
			humidity_entity_id: null,
			icon: "mdi:bed-outline",
			labels: [],
			name: "Chambre",
			temperature_entity_id: null
		},
		chambre_des_enfants: {
			aliases: [],
			area_id: "chambre_des_enfants",
			floor_id: null,
			humidity_entity_id: null,
			icon: "mdi:teddy-bear",
			labels: [],
			name: "Chambre des enfants",
			temperature_entity_id: null
		},
		cuisine: {
			aliases: [],
			area_id: "cuisine",
			floor_id: null,
			humidity_entity_id: null,
			icon: "mdi:stove",
			labels: [],
			name: "Cuisine",
			temperature_entity_id: null
		},
		entree: {
			aliases: [],
			area_id: "entree",
			floor_id: null,
			humidity_entity_id: null,
			icon: "mdi:door-open",
			labels: [],
			name: "Entrée",
			temperature_entity_id: null
		},
		salle_de_bain: {
			aliases: [],
			area_id: "salle_de_bain",
			floor_id: null,
			humidity_entity_id: null,
			icon: "mdi:shower",
			labels: [],
			name: "Salle de bain",
			temperature_entity_id: null
		},
		salon: {
			aliases: [],
			area_id: "salon",
			floor_id: null,
			humidity_entity_id: null,
			icon: "mdi:sofa-outline",
			labels: [],
			name: "Salon",
			temperature_entity_id: null
		}
	},
	config: {
		components: /* @__PURE__ */ "ai_task,air_quality,alarm_control_panel,analytics,api,application_credentials,assist_pipeline,assist_satellite,auth,automation,backup,backup.event,backup.sensor,battery,binary_sensor,blueprint,bluetooth,brands,button,calendar,camera,automatic_dashboard,climate,cloud,cloud.tts,config,conversation,counter,cover,date,datetime,default_config,demo,demo.air_quality,demo.alarm_control_panel,demo.binary_sensor,demo.button,demo.calendar,demo.camera,demo.climate,demo.cover,demo.date,demo.datetime,demo.device_tracker,demo.event,demo.fan,demo.geo_location,demo.humidifier,demo.image_processing,demo.lawn_mower,demo.light,demo.lock,demo.media_player,demo.notify,demo.number,demo.remote,demo.select,demo.sensor,demo.siren,demo.stt,demo.switch,demo.text,demo.time,demo.tts,demo.update,demo.vacuum,demo.valve,demo.water_heater,demo.weather,device_automation,device_tracker,dhcp,diagnostics,door,energy,energy.sensor,event,fan,ffmpeg,file,file_upload,frontend,garage_door,gate,geo_location,go2rtc,google_translate,google_translate.tts,group,hardware,history,homeassistant,homeassistant.scene,homeassistant_alerts,http,humidifier,humidity,illuminance,image,image_processing,image_upload,infrared,input_boolean,input_button,input_datetime,input_number,input_select,input_text,integration.sensor,intent,labs,lawn_mower,light,llm,local_calendar,local_calendar.calendar,lock,logbook,logger,lovelace,map_tiles,marketplace,marketplace.switch,marketplace.update,media_player,media_source,met,met.weather,meteo_france,meteo_france.sensor,meteo_france.weather,mobile_app,mobile_app.notify,moisture,motion,my,network,notify,number,occupancy,onboarding,persistent_notification,person,power,radio_browser,radio_frequency,recorder,remote,repairs,scene,schedule,script,search,select,sensor,shopping_list,shopping_list.todo,siren,ssdp,stream,stt,sun,sun.binary_sensor,sun.sensor,switch,system_health,system_log,tag,temperature,template,template.binary_sensor,template.sensor,text,time,timer,todo,trace,tts,universal.media_player,update,usage_prediction,usb,vacuum,valve,vibration,wake_word,water_heater,weather,web_rtc,webhook,websocket_api,window,zeroconf,zone".split(","),
		country: "FR",
		language: "fr",
		latitude: 43.2965,
		location_name: "Appartement d'essai",
		longitude: 5.3698,
		time_zone: "Europe/Paris",
		unit_system: {
			accumulated_precipitation: "mm",
			area: "m²",
			length: "km",
			mass: "g",
			pressure: "Pa",
			temperature: "°C",
			volume: "L",
			wind_speed: "m/s"
		},
		version: "2026.11.1"
	},
	devices: /* @__PURE__ */ JSON.parse("{\"00a19399a7587f38a2b00982c9cb2e87\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"00a19399a7587f38a2b00982c9cb2e87\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo Living Room Bulb Update\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"00ea96170b4dea25e1f40567ebc18562\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"00ea96170b4dea25e1f40567ebc18562\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo Update No Install\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"07317eb88e8043e363dbc608279d6c93\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"07317eb88e8043e363dbc608279d6c93\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo Update with Decimal Progress\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"083d0412e98999fe5a2427f361b95a34\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"083d0412e98999fe5a2427f361b95a34\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Text with only lower case characters\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"1755c38563b6711bcba207b4a1631dd4\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"1755c38563b6711bcba207b4a1631dd4\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Trees\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"1a84cbdb2646e87df019040f7716a886\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"1a84cbdb2646e87df019040f7716a886\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Text with 1 to 5 characters\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"1c6a76fd16ba14766176c04b374fbb01\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"1c6a76fd16ba14766176c04b374fbb01\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"My Lawn Mower\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"20c4b1258a6713db7be1f651c45c3b38\":{\"area_id\":\"chambre_des_enfants\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"20c4b1258a6713db7be1f651c45c3b38\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Decorative Lights\",\"name_by_user\":\"Guirlande lumineuse\",\"parent_device_id\":null,\"via_device_id\":null},\"21f4f5d3b108b0ef211316618c5da9c5\":{\"area_id\":\"chambre\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"21f4f5d3b108b0ef211316618c5da9c5\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Hall Window\",\"name_by_user\":\"Volet de la chambre\",\"parent_device_id\":null,\"via_device_id\":null},\"22c81293a184a2ae8a4b4e3ea7537593\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"22c81293a184a2ae8a4b4e3ea7537593\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Date and Time\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"2c3d34f47bfbac309e6593baaf5b12e0\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"2c3d34f47bfbac309e6593baaf5b12e0\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo vacuum 3 third floor\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"306804635fc951d33c82b313de3a8558\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":\"service\",\"id\":\"306804635fc951d33c82b313de3a8558\",\"labels\":[],\"manufacturer\":\"Google\",\"model\":\"Google Translate TTS\",\"name\":\"Google Translate en com\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"312f5bdfcead8fa418f4e251230019f9\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":\"service\",\"id\":\"312f5bdfcead8fa418f4e251230019f9\",\"labels\":[],\"manufacturer\":\"Météo-France\",\"model\":\"Météo-France mobile API\",\"name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"37aec7927889b260a0c1bad680cfb869\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"37aec7927889b260a0c1bad680cfb869\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Total gas 1\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"38211e3feb5a779c994c0fb902138cab\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"38211e3feb5a779c994c0fb902138cab\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo add-on\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"39b783bbebe6d92c48b801211835b7e1\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":\"service\",\"id\":\"39b783bbebe6d92c48b801211835b7e1\",\"labels\":[],\"manufacturer\":\"Home Assistant\",\"model\":\"Home Assistant Backup\",\"name\":\"Backup\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"428fb47842ae77dc2254da1796c9eb1e\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"428fb47842ae77dc2254da1796c9eb1e\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Front Garden\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"46702c2fe35066c42f00cc1c58baf79e\":{\"area_id\":\"salon\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"46702c2fe35066c42f00cc1c58baf79e\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Ceiling Lights\",\"name_by_user\":\"Plafonnier du salon\",\"parent_device_id\":null,\"via_device_id\":null},\"4c48e70160954be70447f2093c4f5ac9\":{\"area_id\":\"cuisine\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"4c48e70160954be70447f2093c4f5ac9\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Kitchen Lights\",\"name_by_user\":\"Réglette du plan de travail\",\"parent_device_id\":null,\"via_device_id\":null},\"4eee520df0f80d83b9ae4cac3117e1b2\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"4eee520df0f80d83b9ae4cac3117e1b2\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Speed\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"52c01a3029029345d2421abb0803c27a\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"52c01a3029029345d2421abb0803c27a\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo Update with Progress\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"5959683ac4f4d43c01bd5a7e386cb49d\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"5959683ac4f4d43c01bd5a7e386cb49d\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Notifier\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"5b083ee0e96f5a43827781ddb916802a\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"5b083ee0e96f5a43827781ddb916802a\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Back Garden\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"5e5d502eca7d917f810dd4d0a307b7f2\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"5e5d502eca7d917f810dd4d0a307b7f2\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Power consumption\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"5ed85c0cdec1e774659277a0728bd389\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"5ed85c0cdec1e774659277a0728bd389\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo No Update\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"639dd4532205dacfd2aa03e985053c68\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"639dd4532205dacfd2aa03e985053c68\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Total energy 1\",\"name_by_user\":\"Énergie consommée\",\"parent_device_id\":null,\"via_device_id\":null},\"679312a7e80ad6754384b6f58faeca41\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"679312a7e80ad6754384b6f58faeca41\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo vacuum 2 second floor\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"6bdc0b3a1a06bf52f32c46c4a3a08610\":{\"area_id\":\"salle_de_bain\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"6bdc0b3a1a06bf52f32c46c4a3a08610\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"AC\",\"name_by_user\":\"Prise du lave-linge\",\"parent_device_id\":null,\"via_device_id\":null},\"71cdb19055852b069c412f5d68ead51d\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"71cdb19055852b069c412f5d68ead51d\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Total gas 2\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"728dce97ca76cb5e86e7851222641f0e\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":\"service\",\"id\":\"728dce97ca76cb5e86e7851222641f0e\",\"labels\":[],\"manufacturer\":\"Met.no\",\"model\":\"Forecast\",\"name\":\"Appartement d'essai\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"78af92ebd07f5ebddcda1b540c6e37cc\":{\"area_id\":\"cuisine\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"78af92ebd07f5ebddcda1b540c6e37cc\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Basement Floor Wet\",\"name_by_user\":\"Fuite sous l'évier\",\"parent_device_id\":null,\"via_device_id\":null},\"7b87f4a976100abf1f1c02fbee89f8dd\":{\"area_id\":\"chambre\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"7b87f4a976100abf1f1c02fbee89f8dd\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Hvac\",\"name_by_user\":\"Climatisation\",\"parent_device_id\":null,\"via_device_id\":null},\"7eff8544f436e73af7fb340b7935e5a6\":{\"area_id\":\"salon\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"7eff8544f436e73af7fb340b7935e5a6\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Living Room RGBWW Lights\",\"name_by_user\":\"Lampadaire\",\"parent_device_id\":null,\"via_device_id\":null},\"7f81aee07216a73da4ee0bdd3b255c5f\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"7f81aee07216a73da4ee0bdd3b255c5f\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Small Range\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"8f6b43e02e82e526526f4e3f63f5bb95\":{\"area_id\":\"entree\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"8f6b43e02e82e526526f4e3f63f5bb95\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Entrance Color + White Lights\",\"name_by_user\":\"Plafonnier de l'entrée\",\"parent_device_id\":null,\"via_device_id\":null},\"959f84a128870bf81fcf25ee64ec8b77\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":\"service\",\"id\":\"959f84a128870bf81fcf25ee64ec8b77\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Sun\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"97f3bf649c56b35611748ae009c7a306\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"97f3bf649c56b35611748ae009c7a306\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Total energy 2\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"9dcc15dba807309023f92402b82b1d5f\":{\"area_id\":\"chambre_des_enfants\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"9dcc15dba807309023f92402b82b1d5f\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Ecobee\",\"name_by_user\":\"Radiateur des enfants\",\"parent_device_id\":null,\"via_device_id\":null},\"a0d460b7052e906786a66cdb48b7076b\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"a0d460b7052e906786a66cdb48b7076b\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Carbon dioxide\",\"name_by_user\":\"Qualité de l'air\",\"parent_device_id\":null,\"via_device_id\":null},\"b0a1eb2511c52edc5eb0ec59f188163e\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"b0a1eb2511c52edc5eb0ec59f188163e\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Outside Humidity\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"b26098ef9148cb6f7549d63ebe0a4bd8\":{\"area_id\":\"salon\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"b26098ef9148cb6f7549d63ebe0a4bd8\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo vacuum 0 ground floor\",\"name_by_user\":\"Aspirateur robot\",\"parent_device_id\":null,\"via_device_id\":null},\"b2940415ae13de9e2f19da5726be510a\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"b2940415ae13de9e2f19da5726be510a\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Thermostat\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"b627c18924c41304250a4822dda0e0b2\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"b627c18924c41304250a4822dda0e0b2\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Large Range\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"b63e39b52045c19cd3a2e578c37e0b16\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"b63e39b52045c19cd3a2e578c37e0b16\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Text\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"ba499f577fe4aa9d0e565744869f387f\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"ba499f577fe4aa9d0e565744869f387f\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Push\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"c2ff15ac50f80730c43849178e3d2d13\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"c2ff15ac50f80730c43849178e3d2d13\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Date\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"c39228280200c26024c6ef48b287de03\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"c39228280200c26024c6ef48b287de03\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Orchard\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"c8dd503e9257a2d6fb8f954e5ba153ee\":{\"area_id\":\"salon\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"c8dd503e9257a2d6fb8f954e5ba153ee\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"HeatPump\",\"name_by_user\":\"Radiateur du salon\",\"parent_device_id\":null,\"via_device_id\":null},\"d21a3829397e2767b3f851a5688086ab\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"d21a3829397e2767b3f851a5688086ab\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Pergola Roof\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"d45a7c890667676eb18057935e91e586\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"d45a7c890667676eb18057935e91e586\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Garage Door\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"d5f45f5e4ee19a38852704e4f79a260c\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"d5f45f5e4ee19a38852704e4f79a260c\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Password\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"d650c72429029c050119bf189af9570d\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"d650c72429029c050119bf189af9570d\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"PWM 1\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"db334c22dcfc8e1e344c91f05b7b3c03\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"db334c22dcfc8e1e344c91f05b7b3c03\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo vacuum 4 fourth floor\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"dbc9e73f9feacbcbd10a5404de95ae1a\":{\"area_id\":\"chambre\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"dbc9e73f9feacbcbd10a5404de95ae1a\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Bed Light\",\"name_by_user\":\"Lampe de chevet\",\"parent_device_id\":null,\"via_device_id\":null},\"dc2c8408429b037323d1a96d636e74ce\":{\"area_id\":\"cuisine\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"dc2c8408429b037323d1a96d636e74ce\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Kitchen Window\",\"name_by_user\":\"Volet de la cuisine\",\"parent_device_id\":null,\"via_device_id\":null},\"e20b4174a22da755b7fa22e080543141\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"e20b4174a22da755b7fa22e080543141\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Temperature setting\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"e25b5fdd0e290dec2f536d3e571818c6\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"e25b5fdd0e290dec2f536d3e571818c6\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Time\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"e3daa198c4138bacd3d4ccfc0406e080\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"e3daa198c4138bacd3d4ccfc0406e080\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"volume\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"ecff6da16d48522e5de506286a9629f1\":{\"area_id\":\"bureau\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"ecff6da16d48522e5de506286a9629f1\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Office RGBW Lights\",\"name_by_user\":\"Lampe de bureau\",\"parent_device_id\":null,\"via_device_id\":null},\"edf6865153a6b9c561e9d307a5eb651c\":{\"area_id\":\"entree\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"edf6865153a6b9c561e9d307a5eb651c\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Movement Backyard\",\"name_by_user\":\"Mouvement dans l'entrée\",\"parent_device_id\":null,\"via_device_id\":null},\"f2948c0bf0727f5f9205fabe972ea108\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"f2948c0bf0727f5f9205fabe972ea108\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Outside Temperature\",\"name_by_user\":\"Température extérieure\",\"parent_device_id\":null,\"via_device_id\":null},\"f63b719b882106b872102cd46699529a\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"f63b719b882106b872102cd46699529a\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Demo vacuum 1 first floor\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"f6dcaf7f6cf13120d8ea595e62989f09\":{\"area_id\":null,\"disabled_by\":null,\"entry_type\":null,\"id\":\"f6dcaf7f6cf13120d8ea595e62989f09\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Carbon monoxide\",\"name_by_user\":null,\"parent_device_id\":null,\"via_device_id\":null},\"f93b7504bce92cb7e5c0105b1afe4db7\":{\"area_id\":\"salon\",\"disabled_by\":null,\"entry_type\":null,\"id\":\"f93b7504bce92cb7e5c0105b1afe4db7\",\"labels\":[],\"manufacturer\":null,\"model\":null,\"name\":\"Living Room Window\",\"name_by_user\":\"Volet du salon\",\"parent_device_id\":null,\"via_device_id\":null}}"),
	entities: /* @__PURE__ */ JSON.parse("{\"alarm_control_panel.security\":{\"entity_id\":\"alarm_control_panel.security\",\"hidden\":false,\"labels\":[],\"name\":\"Alarme\",\"platform\":\"demo\"},\"binary_sensor.basement_floor_wet\":{\"device_id\":\"78af92ebd07f5ebddcda1b540c6e37cc\",\"entity_id\":\"binary_sensor.basement_floor_wet\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"binary_sensor.detecteur_de_fumee\":{\"area_id\":\"entree\",\"entity_id\":\"binary_sensor.detecteur_de_fumee\",\"hidden\":false,\"labels\":[],\"name\":\"Détecteur de fumée\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"binary_sensor.fenetre_de_la_chambre\":{\"area_id\":\"chambre\",\"entity_id\":\"binary_sensor.fenetre_de_la_chambre\",\"hidden\":false,\"labels\":[],\"name\":\"Fenêtre de la chambre\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"binary_sensor.fenetre_du_salon\":{\"area_id\":\"salon\",\"entity_id\":\"binary_sensor.fenetre_du_salon\",\"hidden\":false,\"labels\":[],\"name\":\"Fenêtre du salon\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"binary_sensor.fuite_dans_la_salle_de_bain\":{\"area_id\":\"salle_de_bain\",\"entity_id\":\"binary_sensor.fuite_dans_la_salle_de_bain\",\"hidden\":false,\"labels\":[],\"name\":\"Fuite dans la salle de bain\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"binary_sensor.lave_linge\":{\"area_id\":\"salle_de_bain\",\"entity_id\":\"binary_sensor.lave_linge\",\"hidden\":false,\"labels\":[],\"name\":\"Lave-linge\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"binary_sensor.movement_backyard\":{\"device_id\":\"edf6865153a6b9c561e9d307a5eb651c\",\"entity_id\":\"binary_sensor.movement_backyard\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"binary_sensor.outside_temperature_battery_charging\":{\"device_id\":\"f2948c0bf0727f5f9205fabe972ea108\",\"entity_category\":\"diagnostic\",\"entity_id\":\"binary_sensor.outside_temperature_battery_charging\",\"hidden\":true,\"labels\":[],\"name\":\"Battery Charging\",\"next_name_part\":\"device\",\"platform\":\"demo\"},\"binary_sensor.porte_d_entree\":{\"area_id\":\"entree\",\"entity_id\":\"binary_sensor.porte_d_entree\",\"hidden\":false,\"labels\":[],\"name\":\"Porte d'entrée\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"binary_sensor.presence_dans_le_salon\":{\"area_id\":\"salon\",\"entity_id\":\"binary_sensor.presence_dans_le_salon\",\"hidden\":false,\"labels\":[],\"name\":\"Présence dans le salon\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"button.push\":{\"device_id\":\"ba499f577fe4aa9d0e565744869f387f\",\"entity_id\":\"button.push\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"calendar.maison\":{\"entity_id\":\"calendar.maison\",\"hidden\":false,\"labels\":[],\"name\":\"Maison\",\"platform\":\"local_calendar\"},\"climate.ecobee\":{\"device_id\":\"9dcc15dba807309023f92402b82b1d5f\",\"entity_id\":\"climate.ecobee\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"ubercool\"},\"climate.heatpump\":{\"device_id\":\"c8dd503e9257a2d6fb8f954e5ba153ee\",\"entity_id\":\"climate.heatpump\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"ubercool\"},\"climate.hvac\":{\"device_id\":\"7b87f4a976100abf1f1c02fbee89f8dd\",\"entity_id\":\"climate.hvac\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"ubercool\"},\"cover.garage_door\":{\"device_id\":\"d45a7c890667676eb18057935e91e586\",\"entity_id\":\"cover.garage_door\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"cover.hall_window\":{\"device_id\":\"21f4f5d3b108b0ef211316618c5da9c5\",\"entity_id\":\"cover.hall_window\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"cover.kitchen_window\":{\"device_id\":\"dc2c8408429b037323d1a96d636e74ce\",\"entity_id\":\"cover.kitchen_window\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"cover.living_room_window\":{\"device_id\":\"f93b7504bce92cb7e5c0105b1afe4db7\",\"entity_id\":\"cover.living_room_window\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"living_room_window\"},\"cover.pergola_roof\":{\"device_id\":\"d21a3829397e2767b3f851a5688086ab\",\"entity_id\":\"cover.pergola_roof\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"date.date\":{\"device_id\":\"c2ff15ac50f80730c43849178e3d2d13\",\"entity_id\":\"date.date\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"datetime.date_and_time\":{\"device_id\":\"22c81293a184a2ae8a4b4e3ea7537593\",\"entity_id\":\"datetime.date_and_time\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"event.backup_automatic_backup\":{\"device_id\":\"39b783bbebe6d92c48b801211835b7e1\",\"entity_id\":\"event.backup_automatic_backup\",\"hidden\":false,\"labels\":[],\"name\":\"Sauvegarde automatique\",\"next_name_part\":\"device\",\"platform\":\"backup\",\"translation_key\":\"automatic_backup_event\"},\"event.push_button_press\":{\"device_id\":\"ba499f577fe4aa9d0e565744869f387f\",\"entity_id\":\"event.push_button_press\",\"hidden\":true,\"labels\":[],\"name\":\"Button press\",\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"push\"},\"fan.ceiling_fan\":{\"entity_id\":\"fan.ceiling_fan\",\"hidden\":true,\"labels\":[],\"name\":\"Ceiling Fan\",\"platform\":\"demo\",\"translation_key\":\"demo\"},\"fan.living_room_fan\":{\"entity_id\":\"fan.living_room_fan\",\"hidden\":false,\"labels\":[],\"name\":\"Ventilateur\",\"platform\":\"demo\",\"translation_key\":\"demo\"},\"fan.percentage_full_fan\":{\"entity_id\":\"fan.percentage_full_fan\",\"hidden\":true,\"labels\":[],\"name\":\"Percentage Full Fan\",\"platform\":\"demo\",\"translation_key\":\"demo\"},\"fan.percentage_limited_fan\":{\"entity_id\":\"fan.percentage_limited_fan\",\"hidden\":true,\"labels\":[],\"name\":\"Percentage Limited Fan\",\"platform\":\"demo\",\"translation_key\":\"demo\"},\"fan.preset_only_limited_fan\":{\"entity_id\":\"fan.preset_only_limited_fan\",\"hidden\":true,\"labels\":[],\"name\":\"Preset Only Limited Fan\",\"platform\":\"demo\",\"translation_key\":\"demo\"},\"lawn_mower.my_lawn_mower\":{\"device_id\":\"1c6a76fd16ba14766176c04b374fbb01\",\"entity_id\":\"lawn_mower.my_lawn_mower\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"light.bed_light\":{\"device_id\":\"dbc9e73f9feacbcbd10a5404de95ae1a\",\"entity_id\":\"light.bed_light\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"bed_light\"},\"light.ceiling_lights\":{\"device_id\":\"46702c2fe35066c42f00cc1c58baf79e\",\"entity_id\":\"light.ceiling_lights\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"light.entrance_color_white_lights\":{\"device_id\":\"8f6b43e02e82e526526f4e3f63f5bb95\",\"entity_id\":\"light.entrance_color_white_lights\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"light.kitchen_lights\":{\"device_id\":\"4c48e70160954be70447f2093c4f5ac9\",\"entity_id\":\"light.kitchen_lights\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"light.living_room_rgbww_lights\":{\"device_id\":\"7eff8544f436e73af7fb340b7935e5a6\",\"entity_id\":\"light.living_room_rgbww_lights\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"light.office_rgbw_lights\":{\"device_id\":\"ecff6da16d48522e5de506286a9629f1\",\"entity_id\":\"light.office_rgbw_lights\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"media_player.enceinte_du_salon\":{\"area_id\":\"salon\",\"entity_id\":\"media_player.enceinte_du_salon\",\"hidden\":false,\"labels\":[],\"name\":\"Enceinte du salon\",\"next_name_part\":\"area\",\"platform\":\"universal\"},\"notify.notifier\":{\"device_id\":\"5959683ac4f4d43c01bd5a7e386cb49d\",\"entity_id\":\"notify.notifier\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"number.large_range\":{\"device_id\":\"b627c18924c41304250a4822dda0e0b2\",\"entity_id\":\"number.large_range\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"range\"},\"number.pwm_1\":{\"device_id\":\"d650c72429029c050119bf189af9570d\",\"entity_id\":\"number.pwm_1\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"pwm\"},\"number.small_range\":{\"device_id\":\"7f81aee07216a73da4ee0bdd3b255c5f\",\"entity_id\":\"number.small_range\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"range\"},\"number.temperature_setting\":{\"device_id\":\"e20b4174a22da755b7fa22e080543141\",\"entity_id\":\"number.temperature_setting\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"number.volume\":{\"device_id\":\"e3daa198c4138bacd3d4ccfc0406e080\",\"entity_id\":\"number.volume\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"volume\"},\"person.antonin_essai\":{\"entity_id\":\"person.antonin_essai\",\"hidden\":false,\"labels\":[],\"name\":\"Antonin (essai)\",\"platform\":\"person\"},\"person.camille\":{\"entity_id\":\"person.camille\",\"hidden\":false,\"labels\":[],\"name\":\"Camille\",\"platform\":\"person\"},\"select.speed\":{\"device_id\":\"4eee520df0f80d83b9ae4cac3117e1b2\",\"entity_id\":\"select.speed\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"speed\"},\"sensor.backup_backup_manager_state\":{\"device_id\":\"39b783bbebe6d92c48b801211835b7e1\",\"entity_id\":\"sensor.backup_backup_manager_state\",\"hidden\":false,\"labels\":[],\"name\":\"État du gestionnaire de sauvegarde\",\"next_name_part\":\"device\",\"platform\":\"backup\",\"translation_key\":\"backup_manager_state\"},\"sensor.backup_last_attempted_automatic_backup\":{\"device_id\":\"39b783bbebe6d92c48b801211835b7e1\",\"entity_id\":\"sensor.backup_last_attempted_automatic_backup\",\"hidden\":false,\"labels\":[],\"name\":\"Dernière tentative de sauvegarde automatique\",\"next_name_part\":\"device\",\"platform\":\"backup\",\"translation_key\":\"last_attempted_automatic_backup\"},\"sensor.backup_last_successful_automatic_backup\":{\"device_id\":\"39b783bbebe6d92c48b801211835b7e1\",\"entity_id\":\"sensor.backup_last_successful_automatic_backup\",\"hidden\":false,\"labels\":[],\"name\":\"Dernière sauvegarde automatique réussie\",\"next_name_part\":\"device\",\"platform\":\"backup\",\"translation_key\":\"last_successful_automatic_backup\"},\"sensor.backup_last_successful_automatic_backup_size\":{\"device_id\":\"39b783bbebe6d92c48b801211835b7e1\",\"display_precision\":0,\"entity_id\":\"sensor.backup_last_successful_automatic_backup_size\",\"hidden\":false,\"labels\":[],\"name\":\"Last successful automatic backup size\",\"next_name_part\":\"device\",\"platform\":\"backup\",\"translation_key\":\"last_successful_automatic_backup_size\"},\"sensor.backup_next_scheduled_automatic_backup\":{\"device_id\":\"39b783bbebe6d92c48b801211835b7e1\",\"entity_id\":\"sensor.backup_next_scheduled_automatic_backup\",\"hidden\":false,\"labels\":[],\"name\":\"Prochaine sauvegarde automatique programmée\",\"next_name_part\":\"device\",\"platform\":\"backup\",\"translation_key\":\"next_scheduled_automatic_backup\"},\"sensor.carbon_dioxide\":{\"device_id\":\"a0d460b7052e906786a66cdb48b7076b\",\"entity_id\":\"sensor.carbon_dioxide\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.carbon_dioxide_battery\":{\"device_id\":\"a0d460b7052e906786a66cdb48b7076b\",\"entity_category\":\"diagnostic\",\"entity_id\":\"sensor.carbon_dioxide_battery\",\"hidden\":false,\"labels\":[],\"name\":\"Battery\",\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.carbon_monoxide\":{\"device_id\":\"f6dcaf7f6cf13120d8ea595e62989f09\",\"entity_id\":\"sensor.carbon_monoxide\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.consommation_de_la_maison\":{\"display_precision\":0,\"entity_id\":\"sensor.consommation_de_la_maison\",\"hidden\":false,\"labels\":[],\"name\":\"Consommation de la maison\",\"platform\":\"template\"},\"sensor.energie_de_la_maison\":{\"display_precision\":3,\"entity_id\":\"sensor.energie_de_la_maison\",\"hidden\":false,\"labels\":[],\"name\":\"Énergie de la maison\",\"platform\":\"integration\"},\"sensor.humidite_chambre\":{\"area_id\":\"chambre\",\"entity_id\":\"sensor.humidite_chambre\",\"hidden\":false,\"labels\":[],\"name\":\"Humidité chambre\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.humidite_salle_de_bain\":{\"area_id\":\"salle_de_bain\",\"entity_id\":\"sensor.humidite_salle_de_bain\",\"hidden\":false,\"labels\":[],\"name\":\"Humidité salle de bain\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.humidite_salon\":{\"area_id\":\"salon\",\"entity_id\":\"sensor.humidite_salon\",\"hidden\":false,\"labels\":[],\"name\":\"Humidité salon\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.meteo_france_alert_for_department_13_13_weather_alert\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"entity_id\":\"sensor.meteo_france_alert_for_department_13_13_weather_alert\",\"hidden\":false,\"labels\":[],\"name\":\"13 Weather alert\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_cloud_cover\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_cloud_cover\",\"hidden\":false,\"labels\":[],\"name\":\"Marseille Cloud cover\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_daily_precipitation\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"display_precision\":0,\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_daily_precipitation\",\"hidden\":false,\"labels\":[],\"name\":\"Marseille Daily precipitation\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_freeze_chance\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_freeze_chance\",\"hidden\":false,\"labels\":[],\"name\":\"Marseille Freeze chance\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_humidity\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_humidity\",\"hidden\":false,\"labels\":[],\"name\":\"Marseille Humidity\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_rain_chance\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_rain_chance\",\"hidden\":false,\"labels\":[],\"name\":\"Marseille Rain chance\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_snow_chance\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_snow_chance\",\"hidden\":false,\"labels\":[],\"name\":\"Marseille Snow chance\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_uv\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_uv\",\"hidden\":false,\"labels\":[],\"name\":\"Marseille UV\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"},\"sensor.meteo_france_rain_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_next_rain\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"entity_id\":\"sensor.meteo_france_rain_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_next_rain\",\"hidden\":false,\"labels\":[],\"name\":\"Marseille Next rain\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"},\"sensor.outside_humidity\":{\"device_id\":\"b0a1eb2511c52edc5eb0ec59f188163e\",\"entity_id\":\"sensor.outside_humidity\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.outside_temperature\":{\"device_id\":\"f2948c0bf0727f5f9205fabe972ea108\",\"display_precision\":1,\"entity_id\":\"sensor.outside_temperature\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.outside_temperature_battery\":{\"device_id\":\"f2948c0bf0727f5f9205fabe972ea108\",\"entity_category\":\"diagnostic\",\"entity_id\":\"sensor.outside_temperature_battery\",\"hidden\":true,\"labels\":[],\"name\":\"Battery\",\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.pile_du_capteur_de_fenetre\":{\"area_id\":\"chambre\",\"entity_id\":\"sensor.pile_du_capteur_de_fenetre\",\"hidden\":false,\"labels\":[],\"name\":\"Pile du capteur de fenêtre\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.pile_du_capteur_de_porte\":{\"area_id\":\"entree\",\"entity_id\":\"sensor.pile_du_capteur_de_porte\",\"hidden\":false,\"labels\":[],\"name\":\"Pile du capteur de porte\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.pile_du_detecteur_de_fuite\":{\"area_id\":\"salle_de_bain\",\"entity_id\":\"sensor.pile_du_detecteur_de_fuite\",\"hidden\":false,\"labels\":[],\"name\":\"Pile du détecteur de fuite\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.power_consumption\":{\"device_id\":\"5e5d502eca7d917f810dd4d0a307b7f2\",\"display_precision\":0,\"entity_id\":\"sensor.power_consumption\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.puissance_du_lave_linge\":{\"area_id\":\"salle_de_bain\",\"display_precision\":0,\"entity_id\":\"sensor.puissance_du_lave_linge\",\"hidden\":false,\"labels\":[],\"name\":\"Puissance du lave-linge\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.sun_next_dawn\":{\"device_id\":\"959f84a128870bf81fcf25ee64ec8b77\",\"entity_category\":\"diagnostic\",\"entity_id\":\"sensor.sun_next_dawn\",\"hidden\":false,\"labels\":[],\"name\":\"Prochaine aube\",\"next_name_part\":\"device\",\"platform\":\"sun\",\"translation_key\":\"next_dawn\"},\"sensor.sun_next_dusk\":{\"device_id\":\"959f84a128870bf81fcf25ee64ec8b77\",\"entity_category\":\"diagnostic\",\"entity_id\":\"sensor.sun_next_dusk\",\"hidden\":false,\"labels\":[],\"name\":\"Prochain crépuscule\",\"next_name_part\":\"device\",\"platform\":\"sun\",\"translation_key\":\"next_dusk\"},\"sensor.sun_next_midnight\":{\"device_id\":\"959f84a128870bf81fcf25ee64ec8b77\",\"entity_category\":\"diagnostic\",\"entity_id\":\"sensor.sun_next_midnight\",\"hidden\":false,\"labels\":[],\"name\":\"Prochain minuit\",\"next_name_part\":\"device\",\"platform\":\"sun\",\"translation_key\":\"next_midnight\"},\"sensor.sun_next_noon\":{\"device_id\":\"959f84a128870bf81fcf25ee64ec8b77\",\"entity_category\":\"diagnostic\",\"entity_id\":\"sensor.sun_next_noon\",\"hidden\":false,\"labels\":[],\"name\":\"Prochain midi\",\"next_name_part\":\"device\",\"platform\":\"sun\",\"translation_key\":\"next_noon\"},\"sensor.sun_next_rising\":{\"device_id\":\"959f84a128870bf81fcf25ee64ec8b77\",\"entity_category\":\"diagnostic\",\"entity_id\":\"sensor.sun_next_rising\",\"hidden\":false,\"labels\":[],\"name\":\"Prochain lever\",\"next_name_part\":\"device\",\"platform\":\"sun\",\"translation_key\":\"next_rising\"},\"sensor.sun_next_setting\":{\"device_id\":\"959f84a128870bf81fcf25ee64ec8b77\",\"entity_category\":\"diagnostic\",\"entity_id\":\"sensor.sun_next_setting\",\"hidden\":false,\"labels\":[],\"name\":\"Prochain coucher\",\"next_name_part\":\"device\",\"platform\":\"sun\",\"translation_key\":\"next_setting\"},\"sensor.temperature_bureau\":{\"area_id\":\"bureau\",\"display_precision\":1,\"entity_id\":\"sensor.temperature_bureau\",\"hidden\":false,\"labels\":[],\"name\":\"Température bureau\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.temperature_chambre\":{\"area_id\":\"chambre\",\"display_precision\":1,\"entity_id\":\"sensor.temperature_chambre\",\"hidden\":false,\"labels\":[],\"name\":\"Température chambre\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.temperature_chambre_des_enfants\":{\"area_id\":\"chambre_des_enfants\",\"display_precision\":1,\"entity_id\":\"sensor.temperature_chambre_des_enfants\",\"hidden\":false,\"labels\":[],\"name\":\"Température chambre des enfants\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.temperature_cuisine\":{\"area_id\":\"cuisine\",\"display_precision\":1,\"entity_id\":\"sensor.temperature_cuisine\",\"hidden\":false,\"labels\":[],\"name\":\"Température cuisine\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.temperature_entree\":{\"area_id\":\"entree\",\"display_precision\":1,\"entity_id\":\"sensor.temperature_entree\",\"hidden\":false,\"labels\":[],\"name\":\"Température entrée\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.temperature_salle_de_bain\":{\"area_id\":\"salle_de_bain\",\"display_precision\":1,\"entity_id\":\"sensor.temperature_salle_de_bain\",\"hidden\":false,\"labels\":[],\"name\":\"Température salle de bain\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.temperature_salon\":{\"area_id\":\"salon\",\"display_precision\":1,\"entity_id\":\"sensor.temperature_salon\",\"hidden\":false,\"labels\":[],\"name\":\"Température salon\",\"next_name_part\":\"area\",\"platform\":\"template\"},\"sensor.thermostat\":{\"device_id\":\"b2940415ae13de9e2f19da5726be510a\",\"entity_id\":\"sensor.thermostat\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"thermostat_mode\"},\"sensor.total_energy_kwh\":{\"device_id\":\"639dd4532205dacfd2aa03e985053c68\",\"display_precision\":2,\"entity_id\":\"sensor.total_energy_kwh\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.total_energy_mwh\":{\"device_id\":\"97f3bf649c56b35611748ae009c7a306\",\"display_precision\":2,\"entity_id\":\"sensor.total_energy_mwh\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.total_gas_ft3\":{\"device_id\":\"71cdb19055852b069c412f5d68ead51d\",\"display_precision\":2,\"entity_id\":\"sensor.total_gas_ft3\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"sensor.total_gas_m3\":{\"device_id\":\"37aec7927889b260a0c1bad680cfb869\",\"display_precision\":2,\"entity_id\":\"sensor.total_gas_m3\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"switch.ac\":{\"device_id\":\"6bdc0b3a1a06bf52f32c46c4a3a08610\",\"entity_id\":\"switch.ac\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"air_conditioner\"},\"switch.decorative_lights\":{\"device_id\":\"20c4b1258a6713db7be1f651c45c3b38\",\"entity_id\":\"switch.decorative_lights\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"text.password\":{\"device_id\":\"d5f45f5e4ee19a38852704e4f79a260c\",\"entity_id\":\"text.password\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"text.text\":{\"device_id\":\"b63e39b52045c19cd3a2e578c37e0b16\",\"entity_id\":\"text.text\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"text.text_with_1_to_5_characters\":{\"device_id\":\"1a84cbdb2646e87df019040f7716a886\",\"entity_id\":\"text.text_with_1_to_5_characters\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"text.text_with_only_lower_case_characters\":{\"device_id\":\"083d0412e98999fe5a2427f361b95a34\",\"entity_id\":\"text.text_with_only_lower_case_characters\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"time.time\":{\"device_id\":\"e25b5fdd0e290dec2f536d3e571818c6\",\"entity_id\":\"time.time\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"todo.shopping_list\":{\"entity_id\":\"todo.shopping_list\",\"hidden\":false,\"labels\":[],\"name\":\"Shopping list\",\"platform\":\"shopping_list\",\"translation_key\":\"shopping_list\"},\"tts.google_translate_en_com\":{\"device_id\":\"306804635fc951d33c82b313de3a8558\",\"entity_id\":\"tts.google_translate_en_com\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"google_translate\"},\"update.demo_add_on\":{\"device_id\":\"38211e3feb5a779c994c0fb902138cab\",\"entity_category\":\"config\",\"entity_id\":\"update.demo_add_on\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"update.demo_living_room_bulb_update\":{\"device_id\":\"00a19399a7587f38a2b00982c9cb2e87\",\"entity_category\":\"config\",\"entity_id\":\"update.demo_living_room_bulb_update\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"update.demo_no_update\":{\"device_id\":\"5ed85c0cdec1e774659277a0728bd389\",\"entity_category\":\"config\",\"entity_id\":\"update.demo_no_update\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"update.demo_update_no_install\":{\"device_id\":\"00ea96170b4dea25e1f40567ebc18562\",\"entity_category\":\"diagnostic\",\"entity_id\":\"update.demo_update_no_install\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"update.demo_update_with_decimal_progress\":{\"device_id\":\"07317eb88e8043e363dbc608279d6c93\",\"entity_category\":\"config\",\"entity_id\":\"update.demo_update_with_decimal_progress\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"update.demo_update_with_progress\":{\"device_id\":\"52c01a3029029345d2421abb0803c27a\",\"entity_category\":\"config\",\"entity_id\":\"update.demo_update_with_progress\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"vacuum.demo_vacuum_0_ground_floor\":{\"device_id\":\"b26098ef9148cb6f7549d63ebe0a4bd8\",\"entity_id\":\"vacuum.demo_vacuum_0_ground_floor\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"model_s\"},\"vacuum.demo_vacuum_1_first_floor\":{\"device_id\":\"f63b719b882106b872102cd46699529a\",\"entity_id\":\"vacuum.demo_vacuum_1_first_floor\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"model_s\"},\"vacuum.demo_vacuum_2_second_floor\":{\"device_id\":\"679312a7e80ad6754384b6f58faeca41\",\"entity_id\":\"vacuum.demo_vacuum_2_second_floor\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"model_s\"},\"vacuum.demo_vacuum_3_third_floor\":{\"device_id\":\"2c3d34f47bfbac309e6593baaf5b12e0\",\"entity_id\":\"vacuum.demo_vacuum_3_third_floor\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"model_s\"},\"vacuum.demo_vacuum_4_fourth_floor\":{\"device_id\":\"db334c22dcfc8e1e344c91f05b7b3c03\",\"entity_id\":\"vacuum.demo_vacuum_4_fourth_floor\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\",\"translation_key\":\"model_s\"},\"valve.back_garden\":{\"device_id\":\"5b083ee0e96f5a43827781ddb916802a\",\"entity_id\":\"valve.back_garden\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"valve.front_garden\":{\"device_id\":\"428fb47842ae77dc2254da1796c9eb1e\",\"entity_id\":\"valve.front_garden\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"valve.orchard\":{\"device_id\":\"c39228280200c26024c6ef48b287de03\",\"entity_id\":\"valve.orchard\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"valve.trees\":{\"device_id\":\"1755c38563b6711bcba207b4a1631dd4\",\"entity_id\":\"valve.trees\",\"hidden\":true,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"demo\"},\"water_heater.demo_water_heater\":{\"entity_id\":\"water_heater.demo_water_heater\",\"hidden\":true,\"labels\":[],\"name\":\"Demo Water Heater\",\"platform\":\"demo\"},\"water_heater.demo_water_heater_celsius\":{\"area_id\":\"salle_de_bain\",\"entity_id\":\"water_heater.demo_water_heater_celsius\",\"hidden\":false,\"labels\":[],\"name\":\"Chauffe-eau\",\"next_name_part\":\"area\",\"platform\":\"demo\"},\"weather.demo_weather_north\":{\"entity_id\":\"weather.demo_weather_north\",\"hidden\":true,\"labels\":[],\"name\":\"Demo Weather North\",\"platform\":\"demo\"},\"weather.demo_weather_south\":{\"entity_id\":\"weather.demo_weather_south\",\"hidden\":true,\"labels\":[],\"name\":\"Demo Weather South\",\"platform\":\"demo\"},\"weather.maison_d_essai\":{\"device_id\":\"728dce97ca76cb5e86e7851222641f0e\",\"entity_id\":\"weather.maison_d_essai\",\"hidden\":false,\"labels\":[],\"next_name_part\":\"device\",\"platform\":\"met\"},\"weather.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille\":{\"device_id\":\"312f5bdfcead8fa418f4e251230019f9\",\"entity_id\":\"weather.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille\",\"hidden\":false,\"labels\":[],\"name\":\"Marseille\",\"next_name_part\":\"device\",\"platform\":\"meteo_france\"}}"),
	floors: {},
	states: /* @__PURE__ */ JSON.parse("{\"air_quality.demo_air_quality_home\":{\"attributes\":{\"attribution\":\"Powered by Home Assistant\",\"friendly_name\":\"Demo Air Quality Home\",\"nitrogen_oxide\":100,\"particulate_matter_10\":23,\"particulate_matter_2_5\":14,\"unit_of_measurement\":\"μg/m³\"},\"entity_id\":\"air_quality.demo_air_quality_home\",\"state\":\"14\"},\"air_quality.demo_air_quality_office\":{\"attributes\":{\"attribution\":\"Powered by Home Assistant\",\"friendly_name\":\"Demo Air Quality Office\",\"particulate_matter_10\":16,\"particulate_matter_2_5\":4,\"unit_of_measurement\":\"μg/m³\"},\"entity_id\":\"air_quality.demo_air_quality_office\",\"state\":\"4\"},\"alarm_control_panel.security\":{\"attributes\":{\"changed_by\":null,\"code_arm_required\":true,\"code_format\":\"number\",\"friendly_name\":\"Alarme\",\"next_state\":null,\"previous_state\":null,\"supported_features\":63},\"entity_id\":\"alarm_control_panel.security\",\"state\":\"disarmed\"},\"binary_sensor.basement_floor_wet\":{\"attributes\":{\"device_class\":\"moisture\",\"friendly_name\":\"Fuite sous l'évier\"},\"entity_id\":\"binary_sensor.basement_floor_wet\",\"state\":\"off\"},\"binary_sensor.detecteur_de_fumee\":{\"attributes\":{\"device_class\":\"smoke\",\"friendly_name\":\"Détecteur de fumée\"},\"entity_id\":\"binary_sensor.detecteur_de_fumee\",\"state\":\"off\"},\"binary_sensor.fenetre_de_la_chambre\":{\"attributes\":{\"device_class\":\"window\",\"friendly_name\":\"Fenêtre de la chambre\"},\"entity_id\":\"binary_sensor.fenetre_de_la_chambre\",\"state\":\"on\"},\"binary_sensor.fenetre_du_salon\":{\"attributes\":{\"device_class\":\"window\",\"friendly_name\":\"Fenêtre du salon\"},\"entity_id\":\"binary_sensor.fenetre_du_salon\",\"state\":\"off\"},\"binary_sensor.fuite_dans_la_salle_de_bain\":{\"attributes\":{\"device_class\":\"moisture\",\"friendly_name\":\"Fuite dans la salle de bain\"},\"entity_id\":\"binary_sensor.fuite_dans_la_salle_de_bain\",\"state\":\"off\"},\"binary_sensor.lave_linge\":{\"attributes\":{\"device_class\":\"running\",\"friendly_name\":\"Lave-linge\"},\"entity_id\":\"binary_sensor.lave_linge\",\"state\":\"on\"},\"binary_sensor.movement_backyard\":{\"attributes\":{\"device_class\":\"motion\",\"friendly_name\":\"Mouvement dans l'entrée\"},\"entity_id\":\"binary_sensor.movement_backyard\",\"state\":\"on\"},\"binary_sensor.outside_temperature_battery_charging\":{\"attributes\":{\"device_class\":\"battery_charging\",\"friendly_name\":\"Température extérieure Battery Charging\"},\"entity_id\":\"binary_sensor.outside_temperature_battery_charging\",\"state\":\"off\"},\"binary_sensor.porte_d_entree\":{\"attributes\":{\"device_class\":\"door\",\"friendly_name\":\"Porte d'entrée\"},\"entity_id\":\"binary_sensor.porte_d_entree\",\"state\":\"off\"},\"binary_sensor.presence_dans_le_salon\":{\"attributes\":{\"device_class\":\"occupancy\",\"friendly_name\":\"Présence dans le salon\"},\"entity_id\":\"binary_sensor.presence_dans_le_salon\",\"state\":\"on\"},\"button.push\":{\"attributes\":{\"friendly_name\":\"Push\"},\"entity_id\":\"button.push\",\"state\":\"unknown\"},\"calendar.calendar_1\":{\"attributes\":{\"all_day\":false,\"description\":\"Future Description\",\"end_time\":\"2026-11-16 22:44:57\",\"friendly_name\":\"Calendar 1\",\"location\":\"Future Location\",\"message\":\"Future Event\",\"start_time\":\"2026-11-16 21:44:57\"},\"entity_id\":\"calendar.calendar_1\",\"state\":\"off\"},\"calendar.calendar_2\":{\"attributes\":{\"all_day\":false,\"description\":\"\",\"end_time\":\"2026-11-16 21:44:57\",\"friendly_name\":\"Calendar 2\",\"location\":\"\",\"message\":\"Current Event\",\"start_time\":\"2026-11-16 20:44:57\"},\"entity_id\":\"calendar.calendar_2\",\"state\":\"on\"},\"calendar.maison\":{\"attributes\":{\"all_day\":false,\"description\":\"\",\"end_time\":\"2026-11-16 23:30:00\",\"friendly_name\":\"Maison\",\"location\":\"\",\"message\":\"Cours de piano\",\"start_time\":\"2026-11-16 22:30:00\",\"supported_features\":7},\"entity_id\":\"calendar.maison\",\"state\":\"off\"},\"camera.demo_camera\":{\"attributes\":{\"friendly_name\":\"Demo camera\",\"supported_features\":3},\"entity_id\":\"camera.demo_camera\",\"state\":\"streaming\"},\"camera.demo_camera_png\":{\"attributes\":{\"friendly_name\":\"Demo camera png\",\"supported_features\":3},\"entity_id\":\"camera.demo_camera_png\",\"state\":\"streaming\"},\"camera.demo_camera_without_stream\":{\"attributes\":{\"friendly_name\":\"Demo camera without stream\",\"supported_features\":1},\"entity_id\":\"camera.demo_camera_without_stream\",\"state\":\"streaming\"},\"climate.ecobee\":{\"attributes\":{\"current_temperature\":23,\"fan_mode\":\"auto_low\",\"fan_modes\":[\"on_low\",\"on_high\",\"auto_low\",\"auto_high\",\"off\"],\"friendly_name\":\"Radiateur des enfants\",\"hvac_modes\":[\"off\",\"cool\",\"heat_cool\",\"auto\",\"dry\",\"fan_only\"],\"max_temp\":35,\"min_temp\":7,\"preset_mode\":\"home\",\"preset_modes\":[\"home\",\"eco\",\"away\"],\"supported_features\":442,\"swing_mode\":\"auto\",\"swing_modes\":[\"auto\",\"1\",\"2\",\"3\",\"off\"],\"target_temp_high\":24,\"target_temp_low\":21,\"temperature_unit\":\"°C\"},\"entity_id\":\"climate.ecobee\",\"state\":\"heat_cool\"},\"climate.heatpump\":{\"attributes\":{\"current_temperature\":25.0,\"friendly_name\":\"Radiateur du salon\",\"hvac_action\":\"heating\",\"hvac_modes\":[\"heat\",\"off\"],\"max_temp\":35.0,\"min_temp\":7.0,\"supported_features\":385,\"temperature\":20.0,\"temperature_unit\":\"°C\"},\"entity_id\":\"climate.heatpump\",\"state\":\"heat\"},\"climate.hvac\":{\"attributes\":{\"current_humidity\":54.2,\"current_temperature\":22,\"fan_mode\":\"on_high\",\"fan_modes\":[\"on_low\",\"on_high\",\"auto_low\",\"auto_high\",\"off\"],\"friendly_name\":\"Climatisation\",\"humidity\":67.4,\"hvac_action\":\"cooling\",\"hvac_modes\":[\"off\",\"heat\",\"cool\",\"auto\",\"dry\",\"fan_only\"],\"max_humidity\":99,\"max_temp\":35,\"min_humidity\":30,\"min_temp\":7,\"supported_features\":943,\"swing_horizontal_mode\":\"auto\",\"swing_horizontal_modes\":[\"auto\",\"rangefull\",\"off\"],\"swing_mode\":\"off\",\"swing_modes\":[\"auto\",\"1\",\"2\",\"3\",\"off\"],\"target_humidity_step\":5,\"target_temp_high\":null,\"target_temp_low\":null,\"temperature\":21,\"temperature_unit\":\"°C\"},\"entity_id\":\"climate.hvac\",\"state\":\"cool\"},\"conversation.home_assistant\":{\"attributes\":{\"friendly_name\":\"Home Assistant\",\"supported_features\":1},\"entity_id\":\"conversation.home_assistant\",\"state\":\"unknown\"},\"cover.garage_door\":{\"attributes\":{\"device_class\":\"garage\",\"friendly_name\":\"Garage Door\",\"is_closed\":true,\"supported_features\":3},\"entity_id\":\"cover.garage_door\",\"state\":\"closed\"},\"cover.hall_window\":{\"attributes\":{\"current_position\":10,\"friendly_name\":\"Volet de la chambre\",\"is_closed\":false,\"supported_features\":15},\"entity_id\":\"cover.hall_window\",\"state\":\"open\"},\"cover.kitchen_window\":{\"attributes\":{\"friendly_name\":\"Volet de la cuisine\",\"is_closed\":true,\"supported_features\":11},\"entity_id\":\"cover.kitchen_window\",\"state\":\"closed\"},\"cover.living_room_window\":{\"attributes\":{\"current_position\":70,\"current_tilt_position\":50,\"friendly_name\":\"Volet du salon\",\"is_closed\":false,\"supported_features\":511,\"supported_speeds\":[\"slow\",\"fast\"]},\"entity_id\":\"cover.living_room_window\",\"state\":\"open\"},\"cover.pergola_roof\":{\"attributes\":{\"current_tilt_position\":60,\"friendly_name\":\"Pergola Roof\",\"is_closed\":true,\"supported_features\":240},\"entity_id\":\"cover.pergola_roof\",\"state\":\"closed\"},\"date.date\":{\"attributes\":{\"friendly_name\":\"Date\",\"icon\":\"mdi:calendar\"},\"entity_id\":\"date.date\",\"state\":\"2020-01-01\"},\"datetime.date_and_time\":{\"attributes\":{\"friendly_name\":\"Date and Time\",\"icon\":\"mdi:calendar-clock\"},\"entity_id\":\"datetime.date_and_time\",\"state\":\"2020-01-01T12:00:00+00:00\"},\"device_tracker.demo_anne_therese\":{\"attributes\":{\"battery\":46,\"friendly_name\":\"Anne Therese\",\"source_type\":\"gps\"},\"entity_id\":\"device_tracker.demo_anne_therese\",\"state\":\"not_home\"},\"device_tracker.demo_home_boy\":{\"attributes\":{\"battery\":53,\"friendly_name\":\"Home Boy\",\"source_type\":\"gps\"},\"entity_id\":\"device_tracker.demo_home_boy\",\"state\":\"home\"},\"device_tracker.demo_paulus\":{\"attributes\":{\"battery\":17,\"friendly_name\":\"Paulus\",\"source_type\":\"gps\"},\"entity_id\":\"device_tracker.demo_paulus\",\"state\":\"not_home\"},\"event.backup_automatic_backup\":{\"attributes\":{\"event_type\":null,\"event_types\":[\"completed\",\"failed\",\"in_progress\"],\"friendly_name\":\"Backup Sauvegarde automatique\"},\"entity_id\":\"event.backup_automatic_backup\",\"state\":\"unknown\"},\"event.push_button_press\":{\"attributes\":{\"device_class\":\"button\",\"event_type\":null,\"event_types\":[\"pressed\"],\"friendly_name\":\"Push Button press\"},\"entity_id\":\"event.push_button_press\",\"state\":\"unknown\"},\"fan.ceiling_fan\":{\"attributes\":{\"friendly_name\":\"Ceiling Fan\",\"percentage\":null,\"percentage_step\":33.333333333333336,\"preset_mode\":null,\"preset_modes\":null,\"supported_features\":49},\"entity_id\":\"fan.ceiling_fan\",\"state\":\"off\"},\"fan.living_room_fan\":{\"attributes\":{\"direction\":\"forward\",\"friendly_name\":\"Ventilateur\",\"oscillating\":false,\"percentage\":null,\"percentage_step\":33.333333333333336,\"preset_mode\":null,\"preset_modes\":[\"auto\",\"smart\",\"sleep\",\"on\"],\"supported_features\":55},\"entity_id\":\"fan.living_room_fan\",\"state\":\"off\"},\"fan.percentage_full_fan\":{\"attributes\":{\"direction\":\"forward\",\"friendly_name\":\"Percentage Full Fan\",\"oscillating\":false,\"percentage\":null,\"percentage_step\":33.333333333333336,\"preset_mode\":null,\"preset_modes\":[\"auto\",\"smart\",\"sleep\",\"on\"],\"supported_features\":55},\"entity_id\":\"fan.percentage_full_fan\",\"state\":\"off\"},\"fan.percentage_limited_fan\":{\"attributes\":{\"friendly_name\":\"Percentage Limited Fan\",\"percentage\":null,\"percentage_step\":33.333333333333336,\"preset_mode\":null,\"preset_modes\":[\"auto\",\"smart\",\"sleep\",\"on\"],\"supported_features\":49},\"entity_id\":\"fan.percentage_limited_fan\",\"state\":\"off\"},\"fan.preset_only_limited_fan\":{\"attributes\":{\"friendly_name\":\"Preset Only Limited Fan\",\"preset_mode\":null,\"preset_modes\":[\"auto\",\"smart\",\"sleep\",\"on\"],\"supported_features\":56},\"entity_id\":\"fan.preset_only_limited_fan\",\"state\":\"off\"},\"geo_location.grass_fire\":{\"attributes\":{\"friendly_name\":\"Grass Fire\",\"icon\":\"mdi:fire\",\"source\":\"demo\",\"unit_of_measurement\":\"km\"},\"entity_id\":\"geo_location.grass_fire\",\"state\":\"12.4\"},\"geo_location.ice_storm\":{\"attributes\":{\"friendly_name\":\"Ice Storm\",\"icon\":\"mdi:snowflake-alert\",\"source\":\"demo\",\"unit_of_measurement\":\"km\"},\"entity_id\":\"geo_location.ice_storm\",\"state\":\"48.7\"},\"humidifier.dehumidifier\":{\"attributes\":{\"action\":\"drying\",\"current_humidity\":59.4,\"device_class\":\"dehumidifier\",\"friendly_name\":\"Dehumidifier\",\"humidity\":54.2,\"max_humidity\":100,\"min_humidity\":0,\"supported_features\":0},\"entity_id\":\"humidifier.dehumidifier\",\"state\":\"on\"},\"humidifier.humidifier\":{\"attributes\":{\"action\":\"humidifying\",\"current_humidity\":45,\"device_class\":\"humidifier\",\"friendly_name\":\"Humidifier\",\"humidity\":65,\"max_humidity\":100,\"min_humidity\":0,\"supported_features\":0,\"target_humidity_step\":5},\"entity_id\":\"humidifier.humidifier\",\"state\":\"on\"},\"humidifier.hygrostat\":{\"attributes\":{\"available_modes\":[\"home\",\"eco\"],\"friendly_name\":\"Hygrostat\",\"humidity\":50,\"max_humidity\":100,\"min_humidity\":0,\"mode\":\"home\",\"supported_features\":1},\"entity_id\":\"humidifier.hygrostat\",\"state\":\"on\"},\"image_processing.demo_face\":{\"attributes\":{\"device_class\":\"face\",\"faces\":[{\"age\":16.0,\"confidence\":98.34,\"entity_id\":\"image_processing.demo_face\",\"gender\":\"male\",\"name\":\"Hans\"},{\"age\":28.0,\"entity_id\":\"image_processing.demo_face\",\"gender\":\"female\",\"name\":\"Helena\"},{\"confidence\":62.53,\"name\":\"Luna\"}],\"friendly_name\":\"Demo Face\",\"total_faces\":4},\"entity_id\":\"image_processing.demo_face\",\"state\":\"Hans\"},\"lawn_mower.my_lawn_mower\":{\"attributes\":{\"friendly_name\":\"My Lawn Mower\",\"supported_features\":15},\"entity_id\":\"lawn_mower.my_lawn_mower\",\"state\":\"docked\"},\"light.bed_light\":{\"attributes\":{\"brightness\":null,\"color_mode\":null,\"color_temp_kelvin\":null,\"effect\":null,\"effect_list\":[\"rainbow\",\"off\"],\"friendly_name\":\"Lampe de chevet\",\"hs_color\":null,\"max_color_temp_kelvin\":6535,\"min_color_temp_kelvin\":2000,\"rgb_color\":null,\"supported_color_modes\":[\"color_temp\",\"hs\"],\"supported_features\":4,\"xy_color\":null},\"entity_id\":\"light.bed_light\",\"state\":\"off\"},\"light.ceiling_lights\":{\"attributes\":{\"brightness\":180,\"color_mode\":\"color_temp\",\"color_temp_kelvin\":2631,\"friendly_name\":\"Plafonnier du salon\",\"hs_color\":[28.55,67.974],\"max_color_temp_kelvin\":6535,\"min_color_temp_kelvin\":2000,\"rgb_color\":[255,164,82],\"supported_color_modes\":[\"color_temp\",\"hs\"],\"supported_features\":0,\"xy_color\":[0.532,0.388]},\"entity_id\":\"light.ceiling_lights\",\"state\":\"on\"},\"light.entrance_color_white_lights\":{\"attributes\":{\"brightness\":180,\"color_mode\":\"hs\",\"friendly_name\":\"Plafonnier de l'entrée\",\"hs_color\":[345,75],\"rgb_color\":[255,64,112],\"supported_color_modes\":[\"hs\",\"white\"],\"supported_features\":0,\"xy_color\":[0.588,0.274]},\"entity_id\":\"light.entrance_color_white_lights\",\"state\":\"on\"},\"light.kitchen_lights\":{\"attributes\":{\"brightness\":180,\"color_mode\":\"hs\",\"color_temp_kelvin\":null,\"friendly_name\":\"Réglette du plan de travail\",\"hs_color\":[345,75],\"max_color_temp_kelvin\":6535,\"min_color_temp_kelvin\":2000,\"rgb_color\":[255,64,112],\"supported_color_modes\":[\"color_temp\",\"hs\"],\"supported_features\":0,\"xy_color\":[0.588,0.274]},\"entity_id\":\"light.kitchen_lights\",\"state\":\"on\"},\"light.living_room_rgbww_lights\":{\"attributes\":{\"brightness\":180,\"color_mode\":\"rgbww\",\"friendly_name\":\"Lampadaire\",\"hs_color\":[0.923,50.98],\"rgb_color\":[255,127,125],\"rgbww_color\":[255,0,0,255,0],\"supported_color_modes\":[\"rgbww\"],\"supported_features\":0,\"xy_color\":[0.528,0.315]},\"entity_id\":\"light.living_room_rgbww_lights\",\"state\":\"on\"},\"light.office_rgbw_lights\":{\"attributes\":{\"brightness\":180,\"color_mode\":\"rgbw\",\"friendly_name\":\"Lampe de bureau\",\"hs_color\":[0.0,49.804],\"rgb_color\":[255,128,128],\"rgbw_color\":[255,0,0,255],\"supported_color_modes\":[\"rgbw\"],\"supported_features\":0,\"xy_color\":[0.524,0.313]},\"entity_id\":\"light.office_rgbw_lights\",\"state\":\"on\"},\"lock.front_door\":{\"attributes\":{\"friendly_name\":\"Front Door\",\"supported_features\":0},\"entity_id\":\"lock.front_door\",\"state\":\"locked\"},\"lock.kitchen_door\":{\"attributes\":{\"friendly_name\":\"Kitchen Door\",\"supported_features\":0},\"entity_id\":\"lock.kitchen_door\",\"state\":\"unlocked\"},\"lock.openable_lock\":{\"attributes\":{\"friendly_name\":\"Openable Lock\",\"supported_features\":1},\"entity_id\":\"lock.openable_lock\",\"state\":\"locked\"},\"lock.poorly_installed_door\":{\"attributes\":{\"friendly_name\":\"Poorly Installed Door\",\"supported_features\":0},\"entity_id\":\"lock.poorly_installed_door\",\"state\":\"unlocked\"},\"media_player.bedroom\":{\"attributes\":{\"app_name\":\"YouTube\",\"friendly_name\":\"Bedroom\",\"is_volume_muted\":false,\"media_content_id\":\"kxopViU98Xo\",\"media_content_type\":\"movie\",\"media_duration\":360000,\"media_position\":54000,\"media_position_updated_at\":\"2026-11-16T20:14:57.082421+00:00\",\"media_title\":\"Epic sax guy 10 hours\",\"shuffle\":false,\"sound_mode\":\"Music\",\"sound_mode_list\":[\"Music\",\"Movie\"],\"supported_features\":119695,\"volume_level\":1.0},\"entity_id\":\"media_player.bedroom\",\"state\":\"playing\"},\"media_player.browse\":{\"attributes\":{\"friendly_name\":\"Browse\",\"is_volume_muted\":false,\"shuffle\":false,\"sound_mode\":\"Music\",\"supported_features\":4325376,\"volume_level\":1.0},\"entity_id\":\"media_player.browse\",\"state\":\"playing\"},\"media_player.enceinte_du_salon\":{\"attributes\":{\"active_child\":\"media_player.living_room\",\"app_name\":\"YouTube\",\"friendly_name\":\"Enceinte du salon\",\"is_volume_muted\":false,\"media_content_id\":\"eyU3bRy2x44\",\"media_content_type\":\"movie\",\"media_duration\":300,\"media_position\":45,\"media_position_updated_at\":\"2026-11-16T20:14:57.082417+00:00\",\"media_title\":\"♥♥ The Best Fireplace Video (3 hours)\",\"shuffle\":false,\"sound_mode\":\"Music\",\"sound_mode_list\":[\"Music\",\"Movie\"],\"supported_features\":119695,\"volume_level\":1.0},\"entity_id\":\"media_player.enceinte_du_salon\",\"state\":\"playing\"},\"media_player.group\":{\"attributes\":{\"friendly_name\":\"Group\",\"group_members\":null,\"is_volume_muted\":false,\"shuffle\":false,\"sound_mode\":\"Music\",\"sound_mode_list\":[\"Music\",\"Movie\"],\"supported_features\":643983,\"volume_level\":1.0},\"entity_id\":\"media_player.group\",\"state\":\"playing\"},\"media_player.kitchen\":{\"attributes\":{\"friendly_name\":\"Kitchen\",\"group_members\":[],\"is_volume_muted\":false,\"media_album_name\":\"Bounzz\",\"media_artist\":\"Technohead\",\"media_content_id\":\"bounzz-1\",\"media_content_type\":\"music\",\"media_duration\":213,\"media_title\":\"I Wanna Be A Hippy (Flamman & Abraxas Radio Mix)\",\"media_track\":1,\"repeat\":\"off\",\"shuffle\":false,\"sound_mode\":\"Music\",\"sound_mode_list\":[\"Music\",\"Movie\"],\"supported_features\":914877,\"volume_level\":1.0},\"entity_id\":\"media_player.kitchen\",\"state\":\"playing\"},\"media_player.living_room\":{\"attributes\":{\"app_name\":\"YouTube\",\"friendly_name\":\"Living Room\",\"is_volume_muted\":false,\"media_content_id\":\"eyU3bRy2x44\",\"media_content_type\":\"movie\",\"media_duration\":300,\"media_position\":45,\"media_position_updated_at\":\"2026-11-16T20:14:57.082417+00:00\",\"media_title\":\"♥♥ The Best Fireplace Video (3 hours)\",\"shuffle\":false,\"sound_mode\":\"Music\",\"sound_mode_list\":[\"Music\",\"Movie\"],\"supported_features\":119695,\"volume_level\":1.0},\"entity_id\":\"media_player.living_room\",\"state\":\"playing\"},\"media_player.lounge_room\":{\"attributes\":{\"app_name\":\"Netflix\",\"device_class\":\"tv\",\"friendly_name\":\"Lounge room\",\"is_volume_muted\":false,\"media_content_id\":\"house-of-cards-1\",\"media_content_type\":\"tvshow\",\"media_duration\":3600,\"media_episode\":\"1\",\"media_season\":\"1\",\"media_series_title\":\"House of Cards\",\"media_title\":\"Chapter 1\",\"shuffle\":false,\"sound_mode\":\"Music\",\"sound_mode_list\":[\"Music\",\"Movie\"],\"source\":\"dvd\",\"source_list\":[\"dvd\",\"youtube\"],\"supported_features\":121265,\"volume_level\":1.0},\"entity_id\":\"media_player.lounge_room\",\"state\":\"playing\"},\"media_player.search\":{\"attributes\":{\"friendly_name\":\"Search\",\"is_volume_muted\":false,\"shuffle\":false,\"sound_mode\":\"Music\",\"supported_features\":4194304,\"volume_level\":1.0},\"entity_id\":\"media_player.search\",\"state\":\"playing\"},\"media_player.walkman\":{\"attributes\":{\"friendly_name\":\"Walkman\",\"group_members\":[],\"is_volume_muted\":false,\"media_album_name\":\"Bounzz\",\"media_artist\":\"Technohead\",\"media_content_id\":\"bounzz-1\",\"media_content_type\":\"music\",\"media_duration\":213,\"media_title\":\"I Wanna Be A Hippy (Flamman & Abraxas Radio Mix)\",\"media_track\":1,\"repeat\":\"off\",\"shuffle\":false,\"sound_mode\":\"Music\",\"sound_mode_list\":[\"Music\",\"Movie\"],\"supported_features\":914877,\"volume_level\":1.0},\"entity_id\":\"media_player.walkman\",\"state\":\"playing\"},\"notify.notifier\":{\"attributes\":{\"friendly_name\":\"Notifier\",\"supported_features\":1},\"entity_id\":\"notify.notifier\",\"state\":\"unknown\"},\"number.large_range\":{\"attributes\":{\"friendly_name\":\"Large Range\",\"max\":1000,\"min\":1,\"mode\":\"auto\",\"step\":1},\"entity_id\":\"number.large_range\",\"state\":\"500\"},\"number.pwm_1\":{\"attributes\":{\"friendly_name\":\"PWM 1\",\"max\":1.0,\"min\":0.0,\"mode\":\"box\",\"step\":0.01},\"entity_id\":\"number.pwm_1\",\"state\":\"0.42\"},\"number.small_range\":{\"attributes\":{\"friendly_name\":\"Small Range\",\"max\":255,\"min\":1,\"mode\":\"auto\",\"step\":1},\"entity_id\":\"number.small_range\",\"state\":\"128\"},\"number.temperature_setting\":{\"attributes\":{\"device_class\":\"temperature\",\"friendly_name\":\"Temperature setting\",\"max\":35.0,\"min\":15.0,\"mode\":\"box\",\"step\":1,\"unit_of_measurement\":\"°C\"},\"entity_id\":\"number.temperature_setting\",\"state\":\"22\"},\"number.volume\":{\"attributes\":{\"friendly_name\":\"volume\",\"max\":100.0,\"min\":0.0,\"mode\":\"slider\",\"step\":1.0},\"entity_id\":\"number.volume\",\"state\":\"42.0\"},\"person.antonin_essai\":{\"attributes\":{\"device_trackers\":[\"device_tracker.demo_home_boy\"],\"editable\":true,\"friendly_name\":\"Antonin (essai)\",\"id\":\"antonin_essai\",\"in_zones\":[\"zone.home\"],\"source\":\"device_tracker.demo_home_boy\",\"user_id\":\"a4472fec4ebf4631b23bff8e949b9492\"},\"entity_id\":\"person.antonin_essai\",\"state\":\"home\"},\"person.camille\":{\"attributes\":{\"device_trackers\":[\"device_tracker.demo_paulus\"],\"editable\":true,\"friendly_name\":\"Camille\",\"id\":\"camille\",\"in_zones\":[],\"source\":\"device_tracker.demo_paulus\"},\"entity_id\":\"person.camille\",\"state\":\"not_home\"},\"remote.remote_one\":{\"attributes\":{\"friendly_name\":\"Remote One\",\"supported_features\":0},\"entity_id\":\"remote.remote_one\",\"state\":\"off\"},\"remote.remote_two\":{\"attributes\":{\"friendly_name\":\"Remote Two\",\"supported_features\":0},\"entity_id\":\"remote.remote_two\",\"state\":\"on\"},\"select.speed\":{\"attributes\":{\"friendly_name\":\"Speed\",\"options\":[\"light_speed\",\"ridiculous_speed\",\"ludicrous_speed\"]},\"entity_id\":\"select.speed\",\"state\":\"ridiculous_speed\"},\"sensor.backup_backup_manager_state\":{\"attributes\":{\"device_class\":\"enum\",\"friendly_name\":\"Backup État du gestionnaire de sauvegarde\",\"options\":[\"idle\",\"create_backup\",\"blocked\",\"receive_backup\",\"restore_backup\"]},\"entity_id\":\"sensor.backup_backup_manager_state\",\"state\":\"idle\"},\"sensor.backup_last_attempted_automatic_backup\":{\"attributes\":{\"device_class\":\"timestamp\",\"friendly_name\":\"Backup Dernière tentative de sauvegarde automatique\"},\"entity_id\":\"sensor.backup_last_attempted_automatic_backup\",\"state\":\"unknown\"},\"sensor.backup_last_successful_automatic_backup\":{\"attributes\":{\"device_class\":\"timestamp\",\"friendly_name\":\"Backup Dernière sauvegarde automatique réussie\"},\"entity_id\":\"sensor.backup_last_successful_automatic_backup\",\"state\":\"unknown\"},\"sensor.backup_last_successful_automatic_backup_size\":{\"attributes\":{\"device_class\":\"data_size\",\"friendly_name\":\"Backup Last successful automatic backup size\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"MiB\"},\"entity_id\":\"sensor.backup_last_successful_automatic_backup_size\",\"state\":\"unknown\"},\"sensor.backup_next_scheduled_automatic_backup\":{\"attributes\":{\"device_class\":\"timestamp\",\"friendly_name\":\"Backup Prochaine sauvegarde automatique programmée\"},\"entity_id\":\"sensor.backup_next_scheduled_automatic_backup\",\"state\":\"unknown\"},\"sensor.carbon_dioxide\":{\"attributes\":{\"device_class\":\"carbon_dioxide\",\"friendly_name\":\"Qualité de l'air\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"ppm\"},\"entity_id\":\"sensor.carbon_dioxide\",\"state\":\"54\"},\"sensor.carbon_dioxide_battery\":{\"attributes\":{\"device_class\":\"battery\",\"friendly_name\":\"Qualité de l'air Battery\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.carbon_dioxide_battery\",\"state\":\"99\"},\"sensor.carbon_monoxide\":{\"attributes\":{\"device_class\":\"carbon_monoxide\",\"friendly_name\":\"Carbon monoxide\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"ppm\"},\"entity_id\":\"sensor.carbon_monoxide\",\"state\":\"54\"},\"sensor.consommation_de_la_maison\":{\"attributes\":{\"device_class\":\"power\",\"friendly_name\":\"Consommation de la maison\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"W\"},\"entity_id\":\"sensor.consommation_de_la_maison\",\"state\":\"562\"},\"sensor.energie_de_la_maison\":{\"attributes\":{\"device_class\":\"energy\",\"friendly_name\":\"Énergie de la maison\",\"source\":\"sensor.consommation_de_la_maison\",\"state_class\":\"total\",\"unit_of_measurement\":\"kWh\"},\"entity_id\":\"sensor.energie_de_la_maison\",\"state\":\"2.342\"},\"sensor.humidite_chambre\":{\"attributes\":{\"device_class\":\"humidity\",\"friendly_name\":\"Humidité chambre\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.humidite_chambre\",\"state\":\"53\"},\"sensor.humidite_salle_de_bain\":{\"attributes\":{\"device_class\":\"humidity\",\"friendly_name\":\"Humidité salle de bain\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.humidite_salle_de_bain\",\"state\":\"65\"},\"sensor.humidite_salon\":{\"attributes\":{\"device_class\":\"humidity\",\"friendly_name\":\"Humidité salon\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.humidite_salon\",\"state\":\"48\"},\"sensor.meteo_france_alert_for_department_13_13_weather_alert\":{\"attributes\":{\"Grand-froid\":\"Vert\",\"Inondation\":\"Vert\",\"Neige-verglas\":\"Vert\",\"Orages\":\"Vert\",\"Pluie-inondation\":\"Vert\",\"Vagues-submersion\":\"Vert\",\"Vent violent\":\"Vert\",\"attribution\":\"Data provided by Météo-France\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR 13 Weather alert\",\"icon\":\"mdi:weather-cloudy-alert\"},\"entity_id\":\"sensor.meteo_france_alert_for_department_13_13_weather_alert\",\"state\":\"Vert\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_cloud_cover\":{\"attributes\":{\"attribution\":\"Data provided by Météo-France\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR Marseille Cloud cover\",\"icon\":\"mdi:weather-partly-cloudy\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_cloud_cover\",\"state\":\"30\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_daily_precipitation\":{\"attributes\":{\"attribution\":\"Data provided by Météo-France\",\"device_class\":\"precipitation\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR Marseille Daily precipitation\",\"unit_of_measurement\":\"mm\"},\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_daily_precipitation\",\"state\":\"0\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_freeze_chance\":{\"attributes\":{\"attribution\":\"Data provided by Météo-France\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR Marseille Freeze chance\",\"icon\":\"mdi:snowflake\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_freeze_chance\",\"state\":\"0\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_humidity\":{\"attributes\":{\"attribution\":\"Data provided by Météo-France\",\"device_class\":\"humidity\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR Marseille Humidity\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_humidity\",\"state\":\"75\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_rain_chance\":{\"attributes\":{\"attribution\":\"Data provided by Météo-France\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR Marseille Rain chance\",\"icon\":\"mdi:weather-rainy\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_rain_chance\",\"state\":\"0\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_snow_chance\":{\"attributes\":{\"attribution\":\"Data provided by Météo-France\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR Marseille Snow chance\",\"icon\":\"mdi:weather-snowy\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_snow_chance\",\"state\":\"0\"},\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_uv\":{\"attributes\":{\"attribution\":\"Data provided by Météo-France\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR Marseille UV\",\"icon\":\"mdi:sunglasses\",\"unit_of_measurement\":\"UV index\"},\"entity_id\":\"sensor.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_uv\",\"state\":\"1\"},\"sensor.meteo_france_rain_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_next_rain\":{\"attributes\":{\"1_hour_forecast\":{\"0 min\":\"Temps sec\",\"10 min\":\"Temps sec\",\"15 min\":\"Temps sec\",\"20 min\":\"Temps sec\",\"25 min\":\"Temps sec\",\"35 min\":\"Temps sec\",\"45 min\":\"Temps sec\",\"5 min\":\"Temps sec\",\"55 min\":\"Temps sec\"},\"attribution\":\"Data provided by Météo-France\",\"device_class\":\"timestamp\",\"forecast_time_ref\":\"2026-11-16T20:25:00+00:00\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR Marseille Next rain\"},\"entity_id\":\"sensor.meteo_france_rain_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille_next_rain\",\"state\":\"unknown\"},\"sensor.outside_humidity\":{\"attributes\":{\"device_class\":\"humidity\",\"friendly_name\":\"Outside Humidity\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.outside_humidity\",\"state\":\"54\"},\"sensor.outside_temperature\":{\"attributes\":{\"device_class\":\"temperature\",\"friendly_name\":\"Température extérieure\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"°C\"},\"entity_id\":\"sensor.outside_temperature\",\"state\":\"15.6\"},\"sensor.outside_temperature_battery\":{\"attributes\":{\"device_class\":\"battery\",\"friendly_name\":\"Température extérieure Battery\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.outside_temperature_battery\",\"state\":\"12\"},\"sensor.pile_du_capteur_de_fenetre\":{\"attributes\":{\"device_class\":\"battery\",\"friendly_name\":\"Pile du capteur de fenêtre\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.pile_du_capteur_de_fenetre\",\"state\":\"14.0\"},\"sensor.pile_du_capteur_de_porte\":{\"attributes\":{\"device_class\":\"battery\",\"friendly_name\":\"Pile du capteur de porte\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.pile_du_capteur_de_porte\",\"state\":\"64.0\"},\"sensor.pile_du_detecteur_de_fuite\":{\"attributes\":{\"device_class\":\"battery\",\"friendly_name\":\"Pile du détecteur de fuite\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"%\"},\"entity_id\":\"sensor.pile_du_detecteur_de_fuite\",\"state\":\"82.0\"},\"sensor.power_consumption\":{\"attributes\":{\"device_class\":\"power\",\"friendly_name\":\"Power consumption\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"W\"},\"entity_id\":\"sensor.power_consumption\",\"state\":\"100\"},\"sensor.puissance_du_lave_linge\":{\"attributes\":{\"device_class\":\"power\",\"friendly_name\":\"Puissance du lave-linge\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"W\"},\"entity_id\":\"sensor.puissance_du_lave_linge\",\"state\":\"60\"},\"sensor.sun_next_dawn\":{\"attributes\":{\"device_class\":\"timestamp\",\"friendly_name\":\"Sun Prochaine aube\"},\"entity_id\":\"sensor.sun_next_dawn\",\"state\":\"2026-11-17T06:02:08+00:00\"},\"sensor.sun_next_dusk\":{\"attributes\":{\"device_class\":\"timestamp\",\"friendly_name\":\"Sun Prochain crépuscule\"},\"entity_id\":\"sensor.sun_next_dusk\",\"state\":\"2026-11-17T16:44:18+00:00\"},\"sensor.sun_next_midnight\":{\"attributes\":{\"device_class\":\"timestamp\",\"friendly_name\":\"Sun Prochain minuit\"},\"entity_id\":\"sensor.sun_next_midnight\",\"state\":\"2026-11-16T23:23:27+00:00\"},\"sensor.sun_next_noon\":{\"attributes\":{\"device_class\":\"timestamp\",\"friendly_name\":\"Sun Prochain midi\"},\"entity_id\":\"sensor.sun_next_noon\",\"state\":\"2026-11-17T11:23:20+00:00\"},\"sensor.sun_next_rising\":{\"attributes\":{\"device_class\":\"timestamp\",\"friendly_name\":\"Sun Prochain lever\"},\"entity_id\":\"sensor.sun_next_rising\",\"state\":\"2026-11-17T06:33:29+00:00\"},\"sensor.sun_next_setting\":{\"attributes\":{\"device_class\":\"timestamp\",\"friendly_name\":\"Sun Prochain coucher\"},\"entity_id\":\"sensor.sun_next_setting\",\"state\":\"2026-11-17T16:12:58+00:00\"},\"sensor.temperature_bureau\":{\"attributes\":{\"device_class\":\"temperature\",\"friendly_name\":\"Température bureau\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"°C\"},\"entity_id\":\"sensor.temperature_bureau\",\"state\":\"19.6\"},\"sensor.temperature_chambre\":{\"attributes\":{\"device_class\":\"temperature\",\"friendly_name\":\"Température chambre\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"°C\"},\"entity_id\":\"sensor.temperature_chambre\",\"state\":\"18.6\"},\"sensor.temperature_chambre_des_enfants\":{\"attributes\":{\"device_class\":\"temperature\",\"friendly_name\":\"Température chambre des enfants\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"°C\"},\"entity_id\":\"sensor.temperature_chambre_des_enfants\",\"state\":\"19.8\"},\"sensor.temperature_cuisine\":{\"attributes\":{\"device_class\":\"temperature\",\"friendly_name\":\"Température cuisine\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"°C\"},\"entity_id\":\"sensor.temperature_cuisine\",\"state\":\"21.1\"},\"sensor.temperature_entree\":{\"attributes\":{\"device_class\":\"temperature\",\"friendly_name\":\"Température entrée\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"°C\"},\"entity_id\":\"sensor.temperature_entree\",\"state\":\"19.3\"},\"sensor.temperature_salle_de_bain\":{\"attributes\":{\"device_class\":\"temperature\",\"friendly_name\":\"Température salle de bain\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"°C\"},\"entity_id\":\"sensor.temperature_salle_de_bain\",\"state\":\"22.4\"},\"sensor.temperature_salon\":{\"attributes\":{\"device_class\":\"temperature\",\"friendly_name\":\"Température salon\",\"state_class\":\"measurement\",\"unit_of_measurement\":\"°C\"},\"entity_id\":\"sensor.temperature_salon\",\"state\":\"20.5\"},\"sensor.thermostat\":{\"attributes\":{\"device_class\":\"enum\",\"friendly_name\":\"Thermostat\",\"options\":[\"away\",\"comfort\",\"eco\",\"sleep\"]},\"entity_id\":\"sensor.thermostat\",\"state\":\"eco\"},\"sensor.total_energy_kwh\":{\"attributes\":{\"device_class\":\"energy\",\"friendly_name\":\"Énergie consommée\",\"state_class\":\"total\",\"unit_of_measurement\":\"kWh\"},\"entity_id\":\"sensor.total_energy_kwh\",\"state\":\"28.5\"},\"sensor.total_energy_mwh\":{\"attributes\":{\"device_class\":\"energy\",\"friendly_name\":\"Total energy 2\",\"state_class\":\"total\",\"unit_of_measurement\":\"MWh\"},\"entity_id\":\"sensor.total_energy_mwh\",\"state\":\"0.01425\"},\"sensor.total_gas_ft3\":{\"attributes\":{\"device_class\":\"gas\",\"friendly_name\":\"Total gas 2\",\"state_class\":\"total\",\"unit_of_measurement\":\"m³\"},\"entity_id\":\"sensor.total_gas_ft3\",\"state\":\"1.614060255744\"},\"sensor.total_gas_m3\":{\"attributes\":{\"device_class\":\"gas\",\"friendly_name\":\"Total gas 1\",\"state_class\":\"total\",\"unit_of_measurement\":\"m³\"},\"entity_id\":\"sensor.total_gas_m3\",\"state\":\"1.425\"},\"siren.siren\":{\"attributes\":{\"friendly_name\":\"Siren\",\"supported_features\":3},\"entity_id\":\"siren.siren\",\"state\":\"on\"},\"siren.siren_with_all_features\":{\"attributes\":{\"available_tones\":[\"fire\",\"alarm\"],\"friendly_name\":\"Siren with all features\",\"supported_features\":31},\"entity_id\":\"siren.siren_with_all_features\",\"state\":\"on\"},\"stt.demo_stt\":{\"attributes\":{\"friendly_name\":\"Demo STT\"},\"entity_id\":\"stt.demo_stt\",\"state\":\"unknown\"},\"sun.sun\":{\"attributes\":{\"azimuth\":286.56,\"elevation\":-43.69,\"friendly_name\":\"Sun\",\"next_dawn\":\"2026-11-17T06:02:08.076088+00:00\",\"next_dusk\":\"2026-11-17T16:44:18.800559+00:00\",\"next_midnight\":\"2026-11-16T23:23:27+00:00\",\"next_noon\":\"2026-11-17T11:23:20+00:00\",\"next_rising\":\"2026-11-17T06:33:29.703119+00:00\",\"next_setting\":\"2026-11-17T16:12:58.335049+00:00\",\"rising\":false},\"entity_id\":\"sun.sun\",\"state\":\"below_horizon\"},\"switch.ac\":{\"attributes\":{\"device_class\":\"outlet\",\"friendly_name\":\"Prise du lave-linge\"},\"entity_id\":\"switch.ac\",\"state\":\"off\"},\"switch.decorative_lights\":{\"attributes\":{\"assumed_state\":true,\"friendly_name\":\"Guirlande lumineuse\"},\"entity_id\":\"switch.decorative_lights\",\"state\":\"on\"},\"text.password\":{\"attributes\":{\"friendly_name\":\"Password\",\"max\":255,\"min\":0,\"mode\":\"password\",\"pattern\":null},\"entity_id\":\"text.password\",\"state\":\"Hello world\"},\"text.text\":{\"attributes\":{\"friendly_name\":\"Text\",\"max\":255,\"min\":0,\"mode\":\"text\",\"pattern\":null},\"entity_id\":\"text.text\",\"state\":\"Hello world\"},\"text.text_with_1_to_5_characters\":{\"attributes\":{\"friendly_name\":\"Text with 1 to 5 characters\",\"max\":5,\"min\":1,\"mode\":\"text\",\"pattern\":null},\"entity_id\":\"text.text_with_1_to_5_characters\",\"state\":\"Hello\"},\"text.text_with_only_lower_case_characters\":{\"attributes\":{\"friendly_name\":\"Text with only lower case characters\",\"max\":255,\"min\":0,\"mode\":\"text\",\"pattern\":\"[a-z]+\"},\"entity_id\":\"text.text_with_only_lower_case_characters\",\"state\":\"world\"},\"time.time\":{\"attributes\":{\"friendly_name\":\"Time\"},\"entity_id\":\"time.time\",\"state\":\"12:00:00\"},\"todo.shopping_list\":{\"attributes\":{\"friendly_name\":\"Shopping list\",\"supported_features\":15},\"entity_id\":\"todo.shopping_list\",\"state\":\"3\"},\"tts.google_translate_en_com\":{\"attributes\":{\"friendly_name\":\"Google Translate en com\"},\"entity_id\":\"tts.google_translate_en_com\",\"state\":\"unknown\"},\"update.demo_add_on\":{\"attributes\":{\"auto_update\":false,\"display_precision\":0,\"friendly_name\":\"Demo add-on\",\"in_progress\":false,\"installed_version\":\"1.0.0\",\"latest_version\":\"1.0.1\",\"release_summary\":\"Awesome update, fixing everything!\",\"release_url\":\"https://www.example.com/release/1.0.1\",\"skipped_version\":null,\"supported_features\":11,\"title\":\"AdGuard Home\",\"update_percentage\":null},\"entity_id\":\"update.demo_add_on\",\"state\":\"on\"},\"update.demo_living_room_bulb_update\":{\"attributes\":{\"auto_update\":false,\"device_class\":\"firmware\",\"display_precision\":0,\"friendly_name\":\"Demo Living Room Bulb Update\",\"in_progress\":false,\"installed_version\":\"1.93.3\",\"latest_version\":\"1.94.2\",\"release_summary\":\"Added support for effects\",\"release_url\":\"https://www.example.com/release/1.93.3\",\"skipped_version\":null,\"supported_features\":11,\"title\":\"Philips Lamps Firmware\",\"update_percentage\":null},\"entity_id\":\"update.demo_living_room_bulb_update\",\"state\":\"on\"},\"update.demo_no_update\":{\"attributes\":{\"auto_update\":false,\"display_precision\":0,\"friendly_name\":\"Demo No Update\",\"in_progress\":false,\"installed_version\":\"1.0.0\",\"latest_version\":\"1.0.0\",\"release_summary\":null,\"release_url\":null,\"skipped_version\":null,\"supported_features\":11,\"title\":\"AdGuard Home\",\"update_percentage\":null},\"entity_id\":\"update.demo_no_update\",\"state\":\"off\"},\"update.demo_update_no_install\":{\"attributes\":{\"auto_update\":false,\"display_precision\":0,\"friendly_name\":\"Demo Update No Install\",\"in_progress\":false,\"installed_version\":\"1.0.0\",\"latest_version\":\"1.0.1\",\"release_summary\":\"Awesome update, fixing everything!\",\"release_url\":\"https://www.example.com/release/1.0.1\",\"skipped_version\":null,\"supported_features\":0,\"title\":\"Awesomesoft Inc.\",\"update_percentage\":null},\"entity_id\":\"update.demo_update_no_install\",\"state\":\"on\"},\"update.demo_update_with_decimal_progress\":{\"attributes\":{\"auto_update\":false,\"device_class\":\"firmware\",\"display_precision\":2,\"friendly_name\":\"Demo Update with Decimal Progress\",\"in_progress\":false,\"installed_version\":\"1.93.3\",\"latest_version\":\"1.94.2\",\"release_summary\":\"Added support for effects\",\"release_url\":\"https://www.example.com/release/1.93.3\",\"skipped_version\":null,\"supported_features\":31,\"title\":\"Philips Lamps Firmware\",\"update_percentage\":null},\"entity_id\":\"update.demo_update_with_decimal_progress\",\"state\":\"on\"},\"update.demo_update_with_progress\":{\"attributes\":{\"auto_update\":false,\"device_class\":\"firmware\",\"display_precision\":0,\"friendly_name\":\"Demo Update with Progress\",\"in_progress\":false,\"installed_version\":\"1.93.3\",\"latest_version\":\"1.94.2\",\"release_summary\":\"Added support for effects\",\"release_url\":\"https://www.example.com/release/1.93.3\",\"skipped_version\":null,\"supported_features\":31,\"title\":\"Philips Lamps Firmware\",\"update_percentage\":null},\"entity_id\":\"update.demo_update_with_progress\",\"state\":\"on\"},\"vacuum.demo_vacuum_0_ground_floor\":{\"attributes\":{\"cleaned_area\":0,\"fan_speed\":\"medium\",\"fan_speed_list\":[\"min\",\"medium\",\"high\",\"max\"],\"friendly_name\":\"Aspirateur robot\",\"supported_features\":32700},\"entity_id\":\"vacuum.demo_vacuum_0_ground_floor\",\"state\":\"docked\"},\"vacuum.demo_vacuum_1_first_floor\":{\"attributes\":{\"cleaned_area\":0,\"fan_speed\":\"medium\",\"fan_speed_list\":[\"min\",\"medium\",\"high\",\"max\"],\"friendly_name\":\"Demo vacuum 1 first floor\",\"supported_features\":12348},\"entity_id\":\"vacuum.demo_vacuum_1_first_floor\",\"state\":\"docked\"},\"vacuum.demo_vacuum_2_second_floor\":{\"attributes\":{\"cleaned_area\":0,\"friendly_name\":\"Demo vacuum 2 second floor\",\"supported_features\":12296},\"entity_id\":\"vacuum.demo_vacuum_2_second_floor\",\"state\":\"docked\"},\"vacuum.demo_vacuum_3_third_floor\":{\"attributes\":{\"cleaned_area\":0,\"friendly_name\":\"Demo vacuum 3 third floor\",\"supported_features\":3},\"entity_id\":\"vacuum.demo_vacuum_3_third_floor\",\"state\":\"docked\"},\"vacuum.demo_vacuum_4_fourth_floor\":{\"attributes\":{\"cleaned_area\":0,\"friendly_name\":\"Demo vacuum 4 fourth floor\",\"supported_features\":0},\"entity_id\":\"vacuum.demo_vacuum_4_fourth_floor\",\"state\":\"docked\"},\"valve.back_garden\":{\"attributes\":{\"current_position\":70,\"friendly_name\":\"Back Garden\",\"is_closed\":false,\"supported_features\":15},\"entity_id\":\"valve.back_garden\",\"state\":\"open\"},\"valve.front_garden\":{\"attributes\":{\"friendly_name\":\"Front Garden\",\"is_closed\":false,\"supported_features\":3},\"entity_id\":\"valve.front_garden\",\"state\":\"open\"},\"valve.orchard\":{\"attributes\":{\"friendly_name\":\"Orchard\",\"is_closed\":true,\"supported_features\":3},\"entity_id\":\"valve.orchard\",\"state\":\"closed\"},\"valve.trees\":{\"attributes\":{\"current_position\":30,\"friendly_name\":\"Trees\",\"is_closed\":false,\"supported_features\":15},\"entity_id\":\"valve.trees\",\"state\":\"open\"},\"water_heater.demo_water_heater\":{\"attributes\":{\"away_mode\":\"off\",\"current_temperature\":null,\"friendly_name\":\"Demo Water Heater\",\"max_temp\":60.0,\"min_temp\":43.3,\"operation_list\":[\"eco\",\"electric\",\"performance\",\"high_demand\",\"heat_pump\",\"gas\",\"off\"],\"operation_mode\":\"eco\",\"supported_features\":15,\"target_temp_high\":null,\"target_temp_low\":null,\"target_temp_step\":1,\"temperature\":48.3,\"temperature_unit\":\"°C\"},\"entity_id\":\"water_heater.demo_water_heater\",\"state\":\"eco\"},\"water_heater.demo_water_heater_celsius\":{\"attributes\":{\"away_mode\":\"on\",\"current_temperature\":null,\"friendly_name\":\"Chauffe-eau\",\"max_temp\":60.0,\"min_temp\":43.3,\"operation_list\":[\"eco\",\"electric\",\"performance\",\"high_demand\",\"heat_pump\",\"gas\",\"off\"],\"operation_mode\":\"eco\",\"supported_features\":15,\"target_temp_high\":null,\"target_temp_low\":null,\"target_temp_step\":1,\"temperature\":45,\"temperature_unit\":\"°C\"},\"entity_id\":\"water_heater.demo_water_heater_celsius\",\"state\":\"eco\"},\"weather.demo_weather_north\":{\"attributes\":{\"attribution\":\"Powered by Home Assistant\",\"friendly_name\":\"Demo Weather North\",\"humidity\":54,\"precipitation_unit\":\"mm\",\"pressure\":33423.66,\"pressure_unit\":\"hPa\",\"supported_features\":7,\"temperature\":-24.4,\"temperature_unit\":\"°C\",\"visibility_unit\":\"km\",\"wind_speed\":7.72,\"wind_speed_unit\":\"km/h\"},\"entity_id\":\"weather.demo_weather_north\",\"state\":\"rainy\"},\"weather.demo_weather_south\":{\"attributes\":{\"attribution\":\"Powered by Home Assistant\",\"friendly_name\":\"Demo Weather South\",\"humidity\":92,\"precipitation_unit\":\"mm\",\"pressure\":1099.0,\"pressure_unit\":\"hPa\",\"supported_features\":1,\"temperature\":21.6,\"temperature_unit\":\"°C\",\"visibility_unit\":\"km\",\"wind_speed\":1.8,\"wind_speed_unit\":\"km/h\"},\"entity_id\":\"weather.demo_weather_south\",\"state\":\"sunny\"},\"weather.maison_d_essai\":{\"attributes\":{\"attribution\":\"Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.\",\"cloud_coverage\":71.1,\"dew_point\":11.4,\"friendly_name\":\"Appartement d'essai\",\"humidity\":84,\"precipitation_unit\":\"mm\",\"pressure\":1015.0,\"pressure_unit\":\"hPa\",\"supported_features\":3,\"temperature\":13.9,\"temperature_unit\":\"°C\",\"uv_index\":0.0,\"visibility_unit\":\"km\",\"wind_bearing\":64.9,\"wind_speed\":10.1,\"wind_speed_unit\":\"km/h\"},\"entity_id\":\"weather.maison_d_essai\",\"state\":\"partlycloudy\"},\"weather.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille\":{\"attributes\":{\"apparent_temperature\":13.6,\"attribution\":\"Data provided by Météo-France\",\"friendly_name\":\"Météo-France forecast for city Marseille - Provence-Alpes-Côte d'Azur (13) - FR Marseille\",\"humidity\":75,\"precipitation_unit\":\"mm\",\"pressure\":1014.9,\"pressure_unit\":\"hPa\",\"supported_features\":3,\"temperature\":13.6,\"temperature_unit\":\"°C\",\"visibility_unit\":\"km\",\"wind_bearing\":70,\"wind_gust_speed\":0.0,\"wind_speed\":7.2,\"wind_speed_unit\":\"km/h\"},\"entity_id\":\"weather.meteo_france_forecast_for_city_marseille_provence_alpes_cote_d_azur_13_fr_marseille\",\"state\":\"partlycloudy\"},\"zone.home\":{\"attributes\":{\"device_trackers\":[],\"editable\":true,\"friendly_name\":\"Appartement d'essai\",\"icon\":\"mdi:home\",\"passive\":false,\"persons\":[\"person.antonin_essai\"],\"radius\":100},\"entity_id\":\"zone.home\",\"state\":\"1\"}}")
}, Q = 6e4, $ = 1440 * Q;
function ra(e) {
	let t = 2166136261;
	for (let n of e) t = Math.imul(t ^ n.charCodeAt(0), 16777619);
	return (t >>> 0) / 4294967296;
}
function ia(e, t, n) {
	let r = Math.PI / 180, i = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), a = Math.round((i - Date.UTC(e.getFullYear(), 0, 1)) / $) + 1, o = 2 * Math.PI / 365 * (a - 1), s = 229.18 * (75e-6 + .001868 * Math.cos(o) - .032077 * Math.sin(o) - .014615 * Math.cos(2 * o) - .040849 * Math.sin(2 * o)), c = .006918 - .399912 * Math.cos(o) + .070257 * Math.sin(o) - .006758 * Math.cos(2 * o) + 907e-6 * Math.sin(2 * o) - .002697 * Math.cos(3 * o) + .00148 * Math.sin(3 * o), l = Math.acos(Math.cos(90.833 * r) / (Math.cos(t * r) * Math.cos(c)) - Math.tan(t * r) * Math.tan(c)) / r;
	return {
		lever: new Date(i + (720 - 4 * (n + l) - s) * Q),
		coucher: new Date(i + (720 - 4 * (n - l) - s) * Q)
	};
}
var aa = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/, oa = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, sa = (e) => String(e).padStart(2, "0");
function ca(e, t) {
	if (typeof e != "string") return e;
	if (aa.test(e)) return new Date(new Date(e).getTime() + t).toISOString();
	let n = oa.exec(e);
	if (!n) return e;
	let r = new Date(new Date(+n[1], n[2] - 1, +n[3], +n[4], +n[5], +n[6]).getTime() + t);
	return `${r.getFullYear()}-${sa(r.getMonth() + 1)}-${sa(r.getDate())} ${sa(r.getHours())}:${sa(r.getMinutes())}:${sa(r.getSeconds())}`;
}
var la = class {
	constructor(e, t) {
		this.langue = e, this.sombre = t, this.journal = [], this.ecouteurs = /* @__PURE__ */ new Set(), this.donneesUtilisateur = /* @__PURE__ */ new Map(), this.abonnes = /* @__PURE__ */ new Map();
		let n = structuredClone(na), r = Math.max(...Object.values(n.states).map((e) => new Date(e.last_changed ?? 0).getTime()).filter((e) => !Number.isNaN(e))), i = Date.now() - 2 * Q - r, a = Fi[e].noms;
		for (let e of Object.values(n.states)) {
			e.last_changed = ca(e.last_changed, i), e.last_updated = ca(e.last_updated, i), e.state = ca(e.state, i);
			for (let [t, n] of Object.entries(e.attributes)) e.attributes[t] = ca(n, i);
			let t = e.attributes.friendly_name;
			typeof t == "string" && (e.attributes.friendly_name = a[t] ?? t.replace(" (essai)", "")), typeof e.attributes.message == "string" && (e.attributes.message = a[e.attributes.message] ?? e.attributes.message);
		}
		for (let e of Object.values(n.areas)) e.name = a[e.name] ?? e.name;
		for (let e of Object.values(n.devices)) e.name &&= a[e.name] ?? e.name, e.name_by_user &&= a[e.name_by_user] ?? e.name_by_user;
		for (let e of Object.values(n.entities)) e.name &&= a[e.name] ?? e.name;
		n.config = {
			...n.config,
			location_name: a[n.config.location_name ?? ""] ?? n.config.location_name,
			unit_system: { temperature: "°C" }
		}, this.depart = structuredClone(n.states), this.hass = this.construire(n, n.states), this.mettreLeSoleil();
	}
	suivre(e) {
		return this.ecouteurs.add(e), () => this.ecouteurs.delete(e);
	}
	changer(e, t, n = {}) {
		let r = this.hass.states[e];
		if (!r) return;
		let i = (/* @__PURE__ */ new Date()).toISOString(), a = {
			...r,
			state: t,
			attributes: {
				...r.attributes,
				...n
			},
			last_updated: i,
			last_changed: t === r.state ? r.last_changed : i
		};
		t !== r.state && this.journal.unshift({
			quand: Date.now(),
			entite: e,
			etat: t
		}), this.publier({
			...this.hass.states,
			[e]: a
		});
	}
	etatDeDepart(e) {
		return this.depart[e]?.state ?? "";
	}
	remettre() {
		this.journal.length = 0, this.publier(structuredClone(this.depart)), this.mettreLeSoleil();
	}
	mettreLeSoleil() {
		let { latitude: e, longitude: t } = this.hass.config, n = /* @__PURE__ */ new Date(), r = ia(n, e, t), i = ia(new Date(n.getTime() + $), e, t), a = (e, t) => (n < e ? e : t).toISOString(), o = n >= r.lever && n < r.coucher;
		this.hass.states["sun.sun"] && this.changer("sun.sun", o ? "above_horizon" : "below_horizon", {
			next_rising: a(r.lever, i.lever),
			next_setting: a(r.coucher, i.coucher),
			rising: n < r.lever
		});
	}
	publier(e, t = {}) {
		this.hass = this.construire({
			...this.hass,
			...t
		}, e);
		for (let e of this.ecouteurs) e(this.hass);
	}
	construire(e, t) {
		let n = Fi[this.langue], r = new Intl.NumberFormat(this.langue, { maximumFractionDigits: 1 });
		return {
			...e,
			states: t,
			user: {
				id: "demo",
				name: n.utilisateur,
				is_admin: !0
			},
			locale: {
				language: this.langue,
				time_format: "language"
			},
			language: this.langue,
			themes: { darkMode: this.sombre() },
			callService: (e, t, n) => this.service(e, t, n ?? {}),
			callWS: (e) => this.ws(e),
			connection: {
				subscribeMessage: (e, t) => (t.type === "frontend/subscribe_user_data" && t.key && (this.abonnes.has(t.key) || this.abonnes.set(t.key, /* @__PURE__ */ new Set()), this.abonnes.get(t.key).add(e), e({ value: this.donneesUtilisateur.get(t.key) ?? null })), Promise.resolve(() => void 0)),
				subscribeEvents: () => Promise.resolve(() => void 0)
			},
			localize: () => "",
			formatEntityState: (e) => {
				let t = Number.parseFloat(e.state), i = e.attributes.unit_of_measurement;
				if (!Number.isNaN(t) && /^-?[\d.]+$/.test(e.state)) return `${r.format(t)}${i ? ` ${i}` : ""}`;
				let a = String(e.attributes.device_class ?? e.entity_id.split(".")[0]);
				return n.etats[`${a}.${e.state}`] ?? n.etats[e.state] ?? e.state;
			}
		};
	}
	async service(e, t, n) {
		let r = [].concat(n.entity_id ?? []);
		for (let e of r) {
			let r = this.hass.states[e];
			if (!r) continue;
			let [i] = e.split("."), a = (e, t) => r.state === e ? t : e, o = t;
			if ([
				"light",
				"switch",
				"fan",
				"input_boolean",
				"humidifier",
				"siren"
			].includes(i)) {
				let t = o === "toggle" ? a("on", "off") : o === "turn_on" ? "on" : "off";
				this.changer(e, t, i === "light" && t === "on" && !r.attributes.brightness ? { brightness: 180 } : {});
			} else if (i === "cover") {
				let t = o === "toggle" ? r.state !== "open" : o === "open_cover";
				this.changer(e, t ? "open" : "closed", { current_position: t ? 100 : 0 });
			} else i === "lock" ? this.changer(e, o === "unlock" || o === "open" ? "unlocked" : "locked") : i === "alarm_control_panel" ? this.changer(e, o.startsWith("alarm_arm_") ? o.replace("alarm_arm_", "armed_") : "disarmed") : i === "climate" ? o === "set_temperature" && typeof n.temperature == "number" ? this.changer(e, r.state, { temperature: n.temperature }) : o === "set_hvac_mode" ? this.changer(e, String(n.hvac_mode)) : this.changer(e, o === "turn_off" ? "off" : "heat") : i === "media_player" ? this.changer(e, o === "media_play_pause" ? a("playing", "paused") : o === "media_pause" ? "paused" : "playing") : i === "vacuum" && this.changer(e, o === "start" ? "cleaning" : "docked");
		}
	}
	async ws(e) {
		let t = String(e.type);
		if (t === "frontend/get_user_data") return { value: this.donneesUtilisateur.get(String(e.key)) ?? null };
		if (t === "frontend/set_user_data") {
			this.donneesUtilisateur.set(String(e.key), e.value);
			for (let t of this.abonnes.get(String(e.key)) ?? []) t({ value: e.value });
			return null;
		}
		return t === "config/device_registry/update" || t === "config/entity_registry/update" ? this.ranger(e) : t === "recorder/statistics_during_period" ? this.statistiques(e) : t === "recorder/statistic_during_period" ? this.variation(String(e.statistic_id)) : t === "history/history_during_period" ? this.historique(e) : t === "energy/get_prefs" || t === "energy/info" ? {} : null;
	}
	ranger(e) {
		let t = e.area_id ?? null;
		if (e.device_id) {
			let n = String(e.device_id);
			this.publier(this.hass.states, { devices: {
				...this.hass.devices,
				[n]: {
					...this.hass.devices[n],
					area_id: t
				}
			} });
		} else {
			let n = String(e.entity_id);
			this.publier(this.hass.states, { entities: {
				...this.hass.entities,
				[n]: {
					...this.hass.entities[n],
					area_id: t
				}
			} });
		}
		return {};
	}
	valeurA(e, t) {
		let n = this.hass.states[e], r = Number.parseFloat(n?.state ?? "") || 0, i = n?.attributes.device_class, a = ra(e), o = new Date(t).getHours() + new Date(t).getMinutes() / 60, s = Math.sin((o - 10) / 24 * 2 * Math.PI), c = Math.sin(t / 9e5 + a * 40) * .5 + Math.sin(t / 27e5 + a * 13) * .5, l = Math.sin(((/* @__PURE__ */ new Date()).getHours() + (/* @__PURE__ */ new Date()).getMinutes() / 60 - 10) / 24 * 2 * Math.PI);
		return i === "temperature" ? r + (/ext|outdoor|outside|dehors/i.test(e) ? 4 : .7) * (s - l) + c * .15 : i === "humidity" ? r + 4 * (l - s) + c : i === "power" ? Math.max(0, r * (.75 + .35 * (c + 1)) + (o > 18 && o < 22 ? r * .6 : 0)) : r + c;
	}
	statistiques(e) {
		let t = new Date(String(e.start_time)).getTime(), n = e.end_time ? new Date(String(e.end_time)).getTime() : Date.now(), r = {
			"5minute": 5 * Q,
			hour: 60 * Q,
			day: $,
			week: 7 * $,
			month: 30 * $
		}[String(e.period)] ?? 60 * Q, i = e.types ?? ["mean"], a = {};
		for (let o of e.statistic_ids ?? []) {
			let e = [], s = this.hass.states[o]?.attributes.device_class === "energy" || /energ|cout|cost|monetary/i.test(o);
			for (let a = Math.ceil(t / r) * r; a < Math.min(n, Date.now()); a += r) {
				let t = {
					start: a,
					end: a + r
				};
				if (s) t.change = (7.5 + 4 * ra(`${o}${Math.floor(a / $)}`) + ([0, 6].includes(new Date(a).getDay()) ? 2 : 0)) * r / $ * (/cout|cost|monetary/i.test(o) ? .25 : 1);
				else {
					let e = this.valeurA(o, a);
					i.includes("mean") && (t.mean = e), i.includes("min") && (t.min = e - (r >= $ ? 2.5 : .2)), i.includes("max") && (t.max = e + (r >= $ ? 2.5 : .2));
				}
				e.push(t);
			}
			a[o] = e;
		}
		return a;
	}
	variation(e) {
		let t = (/* @__PURE__ */ new Date()).getHours() + (/* @__PURE__ */ new Date()).getMinutes() / 60;
		return { change: Math.round((8.5 + 3 * ra(e)) * (t / 24) * 100) / 100 };
	}
	historique(e) {
		let t = new Date(String(e.start_time)).getTime(), n = e.end_time ? new Date(String(e.end_time)).getTime() : Date.now(), r = {};
		for (let i of e.entity_ids ?? []) {
			let e = [{
				s: "off",
				lu: t / 1e3
			}];
			for (let r = Math.floor(t / $) * $; r < n; r += $) {
				let a = 1 + Math.floor(ra(`${i}${r}`) * 3);
				for (let o = 0; o < a; o++) {
					let a = r + (7 + o * 5 + ra(`${i}${r}${o}`) * 3) * 60 * Q;
					a > t && a + 20 * Q < n && e.push({
						s: "on",
						lu: a / 1e3
					}, {
						s: "off",
						lu: (a + 20 * Q) / 1e3
					});
				}
			}
			r[i] = e;
		}
		return r;
	}
}, ua = () => window.matchMedia("(prefers-color-scheme: dark)").matches, da = class extends E {
	static {
		this.properties = {
			_vue: { state: !0 },
			_colonnes: { state: !0 },
			_message: { state: !0 },
			_hass: { state: !0 }
		};
	}
	constructor() {
		super(), this.langue = document.documentElement.lang.startsWith("fr") ? "fr" : "en", this.maison = new la(this.langue, ua), this.vues = [], this.registres = [], this.cartes = /* @__PURE__ */ new Map(), this.infos = (e) => {
			e.stopPropagation();
			let t = this._hass.states[e.detail?.entityId ?? ""];
			t && this.dire(Fi[this.langue].plusDInfos(String(t.attributes.friendly_name ?? t.entity_id), this._hass.formatEntityState?.(t) ?? t.state));
		}, this._vue = "accueil", this._colonnes = 3, this._message = "", this._hass = this.maison.hass, zi(this.maison.journal), this.maison.suivre((e) => {
			this._hass = e, this.construire();
		});
	}
	static {
		this.styles = [a(Xi), o`
    :host{display:block}
    .ad-demo{--card-background-color:var(--ha-card-background, #fff);--divider-color:rgba(11,30,45,.1);
      font-family:var(--ha-font-family-body, Inter, sans-serif);color:var(--primary-text-color);background:var(--primary-background-color);
      border-radius:28px;border:1px solid var(--divider-color);overflow:hidden}
    @media (prefers-color-scheme: dark){.ad-demo{--divider-color:rgba(238,244,249,.12)}}
    .barre{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:14px 18px;border-bottom:1px solid var(--divider-color);background:var(--card-background-color)}
    .barre strong{font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--primary-color);margin-right:6px}
    .barre button{font:inherit;font-size:13.5px;font-weight:600;height:34px;padding:0 14px;border-radius:17px;border:1px solid var(--divider-color);
      background:var(--secondary-background-color);color:var(--primary-text-color);cursor:pointer}
    .barre button[aria-pressed="true"]{background:var(--primary-color);border-color:var(--primary-color);color:var(--text-primary-color, #fff)}
    .barre .remettre{background:none;color:var(--secondary-text-color)}
    .gestes{display:flex;flex-wrap:wrap;gap:8px}
    /* Sur téléphone, les gestes défilent sur une ligne pour laisser la place au tableau. */
    @media (max-width: 640px){.gestes{flex-wrap:nowrap;overflow-x:auto;margin:0 -18px;padding:0 18px 4px;scrollbar-width:none}.gestes button{flex:none}}
    .aide{flex-basis:100%;margin:2px 0 0;font-size:13px;color:var(--secondary-text-color)}
    .vue{padding:20px clamp(12px,3vw,28px) 28px;min-height:420px}
    .retour{display:inline-flex;align-items:center;gap:6px;margin:0 0 10px;font:inherit;font-size:14px;font-weight:600;border:0;background:none;color:var(--primary-color);cursor:pointer;padding:0}
    .entete{display:grid;gap:12px;margin-bottom:16px}
    .pastilles{display:flex;flex-wrap:wrap;gap:8px}
    .colonnes{display:grid;gap:16px;align-items:start}
    .colonnes.trois{grid-template-columns:2fr 1fr}
    .pile{display:grid;gap:16px;align-content:start}
    .section{display:grid;grid-template-columns:repeat(var(--cases),minmax(0,1fr));grid-auto-rows:minmax(56px,auto);gap:8px}
    .section > *{min-width:0}
    .message{position:sticky;bottom:12px;margin:12px auto 0;max-width:560px;padding:10px 16px;border-radius:14px;font-size:13.5px;
      background:var(--primary-text-color);color:var(--primary-background-color);box-shadow:0 10px 30px rgba(0,0,0,.2)}
  `];
	}
	connectedCallback() {
		super.connectedCallback(), window.__automaticDashboardNaviguer = (e) => this.aller(e), this.addEventListener("hass-more-info", this.infos), this.observateur = new ResizeObserver(([e]) => {
			let t = e.contentRect.width;
			this._colonnes = t >= 1e3 ? 3 : t >= 640 ? 2 : 1;
		}), this.observateur.observe(this), this.minuterie = window.setInterval(() => this.maison.mettreLeSoleil(), 3e5), this.construire();
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.observateur?.disconnect(), window.clearInterval(this.minuterie);
	}
	async construire() {
		let e = this._hass, t = [
			e.entities,
			e.devices,
			e.areas,
			e.floors
		];
		(!this.vues.length || t.some((e, t) => e !== this.registres[t])) && (this.registres = t, this.vues = (await ta({}, e)).views, this.cartes.clear());
		for (let t of this.cartes.values()) t.hass = e;
		this.requestUpdate();
	}
	aller(e) {
		let t = e.replace(/^\/[^/]+\//, "").replace(/^\//, "").split("?")[0];
		this.vues.some((e) => e.path === t) && t !== "tablette" ? (this._vue = t, this.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})) : this.dire(Fi[this.langue].ailleurs(t.split("/").pop() || t));
	}
	dire(e) {
		this._message = e, window.setTimeout(() => {
			this._message === e && (this._message = "");
		}, 4500);
	}
	carte(e, t) {
		let n = this.cartes.get(e);
		if (n) return n;
		let r = String(t.type), i = r.startsWith("custom:") ? r.slice(7) : Ji[r];
		if (!i || !customElements.get(i)) return null;
		let a = document.createElement(i);
		return a.setConfig?.(t), a.hass = this._hass, this.cartes.set(e, a), a;
	}
	visible(e) {
		return (e ?? []).every((e) => e.condition !== "view_columns" || (e.min === void 0 || this._colonnes >= Number(e.min)) && (e.max === void 0 || this._colonnes <= Number(e.max)));
	}
	section(e, t, n) {
		return this.visible(t.visibility) ? S`<div class="section" ${D({ "--cases": String(n) })}>${t.cards.map((t, r) => {
			if (!this.visible(t.visibility)) return T;
			let i = this.carte(`${e}/${r}`, t);
			if (!i) return T;
			let a = {
				...i.getGridOptions?.(),
				...t.grid_options
			}, o = a.columns === "full" || !a.columns ? n : Math.min(n, Number(a.columns)), s = typeof a.rows == "number" ? `span ${a.rows}` : "auto";
			return S`<div ${D({
				gridColumn: `span ${o}`,
				gridRow: s
			})}>${i}</div>`;
		})}</div>` : T;
	}
	render() {
		let e = Fi[this.langue], t = this.vues.find((e) => e.path === this._vue) ?? this.vues[0];
		if (!t) return S`<div class="ad-demo"><div class="vue"></div></div>`;
		let n = this._hass, r = Math.min(this._colonnes, t.max_columns ?? 3), i = (e) => 12 * Math.max(1, Math.min(e.column_span ?? 1, r)), a = S`<div class="pile">${(t.sections ?? []).map((e, n) => this.section(`${t.path}/s${n}`, e, i(e)))}</div>`, o = t.sidebar && this.visible(t.sidebar.visibility) ? S`<div class="pile">${t.sidebar.sections.map((e, n) => this.section(`${t.path}/c${n}`, e, 12))}</div>` : T, s = t.header?.card, c = t.badges ?? [];
		return S`<div class="ad-demo">
      <div class="barre"><strong>${e.essayez}</strong>
        <div class="gestes">${this.scenarios(n)}<button class="remettre" @click=${() => this.maison.remettre()}>${e.remettre}</button></div>
        <p class="aide">${e.aide}</p></div>
      <div class="vue">
        ${t.path === "accueil" ? T : S`<button class="retour" @click=${() => this._vue = "accueil"}><ha-icon icon="mdi:arrow-left"></ha-icon>${e.retour}</button>`}
        <div class="entete">${s ? this.carte(`${t.path}/entete`, s) : T}
          ${c.length ? S`<div class="pastilles">${c.map((e, n) => this.carte(`${t.path}/b${n}`, e))}</div>` : T}</div>
        <div class="colonnes ${o !== T && r >= 3 ? "trois" : ""}">${a}${o}</div>
        ${this._message ? S`<div class="message" role="status">${this._message}</div>` : T}
      </div></div>`;
	}
	scenarios(e) {
		let t = Fi[this.langue].scenarios, n = this.maison, r = Object.keys(e.states).filter((e) => e.startsWith("light.")), i = (t) => e.states[t]?.state;
		return [
			[
				"fenetre",
				i("binary_sensor.fenetre_du_salon") === "on",
				() => n.changer("binary_sensor.fenetre_du_salon", i("binary_sensor.fenetre_du_salon") === "on" ? "off" : "on")
			],
			[
				"fuite",
				i("binary_sensor.basement_floor_wet") === "on",
				() => n.changer("binary_sensor.basement_floor_wet", i("binary_sensor.basement_floor_wet") === "on" ? "off" : "on")
			],
			[
				"depart",
				i("person.antonin_essai") === "not_home" && i("person.camille") === "not_home",
				() => {
					let e = i("person.antonin_essai") === "not_home" && i("person.camille") === "not_home";
					for (let t of ["person.antonin_essai", "person.camille"]) n.changer(t, e ? "home" : "not_home");
				}
			],
			[
				"chaleur",
				Number(i("sensor.outside_temperature")) >= 30,
				() => {
					let t = Number(i("sensor.outside_temperature")) >= 30, r = (e) => n.etatDeDepart(e);
					if (t) {
						n.changer("sensor.outside_temperature", r("sensor.outside_temperature"));
						for (let t of Object.keys(e.states).filter((e) => e.startsWith("sensor.temperature_"))) n.changer(t, r(t));
						n.mettreLeSoleil();
					} else {
						n.changer("sun.sun", "above_horizon"), n.changer("sensor.outside_temperature", "33.5");
						for (let t of Object.keys(e.states).filter((e) => e.startsWith("sensor.temperature_"))) n.changer(t, String(Number(r(t)) + 6));
					}
				}
			],
			[
				"lumieres",
				r.every((e) => i(e) === "on"),
				() => {
					let e = r.every((e) => i(e) === "on");
					for (let t of r) n.changer(t, e ? "off" : "on");
				}
			]
		].map(([e, n, r]) => S`<button aria-pressed=${n ? "true" : "false"} @click=${r}>${t[e][+!!n]}</button>`);
	}
};
Pi(), Yi();
for (let [e, t] of Oi) customElements.get(e) || customElements.define(e, t);
customElements.get("automatic-dashboard-demo") || customElements.define("automatic-dashboard-demo", da);
